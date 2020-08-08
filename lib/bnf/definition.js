"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _array = require("../utilities/array");

var _part = require("../utilities/part");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Definition = /*#__PURE__*/function () {
  function Definition(parts) {
    _classCallCheck(this, Definition);

    this.parts = parts;
  }

  _createClass(Definition, [{
    key: "getParts",
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: "getFirstPart",
    value: function getFirstPart() {
      var firstPart = (0, _array.first)(this.parts);
      return firstPart;
    }
  }, {
    key: "getPartsLength",
    value: function getPartsLength() {
      var partsLength = this.parts.length;
      return partsLength;
    }
  }, {
    key: "getAllButFirstParts",
    value: function getAllButFirstParts() {
      var allButFirstParts = (0, _array.allButFirst)(this.parts);
      return allButFirstParts;
    }
  }, {
    key: "addPart",
    value: function addPart(part) {
      this.parts.push(part);
    }
  }, {
    key: "parse",
    value: function parse(context, callback) {
      var nodes = [];
      var index = 0;
      nodes = parseParts(this.parts, nodes, index, context, callback);
      return nodes;
    }
  }, {
    key: "asString",
    value: function asString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.asString();

        if (partsString === "") {
          partsString = partString; ///
        } else {
          partsString = "".concat(partsString, " ").concat(partString);
        }

        return partsString;
      }, ""),
          string = partsString; ///

      return string;
    }
  }]);

  return Definition;
}();

exports["default"] = Definition;

function parseParts(parts, nodes, index, context, callback) {
  var partsLength = parts.length;

  if (index === partsLength) {
    if (callback) {
      callback();
    }
  } else {
    var part = parts[index++];
    nodes = parsePart(part, parts, nodes, index, context, callback);
  }

  return nodes;
}

function parsePart(part, parts, nodes, index, context, callback) {
  if (callback) {
    // const immediateCallback = () => parseParts(parts, nodes, index, context, callback);
    nodes = part.parse(nodes, context, callback);

    if (nodes !== null) {
      nodes = parseParts(parts, nodes, index, context, callback);
    }
  } else {
    var partRuleNamePartWithLookAhead = (0, _part.isPartRuleNamePartWithLookAhead)(part);

    if (partRuleNamePartWithLookAhead) {
      var partNodes = [];
      var ruleNamePartWithLookAhead = part; ///

      nodes = ruleNamePartWithLookAhead.parse(nodes, context, function () {
        partNodes = parseParts(parts, partNodes, index, context);
      });
      nodes = partNodes === null ? null : [].concat(_toConsumableArray(nodes), _toConsumableArray(partNodes));
    } else {
      nodes = part.parse(nodes, context);

      if (nodes !== null) {
        nodes = parseParts(parts, nodes, index, context);
      }
    }
  }

  return nodes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb250ZXh0IiwiY2FsbGJhY2siLCJub2RlcyIsImluZGV4IiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwicGFyc2VQYXJ0IiwicGFyc2UiLCJwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCIsInBhcnROb2RlcyIsInJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVO0FBQ25CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1DLFNBQVMsR0FBRyxrQkFBTSxLQUFLRCxLQUFYLENBQWxCO0FBRUEsYUFBT0MsU0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsV0FBVyxHQUFHLEtBQUtGLEtBQUwsQ0FBV0csTUFBL0I7QUFFQSxhQUFPRCxXQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTUUsZ0JBQWdCLEdBQUcsd0JBQVksS0FBS0osS0FBakIsQ0FBekI7QUFFQSxhQUFPSSxnQkFBUDtBQUNEOzs7NEJBRU9DLEksRUFBTTtBQUNaLFdBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkQsSUFBaEI7QUFDRDs7OzBCQUVLRSxPLEVBQVNDLFEsRUFBVTtBQUN2QixVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBLFVBQU1DLEtBQUssR0FBRyxDQUFkO0FBRUFELE1BQUFBLEtBQUssR0FBR0UsVUFBVSxDQUFDLEtBQUtY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c0JILE9BQXRCLENBQWxCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU9FLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgYWxsQnV0Rmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc1BhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgZ2V0Rmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gcGFydHNMZW5ndGg7XG4gIH1cblxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG5cbiAgYWRkUGFydChwYXJ0KSB7XG4gICAgdGhpcy5wYXJ0cy5wdXNoKHBhcnQpO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IGluZGV4ID0gMDtcblxuICAgIG5vZGVzID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gXCJcIikge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBcIlwiKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleCsrXTtcblxuICAgIG5vZGVzID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjaykge1xuICAgIC8vIGNvbnN0IGltbWVkaWF0ZUNhbGxiYWNrID0gKCkgPT4gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICBub2RlcyA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQgPSBpc1BhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkKHBhcnQpO1xuXG4gICAgaWYgKHBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkKSB7XG4gICAgICBsZXQgcGFydE5vZGVzID0gW107XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQgPSBwYXJ0OyAvLy9cblxuICAgICAgbm9kZXMgPSBydWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkLnBhcnNlKG5vZGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIHBhcnROb2RlcyA9IHBhcnNlUGFydHMocGFydHMsIHBhcnROb2RlcywgaW5kZXgsIGNvbnRleHQpXG4gICAgICB9KTtcblxuICAgICAgbm9kZXMgPSAocGFydE5vZGVzID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICBbIC4uLm5vZGVzLCAuLi5wYXJ0Tm9kZXMgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGVzID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZXM7XG59XG4iXX0=