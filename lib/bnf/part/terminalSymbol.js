'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../../common/node/terminal');

var TerminalSymbolPart = function () {
  function TerminalSymbolPart(symbol, noWhitespace) {
    _classCallCheck(this, TerminalSymbolPart);

    this.symbol = symbol;
    this.noWhitespace = noWhitespace;
  }

  _createClass(TerminalSymbolPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodes = null,
          savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            parsed = content === this.symbol; ///

        if (parsed) {
          var terminalNode = TerminalNode.fromSignificantToken(significantToken);

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
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var terminalSymbolPart = null,
          terminalSymbolPartRegExp = /^'([^']+)'$/,
          matches = symbol.match(terminalSymbolPartRegExp);

      if (matches !== null) {
        var secondMatch = second(matches);

        symbol = secondMatch; ///

        terminalSymbolPart = new TerminalSymbolPart(symbol, noWhitespace);
      }

      return terminalSymbolPart;
    }
  }]);

  return TerminalSymbolPart;
}();

module.exports = TerminalSymbolPart;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0Iiwic3ltYm9sIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwicGFyc2VkIiwidGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJiYWNrdHJhY2siLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnRSZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsNEJBQVIsQ0FBbkI7O0lBRU1DLGtCO0FBQ0osOEJBQVlDLE1BQVosRUFBb0JDLFlBQXBCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYUgsUUFBUUcsVUFBUixFQURqQjtBQUFBLFVBRUlDLG9DQUFvQ0osUUFBUUssb0NBQVIsQ0FBNkNOLFlBQTdDLENBRnhDO0FBQUEsVUFHSU8sbUJBQW1CRixpQ0FIdkIsQ0FId0MsQ0FNa0I7O0FBRTFELFVBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFJQyxVQUFVRCxpQkFBaUJFLFVBQWpCLEVBQWQ7QUFBQSxZQUNJQyxTQUFVRixZQUFZLEtBQUtULE1BRC9CLENBRDZCLENBRVk7O0FBRXpDLFlBQUlXLE1BQUosRUFBWTtBQUNWLGNBQUlDLGVBQWVmLGFBQWFnQixvQkFBYixDQUFrQ0wsZ0JBQWxDLENBQW5COztBQUVBSixrQkFBUSxDQUFDUSxZQUFELENBQVI7QUFDRDtBQUNGOztBQUVELFVBQUlSLFVBQVUsSUFBZCxFQUFvQjtBQUNsQkYsZ0JBQVFZLFNBQVIsQ0FBa0JULFVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7K0JBRWlCSixNLEVBQVFlLHFCLEVBQXVCZCxZLEVBQWM7QUFDN0QsVUFBSWUscUJBQXFCLElBQXpCO0FBQUEsVUFDSUMsMkJBQTJCLGFBRC9CO0FBQUEsVUFFSUMsVUFBVWxCLE9BQU9tQixLQUFQLENBQWFGLHdCQUFiLENBRmQ7O0FBSUEsVUFBSUMsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJRSxjQUFjQyxPQUFPSCxPQUFQLENBQWxCOztBQUVBbEIsaUJBQVNvQixXQUFULENBSG9CLENBR0U7O0FBRXRCSiw2QkFBcUIsSUFBSWpCLGtCQUFKLENBQXVCQyxNQUF2QixFQUErQkMsWUFBL0IsQ0FBckI7QUFDRDs7QUFFRCxhQUFPZSxrQkFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQnhCLGtCQUFqQjs7QUFFQSxTQUFTc0IsTUFBVCxDQUFnQkcsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sUGFydCB7XG4gIGNvbnN0cnVjdG9yKHN5bWJvbCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBwYXJzZWQgPSAoY29udGVudCA9PT0gdGhpcy5zeW1ib2wpOyAgLy8vXG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdmFyIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBudWxsLFxuICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRSZWdFeHAgPSAvXicoW14nXSspJyQvLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHRlcm1pbmFsU3ltYm9sUGFydFJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBzeW1ib2wgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc3ltYm9sLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbFBhcnQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==