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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlTmFtZVBhcnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImFsbEJ1dEZpcnN0IiwidHlwZSIsInJ1bGVOYW1lUGFydFR5cGUiLCJEZWZpbml0aW9uIiwicGFydHMiLCJmaXJzdFBhcnQiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImFsbEJ1dEZpcnN0UGFydHMiLCJmaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJnZXRGaXJzdFBhcnQiLCJmaXJzdFBhcnRUZXJtaW5hbFBhcnQiLCJpc1Rlcm1pbmFsUGFydCIsImZpcnN0UGFydE5vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydFR5cGUiLCJnZXRUeXBlIiwibm9uVGVybWluYWxQYXJ0VHlwZVJ1bGVOYW1lUGFydFR5cGUiLCJub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsImV2ZXJ5UGFydFBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFydFBhcnNlZCIsImNvbmNhdCIsImJhY2t0cmFjayIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsNkJBQVIsQ0FBckI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7O0lBR1FFLEssR0FBdUJELGMsQ0FBdkJDLEs7SUFBT0MsVyxHQUFnQkYsYyxDQUFoQkUsVztJQUNQQyxJLEdBQVNMLFksQ0FBVEssSTtJQUNGQyxnQixHQUFtQkQsSSxFQUFPOztJQUUxQkUsVTtBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1DLFlBQVlOLE1BQU0sS0FBS0ssS0FBWCxDQUFsQjs7QUFFQSxhQUFPQyxTQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxjQUFjLEtBQUtGLEtBQUwsQ0FBV0csTUFBL0I7O0FBRUEsYUFBT0QsV0FBUDtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQU1FLG1CQUFtQlIsWUFBWSxLQUFLSSxLQUFqQixDQUF6Qjs7QUFFQSxhQUFPSSxnQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQUlDLDhCQUFKOztBQUVBLFVBQU1KLFlBQVksS0FBS0ssWUFBTCxFQUFsQjtBQUFBLFVBQ01DLHdCQUF3Qk4sVUFBVU8sY0FBVixFQUQ5QjtBQUFBLFVBRU1DLDJCQUEyQixDQUFDRixxQkFGbEM7O0FBSUEsVUFBSUUsd0JBQUosRUFBOEI7QUFDNUIsWUFBTUMsa0JBQWtCVCxTQUF4QjtBQUFBLFlBQW9DO0FBQzlCVSw4QkFBc0JELGdCQUFnQkUsT0FBaEIsRUFENUI7QUFBQSxZQUVNQyxzQ0FBdUNGLHdCQUF3QmIsZ0JBRnJFO0FBQUEsWUFHTWdCLDhCQUE4QkQsbUNBSHBDLENBRDRCLENBSThDOztBQUUxRVIsZ0NBQXdCUywyQkFBeEIsQ0FONEIsQ0FNMEI7QUFDdkQ7O0FBRUQsYUFBT1QscUJBQVA7QUFDRDs7OzBCQUVLVSxhLEVBQWVDLFksRUFBYztBQUNqQyxVQUFJQyxRQUFRLEVBQVo7O0FBRUEsVUFBTUMsYUFBYUgsY0FBY0ksYUFBZCxFQUFuQjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLcEIsS0FBTCxDQUFXcUIsS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDaEQsWUFBTUMsa0JBQWtCRCxLQUFLRSxLQUFMLENBQVdULGFBQVgsRUFBMEJDLFlBQTFCLENBQXhCO0FBQUEsWUFDTVMsYUFBY0Ysb0JBQW9CLElBRHhDOztBQUdBLFlBQUlFLFVBQUosRUFBZ0I7QUFDZFIsa0JBQVFBLE1BQU1TLE1BQU4sQ0FBYUgsZUFBYixDQUFSOztBQUVBUCx5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT1MsVUFBUDtBQUNELE9BWGlCLENBRHhCOztBQWNBLFVBQUksQ0FBQ0wsZUFBTCxFQUFzQjtBQUNwQkwsc0JBQWNZLFNBQWQsQ0FBd0JULFVBQXhCOztBQUVBRCxnQkFBUSxJQUFSO0FBQ0Q7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVyxjQUFjLEtBQUs1QixLQUFMLENBQVc2QixNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JOLElBQXRCLEVBQTRCO0FBQzVELFlBQU1RLGFBQWFSLEtBQUtTLFFBQUwsRUFBbkI7O0FBRUEsWUFBSUgsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCQSx3QkFBY0UsVUFBZDtBQUNELFNBRkQsTUFFTztBQUNMRix3QkFBaUJBLFdBQWpCLFNBQWdDRSxVQUFoQztBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZlLEVBVWIsSUFWYSxDQUFwQjtBQUFBLFVBV0lJLFNBQVNKLFdBWGIsQ0FEUyxDQVlpQjs7QUFFMUIsYUFBT0ksTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQm5DLFVBQWpCIiwiZmlsZSI6ImRlZmluaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgYWxsQnV0Rmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0eXBlIH0gPSBSdWxlTmFtZVBhcnQsXG4gICAgICBydWxlTmFtZVBhcnRUeXBlID0gdHlwZTsgIC8vL1xuXG5jbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KCkge1xuICAgIGxldCBmaXJzdFBhcnRSdWxlTmFtZVBhcnQ7XG4gICAgXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBmaXJzdFBhcnRUZXJtaW5hbFBhcnQgPSBmaXJzdFBhcnQuaXNUZXJtaW5hbFBhcnQoKSxcbiAgICAgICAgICBmaXJzdFBhcnROb25UZXJtaW5hbFBhcnQgPSAhZmlyc3RQYXJ0VGVybWluYWxQYXJ0O1xuICAgIFxuICAgIGlmIChmaXJzdFBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IGZpcnN0UGFydCwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxQYXJ0VHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSA9IChub25UZXJtaW5hbFBhcnRUeXBlID09PSBydWxlTmFtZVBhcnRUeXBlKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydFR5cGVSdWxlTmFtZVBhcnRUeXBlOyAgLy8vXG5cbiAgICAgIGZpcnN0UGFydFJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydDsgIC8vLyAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgZXZlcnlQYXJ0UGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbjtcbiJdfQ==