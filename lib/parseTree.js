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
      var line = str + ' ',
          lines = [line],
          parseTree = new ParseTree(lines);

      return parseTree;
    }
  }, {
    key: 'fromDepth',
    value: function fromDepth(depth) {
      var lines = [],
          index = 0;

      while (index < depth) {
        lines[index++] = '';
      }

      var parseTree = new ParseTree(lines);

      return parseTree;
    }
  }, {
    key: 'fromProductionName',
    value: function fromProductionName(productionName) {
      var str = productionName,
          ///
      parseTree = ParseTree.fromString(str),
          parseTreeWidth = parseTree.getWidth(),
          leftMarginWidth = Math.floor(parseTreeWidth / 2),
          verticalBranchStr = '|',
          verticalBranchStrLength = verticalBranchStr.length,
          rightMarginWidth = parseTreeWidth - leftMarginWidth - verticalBranchStrLength,
          verticalBranchParseTree = ParseTree.fromString(verticalBranchStr);

      verticalBranchParseTree.addLeftMargin(leftMarginWidth);
      verticalBranchParseTree.addRightMargin(rightMarginWidth);

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
          childParseTreesDepth = childParseTrees.reduce(function (childParseTreesDepth, childParseTree) {
        var childParseTreeDepth = childParseTree.getDepth();

        childParseTreesDepth = Math.max(childParseTreesDepth, childParseTreeDepth);

        return childParseTreesDepth;
      }, 0),
          parseTree = ParseTree.fromDepth(childParseTreesDepth);

      childParseTrees.forEach(function (childParseTree) {
        var childParseTreeDepth = childParseTree.getDepth();

        if (childParseTreeDepth < childParseTreesDepth) {
          var clonedChildParseTree = childParseTree.clone(),
              bottomMarginDepth = childParseTreesDepth - childParseTreeDepth;

          clonedChildParseTree.addBottomMargin(bottomMarginDepth);
          parseTree.appendToRight(clonedChildParseTree);
        } else {
          parseTree.appendToRight(childParseTree);
        }
      });

      return parseTree;
    }
  }, {
    key: 'fromProductionNameAndChildNodes',
    value: function fromProductionNameAndChildNodes(productionName, childNodes) {
      var productionNameParseTree = ParseTree.fromProductionName(productionName),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZVRyZWUuanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwibGluZXMiLCJzbGljZSIsInBhcnNlVHJlZSIsImxpbmVzTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJsYXN0TGluZSIsImxhc3QiLCJsYXN0TGluZUxlbmd0aCIsImRlcHRoIiwiY2IiLCJmb3JFYWNoIiwiZm9yRWFjaExpbmUiLCJsaW5lIiwidW5zaGlmdCIsImJpbmQiLCJpbmRleCIsInB1c2giLCJ0b3BNYXJnaW5EZXB0aCIsImdldFdpZHRoIiwidG9wTWFyZ2luV2lkdGgiLCJ0b3BNYXJnaW5TdHIiLCJtYXJnaW5TdHJGcm9tTWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luU3RyIiwicmlnaHRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luU3RyIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJib3R0b21NYXJnaW5XaWR0aCIsImJvdHRvbU1hcmdpblN0ciIsInN0ciIsInJlZHVjZSIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbVN0cmluZyIsInBhcnNlVHJlZVdpZHRoIiwiTWF0aCIsImZsb29yIiwidmVydGljYWxCcmFuY2hTdHIiLCJ2ZXJ0aWNhbEJyYW5jaFN0ckxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiYWRkTGVmdE1hcmdpbiIsImFkZFJpZ2h0TWFyZ2luIiwiYXBwZW5kVG9Cb3R0b20iLCJjaGlsZE5vZGVzIiwiY2hpbGRQYXJzZVRyZWVzIiwibWFwIiwiY2hpbGROb2RlIiwiY2hpbGRQYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJjaGlsZFBhcnNlVHJlZXNEZXB0aCIsImNoaWxkUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsIm1heCIsImZyb21EZXB0aCIsImNsb25lZENoaWxkUGFyc2VUcmVlIiwiY2xvbmUiLCJhZGRCb3R0b21NYXJnaW4iLCJhcHBlbmRUb1JpZ2h0IiwicHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUiLCJmcm9tUHJvZHVjdGlvbk5hbWUiLCJjaGlsZFBhcnNlVHJlZXNQYXJzZVRyZWUiLCJmcm9tQ2hpbGROb2RlcyIsImNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZVdpZHRoIiwiZGlmZmVyZW5jZUluV2lkdGhzIiwiYWJzIiwiY2VpbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSIsIm1hcmdpbldpZHRoIiwic3BhY2VDaGFyYWN0ZXIiLCJtYXJnaW5TdHIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBSUEsUUFBUSxLQUFLQSxLQUFMLENBQVdDLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBWjtBQUFBLFVBQWtDO0FBQzlCQyxrQkFBWSxJQUFJSCxTQUFKLENBQWNDLEtBQWQsQ0FEaEI7O0FBR0EsYUFBT0UsU0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJQyxjQUFjLEtBQUtILEtBQUwsQ0FBV0ksTUFBN0I7QUFBQSxVQUNJQyxRQUFRQyxTQURaOztBQUdBLFVBQUlILGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQkUsZ0JBQVEsQ0FBUjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUlFLFdBQVdDLEtBQUssS0FBS1IsS0FBVixDQUFmO0FBQUEsWUFDSVMsaUJBQWlCRixTQUFTSCxNQUQ5Qjs7QUFHQUMsZ0JBQVFJLGNBQVIsQ0FKSyxDQUltQjtBQUN6Qjs7QUFFRCxhQUFPSixLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUlGLGNBQWMsS0FBS0gsS0FBTCxDQUFXSSxNQUE3QjtBQUFBLFVBQ0lNLFFBQVFQLFdBRFosQ0FEUyxDQUVpQjs7QUFFMUIsYUFBT08sS0FBUDtBQUNEOzs7Z0NBRVdDLEUsRUFBSTtBQUNkLFdBQUtYLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQkQsRUFBbkI7QUFDRDs7O2dDQUVXVCxTLEVBQVc7QUFDckJBLGdCQUFVVyxXQUFW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ZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBsaW5lcyA9IHRoaXMubGluZXMuc2xpY2UoMCksICAvLy9cbiAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgdmFyIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgIHdpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGxpbmVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB3aWR0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgbGFzdExpbmVMZW5ndGggPSBsYXN0TGluZS5sZW5ndGg7XG5cbiAgICAgIHdpZHRoID0gbGFzdExpbmVMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIHZhciBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYikge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYik7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0xlZnQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9SaWdodChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyBsaW5lO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRUb3BNYXJnaW4odG9wTWFyZ2luRGVwdGgpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgdG9wTWFyZ2luU3RyID0gbWFyZ2luU3RyRnJvbU1hcmdpbldpZHRoKHRvcE1hcmdpbldpZHRoKTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0b3BNYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KHRvcE1hcmdpblN0cik7XG4gICAgfVxuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICB2YXIgbGVmdE1hcmdpblN0ciA9IG1hcmdpblN0ckZyb21NYXJnaW5XaWR0aChsZWZ0TWFyZ2luV2lkdGgpLFxuICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHIgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgdmFyIHJpZ2h0TWFyZ2luU3RyID0gbWFyZ2luU3RyRnJvbU1hcmdpbldpZHRoKHJpZ2h0TWFyZ2luV2lkdGgpLFxuICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgcmlnaHRNYXJnaW5TdHI7XG4gICAgfVxuICB9XG5cbiAgYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBib3R0b21NYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgIGJvdHRvbU1hcmdpblN0ciA9IG1hcmdpblN0ckZyb21NYXJnaW5XaWR0aChib3R0b21NYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYm90dG9tTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChib3R0b21NYXJnaW5TdHIpO1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmxpbmVzLnJlZHVjZShmdW5jdGlvbihzdHIsIGxpbmUpIHtcbiAgICAgIHN0ciArPSBsaW5lICsgJ1xcbic7XG5cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cikge1xuICAgIHZhciBsaW5lID0gc3RyICsgJyAnLFxuICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG4gICAgXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVwdGgoZGVwdGgpIHtcbiAgICB2YXIgbGluZXMgPSBbXSxcbiAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgZGVwdGgpIHtcbiAgICAgIGxpbmVzW2luZGV4KytdID0gJyc7XG4gICAgfVxuXG4gICAgdmFyIHBhcnNlVHJlZSA9IG5ldyBQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgc3RyID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICBwYXJzZVRyZWUgPSBQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHIpLFxuICAgICAgICBwYXJzZVRyZWVXaWR0aCA9IHBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKHBhcnNlVHJlZVdpZHRoLzIpLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFN0ciA9ICd8JyxcbiAgICAgICAgdmVydGljYWxCcmFuY2hTdHJMZW5ndGggPSB2ZXJ0aWNhbEJyYW5jaFN0ci5sZW5ndGgsXG4gICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSBwYXJzZVRyZWVXaWR0aCAtIGxlZnRNYXJnaW5XaWR0aCAtIHZlcnRpY2FsQnJhbmNoU3RyTGVuZ3RoLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFBhcnNlVHJlZS5mcm9tU3RyaW5nKHZlcnRpY2FsQnJhbmNoU3RyKTtcblxuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgIHBhcnNlVHJlZS5hcHBlbmRUb0JvdHRvbSh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB2YXIgY2hpbGRQYXJzZVRyZWVzID0gY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICAgICAgdmFyIGNoaWxkUGFyc2VUcmVlID0gY2hpbGROb2RlLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIGNoaWxkUGFyc2VUcmVlO1xuICAgICAgICB9KSxcbiAgICAgICAgY2hpbGRQYXJzZVRyZWVzRGVwdGggPSBjaGlsZFBhcnNlVHJlZXMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkUGFyc2VUcmVlc0RlcHRoLCBjaGlsZFBhcnNlVHJlZSkge1xuICAgICAgICAgIHZhciBjaGlsZFBhcnNlVHJlZURlcHRoID0gY2hpbGRQYXJzZVRyZWUuZ2V0RGVwdGgoKTtcblxuICAgICAgICAgIGNoaWxkUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGRQYXJzZVRyZWVzRGVwdGgsIGNoaWxkUGFyc2VUcmVlRGVwdGgpO1xuXG4gICAgICAgICAgcmV0dXJuIGNoaWxkUGFyc2VUcmVlc0RlcHRoO1xuICAgICAgICB9LCAwKSxcbiAgICAgICAgcGFyc2VUcmVlID0gUGFyc2VUcmVlLmZyb21EZXB0aChjaGlsZFBhcnNlVHJlZXNEZXB0aCk7XG5cbiAgICBjaGlsZFBhcnNlVHJlZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZFBhcnNlVHJlZSkge1xuICAgICAgdmFyIGNoaWxkUGFyc2VUcmVlRGVwdGggPSBjaGlsZFBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICBpZiAoY2hpbGRQYXJzZVRyZWVEZXB0aCA8IGNoaWxkUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZFBhcnNlVHJlZSA9IGNoaWxkUGFyc2VUcmVlLmNsb25lKCksXG4gICAgICAgICAgICBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkUGFyc2VUcmVlc0RlcHRoIC0gY2hpbGRQYXJzZVRyZWVEZXB0aDtcblxuICAgICAgICBjbG9uZWRDaGlsZFBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgICBwYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjbG9uZWRDaGlsZFBhcnNlVHJlZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjaGlsZFBhcnNlVHJlZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB2YXIgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBQYXJzZVRyZWUuZnJvbVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlID0gUGFyc2VUcmVlLmZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpO1xuXG4gICAgdmFyIHBhcnNlVHJlZSA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLCAgLy8vXG4gICAgICAgIHBhcnNlVHJlZVdpZHRoID0gcGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgIGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZVdpZHRoID0gY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgIGRpZmZlcmVuY2VJbldpZHRocyA9IE1hdGguYWJzKHBhcnNlVHJlZVdpZHRoIC0gY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKGRpZmZlcmVuY2VJbldpZHRocy8yKSxcbiAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IE1hdGguY2VpbChkaWZmZXJlbmNlSW5XaWR0aHMvMik7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAocGFyc2VUcmVlV2lkdGggPCBjaGlsZFBhcnNlVHJlZXNQYXJzZVRyZWVXaWR0aCkge1xuICAgICAgcGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgIHBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZVdpZHRoIDwgcGFyc2VUcmVlV2lkdGgpIHtcbiAgICAgIGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICBjaGlsZFBhcnNlVHJlZXNQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgcGFyc2VUcmVlLmFwcGVuZFRvQm90dG9tKGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5mdW5jdGlvbiBtYXJnaW5TdHJGcm9tTWFyZ2luV2lkdGgobWFyZ2luV2lkdGgsIHNwYWNlQ2hhcmFjdGVyKSB7XG4gIHZhciBtYXJnaW5TdHIgPSAnJztcblxuICBzcGFjZUNoYXJhY3RlciA9IHNwYWNlQ2hhcmFjdGVyIHx8ICcgJztcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHIgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyO1xufVxuIl19