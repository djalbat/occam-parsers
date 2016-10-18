'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

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
          token = context.getNextToken(noWhitespace);

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
    value: function fromSymbol(symbol, terminalSymbolPartsRegExp, terminalTypes, noWhitespace) {
      var terminalSymbolPart = null,
          matches = symbol.match(terminalSymbolPartsRegExp);

      if (matches !== null) {
        terminalSymbolPart = new TerminalSymbolPart(symbol, noWhitespace);
      }

      return terminalSymbolPart;
    }
  }]);

  return TerminalSymbolPart;
}();

module.exports = TerminalSymbolPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Rlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzeW1ib2wiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInRva2VuIiwiZ2V0TmV4dFRva2VuIiwidW5kZWZpbmVkIiwic3RyIiwiZ2V0U3RyaW5nIiwicGFyc2VkIiwidGVybWluYWxOb2RlIiwiYWR2YW5jZUp1c3RQYXN0VG9rZW4iLCJ0ZXJtaW5hbFN5bWJvbFBhcnRzUmVnRXhwIiwidGVybWluYWxUeXBlcyIsInRlcm1pbmFsU3ltYm9sUGFydCIsIm1hdGNoZXMiLCJtYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGtCQUFSLENBQW5COztJQUVNQyxrQjtBQUNKLDhCQUFZQyxNQUFaLEVBQW9CQyxZQUFwQixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUYsWSxFQUFjO0FBQ3hDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRHdDLENBQ1U7O0FBRWxELFVBQUlHLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLFFBQVFILFFBQVFJLFlBQVIsQ0FBcUJMLFlBQXJCLENBRFo7O0FBR0EsVUFBSUksVUFBVUUsU0FBZCxFQUF5QjtBQUN2QixZQUFJQyxNQUFNSCxNQUFNSSxTQUFOLEVBQVY7QUFBQSxZQUNJQyxTQUFVRixRQUFRLEtBQUtSLE1BRDNCLENBRHVCLENBRWM7O0FBRXJDLFlBQUlVLE1BQUosRUFBWTtBQUNWLGNBQUlDLGVBQWUsSUFBSWQsWUFBSixDQUFpQlcsR0FBakIsQ0FBbkI7O0FBRUFKLGtCQUFRLENBQUNPLFlBQUQsQ0FBUjs7QUFFQVQsa0JBQVFVLG9CQUFSLENBQTZCUCxLQUE3QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7K0JBRWlCSixNLEVBQVFhLHlCLEVBQTJCQyxhLEVBQWViLFksRUFBYztBQUNoRixVQUFJYyxxQkFBcUIsSUFBekI7QUFBQSxVQUNJQyxVQUFVaEIsT0FBT2lCLEtBQVAsQ0FBYUoseUJBQWIsQ0FEZDs7QUFHQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCRCw2QkFBcUIsSUFBSWhCLGtCQUFKLENBQXVCQyxNQUF2QixFQUErQkMsWUFBL0IsQ0FBckI7QUFDRDs7QUFFRCxhQUFPYyxrQkFBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQnBCLGtCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3ltYm9sLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgdG9rZW4gPSBjb250ZXh0LmdldE5leHRUb2tlbihub1doaXRlc3BhY2UpO1xuXG4gICAgaWYgKHRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBzdHIgPSB0b2tlbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJzZWQgPSAoc3RyID09PSB0aGlzLnN5bWJvbCk7ICAvLy9cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICB2YXIgdGVybWluYWxOb2RlID0gbmV3IFRlcm1pbmFsTm9kZShzdHIpO1xuXG4gICAgICAgIG5vZGVzID0gW3Rlcm1pbmFsTm9kZV07XG5cbiAgICAgICAgY29udGV4dC5hZHZhbmNlSnVzdFBhc3RUb2tlbih0b2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbFBhcnRzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgdGVybWluYWxTeW1ib2xQYXJ0ID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh0ZXJtaW5hbFN5bWJvbFBhcnRzUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHN5bWJvbCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xQYXJ0O1xuIl19