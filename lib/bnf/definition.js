'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var RuleNamePart = require('./part/nonTerminal/ruleName');

var array = necessary.array,
    first = array.first;

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
      var allButFirstParts = this.parts.slice(1);

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
            nonTerminalPartRuleNamePart = nonTerminalPartType === RuleNamePart.type;

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
        var partNodeOrNodes = part.parse(configuration, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodeOrNodes);

          noWhitespace = false;
        }

        return partParsed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiUnVsZU5hbWVQYXJ0IiwiYXJyYXkiLCJmaXJzdCIsIkRlZmluaXRpb24iLCJwYXJ0cyIsImZpcnN0UGFydCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiYWxsQnV0Rmlyc3RQYXJ0cyIsInNsaWNlIiwiZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwiZmlyc3RQYXJ0VGVybWluYWxQYXJ0IiwiaXNUZXJtaW5hbFBhcnQiLCJmaXJzdFBhcnROb25UZXJtaW5hbFBhcnQiLCJub25UZXJtaW5hbFBhcnQiLCJub25UZXJtaW5hbFBhcnRUeXBlIiwiZ2V0VHlwZSIsIm5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCIsInR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsImV2ZXJ5UGFydFBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFydFBhcnNlZCIsImNvbmNhdCIsImJhY2t0cmFjayIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLDZCQUFSLENBQXJCOztBQUVNLElBQUVFLEtBQUYsR0FBWUgsU0FBWixDQUFFRyxLQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxLQURaLENBQ0VDLEtBREY7O0lBR0FDLFU7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxZQUFZSCxNQUFNLEtBQUtFLEtBQVgsQ0FBbEI7O0FBRUEsYUFBT0MsU0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsY0FBYyxLQUFLRixLQUFMLENBQVdHLE1BQS9COztBQUVBLGFBQU9ELFdBQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNRSxtQkFBbUIsS0FBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCLENBQWpCLENBQXpCOztBQUVBLGFBQU9ELGdCQUFQO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBSUUsOEJBQUo7O0FBRUEsVUFBTUwsWUFBWSxLQUFLTSxZQUFMLEVBQWxCO0FBQUEsVUFDTUMsd0JBQXdCUCxVQUFVUSxjQUFWLEVBRDlCO0FBQUEsVUFFTUMsMkJBQTJCLENBQUNGLHFCQUZsQzs7QUFJQSxVQUFJRSx3QkFBSixFQUE4QjtBQUM1QixZQUFNQyxrQkFBa0JWLFNBQXhCO0FBQUEsWUFBb0M7QUFDOUJXLDhCQUFzQkQsZ0JBQWdCRSxPQUFoQixFQUQ1QjtBQUFBLFlBRU1DLDhCQUErQkYsd0JBQXdCaEIsYUFBYW1CLElBRjFFOztBQUlBVCxnQ0FBd0JRLDJCQUF4QixDQUw0QixDQUswQjtBQUN2RDs7QUFFRCxhQUFPUixxQkFBUDtBQUNEOzs7MEJBRUtVLGEsRUFBZUMsWSxFQUFjO0FBQ2pDLFVBQUlDLFFBQVEsRUFBWjs7QUFFQSxVQUFNQyxhQUFhSCxjQUFjSSxhQUFkLEVBQW5CO0FBQUEsVUFDTUMsa0JBQWtCLEtBQUtyQixLQUFMLENBQVdzQixLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUNoRCxZQUFNQyxrQkFBa0JELEtBQUtFLEtBQUwsQ0FBV1QsYUFBWCxFQUEwQkMsWUFBMUIsQ0FBeEI7QUFBQSxZQUNNUyxhQUFjRixvQkFBb0IsSUFEeEM7O0FBR0EsWUFBSUUsVUFBSixFQUFnQjtBQUNkUixrQkFBUUEsTUFBTVMsTUFBTixDQUFhSCxlQUFiLENBQVI7O0FBRUFQLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPUyxVQUFQO0FBQ0QsT0FYaUIsQ0FEeEI7O0FBY0EsVUFBSSxDQUFDTCxlQUFMLEVBQXNCO0FBQ3BCTCxzQkFBY1ksU0FBZCxDQUF3QlQsVUFBeEI7O0FBRUFELGdCQUFRLElBQVI7QUFDRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1XLGNBQWMsS0FBSzdCLEtBQUwsQ0FBVzhCLE1BQVgsQ0FBa0IsVUFBU0QsV0FBVCxFQUFzQk4sSUFBdEIsRUFBNEI7QUFDNUQsWUFBTVEsYUFBYVIsS0FBS1MsUUFBTCxFQUFuQjs7QUFFQSxZQUFJSCxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJBLHdCQUFjRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLHdCQUFpQkEsV0FBakIsU0FBZ0NFLFVBQWhDO0FBQ0Q7O0FBRUQsZUFBT0YsV0FBUDtBQUNELE9BVmUsRUFVYixJQVZhLENBQXBCO0FBQUEsVUFXSUksU0FBU0osV0FYYixDQURTLENBWWlCOztBQUUxQixhQUFPSSxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCcEMsVUFBakIiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheTtcblxuY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IHRoaXMucGFydHMuc2xpY2UoMSk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KCkge1xuICAgIGxldCBmaXJzdFBhcnRSdWxlTmFtZVBhcnQ7XG4gICAgXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBmaXJzdFBhcnRUZXJtaW5hbFBhcnQgPSBmaXJzdFBhcnQuaXNUZXJtaW5hbFBhcnQoKSxcbiAgICAgICAgICBmaXJzdFBhcnROb25UZXJtaW5hbFBhcnQgPSAhZmlyc3RQYXJ0VGVybWluYWxQYXJ0O1xuICAgIFxuICAgIGlmIChmaXJzdFBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IGZpcnN0UGFydCwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxQYXJ0VHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQgPSAobm9uVGVybWluYWxQYXJ0VHlwZSA9PT0gUnVsZU5hbWVQYXJ0LnR5cGUpO1xuXG4gICAgICBmaXJzdFBhcnRSdWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQ7ICAvLy8gICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZpcnN0UGFydFJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIGV2ZXJ5UGFydFBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydFBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmICghZXZlcnlQYXJ0UGFyc2VkKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb247XG4iXX0=