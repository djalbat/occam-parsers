'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var TerminalSymbolPart = function () {
  function TerminalSymbolPart(symbol, noWhitespace) {
    _classCallCheck(this, TerminalSymbolPart);

    this.symbol = symbol;
    this.noWhitespace = noWhitespace;
  }

  _createClass(TerminalSymbolPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodes = null,
          savedIndex = context.savedIndex(),
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
          token = nextNonWhitespaceToken; ///

      if (token !== null) {
        var str = token.getString(),
            parsed = str === this.symbol; ///

        if (parsed) {
          var type = token.getType(),
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
    value: function fromSymbol(symbol, terminalSymbolPartsRegExp, terminalTypes, noWhitespace) {
      var terminalSymbolPart = null,
          matches = symbol.match(terminalSymbolPartsRegExp);

      if (matches !== null) {
        terminalSymbolPart = new TerminalSymbolPart(symbol, noWhitespace);
      }

      return terminalSymbolPart;
    }
  }]);

  return TerminalSymbolPart;
}();

module.exports = TerminalSymbolPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Rlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzeW1ib2wiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJuZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VUb2tlbiIsInRva2VuIiwic3RyIiwiZ2V0U3RyaW5nIiwicGFyc2VkIiwidHlwZSIsImdldFR5cGUiLCJ0ZXJtaW5hbE5vZGUiLCJiYWNrdHJhY2siLCJ0ZXJtaW5hbFN5bWJvbFBhcnRzUmVnRXhwIiwidGVybWluYWxUeXBlcyIsInRlcm1pbmFsU3ltYm9sUGFydCIsIm1hdGNoZXMiLCJtYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGtCQUFSLENBQW5COztJQUVNQyxrQjtBQUNKLDhCQUFZQyxNQUFaLEVBQW9CQyxZQUFwQixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUYsWSxFQUFjO0FBQ3hDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRHdDLENBQ1U7O0FBRWxELFVBQUlHLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLGFBQWFILFFBQVFHLFVBQVIsRUFEakI7QUFBQSxVQUVJQyx5QkFBeUJKLFFBQVFLLHlCQUFSLENBQWtDTixZQUFsQyxDQUY3QjtBQUFBLFVBR0lPLFFBQVFGLHNCQUhaLENBSHdDLENBTUo7O0FBRXBDLFVBQUlFLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixZQUFJQyxNQUFNRCxNQUFNRSxTQUFOLEVBQVY7QUFBQSxZQUNJQyxTQUFVRixRQUFRLEtBQUtULE1BRDNCLENBRGtCLENBRW1COztBQUVyQyxZQUFJVyxNQUFKLEVBQVk7QUFDVixjQUFJQyxPQUFPSixNQUFNSyxPQUFOLEVBQVg7QUFBQSxjQUNJQyxlQUFlLElBQUlqQixZQUFKLENBQWlCWSxHQUFqQixFQUFzQkcsSUFBdEIsQ0FEbkI7O0FBR0FSLGtCQUFRLENBQUNVLFlBQUQsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSVYsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCRixnQkFBUWEsU0FBUixDQUFrQlYsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OzsrQkFFaUJKLE0sRUFBUWdCLHlCLEVBQTJCQyxhLEVBQWVoQixZLEVBQWM7QUFDaEYsVUFBSWlCLHFCQUFxQixJQUF6QjtBQUFBLFVBQ0lDLFVBQVVuQixPQUFPb0IsS0FBUCxDQUFhSix5QkFBYixDQURkOztBQUdBLFVBQUlHLFlBQVksSUFBaEIsRUFBc0I7QUFDcEJELDZCQUFxQixJQUFJbkIsa0JBQUosQ0FBdUJDLE1BQXZCLEVBQStCQyxZQUEvQixDQUFyQjtBQUNEOztBQUVELGFBQU9pQixrQkFBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQnZCLGtCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3ltYm9sLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VUb2tlbjsgLy8vXG5cbiAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciBzdHIgPSB0b2tlbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJzZWQgPSAoc3RyID09PSB0aGlzLnN5bWJvbCk7ICAvLy9cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICB2YXIgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyLCB0eXBlKTtcblxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbFBhcnRzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgdGVybWluYWxTeW1ib2xQYXJ0ID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh0ZXJtaW5hbFN5bWJvbFBhcnRzUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHN5bWJvbCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xQYXJ0O1xuIl19