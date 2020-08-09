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
      var parsed = callback();

      if (!parsed) {
        nodes = null;
      }
    }
  } else {
    var part = parts[index++];
    nodes = parsePart(part, parts, nodes, index, context, callback);
  }

  return nodes;
}

function parsePart(part, parts, nodes, index, context, callback) {
  if (callback) {
    var partNodes = null;
    nodes = part.parse(nodes, context, function () {
      partNodes = [];
      partNodes = parseParts(parts, partNodes, index, context, callback);
      var parsed = partNodes !== null;
      return parsed;
    });
    nodes = partNodes !== null ? [].concat(_toConsumableArray(nodes), _toConsumableArray(partNodes)) : null;
  } else {
    var partRuleNamePartWithLookAhead = (0, _part.isPartRuleNamePartWithLookAhead)(part);

    if (partRuleNamePartWithLookAhead) {
      var ruleNamePartWithLookAhead = part; ///

      var _partNodes = null;
      nodes = ruleNamePartWithLookAhead.parse(nodes, context, function () {
        _partNodes = [];
        _partNodes = parseParts(parts, _partNodes, index, context);
        var parsed = _partNodes !== null;
        return parsed;
      });
      nodes = _partNodes !== null ? [].concat(_toConsumableArray(nodes), _toConsumableArray(_partNodes)) : null;
    } else {
      nodes = part.parse(nodes, context);

      if (nodes !== null) {
        nodes = parseParts(parts, nodes, index, context);
      }
    }
  }

  return nodes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb250ZXh0IiwiY2FsbGJhY2siLCJub2RlcyIsImluZGV4IiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwicGFyc2VkIiwicGFyc2VQYXJ0IiwicGFydE5vZGVzIiwicGFyc2UiLCJwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCIsInJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVO0FBQ25CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1DLFNBQVMsR0FBRyxrQkFBTSxLQUFLRCxLQUFYLENBQWxCO0FBRUEsYUFBT0MsU0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsV0FBVyxHQUFHLEtBQUtGLEtBQUwsQ0FBV0csTUFBL0I7QUFFQSxhQUFPRCxXQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTUUsZ0JBQWdCLEdBQUcsd0JBQVksS0FBS0osS0FBakIsQ0FBekI7QUFFQSxhQUFPSSxnQkFBUDtBQUNEOzs7NEJBRU9DLEksRUFBTTtBQUNaLFdBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkQsSUFBaEI7QUFDRDs7OzBCQUVLRSxPLEVBQVNDLFEsRUFBVTtBQUN2QixVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBLFVBQU1DLEtBQUssR0FBRyxDQUFkO0FBRUFELE1BQUFBLEtBQUssR0FBR0UsVUFBVSxD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LE1BQU0sR0FBSUUsVUFBUyxLQUFLLElBQTlCO0FBRUEsZUFBT0YsTUFBUDtBQUNELE9BUk8sQ0FBUjtBQVVBUixNQUFBQSxLQUFLLEdBQUlVLFVBQVMsS0FBSyxJQUFmLGdDQUNPVixLQURQLHNCQUNpQlUsVUFEakIsS0FFSSxJQUZaO0FBR0QsS0FsQkQsTUFrQk87QUFDTFYsTUFBQUEsS0FBSyxHQUFHSixJQUFJLENBQUNlLEtBQUwsQ0FBV1gsS0FBWCxFQUFrQkYsT0FBbEIsQ0FBUjs7QUFFQSxVQUFJRSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQkEsUUFBQUEsS0FBSyxHQUFHRSxVQUFVLENBQUNYLEtBQUQsRUFBUVMsS0FBUixFQUFlQyxLQUFmLEVBQXNCSCxPQUF0QixDQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPRSxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIGFsbEJ1dEZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGFkZFBhcnQocGFydCkge1xuICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICBub2RlcyA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgfSwgXCJcIiksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleCsrXTtcblxuICAgIG5vZGVzID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjaykge1xuICAgIGxldCBwYXJ0Tm9kZXMgPSBudWxsO1xuXG4gICAgbm9kZXMgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICBwYXJ0Tm9kZXMgPSBbXTtcblxuICAgICAgcGFydE5vZGVzID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydE5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSAocGFydE5vZGVzICE9PSBudWxsKTtcblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcblxuICAgIG5vZGVzID0gKHBhcnROb2RlcyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICBbIC4uLm5vZGVzLCAuLi5wYXJ0Tm9kZXMgXSA6XG4gICAgICAgICAgICAgICAgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCA9IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQocGFydCk7XG5cbiAgICBpZiAocGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQgPSBwYXJ0OyAvLy9cblxuICAgICAgbGV0IHBhcnROb2RlcyA9IG51bGw7XG5cbiAgICAgIG5vZGVzID0gcnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZC5wYXJzZShub2RlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBwYXJ0Tm9kZXMgPSBbXTtcblxuICAgICAgICBwYXJ0Tm9kZXMgPSBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0Tm9kZXMsIGluZGV4LCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSAocGFydE5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgICAgIG5vZGVzID0gKHBhcnROb2RlcyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIFsgLi4ubm9kZXMsIC4uLnBhcnROb2RlcyBdIDpcbiAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVzID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlcyA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuIl19