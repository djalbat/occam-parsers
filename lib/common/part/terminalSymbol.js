'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../../common/node/terminal');

var TerminalSymbolPart = function () {
  function TerminalSymbolPart(symbol, noWhitespace) {
    _classCallCheck(this, TerminalSymbolPart);

    this.symbol = symbol;
    this.noWhitespace = noWhitespace;
  }

  _createClass(TerminalSymbolPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            parsed = content === this.symbol; ///

        if (parsed) {
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
      var terminalSymbolPart = null;

      var terminalSymbolPartRegExp = /^'([^']+)'$/,
          matches = symbol.match(terminalSymbolPartRegExp);

      if (matches !== null) {
        var secondMatch = second(matches);

        symbol = secondMatch; ///

        terminalSymbolPart = new TerminalSymbolPart(symbol, noWhitespace);
      }

      return terminalSymbolPart;
    }
  }]);

  return TerminalSymbolPart;
}();

module.exports = TerminalSymbolPart;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0Iiwic3ltYm9sIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJwYXJzZWQiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInRlcm1pbmFsU3ltYm9sUGFydCIsInRlcm1pbmFsU3ltYm9sUGFydFJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSw0QkFBUixDQUFyQjs7SUFFTUMsa0I7QUFDSiw4QkFBWUMsTUFBWixFQUFvQkMsWUFBcEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsTyxFQUFTRCxZLEVBQWM7QUFDM0JBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEMkIsQ0FDdUI7O0FBRWxELFVBQUlFLGVBQWUsSUFBbkI7O0FBRUEsVUFBTUMsYUFBYUYsUUFBUUUsVUFBUixFQUFuQjtBQUFBLFVBQ0VDLG9DQUFvQ0gsUUFBUUksb0NBQVIsQ0FBNkNMLFlBQTdDLENBRHRDO0FBQUEsVUFFRU0sbUJBQW1CRixpQ0FGckIsQ0FMMkIsQ0FPNkI7O0FBRXhELFVBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFNQyxVQUFVRCxpQkFBaUJFLFVBQWpCLEVBQWhCO0FBQUEsWUFDSUMsU0FBVUYsWUFBWSxLQUFLUixNQUQvQixDQUQ2QixDQUVZOztBQUV6QyxZQUFJVSxNQUFKLEVBQVk7QUFDVlAseUJBQWVOLGFBQWFjLG9CQUFiLENBQWtDSixnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUosaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRCxnQkFBUVUsU0FBUixDQUFrQlIsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRCxZQUFQO0FBQ0Q7OzsrQkFFaUJILE0sRUFBUWEscUIsRUFBdUJaLFksRUFBYztBQUM3RCxVQUFJYSxxQkFBcUIsSUFBekI7O0FBRUEsVUFBTUMsMkJBQTJCLGFBQWpDO0FBQUEsVUFDTUMsVUFBVWhCLE9BQU9pQixLQUFQLENBQWFGLHdCQUFiLENBRGhCOztBQUdBLFVBQUlDLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBTUUsY0FBY0MsT0FBT0gsT0FBUCxDQUFwQjs7QUFFQWhCLGlCQUFTa0IsV0FBVCxDQUhvQixDQUdFOztBQUV0QkosNkJBQXFCLElBQUlmLGtCQUFKLENBQXVCQyxNQUF2QixFQUErQkMsWUFBL0IsQ0FBckI7QUFDRDs7QUFFRCxhQUFPYSxrQkFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQnRCLGtCQUFqQjs7QUFFQSxTQUFTb0IsTUFBVCxDQUFnQkcsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3ltYm9sLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHBhcnNlZCA9IChjb250ZW50ID09PSB0aGlzLnN5bWJvbCk7ICAvLy9cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgdGVybWluYWxTeW1ib2xQYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB0ZXJtaW5hbFN5bWJvbFBhcnRSZWdFeHAgPSAvXicoW14nXSspJyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2godGVybWluYWxTeW1ib2xQYXJ0UmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgc3ltYm9sID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHN5bWJvbCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xQYXJ0O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=