'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    specialSymbols = lexers.specialSymbols,
    SignificantToken = lexers.SignificantToken;

var TerminalNode = require('../node/terminal');

var EndOfLinePart = function () {
  function EndOfLinePart(noWhitespace) {
    _classCallCheck(this, EndOfLinePart);

    this.noWhitespace = noWhitespace;
  }

  _createClass(EndOfLinePart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodes = null,
          savedIndex = context.savedIndex(),
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
          token = nextNonWhitespaceToken; ///

      if (token !== null) {
        var type = token.getType(),
            found = type === SignificantToken.types.END_OF_LINE;

        if (found) {
          var str = type; ///

          type = null;

          var terminalNode = new TerminalNode(str, type);

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
      var endOfLinePart = null,
          found = symbol === specialSymbols.END_OF_LINE;

      if (found) {
        endOfLinePart = new EndOfLinePart(noWhitespace);
      }

      return endOfLinePart;
    }
  }]);

  return EndOfLinePart;
}();

module.exports = EndOfLinePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L2VuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwic3BlY2lhbFN5bWJvbHMiLCJTaWduaWZpY2FudFRva2VuIiwiVGVybWluYWxOb2RlIiwiRW5kT2ZMaW5lUGFydCIsIm5vV2hpdGVzcGFjZSIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwic2F2ZWRJbmRleCIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJ0eXBlIiwiZ2V0VHlwZSIsImZvdW5kIiwidHlwZXMiLCJFTkRfT0ZfTElORSIsInN0ciIsInRlcm1pbmFsTm9kZSIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImVuZE9mTGluZVBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxpQkFBaUJGLE9BQU9FLGNBRDVCO0FBQUEsSUFFSUMsbUJBQW1CSCxPQUFPRyxnQkFGOUI7O0FBSUEsSUFBSUMsZUFBZUgsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUksYTtBQUNKLHlCQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYUgsUUFBUUcsVUFBUixFQURqQjtBQUFBLFVBRUlDLHlCQUF5QkosUUFBUUsseUJBQVIsQ0FBa0NOLFlBQWxDLENBRjdCO0FBQUEsVUFHSU8sUUFBUUYsc0JBSFosQ0FId0MsQ0FNSjs7QUFFcEMsVUFBSUUsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLFlBQUlDLE9BQU9ELE1BQU1FLE9BQU4sRUFBWDtBQUFBLFlBQ0lDLFFBQVNGLFNBQVNYLGlCQUFpQmMsS0FBakIsQ0FBdUJDLFdBRDdDOztBQUdBLFlBQUlGLEtBQUosRUFBVztBQUNULGNBQUlHLE1BQU1MLElBQVYsQ0FEUyxDQUNPOztBQUVoQkEsaUJBQU8sSUFBUDs7QUFFQSxjQUFJTSxlQUFlLElBQUloQixZQUFKLENBQWlCZSxHQUFqQixFQUFzQkwsSUFBdEIsQ0FBbkI7O0FBRUFMLGtCQUFRLENBQUNXLFlBQUQsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSVgsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCRixnQkFBUWMsU0FBUixDQUFrQlgsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OzsrQkFFaUJhLE0sRUFBUUMscUIsRUFBdUJDLHFCLEVBQXVCbEIsWSxFQUFjO0FBQ3BGLFVBQUltQixnQkFBZ0IsSUFBcEI7QUFBQSxVQUNJVCxRQUFTTSxXQUFXcEIsZUFBZWdCLFdBRHZDOztBQUdBLFVBQUlGLEtBQUosRUFBVztBQUNUUyx3QkFBZ0IsSUFBSXBCLGFBQUosQ0FBa0JDLFlBQWxCLENBQWhCO0FBQ0Q7O0FBRUQsYUFBT21CLGFBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ0QixhQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBzcGVjaWFsU3ltYm9scyA9IGxleGVycy5zcGVjaWFsU3ltYm9scyxcbiAgICBTaWduaWZpY2FudFRva2VuID0gbGV4ZXJzLlNpZ25pZmljYW50VG9rZW47XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIEVuZE9mTGluZVBhcnQge1xuICBjb25zdHJ1Y3Rvcihub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VUb2tlbjsgLy8vXG5cbiAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIGZvdW5kID0gKHR5cGUgPT09IFNpZ25pZmljYW50VG9rZW4udHlwZXMuRU5EX09GX0xJTkUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgdmFyIHN0ciA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICAgIHZhciB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0ciwgdHlwZSk7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgZW5kT2ZMaW5lUGFydCA9IG51bGwsXG4gICAgICAgIGZvdW5kID0gKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuRU5EX09GX0xJTkUpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQobm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVBhcnQ7XG4iXX0=