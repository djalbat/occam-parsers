'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var TerminalSymbolPart = function () {
  function TerminalSymbolPart(symbol) {
    _classCallCheck(this, TerminalSymbolPart);

    this.symbol = symbol;
  }

  _createClass(TerminalSymbolPart, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = null,
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
          token = nextNonWhitespaceToken; ///

      if (token !== undefined) {
        var str = token.getString(),
            parsed = str === this.symbol; ///

        if (parsed) {
          var type = token.getType(),
              terminalNode = new TerminalNode(str, type);

          nodes = [terminalNode];

          context.advanceJustPastToken(token);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
      var terminalSymbolPart = null,
          matches = symbol.match(terminalSymbolsRegExp);

      if (matches !== null) {
        terminalSymbolPart = new TerminalSymbolPart(symbol);
      }

      return terminalSymbolPart;
    }
  }]);

  return TerminalSymbolPart;
}();

module.exports = TerminalSymbolPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Rlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzeW1ib2wiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJzdHIiLCJnZXRTdHJpbmciLCJwYXJzZWQiLCJ0eXBlIiwiZ2V0VHlwZSIsInRlcm1pbmFsTm9kZSIsImFkdmFuY2VKdXN0UGFzdFRva2VuIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwidGVybWluYWxUeXBlcyIsInRlcm1pbmFsU3ltYm9sUGFydCIsIm1hdGNoZXMiLCJtYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGtCQUFSLENBQW5COztJQUVNQyxrQjtBQUNKLDhCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYTtBQUMxQixVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyx5QkFBeUJILFFBQVFJLHlCQUFSLEVBRDdCO0FBQUEsVUFFSUMsUUFBUUYsc0JBRlosQ0FEMEIsQ0FHVTs7QUFFcEMsVUFBSUUsVUFBVUMsU0FBZCxFQUF5QjtBQUN2QixZQUFJQyxNQUFNRixNQUFNRyxTQUFOLEVBQVY7QUFBQSxZQUNJQyxTQUFVRixRQUFRLEtBQUtSLE1BRDNCLENBRHVCLENBRWM7O0FBRXJDLFlBQUlVLE1BQUosRUFBWTtBQUNWLGNBQUlDLE9BQU9MLE1BQU1NLE9BQU4sRUFBWDtBQUFBLGNBQ0lDLGVBQWUsSUFBSWhCLFlBQUosQ0FBaUJXLEdBQWpCLEVBQXNCRyxJQUF0QixDQURuQjs7QUFHQVIsa0JBQVEsQ0FBQ1UsWUFBRCxDQUFSOztBQUVBWixrQkFBUWEsb0JBQVIsQ0FBNkJSLEtBQTdCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSCxLQUFQO0FBQ0Q7OzsrQkFFaUJILE0sRUFBUWUscUIsRUFBdUJDLGEsRUFBZTtBQUM5RCxVQUFJQyxxQkFBcUIsSUFBekI7QUFBQSxVQUNJQyxVQUFVbEIsT0FBT21CLEtBQVAsQ0FBYUoscUJBQWIsQ0FEZDs7QUFHQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCRCw2QkFBcUIsSUFBSWxCLGtCQUFKLENBQXVCQyxNQUF2QixDQUFyQjtBQUNEOztBQUVELGFBQU9pQixrQkFBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQnRCLGtCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3ltYm9sKSB7XG4gICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgc3RyID0gdG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyc2VkID0gKHN0ciA9PT0gdGhpcy5zeW1ib2wpOyAgLy8vXG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0ciwgdHlwZSk7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcblxuICAgICAgICBjb250ZXh0LmFkdmFuY2VKdXN0UGFzdFRva2VuKHRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgdGVybWluYWxUeXBlcykge1xuICAgIHZhciB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChzeW1ib2wpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbFBhcnQ7XG4iXX0=