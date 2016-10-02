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
    value: function parse(context, productions) {
      var nodes = null,
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
          token = nextNonWhitespaceToken; ///

      if (token !== undefined) {
        var str = token.getString(),
            matches = str.match(this.regExp);

        if (matches !== null) {
          var firstMatch = first(matches),
              parsed = firstMatch === str;

          if (parsed) {
            var terminalNode = new TerminalNode(str);

            nodes = [terminalNode];

            context.advanceJustPastToken(token);
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJzdHIiLCJnZXRTdHJpbmciLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJhZHZhbmNlSnVzdFBhc3RUb2tlbiIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCIsInJlZ3VsYXJFeHByZXNzaW9uUmVnRXhwIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJwYXR0ZXJuIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUMscUI7QUFDSixpQ0FBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWE7QUFDMUIsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMseUJBQXlCSCxRQUFRSSx5QkFBUixFQUQ3QjtBQUFBLFVBRUlDLFFBQVFGLHNCQUZaLENBRDBCLENBR1U7O0FBRXBDLFVBQUlFLFVBQVVDLFNBQWQsRUFBeUI7QUFDdkIsWUFBSUMsTUFBTUYsTUFBTUcsU0FBTixFQUFWO0FBQUEsWUFDSUMsVUFBVUYsSUFBSUcsS0FBSixDQUFVLEtBQUtYLE1BQWYsQ0FEZDs7QUFHQSxZQUFJVSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLGNBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxjQUNJSSxTQUFVRixlQUFlSixHQUQ3Qjs7QUFHQSxjQUFJTSxNQUFKLEVBQVk7QUFDVixnQkFBSUMsZUFBZSxJQUFJbEIsWUFBSixDQUFpQlcsR0FBakIsQ0FBbkI7O0FBRUFMLG9CQUFRLENBQUNZLFlBQUQsQ0FBUjs7QUFFQWQsb0JBQVFlLG9CQUFSLENBQTZCVixLQUE3QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPSCxLQUFQO0FBQ0Q7OzsrQkFFaUJjLE0sRUFBUUMscUIsRUFBdUI7QUFDL0MsVUFBSUMsd0JBQXdCLElBQTVCO0FBQUEsVUFDSUMsMEJBQTBCLGFBRDlCO0FBQUEsVUFFSVYsVUFBVU8sT0FBT04sS0FBUCxDQUFhUyx1QkFBYixDQUZkOztBQUlBLFVBQUlWLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSVcsY0FBY0MsT0FBT1osT0FBUCxDQUFsQjtBQUFBLFlBQ0lhLFVBQVVGLFdBRGQ7QUFBQSxZQUM0QjtBQUN4QnJCLGlCQUFTLElBQUl3QixNQUFKLENBQVdELE9BQVgsQ0FGYjs7QUFJQUosZ0NBQXdCLElBQUlwQixxQkFBSixDQUEwQkMsTUFBMUIsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPbUIscUJBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUIzQixxQkFBakI7O0FBRUEsU0FBU2MsS0FBVCxDQUFlYyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0wsTUFBVCxDQUFnQkssS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IHtcbiAgY29uc3RydWN0b3IocmVnRXhwKSB7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgc3RyID0gdG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHN0ci5tYXRjaCh0aGlzLnJlZ0V4cCk7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICBwYXJzZWQgPSAoZmlyc3RNYXRjaCA9PT0gc3RyKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdmFyIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyKTtcblxuICAgICAgICAgIG5vZGVzID0gW3Rlcm1pbmFsTm9kZV07XG5cbiAgICAgICAgICBjb250ZXh0LmFkdmFuY2VKdXN0UGFzdFRva2VuKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG51bGwsXG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUmVnRXhwID0gL1xcLyhbXi9dKylcXC8vLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgcGF0dGVybiA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcblxuICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19