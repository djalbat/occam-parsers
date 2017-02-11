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
          var terminalNode = TerminalNode.fromSignificantToken(significantToken);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInNwZWNpYWxTeW1ib2xzIiwiU2lnbmlmaWNhbnRUb2tlbiIsIlRlcm1pbmFsTm9kZSIsIkVuZE9mTGluZVBhcnQiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwidHlwZSIsImdldFR5cGUiLCJmb3VuZCIsInR5cGVzIiwiZW5kT2ZMaW5lIiwidGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJiYWNrdHJhY2siLCJzeW1ib2wiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJlbmRPZkxpbmVQYXJ0IiwiRU5EX09GX0xJTkUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxpQkFBaUJGLE9BQU9FLGNBRDVCO0FBQUEsSUFFSUMsbUJBQW1CSCxPQUFPRyxnQkFGOUI7O0FBSUEsSUFBSUMsZUFBZUgsUUFBUSw0QkFBUixDQUFuQjs7SUFFTUksYTtBQUNKLHlCQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYUgsUUFBUUcsVUFBUixFQURqQjtBQUFBLFVBRUlDLG9DQUFvQ0osUUFBUUssb0NBQVIsQ0FBNkNOLFlBQTdDLENBRnhDO0FBQUEsVUFHSU8sbUJBQW1CRixpQ0FIdkIsQ0FId0MsQ0FNa0I7O0FBRTFELFVBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFJQyxPQUFPRCxpQkFBaUJFLE9BQWpCLEVBQVg7QUFBQSxZQUNJQyxRQUFTRixTQUFTWCxpQkFBaUJjLEtBQWpCLENBQXVCQyxTQUQ3Qzs7QUFHQSxZQUFJRixLQUFKLEVBQVc7QUFDVCxjQUFJRyxlQUFlZixhQUFhZ0Isb0JBQWIsQ0FBa0NQLGdCQUFsQyxDQUFuQjs7QUFFQUosa0JBQVEsQ0FBQ1UsWUFBRCxDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJVixVQUFVLElBQWQsRUFBb0I7QUFDbEJGLGdCQUFRYyxTQUFSLENBQWtCWCxVQUFsQjtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7OytCQUVpQmEsTSxFQUFRQyxxQixFQUF1QmpCLFksRUFBYztBQUM3RCxVQUFJa0IsZ0JBQWdCLElBQXBCO0FBQUEsVUFDSVIsUUFBU00sV0FBV3BCLGVBQWV1QixXQUR2Qzs7QUFHQSxVQUFJVCxLQUFKLEVBQVc7QUFDVFEsd0JBQWdCLElBQUluQixhQUFKLENBQWtCQyxZQUFsQixDQUFoQjtBQUNEOztBQUVELGFBQU9rQixhQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCdEIsYUFBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgc3BlY2lhbFN5bWJvbHMgPSBsZXhlcnMuc3BlY2lhbFN5bWJvbHMsXG4gICAgU2lnbmlmaWNhbnRUb2tlbiA9IGxleGVycy5TaWduaWZpY2FudFRva2VuO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgRW5kT2ZMaW5lUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgZm91bmQgPSAodHlwZSA9PT0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5lbmRPZkxpbmUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgdmFyIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgZW5kT2ZMaW5lUGFydCA9IG51bGwsXG4gICAgICAgIGZvdW5kID0gKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuRU5EX09GX0xJTkUpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQobm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVBhcnQ7XG4iXX0=