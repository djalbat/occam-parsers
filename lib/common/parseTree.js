"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayUtilities = require("../utilities/array");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJsYXN0IiwiUGFyc2VUcmVlIiwibGluZXMiLCJzbGljZSIsInBhcnNlVHJlZSIsIndpZHRoIiwibGluZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0TGluZSIsImxhc3RMaW5lTGVuZ3RoIiwiZGVwdGgiLCJjYWxsYmFjayIsImZvckVhY2giLCJmb3JFYWNoTGluZSIsImxpbmUiLCJ1bnNoaWZ0IiwiYmluZCIsImluZGV4IiwicHVzaCIsInRvcE1hcmdpbkRlcHRoIiwiZ2V0V2lkdGgiLCJ0b3BNYXJnaW5XaWR0aCIsInRvcE1hcmdpblN0cmluZyIsIm1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCIsImxlZnRNYXJnaW5XaWR0aCIsImxlZnRNYXJnaW5TdHJpbmciLCJyaWdodE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5TdHJpbmciLCJib3R0b21NYXJnaW5EZXB0aCIsImJvdHRvbU1hcmdpbldpZHRoIiwiYm90dG9tTWFyZ2luU3RyaW5nIiwicG9wIiwic2hpZnQiLCJzdHJpbmciLCJyZWR1Y2UiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFyZ2luV2lkdGgiLCJzcGFjZUNoYXJhY3RlciIsIm1hcmdpblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxPQUFPLENBQUMsb0JBQUQsQ0FBOUI7O0lBRVFDLEksR0FBU0YsYyxDQUFURSxJOztJQUVGQyxTO0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU87QUFDTixVQUFNQSxLQUFLLEdBQUcsS0FBS0EsS0FBTCxDQUFXQyxLQUFYLEVBQWQ7QUFBQSxVQUFtQztBQUM3QkMsTUFBQUEsU0FBUyxHQUFHLElBQUlILFNBQUosQ0FBY0MsS0FBZCxDQURsQjtBQUdBLGFBQU9FLFNBQVA7QUFDRDs7OytC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QU9BLE1BQVA7QUFDRDs7Ozs7O0FBR0hFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5DLFNBQWpCOztBQUVBLFNBQVNzQiwyQkFBVCxDQUFxQ2MsV0FBckMsRUFBa0RDLGNBQWxELEVBQWtFO0FBQ2hFQSxFQUFBQSxjQUFjLEdBQUdBLGNBQWMsSUFBSSxHQUFuQztBQUVBLE1BQUlDLFlBQVksR0FBRyxFQUFuQjs7QUFFQSxPQUFLLElBQUl0QixLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR29CLFdBQTVCLEVBQXlDcEIsS0FBSyxFQUE5QyxFQUFrRDtBQUNoRHNCLElBQUFBLFlBQVksSUFBSUQsY0FBaEI7QUFDRDs7QUFFRCxTQUFPQyxZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2FycmF5XCIpO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgpLCAgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgbGV0IHdpZHRoO1xuXG4gICAgbGV0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBpZiAobGluZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICAgICAgbGFzdExpbmVMZW5ndGggPSBsYXN0TGluZS5sZW5ndGg7XG5cbiAgICAgIHdpZHRoID0gbGFzdExpbmVMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9MZWZ0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgbGluZTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkVG9wTWFyZ2luKHRvcE1hcmdpbkRlcHRoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgdG9wTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICAgIHRvcE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCh0b3BNYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9wTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdCh0b3BNYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgbGVmdE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChsZWZ0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGVmdE1hcmdpblN0cmluZyArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIGFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCByaWdodE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChyaWdodE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgcmlnaHRNYXJnaW5TdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgYm90dG9tTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICAgIGJvdHRvbU1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChib3R0b21NYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYm90dG9tTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChib3R0b21NYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuICBcbiAgcG9wTGluZSgpIHsgcmV0dXJuIHRoaXMubGluZXMucG9wKCk7IH1cbiAgXG4gIHNoaWZ0TGluZSgpIHsgcmV0dXJuIHRoaXMubGluZXMuc2hpZnQoKTsgfVxuICBcbiAgcHVzaExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnB1c2gobGluZSk7IH1cbiAgXG4gIHVuc2hpZnRMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpOyB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5saW5lcy5yZWR1Y2UoZnVuY3Rpb24oc3RyaW5nLCBsaW5lKSB7XG4gICAgICBzdHJpbmcgKz0gbGluZSArIFwiXFxuXCI7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgXCJcIik7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobWFyZ2luV2lkdGgsIHNwYWNlQ2hhcmFjdGVyKSB7XG4gIHNwYWNlQ2hhcmFjdGVyID0gc3BhY2VDaGFyYWN0ZXIgfHwgXCIgXCI7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyaW5nICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cmluZztcbn1cbiJdfQ==