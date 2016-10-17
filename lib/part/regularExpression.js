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
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJzdHIiLCJnZXRTdHJpbmciLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJhZHZhbmNlSnVzdFBhc3RUb2tlbiIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsVHlwZXMiLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWd1bGFyRXhwcmVzc2lvblJlZ0V4cCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwicGF0dGVybiIsIlJlZ0V4cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1DLHFCO0FBQ0osaUNBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhO0FBQzFCLFVBQUlDLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLHlCQUF5QkgsUUFBUUkseUJBQVIsRUFEN0I7QUFBQSxVQUVJQyxRQUFRRixzQkFGWixDQUQwQixDQUdVOztBQUVwQyxVQUFJRSxVQUFVQyxTQUFkLEVBQXlCO0FBQ3ZCLFlBQUlDLE1BQU1GLE1BQU1HLFNBQU4sRUFBVjtBQUFBLFlBQ0lDLFVBQVVGLElBQUlHLEtBQUosQ0FBVSxLQUFLWCxNQUFmLENBRGQ7O0FBR0EsWUFBSVUsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixjQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsY0FDSUksU0FBVUYsZUFBZUosR0FEN0I7O0FBR0EsY0FBSU0sTUFBSixFQUFZO0FBQ1YsZ0JBQUlDLGVBQWUsSUFBSWxCLFlBQUosQ0FBaUJXLEdBQWpCLENBQW5COztBQUVBTCxvQkFBUSxDQUFDWSxZQUFELENBQVI7O0FBRUFkLG9CQUFRZSxvQkFBUixDQUE2QlYsS0FBN0I7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRWlCYyxNLEVBQVFDLHFCLEVBQXVCQyxhLEVBQWU7QUFDOUQsVUFBSUMsd0JBQXdCLElBQTVCO0FBQUEsVUFDSUMsMEJBQTBCLGFBRDlCO0FBQUEsVUFFSVgsVUFBVU8sT0FBT04sS0FBUCxDQUFhVSx1QkFBYixDQUZkOztBQUlBLFVBQUlYLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSVksY0FBY0MsT0FBT2IsT0FBUCxDQUFsQjtBQUFBLFlBQ0ljLFVBQVVGLFdBRGQ7QUFBQSxZQUM0QjtBQUN4QnRCLGlCQUFTLElBQUl5QixNQUFKLENBQVdELE9BQVgsQ0FGYjs7QUFJQUosZ0NBQXdCLElBQUlyQixxQkFBSixDQUEwQkMsTUFBMUIsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPb0IscUJBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUI1QixxQkFBakI7O0FBRUEsU0FBU2MsS0FBVCxDQUFlZSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0wsTUFBVCxDQUFnQkssS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IHtcbiAgY29uc3RydWN0b3IocmVnRXhwKSB7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgc3RyID0gdG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHN0ci5tYXRjaCh0aGlzLnJlZ0V4cCk7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICBwYXJzZWQgPSAoZmlyc3RNYXRjaCA9PT0gc3RyKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdmFyIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyKTtcblxuICAgICAgICAgIG5vZGVzID0gW3Rlcm1pbmFsTm9kZV07XG5cbiAgICAgICAgICBjb250ZXh0LmFkdmFuY2VKdXN0UGFzdFRva2VuKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzKSB7XG4gICAgdmFyIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG51bGwsXG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUmVnRXhwID0gL1xcLyhbXi9dKylcXC8vLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgcGF0dGVybiA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcblxuICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19