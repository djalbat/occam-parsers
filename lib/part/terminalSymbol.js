'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var TerminalSymbolPart = function () {
  function TerminalSymbolPart(symbol) {
    _classCallCheck(this, TerminalSymbolPart);

    this.symbol = symbol;
  }

  _createClass(TerminalSymbolPart, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = null,
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
          token = nextNonWhitespaceToken; ///

      if (token !== undefined) {
        var str = token.getString(),
            parsed = str === this.symbol; ///

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
    value: function fromSymbol(symbol, terminalSymbolPartsRegExp, terminalTypes) {
      var terminalSymbolPart = null,
          matches = symbol.match(terminalSymbolPartsRegExp);

      if (matches !== null) {
        terminalSymbolPart = new TerminalSymbolPart(symbol);
      }

      return terminalSymbolPart;
    }
  }]);

  return TerminalSymbolPart;
}();

module.exports = TerminalSymbolPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Rlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzeW1ib2wiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJzdHIiLCJnZXRTdHJpbmciLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJhZHZhbmNlSnVzdFBhc3RUb2tlbiIsInRlcm1pbmFsU3ltYm9sUGFydHNSZWdFeHAiLCJ0ZXJtaW5hbFR5cGVzIiwidGVybWluYWxTeW1ib2xQYXJ0IiwibWF0Y2hlcyIsIm1hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1DLGtCO0FBQ0osOEJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhO0FBQzFCLFVBQUlDLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLHlCQUF5QkgsUUFBUUkseUJBQVIsRUFEN0I7QUFBQSxVQUVJQyxRQUFRRixzQkFGWixDQUQwQixDQUdVOztBQUVwQyxVQUFJRSxVQUFVQyxTQUFkLEVBQXlCO0FBQ3ZCLFlBQUlDLE1BQU1GLE1BQU1HLFNBQU4sRUFBVjtBQUFBLFlBQ0lDLFNBQVVGLFFBQVEsS0FBS1IsTUFEM0IsQ0FEdUIsQ0FFYzs7QUFFckMsWUFBSVUsTUFBSixFQUFZO0FBQ1YsY0FBSUMsZUFBZSxJQUFJZCxZQUFKLENBQWlCVyxHQUFqQixDQUFuQjs7QUFFQUwsa0JBQVEsQ0FBQ1EsWUFBRCxDQUFSOztBQUVBVixrQkFBUVcsb0JBQVIsQ0FBNkJOLEtBQTdCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSCxLQUFQO0FBQ0Q7OzsrQkFFaUJILE0sRUFBUWEseUIsRUFBMkJDLGEsRUFBZTtBQUNsRSxVQUFJQyxxQkFBcUIsSUFBekI7QUFBQSxVQUNJQyxVQUFVaEIsT0FBT2lCLEtBQVAsQ0FBYUoseUJBQWIsQ0FEZDs7QUFHQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCRCw2QkFBcUIsSUFBSWhCLGtCQUFKLENBQXVCQyxNQUF2QixDQUFyQjtBQUNEOztBQUVELGFBQU9lLGtCQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCcEIsa0JBQWpCIiwiZmlsZSI6InRlcm1pbmFsU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbFBhcnQge1xuICBjb25zdHJ1Y3RvcihzeW1ib2wpIHtcbiAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VUb2tlbigpLFxuICAgICAgICB0b2tlbiA9IG5leHROb25XaGl0ZXNwYWNlVG9rZW47IC8vL1xuXG4gICAgaWYgKHRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBzdHIgPSB0b2tlbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJzZWQgPSAoc3RyID09PSB0aGlzLnN5bWJvbCk7ICAvLy9cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICB2YXIgdGVybWluYWxOb2RlID0gbmV3IFRlcm1pbmFsTm9kZShzdHIpO1xuXG4gICAgICAgIG5vZGVzID0gW3Rlcm1pbmFsTm9kZV07XG5cbiAgICAgICAgY29udGV4dC5hZHZhbmNlSnVzdFBhc3RUb2tlbih0b2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbFBhcnRzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzKSB7XG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sUGFydCA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2godGVybWluYWxTeW1ib2xQYXJ0c1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChzeW1ib2wpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbFBhcnQ7XG4iXX0=