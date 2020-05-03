"use strict";

var _array = _interopRequireDefault(require("../utilities/array"));

var _part = require("../utilities/part");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _array["default"].first,
    concat = _array["default"].concat,
    allButFirst = _array["default"].allButFirst;

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
      var firstPart = first(this.parts);
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
      var allButFirstParts = allButFirst(this.parts);
      return allButFirstParts;
    }
  }, {
    key: "addPart",
    value: function addPart(part) {
      this.parts.push(part);
    }
  }, {
    key: "parse",
    value: function parse(configuration) {
      var nodes = [];
      var parsed = parseParts(this.parts, nodes, configuration);

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

module.exports = Definition;

function parseParts(parts, nodes, configuration) {
  var parsed = false;
  var partsLength = parts.length;

  if (partsLength === 0) {
    parsed = true;
    return parsed;
  }

  var firstPart = first(parts),
      allButFirstParts = allButFirst(parts),
      savedIndex = configuration.getSavedIndex();
  parts = allButFirstParts; ///

  var part = firstPart,
      ///
  partRuleNamePart = (0, _part.isPartRuleNamePart)(part);

  if (partRuleNamePart) {
    var ruleNamePart = part,
        ///
    lookAhead = ruleNamePart.isLookAhead();

    if (lookAhead) {
      var rule = ruleNamePart.findRule(configuration);
      ruleNamePart.parseRuleWithLookAhead(rule, configuration, function (node) {
        var partNodeOrNodes = [];

        if (node !== null) {
          parsed = parseParts(parts, partNodeOrNodes, configuration);
        }

        if (parsed) {
          concat(nodes, node);
          concat(nodes, partNodeOrNodes);
        }

        if (!parsed) {
          configuration.backtrack(savedIndex);
        }

        return parsed;
      });
      return parsed;
    }
  }

  var partNodeOrNodes = part.parse(configuration);

  if (partNodeOrNodes !== null) {
    concat(nodes, partNodeOrNodes);
    parsed = parseParts(parts, nodes, configuration);

    if (!parsed) {
      configuration.backtrack(savedIndex);
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImNvbmNhdCIsImFsbEJ1dEZpcnN0IiwiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJwYXJzZWQiLCJwYXJzZVBhcnRzIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJ0UnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0IiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJydWxlIiwiZmluZFJ1bGUiLCJwYXJzZVJ1bGVXaXRoTG9va0FoZWFkIiwibm9kZSIsInBhcnROb2RlT3JOb2RlcyIsImJhY2t0cmFjayIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztJQUVRQSxLLEdBQStCQyxpQixDQUEvQkQsSztJQUFPRSxNLEdBQXdCRCxpQixDQUF4QkMsTTtJQUFRQyxXLEdBQWdCRixpQixDQUFoQkUsVzs7SUFFakJDLFU7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxTQUFTLEdBQUdOLEtBQUssQ0FBQyxLQUFLSyxLQUFOLENBQXZCO0FBRUEsYUFBT0MsU0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsV0FBVyxHQUFHLEtBQUtGLEtBQUwsQ0FBV0csTUFBL0I7QUFFQSxhQUFPRCxXQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTUUsZ0JBQWdCLEdBQUdOLFdB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O0FBRUQsZUFBT1QsTUFBUDtBQUNELE9BbEJEO0FBb0JBLGFBQU9BLE1BQVA7QUFDRDtBQUNGOztBQUVELE1BQU1tQixlQUFlLEdBQUd2QixJQUFJLENBQUN5QixLQUFMLENBQVd2QixhQUFYLENBQXhCOztBQUVBLE1BQUlxQixlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUIvQixJQUFBQSxNQUFNLENBQUNXLEtBQUQsRUFBUW9CLGVBQVIsQ0FBTjtBQUVBbkIsSUFBQUEsTUFBTSxHQUFHQyxVQUFVLENBQUNWLEtBQUQsRUFBUVEsS0FBUixFQUFlRCxhQUFmLENBQW5COztBQUVBLFFBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hGLE1BQUFBLGFBQWEsQ0FBQ3NCLFNBQWQsQ0FBd0JYLFVBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPVCxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGFycmF5VXRpbGl0aWVzIGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGNvbmNhdCwgYWxsQnV0Rmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGFkZFBhcnQocGFydCkge1xuICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBcIlwiKSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7IC8vL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgIH0sIFwiXCIpLFxuICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbjtcblxuZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGNvbmZpZ3VyYXRpb24pIHtcbiAgbGV0IHBhcnNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChwYXJ0c0xlbmd0aCA9PT0gMCkge1xuICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QocGFydHMpLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCk7XG5cbiAgcGFydHMgPSBhbGxCdXRGaXJzdFBhcnRzOyAvLy9cblxuICBjb25zdCBwYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IGlzUGFydFJ1bGVOYW1lUGFydChwYXJ0KTtcblxuICBpZiAocGFydFJ1bGVOYW1lUGFydCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBsb29rQWhlYWQgPSBydWxlTmFtZVBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgIGlmIChsb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSBydWxlTmFtZVBhcnQuZmluZFJ1bGUoY29uZmlndXJhdGlvbik7XG5cbiAgICAgIHJ1bGVOYW1lUGFydC5wYXJzZVJ1bGVXaXRoTG9va0FoZWFkKHJ1bGUsIGNvbmZpZ3VyYXRpb24sIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gW107XG5cbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0Tm9kZU9yTm9kZXMsIGNvbmZpZ3VyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbmNhdChub2Rlcywgbm9kZSk7XG5cbiAgICAgICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbik7XG5cbiAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBjb25maWd1cmF0aW9uKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl19