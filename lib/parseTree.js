'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParseTree = function () {
  function ParseTree(lines) {
    _classCallCheck(this, ParseTree);

    this.lines = lines;
  }

  _createClass(ParseTree, [{
    key: 'clone',
    value: function clone() {
      var lines = this.lines.slice(0),
          ///
      parseTree = new ParseTree(lines);

      return parseTree;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var linesLength = this.lines.length,
          width = undefined;

      if (linesLength === 0) {
        width = 0;
      } else {
        var lastLine = last(this.lines),
            lastLineLength = lastLine.length;

        width = lastLineLength; ///
      }

      return width;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      var linesLength = this.lines.length,
          depth = linesLength; ///

      return depth;
    }
  }, {
    key: 'forEachLine',
    value: function forEachLine(cb) {
      this.lines.forEach(cb);
    }
  }, {
    key: 'appendToTop',
    value: function appendToTop(parseTree) {
      parseTree.forEachLine(function (line) {
        this.lines.unshift(line);
      }.bind(this));
    }
  }, {
    key: 'appendToLeft',
    value: function appendToLeft(parseTree) {
      parseTree.forEachLine(function (line, index) {
        this.lines[index] = line + this.lines[index];
      }.bind(this));
    }
  }, {
    key: 'appendToRight',
    value: function appendToRight(parseTree) {
      parseTree.forEachLine(function (line, index) {
        this.lines[index] = this.lines[index] + line;
      }.bind(this));
    }
  }, {
    key: 'appendToBottom',
    value: function appendToBottom(parseTree) {
      parseTree.forEachLine(function (line) {
        this.lines.push(line);
      }.bind(this));
    }
  }, {
    key: 'addTopMargin',
    value: function addTopMargin(topMarginDepth) {
      var width = this.getWidth(),
          topMarginWidth = width,
          ///
      topMarginStr = marginStrFromMarginWidth(topMarginWidth);

      for (var index = 0; index < topMarginDepth; index++) {
        this.lines.unshift(topMarginStr);
      }
    }
  }, {
    key: 'addLeftMargin',
    value: function addLeftMargin(leftMarginWidth) {
      var leftMarginStr = marginStrFromMarginWidth(leftMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = leftMarginStr + this.lines[index];
      }
    }
  }, {
    key: 'addRightMargin',
    value: function addRightMargin(rightMarginWidth) {
      var rightMarginStr = marginStrFromMarginWidth(rightMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = this.lines[index] + rightMarginStr;
      }
    }
  }, {
    key: 'addBottomMargin',
    value: function addBottomMargin(bottomMarginDepth) {
      var width = this.getWidth(),
          bottomMarginWidth = width,
          ///
      bottomMarginStr = marginStrFromMarginWidth(bottomMarginWidth);

      for (var index = 0; index < bottomMarginDepth; index++) {
        this.lines.push(bottomMarginStr);
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      var str = this.lines.reduce(function (str, line) {
        str += line + '\n';

        return str;
      }, '');

      return str;
    }
  }], [{
    key: 'fromString',
    value: function fromString(str) {
      var line = str,
          ///
      lines = [line],
          parseTree = new ParseTree(lines);

      return parseTree;
    }
  }, {
    key: 'emptyParseTreeFromDepth',
    value: function emptyParseTreeFromDepth(depth) {
      var lines = [],
          index = 0;

      while (index < depth) {
        lines[index++] = '';
      }

      var emptyParseTree = new ParseTree(lines);

      return emptyParseTree;
    }
  }, {
    key: 'verticalBranchParseTreeFromWidth',
    value: function verticalBranchParseTreeFromWidth(width) {
      var leftMarginWidth = Math.floor(width / 2),
          verticalBranchStr = '|',
          verticalBranchStrLength = verticalBranchStr.length,
          rightMarginWidth = width - leftMarginWidth - verticalBranchStrLength,
          verticalBranchParseTree = ParseTree.fromString(verticalBranchStr);

      verticalBranchParseTree.addLeftMargin(leftMarginWidth);
      verticalBranchParseTree.addRightMargin(rightMarginWidth);

      return verticalBranchParseTree;
    }
  }, {
    key: 'fromProductionName',
    value: function fromProductionName(productionName) {
      var str = productionName,
          ///
      parseTree = ParseTree.fromString(str),
          parseTreeWidth = parseTree.getWidth(),
          verticalBranchParseTree = ParseTree.verticalBranchParseTreeFromWidth(parseTreeWidth);

      parseTree.appendToTop(verticalBranchParseTree);
      parseTree.appendToBottom(verticalBranchParseTree);

      return parseTree;
    }
  }, {
    key: 'fromChildNodes',
    value: function fromChildNodes(childNodes) {
      var childParseTrees = childNodes.map(function (childNode) {
        var childParseTree = childNode.getParseTree();

        return childParseTree;
      }),
          childParseTreesLength = childParseTrees.length,
          childParseTreesDepth = childParseTrees.reduce(function (childParseTreesDepth, childParseTree) {
        var childParseTreeDepth = childParseTree.getDepth();

        childParseTreesDepth = Math.max(childParseTreesDepth, childParseTreeDepth);

        return childParseTreesDepth;
      }, 0),
          emptyParseTree = ParseTree.emptyParseTreeFromDepth(childParseTreesDepth),
          parseTree = emptyParseTree; ///

      childParseTrees.forEach(function (childParseTree, index) {
        var childParseTreeDepth = childParseTree.getDepth(),
            clonedChildParseTree = childParseTree.clone(),
            lastChildParseTree = index === childParseTreesLength - 1;

        if (!lastChildParseTree) {
          var rightMarginWidth = 1;

          clonedChildParseTree.addRightMargin(rightMarginWidth);
        }

        if (childParseTreeDepth < childParseTreesDepth) {
          var bottomMarginDepth = childParseTreesDepth - childParseTreeDepth;

          clonedChildParseTree.addBottomMargin(bottomMarginDepth);
        }

        parseTree.appendToRight(clonedChildParseTree);
      });

      return parseTree;
    }
  }, {
    key: 'fromTerminalNode',
    value: function fromTerminalNode(terminalNode) {
      var str = terminalNode.getString(),
          parseTree = ParseTree.fromString(str),
          parseTreeWidth = parseTree.getWidth(),
          verticalBranchParseTree = ParseTree.verticalBranchParseTreeFromWidth(parseTreeWidth);

      parseTree.appendToTop(verticalBranchParseTree);

      return parseTree;
    }
  }, {
    key: 'fromNonTerminalNode',
    value: function fromNonTerminalNode(nonTerminalNode) {
      var productionName = nonTerminalNode.getProductionName(),
          childNodes = nonTerminalNode.getChildNodes(),
          productionNameParseTree = ParseTree.fromProductionName(productionName),
          childParseTreesParseTree = ParseTree.fromChildNodes(childNodes);

      var parseTree = productionNameParseTree,
          ///
      parseTreeWidth = parseTree.getWidth(),
          childParseTreesParseTreeWidth = childParseTreesParseTree.getWidth(),
          differenceInWidths = Math.abs(parseTreeWidth - childParseTreesParseTreeWidth),
          leftMarginWidth = Math.floor(differenceInWidths / 2),
          rightMarginWidth = Math.ceil(differenceInWidths / 2);

      if (false) {} else if (parseTreeWidth < childParseTreesParseTreeWidth) {
        parseTree.addLeftMargin(leftMarginWidth);
        parseTree.addRightMargin(rightMarginWidth);
      } else if (childParseTreesParseTreeWidth < parseTreeWidth) {
        childParseTreesParseTree.addLeftMargin(leftMarginWidth);
        childParseTreesParseTree.addRightMargin(rightMarginWidth);
      }

      parseTree.appendToBottom(childParseTreesParseTree);

      return parseTree;
    }
  }]);

  return ParseTree;
}();

