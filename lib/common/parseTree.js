"use strict";

var _array = require("../utilities/array");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
        var lastLine = (0, _array.last)(this.lines),
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
        string += line + "\n";
        return string;
      }, "");
      return string;
    }
  }]);

  return ParseTree;
}();

module.exports = ParseTree;

function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
  spaceCharacter = spaceCharacter || " ";
  var marginString = "";

  for (var index = 0; index < marginWidth; index++) {
    marginString += spaceCharacter;
  }

  return marginString;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWUiLCJsaW5lcyIsInNsaWNlIiwicGFyc2VUcmVlIiwid2lkdGgiLCJsaW5lc0xlbmd0aCIsImxlbmd0aCIsImxhc3RMaW5lIiwibGFzdExpbmVMZW5ndGgiLCJkZXB0aCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImZvckVhY2hMaW5lIiwibGluZSIsInVuc2hpZnQiLCJiaW5kIiwiaW5kZXgiLCJwdXNoIiwidG9wTWFyZ2luRGVwdGgiLCJnZXRXaWR0aCIsInRvcE1hcmdpbldpZHRoIiwidG9wTWFyZ2luU3RyaW5nIiwibWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoIiwibGVmdE1hcmdpbldpZHRoIiwibGVmdE1hcmdpblN0cmluZyIsInJpZ2h0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpblN0cmluZyIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYm90dG9tTWFyZ2luV2lkdGgiLCJib3R0b21NYXJnaW5TdHJpbmciLCJwb3AiLCJzaGlmdCIsInN0cmluZyIsInJlZHVjZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXJnaW5XaWR0aCIsInNwYWNlQ2hhcmFjdGVyIiwibWFyZ2luU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7SUFFTUEsUztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBTUEsS0FBSyxHQUFHLEtBQUtBLEtBQUwsQ0FBV0MsS0FBWCxFQUFkO0FBQUEsVUFBbUM7QUFDN0JDLE1BQUFBLFNBQVMsR0FBRyxJQUFJSCxTQUFKLENBQWNDLEtBQWQsQ0FEbEI7QUFHQSxhQUFPRSxTQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUlDLEtBQUo7QUFFQSxVQUFJQyxXQUFXLEdBQUcsS0FBS0osS0FBTCxDQUFXSyxNQUE3Qjs7QUFFQSxVQUFJRCxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7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a0U7QUFDaEVBLEVBQUFBLGNBQWMsR0FBR0EsY0FBYyxJQUFJLEdBQW5DO0FBRUEsTUFBSUMsWUFBWSxHQUFHLEVBQW5COztBQUVBLE9BQUssSUFBSXRCLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHb0IsV0FBNUIsRUFBeUNwQixLQUFLLEVBQTlDLEVBQWtEO0FBQ2hEc0IsSUFBQUEsWUFBWSxJQUFJRCxjQUFoQjtBQUNEOztBQUVELFNBQU9DLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgpLCAgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgbGV0IHdpZHRoO1xuXG4gICAgbGV0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBpZiAobGluZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICAgICAgbGFzdExpbmVMZW5ndGggPSBsYXN0TGluZS5sZW5ndGg7XG5cbiAgICAgIHdpZHRoID0gbGFzdExpbmVMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9MZWZ0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgbGluZTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkVG9wTWFyZ2luKHRvcE1hcmdpbkRlcHRoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgdG9wTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICAgIHRvcE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCh0b3BNYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9wTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdCh0b3BNYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgbGVmdE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChsZWZ0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGVmdE1hcmdpblN0cmluZyArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIGFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCByaWdodE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChyaWdodE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgcmlnaHRNYXJnaW5TdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgYm90dG9tTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICAgIGJvdHRvbU1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChib3R0b21NYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYm90dG9tTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChib3R0b21NYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuICBcbiAgcG9wTGluZSgpIHsgcmV0dXJuIHRoaXMubGluZXMucG9wKCk7IH1cbiAgXG4gIHNoaWZ0TGluZSgpIHsgcmV0dXJuIHRoaXMubGluZXMuc2hpZnQoKTsgfVxuICBcbiAgcHVzaExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnB1c2gobGluZSk7IH1cbiAgXG4gIHVuc2hpZnRMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpOyB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5saW5lcy5yZWR1Y2UoZnVuY3Rpb24oc3RyaW5nLCBsaW5lKSB7XG4gICAgICBzdHJpbmcgKz0gbGluZSArIFwiXFxuXCI7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgXCJcIik7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobWFyZ2luV2lkdGgsIHNwYWNlQ2hhcmFjdGVyKSB7XG4gIHNwYWNlQ2hhcmFjdGVyID0gc3BhY2VDaGFyYWN0ZXIgfHwgXCIgXCI7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyaW5nICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cmluZztcbn1cbiJdfQ==