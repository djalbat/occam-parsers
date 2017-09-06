'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../utilities/array');

var last = arrayUtilities.last;

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
    value: function forEachLine(callback) {
      this.lines.forEach(callback);
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
      topMarginString = marginStringFromMarginWidth(topMarginWidth);

      for (var index = 0; index < topMarginDepth; index++) {
        this.lines.unshift(topMarginString);
      }
    }
  }, {
    key: 'addLeftMargin',
    value: function addLeftMargin(leftMarginWidth) {
      var leftMarginString = marginStringFromMarginWidth(leftMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = leftMarginString + this.lines[index];
      }
    }
  }, {
    key: 'addRightMargin',
    value: function addRightMargin(rightMarginWidth) {
      var rightMarginString = marginStringFromMarginWidth(rightMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = this.lines[index] + rightMarginString;
      }
    }
  }, {
    key: 'addBottomMargin',
    value: function addBottomMargin(bottomMarginDepth) {
      var width = this.getWidth(),
          bottomMarginWidth = width,
          ///
      bottomMarginString = marginStringFromMarginWidth(bottomMarginWidth);

      for (var index = 0; index < bottomMarginDepth; index++) {
        this.lines.push(bottomMarginString);
      }
    }
  }, {
    key: 'popLine',
    value: function popLine() {
      return this.lines.pop();
    }
  }, {
    key: 'shiftLine',
    value: function shiftLine() {
      return this.lines.shift();
    }
  }, {
    key: 'pushLine',
    value: function pushLine(line) {
      this.lines.push(line);
    }
  }, {
    key: 'unshiftLine',
    value: function unshiftLine(line) {
      this.lines.unshift(line);
    }
  }, {
    key: 'asString',
    value: function asString() {
      var string = this.lines.reduce(function (string, line) {
        string += line + '\n';

        return string;
      }, '');

      return string;
    }
  }]);

  return ParseTree;
}();

module.exports = ParseTree;

function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
  spaceCharacter = spaceCharacter || ' ';

  var marginString = '';

  for (var index = 0; index < marginWidth; index++) {
    marginString += spaceCharacter;
  }

  return marginString;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsImxhc3QiLCJQYXJzZVRyZWUiLCJsaW5lcyIsInNsaWNlIiwicGFyc2VUcmVlIiwibGluZXNMZW5ndGgiLCJsZW5ndGgiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImxhc3RMaW5lIiwibGFzdExpbmVMZW5ndGgiLCJkZXB0aCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImZvckVhY2hMaW5lIiwibGluZSIsInVuc2hpZnQiLCJiaW5kIiwiaW5kZXgiLCJwdXNoIiwidG9wTWFyZ2luRGVwdGgiLCJnZXRXaWR0aCIsInRvcE1hcmdpbldpZHRoIiwidG9wTWFyZ2luU3RyaW5nIiwibWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoIiwibGVmdE1hcmdpbldpZHRoIiwibGVmdE1hcmdpblN0cmluZyIsInJpZ2h0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpblN0cmluZyIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYm90dG9tTWFyZ2luV2lkdGgiLCJib3R0b21NYXJnaW5TdHJpbmciLCJwb3AiLCJzaGlmdCIsInN0cmluZyIsInJlZHVjZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXJnaW5XaWR0aCIsInNwYWNlQ2hhcmFjdGVyIiwibWFyZ2luU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLG9CQUFSLENBQXZCOztJQUVRQyxJLEdBQVNGLGMsQ0FBVEUsSTs7SUFFRkMsUztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBTUEsUUFBUSxLQUFLQSxLQUFMLENBQVdDLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBZDtBQUFBLFVBQW9DO0FBQzlCQyxrQkFBWSxJQUFJSCxTQUFKLENBQWNDLEtBQWQsQ0FEbEI7O0FBR0EsYUFB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RDtBQUNoRHNCLG9CQUFnQkQsY0FBaEI7QUFDRDs7QUFFRCxTQUFPQyxZQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2VUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgwKSwgIC8vL1xuICAgICAgICAgIHBhcnNlVHJlZSA9IG5ldyBQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGxldCBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICAgIHdpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGxpbmVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB3aWR0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RMaW5lID0gbGFzdCh0aGlzLmxpbmVzKSxcbiAgICAgICAgICAgIGxhc3RMaW5lTGVuZ3RoID0gbGFzdExpbmUubGVuZ3RoO1xuXG4gICAgICB3aWR0aCA9IGxhc3RMaW5lTGVuZ3RoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGluZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGZvckVhY2hMaW5lKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saW5lcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFwcGVuZFRvVG9wKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGluZSArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb1JpZ2h0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvQm90dG9tKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKGZ1bmN0aW9uKHN0cmluZywgbGluZSkge1xuICAgICAgc3RyaW5nICs9IGxpbmUgKyAnXFxuJztcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobWFyZ2luV2lkdGgsIHNwYWNlQ2hhcmFjdGVyKSB7XG4gIHNwYWNlQ2hhcmFjdGVyID0gc3BhY2VDaGFyYWN0ZXIgfHwgJyAnO1xuXG4gIGxldCBtYXJnaW5TdHJpbmcgPSAnJztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl19