'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var TerminalNode = require('../../common/node/terminal');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var TerminalSymbolPart = function () {
  function TerminalSymbolPart(content) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, TerminalSymbolPart);

    this.content = content;
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
            parsed = content === this.content;

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
      var noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = noWhitespaceString + '"' + this.content + '"';

      return string;
    }
  }]);

  return TerminalSymbolPart;
}();

module.exports = TerminalSymbolPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wYXJ0L3Rlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJFeHRlbmRlZEJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiY29udGVudCIsIm5vV2hpdGVzcGFjZSIsImNvbnRleHQiLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldENvbnRlbnQiLCJwYXJzZWQiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsIm5vV2hpdGVzcGFjZVN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLDRCQUFSLENBQXJCOztBQUVNLElBQUVFLGdCQUFGLEdBQXVCSCxNQUF2QixDQUFFRyxnQkFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELGdCQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsYUFGRixHQUVvQkQsY0FGcEIsQ0FFRUMsYUFGRjs7SUFJQUMsa0I7QUFDSiw4QkFBWUMsT0FBWixFQUEyQztBQUFBLFFBQXRCQyxZQUFzQix1RUFBUCxLQUFPOztBQUFBOztBQUN6QyxTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNELFksRUFBYztBQUMzQkEscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUQyQixDQUN1Qjs7QUFFbEQsVUFBSUUsZUFBZSxJQUFuQjs7QUFFQSxVQUFNQyxhQUFhRixRQUFRRSxVQUFSLEVBQW5CO0FBQUEsVUFDSUMsb0NBQW9DSCxRQUFRSSxvQ0FBUixDQUE2Q0wsWUFBN0MsQ0FEeEM7QUFBQSxVQUVJTSxtQkFBbUJGLGlDQUZ2QixDQUwyQixDQU8rQjs7QUFFMUQsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQU1QLFVBQVVPLGlCQUFpQkMsVUFBakIsRUFBaEI7QUFBQSxZQUNNQyxTQUFVVCxZQUFZLEtBQUtBLE9BRGpDOztBQUdBLFlBQUlTLE1BQUosRUFBWTtBQUNWTix5QkFBZVIsYUFBYWUsb0JBQWIsQ0FBa0NILGdCQUFsQyxDQUFmO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJSixpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJELGdCQUFRUyxTQUFSLENBQWtCUCxVQUFsQjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVMscUJBQXFCLEtBQUtYLFlBQUwsR0FDRUgsYUFERixHQUVJLEVBRi9CO0FBQUEsVUFHTWUsU0FBWUQsa0JBQVosU0FBa0MsS0FBS1osT0FBdkMsTUFITjs7QUFLQSxhQUFPYSxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCaEIsa0JBQWpCIiwiZmlsZSI6InRlcm1pbmFsU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBFeHRlbmRlZEJORkxleGVyLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbm9XaGl0ZXNwYWNlID0gZmFsc2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgcGFyc2VkID0gKGNvbnRlbnQgPT09IHRoaXMuY29udGVudCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVN0cmluZyA9IHRoaXMubm9XaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PX1dISVRFU1BBQ0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtub1doaXRlc3BhY2VTdHJpbmd9XCIke3RoaXMuY29udGVudH1cImA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sUGFydDtcbiJdfQ==