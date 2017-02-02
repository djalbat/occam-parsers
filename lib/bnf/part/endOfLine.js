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
          var productionName = null,
              terminalNode = TerminalNode.fromProductionNameAndSignificantToken(productionName, significantToken);

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
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInNwZWNpYWxTeW1ib2xzIiwiU2lnbmlmaWNhbnRUb2tlbiIsIlRlcm1pbmFsTm9kZSIsIkVuZE9mTGluZVBhcnQiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwidHlwZSIsImdldFR5cGUiLCJmb3VuZCIsInR5cGVzIiwiZW5kT2ZMaW5lIiwicHJvZHVjdGlvbk5hbWUiLCJ0ZXJtaW5hbE5vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRTaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwic3ltYm9sIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZW5kT2ZMaW5lUGFydCIsIkVORF9PRl9MSU5FIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsaUJBQWlCRixPQUFPRSxjQUQ1QjtBQUFBLElBRUlDLG1CQUFtQkgsT0FBT0csZ0JBRjlCOztBQUlBLElBQUlDLGVBQWVILFFBQVEsNEJBQVIsQ0FBbkI7O0lBRU1JLGE7QUFDSix5QkFBWUMsWUFBWixFQUEwQjtBQUFBOztBQUN4QixTQUFLQSxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUYsWSxFQUFjO0FBQ3hDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRHdDLENBQ1U7O0FBRWxELFVBQUlHLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLGFBQWFILFFBQVFHLFVBQVIsRUFEakI7QUFBQSxVQUVJQyxvQ0FBb0NKLFFBQVFLLG9DQUFSLENBQTZDTixZQUE3QyxDQUZ4QztBQUFBLFVBR0lPLG1CQUFtQkYsaUNBSHZCLENBSHdDLENBTWtCOztBQUUxRCxVQUFJRSxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsWUFBSUMsT0FBT0QsaUJBQWlCRSxPQUFqQixFQUFYO0FBQUEsWUFDSUMsUUFBU0YsU0FBU1gsaUJBQWlCYyxLQUFqQixDQUF1QkMsU0FEN0M7O0FBR0EsWUFBSUYsS0FBSixFQUFXO0FBQ1QsY0FBSUcsaUJBQWlCLElBQXJCO0FBQUEsY0FDSUMsZUFBZWhCLGFBQWFpQixxQ0FBYixDQUFtREYsY0FBbkQsRUFBbUVOLGdCQUFuRSxDQURuQjs7QUFHQUosa0JBQVEsQ0FBQ1csWUFBRCxDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJWCxVQUFVLElBQWQsRUFBb0I7QUFDbEJGLGdCQUFRZSxTQUFSLENBQWtCWixVQUFsQjtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7OytCQUVpQmMsTSxFQUFRQyxxQixFQUF1QmxCLFksRUFBYztBQUM3RCxVQUFJbUIsZ0JBQWdCLElBQXBCO0FBQUEsVUFDSVQsUUFBU08sV0FBV3JCLGVBQWV3QixXQUR2Qzs7QUFHQSxVQUFJVixLQUFKLEVBQVc7QUFDVFMsd0JBQWdCLElBQUlwQixhQUFKLENBQWtCQyxZQUFsQixDQUFoQjtBQUNEOztBQUVELGFBQU9tQixhQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCdkIsYUFBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgc3BlY2lhbFN5bWJvbHMgPSBsZXhlcnMuc3BlY2lhbFN5bWJvbHMsXG4gICAgU2lnbmlmaWNhbnRUb2tlbiA9IGxleGVycy5TaWduaWZpY2FudFRva2VuO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgRW5kT2ZMaW5lUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgZm91bmQgPSAodHlwZSA9PT0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5lbmRPZkxpbmUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gbnVsbCxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRTaWduaWZpY2FudFRva2VuKHByb2R1Y3Rpb25OYW1lLCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgZW5kT2ZMaW5lUGFydCA9IG51bGwsXG4gICAgICAgIGZvdW5kID0gKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuRU5EX09GX0xJTkUpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQobm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVBhcnQ7XG4iXX0=