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
          nextNonWhitespaceToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          token = nextNonWhitespaceToken; ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9lcnJvci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsIkVycm9yTm9kZSIsIkVycm9yUGFydCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJ0b2tlbiIsImVycm9yVG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwidGVybWluYWxOb2RlIiwiYmFja3RyYWNrIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZXJyb3JQYXJ0IiwiZm91bmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxhQUFhRixPQUFPRSxVQUR4Qjs7QUFHQSxJQUFJQyxZQUFZRixRQUFRLGVBQVIsQ0FBaEI7O0lBRU1HLFM7Ozs7Ozs7MEJBQ0VDLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeEMsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYUosUUFBUUksVUFBUixFQURqQjtBQUFBLFVBRUlDLHlCQUF5QkwsUUFBUU0sb0NBQVIsQ0FBNkNKLFlBQTdDLENBRjdCO0FBQUEsVUFHSUssUUFBUUYsc0JBSFosQ0FEd0MsQ0FJSjs7QUFFcEMsVUFBSUUsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLFlBQUlBLGlCQUFpQlYsVUFBckIsRUFBaUM7QUFDL0IsY0FBSVcsYUFBYUQsS0FBakI7QUFBQSxjQUNJRSxVQUFVRCxXQUFXRSxVQUFYLEVBRGQ7QUFBQSxjQUVJQyxVQUFVSCxXQUFXSSxVQUFYLEVBRmQ7QUFBQSxjQUdJQyxlQUFlLElBQUlmLFNBQUosQ0FBY1csT0FBZCxFQUF1QkUsT0FBdkIsQ0FIbkI7O0FBS0FSLGtCQUFRLENBQUNVLFlBQUQsQ0FBUjtBQUNEOztBQUVELGVBQU9WLEtBQVA7QUFDRDs7QUFFRCxVQUFJQSxVQUFVLElBQWQsRUFBb0I7QUFDbEJILGdCQUFRYyxTQUFSLENBQWtCVixVQUFsQjtBQUNEO0FBQ0Y7OzsrQkFFaUJXLE0sRUFBUUMscUIsRUFBdUJDLHFCLEVBQXVCZixZLEVBQWM7QUFDcEYsVUFBSWdCLFlBQVksSUFBaEI7QUFBQSxVQUNJQyxRQUFTSixXQUFXLEdBRHhCOztBQUdBLFVBQUlJLEtBQUosRUFBVztBQUNURCxvQkFBWSxJQUFJbkIsU0FBSixFQUFaO0FBQ0Q7O0FBRUQsYUFBT21CLFNBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJ0QixTQUFqQiIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEVycm9yVG9rZW4gPSBsZXhlcnMuRXJyb3JUb2tlbjtcblxudmFyIEVycm9yTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZXJyb3InKTtcblxuY2xhc3MgRXJyb3JQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VUb2tlbjsgLy8vXG5cbiAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIEVycm9yVG9rZW4pIHtcbiAgICAgICAgdmFyIGVycm9yVG9rZW4gPSB0b2tlbixcbiAgICAgICAgICAgIGNvbnRlbnQgPSBlcnJvclRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvclRva2VuLmdldE1lc3NhZ2UoKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBFcnJvck5vZGUoY29udGVudCwgbWVzc2FnZSk7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH1cblxuICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIGVycm9yUGFydCA9IG51bGwsXG4gICAgICAgIGZvdW5kID0gKHN5bWJvbCA9PT0gJ861Jyk7XG4gICAgXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlcnJvclBhcnQgPSBuZXcgRXJyb3JQYXJ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yUGFydDsiXX0=