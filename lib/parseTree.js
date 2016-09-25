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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZVRyZWUuanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwibGluZXMiLCJzbGljZSIsInBhcnNlVHJlZSIsImxpbmVzTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJsYXN0TGluZSIsImxhc3QiLCJsYXN0TGluZUxlbmd0aCIsImRlcHRoIiwiY2IiLCJmb3JFYWNoIiwiZm9yRWFjaExpbmUiLCJsaW5lIiwidW5zaGlmdCIsImJpbmQiLCJpbmRleCIsInB1c2giLCJ0b3BNYXJnaW5EZXB0aCIsImdldFdpZHRoIiwidG9wTWFyZ2luV2lkdGgiLCJ0b3BNYXJnaW5TdHIiLCJtYXJnaW5TdHJGcm9tTWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luU3RyIiwicmlnaHRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luU3RyIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJib3R0b21NYXJnaW5XaWR0aCIsImJvdHRvbU1hcmdpblN0ciIsInBvcCIsInNoaWZ0Iiwic3RyIiwicmVkdWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5IiwibWFyZ2luV2lkdGgiLCJzcGFjZUNoYXJhY3RlciIsIm1hcmdpblN0ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxTO0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU87QUFDTixVQUFJQSxRQUFRLEtBQUtBLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQixDQUFqQixDQUFaO0FBQUEsVUFBa0M7QUFDOUJDLGtCQUFZLElBQUlILFNBQUosQ0FBY0MsS0FBZCxDQURoQjs7QUFHQSxhQUFPRSxTQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUlDLGNBQWMsS0FBS0gsS0FBTCxDQUFXSSxNQUE3QjtBQUFBLFVBQ0lDLFFBQVFDLFNBRFo7O0FBR0EsVUFBSUgsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JC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SUMsWUFBWSxFQUFoQjs7QUFFQUQsbUJBQWlCQSxrQkFBa0IsR0FBbkM7O0FBRUEsT0FBSyxJQUFJdEIsUUFBUSxDQUFqQixFQUFvQkEsUUFBUXFCLFdBQTVCLEVBQXlDckIsT0FBekMsRUFBa0Q7QUFDaER1QixpQkFBYUQsY0FBYjtBQUNEOztBQUVELFNBQU9DLFNBQVA7QUFDRCIsImZpbGUiOiJwYXJzZVRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgwKSwgIC8vL1xuICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICB2YXIgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgd2lkdGggPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAobGluZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxhc3RMaW5lID0gbGFzdCh0aGlzLmxpbmVzKSxcbiAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgdmFyIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgIGRlcHRoID0gbGluZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGZvckVhY2hMaW5lKGNiKSB7XG4gICAgdGhpcy5saW5lcy5mb3JFYWNoKGNiKTtcbiAgfVxuXG4gIGFwcGVuZFRvVG9wKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGluZSArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb1JpZ2h0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvQm90dG9tKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgdG9wTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICB0b3BNYXJnaW5TdHIgPSBtYXJnaW5TdHJGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIHZhciBsZWZ0TWFyZ2luU3RyID0gbWFyZ2luU3RyRnJvbU1hcmdpbldpZHRoKGxlZnRNYXJnaW5XaWR0aCksXG4gICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGVmdE1hcmdpblN0ciArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIGFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpIHtcbiAgICB2YXIgcmlnaHRNYXJnaW5TdHIgPSBtYXJnaW5TdHJGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyByaWdodE1hcmdpblN0cjtcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgYm90dG9tTWFyZ2luU3RyID0gbWFyZ2luU3RyRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cik7XG4gICAgfVxuICB9XG4gIFxuICBwb3BMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5wb3AoKTsgfVxuICBcbiAgc2hpZnRMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5zaGlmdCgpOyB9XG4gIFxuICBwdXNoTGluZShsaW5lKSB7IHRoaXMubGluZXMucHVzaChsaW5lKTsgfVxuICBcbiAgdW5zaGlmdExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7IH1cblxuICB0b1N0cmluZygpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5saW5lcy5yZWR1Y2UoZnVuY3Rpb24oc3RyLCBsaW5lKSB7XG4gICAgICBzdHIgKz0gbGluZSArICdcXG4nO1xuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHIpIHtcbiAgICB2YXIgbGluZSA9IHN0ciwgLy8vXG4gICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmZ1bmN0aW9uIG1hcmdpblN0ckZyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgdmFyIG1hcmdpblN0ciA9ICcnO1xuXG4gIHNwYWNlQ2hhcmFjdGVyID0gc3BhY2VDaGFyYWN0ZXIgfHwgJyAnO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBtYXJnaW5XaWR0aDsgaW5kZXgrKykge1xuICAgIG1hcmdpblN0ciArPSBzcGFjZUNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBtYXJnaW5TdHI7XG59XG4iXX0=