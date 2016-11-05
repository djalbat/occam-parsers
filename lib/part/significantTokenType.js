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
          var content = significantToken.getContent(),
              terminalNode = new TerminalNode(content, type);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJ0eXBlIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFR5cGUiLCJwYXJzZWQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRlcm1pbmFsTm9kZSIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsImZvdW5kVHlwZSIsImZpbmQiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImZvdW5kIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1DLHdCO0FBQ0osb0NBQVlDLElBQVosRUFBa0JDLFlBQWxCLEVBQWdDO0FBQUE7O0FBQzlCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYUgsUUFBUUcsVUFBUixFQURqQjtBQUFBLFVBRUlDLG9DQUFvQ0osUUFBUUssb0NBQVIsQ0FBNkNOLFlBQTdDLENBRnhDO0FBQUEsVUFHSU8sbUJBQW1CRixpQ0FIdkIsQ0FId0MsQ0FNa0I7O0FBRTFELFVBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFJUixPQUFPUSxpQkFBaUJDLE9BQWpCLEVBQVg7QUFBQSxZQUNJQyxTQUFVVixTQUFTLEtBQUtBLElBRDVCLENBRDZCLENBRU87O0FBRXBDLFlBQUlVLE1BQUosRUFBWTtBQUNWLGNBQUlDLFVBQVVILGlCQUFpQkksVUFBakIsRUFBZDtBQUFBLGNBQ0lDLGVBQWUsSUFBSWhCLFlBQUosQ0FBaUJjLE9BQWpCLEVBQTBCWCxJQUExQixDQURuQjs7QUFHQUksa0JBQVEsQ0FBQ1MsWUFBRCxDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJVCxVQUFVLElBQWQsRUFBb0I7QUFDbEJGLGdCQUFRWSxTQUFSLENBQWtCVCxVQUFsQjtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7OytCQUVpQlcsTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJoQixZLEVBQWM7QUFDcEYsVUFBSWlCLDJCQUEyQixJQUEvQjtBQUFBLFVBQ0lsQixPQUFPZSxNQURYO0FBQUEsVUFDb0I7QUFDaEJJLGtCQUFZRixzQkFBc0JHLElBQXRCLENBQTJCLFVBQVNDLG9CQUFULEVBQStCO0FBQ3BFLFlBQUlDLFFBQVN0QixTQUFTcUIsb0JBQXRCOztBQUVBLGVBQU9DLEtBQVA7QUFDRCxPQUpXLENBRmhCO0FBQUEsVUFPSUEsUUFBU0gsY0FBY0ksU0FQM0I7O0FBU0EsVUFBSUQsS0FBSixFQUFXO0FBQ1RKLG1DQUEyQixJQUFJbkIsd0JBQUosQ0FBNkJDLElBQTdCLEVBQW1DQyxZQUFuQyxDQUEzQjtBQUNEOztBQUVELGFBQU9pQix3QkFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQjFCLHdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudFRva2VuVHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuICAgIFxuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICBwYXJzZWQgPSAodHlwZSA9PT0gdGhpcy50eXBlKTsgIC8vL1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKGNvbnRlbnQsIHR5cGUpO1xuXG4gICAgICAgIG5vZGVzID0gW3Rlcm1pbmFsTm9kZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHN5bWJvbCwgIC8vL1xuICAgICAgICBmb3VuZFR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZXMuZmluZChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgIHZhciBmb3VuZCA9ICh0eXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgIH0pLFxuICAgICAgICBmb3VuZCA9IChmb3VuZFR5cGUgIT09IHVuZGVmaW5lZCk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQodHlwZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuIl19