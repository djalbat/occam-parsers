'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var EpsilonPart = function () {
  function EpsilonPart() {
    _classCallCheck(this, EpsilonPart);
  }

  _createClass(EpsilonPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      var str = 'ε',
          type = null,
          terminalNode = new TerminalNode(str, type),
          nodes = [terminalNode];

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
      var epsilonPart = null,
          found = symbol === 'ε';

      if (found) {
        epsilonPart = new EpsilonPart();
      }

      return epsilonPart;
    }
  }]);

  return EpsilonPart;
}();

module.exports = EpsilonPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L2Vwc2lsb24uanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkVwc2lsb25QYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwic3RyIiwidHlwZSIsInRlcm1pbmFsTm9kZSIsIm5vZGVzIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwidGVybWluYWxUeXBlcyIsImVwc2lsb25QYXJ0IiwiZm91bmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUMsVzs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxNQUFNLEdBQVY7QUFBQSxVQUNJQyxPQUFPLElBRFg7QUFBQSxVQUVJQyxlQUFlLElBQUlSLFlBQUosQ0FBaUJNLEdBQWpCLEVBQXNCQyxJQUF0QixDQUZuQjtBQUFBLFVBR0lFLFFBQVEsQ0FBQ0QsWUFBRCxDQUhaOztBQUtBLGFBQU9DLEtBQVA7QUFDRDs7OytCQUVpQkMsTSxFQUFRQyxxQixFQUF1QkMsYSxFQUFlUCxZLEVBQWM7QUFDNUUsVUFBSVEsY0FBYyxJQUFsQjtBQUFBLFVBQ0lDLFFBQVNKLFdBQVcsR0FEeEI7O0FBR0EsVUFBSUksS0FBSixFQUFXO0FBQ1RELHNCQUFjLElBQUlYLFdBQUosRUFBZDtBQUNEOztBQUVELGFBQU9XLFdBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJkLFdBQWpCIiwiZmlsZSI6ImVwc2lsb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIEVwc2lsb25QYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBzdHIgPSAnzrUnLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgdGVybWluYWxOb2RlID0gbmV3IFRlcm1pbmFsTm9kZShzdHIsIHR5cGUpLFxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBlcHNpbG9uUGFydCA9IG51bGwsXG4gICAgICAgIGZvdW5kID0gKHN5bWJvbCA9PT0gJ861Jyk7XG4gICAgXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpO1xuICAgIH1cblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25QYXJ0OyJdfQ==