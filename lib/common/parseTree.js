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
      var lines = this.lines.slice(),
          ///
      parseTree = new ParseTree(lines);

      return parseTree;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var width = void 0;

      var linesLength = this.lines.length;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsImxhc3QiLCJQYXJzZVRyZWUiLCJsaW5lcyIsInNsaWNlIiwicGFyc2VUcmVlIiwid2lkdGgiLCJsaW5lc0xlbmd0aCIsImxlbmd0aCIsImxhc3RMaW5lIiwibGFzdExpbmVMZW5ndGgiLCJkZXB0aCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImZvckVhY2hMaW5lIiwibGluZSIsInVuc2hpZnQiLCJiaW5kIiwiaW5kZXgiLCJwdXNoIiwidG9wTWFyZ2luRGVwdGgiLCJnZXRXaWR0aCIsInRvcE1hcmdpbldpZHRoIiwidG9wTWFyZ2luU3RyaW5nIiwibWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoIiwibGVmdE1hcmdpbldpZHRoIiwibGVmdE1hcmdpblN0cmluZyIsInJpZ2h0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpblN0cmluZyIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYm90dG9tTWFyZ2luV2lkdGgiLCJib3R0b21NYXJnaW5TdHJpbmciLCJwb3AiLCJzaGlmdCIsInN0cmluZyIsInJlZHVjZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXJnaW5XaWR0aCIsInNwYWNlQ2hhcmFjdGVyIiwibWFyZ2luU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLG9CQUFSLENBQXZCOztJQUVRQyxJLEdBQVNGLGMsQ0FBVEUsSTs7SUFFRkMsUztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBTUEsUUFBUSxLQUFLQSxLQUFMLENBQVdDLEtBQVgsRUFBZDtBQUFBLFVBQW1DO0FBQzdCQyxrQkFBWSxJQUFJSCxTQUFKLENBQWNDLEtBQWQsQ0FEbEI7O0FBR0EsYUFBT0UsU0FBUDtBQUNEOzs7K0JBRVU7QUFD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UDtBQUNEIiwiZmlsZSI6InBhcnNlVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMpIHtcbiAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBsaW5lcyA9IHRoaXMubGluZXMuc2xpY2UoKSwgIC8vL1xuICAgICAgICAgIHBhcnNlVHJlZSA9IG5ldyBQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGxldCB3aWR0aDtcblxuICAgIGxldCBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgaWYgKGxpbmVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB3aWR0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RMaW5lID0gbGFzdCh0aGlzLmxpbmVzKSxcbiAgICAgICAgICAgIGxhc3RMaW5lTGVuZ3RoID0gbGFzdExpbmUubGVuZ3RoO1xuXG4gICAgICB3aWR0aCA9IGxhc3RMaW5lTGVuZ3RoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGluZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGZvckVhY2hMaW5lKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saW5lcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFwcGVuZFRvVG9wKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGluZSArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb1JpZ2h0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvQm90dG9tKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKGZ1bmN0aW9uKHN0cmluZywgbGluZSkge1xuICAgICAgc3RyaW5nICs9IGxpbmUgKyAnXFxuJztcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobWFyZ2luV2lkdGgsIHNwYWNlQ2hhcmFjdGVyKSB7XG4gIHNwYWNlQ2hhcmFjdGVyID0gc3BhY2VDaGFyYWN0ZXIgfHwgJyAnO1xuXG4gIGxldCBtYXJnaW5TdHJpbmcgPSAnJztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl19