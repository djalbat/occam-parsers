'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var TerminalTypePart = function () {
  function TerminalTypePart(type) {
    _classCallCheck(this, TerminalTypePart);

    this.type = type;
  }

  _createClass(TerminalTypePart, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = null,
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
          token = nextNonWhitespaceToken; ///

      if (token !== undefined) {
        var str = token.getString(),
            type = token.getType(),
            parsed = type === this.type; ///

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
    value: function fromSymbol(symbol, terminalSymbolssRegExp, terminalTypeParts) {
      var terminalTypePart = null,
          type = symbol,
          ///
      found = terminalTypeParts.find(function (terminalTypePart) {
        var found = type === terminalTypePart;

        return found;
      });

      if (found) {
        terminalTypePart = new TerminalTypePart(type);
      }

      return terminalTypePart;
    }
  }]);

  return TerminalTypePart;
}();

module.exports = TerminalTypePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Rlcm1pbmFsVHlwZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiVGVybWluYWxUeXBlUGFydCIsInR5cGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJzdHIiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwicGFyc2VkIiwidGVybWluYWxOb2RlIiwiYWR2YW5jZUp1c3RQYXN0VG9rZW4iLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNzUmVnRXhwIiwidGVybWluYWxUeXBlUGFydHMiLCJ0ZXJtaW5hbFR5cGVQYXJ0IiwiZm91bmQiLCJmaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1DLGdCO0FBQ0osNEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhO0FBQzFCLFVBQUlDLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLHlCQUF5QkgsUUFBUUkseUJBQVIsRUFEN0I7QUFBQSxVQUVJQyxRQUFRRixzQkFGWixDQUQwQixDQUdVOztBQUVwQyxVQUFJRSxVQUFVQyxTQUFkLEVBQXlCO0FBQ3ZCLFlBQUlDLE1BQU1GLE1BQU1HLFNBQU4sRUFBVjtBQUFBLFlBQ0lULE9BQU9NLE1BQU1JLE9BQU4sRUFEWDtBQUFBLFlBRUlDLFNBQVVYLFNBQVMsS0FBS0EsSUFGNUIsQ0FEdUIsQ0FHYTs7QUFFcEMsWUFBSVcsTUFBSixFQUFZO0FBQ1YsY0FBSUMsZUFBZSxJQUFJZixZQUFKLENBQWlCVyxHQUFqQixDQUFuQjs7QUFFQUwsa0JBQVEsQ0FBQ1MsWUFBRCxDQUFSOztBQUVBWCxrQkFBUVksb0JBQVIsQ0FBNkJQLEtBQTdCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSCxLQUFQO0FBQ0Q7OzsrQkFFaUJXLE0sRUFBUUMsc0IsRUFBd0JDLGlCLEVBQW1CO0FBQ25FLFVBQUlDLG1CQUFtQixJQUF2QjtBQUFBLFVBQ0lqQixPQUFPYyxNQURYO0FBQUEsVUFDb0I7QUFDaEJJLGNBQVFGLGtCQUFrQkcsSUFBbEIsQ0FBdUIsVUFBU0YsZ0JBQVQsRUFBMkI7QUFDeEQsWUFBSUMsUUFBU2xCLFNBQVNpQixnQkFBdEI7O0FBRUEsZUFBT0MsS0FBUDtBQUNELE9BSk8sQ0FGWjs7QUFRQSxVQUFJQSxLQUFKLEVBQVc7QUFDVEQsMkJBQW1CLElBQUlsQixnQkFBSixDQUFxQkMsSUFBckIsQ0FBbkI7QUFDRDs7QUFFRCxhQUFPaUIsZ0JBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJ0QixnQkFBakIiLCJmaWxlIjoidGVybWluYWxUeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBUZXJtaW5hbFR5cGVQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgc3RyID0gdG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICBwYXJzZWQgPSAodHlwZSA9PT0gdGhpcy50eXBlKTsgIC8vL1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHZhciB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0cik7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcblxuICAgICAgICBjb250ZXh0LmFkdmFuY2VKdXN0UGFzdFRva2VuKHRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc3NSZWdFeHAsIHRlcm1pbmFsVHlwZVBhcnRzKSB7XG4gICAgdmFyIHRlcm1pbmFsVHlwZVBhcnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gc3ltYm9sLCAgLy8vXG4gICAgICAgIGZvdW5kID0gdGVybWluYWxUeXBlUGFydHMuZmluZChmdW5jdGlvbih0ZXJtaW5hbFR5cGVQYXJ0KSB7XG4gICAgICAgICAgdmFyIGZvdW5kID0gKHR5cGUgPT09IHRlcm1pbmFsVHlwZVBhcnQpO1xuXG4gICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICB9KTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgdGVybWluYWxUeXBlUGFydCA9IG5ldyBUZXJtaW5hbFR5cGVQYXJ0KHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbFR5cGVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxUeXBlUGFydDtcbiJdfQ==