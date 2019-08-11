'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var partUtilities = require('../utilities/part'),
    arrayUtilities = require('../utilities/array');

var isPartRuleNamePart = partUtilities.isPartRuleNamePart,
    first = arrayUtilities.first,
    concat = arrayUtilities.concat,
    allButFirst = arrayUtilities.allButFirst;

var Definition = function () {
  function Definition(parts) {
    _classCallCheck(this, Definition);

    this.parts = parts;
  }

  _createClass(Definition, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'getFirstPart',
    value: function getFirstPart() {
      var firstPart = first(this.parts);

      return firstPart;
    }
  }, {
    key: 'getPartsLength',
    value: function getPartsLength() {
      var partsLength = this.parts.length;

      return partsLength;
    }
  }, {
    key: 'getAllButFirstParts',
    value: function getAllButFirstParts() {
      var allButFirstParts = allButFirst(this.parts);

      return allButFirstParts;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      var nodes = [];

      var parsed = parseParts(this.parts, nodes, configuration, noWhitespace);

      if (!parsed) {
        nodes = null;
      }

      return nodes;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.asString();

        if (partsString === null) {
          partsString = partString; ///
        } else {
          partsString = partsString + ' ' + partString;
        }

        return partsString;
      }, null),
          string = partsString; ///

      return string;
    }
  }]);

  return Definition;
}();

module.exports = Definition;

