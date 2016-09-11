'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Part = require('./part');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, null, [{
    key: 'fromExpression',
    value: function fromExpression(expression, specialSymbols, Parts) {
      var symbols = symbolsFromExpression(expression, specialSymbols),
          parts = [],
          symbolsLength = symbols.length,
          symbolRemaining = symbolsLength > 0;

      while (symbolRemaining) {
        var part = Part.fromSymbols(symbols, Parts);

        parts.push(part);

        symbolsLength = symbols.length;
        symbolRemaining = symbolsLength > 0;
      }

      var rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function symbolsFromExpression(expression, specialSymbols) {
  var symbolsRegExp = new RegExp('(\\s+|\\[|\\]|\\.\\.\\.|' + specialSymbols + ')', 'u'),
      ///
  symbols = expression.split(symbolsRegExp);

  symbols = symbols.reduce(function (symbols, symbol) {
    if (symbol !== '' && symbol !== ' ') {
      symbols.push(symbol);
    }

    return symbols;
  }, []);

  return symbols;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcnVsZS5qcyJdLCJuYW1lcyI6WyJQYXJ0IiwicmVxdWlyZSIsIlJ1bGUiLCJwYXJ0cyIsImV4cHJlc3Npb24iLCJzcGVjaWFsU3ltYm9scyIsIlBhcnRzIiwic3ltYm9scyIsInN5bWJvbHNGcm9tRXhwcmVzc2lvbiIsInN5bWJvbHNMZW5ndGgiLCJsZW5ndGgiLCJzeW1ib2xSZW1haW5pbmciLCJwYXJ0IiwiZnJvbVN5bWJvbHMiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwic3BsaXQiLCJyZWR1Y2UiLCJzeW1ib2wiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDs7SUFFTUMsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O21DQUVxQkMsVSxFQUFZQyxjLEVBQWdCQyxLLEVBQU87QUFDdkQsVUFBSUMsVUFBVUMsc0JBQXNCSixVQUF0QixFQUFrQ0MsY0FBbEMsQ0FBZDtBQUFBLFVBQ0lGLFFBQVEsRUFEWjtBQUFBLFVBRUlNLGdCQUFnQkYsUUFBUUcsTUFGNUI7QUFBQSxVQUdJQyxrQkFBbUJGLGdCQUFnQixDQUh2Qzs7QUFLQSxhQUFPRSxlQUFQLEVBQXdCO0FBQ3RCLFlBQUlDLE9BQU9aLEtBQUthLFdBQUwsQ0FBaUJOLE9BQWpCLEVBQTBCRCxLQUExQixDQUFYOztBQUVBSCxjQUFNVyxJQUFOLENBQVdGLElBQVg7O0FBRUFILHdCQUFnQkYsUUFBUUcsTUFBeEI7QUFDQUMsMEJBQW1CRixnQkFBZ0IsQ0FBbkM7QUFDRDs7QUFFRCxVQUFJTSxPQUFPLElBQUliLElBQUosQ0FBU0MsS0FBVCxDQUFYOztBQUVBLGFBQU9ZLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJmLElBQWpCOztBQUVBLFNBQVNNLHFCQUFULENBQStCSixVQUEvQixFQUEyQ0MsY0FBM0MsRUFBMkQ7QUFDekQsTUFBSWEsZ0JBQWdCLElBQUlDLE1BQUosOEJBQXNDZCxjQUF0QyxRQUF5RCxHQUF6RCxDQUFwQjtBQUFBLE1BQW9GO0FBQ2hGRSxZQUFVSCxXQUFXZ0IsS0FBWCxDQUFpQkYsYUFBakIsQ0FEZDs7QUFHQVgsWUFBVUEsUUFBUWMsTUFBUixDQUFlLFVBQVNkLE9BQVQsRUFBa0JlLE1BQWxCLEVBQTBCO0FBQ2pELFFBQUtBLFdBQVcsRUFBWixJQUFvQkEsV0FBVyxHQUFuQyxFQUF3QztBQUN0Q2YsY0FBUU8sSUFBUixDQUFhUSxNQUFiO0FBQ0Q7O0FBRUQsV0FBT2YsT0FBUDtBQUNELEdBTlMsRUFNUCxFQU5PLENBQVY7O0FBUUEsU0FBT0EsT0FBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0Jyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBzcGVjaWFsU3ltYm9scywgUGFydHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IHN5bWJvbHNGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBzcGVjaWFsU3ltYm9scyksXG4gICAgICAgIHBhcnRzID0gW10sXG4gICAgICAgIHN5bWJvbHNMZW5ndGggPSBzeW1ib2xzLmxlbmd0aCxcbiAgICAgICAgc3ltYm9sUmVtYWluaW5nID0gKHN5bWJvbHNMZW5ndGggPiAwKTtcblxuICAgIHdoaWxlIChzeW1ib2xSZW1haW5pbmcpIHtcbiAgICAgIHZhciBwYXJ0ID0gUGFydC5mcm9tU3ltYm9scyhzeW1ib2xzLCBQYXJ0cyk7XG5cbiAgICAgIHBhcnRzLnB1c2gocGFydCk7XG5cbiAgICAgIHN5bWJvbHNMZW5ndGggPSBzeW1ib2xzLmxlbmd0aDtcbiAgICAgIHN5bWJvbFJlbWFpbmluZyA9IChzeW1ib2xzTGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgdmFyIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHN5bWJvbHNGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBzcGVjaWFsU3ltYm9scykge1xuICB2YXIgc3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAoYChcXFxccyt8XFxcXFt8XFxcXF18XFxcXC5cXFxcLlxcXFwufCR7c3BlY2lhbFN5bWJvbHN9KWAsICd1JyksICAvLy9cbiAgICAgIHN5bWJvbHMgPSBleHByZXNzaW9uLnNwbGl0KHN5bWJvbHNSZWdFeHApO1xuXG4gIHN5bWJvbHMgPSBzeW1ib2xzLnJlZHVjZShmdW5jdGlvbihzeW1ib2xzLCBzeW1ib2wpIHtcbiAgICBpZiAoKHN5bWJvbCAhPT0gJycpICYmIChzeW1ib2wgIT09ICcgJykpe1xuICAgICAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN5bWJvbHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gc3ltYm9scztcbn1cbiJdfQ==