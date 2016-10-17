'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var TerminalTypePart = function () {
  function TerminalTypePart(type) {
    _classCallCheck(this, TerminalTypePart);

    this.type = type;
  }

  _createClass(TerminalTypePart, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = null,
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
          token = nextNonWhitespaceToken; ///

      if (token !== undefined) {
        var str = token.getString(),
            type = token.getType(),
            parsed = type === this.type; ///

        if (parsed) {
          var terminalNode = new TerminalNode(str, type);

          nodes = [terminalNode];

          context.advanceJustPastToken(token);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalTypesRegExp, terminalTypes) {
      var terminalTypePart = null,
          type = symbol,
          ///
      found = terminalTypes.find(function (terminalType) {
        var found = type === terminalType;

        return found;
      });

      if (found) {
        terminalTypePart = new TerminalTypePart(type);
      }

      return terminalTypePart;
    }
  }]);

  return TerminalTypePart;
}();

module.exports = TerminalTypePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Rlcm1pbmFsVHlwZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiVGVybWluYWxUeXBlUGFydCIsInR5cGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJzdHIiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwicGFyc2VkIiwidGVybWluYWxOb2RlIiwiYWR2YW5jZUp1c3RQYXN0VG9rZW4iLCJzeW1ib2wiLCJ0ZXJtaW5hbFR5cGVzUmVnRXhwIiwidGVybWluYWxUeXBlcyIsInRlcm1pbmFsVHlwZVBhcnQiLCJmb3VuZCIsImZpbmQiLCJ0ZXJtaW5hbFR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUMsZ0I7QUFDSiw0QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWE7QUFDMUIsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMseUJBQXlCSCxRQUFRSSx5QkFBUixFQUQ3QjtBQUFBLFVBRUlDLFFBQVFGLHNCQUZaLENBRDBCLENBR1U7O0FBRXBDLFVBQUlFLFVBQVVDLFNBQWQsRUFBeUI7QUFDdkIsWUFBSUMsTUFBTUYsTUFBTUcsU0FBTixFQUFWO0FBQUEsWUFDSVQsT0FBT00sTUFBTUksT0FBTixFQURYO0FBQUEsWUFFSUMsU0FBVVgsU0FBUyxLQUFLQSxJQUY1QixDQUR1QixDQUdhOztBQUVwQyxZQUFJVyxNQUFKLEVBQVk7QUFDVixjQUFJQyxlQUFlLElBQUlmLFlBQUosQ0FBaUJXLEdBQWpCLEVBQXNCUixJQUF0QixDQUFuQjs7QUFFQUcsa0JBQVEsQ0FBQ1MsWUFBRCxDQUFSOztBQUVBWCxrQkFBUVksb0JBQVIsQ0FBNkJQLEtBQTdCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSCxLQUFQO0FBQ0Q7OzsrQkFFaUJXLE0sRUFBUUMsbUIsRUFBcUJDLGEsRUFBZTtBQUM1RCxVQUFJQyxtQkFBbUIsSUFBdkI7QUFBQSxVQUNJakIsT0FBT2MsTUFEWDtBQUFBLFVBQ29CO0FBQ2hCSSxjQUFRRixjQUFjRyxJQUFkLENBQW1CLFVBQVNDLFlBQVQsRUFBdUI7QUFDaEQsWUFBSUYsUUFBU2xCLFNBQVNvQixZQUF0Qjs7QUFFQSxlQUFPRixLQUFQO0FBQ0QsT0FKTyxDQUZaOztBQVFBLFVBQUlBLEtBQUosRUFBVztBQUNURCwyQkFBbUIsSUFBSWxCLGdCQUFKLENBQXFCQyxJQUFyQixDQUFuQjtBQUNEOztBQUVELGFBQU9pQixnQkFBUDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQnZCLGdCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFRlcm1pbmFsVHlwZVBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VUb2tlbigpLFxuICAgICAgICB0b2tlbiA9IG5leHROb25XaGl0ZXNwYWNlVG9rZW47IC8vL1xuXG4gICAgaWYgKHRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBzdHIgPSB0b2tlbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIHBhcnNlZCA9ICh0eXBlID09PSB0aGlzLnR5cGUpOyAgLy8vXG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdmFyIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyLCB0eXBlKTtcblxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuXG4gICAgICAgIGNvbnRleHQuYWR2YW5jZUp1c3RQYXN0VG9rZW4odG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxUeXBlc1JlZ0V4cCwgdGVybWluYWxUeXBlcykge1xuICAgIHZhciB0ZXJtaW5hbFR5cGVQYXJ0ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHN5bWJvbCwgIC8vL1xuICAgICAgICBmb3VuZCA9IHRlcm1pbmFsVHlwZXMuZmluZChmdW5jdGlvbih0ZXJtaW5hbFR5cGUpIHtcbiAgICAgICAgICB2YXIgZm91bmQgPSAodHlwZSA9PT0gdGVybWluYWxUeXBlKTtcblxuICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgfSk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHRlcm1pbmFsVHlwZVBhcnQgPSBuZXcgVGVybWluYWxUeXBlUGFydCh0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxUeXBlUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsVHlwZVBhcnQ7XG4iXX0=