module.exports = ParseTree;

function last(array) {
  return array[array.length - 1];
}

function marginStrFromMarginWidth(marginWidth, spaceCharacter) {
  var marginStr = '';

  spaceCharacter = spaceCharacter || ' ';

  for (var index = 0; index < marginWidth; index++) {
    marginStr += spaceCharacter;
  }

  return marginStr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZVRyZWUuanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwibGluZXMiLCJzbGljZSIsInBhcnNlVHJlZSIsImxpbmVzTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJsYXN0TGluZSIsImxhc3QiLCJsYXN0TGluZUxlbmd0aCIsImRlcHRoIiwiY2IiLCJmb3JFYWNoIiwiZm9yRWFjaExpbmUiLCJsaW5lIiwidW5zaGlmdCIsImJpbmQiLCJpbmRleCIsInB1c2giLCJ0b3BNYXJnaW5EZXB0aCIsImdldFdpZHRoIiwidG9wTWFyZ2luV2lkdGgiLCJ0b3BNYXJnaW5TdHIiLCJtYXJnaW5TdHJGcm9tTWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luU3RyIiwicmlnaHRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luU3RyIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJib3R0b21NYXJnaW5XaWR0aCIsImJvdHRvbU1hcmdpblN0ciIsInN0ciIsInJlZHVjZSIsImVtcHR5UGFyc2VUcmVlIiwiTWF0aCIsImZsb29yIiwidmVydGljYWxCcmFuY2hTdHIiLCJ2ZXJ0aWNhbEJyYW5jaFN0ckxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVN0cmluZyIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsInByb2R1Y3Rpb25OYW1lIiwicGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZUZyb21XaWR0aCIsImFwcGVuZFRvVG9wIiwiYXBwZW5kVG9Cb3R0b20iLCJjaGlsZE5vZGVzIiwiY2hpbGRQYXJzZVRyZWVzIiwibWFwIiwiY2hpbGROb2RlIiwiY2hpbGRQYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJjaGlsZFBhcnNlVHJlZXNMZW5ndGgiLCJjaGlsZFBhcnNlVHJlZXNEZXB0aCIsImNoaWxkUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsIm1heCIsImVtcHR5UGFyc2VUcmVlRnJvbURlcHRoIiwiY2xvbmVkQ2hpbGRQYXJzZVRyZWUiLCJjbG9uZSIsImxhc3RDaGlsZFBhcnNlVHJlZSIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJ0ZXJtaW5hbE5vZGUiLCJnZXRTdHJpbmciLCJub25UZXJtaW5hbE5vZGUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsImdldENoaWxkTm9kZXMiLCJwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSIsImZyb21Qcm9kdWN0aW9uTmFtZSIsImNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZSIsImZyb21DaGlsZE5vZGVzIiwiY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlV2lkdGgiLCJkaWZmZXJlbmNlSW5XaWR0aHMiLCJhYnMiLCJjZWlsIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5IiwibWFyZ2luV2lkdGgiLCJzcGFjZUNoYXJhY3RlciIsIm1hcmdpblN0ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxTO0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU87QUFDTixVQUFJQSxRQUFRLEtBQUtBLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQixDQUFqQixDQUFaO0FBQUEsVUFBa0M7QUFDOUJDLGtCQUFZLElBQUlILFNBQUosQ0FBY0MsS0FBZCxDQURoQjs7QUFHQSxhQUFPRSxTQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUlDLGNBQWMsS0FBS0gsS0FBTCxDQUFXSSxNQUE3QjtBQUFBLFVBQ0lDLFFBQVFDLFNBRFo7O0FBR0EsVUFBSUgsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCRSxnQkFBUSxDQUFSO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSUUsV0FBV0MsS0FBSyxLQUFLUixLQUFWLENBQWY7QUFBQSxZQUNJUyxpQkFBaUJGLFNBQVNILE1BRDlCOztBQUdBQyxnQkFBUUksY0FBUixDQUpLLENBSW1CO0FBQ3pCOztBQUVELGFBQU9KLEtB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LENBSHpCO0FBQUEsVUFJSWpELGtCQUFrQlUsS0FBS0MsS0FBTCxDQUFXdUMscUJBQW1CLENBQTlCLENBSnRCO0FBQUEsVUFLSWhELG1CQUFtQlEsS0FBSzBDLElBQUwsQ0FBVUYscUJBQW1CLENBQTdCLENBTHZCOztBQU9BLFVBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUkvQixpQkFBaUI4Qiw2QkFBckIsRUFBb0Q7QUFDekR2RSxrQkFBVXNDLGFBQVYsQ0FBd0JoQixlQUF4QjtBQUNBdEIsa0JBQVV1QyxjQUFWLENBQXlCZixnQkFBekI7QUFDRCxPQUhNLE1BR0EsSUFBSStDLGdDQUFnQzlCLGNBQXBDLEVBQW9EO0FBQ3pENEIsaUNBQXlCL0IsYUFBekIsQ0FBdUNoQixlQUF2QztBQUNBK0MsaUNBQXlCOUIsY0FBekIsQ0FBd0NmLGdCQUF4QztBQUNEOztBQUVEeEIsZ0JBQVU0QyxjQUFWLENBQXlCeUIsd0JBQXpCOztBQUVBLGFBQU9yRSxTQUFQO0FBQ0Q7Ozs7OztBQUdIMkUsT0FBT0MsT0FBUCxHQUFpQi9FLFNBQWpCOztBQUVBLFNBQVNTLElBQVQsQ0FBY3VFLEtBQWQsRUFBcUI7QUFBRSxTQUFPQSxNQUFNQSxNQUFNM0UsTUFBTixHQUFlLENBQXJCLENBQVA7QUFBaUM7O0FBRXhELFNBQVNtQix3QkFBVCxDQUFrQ3lELFdBQWxDLEVBQStDQyxjQUEvQyxFQUErRDtBQUM3RCxNQUFJQyxZQUFZLEVBQWhCOztBQUVBRCxtQkFBaUJBLGtCQUFrQixHQUFuQzs7QUFFQSxPQUFLLElBQUloRSxRQUFRLENBQWpCLEVBQW9CQSxRQUFRK0QsV0FBNUIsRUFBeUMvRCxPQUF6QyxFQUFrRDtBQUNoRGlFLGlCQUFhRCxjQUFiO0FBQ0Q7O0FBRUQsU0FBT0MsU0FBUDtBQUNEIiwiZmlsZSI6InBhcnNlVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMpIHtcbiAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICB2YXIgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKDApLCAgLy8vXG4gICAgICAgIHBhcnNlVHJlZSA9IG5ldyBQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHZhciBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICB3aWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICAgIGxhc3RMaW5lTGVuZ3RoID0gbGFzdExpbmUubGVuZ3RoO1xuXG4gICAgICB3aWR0aCA9IGxhc3RMaW5lTGVuZ3RoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICB2YXIgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2IpIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2IpO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9MZWZ0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgbGluZTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkVG9wTWFyZ2luKHRvcE1hcmdpbkRlcHRoKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICB0b3BNYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgIHRvcE1hcmdpblN0ciA9IG1hcmdpblN0ckZyb21NYXJnaW5XaWR0aCh0b3BNYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdG9wTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdCh0b3BNYXJnaW5TdHIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKSB7XG4gICAgdmFyIGxlZnRNYXJnaW5TdHIgPSBtYXJnaW5TdHJGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsZWZ0TWFyZ2luU3RyICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfVxuICB9XG5cbiAgYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCkge1xuICAgIHZhciByaWdodE1hcmdpblN0ciA9IG1hcmdpblN0ckZyb21NYXJnaW5XaWR0aChyaWdodE1hcmdpbldpZHRoKSxcbiAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgYm90dG9tTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICBib3R0b21NYXJnaW5TdHIgPSBtYXJnaW5TdHJGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyKTtcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5saW5lcy5yZWR1Y2UoZnVuY3Rpb24oc3RyLCBsaW5lKSB7XG4gICAgICBzdHIgKz0gbGluZSArICdcXG4nO1xuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHIpIHtcbiAgICB2YXIgbGluZSA9IHN0ciwgLy8vXG4gICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZW1wdHlQYXJzZVRyZWVGcm9tRGVwdGgoZGVwdGgpIHtcbiAgICB2YXIgbGluZXMgPSBbXSxcbiAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgZGVwdGgpIHtcbiAgICAgIGxpbmVzW2luZGV4KytdID0gJyc7XG4gICAgfVxuXG4gICAgdmFyIGVtcHR5UGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gZW1wdHlQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVGcm9tV2lkdGgod2lkdGgpIHtcbiAgICB2YXIgbGVmdE1hcmdpbldpZHRoID0gTWF0aC5mbG9vcih3aWR0aC8yKSxcbiAgICAgICAgdmVydGljYWxCcmFuY2hTdHIgPSAnfCcsXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoU3RyTGVuZ3RoID0gdmVydGljYWxCcmFuY2hTdHIubGVuZ3RoLFxuICAgICAgICByaWdodE1hcmdpbldpZHRoID0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGggLSB2ZXJ0aWNhbEJyYW5jaFN0ckxlbmd0aCxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBQYXJzZVRyZWUuZnJvbVN0cmluZyh2ZXJ0aWNhbEJyYW5jaFN0cik7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIHN0ciA9IHByb2R1Y3Rpb25OYW1lLCAvLy9cbiAgICAgICAgcGFyc2VUcmVlID0gUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyKSxcbiAgICAgICAgcGFyc2VUcmVlV2lkdGggPSBwYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBQYXJzZVRyZWUudmVydGljYWxCcmFuY2hQYXJzZVRyZWVGcm9tV2lkdGgocGFyc2VUcmVlV2lkdGgpO1xuXG4gICAgcGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICBwYXJzZVRyZWUuYXBwZW5kVG9Cb3R0b20odmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdmFyIGNoaWxkUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgICAgIHZhciBjaGlsZFBhcnNlVHJlZSA9IGNoaWxkTm9kZS5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgICAgIHJldHVybiBjaGlsZFBhcnNlVHJlZTtcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkUGFyc2VUcmVlc0xlbmd0aCA9IGNoaWxkUGFyc2VUcmVlcy5sZW5ndGgsXG4gICAgICAgIGNoaWxkUGFyc2VUcmVlc0RlcHRoID0gY2hpbGRQYXJzZVRyZWVzLnJlZHVjZShmdW5jdGlvbihjaGlsZFBhcnNlVHJlZXNEZXB0aCwgY2hpbGRQYXJzZVRyZWUpIHtcbiAgICAgICAgICB2YXIgY2hpbGRQYXJzZVRyZWVEZXB0aCA9IGNoaWxkUGFyc2VUcmVlLmdldERlcHRoKCk7XG5cbiAgICAgICAgICBjaGlsZFBhcnNlVHJlZXNEZXB0aCA9IE1hdGgubWF4KGNoaWxkUGFyc2VUcmVlc0RlcHRoLCBjaGlsZFBhcnNlVHJlZURlcHRoKTtcblxuICAgICAgICAgIHJldHVybiBjaGlsZFBhcnNlVHJlZXNEZXB0aDtcbiAgICAgICAgfSwgMCksXG4gICAgICAgIGVtcHR5UGFyc2VUcmVlID0gUGFyc2VUcmVlLmVtcHR5UGFyc2VUcmVlRnJvbURlcHRoKGNoaWxkUGFyc2VUcmVlc0RlcHRoKSxcbiAgICAgICAgcGFyc2VUcmVlID0gZW1wdHlQYXJzZVRyZWU7IC8vL1xuXG4gICAgY2hpbGRQYXJzZVRyZWVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRQYXJzZVRyZWUsIGluZGV4KSB7XG4gICAgICB2YXIgY2hpbGRQYXJzZVRyZWVEZXB0aCA9IGNoaWxkUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgY2xvbmVkQ2hpbGRQYXJzZVRyZWUgPSBjaGlsZFBhcnNlVHJlZS5jbG9uZSgpLFxuICAgICAgICAgIGxhc3RDaGlsZFBhcnNlVHJlZSA9IChpbmRleCA9PT0gY2hpbGRQYXJzZVRyZWVzTGVuZ3RoIC0gMSk7XG5cbiAgICAgIGlmICghbGFzdENoaWxkUGFyc2VUcmVlKSB7XG4gICAgICAgIHZhciByaWdodE1hcmdpbldpZHRoID0gMTtcblxuICAgICAgICBjbG9uZWRDaGlsZFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkUGFyc2VUcmVlRGVwdGggPCBjaGlsZFBhcnNlVHJlZXNEZXB0aCkge1xuICAgICAgICB2YXIgYm90dG9tTWFyZ2luRGVwdGggPSBjaGlsZFBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkUGFyc2VUcmVlRGVwdGg7XG5cbiAgICAgICAgY2xvbmVkQ2hpbGRQYXJzZVRyZWUuYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGRQYXJzZVRyZWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKSB7XG4gICAgdmFyIHN0ciA9IHRlcm1pbmFsTm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgcGFyc2VUcmVlID0gUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyKSxcbiAgICAgICAgcGFyc2VUcmVlV2lkdGggPSBwYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBQYXJzZVRyZWUudmVydGljYWxCcmFuY2hQYXJzZVRyZWVGcm9tV2lkdGgocGFyc2VUcmVlV2lkdGgpXG5cbiAgICBwYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSkge1xuICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBQYXJzZVRyZWUuZnJvbVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlID0gUGFyc2VUcmVlLmZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpO1xuXG4gICAgdmFyIHBhcnNlVHJlZSA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLCAgLy8vXG4gICAgICAgIHBhcnNlVHJlZVdpZHRoID0gcGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgIGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZVdpZHRoID0gY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgIGRpZmZlcmVuY2VJbldpZHRocyA9IE1hdGguYWJzKHBhcnNlVHJlZVdpZHRoIC0gY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKGRpZmZlcmVuY2VJbldpZHRocy8yKSxcbiAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IE1hdGguY2VpbChkaWZmZXJlbmNlSW5XaWR0aHMvMik7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAocGFyc2VUcmVlV2lkdGggPCBjaGlsZFBhcnNlVHJlZXNQYXJzZVRyZWVXaWR0aCkge1xuICAgICAgcGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgIHBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZVdpZHRoIDwgcGFyc2VUcmVlV2lkdGgpIHtcbiAgICAgIGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICBjaGlsZFBhcnNlVHJlZXNQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgcGFyc2VUcmVlLmFwcGVuZFRvQm90dG9tKGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5mdW5jdGlvbiBtYXJnaW5TdHJGcm9tTWFyZ2luV2lkdGgobWFyZ2luV2lkdGgsIHNwYWNlQ2hhcmFjdGVyKSB7XG4gIHZhciBtYXJnaW5TdHIgPSAnJztcblxuICBzcGFjZUNoYXJhY3RlciA9IHNwYWNlQ2hhcmFjdGVyIHx8ICcgJztcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHIgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyO1xufVxuIl19