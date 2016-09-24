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
      var lastLine = last(this.lines),
          lastLineLength = lastLine.length,
          width = lastLineLength; ///

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
    key: 'addLeftMargin',
    value: function addLeftMargin(leftMarginWidth) {
      var leftMarginStr = marginStrFromMarginWidth(leftMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = leftMarginStr + this.lines[index];
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
    key: 'fromProductionNameAndChildNodes',
    value: function fromProductionNameAndChildNodes(productionName, childNodes) {
      var childParseTrees = childNodes.map(function (childNode) {
        var childParseTree = childNode.getParseTree();

        return childParseTree;
      }),
          childParseTreesDepth = childParseTrees.reduce(function (childParseTreesDepth, childParseTree) {
        var childParseTreeDepth = childParseTree.getDepth();

        childParseTreesDepth = Math.max(childParseTreesDepth, childParseTreeDepth);

        return childParseTreesDepth;
      }, 0),
          childParseTreesParseTree = ParseTree.fromDepth(childParseTreesDepth);

      childParseTrees.forEach(function (childParseTree) {
        var childParseTreeDepth = childParseTree.getDepth();

        if (childParseTreeDepth < childParseTreesDepth) {
          var clonedChildParseTree = childParseTree.clone(),
              bottomMarginDepth = childParseTreesDepth - childParseTreeDepth;

          clonedChildParseTree.addBottomMargin(bottomMarginDepth);
          childParseTreesParseTree.appendToRight(clonedChildParseTree);
        } else {
          childParseTreesParseTree.appendToRight(childParseTree);
        }
      });

      var str = productionName,
          ///
      parseTree = ParseTree.fromString(str),
          parseTreeWidth = parseTree.getWidth(),
          childParseTreesParseTreeWidth = childParseTreesParseTree.getWidth(),
          leftMarginWidth = Math.abs(parseTreeWidth - childParseTreesParseTreeWidth);

      if (false) {} else if (parseTreeWidth < childParseTreesParseTreeWidth) {
        parseTree.addLeftMargin(leftMarginWidth);
      } else if (childParseTreesParseTreeWidth < parseTreeWidth) {
        childParseTreesParseTree.addLeftMargin(leftMarginWidth);
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

function marginStrFromMarginWidth(marginWidth) {
  var marginStr = '';

  for (var index = 0; index < marginWidth; index++) {
    marginStr += ' ';
  }

  return marginStr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZVRyZWUuanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwibGluZXMiLCJzbGljZSIsInBhcnNlVHJlZSIsImxhc3RMaW5lIiwibGFzdCIsImxhc3RMaW5lTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJsaW5lc0xlbmd0aCIsImRlcHRoIiwiY2IiLCJmb3JFYWNoIiwiZm9yRWFjaExpbmUiLCJsaW5lIiwidW5zaGlmdCIsImJpbmQiLCJpbmRleCIsInB1c2giLCJsZWZ0TWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luU3RyIiwibWFyZ2luU3RyRnJvbU1hcmdpbldpZHRoIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJnZXRXaWR0aCIsImJvdHRvbU1hcmdpbldpZHRoIiwiYm90dG9tTWFyZ2luU3RyIiwic3RyIiwicmVkdWNlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiY2hpbGRQYXJzZVRyZWVzIiwibWFwIiwiY2hpbGROb2RlIiwiY2hpbGRQYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJjaGlsZFBhcnNlVHJlZXNEZXB0aCIsImNoaWxkUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsIk1hdGgiLCJtYXgiLCJjaGlsZFBhcnNlVHJlZXNQYXJzZVRyZWUiLCJmcm9tRGVwdGgiLCJjbG9uZWRDaGlsZFBhcnNlVHJlZSIsImNsb25lIiwiYWRkQm90dG9tTWFyZ2luIiwiYXBwZW5kVG9SaWdodCIsImZyb21TdHJpbmciLCJwYXJzZVRyZWVXaWR0aCIsImNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZVdpZHRoIiwiYWJzIiwiYWRkTGVmdE1hcmdpbiIsImFwcGVuZFRvQm90dG9tIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5IiwibWFyZ2luV2lkdGgiLCJtYXJnaW5TdHIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNE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ZVRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgwKSwgIC8vL1xuICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICB2YXIgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aCxcbiAgICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICB2YXIgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2IpIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2IpO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9MZWZ0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgbGluZTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICB2YXIgbGVmdE1hcmdpblN0ciA9IG1hcmdpblN0ckZyb21NYXJnaW5XaWR0aChsZWZ0TWFyZ2luV2lkdGgpLFxuICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHIgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgYm90dG9tTWFyZ2luU3RyID0gbWFyZ2luU3RyRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cik7XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMubGluZXMucmVkdWNlKGZ1bmN0aW9uKHN0ciwgbGluZSkge1xuICAgICAgc3RyICs9IGxpbmUgKyAnXFxuJztcblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyKSB7XG4gICAgdmFyIGxpbmUgPSBzdHIgKyAnICcsXG4gICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcbiAgICBcbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZXB0aChkZXB0aCkge1xuICAgIHZhciBsaW5lcyA9IFtdLFxuICAgICAgICBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBkZXB0aCkge1xuICAgICAgbGluZXNbaW5kZXgrK10gPSAnJztcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB2YXIgY2hpbGRQYXJzZVRyZWVzID0gY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICAgICAgdmFyIGNoaWxkUGFyc2VUcmVlID0gY2hpbGROb2RlLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIGNoaWxkUGFyc2VUcmVlO1xuICAgICAgICB9KSxcbiAgICAgICAgY2hpbGRQYXJzZVRyZWVzRGVwdGggPSBjaGlsZFBhcnNlVHJlZXMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkUGFyc2VUcmVlc0RlcHRoLCBjaGlsZFBhcnNlVHJlZSkge1xuICAgICAgICAgIHZhciBjaGlsZFBhcnNlVHJlZURlcHRoID0gY2hpbGRQYXJzZVRyZWUuZ2V0RGVwdGgoKTtcblxuICAgICAgICAgIGNoaWxkUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGRQYXJzZVRyZWVzRGVwdGgsIGNoaWxkUGFyc2VUcmVlRGVwdGgpO1xuXG4gICAgICAgICAgcmV0dXJuIGNoaWxkUGFyc2VUcmVlc0RlcHRoO1xuICAgICAgICB9LCAwKSxcbiAgICAgICAgY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlID0gUGFyc2VUcmVlLmZyb21EZXB0aChjaGlsZFBhcnNlVHJlZXNEZXB0aCk7XG5cbiAgICBjaGlsZFBhcnNlVHJlZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZFBhcnNlVHJlZSkge1xuICAgICAgdmFyIGNoaWxkUGFyc2VUcmVlRGVwdGggPSBjaGlsZFBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICBpZiAoY2hpbGRQYXJzZVRyZWVEZXB0aCA8IGNoaWxkUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZFBhcnNlVHJlZSA9IGNoaWxkUGFyc2VUcmVlLmNsb25lKCksXG4gICAgICAgICAgICBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkUGFyc2VUcmVlc0RlcHRoIC0gY2hpbGRQYXJzZVRyZWVEZXB0aDtcblxuICAgICAgICBjbG9uZWRDaGlsZFBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgICBjaGlsZFBhcnNlVHJlZXNQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjbG9uZWRDaGlsZFBhcnNlVHJlZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZFBhcnNlVHJlZXNQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjaGlsZFBhcnNlVHJlZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgc3RyID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICBwYXJzZVRyZWUgPSBQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHIpLFxuICAgICAgICBwYXJzZVRyZWVXaWR0aCA9IHBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICBjaGlsZFBhcnNlVHJlZXNQYXJzZVRyZWVXaWR0aCA9IGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmFicyhwYXJzZVRyZWVXaWR0aCAtIGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZVdpZHRoKTtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChwYXJzZVRyZWVXaWR0aCA8IGNoaWxkUGFyc2VUcmVlc1BhcnNlVHJlZVdpZHRoKSB7XG4gICAgICBwYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlV2lkdGggPCBwYXJzZVRyZWVXaWR0aCkge1xuICAgICAgY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB9XG5cbiAgICBwYXJzZVRyZWUuYXBwZW5kVG9Cb3R0b20oY2hpbGRQYXJzZVRyZWVzUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmZ1bmN0aW9uIG1hcmdpblN0ckZyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCkge1xuICB2YXIgbWFyZ2luU3RyID0gJyc7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyICs9ICcgJztcbiAgfVxuXG4gIHJldHVybiBtYXJnaW5TdHI7XG59XG4iXX0=