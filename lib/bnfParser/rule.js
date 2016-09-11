'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Part = require('./part');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = this.parts.every(function (part) {
        var parsed = part.parse(input, context, productions);

        return parsed;
      });

      return parsed;
    }
  }], [{
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
  var symbolsRegExp = new RegExp('(\\s+|\'[^\']\'|' + specialSymbols + ')', 'u'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcnVsZS5qcyJdLCJuYW1lcyI6WyJQYXJ0IiwicmVxdWlyZSIsIlJ1bGUiLCJwYXJ0cyIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwicGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFyc2UiLCJleHByZXNzaW9uIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsInN5bWJvbHMiLCJzeW1ib2xzRnJvbUV4cHJlc3Npb24iLCJzeW1ib2xzTGVuZ3RoIiwibGVuZ3RoIiwic3ltYm9sUmVtYWluaW5nIiwiZnJvbVN5bWJvbHMiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwic3BsaXQiLCJyZWR1Y2UiLCJzeW1ib2wiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDs7SUFFTUMsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUMzQyxZQUFJRixTQUFTRSxLQUFLQyxLQUFMLENBQVdOLEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCQyxXQUEzQixDQUFiOztBQUVBLGVBQU9DLE1BQVA7QUFDRCxPQUpZLENBQWI7O0FBTUEsYUFBT0EsTUFBUDtBQUNEOzs7bUNBRXFCSSxVLEVBQVlDLGMsRUFBZ0JDLEssRUFBTztBQUN2RCxVQUFJQyxVQUFVQyxzQkFBc0JKLFVBQXRCLEVBQWtDQyxjQUFsQyxDQUFkO0FBQUEsVUFDSVQsUUFBUSxFQURaO0FBQUEsVUFFSWEsZ0JBQWdCRixRQUFRRyxNQUY1QjtBQUFBLFVBR0lDLGtCQUFtQkYsZ0JBQWdCLENBSHZDOztBQUtBLGFBQU9FLGVBQVAsRUFBd0I7QUFDdEIsWUFBSVQsT0FBT1QsS0FBS21CLFdBQUwsQ0FBaUJMLE9BQWpCLEVBQTBCRCxLQUExQixDQUFYOztBQUVBVixjQUFNaUIsSUFBTixDQUFXWCxJQUFYOztBQUVBTyx3QkFBZ0JGLFFBQVFHLE1BQXhCO0FBQ0FDLDBCQUFtQkYsZ0JBQWdCLENBQW5DO0FBQ0Q7O0FBRUQsVUFBSUssT0FBTyxJQUFJbkIsSUFBSixDQUFTQyxLQUFULENBQVg7O0FBRUEsYUFBT2tCLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJyQixJQUFqQjs7QUFFQSxTQUFTYSxxQkFBVCxDQUErQkosVUFBL0IsRUFBMkNDLGNBQTNDLEVBQTJEO0FBQ3pELE1BQUlZLGdCQUFnQixJQUFJQyxNQUFKLHNCQUEyQmIsY0FBM0IsUUFBOEMsR0FBOUMsQ0FBcEI7QUFBQSxNQUF5RTtBQUNyRUUsWUFBVUgsV0FBV2UsS0FBWCxDQUFpQkYsYUFBakIsQ0FEZDs7QUFHQVYsWUFBVUEsUUFBUWEsTUFBUixDQUFlLFVBQVNiLE9BQVQsRUFBa0JjLE1BQWxCLEVBQTBCO0FBQ2pELFFBQUtBLFdBQVcsRUFBWixJQUFvQkEsV0FBVyxHQUFuQyxFQUF3QztBQUN0Q2QsY0FBUU0sSUFBUixDQUFhUSxNQUFiO0FBQ0Q7O0FBRUQsV0FBT2QsT0FBUDtBQUNELEdBTlMsRUFNUCxFQU5PLENBQVY7O0FBUUEsU0FBT0EsT0FBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0Jyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgdmFyIHBhcnNlZCA9IHBhcnQucGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIHNwZWNpYWxTeW1ib2xzLCBQYXJ0cykge1xuICAgIHZhciBzeW1ib2xzID0gc3ltYm9sc0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIHNwZWNpYWxTeW1ib2xzKSxcbiAgICAgICAgcGFydHMgPSBbXSxcbiAgICAgICAgc3ltYm9sc0xlbmd0aCA9IHN5bWJvbHMubGVuZ3RoLFxuICAgICAgICBzeW1ib2xSZW1haW5pbmcgPSAoc3ltYm9sc0xlbmd0aCA+IDApO1xuXG4gICAgd2hpbGUgKHN5bWJvbFJlbWFpbmluZykge1xuICAgICAgdmFyIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2xzKHN5bWJvbHMsIFBhcnRzKTtcblxuICAgICAgcGFydHMucHVzaChwYXJ0KTtcblxuICAgICAgc3ltYm9sc0xlbmd0aCA9IHN5bWJvbHMubGVuZ3RoO1xuICAgICAgc3ltYm9sUmVtYWluaW5nID0gKHN5bWJvbHNMZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gc3ltYm9sc0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIHNwZWNpYWxTeW1ib2xzKSB7XG4gIHZhciBzeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cChgKFxcXFxzK3wnW14nXSd8JHtzcGVjaWFsU3ltYm9sc30pYCwgJ3UnKSwgIC8vL1xuICAgICAgc3ltYm9scyA9IGV4cHJlc3Npb24uc3BsaXQoc3ltYm9sc1JlZ0V4cCk7XG5cbiAgc3ltYm9scyA9IHN5bWJvbHMucmVkdWNlKGZ1bmN0aW9uKHN5bWJvbHMsIHN5bWJvbCkge1xuICAgIGlmICgoc3ltYm9sICE9PSAnJykgJiYgKHN5bWJvbCAhPT0gJyAnKSl7XG4gICAgICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ltYm9scztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBzeW1ib2xzO1xufVxuIl19