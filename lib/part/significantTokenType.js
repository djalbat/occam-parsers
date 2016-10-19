'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var SignificantTokenTypePart = function () {
  function SignificantTokenTypePart(type, noWhitespace) {
    _classCallCheck(this, SignificantTokenTypePart);

    this.type = type;
    this.noWhitespace = noWhitespace;
  }

  _createClass(SignificantTokenTypePart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodes = null,
          savedIndex = context.savedIndex(),
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
          token = nextNonWhitespaceToken; ///

      if (token !== null) {
        var type = token.getType(),
            parsed = type === this.type; ///

        if (parsed) {
          var str = token.getString(),
              terminalNode = new TerminalNode(str, type);

          nodes = [terminalNode];
        }
      }

      if (nodes === null) {
        context.backtrack(savedIndex);
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var significantTokenTypePart = null,
          type = symbol,
          ///
      foundType = significantTokenTypes.find(function (significantTokenType) {
        var found = type === significantTokenType;

        return found;
      }),
          found = foundType !== undefined;

      if (found) {
        significantTokenTypePart = new SignificantTokenTypePart(type, noWhitespace);
      }

      return significantTokenTypePart;
    }
  }]);

  return SignificantTokenTypePart;
}();

module.exports = SignificantTokenTypePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJ0eXBlIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VUb2tlbiIsImdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJ0b2tlbiIsImdldFR5cGUiLCJwYXJzZWQiLCJzdHIiLCJnZXRTdHJpbmciLCJ0ZXJtaW5hbE5vZGUiLCJiYWNrdHJhY2siLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJzaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJmb3VuZFR5cGUiLCJmaW5kIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJmb3VuZCIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGtCQUFSLENBQW5COztJQUVNQyx3QjtBQUNKLG9DQUFZQyxJQUFaLEVBQWtCQyxZQUFsQixFQUFnQztBQUFBOztBQUM5QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUYsWSxFQUFjO0FBQ3hDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRHdDLENBQ1U7O0FBRWxELFVBQUlHLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLGFBQWFILFFBQVFHLFVBQVIsRUFEakI7QUFBQSxVQUVJQyx5QkFBeUJKLFFBQVFLLHlCQUFSLENBQWtDTixZQUFsQyxDQUY3QjtBQUFBLFVBR0lPLFFBQVFGLHNCQUhaLENBSHdDLENBTUo7O0FBRXBDLFVBQUlFLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixZQUFJUixPQUFPUSxNQUFNQyxPQUFOLEVBQVg7QUFBQSxZQUNJQyxTQUFVVixTQUFTLEtBQUtBLElBRDVCLENBRGtCLENBRWtCOztBQUVwQyxZQUFJVSxNQUFKLEVBQVk7QUFDVixjQUFJQyxNQUFNSCxNQUFNSSxTQUFOLEVBQVY7QUFBQSxjQUNJQyxlQUFlLElBQUloQixZQUFKLENBQWlCYyxHQUFqQixFQUFzQlgsSUFBdEIsQ0FEbkI7O0FBR0FJLGtCQUFRLENBQUNTLFlBQUQsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSVQsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCRixnQkFBUVksU0FBUixDQUFrQlQsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OzsrQkFFaUJXLE0sRUFBUUMscUIsRUFBdUJDLHFCLEVBQXVCaEIsWSxFQUFjO0FBQ3BGLFVBQUlpQiwyQkFBMkIsSUFBL0I7QUFBQSxVQUNJbEIsT0FBT2UsTUFEWDtBQUFBLFVBQ29CO0FBQ2hCSSxrQkFBWUYsc0JBQXNCRyxJQUF0QixDQUEyQixVQUFTQyxvQkFBVCxFQUErQjtBQUNwRSxZQUFJQyxRQUFTdEIsU0FBU3FCLG9CQUF0Qjs7QUFFQSxlQUFPQyxLQUFQO0FBQ0QsT0FKVyxDQUZoQjtBQUFBLFVBT0lBLFFBQVNILGNBQWNJLFNBUDNCOztBQVNBLFVBQUlELEtBQUosRUFBVztBQUNUSixtQ0FBMkIsSUFBSW5CLHdCQUFKLENBQTZCQyxJQUE3QixFQUFtQ0MsWUFBbkMsQ0FBM0I7QUFDRDs7QUFFRCxhQUFPaUIsd0JBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUIxQix3QkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cbiAgICBcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgdG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgcGFyc2VkID0gKHR5cGUgPT09IHRoaXMudHlwZSk7ICAvLy9cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICB2YXIgc3RyID0gdG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0ciwgdHlwZSk7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gc3ltYm9sLCAgLy8vXG4gICAgICAgIGZvdW5kVHlwZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5maW5kKGZ1bmN0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgICAgdmFyIGZvdW5kID0gKHR5cGUgPT09IHNpZ25pZmljYW50VG9rZW5UeXBlKTtcblxuICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgfSksXG4gICAgICAgIGZvdW5kID0gKGZvdW5kVHlwZSAhPT0gdW5kZWZpbmVkKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCh0eXBlLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4iXX0=