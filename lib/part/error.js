'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('../occam-lexers'),
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
              str = errorToken.getString(),
              message = errorToken.getMessage(),
              terminalNode = new ErrorNode(str, message);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L2Vycm9yLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJFcnJvclRva2VuIiwiRXJyb3JOb2RlIiwiRXJyb3JQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VUb2tlbiIsImdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwiZXJyb3JUb2tlbiIsInN0ciIsImdldFN0cmluZyIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwidGVybWluYWxOb2RlIiwiYmFja3RyYWNrIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZXJyb3JQYXJ0IiwiZm91bmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxpQkFBUixDQUFiO0FBQUEsSUFDSUMsYUFBYUYsT0FBT0UsVUFEeEI7O0FBR0EsSUFBSUMsWUFBWUYsUUFBUSxlQUFSLENBQWhCOztJQUVNRyxTOzs7Ozs7OzBCQUNFQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDLFVBQUlDLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLGFBQWFKLFFBQVFJLFVBQVIsRUFEakI7QUFBQSxVQUVJQyx5QkFBeUJMLFFBQVFNLG9DQUFSLENBQTZDSixZQUE3QyxDQUY3QjtBQUFBLFVBR0lLLFFBQVFGLHNCQUhaLENBRHdDLENBSUo7O0FBRXBDLFVBQUlFLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixZQUFJQSxpQkFBaUJWLFVBQXJCLEVBQWlDO0FBQy9CLGNBQUlXLGFBQWFELEtBQWpCO0FBQUEsY0FDSUUsTUFBTUQsV0FBV0UsU0FBWCxFQURWO0FBQUEsY0FFSUMsVUFBVUgsV0FBV0ksVUFBWCxFQUZkO0FBQUEsY0FHSUMsZUFBZSxJQUFJZixTQUFKLENBQWNXLEdBQWQsRUFBbUJFLE9BQW5CLENBSG5COztBQUtBUixrQkFBUSxDQUFDVSxZQUFELENBQVI7QUFDRDs7QUFFRCxlQUFPVixLQUFQO0FBQ0Q7O0FBRUQsVUFBSUEsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCSCxnQkFBUWMsU0FBUixDQUFrQlYsVUFBbEI7QUFDRDtBQUNGOzs7K0JBRWlCVyxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1QmYsWSxFQUFjO0FBQ3BGLFVBQUlnQixZQUFZLElBQWhCO0FBQUEsVUFDSUMsUUFBU0osV0FBVyxHQUR4Qjs7QUFHQSxVQUFJSSxLQUFKLEVBQVc7QUFDVEQsb0JBQVksSUFBSW5CLFNBQUosRUFBWjtBQUNEOztBQUVELGFBQU9tQixTQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCdEIsU0FBakIiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuLi9vY2NhbS1sZXhlcnMnKSxcbiAgICBFcnJvclRva2VuID0gbGV4ZXJzLkVycm9yVG9rZW47XG5cbnZhciBFcnJvck5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2Vycm9yJyk7XG5cbmNsYXNzIEVycm9yUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICB0b2tlbiA9IG5leHROb25XaGl0ZXNwYWNlVG9rZW47IC8vL1xuXG4gICAgaWYgKHRva2VuICE9PSBudWxsKSB7XG4gICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBFcnJvclRva2VuKSB7XG4gICAgICAgIHZhciBlcnJvclRva2VuID0gdG9rZW4sXG4gICAgICAgICAgICBzdHIgPSBlcnJvclRva2VuLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yVG9rZW4uZ2V0TWVzc2FnZSgpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlID0gbmV3IEVycm9yTm9kZShzdHIsIG1lc3NhZ2UpO1xuXG4gICAgICAgIG5vZGVzID0gW3Rlcm1pbmFsTm9kZV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9XG5cbiAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBlcnJvclBhcnQgPSBudWxsLFxuICAgICAgICBmb3VuZCA9IChzeW1ib2wgPT09ICfOtScpO1xuICAgIFxuICAgIGlmIChmb3VuZCkge1xuICAgICAgZXJyb3JQYXJ0ID0gbmV3IEVycm9yUGFydCgpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvclBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvclBhcnQ7Il19