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
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var type = significantToken.getType(),
            found = type === SignificantToken.types.endOfLine;

        if (found) {
          var string = type; ///

          type = null;

          var terminalNode = new TerminalNode(string, type);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L2VuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwic3BlY2lhbFN5bWJvbHMiLCJTaWduaWZpY2FudFRva2VuIiwiVGVybWluYWxOb2RlIiwiRW5kT2ZMaW5lUGFydCIsIm5vV2hpdGVzcGFjZSIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwic2F2ZWRJbmRleCIsIm5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJ0eXBlIiwiZ2V0VHlwZSIsImZvdW5kIiwidHlwZXMiLCJlbmRPZkxpbmUiLCJzdHJpbmciLCJ0ZXJtaW5hbE5vZGUiLCJiYWNrdHJhY2siLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJlbmRPZkxpbmVQYXJ0IiwiRU5EX09GX0xJTkUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxpQkFBaUJGLE9BQU9FLGNBRDVCO0FBQUEsSUFFSUMsbUJBQW1CSCxPQUFPRyxnQkFGOUI7O0FBSUEsSUFBSUMsZUFBZUgsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUksYTtBQUNKLHlCQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYUgsUUFBUUcsVUFBUixFQURqQjtBQUFBLFVBRUlDLG9DQUFvQ0osUUFBUUssb0NBQVIsQ0FBNkNOLFlBQTdDLENBRnhDO0FBQUEsVUFHSU8sbUJBQW1CRixpQ0FIdkIsQ0FId0MsQ0FNa0I7O0FBRTFELFVBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFJQyxPQUFPRCxpQkFBaUJFLE9BQWpCLEVBQVg7QUFBQSxZQUNJQyxRQUFTRixTQUFTWCxpQkFBaUJjLEtBQWpCLENBQXVCQyxTQUQ3Qzs7QUFHQSxZQUFJRixLQUFKLEVBQVc7QUFDVCxjQUFJRyxTQUFTTCxJQUFiLENBRFMsQ0FDVTs7QUFFbkJBLGlCQUFPLElBQVA7O0FBRUEsY0FBSU0sZUFBZSxJQUFJaEIsWUFBSixDQUFpQmUsTUFBakIsRUFBeUJMLElBQXpCLENBQW5COztBQUVBTCxrQkFBUSxDQUFDVyxZQUFELENBQVI7QUFDRDtBQUNGOztBQUVELFVBQUlYLFVBQVUsSUFBZCxFQUFvQjtBQUNsQkYsZ0JBQVFjLFNBQVIsQ0FBa0JYLFVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7K0JBRWlCYSxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1QmxCLFksRUFBYztBQUNwRixVQUFJbUIsZ0JBQWdCLElBQXBCO0FBQUEsVUFDSVQsUUFBU00sV0FBV3BCLGVBQWV3QixXQUR2Qzs7QUFHQSxVQUFJVixLQUFKLEVBQVc7QUFDVFMsd0JBQWdCLElBQUlwQixhQUFKLENBQWtCQyxZQUFsQixDQUFoQjtBQUNEOztBQUVELGFBQU9tQixhQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCdkIsYUFBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgc3BlY2lhbFN5bWJvbHMgPSBsZXhlcnMuc3BlY2lhbFN5bWJvbHMsXG4gICAgU2lnbmlmaWNhbnRUb2tlbiA9IGxleGVycy5TaWduaWZpY2FudFRva2VuO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVQYXJ0IHtcbiAgY29uc3RydWN0b3Iobm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICBmb3VuZCA9ICh0eXBlID09PSBTaWduaWZpY2FudFRva2VuLnR5cGVzLmVuZE9mTGluZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICB2YXIgc3RyaW5nID0gdHlwZTsgLy8vXG5cbiAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgICAgdmFyIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyaW5nLCB0eXBlKTtcblxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBlbmRPZkxpbmVQYXJ0ID0gbnVsbCxcbiAgICAgICAgZm91bmQgPSAoc3ltYm9sID09PSBzcGVjaWFsU3ltYm9scy5FTkRfT0ZfTElORSk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGVuZE9mTGluZVBhcnQgPSBuZXcgRW5kT2ZMaW5lUGFydChub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkxpbmVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUGFydDtcbiJdfQ==