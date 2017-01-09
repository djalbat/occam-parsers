'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var type = significantToken.getType(),
            parsed = type === this.type; ///

        if (parsed) {
          var string = significantToken.getString(),
              terminalNode = new TerminalNode(string, type);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwidHlwZSIsIm5vV2hpdGVzcGFjZSIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwic2F2ZWRJbmRleCIsIm5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRUeXBlIiwicGFyc2VkIiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwidGVybWluYWxOb2RlIiwiYmFja3RyYWNrIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiZm91bmRUeXBlIiwiZmluZCIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZm91bmQiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUMsd0I7QUFDSixvQ0FBWUMsSUFBWixFQUFrQkMsWUFBbEIsRUFBZ0M7QUFBQTs7QUFDOUIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFGLFksRUFBYztBQUN4Q0EscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUR3QyxDQUNVOztBQUVsRCxVQUFJRyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhSCxRQUFRRyxVQUFSLEVBRGpCO0FBQUEsVUFFSUMsb0NBQW9DSixRQUFRSyxvQ0FBUixDQUE2Q04sWUFBN0MsQ0FGeEM7QUFBQSxVQUdJTyxtQkFBbUJGLGlDQUh2QixDQUh3QyxDQU1rQjs7QUFFMUQsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQUlSLE9BQU9RLGlCQUFpQkMsT0FBakIsRUFBWDtBQUFBLFlBQ0lDLFNBQVVWLFNBQVMsS0FBS0EsSUFENUIsQ0FENkIsQ0FFTzs7QUFFcEMsWUFBSVUsTUFBSixFQUFZO0FBQ1YsY0FBSUMsU0FBU0gsaUJBQWlCSSxTQUFqQixFQUFiO0FBQUEsY0FDSUMsZUFBZSxJQUFJaEIsWUFBSixDQUFpQmMsTUFBakIsRUFBeUJYLElBQXpCLENBRG5COztBQUdBSSxrQkFBUSxDQUFDUyxZQUFELENBQVI7QUFDRDtBQUNGOztBQUVELFVBQUlULFVBQVUsSUFBZCxFQUFvQjtBQUNsQkYsZ0JBQVFZLFNBQVIsQ0FBa0JULFVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7K0JBRWlCVyxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1QmhCLFksRUFBYztBQUNwRixVQUFJaUIsMkJBQTJCLElBQS9CO0FBQUEsVUFDSWxCLE9BQU9lLE1BRFg7QUFBQSxVQUNvQjtBQUNoQkksa0JBQVlGLHNCQUFzQkcsSUFBdEIsQ0FBMkIsVUFBU0Msb0JBQVQsRUFBK0I7QUFDcEUsWUFBSUMsUUFBU3RCLFNBQVNxQixvQkFBdEI7O0FBRUEsZUFBT0MsS0FBUDtBQUNELE9BSlcsQ0FGaEI7QUFBQSxVQU9JQSxRQUFTSCxjQUFjSSxTQVAzQjs7QUFTQSxVQUFJRCxLQUFKLEVBQVc7QUFDVEosbUNBQTJCLElBQUluQix3QkFBSixDQUE2QkMsSUFBN0IsRUFBbUNDLFlBQW5DLENBQTNCO0FBQ0Q7O0FBRUQsYUFBT2lCLHdCQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCMUIsd0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50VG9rZW5UeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG4gICAgXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICB2YXIgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIHBhcnNlZCA9ICh0eXBlID09PSB0aGlzLnR5cGUpOyAgLy8vXG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdmFyIHN0cmluZyA9IHNpZ25pZmljYW50VG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0cmluZywgdHlwZSk7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gc3ltYm9sLCAgLy8vXG4gICAgICAgIGZvdW5kVHlwZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5maW5kKGZ1bmN0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgICAgdmFyIGZvdW5kID0gKHR5cGUgPT09IHNpZ25pZmljYW50VG9rZW5UeXBlKTtcblxuICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgfSksXG4gICAgICAgIGZvdW5kID0gKGZvdW5kVHlwZSAhPT0gdW5kZWZpbmVkKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCh0eXBlLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4iXX0=