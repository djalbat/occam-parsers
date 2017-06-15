'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../../common/node/terminal');

var RegularExpressionPart = function () {
  function RegularExpressionPart(regExp) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RegularExpressionPart);

    this.regExp = regExp;
    this.noWhitespace = noWhitespace;
  }

  _createClass(RegularExpressionPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var significantTokenType = significantToken.getType(),
            parsed = significantTokenType === 'regularExpression'; ///

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var noWhitespaceString = this.noWhitespace ? '<NO_WHITESPACE>' : '',
          string = noWhitespaceString + '[regularExpression]';

      return string;
    }
  }]);

  return RegularExpressionPart;
}();

module.exports = RegularExpressionPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVnRXhwIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJnZXRUeXBlIiwicGFyc2VkIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJiYWNrdHJhY2siLCJub1doaXRlc3BhY2VTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSw0QkFBUixDQUFyQjs7SUFFTUMscUI7QUFDSixpQ0FBWUMsTUFBWixFQUEwQztBQUFBLFFBQXRCQyxZQUFzQix1RUFBUCxLQUFPOztBQUFBOztBQUN4QyxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNELFksRUFBYztBQUMzQkEscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUQyQixDQUN1Qjs7QUFFbEQsVUFBSUUsZUFBZSxJQUFuQjs7QUFFQSxVQUFNQyxhQUFhRixRQUFRRSxVQUFSLEVBQW5CO0FBQUEsVUFDTUMsb0NBQW9DSCxRQUFRSSxvQ0FBUixDQUE2Q0wsWUFBN0MsQ0FEMUM7QUFBQSxVQUVNTSxtQkFBbUJGLGlDQUZ6QixDQUwyQixDQU9pQzs7QUFFNUQsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQU1DLHVCQUF1QkQsaUJBQWlCRSxPQUFqQixFQUE3QjtBQUFBLFlBQ01DLFNBQVVGLHlCQUF5QixtQkFEekMsQ0FENkIsQ0FFbUM7O0FBRWhFLFlBQUlFLE1BQUosRUFBWTtBQUNWUCx5QkFBZU4sYUFBYWMsb0JBQWIsQ0FBa0NKLGdCQUFsQyxDQUFmO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJSixpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJELGdCQUFRVSxTQUFSLENBQWtCUixVQUFsQjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVUscUJBQXFCLEtBQUtaLFlBQUwsR0FDQyxpQkFERCxHQUVHLEVBRjlCO0FBQUEsVUFHTWEsU0FBWUQsa0JBQVosd0JBSE47O0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmpCLHFCQUFqQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IHtcbiAgY29uc3RydWN0b3IocmVnRXhwLCBub1doaXRlc3BhY2UgPSBmYWxzZSkge1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBwYXJzZWQgPSAoc2lnbmlmaWNhbnRUb2tlblR5cGUgPT09ICdyZWd1bGFyRXhwcmVzc2lvbicpOyAgLy8vXG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VTdHJpbmcgPSB0aGlzLm5vV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8Tk9fV0hJVEVTUEFDRT4nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtub1doaXRlc3BhY2VTdHJpbmd9W3JlZ3VsYXJFeHByZXNzaW9uXWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25QYXJ0O1xuIl19