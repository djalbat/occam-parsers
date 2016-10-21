'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('../occam-lexers'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiVGVybWluYWxOb2RlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwidHlwZSIsIm5vV2hpdGVzcGFjZSIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwic2F2ZWRJbmRleCIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0VHlwZSIsInBhcnNlZCIsInN0ciIsImdldFN0cmluZyIsInRlcm1pbmFsTm9kZSIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsImZvdW5kVHlwZSIsImZpbmQiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImZvdW5kIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsaUJBQVIsQ0FBYjtBQUFBLElBQ0lDLG1CQUFtQkYsT0FBT0UsZ0JBRDlCOztBQUdBLElBQUlDLGVBQWVGLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1HLHdCO0FBQ0osb0NBQVlDLElBQVosRUFBa0JDLFlBQWxCLEVBQWdDO0FBQUE7O0FBQzlCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYUgsUUFBUUcsVUFBUixFQURqQjtBQUFBLFVBRUlDLHlCQUF5QkosUUFBUUsseUJBQVIsQ0FBa0NOLFlBQWxDLENBRjdCO0FBQUEsVUFHSU8sUUFBUUYsc0JBSFosQ0FId0MsQ0FNSjs7QUFFcEMsVUFBSUUsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLFlBQUlBLGlCQUFpQlgsZ0JBQXJCLEVBQXVDO0FBQ3JDLGNBQUlZLG1CQUFtQkQsS0FBdkI7QUFBQSxjQUNJUixPQUFPUyxpQkFBaUJDLE9BQWpCLEVBRFg7QUFBQSxjQUVJQyxTQUFVWCxTQUFTLEtBQUtBLElBRjVCLENBRHFDLENBR0Q7O0FBRXBDLGNBQUlXLE1BQUosRUFBWTtBQUNWLGdCQUFJQyxNQUFNSCxpQkFBaUJJLFNBQWpCLEVBQVY7QUFBQSxnQkFDSUMsZUFBZSxJQUFJaEIsWUFBSixDQUFpQmMsR0FBakIsRUFBc0JaLElBQXRCLENBRG5COztBQUdBSSxvQkFBUSxDQUFDVSxZQUFELENBQVI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBSVYsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCRixnQkFBUWEsU0FBUixDQUFrQlYsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OzsrQkFFaUJZLE0sRUFBUUMscUIsRUFBdUJDLHFCLEVBQXVCakIsWSxFQUFjO0FBQ3BGLFVBQUlrQiwyQkFBMkIsSUFBL0I7QUFBQSxVQUNJbkIsT0FBT2dCLE1BRFg7QUFBQSxVQUNvQjtBQUNoQkksa0JBQVlGLHNCQUFzQkcsSUFBdEIsQ0FBMkIsVUFBU0Msb0JBQVQsRUFBK0I7QUFDcEUsWUFBSUMsUUFBU3ZCLFNBQVNzQixvQkFBdEI7O0FBRUEsZUFBT0MsS0FBUDtBQUNELE9BSlcsQ0FGaEI7QUFBQSxVQU9JQSxRQUFTSCxjQUFjSSxTQVAzQjs7QUFTQSxVQUFJRCxLQUFKLEVBQVc7QUFDVEosbUNBQTJCLElBQUlwQix3QkFBSixDQUE2QkMsSUFBN0IsRUFBbUNDLFlBQW5DLENBQTNCO0FBQ0Q7O0FBRUQsYUFBT2tCLHdCQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCM0Isd0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50VG9rZW5UeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnLi4vb2NjYW0tbGV4ZXJzJyksXG4gICAgU2lnbmlmaWNhbnRUb2tlbiA9IGxleGVycy5TaWduaWZpY2FudFRva2VuO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG4gICAgXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VUb2tlbjsgLy8vXG5cbiAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICAgICAgdmFyIHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbixcbiAgICAgICAgICAgIHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHBhcnNlZCA9ICh0eXBlID09PSB0aGlzLnR5cGUpOyAgLy8vXG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHZhciBzdHIgPSBzaWduaWZpY2FudFRva2VuLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0ciwgdHlwZSk7XG5cbiAgICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHN5bWJvbCwgIC8vL1xuICAgICAgICBmb3VuZFR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZXMuZmluZChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgIHZhciBmb3VuZCA9ICh0eXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgIH0pLFxuICAgICAgICBmb3VuZCA9IChmb3VuZFR5cGUgIT09IHVuZGVmaW5lZCk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQodHlwZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuIl19