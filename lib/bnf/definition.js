"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _part = require("../utilities/part");

var _array = require("../utilities/array");

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
      var index = 0,
          parsed = parseParts(this.parts, nodes, index, context, callback);

      if (!parsed) {
        nodes = null;
      }

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
  var parsed = false;
  var partsLength = parts.length;

  if (index === partsLength) {
    parsed = callback ? callback() : true;
  } else {
    var part = parts[index++];
    parsed = parsePart(part, parts, nodes, index, context, callback);
  }

  return parsed;
}

function parsePart(part, parts, nodes, index, context, callback) {
  var parsed = false;
  var partRuleNamePart = (0, _part.isPartRuleNamePart)(part);

  if (partRuleNamePart) {
    var ruleNamePart = part; ///

    if (!callback) {
      var lookAhead = ruleNamePart.isLookAhead(); ///

      if (lookAhead) {
        callback = function callback() {
          return true;
        }; ///

      }
    }

    if (callback) {
      var partsNodeOrNodes = [],
          partNodeOrNodes = ruleNamePart.parse(context, function () {
        return parseParts(parts, partsNodeOrNodes, index, context) && callback();
      });

      if (partNodeOrNodes !== null) {
        (0, _array.concat)(nodes, partNodeOrNodes, partsNodeOrNodes);
        parsed = true;
      }
    } else {
      var _partNodeOrNodes = ruleNamePart.parse(context);

      if (_partNodeOrNodes !== null) {
        (0, _array.concat)(nodes, _partNodeOrNodes);
        parsed = parseParts(parts, nodes, index, context);
      }
    }
  } else {
    var _partNodeOrNodes2 = part.parse(context, callback);

    if (_partNodeOrNodes2 !== null) {
      (0, _array.concat)(nodes, _partNodeOrNodes2);
      parsed = parseParts(parts, nodes, index, context, callback);
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb250ZXh0IiwiY2FsbGJhY2siLCJub2RlcyIsImluZGV4IiwicGFyc2VkIiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwicGFyc2VQYXJ0IiwicGFydFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwicGFydHNOb2RlT3JOb2RlcyIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7OztJQUVxQkEsVTtBQUNuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxTQUFTLEdBQUcsa0JBQU0sS0FBS0QsS0FBWCxDQUFsQjtBQUVBLGFBQU9DLFNBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLFdBQVcsR0FBRyxLQUFLRixLQUFMLENBQVdHLE1BQS9CO0FBRUEsYUFBT0QsV0FBUDtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQU1FLGdCQUFnQixHQUFHLHdCQUFZLEtBQUtKLEtBQWpCLENBQXpCO0FBRUEsYUFBT0ksZ0JBQVA7QUFDRDs7OzRCQUVPQyxJLEVBQU07QUFDWixXQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JELElBQWhCO0FBQ0Q7OzswQkFFS0UsTyxFQUFTQyxRLEVBQVU7QUFDdkIsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFFQSxVQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUFBLFVBQ01DLE1BQU0s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LFVBQUlpQixnQkFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLDJCQUFPZixLQUFQLEVBQWNlLGdCQUFkO0FBRUFiLFFBQUFBLE1BQU0sR0FBR0MsVUFBVSxDQUFDWixLQUFELEVBQVFTLEtBQVIsRUFBZUMsS0FBZixFQUFzQkgsT0FBdEIsQ0FBbkI7QUFDRDtBQUNGO0FBQ0YsR0E3QkQsTUE2Qk87QUFDTCxRQUFNaUIsaUJBQWUsR0FBR25CLElBQUksQ0FBQ29CLEtBQUwsQ0FBV2xCLE9BQVgsRUFBb0JDLFFBQXBCLENBQXhCOztBQUVBLFFBQUlnQixpQkFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLHlCQUFPZixLQUFQLEVBQWNlLGlCQUFkO0FBRUFiLE1BQUFBLE1BQU0sR0FBR0MsVUFBVSxDQUFDWixLQUFELEVBQVFTLEtBQVIsRUFBZUMsS0FBZixFQUFzQkgsT0FBdEIsRUFBK0JDLFFBQS9CLENBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRyxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBmaXJzdCwgY29uY2F0LCBhbGxCdXRGaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cblxuICBhZGRQYXJ0KHBhcnQpIHtcbiAgICB0aGlzLnBhcnRzLnB1c2gocGFydCk7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gXCJcIikge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBcIlwiKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgcGFyc2VkID0gY2FsbGJhY2sgP1xuICAgICAgICAgICAgICAgY2FsbGJhY2soKSA6XG4gICAgICAgICAgICAgICAgIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4KytdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydFJ1bGVOYW1lUGFydCA9IGlzUGFydFJ1bGVOYW1lUGFydChwYXJ0KTtcblxuICBpZiAocGFydFJ1bGVOYW1lUGFydCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQ7ICAvLy9cblxuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpOyAgLy8vXG5cbiAgICAgIGlmIChsb29rQWhlYWQpIHtcbiAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB0cnVlOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBwYXJ0c05vZGVPck5vZGVzID0gW10sXG4gICAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBydWxlTmFtZVBhcnQucGFyc2UoY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlT3JOb2RlcywgaW5kZXgsIGNvbnRleHQpICYmIGNhbGxiYWNrKCkpO1xuXG4gICAgICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzLCBwYXJ0c05vZGVPck5vZGVzKTtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBydWxlTmFtZVBhcnQucGFyc2UoY29udGV4dCk7XG5cbiAgICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl19