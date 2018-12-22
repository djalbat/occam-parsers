'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RuleNamePart = require('./part/nonTerminal/ruleName'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    allButFirst = arrayUtilities.allButFirst,
    type = RuleNamePart.type,
    ruleNamePartType = type; ///

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
    key: 'isFirstPartRuleNamePart',
    value: function isFirstPartRuleNamePart() {
      var firstPartRuleNamePart = void 0;

      var firstPart = this.getFirstPart(),
          firstPartTerminalPart = firstPart.isTerminalPart(),
          firstPartNonTerminalPart = !firstPartTerminalPart;

      if (firstPartNonTerminalPart) {
        var nonTerminalPart = firstPart,
            ///
        nonTerminalPartType = nonTerminalPart.getType(),
            nonTerminalPartTypeRuleNamePartType = nonTerminalPartType === ruleNamePartType,
            nonTerminalPartRuleNamePart = nonTerminalPartTypeRuleNamePartType; ///

        firstPartRuleNamePart = nonTerminalPartRuleNamePart; ///      
      }

      return firstPartRuleNamePart;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      var nodes = [];

      var savedIndex = configuration.getSavedIndex(),
          everyPartParsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(configuration, noWhitespace);

        if (partNodeOrNodes !== null) {
          nodes = nodes.concat(partNodeOrNodes);

          noWhitespace = false;

          return true;
        }
      });

      if (!everyPartParsed) {
        configuration.backtrack(savedIndex);

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
          partsString = partString;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlTmFtZVBhcnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImFsbEJ1dEZpcnN0IiwidHlwZSIsInJ1bGVOYW1lUGFydFR5cGUiLCJEZWZpbml0aW9uIiwicGFydHMiLCJmaXJzdFBhcnQiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImFsbEJ1dEZpcnN0UGFydHMiLCJmaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJnZXRGaXJzdFBhcnQiLCJmaXJzdFBhcnRUZXJtaW5hbFBhcnQiLCJpc1Rlcm1pbmFsUGFydCIsImZpcnN0UGFydE5vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydFR5cGUiLCJnZXRUeXBlIiwibm9uVGVybWluYWxQYXJ0VHlwZVJ1bGVOYW1lUGFydFR5cGUiLCJub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsImV2ZXJ5UGFydFBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwiY29uY2F0IiwiYmFja3RyYWNrIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSw2QkFBUixDQUFyQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7SUFHUUUsSyxHQUF1QkQsYyxDQUF2QkMsSztJQUFPQyxXLEdBQWdCRixjLENBQWhCRSxXO0lBQ1BDLEksR0FBU0wsWSxDQUFUSyxJO0lBQ0ZDLGdCLEdBQW1CRCxJLEVBQU87O0lBRTFCRSxVO0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUMsWUFBWU4sTUFBTSxLQUFLSyxLQUFYLENBQWxCOztBQUVBLGFBQU9DLFNBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLGNBQWMsS0FBS0YsS0FBTCxDQUFXRyxNQUEvQjs7QUFFQSxhQUFPRCxXQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTUUsbUJBQW1CUixZQUFZLEtBQUtJLEtBQWpCLENBQXpCOztBQUVBLGFBQU9JLGdCQUFQO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBSUMsOEJBQUo7O0FBRUEsVUFBTUosWUFBWSxLQUFLSyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMsd0JBQXdCTixVQUFVTyxjQUFWLEVBRDlCO0FBQUEsVUFFTUMsMkJBQTJCLENBQUNGLHFCQUZsQzs7QUFJQSxVQUFJRSx3QkFBSixFQUE4QjtBQUM1QixZQUFNQyxrQkFBa0JULFNBQXhCO0FBQUEsWUFBb0M7QUFDOUJVLDhCQUFzQkQsZ0JBQWdCRSxPQUFoQixFQUQ1QjtBQUFBLFlBRU1DLHNDQUF1Q0Ysd0JBQXdCYixnQkFGckU7QUFBQSxZQUdNZ0IsOEJBQThCRCxtQ0FIcEMsQ0FENEIsQ0FJOEM7O0FBRTFFUixnQ0FBd0JTLDJCQUF4QixDQU40QixDQU0wQjtBQUN2RDs7QUFFRCxhQUFPVCxxQkFBUDtBQUNEOzs7MEJBRUtVLGEsRUFBZUMsWSxFQUFjO0FBQ2pDLFVBQUlDLFFBQVEsRUFBWjs7QUFFQSxVQUFNQyxhQUFhSCxjQUFjSSxhQUFkLEVBQW5CO0FBQUEsVUFDTUMsa0JBQWtCLEtBQUtwQixLQUFMLENBQVdxQixLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUNoRCxZQUFNQyxrQkFBa0JELEtBQUtFLEtBQUwsQ0FBV1QsYUFBWCxFQUEwQkMsWUFBMUIsQ0FBeEI7O0FBRUEsWUFBSU8sb0JBQW9CLElBQXhCLEVBQThCO0FBQzVCTixrQkFBUUEsTUFBTVEsTUFBTixDQUFhRixlQUFiLENBQVI7O0FBRUFQLHlCQUFlLEtBQWY7O0FBRUEsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FWaUIsQ0FEeEI7O0FBYUEsVUFBSSxDQUFDSSxlQUFMLEVBQXNCO0FBQ3BCTCxzQkFBY1csU0FBZCxDQUF3QlIsVUFBeEI7O0FBRUFELGdCQUFRLElBQVI7QUFDRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1VLGNBQWMsS0FBSzNCLEtBQUwsQ0FBVzRCLE1BQVgsQ0FBa0IsVUFBU0QsV0FBVCxFQUFzQkwsSUFBdEIsRUFBNEI7QUFDNUQsWUFBTU8sYUFBYVAsS0FBS1EsUUFBTCxFQUFuQjs7QUFFQSxZQUFJSCxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJBLHdCQUFjRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLHdCQUFpQkEsV0FBakIsU0FBZ0NFLFVBQWhDO0FBQ0Q7O0FBRUQsZUFBT0YsV0FBUDtBQUNELE9BVmUsRUFVYixJQVZhLENBQXBCO0FBQUEsVUFXSUksU0FBU0osV0FYYixDQURTLENBWWlCOztBQUUxQixhQUFPSSxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEMsVUFBakIiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBhbGxCdXRGaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHR5cGUgfSA9IFJ1bGVOYW1lUGFydCxcbiAgICAgIHJ1bGVOYW1lUGFydFR5cGUgPSB0eXBlOyAgLy8vXG5cbmNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgZ2V0Rmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gcGFydHNMZW5ndGg7XG4gIH1cblxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG5cbiAgaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQoKSB7XG4gICAgbGV0IGZpcnN0UGFydFJ1bGVOYW1lUGFydDtcbiAgICBcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIGZpcnN0UGFydFRlcm1pbmFsUGFydCA9IGZpcnN0UGFydC5pc1Rlcm1pbmFsUGFydCgpLFxuICAgICAgICAgIGZpcnN0UGFydE5vblRlcm1pbmFsUGFydCA9ICFmaXJzdFBhcnRUZXJtaW5hbFBhcnQ7XG4gICAgXG4gICAgaWYgKGZpcnN0UGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gZmlyc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRUeXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsUGFydFR5cGVSdWxlTmFtZVBhcnRUeXBlID0gKG5vblRlcm1pbmFsUGFydFR5cGUgPT09IHJ1bGVOYW1lUGFydFR5cGUpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0VHlwZVJ1bGVOYW1lUGFydFR5cGU7ICAvLy9cblxuICAgICAgZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0OyAgLy8vICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmaXJzdFBhcnRSdWxlTmFtZVBhcnQ7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBldmVyeVBhcnRQYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbjtcbiJdfQ==