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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZVRyZWUuanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwibGluZXMiLCJzbGljZSIsInBhcnNlVHJlZSIsImxpbmVzTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJsYXN0TGluZSIsImxhc3QiLCJsYXN0TGluZUxlbmd0aCIsImRlcHRoIiwiY2IiLCJmb3JFYWNoIiwiZm9yRWFjaExpbmUiLCJsaW5lIiwidW5zaGlmdCIsImJpbmQiLCJpbmRleCIsInB1c2giLCJ0b3BNYXJnaW5EZXB0aCIsImdldFdpZHRoIiwidG9wTWFyZ2luV2lkdGgiLCJ0b3BNYXJnaW5TdHJpbmciLCJtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luU3RyaW5nIiwicmlnaHRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luU3RyaW5nIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJib3R0b21NYXJnaW5XaWR0aCIsImJvdHRvbU1hcmdpblN0cmluZyIsInBvcCIsInNoaWZ0Iiwic3RyaW5nIiwicmVkdWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5IiwibWFyZ2luV2lkdGgiLCJzcGFjZUNoYXJhY3RlciIsIm1hcmdpblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxTO0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU87QUFDTixVQUFJQSxRQUFRLEtBQUtBLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQixDQUFqQixDQUFaO0FBQUEsVUFBa0M7QUFDOUJDLGtCQUFZLElBQUlILFNBQUosQ0FBY0MsS0FBZCxDQURoQjs7QUFHQSxhQUFPRSxTQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUlDLGNBQWMsS0FBS0gsS0FBTCxDQUFXSSxNQUE3QjtBQUFBLFVBQ0lDLFFBQVFDLFNBRFo7O0FBR0EsVUFBSUgsZ0JB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QkFBZ0JELGNBQWhCO0FBQ0Q7O0FBRUQsU0FBT0MsWUFBUDtBQUNEIiwiZmlsZSI6InBhcnNlVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMpIHtcbiAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICB2YXIgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKDApLCAgLy8vXG4gICAgICAgIHBhcnNlVHJlZSA9IG5ldyBQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHZhciBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICB3aWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICAgIGxhc3RMaW5lTGVuZ3RoID0gbGFzdExpbmUubGVuZ3RoO1xuXG4gICAgICB3aWR0aCA9IGxhc3RMaW5lTGVuZ3RoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICB2YXIgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2IpIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2IpO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9MZWZ0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgbGluZTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkVG9wTWFyZ2luKHRvcE1hcmdpbkRlcHRoKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICB0b3BNYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgIHRvcE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCh0b3BNYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdG9wTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdCh0b3BNYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKSB7XG4gICAgdmFyIGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsZWZ0TWFyZ2luU3RyaW5nICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfVxuICB9XG5cbiAgYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCkge1xuICAgIHZhciByaWdodE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChyaWdodE1hcmdpbldpZHRoKSxcbiAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgYm90dG9tTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHZhciBzdHJpbmcgPSB0aGlzLmxpbmVzLnJlZHVjZShmdW5jdGlvbihzdHJpbmcsIGxpbmUpIHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgJ1xcbic7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlVHJlZTtcblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoLCBzcGFjZUNoYXJhY3Rlcikge1xuICBzcGFjZUNoYXJhY3RlciA9IHNwYWNlQ2hhcmFjdGVyIHx8ICcgJztcblxuICB2YXIgbWFyZ2luU3RyaW5nID0gJyc7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyaW5nICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cmluZztcbn1cbiJdfQ==