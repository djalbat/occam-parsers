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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L2Vycm9yLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJFcnJvclRva2VuIiwiRXJyb3JOb2RlIiwiRXJyb3JQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VUb2tlbiIsImdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwiZXJyb3JUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJ0ZXJtaW5hbE5vZGUiLCJiYWNrdHJhY2siLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJlcnJvclBhcnQiLCJmb3VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGFBQWFGLE9BQU9FLFVBRHhCOztBQUdBLElBQUlDLFlBQVlGLFFBQVEsZUFBUixDQUFoQjs7SUFFTUcsUzs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhSixRQUFRSSxVQUFSLEVBRGpCO0FBQUEsVUFFSUMseUJBQXlCTCxRQUFRTSxvQ0FBUixDQUE2Q0osWUFBN0MsQ0FGN0I7QUFBQSxVQUdJSyxRQUFRRixzQkFIWixDQUR3QyxDQUlKOztBQUVwQyxVQUFJRSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsWUFBSUEsaUJBQWlCVixVQUFyQixFQUFpQztBQUMvQixjQUFJVyxhQUFhRCxLQUFqQjtBQUFBLGNBQ0lFLFVBQVVELFdBQVdFLFVBQVgsRUFEZDtBQUFBLGNBRUlDLFVBQVVILFdBQVdJLFVBQVgsRUFGZDtBQUFBLGNBR0lDLGVBQWUsSUFBSWYsU0FBSixDQUFjVyxPQUFkLEVBQXVCRSxPQUF2QixDQUhuQjs7QUFLQVIsa0JBQVEsQ0FBQ1UsWUFBRCxDQUFSO0FBQ0Q7O0FBRUQsZUFBT1YsS0FBUDtBQUNEOztBQUVELFVBQUlBLFVBQVUsSUFBZCxFQUFvQjtBQUNsQkgsZ0JBQVFjLFNBQVIsQ0FBa0JWLFVBQWxCO0FBQ0Q7QUFDRjs7OytCQUVpQlcsTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJmLFksRUFBYztBQUNwRixVQUFJZ0IsWUFBWSxJQUFoQjtBQUFBLFVBQ0lDLFFBQVNKLFdBQVcsR0FEeEI7O0FBR0EsVUFBSUksS0FBSixFQUFXO0FBQ1RELG9CQUFZLElBQUluQixTQUFKLEVBQVo7QUFDRDs7QUFFRCxhQUFPbUIsU0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgRXJyb3JUb2tlbiA9IGxleGVycy5FcnJvclRva2VuO1xuXG52YXIgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9lcnJvcicpO1xuXG5jbGFzcyBFcnJvclBhcnQge1xuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgdG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgRXJyb3JUb2tlbikge1xuICAgICAgICB2YXIgZXJyb3JUb2tlbiA9IHRva2VuLFxuICAgICAgICAgICAgY29udGVudCA9IGVycm9yVG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yVG9rZW4uZ2V0TWVzc2FnZSgpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlID0gbmV3IEVycm9yTm9kZShjb250ZW50LCBtZXNzYWdlKTtcblxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgZXJyb3JQYXJ0ID0gbnVsbCxcbiAgICAgICAgZm91bmQgPSAoc3ltYm9sID09PSAnzrUnKTtcbiAgICBcbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGVycm9yUGFydCA9IG5ldyBFcnJvclBhcnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JQYXJ0OyJdfQ==