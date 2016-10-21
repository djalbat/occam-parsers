'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    SignificantToken = lexers.SignificantToken;

var TerminalNode = require('../node/terminal');

var SignificantTokenTypePart = function () {
  function SignificantTokenTypePart(type, noWhitespace) {
    _classCallCheck(this, SignificantTokenTypePart);

    this.type = type;
    this.noWhitespace = noWhitespace;
  }

  _createClass(SignificantTokenTypePart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodes = null,
          savedIndex = context.savedIndex(),
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
          token = nextNonWhitespaceToken; ///

      if (token !== null) {
        if (token instanceof SignificantToken) {
          var significantToken = token,
              type = significantToken.getType(),
              parsed = type === this.type; ///

          if (parsed) {
            var str = significantToken.getString(),
                terminalNode = new TerminalNode(str, type);

            nodes = [terminalNode];
          }
        }
      }

      if (nodes === null) {
        context.backtrack(savedIndex);
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var significantTokenTypePart = null,
          type = symbol,
          ///
      foundType = significantTokenTypes.find(function (significantTokenType) {
        var found = type === significantTokenType;

        return found;
      }),
          found = foundType !== undefined;

      if (found) {
        significantTokenTypePart = new SignificantTokenTypePart(type, noWhitespace);
      }

      return significantTokenTypePart;
    }
  }]);

  return SignificantTokenTypePart;
}();

module.exports = SignificantTokenTypePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiVGVybWluYWxOb2RlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwidHlwZSIsIm5vV2hpdGVzcGFjZSIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwic2F2ZWRJbmRleCIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0VHlwZSIsInBhcnNlZCIsInN0ciIsImdldFN0cmluZyIsInRlcm1pbmFsTm9kZSIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsImZvdW5kVHlwZSIsImZpbmQiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImZvdW5kIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsbUJBQW1CRixPQUFPRSxnQkFEOUI7O0FBR0EsSUFBSUMsZUFBZUYsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUcsd0I7QUFDSixvQ0FBWUMsSUFBWixFQUFrQkMsWUFBbEIsRUFBZ0M7QUFBQTs7QUFDOUIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFGLFksRUFBYztBQUN4Q0EscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUR3QyxDQUNVOztBQUVsRCxVQUFJRyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhSCxRQUFRRyxVQUFSLEVBRGpCO0FBQUEsVUFFSUMseUJBQXlCSixRQUFRSyx5QkFBUixDQUFrQ04sWUFBbEMsQ0FGN0I7QUFBQSxVQUdJTyxRQUFRRixzQkFIWixDQUh3QyxDQU1KOztBQUVwQyxVQUFJRSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsWUFBSUEsaUJBQWlCWCxnQkFBckIsRUFBdUM7QUFDckMsY0FBSVksbUJBQW1CRCxLQUF2QjtBQUFBLGNBQ0lSLE9BQU9TLGlCQUFpQkMsT0FBakIsRUFEWDtBQUFBLGNBRUlDLFNBQVVYLFNBQVMsS0FBS0EsSUFGNUIsQ0FEcUMsQ0FHRDs7QUFFcEMsY0FBSVcsTUFBSixFQUFZO0FBQ1YsZ0JBQUlDLE1BQU1ILGlCQUFpQkksU0FBakIsRUFBVjtBQUFBLGdCQUNJQyxlQUFlLElBQUloQixZQUFKLENBQWlCYyxHQUFqQixFQUFzQlosSUFBdEIsQ0FEbkI7O0FBR0FJLG9CQUFRLENBQUNVLFlBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFJVixVQUFVLElBQWQsRUFBb0I7QUFDbEJGLGdCQUFRYSxTQUFSLENBQWtCVixVQUFsQjtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7OytCQUVpQlksTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJqQixZLEVBQWM7QUFDcEYsVUFBSWtCLDJCQUEyQixJQUEvQjtBQUFBLFVBQ0luQixPQUFPZ0IsTUFEWDtBQUFBLFVBQ29CO0FBQ2hCSSxrQkFBWUYsc0JBQXNCRyxJQUF0QixDQUEyQixVQUFTQyxvQkFBVCxFQUErQjtBQUNwRSxZQUFJQyxRQUFTdkIsU0FBU3NCLG9CQUF0Qjs7QUFFQSxlQUFPQyxLQUFQO0FBQ0QsT0FKVyxDQUZoQjtBQUFBLFVBT0lBLFFBQVNILGNBQWNJLFNBUDNCOztBQVNBLFVBQUlELEtBQUosRUFBVztBQUNUSixtQ0FBMkIsSUFBSXBCLHdCQUFKLENBQTZCQyxJQUE3QixFQUFtQ0MsWUFBbkMsQ0FBM0I7QUFDRDs7QUFFRCxhQUFPa0Isd0JBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUIzQix3QkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBTaWduaWZpY2FudFRva2VuID0gbGV4ZXJzLlNpZ25pZmljYW50VG9rZW47XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cbiAgICBcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgdG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgU2lnbmlmaWNhbnRUb2tlbikge1xuICAgICAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuLFxuICAgICAgICAgICAgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgcGFyc2VkID0gKHR5cGUgPT09IHRoaXMudHlwZSk7ICAvLy9cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdmFyIHN0ciA9IHNpZ25pZmljYW50VG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyLCB0eXBlKTtcblxuICAgICAgICAgIG5vZGVzID0gW3Rlcm1pbmFsTm9kZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gc3ltYm9sLCAgLy8vXG4gICAgICAgIGZvdW5kVHlwZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5maW5kKGZ1bmN0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgICAgdmFyIGZvdW5kID0gKHR5cGUgPT09IHNpZ25pZmljYW50VG9rZW5UeXBlKTtcblxuICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgfSksXG4gICAgICAgIGZvdW5kID0gKGZvdW5kVHlwZSAhPT0gdW5kZWZpbmVkKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCh0eXBlLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4iXX0=