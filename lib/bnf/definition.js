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

exports["default"] = Definition;

function parseParts(parts, nodes, configuration) {
  var parsed = false;
  var partsLength = parts.length;

  if (partsLength === 0) {
    parsed = true;
    return parsed;
  }

  var firstPart = (0, _array.first)(parts),
      allButFirstParts = (0, _array.allButFirst)(parts),
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
          (0, _array.concat)(nodes, node);
          (0, _array.concat)(nodes, partNodeOrNodes);
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
    (0, _array.concat)(nodes, partNodeOrNodes);
    parsed = parseParts(parts, nodes, configuration);

    if (!parsed) {
      configuration.backtrack(savedIndex);
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJwYXJzZWQiLCJwYXJzZVBhcnRzIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInJ1bGUiLCJmaW5kUnVsZSIsInBhcnNlUnVsZVdpdGhMb29rQWhlYWQiLCJub2RlIiwicGFydE5vZGVPck5vZGVzIiwiYmFja3RyYWNrIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxVO0FBQ25CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1DLFNBQVMsR0FBRyxrQkFBTSxLQUFLRCxLQUFYLENBQWxCO0FBRUEsYUFBT0MsU0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsV0FBVyxHQUFHLEtBQUtGLEtBQUwsQ0FBV0csTUFBL0I7QUFFQSxhQUFPRCxXQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTUUsZ0JBQWdCLEdBQUcsd0JBQVksS0FBS0osS0FBakIsQ0FBekI7QUFFQSxhQUFPSSxnQkFBUDtBQUNEOzs7NEJBRU9DLEksRUFBTTtBQUNaLFdBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkQsSUFBaEI7QUFDRDs7OzBCQUVLRSxhLEVBQWU7QUFDbkIsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFF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RCxhQUFmLENBQW5COztBQUVBLFFBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hGLE1BQUFBLGFBQWEsQ0FBQ29CLFNBQWQsQ0FBd0JYLFVBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPUCxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBmaXJzdCwgY29uY2F0LCBhbGxCdXRGaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cblxuICBhZGRQYXJ0KHBhcnQpIHtcbiAgICB0aGlzLnBhcnRzLnB1c2gocGFydCk7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBjb25maWd1cmF0aW9uKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgfSwgXCJcIiksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGNvbmZpZ3VyYXRpb24pIHtcbiAgbGV0IHBhcnNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChwYXJ0c0xlbmd0aCA9PT0gMCkge1xuICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QocGFydHMpLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCk7XG5cbiAgcGFydHMgPSBhbGxCdXRGaXJzdFBhcnRzOyAvLy9cblxuICBjb25zdCBwYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IGlzUGFydFJ1bGVOYW1lUGFydChwYXJ0KTtcblxuICBpZiAocGFydFJ1bGVOYW1lUGFydCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBsb29rQWhlYWQgPSBydWxlTmFtZVBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgIGlmIChsb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSBydWxlTmFtZVBhcnQuZmluZFJ1bGUoY29uZmlndXJhdGlvbik7XG5cbiAgICAgIHJ1bGVOYW1lUGFydC5wYXJzZVJ1bGVXaXRoTG9va0FoZWFkKHJ1bGUsIGNvbmZpZ3VyYXRpb24sIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IFtdO1xuXG4gICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydE5vZGVPck5vZGVzLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25jYXQobm9kZXMsIG5vZGUpO1xuXG4gICAgICAgICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24pO1xuXG4gIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgY29uZmlndXJhdGlvbik7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdfQ==