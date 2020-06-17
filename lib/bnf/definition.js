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
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var parsed = false;
  var partsLength = parts.length;

  if (index === partsLength) {
    parsed = true;
    return parsed;
  }

  var part = parts[index],
      savedIndex = configuration.getSavedIndex(),
      partRuleNamePart = (0, _part.isPartRuleNamePart)(part);
  index++;

  if (partRuleNamePart) {
    var ruleNamePart = part,
        ///
    lookAhead = ruleNamePart.isLookAhead();

    if (lookAhead) {
      var rule = ruleNamePart.findRule(configuration);
      ruleNamePart.parseRuleWithLookAhead(rule, configuration, function (node) {
        var partNodeOrNodes = [];

        if (node !== null) {
          parsed = parseParts(parts, partNodeOrNodes, configuration, index);
        }

        if (parsed) {
          nodes.push(node);
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
    parsed = parseParts(parts, nodes, configuration, index);

    if (!parsed) {
      configuration.backtrack(savedIndex);
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJwYXJzZWQiLCJwYXJzZVBhcnRzIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJpbmRleCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwicnVsZSIsImZpbmRSdWxlIiwicGFyc2VSdWxlV2l0aExvb2tBaGVhZCIsIm5vZGUiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJiYWNrdHJhY2siLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBLFU7QUFDbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUMsU0FBUyxHQUFHLGtCQUFNLEtBQUtELEtBQVgsQ0FBbEI7QUFFQSxhQUFPQyxTQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxXQUFXLEdBQUcsS0FBS0YsS0FBTCxDQUFXRyxNQUEvQjtBQUVBLGFBQU9ELFdBQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNRSxnQkFBZ0IsR0FBRyx3QkFBWSxLQUFLSixLQUFqQixDQUF6QjtBQUVBLGFBQU9JLGdCQUFQO0FBQ0Q7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCRCxJQUFoQjtBQUNEOzs7MEJBRUtFLGEsRUFBZTtBQUNuQixVQUFJQyxLQUFLLEdBQUcs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TUFBTCxFQUFhO0FBQ1hGLE1BQUFBLGFBQWEsQ0FBQ3FCLFNBQWQsQ0FBd0JYLFVBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPUixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBmaXJzdCwgY29uY2F0LCBhbGxCdXRGaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cblxuICBhZGRQYXJ0KHBhcnQpIHtcbiAgICB0aGlzLnBhcnRzLnB1c2gocGFydCk7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBjb25maWd1cmF0aW9uKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgfSwgXCJcIiksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGNvbmZpZ3VyYXRpb24sIGluZGV4ID0gMCkge1xuICBsZXQgcGFyc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XSxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gaXNQYXJ0UnVsZU5hbWVQYXJ0KHBhcnQpO1xuXG4gIGluZGV4Kys7XG5cbiAgaWYgKHBhcnRSdWxlTmFtZVBhcnQpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCk7XG5cbiAgICBpZiAobG9va0FoZWFkKSB7XG4gICAgICBjb25zdCBydWxlID0gcnVsZU5hbWVQYXJ0LmZpbmRSdWxlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBydWxlTmFtZVBhcnQucGFyc2VSdWxlV2l0aExvb2tBaGVhZChydWxlLCBjb25maWd1cmF0aW9uLCAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBbXTtcblxuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIHBhcnROb2RlT3JOb2RlcywgY29uZmlndXJhdGlvbiwgaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICAgICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbik7XG5cbiAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBjb25maWd1cmF0aW9uLCBpbmRleCk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdfQ==