'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var TerminalPart = function () {
  function TerminalPart(symbol) {
    _classCallCheck(this, TerminalPart);

    this.symbol = symbol;
  }

  _createClass(TerminalPart, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = null,
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
          token = nextNonWhitespaceToken; ///

      if (token !== undefined) {
        var str = token.getString(),
            parsed = str === this.symbol;

        if (parsed) {
          var terminalNode = new TerminalNode(str);

          nodes = [terminalNode];

          context.advanceJustPastToken(token);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp) {
      var terminalPart = null,
          matches = symbol.match(terminalSymbolsRegExp);

      if (matches !== null) {
        terminalPart = new TerminalPart(symbol);
      }

      return terminalPart;
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Rlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJUZXJtaW5hbFBhcnQiLCJzeW1ib2wiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJzdHIiLCJnZXRTdHJpbmciLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJhZHZhbmNlSnVzdFBhc3RUb2tlbiIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsUGFydCIsIm1hdGNoZXMiLCJtYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGtCQUFSLENBQW5COztJQUVNQyxZO0FBQ0osd0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhO0FBQzFCLFVBQUlDLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLHlCQUF5QkgsUUFBUUkseUJBQVIsRUFEN0I7QUFBQSxVQUVJQyxRQUFRRixzQkFGWixDQUQwQixDQUdVOztBQUVwQyxVQUFJRSxVQUFVQyxTQUFkLEVBQXlCO0FBQ3ZCLFlBQUlDLE1BQU1GLE1BQU1HLFNBQU4sRUFBVjtBQUFBLFlBQ0lDLFNBQVVGLFFBQVEsS0FBS1IsTUFEM0I7O0FBR0EsWUFBSVUsTUFBSixFQUFZO0FBQ1YsY0FBSUMsZUFBZSxJQUFJZCxZQUFKLENBQWlCVyxHQUFqQixDQUFuQjs7QUFFQUwsa0JBQVEsQ0FBQ1EsWUFBRCxDQUFSOztBQUVBVixrQkFBUVcsb0JBQVIsQ0FBNkJOLEtBQTdCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSCxLQUFQO0FBQ0Q7OzsrQkFFaUJILE0sRUFBUWEscUIsRUFBdUI7QUFDL0MsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQ0lDLFVBQVVmLE9BQU9nQixLQUFQLENBQWFILHFCQUFiLENBRGQ7O0FBR0EsVUFBSUUsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkQsdUJBQWUsSUFBSWYsWUFBSixDQUFpQkMsTUFBakIsQ0FBZjtBQUNEOztBQUVELGFBQU9jLFlBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJuQixZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3ltYm9sKSB7XG4gICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgc3RyID0gdG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyc2VkID0gKHN0ciA9PT0gdGhpcy5zeW1ib2wpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHZhciB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0cik7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcblxuICAgICAgICBjb250ZXh0LmFkdmFuY2VKdXN0UGFzdFRva2VuKHRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCkge1xuICAgIHZhciB0ZXJtaW5hbFBhcnQgPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdGVybWluYWxQYXJ0ID0gbmV3IFRlcm1pbmFsUGFydChzeW1ib2wpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFBhcnQ7XG4iXX0=