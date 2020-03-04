'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayUtilities = require('../utilities/array');

var last = arrayUtilities.last;

var ParseTree = /*#__PURE__*/function () {
  function ParseTree(lines) {
    _classCallCheck(this, ParseTree);

    this.lines = lines;
  }

  _createClass(ParseTree, [{
    key: "clone",
    value: function clone() {
      var lines = this.lines.slice(),
          ///
      parseTree = new ParseTree(lines);
      return parseTree;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var width;
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
    key: "getDepth",
    value: function getDepth() {
      var linesLength = this.lines.length,
          depth = linesLength; ///

      return depth;
    }
  }, {
    key: "forEachLine",
    value: function forEachLine(callback) {
      this.lines.forEach(callback);
    }
  }, {
    key: "appendToTop",
    value: function appendToTop(parseTree) {
      parseTree.forEachLine(function (line) {
        this.lines.unshift(line);
      }.bind(this));
    }
  }, {
    key: "appendToLeft",
    value: function appendToLeft(parseTree) {
      parseTree.forEachLine(function (line, index) {
        this.lines[index] = line + this.lines[index];
      }.bind(this));
    }
  }, {
    key: "appendToRight",
    value: function appendToRight(parseTree) {
      parseTree.forEachLine(function (line, index) {
        this.lines[index] = this.lines[index] + line;
      }.bind(this));
    }
  }, {
    key: "appendToBottom",
    value: function appendToBottom(parseTree) {
      parseTree.forEachLine(function (line) {
        this.lines.push(line);
      }.bind(this));
    }
  }, {
    key: "addTopMargin",
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
    key: "addLeftMargin",
    value: function addLeftMargin(leftMarginWidth) {
      var leftMarginString = marginStringFromMarginWidth(leftMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = leftMarginString + this.lines[index];
      }
    }
  }, {
    key: "addRightMargin",
    value: function addRightMargin(rightMarginWidth) {
      var rightMarginString = marginStringFromMarginWidth(rightMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = this.lines[index] + rightMarginString;
      }
    }
  }, {
    key: "addBottomMargin",
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
    key: "popLine",
    value: function popLine() {
      return this.lines.pop();
    }
  }, {
    key: "shiftLine",
    value: function shiftLine() {
      return this.lines.shift();
    }
  }, {
    key: "pushLine",
    value: function pushLine(line) {
      this.lines.push(line);
    }
  }, {
    key: "unshiftLine",
    value: function unshiftLine(line) {
      this.lines.unshift(line);
    }
  }, {
    key: "asString",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJsYXN0IiwiUGFyc2VUcmVlIiwibGluZXMiLCJzbGljZSIsInBhcnNlVHJlZSIsIndpZHRoIiwibGluZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0TGluZSIsImxhc3RMaW5lTGVuZ3RoIiwiZGVwdGgiLCJjYWxsYmFjayIsImZvckVhY2giLCJmb3JFYWNoTGluZSIsImxpbmUiLCJ1bnNoaWZ0IiwiYmluZCIsImluZGV4IiwicHVzaCIsInRvcE1hcmdpbkRlcHRoIiwiZ2V0V2lkdGgiLCJ0b3BNYXJnaW5XaWR0aCIsInRvcE1hcmdpblN0cmluZyIsIm1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCIsImxlZnRNYXJnaW5XaWR0aCIsImxlZnRNYXJnaW5TdHJpbmciLCJyaWdodE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5TdHJpbmciLCJib3R0b21NYXJnaW5EZXB0aCIsImJvdHRvbU1hcmdpbldpZHRoIiwiYm90dG9tTWFyZ2luU3RyaW5nIiwicG9wIiwic2hpZnQiLCJzdHJpbmciLCJyZWR1Y2UiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFyZ2luV2lkdGgiLCJzcGFjZUNoYXJhY3RlciIsIm1hcmdpblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxPQUFPLENBQUMsb0JBQUQsQ0FBOUI7O0lBRVFDLEksR0FBU0YsYyxDQUFURSxJOztJQUVGQyxTO0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU87QUFDTixVQUFNQSxLQUFLLEdBQUcsS0FBS0EsS0FBTCxDQUFXQyxLQUFYLEVBQWQ7QUFBQSxVQUFtQztBQUM3QkMsTUFBQUEsU0FBUyxHQUFHLElBQUlILFNBQUosQ0FBY0MsS0FBZCxDQURsQjtBQUdBLGFBQU9FLFNBQVA7QUFDRDs7OytC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QU9BLE1BQVA7QUFDRDs7Ozs7O0FBR0hFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5DLFNBQWpCOztBQUVBLFNBQVNzQiwyQkFBVCxDQUFxQ2MsV0FBckMsRUFBa0RDLGNBQWxELEVBQWtFO0FBQ2hFQSxFQUFBQSxjQUFjLEdBQUdBLGNBQWMsSUFBSSxHQUFuQztBQUVBLE1BQUlDLFlBQVksR0FBRyxFQUFuQjs7QUFFQSxPQUFLLElBQUl0QixLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR29CLFdBQTVCLEVBQXlDcEIsS0FBSyxFQUE5QyxFQUFrRDtBQUNoRHNCLElBQUFBLFlBQVksSUFBSUQsY0FBaEI7QUFDRDs7QUFFRCxTQUFPQyxZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgd2lkdGg7XG5cbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0xlZnQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9SaWdodChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyBsaW5lO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRUb3BNYXJnaW4odG9wTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB0b3BNYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgdG9wTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHRvcE1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3BNYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KHRvcE1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCBsZWZ0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGxlZnRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsZWZ0TWFyZ2luU3RyaW5nICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfVxuICB9XG5cbiAgYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IHJpZ2h0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHJpZ2h0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyByaWdodE1hcmdpblN0cmluZztcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBib3R0b21NYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgYm90dG9tTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG4gIFxuICBwb3BMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5wb3AoKTsgfVxuICBcbiAgc2hpZnRMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5zaGlmdCgpOyB9XG4gIFxuICBwdXNoTGluZShsaW5lKSB7IHRoaXMubGluZXMucHVzaChsaW5lKTsgfVxuICBcbiAgdW5zaGlmdExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7IH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmxpbmVzLnJlZHVjZShmdW5jdGlvbihzdHJpbmcsIGxpbmUpIHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgJ1xcbic7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlVHJlZTtcblxuZnVuY3Rpb24gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoLCBzcGFjZUNoYXJhY3Rlcikge1xuICBzcGFjZUNoYXJhY3RlciA9IHNwYWNlQ2hhcmFjdGVyIHx8ICcgJztcblxuICBsZXQgbWFyZ2luU3RyaW5nID0gJyc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyaW5nICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cmluZztcbn1cbiJdfQ==