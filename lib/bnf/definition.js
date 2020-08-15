"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _array = require("../utilities/array");

var _part = require("../utilities/part");

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
    value: function parse(nodes, context, callback) {
      var parsed;
      var index = 0;
      parsed = parseParts(this.parts, nodes, index, context, callback);
      return parsed;
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
  var parsed;
  var partsLength = parts.length;

  if (index === partsLength) {
    parsed = true;

    if (callback) {
      parsed = callback();
    }
  } else {
    var part = parts[index++];
    parsed = parsePart(part, parts, nodes, index, context, callback);
  }

  return parsed;
}

function parsePart(part, parts, nodes, index, context, callback) {
  var parsed;

  if (callback) {
    var partsNodes = [];
    parsed = part.parse(nodes, context, function () {
      return parseParts(parts, partsNodes, index, context, callback);
    });

    if (parsed) {
      (0, _array.push)(nodes, partsNodes);
    }
  } else {
    var partRuleNamePartWithLookAhead = (0, _part.isPartRuleNamePartWithLookAhead)(part);

    if (partRuleNamePartWithLookAhead) {
      var ruleNamePart = part; ///

      var _partsNodes = [];
      parsed = ruleNamePart.parse(nodes, context, function () {
        return parseParts(parts, _partsNodes, index, context);
      });

      if (parsed) {
        (0, _array.push)(nodes, _partsNodes);
      }
    } else {
      parsed = part.parse(nodes, context);

      if (parsed) {
        parsed = parseParts(parts, nodes, index, context);
      }
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsImluZGV4IiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwicGFyc2VQYXJ0IiwicGFydHNOb2RlcyIsInBhcnNlIiwicGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJydWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxVO0FBQ25CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1DLFNBQVMsR0FBRyxrQkFBTSxLQUFLRCxLQUFYLENBQWxCO0FBRUEsYUFBT0MsU0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsV0FBVyxHQUFHLEtBQUtGLEtBQUwsQ0FBV0csTUFBL0I7QUFFQSxhQUFPRCxXQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTUUsZ0JBQWdCLEdBQUcsd0JBQVksS0FBS0osS0FBakIsQ0FBekI7QUFFQSxhQUFPSSxnQkFBUDtBQUNEOzs7NEJBRU9DLEksRUFBTTtBQUNaLFdBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkQsSUFBaEI7QUFDRDs7OzBCQUVLRSxLLEVBQU9DLE8sRUFBU0MsUSxFQUFVO0FBQzlCLFVBQUlDLE1BQUo7QUFFQSxVQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUVBRCxNQUFBQSxNQUFNLEdBQUdFLFVBQVUsQ0FBQyxLQUFLWixLQUFOLEVBQWFPLEtBQWIs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VSxDQUFDWixLQUFELEVBQVFPLEtBQVIsRUFBZUksS0FBZixFQUFzQkgsT0FBdEIsQ0FBbkI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBT0UsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHB1c2gsIGZpcnN0LCBhbGxCdXRGaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cblxuICBhZGRQYXJ0KHBhcnQpIHtcbiAgICB0aGlzLnBhcnRzLnB1c2gocGFydCk7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgaW5kZXggPSAwO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgfSwgXCJcIiksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4KytdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkID0gaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZChwYXJ0KTtcblxuICAgIGlmIChwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgICAgcGFyc2VkID0gcnVsZU5hbWVQYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0LCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVzLCBpbmRleCwgY29udGV4dCkpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXX0=