'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var RegularExpressionPart = function () {
  function RegularExpressionPart(regExp) {
    _classCallCheck(this, RegularExpressionPart);

    this.regExp = regExp;
  }

  _createClass(RegularExpressionPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var nodes = null,
          index = context.getIndex(),
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubstring = input.substr(index),
            matches = this.regExp.exec(inputSubstring),
            parsed = matches && matches.index === 0;

        if (parsed) {
          var firstMatch = first(matches),
              firstMatchLength = firstMatch.length,
              str = inputSubstring.substr(0, firstMatchLength),
              terminalNode = new TerminalNode(str),
              amount = firstMatchLength; ///

          nodes = [terminalNode];

          context.advance(amount);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, specialSymbolsRegExp) {
      var regularExpressionPart = null,
          regularExpressionRegExp = /\/([^/]+)\//,
          matches = symbol.match(regularExpressionRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            pattern = secondMatch,
            ///
        regExp = new RegExp(pattern);

        regularExpressionPart = new RegularExpressionPart(regExp);
      }

      return regularExpressionPart;
    }
  }]);

  return RegularExpressionPart;
}();

module.exports = RegularExpressionPart;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwiaW5kZXgiLCJnZXRJbmRleCIsImlucHV0TGVuZ3RoIiwibGVuZ3RoIiwiaW5wdXRTdWJzdHJpbmciLCJzdWJzdHIiLCJtYXRjaGVzIiwiZXhlYyIsInBhcnNlZCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsImZpcnN0TWF0Y2hMZW5ndGgiLCJzdHIiLCJ0ZXJtaW5hbE5vZGUiLCJhbW91bnQiLCJhZHZhbmNlIiwic3ltYm9sIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWd1bGFyRXhwcmVzc2lvblJlZ0V4cCIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJwYXR0ZXJuIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUMscUI7QUFDSixpQ0FBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxRQUFRSCxRQUFRSSxRQUFSLEVBRFo7QUFBQSxVQUVJQyxjQUFjTixNQUFNTyxNQUZ4Qjs7QUFJQSxVQUFJSCxRQUFRRSxXQUFaLEVBQXlCO0FBQ3ZCLFlBQUlFLGlCQUFpQlIsTUFBTVMsTUFBTixDQUFhTCxLQUFiLENBQXJCO0FBQUEsWUFDSU0sVUFBVSxLQUFLWCxNQUFMLENBQVlZLElBQVosQ0FBaUJILGNBQWpCLENBRGQ7QUFBQSxZQUVJSSxTQUFVRixXQUFXQSxRQUFRTixLQUFSLEtBQWtCLENBRjNDOztBQUlBLFlBQUlRLE1BQUosRUFBWTtBQUNWLGNBQUlDLGFBQWFDLE1BQU1KLE9BQU4sQ0FBakI7QUFBQSxjQUNJSyxtQkFBbUJGLFdBQVdOLE1BRGxDO0FBQUEsY0FFSVMsTUFBTVIsZUFBZUMsTUFBZixDQUFzQixDQUF0QixFQUF5Qk0sZ0JBQXpCLENBRlY7QUFBQSxjQUdJRSxlQUFlLElBQUlyQixZQUFKLENBQWlCb0IsR0FBakIsQ0FIbkI7QUFBQSxjQUlJRSxTQUFTSCxnQkFKYixDQURVLENBS3NCOztBQUVoQ1osa0JBQVEsQ0FBQ2MsWUFBRCxDQUFSOztBQUVBaEIsa0JBQVFrQixPQUFSLENBQWdCRCxNQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT2YsS0FBUDtBQUNEOzs7K0JBRWlCaUIsTSxFQUFRQyxvQixFQUFzQjtBQUM5QyxVQUFJQyx3QkFBd0IsSUFBNUI7QUFBQSxVQUNJQywwQkFBMEIsYUFEOUI7QUFBQSxVQUVJYixVQUFVVSxPQUFPSSxLQUFQLENBQWFELHVCQUFiLENBRmQ7O0FBSUEsVUFBSWIsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJZSxjQUFjQyxPQUFPaEIsT0FBUCxDQUFsQjtBQUFBLFlBQ0lpQixVQUFVRixXQURkO0FBQUEsWUFDNEI7QUFDeEIxQixpQkFBUyxJQUFJNkIsTUFBSixDQUFXRCxPQUFYLENBRmI7O0FBSUFMLGdDQUF3QixJQUFJeEIscUJBQUosQ0FBMEJDLE1BQTFCLENBQXhCO0FBQ0Q7O0FBRUQsYUFBT3VCLHFCQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCaEMscUJBQWpCOztBQUVBLFNBQVNnQixLQUFULENBQWVpQixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0wsTUFBVCxDQUFnQkssS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IHtcbiAgY29uc3RydWN0b3IocmVnRXhwKSB7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cblxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBpbmRleCA9IGNvbnRleHQuZ2V0SW5kZXgoKSxcbiAgICAgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPCBpbnB1dExlbmd0aCkge1xuICAgICAgdmFyIGlucHV0U3Vic3RyaW5nID0gaW5wdXQuc3Vic3RyKGluZGV4KSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5yZWdFeHAuZXhlYyhpbnB1dFN1YnN0cmluZyksXG4gICAgICAgICAgcGFyc2VkID0gKG1hdGNoZXMgJiYgbWF0Y2hlcy5pbmRleCA9PT0gMCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgIGZpcnN0TWF0Y2hMZW5ndGggPSBmaXJzdE1hdGNoLmxlbmd0aCxcbiAgICAgICAgICAgIHN0ciA9IGlucHV0U3Vic3RyaW5nLnN1YnN0cigwLCBmaXJzdE1hdGNoTGVuZ3RoKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyKSxcbiAgICAgICAgICAgIGFtb3VudCA9IGZpcnN0TWF0Y2hMZW5ndGg7ICAvLy9cblxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuXG4gICAgICAgIGNvbnRleHQuYWR2YW5jZShhbW91bnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc3BlY2lhbFN5bWJvbHNSZWdFeHApIHtcbiAgICB2YXIgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbnVsbCxcbiAgICAgICAgcmVndWxhckV4cHJlc3Npb25SZWdFeHAgPSAvXFwvKFteL10rKVxcLy8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2gocmVndWxhckV4cHJlc3Npb25SZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBwYXR0ZXJuID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uUGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=