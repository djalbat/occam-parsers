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
          savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var string = significantToken.getString(),
            parsed = string === this.symbol; ///

        if (parsed) {
          var type = significantToken.getType(),
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
    value: function fromSymbol(symbol, terminalSymbolPartsRegExp, significantTokenTypes, noWhitespace) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0Iiwic3ltYm9sIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsInN0cmluZyIsImdldFN0cmluZyIsInBhcnNlZCIsInR5cGUiLCJnZXRUeXBlIiwidGVybWluYWxOb2RlIiwiYmFja3RyYWNrIiwidGVybWluYWxTeW1ib2xQYXJ0c1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInRlcm1pbmFsU3ltYm9sUGFydCIsIm1hdGNoZXMiLCJtYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGtCQUFSLENBQW5COztJQUVNQyxrQjtBQUNKLDhCQUFZQyxNQUFaLEVBQW9CQyxZQUFwQixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUYsWSxFQUFjO0FBQ3hDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRHdDLENBQ1U7O0FBRWxELFVBQUlHLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLGFBQWFILFFBQVFHLFVBQVIsRUFEakI7QUFBQSxVQUVJQyxvQ0FBb0NKLFFBQVFLLG9DQUFSLENBQTZDTixZQUE3QyxDQUZ4QztBQUFBLFVBR0lPLG1CQUFtQkYsaUNBSHZCLENBSHdDLENBTWtCOztBQUUxRCxVQUFJRSxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsWUFBSUMsU0FBU0QsaUJBQWlCRSxTQUFqQixFQUFiO0FBQUEsWUFDSUMsU0FBVUYsV0FBVyxLQUFLVCxNQUQ5QixDQUQ2QixDQUVXOztBQUV4QyxZQUFJVyxNQUFKLEVBQVk7QUFDVixjQUFJQyxPQUFPSixpQkFBaUJLLE9BQWpCLEVBQVg7QUFBQSxjQUNJQyxlQUFlLElBQUlqQixZQUFKLENBQWlCWSxNQUFqQixFQUF5QkcsSUFBekIsQ0FEbkI7O0FBR0FSLGtCQUFRLENBQUNVLFlBQUQsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSVYsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCRixnQkFBUWEsU0FBUixDQUFrQlYsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OzsrQkFFaUJKLE0sRUFBUWdCLHlCLEVBQTJCQyxxQixFQUF1QmhCLFksRUFBYztBQUN4RixVQUFJaUIscUJBQXFCLElBQXpCO0FBQUEsVUFDSUMsVUFBVW5CLE9BQU9vQixLQUFQLENBQWFKLHlCQUFiLENBRGQ7O0FBR0EsVUFBSUcsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkQsNkJBQXFCLElBQUluQixrQkFBSixDQUF1QkMsTUFBdkIsRUFBK0JDLFlBQS9CLENBQXJCO0FBQ0Q7O0FBRUQsYUFBT2lCLGtCQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCdkIsa0JBQWpCIiwiZmlsZSI6InRlcm1pbmFsU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbFBhcnQge1xuICBjb25zdHJ1Y3RvcihzeW1ib2wsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBzaWduaWZpY2FudFRva2VuLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcnNlZCA9IChzdHJpbmcgPT09IHRoaXMuc3ltYm9sKTsgIC8vL1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHZhciB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0cmluZywgdHlwZSk7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xQYXJ0c1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgdGVybWluYWxTeW1ib2xQYXJ0ID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh0ZXJtaW5hbFN5bWJvbFBhcnRzUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHN5bWJvbCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xQYXJ0O1xuIl19