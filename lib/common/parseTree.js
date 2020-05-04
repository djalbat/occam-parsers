"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
      var _this = this;

      parseTree.forEachLine(function (line) {
        _this.lines.unshift(line);
      });
    }
  }, {
    key: "appendToLeft",
    value: function appendToLeft(parseTree) {
      var _this2 = this;

      parseTree.forEachLine(function (line, index) {
        _this2.lines[index] = line + _this2.lines[index];
      });
    }
  }, {
    key: "appendToRight",
    value: function appendToRight(parseTree) {
      var _this3 = this;

      parseTree.forEachLine(function (line, index) {
        _this3.lines[index] = _this3.lines[index] + line;
      });
    }
  }, {
    key: "appendToBottom",
    value: function appendToBottom(parseTree) {
      var _this4 = this;

      parseTree.forEachLine(function (line) {
        _this4.lines.push(line);
      });
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

exports["default"] = ParseTree;

function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
  spaceCharacter = spaceCharacter || " ";
  var marginString = "";

  for (var index = 0; index < marginWidth; index++) {
    marginString += spaceCharacter;
  }

  return marginString;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWUiLCJsaW5lcyIsInNsaWNlIiwicGFyc2VUcmVlIiwid2lkdGgiLCJsaW5lc0xlbmd0aCIsImxlbmd0aCIsImxhc3RMaW5lIiwibGFzdExpbmVMZW5ndGgiLCJkZXB0aCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImZvckVhY2hMaW5lIiwibGluZSIsInVuc2hpZnQiLCJpbmRleCIsInB1c2giLCJ0b3BNYXJnaW5EZXB0aCIsImdldFdpZHRoIiwidG9wTWFyZ2luV2lkdGgiLCJ0b3BNYXJnaW5TdHJpbmciLCJtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luU3RyaW5nIiwicmlnaHRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luU3RyaW5nIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJib3R0b21NYXJnaW5XaWR0aCIsImJvdHRvbU1hcmdpblN0cmluZyIsInBvcCIsInNoaWZ0Iiwic3RyaW5nIiwicmVkdWNlIiwibWFyZ2luV2lkdGgiLCJzcGFjZUNoYXJhY3RlciIsIm1hcmdpblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFcUJBLFM7QUFDbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU87QUFDTixVQUFNQSxLQUFLLEdBQUcsS0FBS0EsS0FBTCxDQUFXQyxLQUFYLEVBQWQ7QUFBQSxVQUFtQztBQUM3QkMsTUFBQUEsU0FBUyxHQUFHLElBQUlILFNBQUosQ0FBY0MsS0FBZCxDQURsQjtBQUdBLGFBQU9FLFNBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBSUMsS0FBSjtBQUVBLFVBQUlDLFdBQVcsR0FBRyxLQUFLSixLQUFMLENBQVdLLE1BQTdCOztBQUVBLFVBQUlELFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNyQkQsUUFBQUEsS0FBSyxH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b0JBLEtBQUssR0FBR2tCLFdBQTVCLEVBQXlDbEIsS0FBSyxFQUE5QyxFQUFrRDtBQUNoRG9CLElBQUFBLFlBQVksSUFBSUQsY0FBaEI7QUFDRDs7QUFFRCxTQUFPQyxZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMpIHtcbiAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBsaW5lcyA9IHRoaXMubGluZXMuc2xpY2UoKSwgIC8vL1xuICAgICAgICAgIHBhcnNlVHJlZSA9IG5ldyBQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGxldCB3aWR0aDtcblxuICAgIGxldCBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgaWYgKGxpbmVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB3aWR0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RMaW5lID0gbGFzdCh0aGlzLmxpbmVzKSxcbiAgICAgICAgICAgIGxhc3RMaW5lTGVuZ3RoID0gbGFzdExpbmUubGVuZ3RoO1xuXG4gICAgICB3aWR0aCA9IGxhc3RMaW5lTGVuZ3RoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGluZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGZvckVhY2hMaW5lKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saW5lcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFwcGVuZFRvVG9wKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZSgobGluZSkgPT4ge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kVG9MZWZ0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZSgobGluZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGluZSArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kVG9SaWdodChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgbGluZTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvQm90dG9tKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZSgobGluZSkgPT4ge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkVG9wTWFyZ2luKHRvcE1hcmdpbkRlcHRoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgdG9wTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICAgIHRvcE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCh0b3BNYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9wTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdCh0b3BNYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgbGVmdE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChsZWZ0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGVmdE1hcmdpblN0cmluZyArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIGFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCByaWdodE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChyaWdodE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgcmlnaHRNYXJnaW5TdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgYm90dG9tTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICAgIGJvdHRvbU1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChib3R0b21NYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYm90dG9tTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChib3R0b21NYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuICBcbiAgcG9wTGluZSgpIHsgcmV0dXJuIHRoaXMubGluZXMucG9wKCk7IH1cbiAgXG4gIHNoaWZ0TGluZSgpIHsgcmV0dXJuIHRoaXMubGluZXMuc2hpZnQoKTsgfVxuICBcbiAgcHVzaExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnB1c2gobGluZSk7IH1cbiAgXG4gIHVuc2hpZnRMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpOyB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5saW5lcy5yZWR1Y2UoKHN0cmluZywgbGluZSkgPT4ge1xuICAgICAgc3RyaW5nICs9IGxpbmUgKyBcIlxcblwiO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIFwiXCIpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobWFyZ2luV2lkdGgsIHNwYWNlQ2hhcmFjdGVyKSB7XG4gIHNwYWNlQ2hhcmFjdGVyID0gc3BhY2VDaGFyYWN0ZXIgfHwgXCIgXCI7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyaW5nICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cmluZztcbn1cbiJdfQ==