'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var RegularExpressionPart = function () {
  function RegularExpressionPart(regExp, noWhitespace) {
    _classCallCheck(this, RegularExpressionPart);

    this.regExp = regExp;
    this.noWhitespace = noWhitespace;
  }

  _createClass(RegularExpressionPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodes = null,
          savedIndex = context.savedIndex(),
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
          token = nextNonWhitespaceToken; ///

      if (token !== null) {
        var str = token.getString(),
            matches = str.match(this.regExp);

        if (matches !== null) {
          var firstMatch = first(matches),
              parsed = firstMatch === str;

          if (parsed) {
            var type = RegularExpressionPart.type,
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
      var regularExpressionPart = null,
          regularExpressionPartRegExp = /\/([^/]+)\//,
          matches = symbol.match(regularExpressionPartRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            regExpPattern = secondMatch,
            ///
        regExp = new RegExp('^' + regExpPattern + '$'); ///

        regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);
      }

      return regularExpressionPart;
    }
  }]);

  return RegularExpressionPart;
}();

RegularExpressionPart.type = 'regexp'; ///

module.exports = RegularExpressionPart;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJuZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VUb2tlbiIsInRva2VuIiwic3RyIiwiZ2V0U3RyaW5nIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwicGFyc2VkIiwidHlwZSIsInRlcm1pbmFsTm9kZSIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCIsInJlZ3VsYXJFeHByZXNzaW9uUGFydFJlZ0V4cCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwicmVnRXhwUGF0dGVybiIsIlJlZ0V4cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1DLHFCO0FBQ0osaUNBQVlDLE1BQVosRUFBb0JDLFlBQXBCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYUgsUUFBUUcsVUFBUixFQURqQjtBQUFBLFVBRUlDLHlCQUF5QkosUUFBUUsseUJBQVIsQ0FBa0NOLFlBQWxDLENBRjdCO0FBQUEsVUFHSU8sUUFBUUYsc0JBSFosQ0FId0MsQ0FNSjs7QUFFcEMsVUFBSUUsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLFlBQUlDLE1BQU1ELE1BQU1FLFNBQU4sRUFBVjtBQUFBLFlBQ0lDLFVBQVVGLElBQUlHLEtBQUosQ0FBVSxLQUFLWixNQUFmLENBRGQ7O0FBR0EsWUFBSVcsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixjQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsY0FDSUksU0FBVUYsZUFBZUosR0FEN0I7O0FBR0EsY0FBSU0sTUFBSixFQUFZO0FBQ1YsZ0JBQUlDLE9BQU9qQixzQkFBc0JpQixJQUFqQztBQUFBLGdCQUNJQyxlQUFlLElBQUlwQixZQUFKLENBQWlCWSxHQUFqQixFQUFzQk8sSUFBdEIsQ0FEbkI7O0FBR0FaLG9CQUFRLENBQUNhLFlBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFJYixVQUFVLElBQWQsRUFBb0I7QUFDbEJGLGdCQUFRZ0IsU0FBUixDQUFrQmIsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OzsrQkFFaUJlLE0sRUFBUUMscUIsRUFBdUJDLHFCLEVBQXVCcEIsWSxFQUFjO0FBQ3BGLFVBQUlxQix3QkFBd0IsSUFBNUI7QUFBQSxVQUNJQyw4QkFBOEIsYUFEbEM7QUFBQSxVQUVJWixVQUFVUSxPQUFPUCxLQUFQLENBQWFXLDJCQUFiLENBRmQ7O0FBSUEsVUFBSVosWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJYSxjQUFjQyxPQUFPZCxPQUFQLENBQWxCO0FBQUEsWUFDSWUsZ0JBQWdCRixXQURwQjtBQUFBLFlBQ2tDO0FBQzlCeEIsaUJBQVMsSUFBSTJCLE1BQUosT0FBZUQsYUFBZixPQUZiLENBRG9CLENBRzJCOztBQUUvQ0osZ0NBQXdCLElBQUl2QixxQkFBSixDQUEwQkMsTUFBMUIsRUFBa0NDLFlBQWxDLENBQXhCO0FBQ0Q7O0FBRUQsYUFBT3FCLHFCQUFQO0FBQ0Q7Ozs7OztBQUdIdkIsc0JBQXNCaUIsSUFBdEIsR0FBNkIsUUFBN0IsQyxDQUF1Qzs7QUFFdkNZLE9BQU9DLE9BQVAsR0FBaUI5QixxQkFBakI7O0FBRUEsU0FBU2UsS0FBVCxDQUFlZ0IsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNMLE1BQVQsQ0FBZ0JLLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicmVndWxhckV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJlZ0V4cCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICB0b2tlbiA9IG5leHROb25XaGl0ZXNwYWNlVG9rZW47IC8vL1xuXG4gICAgaWYgKHRva2VuICE9PSBudWxsKSB7XG4gICAgICB2YXIgc3RyID0gdG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHN0ci5tYXRjaCh0aGlzLnJlZ0V4cCk7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICBwYXJzZWQgPSAoZmlyc3RNYXRjaCA9PT0gc3RyKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQudHlwZSxcbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlID0gbmV3IFRlcm1pbmFsTm9kZShzdHIsIHR5cGUpO1xuXG4gICAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBudWxsLFxuICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHAgPSAvXFwvKFteL10rKVxcLy8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2gocmVndWxhckV4cHJlc3Npb25QYXJ0UmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgcmVnRXhwUGF0dGVybiA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7cmVnRXhwUGF0dGVybn0kYCk7IC8vL1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ0V4cCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG59XG5cblJlZ3VsYXJFeHByZXNzaW9uUGFydC50eXBlID0gJ3JlZ2V4cCc7IC8vL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uUGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=