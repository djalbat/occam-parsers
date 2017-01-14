'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    ErrorToken = lexers.ErrorToken;

var ErrorNode = require('../node/error');

var ErrorPart = function () {
  function ErrorPart() {
    _classCallCheck(this, ErrorPart);
  }

  _createClass(ErrorPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      var nodes = null,
          savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          token = nextNonWhitespaceSignificantToken; ///

      if (token !== null) {
        if (token instanceof ErrorToken) {
          var errorToken = token,
              content = errorToken.getContent(),
              message = errorToken.getMessage(),
              terminalNode = new ErrorNode(content, message);

          nodes = [terminalNode];
        }

        return nodes;
      }

      if (nodes === null) {
        context.backtrack(savedIndex);
      }
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var errorPart = null,
          found = symbol === 'ε';

      if (found) {
        errorPart = new ErrorPart();
      }

      return errorPart;
    }
  }]);

  return ErrorPart;
}();

module.exports = ErrorPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9lcnJvci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsIkVycm9yTm9kZSIsIkVycm9yUGFydCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsIm5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwiZXJyb3JUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJ0ZXJtaW5hbE5vZGUiLCJiYWNrdHJhY2siLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJlcnJvclBhcnQiLCJmb3VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGFBQWFGLE9BQU9FLFVBRHhCOztBQUdBLElBQUlDLFlBQVlGLFFBQVEsZUFBUixDQUFoQjs7SUFFTUcsUzs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhSixRQUFRSSxVQUFSLEVBRGpCO0FBQUEsVUFFSUMsb0NBQW9DTCxRQUFRTSxvQ0FBUixDQUE2Q0osWUFBN0MsQ0FGeEM7QUFBQSxVQUdJSyxRQUFRRixpQ0FIWixDQUR3QyxDQUlPOztBQUUvQyxVQUFJRSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsWUFBSUEsaUJBQWlCVixVQUFyQixFQUFpQztBQUMvQixjQUFJVyxhQUFhRCxLQUFqQjtBQUFBLGNBQ0lFLFVBQVVELFdBQVdFLFVBQVgsRUFEZDtBQUFBLGNBRUlDLFVBQVVILFdBQVdJLFVBQVgsRUFGZDtBQUFBLGNBR0lDLGVBQWUsSUFBSWYsU0FBSixDQUFjVyxPQUFkLEVBQXVCRSxPQUF2QixDQUhuQjs7QUFLQVIsa0JBQVEsQ0FBQ1UsWUFBRCxDQUFSO0FBQ0Q7O0FBRUQsZUFBT1YsS0FBUDtBQUNEOztBQUVELFVBQUlBLFVBQVUsSUFBZCxFQUFvQjtBQUNsQkgsZ0JBQVFjLFNBQVIsQ0FBa0JWLFVBQWxCO0FBQ0Q7QUFDRjs7OytCQUVpQlcsTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJmLFksRUFBYztBQUNwRixVQUFJZ0IsWUFBWSxJQUFoQjtBQUFBLFVBQ0lDLFFBQVNKLFdBQVcsR0FEeEI7O0FBR0EsVUFBSUksS0FBSixFQUFXO0FBQ1RELG9CQUFZLElBQUluQixTQUFKLEVBQVo7QUFDRDs7QUFFRCxhQUFPbUIsU0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgRXJyb3JUb2tlbiA9IGxleGVycy5FcnJvclRva2VuO1xuXG52YXIgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9lcnJvcicpO1xuXG5jbGFzcyBFcnJvclBhcnQge1xuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICB0b2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIEVycm9yVG9rZW4pIHtcbiAgICAgICAgdmFyIGVycm9yVG9rZW4gPSB0b2tlbixcbiAgICAgICAgICAgIGNvbnRlbnQgPSBlcnJvclRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvclRva2VuLmdldE1lc3NhZ2UoKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBFcnJvck5vZGUoY29udGVudCwgbWVzc2FnZSk7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH1cblxuICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIGVycm9yUGFydCA9IG51bGwsXG4gICAgICAgIGZvdW5kID0gKHN5bWJvbCA9PT0gJ861Jyk7XG4gICAgXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlcnJvclBhcnQgPSBuZXcgRXJyb3JQYXJ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yUGFydDsiXX0=