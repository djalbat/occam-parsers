'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    specialSymbols = lexers.specialSymbols,
    SignificantToken = lexers.SignificantToken;

var TerminalNode = require('../../common/node/terminal');

var EndOfLinePart = function () {
  function EndOfLinePart(noWhitespace) {
    _classCallCheck(this, EndOfLinePart);

    this.noWhitespace = noWhitespace;
  }

  _createClass(EndOfLinePart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var type = significantToken.getType(),
            found = type === SignificantToken.types.endOfLine;

        if (found) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var endOfLinePart = null;

      var found = symbol === specialSymbols.END_OF_LINE;

      if (found) {
        endOfLinePart = new EndOfLinePart(noWhitespace);
      }

      return endOfLinePart;
    }
  }]);

  return EndOfLinePart;
}();

module.exports = EndOfLinePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInNwZWNpYWxTeW1ib2xzIiwiU2lnbmlmaWNhbnRUb2tlbiIsIlRlcm1pbmFsTm9kZSIsIkVuZE9mTGluZVBhcnQiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsIm5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJ0eXBlIiwiZ2V0VHlwZSIsImZvdW5kIiwidHlwZXMiLCJlbmRPZkxpbmUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsInN5bWJvbCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImVuZE9mTGluZVBhcnQiLCJFTkRfT0ZfTElORSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjtBQUFBLElBQ0lDLGlCQUFpQkYsT0FBT0UsY0FENUI7QUFBQSxJQUVJQyxtQkFBbUJILE9BQU9HLGdCQUY5Qjs7QUFJQSxJQUFNQyxlQUFlSCxRQUFRLDRCQUFSLENBQXJCOztJQUVNSSxhO0FBQ0oseUJBQVlDLFlBQVosRUFBMEI7QUFBQTs7QUFDeEIsU0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsTyxFQUFTRCxZLEVBQWM7QUFDM0JBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEMkIsQ0FDdUI7O0FBRWxELFVBQUlFLGVBQWUsSUFBbkI7O0FBRUEsVUFBTUMsYUFBYUYsUUFBUUUsVUFBUixFQUFuQjtBQUFBLFVBQ01DLG9DQUFvQ0gsUUFBUUksb0NBQVIsQ0FBNkNMLFlBQTdDLENBRDFDO0FBQUEsVUFFTU0sbUJBQW1CRixpQ0FGekIsQ0FMMkIsQ0FPaUM7O0FBRTVELFVBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFNQyxPQUFPRCxpQkFBaUJFLE9BQWpCLEVBQWI7QUFBQSxZQUNLQyxRQUFTRixTQUFTVixpQkFBaUJhLEtBQWpCLENBQXVCQyxTQUQ5Qzs7QUFHQSxZQUFJRixLQUFKLEVBQVc7QUFDVFAseUJBQWVKLGFBQWFjLG9CQUFiLENBQWtDTixnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUosaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRCxnQkFBUVksU0FBUixDQUFrQlYsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRCxZQUFQO0FBQ0Q7OzsrQkFFaUJZLE0sRUFBUUMscUIsRUFBdUJmLFksRUFBYztBQUM3RCxVQUFJZ0IsZ0JBQWdCLElBQXBCOztBQUVBLFVBQU1QLFFBQVNLLFdBQVdsQixlQUFlcUIsV0FBekM7O0FBRUEsVUFBSVIsS0FBSixFQUFXO0FBQ1RPLHdCQUFnQixJQUFJakIsYUFBSixDQUFrQkMsWUFBbEIsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPZ0IsYUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQnBCLGFBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgc3BlY2lhbFN5bWJvbHMgPSBsZXhlcnMuc3BlY2lhbFN5bWJvbHMsXG4gICAgU2lnbmlmaWNhbnRUb2tlbiA9IGxleGVycy5TaWduaWZpY2FudFRva2VuO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVQYXJ0IHtcbiAgY29uc3RydWN0b3Iobm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICBmb3VuZCA9ICh0eXBlID09PSBTaWduaWZpY2FudFRva2VuLnR5cGVzLmVuZE9mTGluZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IGVuZE9mTGluZVBhcnQgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZvdW5kID0gKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuRU5EX09GX0xJTkUpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQobm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVBhcnQ7XG4iXX0=