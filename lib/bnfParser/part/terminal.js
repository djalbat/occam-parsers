'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = function () {
  function TerminalPart(symbol) {
    _classCallCheck(this, TerminalPart);

    this.symbol = symbol;
  }

  _createClass(TerminalPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = false,
          index = context.getIndex(),
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubtring = input.substr(index),
            symbolIndex = inputSubtring.indexOf(this.symbol);

        if (symbolIndex === 0) {
          var amount = this.symbol.length; ///

          context.advance(amount);

          parsed = true;
        }
      }

      return parsed;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJzeW1ib2wiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiZ2V0SW5kZXgiLCJpbnB1dExlbmd0aCIsImxlbmd0aCIsImlucHV0U3VidHJpbmciLCJzdWJzdHIiLCJzeW1ib2xJbmRleCIsImluZGV4T2YiLCJhbW91bnQiLCJhZHZhbmNlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwidGVybWluYWxQYXJ0IiwibWF0Y2hlcyIsIm1hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxZO0FBQ0osd0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsU0FBUyxLQUFiO0FBQUEsVUFDSUMsUUFBUUgsUUFBUUksUUFBUixFQURaO0FBQUEsVUFFSUMsY0FBY04sTUFBTU8sTUFGeEI7O0FBSUEsVUFBSUgsUUFBUUUsV0FBWixFQUF5QjtBQUN2QixZQUFJRSxnQkFBZ0JSLE1BQU1TLE1BQU4sQ0FBYUwsS0FBYixDQUFwQjtBQUFBLFlBQ0lNLGNBQWNGLGNBQWNHLE9BQWQsQ0FBc0IsS0FBS1osTUFBM0IsQ0FEbEI7O0FBR0EsWUFBSVcsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGNBQUlFLFNBQVMsS0FBS2IsTUFBTCxDQUFZUSxNQUF6QixDQURxQixDQUNZOztBQUVqQ04sa0JBQVFZLE9BQVIsQ0FBZ0JELE1BQWhCOztBQUVBVCxtQkFBUyxJQUFUO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxNQUFQO0FBQ0Q7OzsrQkFFaUJKLE0sRUFBUWUscUIsRUFBdUI7QUFDL0MsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQ0lDLFVBQVVqQixPQUFPa0IsS0FBUCxDQUFhSCxxQkFBYixDQURkOztBQUdBLFVBQUlFLFlBQVksSUFBaEIsRUFBc0I7QUFDcEJELHVCQUFlLElBQUlqQixZQUFKLENBQWlCQyxNQUFqQixDQUFmO0FBQ0Q7O0FBRUQsYUFBT2dCLFlBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJyQixZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3ltYm9sKSB7XG4gICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gIH1cblxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VkID0gZmFsc2UsXG4gICAgICAgIGluZGV4ID0gY29udGV4dC5nZXRJbmRleCgpLFxuICAgICAgICBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA8IGlucHV0TGVuZ3RoKSB7XG4gICAgICB2YXIgaW5wdXRTdWJ0cmluZyA9IGlucHV0LnN1YnN0cihpbmRleCksXG4gICAgICAgICAgc3ltYm9sSW5kZXggPSBpbnB1dFN1YnRyaW5nLmluZGV4T2YodGhpcy5zeW1ib2wpO1xuXG4gICAgICBpZiAoc3ltYm9sSW5kZXggPT09IDApIHtcbiAgICAgICAgdmFyIGFtb3VudCA9IHRoaXMuc3ltYm9sLmxlbmd0aDsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZHZhbmNlKGFtb3VudCk7XG5cbiAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHApIHtcbiAgICB2YXIgdGVybWluYWxQYXJ0ID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHRlcm1pbmFsUGFydCA9IG5ldyBUZXJtaW5hbFBhcnQoc3ltYm9sKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxQYXJ0O1xuIl19