function parseParts(parts, nodes, configuration, noWhitespace) {
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
  partRuleNamePart = isPartRuleNamePart(part);

  if (partRuleNamePart) {
    var ruleNamePart = part,
        ///
    lookAhead = ruleNamePart.isLookAhead();

    if (lookAhead) {
      var rule = ruleNamePart.findRule(configuration);

      ruleNamePart.parseRuleWithLookAhead(rule, configuration, noWhitespace, function (node) {
        var partNodeOrNodes = [];

        if (node !== null) {
          noWhitespace = false; ///

          parsed = parseParts(parts, partNodeOrNodes, configuration, noWhitespace);
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

  var partNodeOrNodes = part.parse(configuration, noWhitespace);

  if (partNodeOrNodes !== null) {
    concat(nodes, partNodeOrNodes);

    noWhitespace = false; ///

    parsed = parseParts(parts, nodes, configuration, noWhitespace);

    if (!parsed) {
      configuration.backtrack(savedIndex);
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJwYXJ0VXRpbGl0aWVzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiaXNQYXJ0UnVsZU5hbWVQYXJ0IiwiZmlyc3QiLCJjb25jYXQiLCJhbGxCdXRGaXJzdCIsIkRlZmluaXRpb24iLCJwYXJ0cyIsImZpcnN0UGFydCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiYWxsQnV0Rmlyc3RQYXJ0cyIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInBhcnNlZCIsInBhcnNlUGFydHMiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnQiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJ0UnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0IiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJydWxlIiwiZmluZFJ1bGUiLCJwYXJzZVJ1bGVXaXRoTG9va0FoZWFkIiwibm9kZSIsInBhcnROb2RlT3JOb2RlcyIsImJhY2t0cmFjayIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCOztBQUdNLElBQUVFLGtCQUFGLEdBQXlCSCxhQUF6QixDQUFFRyxrQkFBRjtBQUFBLElBQ0VDLEtBREYsR0FDaUNGLGNBRGpDLENBQ0VFLEtBREY7QUFBQSxJQUNTQyxNQURULEdBQ2lDSCxjQURqQyxDQUNTRyxNQURUO0FBQUEsSUFDaUJDLFdBRGpCLEdBQ2lDSixjQURqQyxDQUNpQkksV0FEakI7O0lBR0FDLFU7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxZQUFZTCxNQUFNLEtBQUtJLEtBQVgsQ0FBbEI7O0FBRUEsYUFBT0MsU0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsY0FBYyxLQUFLRixLQUFMLENBQVdHLE1BQS9COztBQUVBLGFBQU9ELFdBQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNRSxtQkFBbUJOLFlBQVksS0FBS0UsS0FBakIsQ0FBekI7O0FBRUEsYUFBT0ksZ0JBQVA7QUFDRDs7OzBCQUVLQyxhLEVBQWVDLFksRUFBYztBQUNqQyxVQUFJQyxRQUFRLEVBQVo7O0FBRUEsVUFBTUMsU0FBU0MsV0FBVyxLQUFLVCxLQUFoQixFQUF1Qk8sS0FBdkIsRUFBOEJGLGFBQTlCLEVBQTZDQyxZQUE3QyxDQUFmOztBQUVBLFVBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hELGdCQUFRLElBQVI7QUFDRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1HLGNBQWMsS0FBS1YsS0FBTCxDQUFXVyxNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JFLElBQXRCLEVBQTRCO0FBQzVELFlBQU1DLGFBQWFELEtBQUtFLFFBQUwsRUFBbkI7O0FBRUEsWUFBSUosZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCQSx3QkFBY0csVUFBZCxDQUR3QixDQUNFO0FBQzNCLFNBRkQsTUFFTztBQUNMSCx3QkFBaUJBLFdBQWpCLFNBQWdDRyxVQUFoQztBQUNEOztBQUVELGVBQU9ILFdBQVA7QUFDRCxPQVZlLEVBVWIsSUFWYSxDQUFwQjtBQUFBLFVBV0lLLFNBQVNMLFdBWGIsQ0FEUyxDQVlpQjs7QUFFMUIsYUFBT0ssTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmxCLFVBQWpCOztBQUVBLFNBQVNVLFVBQVQsQ0FBb0JULEtBQXBCLEVBQTJCTyxLQUEzQixFQUFrQ0YsYUFBbEMsRUFBaURDLFlBQWpELEVBQStEO0FBQzdELE1BQUlFLFNBQVMsS0FBYjs7QUFFQSxNQUFNTixjQUFjRixNQUFNRyxNQUExQjs7QUFFQSxNQUFJRCxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckJNLGFBQVMsSUFBVDs7QUFFQSxXQUFPQSxNQUFQO0FBQ0Q7O0FBRUQsTUFBTVAsWUFBWUwsTUFBTUksS0FBTixDQUFsQjtBQUFBLE1BQ01JLG1CQUFtQk4sWUFBWUUsS0FBWixDQUR6QjtBQUFBLE1BRU1rQixhQUFhYixjQUFjYyxhQUFkLEVBRm5COztBQUlBbkIsVUFBUUksZ0JBQVIsQ0FmNkQsQ0FlbkM7O0FBRTFCLE1BQU1RLE9BQU9YLFNBQWI7QUFBQSxNQUF3QjtBQUNsQm1CLHFCQUFtQnpCLG1CQUFtQmlCLElBQW5CLENBRHpCOztBQUdBLE1BQUlRLGdCQUFKLEVBQXNCO0FBQ3BCLFFBQU1DLGVBQWVULElBQXJCO0FBQUEsUUFBNEI7QUFDdEJVLGdCQUFZRCxhQUFhRSxXQUFiLEVBRGxCOztBQUdBLFFBQUlELFNBQUosRUFBZTtBQUNiLFVBQU1FLE9BQU9ILGFBQWFJLFFBQWIsQ0FBc0JwQixhQUF0QixDQUFiOztBQUVBZ0IsbUJBQWFLLHNCQUFiLENBQW9DRixJQUFwQyxFQUEwQ25CLGFBQTFDLEVBQXlEQyxZQUF6RCxFQUF1RSxVQUFTcUIsSUFBVCxFQUFlO0FBQ3BGLFlBQU1DLGtCQUFrQixFQUF4Qjs7QUFFQSxZQUFJRCxTQUFTLElBQWIsRUFBbUI7QUFDakJyQix5QkFBZSxLQUFmLENBRGlCLENBQ0s7O0FBRXRCRSxtQkFBU0MsV0FBV1QsS0FBWCxFQUFrQjRCLGVBQWxCLEVBQW1DdkIsYUFBbkMsRUFBa0RDLFlBQWxELENBQVQ7QUFDRDs7QUFFRCxZQUFJRSxNQUFKLEVBQVk7QUFDVlgsaUJBQU9VLEtBQVAsRUFBY29CLElBQWQ7O0FBRUE5QixpQkFBT1UsS0FBUCxFQUFjcUIsZUFBZDtBQUNEOztBQUVELFlBQUksQ0FBQ3BCLE1BQUwsRUFBYTtBQUNYSCx3QkFBY3dCLFNBQWQsQ0FBd0JYLFVBQXhCO0FBQ0Q7O0FBRUQsZUFBT1YsTUFBUDtBQUNELE9BcEJEOztBQXNCQSxhQUFPQSxNQUFQO0FBQ0Q7QUFDRjs7QUFFRCxNQUFNb0Isa0JBQWtCaEIsS0FBS2tCLEtBQUwsQ0FBV3pCLGFBQVgsRUFBMEJDLFlBQTFCLENBQXhCOztBQUVBLE1BQUlzQixvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUIvQixXQUFPVSxLQUFQLEVBQWNxQixlQUFkOztBQUVBdEIsbUJBQWUsS0FBZixDQUg0QixDQUdOOztBQUV0QkUsYUFBU0MsV0FBV1QsS0FBWCxFQUFrQk8sS0FBbEIsRUFBeUJGLGFBQXpCLEVBQXdDQyxZQUF4QyxDQUFUOztBQUVBLFFBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hILG9CQUFjd0IsU0FBZCxDQUF3QlgsVUFBeEI7QUFDRDtBQUNGOztBQUVELFNBQU9WLE1BQVA7QUFDRCIsImZpbGUiOiJkZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0IH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgY29uY2F0LCBhbGxCdXRGaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgZ2V0Rmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gcGFydHNMZW5ndGg7XG4gIH1cblxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7IC8vL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbjtcblxuZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICBsZXQgcGFyc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKHBhcnRzTGVuZ3RoID09PSAwKSB7XG4gICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgIGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdChwYXJ0cyksXG4gICAgICAgIHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKTtcblxuICBwYXJ0cyA9IGFsbEJ1dEZpcnN0UGFydHM7IC8vL1xuXG4gIGNvbnN0IHBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gaXNQYXJ0UnVsZU5hbWVQYXJ0KHBhcnQpO1xuXG4gIGlmIChwYXJ0UnVsZU5hbWVQYXJ0KSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpO1xuXG4gICAgaWYgKGxvb2tBaGVhZCkge1xuICAgICAgY29uc3QgcnVsZSA9IHJ1bGVOYW1lUGFydC5maW5kUnVsZShjb25maWd1cmF0aW9uKTtcblxuICAgICAgcnVsZU5hbWVQYXJ0LnBhcnNlUnVsZVdpdGhMb29rQWhlYWQocnVsZSwgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IFtdO1xuXG4gICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuXG4gICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydE5vZGVPck5vZGVzLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbmNhdChub2Rlcywgbm9kZSk7XG5cbiAgICAgICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdfQ==