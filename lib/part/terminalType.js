'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var TerminalTypePart = function () {
  function TerminalTypePart(type, noWhitespace) {
    _classCallCheck(this, TerminalTypePart);

    this.type = type;
    this.noWhitespace = noWhitespace;
  }

  _createClass(TerminalTypePart, [{
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
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypeParts, noWhitespace) {
      var terminalTypePart = null,
          type = symbol,
          ///
      foundType = terminalTypeParts.find(function (terminalTypePart) {
        var found = type === terminalTypePart;

        return found;
      }),
          found = foundType !== undefined;

      if (found) {
        terminalTypePart = new TerminalTypePart(type, noWhitespace);
      }

      return terminalTypePart;
    }
  }]);

  return TerminalTypePart;
}();

module.exports = TerminalTypePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Rlcm1pbmFsVHlwZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiVGVybWluYWxUeXBlUGFydCIsInR5cGUiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInRva2VuIiwiZ2V0TmV4dFRva2VuIiwidW5kZWZpbmVkIiwic3RyIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsInBhcnNlZCIsInRlcm1pbmFsTm9kZSIsImFkdmFuY2VKdXN0UGFzdFRva2VuIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwidGVybWluYWxUeXBlUGFydHMiLCJ0ZXJtaW5hbFR5cGVQYXJ0IiwiZm91bmRUeXBlIiwiZmluZCIsImZvdW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1DLGdCO0FBQ0osNEJBQVlDLElBQVosRUFBa0JDLFlBQWxCLEVBQWdDO0FBQUE7O0FBQzlCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsUUFBUUgsUUFBUUksWUFBUixDQUFxQkwsWUFBckIsQ0FEWjs7QUFHQSxVQUFJSSxVQUFVRSxTQUFkLEVBQXlCO0FBQ3ZCLFlBQUlDLE1BQU1ILE1BQU1JLFNBQU4sRUFBVjtBQUFBLFlBQ0lULE9BQU9LLE1BQU1LLE9BQU4sRUFEWDtBQUFBLFlBRUlDLFNBQVVYLFNBQVMsS0FBS0EsSUFGNUIsQ0FEdUIsQ0FHYTs7QUFFcEMsWUFBSVcsTUFBSixFQUFZO0FBQ1YsY0FBSUMsZUFBZSxJQUFJZixZQUFKLENBQWlCVyxHQUFqQixDQUFuQjs7QUFFQUosa0JBQVEsQ0FBQ1EsWUFBRCxDQUFSOztBQUVBVixrQkFBUVcsb0JBQVIsQ0FBNkJSLEtBQTdCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OzsrQkFFaUJVLE0sRUFBUUMscUIsRUFBdUJDLGlCLEVBQW1CZixZLEVBQWM7QUFDaEYsVUFBSWdCLG1CQUFtQixJQUF2QjtBQUFBLFVBQ0lqQixPQUFPYyxNQURYO0FBQUEsVUFDb0I7QUFDaEJJLGtCQUFZRixrQkFBa0JHLElBQWxCLENBQXVCLFVBQVNGLGdCQUFULEVBQTJCO0FBQzVELFlBQUlHLFFBQVNwQixTQUFTaUIsZ0JBQXRCOztBQUVBLGVBQU9HLEtBQVA7QUFDRCxPQUpXLENBRmhCO0FBQUEsVUFPSUEsUUFBU0YsY0FBY1gsU0FQM0I7O0FBU0EsVUFBSWEsS0FBSixFQUFXO0FBQ1RILDJCQUFtQixJQUFJbEIsZ0JBQUosQ0FBcUJDLElBQXJCLEVBQTJCQyxZQUEzQixDQUFuQjtBQUNEOztBQUVELGFBQU9nQixnQkFBUDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQnZCLGdCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFRlcm1pbmFsVHlwZVBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG4gICAgXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgdG9rZW4gPSBjb250ZXh0LmdldE5leHRUb2tlbihub1doaXRlc3BhY2UpO1xuXG4gICAgaWYgKHRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBzdHIgPSB0b2tlbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIHBhcnNlZCA9ICh0eXBlID09PSB0aGlzLnR5cGUpOyAgLy8vXG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdmFyIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyKTtcblxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuXG4gICAgICAgIGNvbnRleHQuYWR2YW5jZUp1c3RQYXN0VG9rZW4odG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHRlcm1pbmFsVHlwZVBhcnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gc3ltYm9sLCAgLy8vXG4gICAgICAgIGZvdW5kVHlwZSA9IHRlcm1pbmFsVHlwZVBhcnRzLmZpbmQoZnVuY3Rpb24odGVybWluYWxUeXBlUGFydCkge1xuICAgICAgICAgIHZhciBmb3VuZCA9ICh0eXBlID09PSB0ZXJtaW5hbFR5cGVQYXJ0KTtcblxuICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgfSksXG4gICAgICAgIGZvdW5kID0gKGZvdW5kVHlwZSAhPT0gdW5kZWZpbmVkKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgdGVybWluYWxUeXBlUGFydCA9IG5ldyBUZXJtaW5hbFR5cGVQYXJ0KHR5cGUsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsVHlwZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFR5cGVQYXJ0O1xuIl19