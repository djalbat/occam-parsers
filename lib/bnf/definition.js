"use strict";

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

module.exports = Definition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJwYXJzZWQiLCJwYXJzZVBhcnRzIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJ0UnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0IiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJydWxlIiwiZmluZFJ1bGUiLCJwYXJzZVJ1bGVXaXRoTG9va0FoZWFkIiwibm9kZSIsInBhcnROb2RlT3JOb2RlcyIsImJhY2t0cmFjayIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7SUFFTUEsVTtBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1DLFNBQVMsR0FBRyxrQkFBTSxLQUFLRCxLQUFYLENBQWxCO0FBRUEsYUFBT0MsU0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsV0FBVyxHQUFHLEtBQUtGLEtBQUwsQ0FBV0csTUFBL0I7QUFFQSxhQUFPRCxXQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTUUsZ0JBQWdCLEdBQUcsd0JBQVksS0FBS0osS0FBakIsQ0FBekI7QUFFQSxhQUFPSSxnQkFBUDtBQUNEOzs7NEJBRU9DLEksRUFBTTtBQUNaLFdBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkQsSUFBaEI7QUFDRDs7OzBCQUVLRSxhLEVBQWU7QUFDbkIsVUFBSUMsS0FBSyxH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QW5CLElBQUFBLE1BQU0sR0FBR0MsVUFBVSxDQUFDVixLQUFELEVBQVFRLEtBQVIsRUFBZUQsYUFBZixDQUFuQjs7QUFFQSxRQUFJLENBQUNFLE1BQUwsRUFBYTtBQUNYRixNQUFBQSxhQUFhLENBQUNzQixTQUFkLENBQXdCWCxVQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT1QsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGlzUGFydFJ1bGVOYW1lUGFydCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgZmlyc3QsIGNvbmNhdCwgYWxsQnV0Rmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgZ2V0Rmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gcGFydHNMZW5ndGg7XG4gIH1cblxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG5cbiAgYWRkUGFydChwYXJ0KSB7XG4gICAgdGhpcy5wYXJ0cy5wdXNoKHBhcnQpO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2RlcywgY29uZmlndXJhdGlvbik7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgfSwgXCJcIiksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uO1xuXG5mdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgY29uZmlndXJhdGlvbikge1xuICBsZXQgcGFyc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKHBhcnRzTGVuZ3RoID09PSAwKSB7XG4gICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgIGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdChwYXJ0cyksXG4gICAgICAgIHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKTtcblxuICBwYXJ0cyA9IGFsbEJ1dEZpcnN0UGFydHM7IC8vL1xuXG4gIGNvbnN0IHBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gaXNQYXJ0UnVsZU5hbWVQYXJ0KHBhcnQpO1xuXG4gIGlmIChwYXJ0UnVsZU5hbWVQYXJ0KSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpO1xuXG4gICAgaWYgKGxvb2tBaGVhZCkge1xuICAgICAgY29uc3QgcnVsZSA9IHJ1bGVOYW1lUGFydC5maW5kUnVsZShjb25maWd1cmF0aW9uKTtcblxuICAgICAgcnVsZU5hbWVQYXJ0LnBhcnNlUnVsZVdpdGhMb29rQWhlYWQocnVsZSwgY29uZmlndXJhdGlvbiwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBbXTtcblxuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIHBhcnROb2RlT3JOb2RlcywgY29uZmlndXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uY2F0KG5vZGVzLCBub2RlKTtcblxuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uKTtcblxuICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXX0=