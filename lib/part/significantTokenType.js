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
          token = context.getNextToken(noWhitespace);

      if (token !== undefined) {
        var str = token.getString(),
            type = token.getType(),
            parsed = type === this.type; ///

        if (parsed) {
          var terminalNode = new TerminalNode(str);

          nodes = [terminalNode];

          context.advanceJustPastToken(token);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJ0eXBlIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJ0b2tlbiIsImdldE5leHRUb2tlbiIsInVuZGVmaW5lZCIsInN0ciIsImdldFN0cmluZyIsImdldFR5cGUiLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJhZHZhbmNlSnVzdFBhc3RUb2tlbiIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsImZvdW5kVHlwZSIsImZpbmQiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImZvdW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1DLHdCO0FBQ0osb0NBQVlDLElBQVosRUFBa0JDLFlBQWxCLEVBQWdDO0FBQUE7O0FBQzlCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsUUFBUUgsUUFBUUksWUFBUixDQUFxQkwsWUFBckIsQ0FEWjs7QUFHQSxVQUFJSSxVQUFVRSxTQUFkLEVBQXlCO0FBQ3ZCLFlBQUlDLE1BQU1ILE1BQU1JLFNBQU4sRUFBVjtBQUFBLFlBQ0lULE9BQU9LLE1BQU1LLE9BQU4sRUFEWDtBQUFBLFlBRUlDLFNBQVVYLFNBQVMsS0FBS0EsSUFGNUIsQ0FEdUIsQ0FHYTs7QUFFcEMsWUFBSVcsTUFBSixFQUFZO0FBQ1YsY0FBSUMsZUFBZSxJQUFJZixZQUFKLENBQWlCVyxHQUFqQixDQUFuQjs7QUFFQUosa0JBQVEsQ0FBQ1EsWUFBRCxDQUFSOztBQUVBVixrQkFBUVcsb0JBQVIsQ0FBNkJSLEtBQTdCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OzsrQkFFaUJVLE0sRUFBUUMscUIsRUFBdUJDLHFCLEVBQXVCZixZLEVBQWM7QUFDcEYsVUFBSWdCLDJCQUEyQixJQUEvQjtBQUFBLFVBQ0lqQixPQUFPYyxNQURYO0FBQUEsVUFDb0I7QUFDaEJJLGtCQUFZRixzQkFBc0JHLElBQXRCLENBQTJCLFVBQVNDLG9CQUFULEVBQStCO0FBQ3BFLFlBQUlDLFFBQVNyQixTQUFTb0Isb0JBQXRCOztBQUVBLGVBQU9DLEtBQVA7QUFDRCxPQUpXLENBRmhCO0FBQUEsVUFPSUEsUUFBU0gsY0FBY1gsU0FQM0I7O0FBU0EsVUFBSWMsS0FBSixFQUFXO0FBQ1RKLG1DQUEyQixJQUFJbEIsd0JBQUosQ0FBNkJDLElBQTdCLEVBQW1DQyxZQUFuQyxDQUEzQjtBQUNEOztBQUVELGFBQU9nQix3QkFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnhCLHdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudFRva2VuVHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuICAgIFxuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHRva2VuID0gY29udGV4dC5nZXROZXh0VG9rZW4obm9XaGl0ZXNwYWNlKTtcblxuICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgc3RyID0gdG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICBwYXJzZWQgPSAodHlwZSA9PT0gdGhpcy50eXBlKTsgIC8vL1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHZhciB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0cik7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcblxuICAgICAgICBjb250ZXh0LmFkdmFuY2VKdXN0UGFzdFRva2VuKHRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHN5bWJvbCwgIC8vL1xuICAgICAgICBmb3VuZFR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZXMuZmluZChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgIHZhciBmb3VuZCA9ICh0eXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgIH0pLFxuICAgICAgICBmb3VuZCA9IChmb3VuZFR5cGUgIT09IHVuZGVmaW5lZCk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQodHlwZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuIl19