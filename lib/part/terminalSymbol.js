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
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
          token = nextNonWhitespaceToken; ///

      if (token !== null) {
        var str = token.getString(),
            parsed = str === this.symbol; ///

        if (parsed) {
          var type = token.getType(),
              terminalNode = new TerminalNode(str, type);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Rlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzeW1ib2wiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJzdHIiLCJnZXRTdHJpbmciLCJwYXJzZWQiLCJ0eXBlIiwiZ2V0VHlwZSIsInRlcm1pbmFsTm9kZSIsImFkdmFuY2VKdXN0UGFzdFRva2VuIiwidGVybWluYWxTeW1ib2xQYXJ0c1JlZ0V4cCIsInRlcm1pbmFsVHlwZXMiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJtYXRjaGVzIiwibWF0Y2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUMsa0I7QUFDSiw4QkFBWUMsTUFBWixFQUFvQkMsWUFBcEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFGLFksRUFBYztBQUN4Q0EscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUR3QyxDQUNVOztBQUVsRCxVQUFJRyxRQUFRLElBQVo7QUFBQSxVQUNJQyx5QkFBeUJILFFBQVFJLHlCQUFSLENBQWtDTCxZQUFsQyxDQUQ3QjtBQUFBLFVBRUlNLFFBQVFGLHNCQUZaLENBSHdDLENBS0o7O0FBRXBDLFVBQUlFLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixZQUFJQyxNQUFNRCxNQUFNRSxTQUFOLEVBQVY7QUFBQSxZQUNJQyxTQUFVRixRQUFRLEtBQUtSLE1BRDNCLENBRGtCLENBRW1COztBQUVyQyxZQUFJVSxNQUFKLEVBQVk7QUFDVixjQUFJQyxPQUFPSixNQUFNSyxPQUFOLEVBQVg7QUFBQSxjQUNJQyxlQUFlLElBQUloQixZQUFKLENBQWlCVyxHQUFqQixFQUFzQkcsSUFBdEIsQ0FEbkI7O0FBR0FQLGtCQUFRLENBQUNTLFlBQUQsQ0FBUjs7QUFFQVgsa0JBQVFZLG9CQUFSLENBQTZCUCxLQUE3QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRWlCSixNLEVBQVFlLHlCLEVBQTJCQyxhLEVBQWVmLFksRUFBYztBQUNoRixVQUFJZ0IscUJBQXFCLElBQXpCO0FBQUEsVUFDSUMsVUFBVWxCLE9BQU9tQixLQUFQLENBQWFKLHlCQUFiLENBRGQ7O0FBR0EsVUFBSUcsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkQsNkJBQXFCLElBQUlsQixrQkFBSixDQUF1QkMsTUFBdkIsRUFBK0JDLFlBQS9CLENBQXJCO0FBQ0Q7O0FBRUQsYUFBT2dCLGtCQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCdEIsa0JBQWpCIiwiZmlsZSI6InRlcm1pbmFsU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbFBhcnQge1xuICBjb25zdHJ1Y3RvcihzeW1ib2wsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VUb2tlbjsgLy8vXG5cbiAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciBzdHIgPSB0b2tlbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJzZWQgPSAoc3RyID09PSB0aGlzLnN5bWJvbCk7ICAvLy9cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICB2YXIgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyLCB0eXBlKTtcblxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuXG4gICAgICAgIGNvbnRleHQuYWR2YW5jZUp1c3RQYXN0VG9rZW4odG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xQYXJ0c1JlZ0V4cCwgdGVybWluYWxUeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sUGFydCA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2godGVybWluYWxTeW1ib2xQYXJ0c1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChzeW1ib2wsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sUGFydDtcbiJdfQ==