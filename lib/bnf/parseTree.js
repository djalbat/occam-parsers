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
    key: 'toString',
    value: function toString() {
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

function last(array) {
  return array[array.length - 1];
}

function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
  spaceCharacter = spaceCharacter || ' ';

  var marginString = '';

  for (var index = 0; index < marginWidth; index++) {
    marginString += spaceCharacter;
  }

  return marginString;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsImxpbmVzIiwic2xpY2UiLCJwYXJzZVRyZWUiLCJsaW5lc0xlbmd0aCIsImxlbmd0aCIsIndpZHRoIiwidW5kZWZpbmVkIiwibGFzdExpbmUiLCJsYXN0IiwibGFzdExpbmVMZW5ndGgiLCJkZXB0aCIsImNiIiwiZm9yRWFjaCIsImZvckVhY2hMaW5lIiwibGluZSIsInVuc2hpZnQiLCJiaW5kIiwiaW5kZXgiLCJwdXNoIiwidG9wTWFyZ2luRGVwdGgiLCJnZXRXaWR0aCIsInRvcE1hcmdpbldpZHRoIiwidG9wTWFyZ2luU3RyaW5nIiwibWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoIiwibGVmdE1hcmdpbldpZHRoIiwibGVmdE1hcmdpblN0cmluZyIsInJpZ2h0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpblN0cmluZyIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYm90dG9tTWFyZ2luV2lkdGgiLCJib3R0b21NYXJnaW5TdHJpbmciLCJwb3AiLCJzaGlmdCIsInN0cmluZyIsInJlZHVjZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSIsIm1hcmdpbldpZHRoIiwic3BhY2VDaGFyYWN0ZXIiLCJtYXJnaW5TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBSUEsUUFBUSxLQUFLQSxLQUFMLENBQVdDLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBWjtBQUFBLFVBQWtDO0FBQzlCQyxrQkFBWSxJQUFJSCxTQUFKLENBQWNDLEtBQWQsQ0FEaEI7O0FBR0EsYUFBT0UsU0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJQyxjQUFjLEtBQUtILEtBQUwsQ0FBV0ksTUFBN0I7QUFBQSxVQUNJQyxRQUFRQyxTQURaOztBQUdBLFVB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Q2hEdUIsb0JBQWdCRCxjQUFoQjtBQUNEOztBQUVELFNBQU9DLFlBQVA7QUFDRCIsImZpbGUiOiJwYXJzZVRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgwKSwgIC8vL1xuICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICB2YXIgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgd2lkdGggPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAobGluZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxhc3RMaW5lID0gbGFzdCh0aGlzLmxpbmVzKSxcbiAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgdmFyIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgIGRlcHRoID0gbGluZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGZvckVhY2hMaW5lKGNiKSB7XG4gICAgdGhpcy5saW5lcy5mb3JFYWNoKGNiKTtcbiAgfVxuXG4gIGFwcGVuZFRvVG9wKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGluZSArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb1JpZ2h0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvQm90dG9tKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgdG9wTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIHZhciBsZWZ0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGxlZnRNYXJnaW5XaWR0aCksXG4gICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGVmdE1hcmdpblN0cmluZyArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIGFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpIHtcbiAgICB2YXIgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyByaWdodE1hcmdpblN0cmluZztcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgYm90dG9tTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG4gIFxuICBwb3BMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5wb3AoKTsgfVxuICBcbiAgc2hpZnRMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5zaGlmdCgpOyB9XG4gIFxuICBwdXNoTGluZShsaW5lKSB7IHRoaXMubGluZXMucHVzaChsaW5lKTsgfVxuICBcbiAgdW5zaGlmdExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7IH1cblxuICB0b1N0cmluZygpIHtcbiAgICB2YXIgc3RyaW5nID0gdGhpcy5saW5lcy5yZWR1Y2UoZnVuY3Rpb24oc3RyaW5nLCBsaW5lKSB7XG4gICAgICBzdHJpbmcgKz0gbGluZSArICdcXG4nO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCAnICc7XG5cbiAgdmFyIG1hcmdpblN0cmluZyA9ICcnO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBtYXJnaW5XaWR0aDsgaW5kZXgrKykge1xuICAgIG1hcmdpblN0cmluZyArPSBzcGFjZUNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBtYXJnaW5TdHJpbmc7XG59XG4iXX0=