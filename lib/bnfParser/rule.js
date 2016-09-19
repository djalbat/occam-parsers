'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = require('./part/terminal'),
    ProductionPart = require('./part/production'),
    RegularExpressionPart = require('./part/regularExpression'),
    ZeroOrMoreProductionsPart = require('./part/zeroOrMoreProductions');

var Parts = [TerminalPart, RegularExpressionPart, ZeroOrMoreProductionsPart, ProductionPart];

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
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, terminalSymbolsRegExp) {
      var parts = symbolSequence.mapSymbols(function (symbol) {
        var part = partFromSymbol(symbol, terminalSymbolsRegExp);

        return part;
      }),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromSymbol(symbol, terminalSymbolsRegExp) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcnVsZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJyZXF1aXJlIiwiUHJvZHVjdGlvblBhcnQiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwiUGFydHMiLCJSdWxlIiwicGFydHMiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnNlIiwic3ltYm9sU2VxdWVuY2UiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJtYXBTeW1ib2xzIiwic3ltYm9sIiwicGFydEZyb21TeW1ib2wiLCJydWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVuZGVmaW5lZCIsInNvbWUiLCJQYXJ0IiwiZnJvbVN5bWJvbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsaUJBQVIsQ0FBbkI7QUFBQSxJQUNJQyxpQkFBaUJELFFBQVEsbUJBQVIsQ0FEckI7QUFBQSxJQUVJRSx3QkFBd0JGLFFBQVEsMEJBQVIsQ0FGNUI7QUFBQSxJQUdJRyw0QkFBNEJILFFBQVEsOEJBQVIsQ0FIaEM7O0FBS0EsSUFBSUksUUFBUSxDQUNWTCxZQURVLEVBRVZHLHFCQUZVLEVBR1ZDLHlCQUhVLEVBSVZGLGNBSlUsQ0FBWjs7SUFPTUksSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUMzQyxZQUFJRixTQUFTRSxLQUFLQyxLQUFMLENBQVdOLEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCQyxXQUEzQixDQUFiOztBQUVBLGVBQU9DLE1BQVA7QUFDRCxPQUpZLENBQWI7O0FBTUEsYUFBT0EsTUFBUDtBQUNEOzs7dUNBRXlCSSxjLEVBQWdCQyxxQixFQUF1QjtBQUMvRCxVQUFJVCxRQUFRUSxlQUFlRSxVQUFmLENBQTBCLFVBQVNDLE1BQVQsRUFBaUI7QUFDakQsWUFBSUwsT0FBT00sZUFBZUQsTUFBZixFQUF1QkYscUJBQXZCLENBQVg7O0FBRUEsZUFBT0gsSUFBUDtBQUNELE9BSk8sQ0FBWjtBQUFBLFVBS0lPLE9BQU8sSUFBSWQsSUFBSixDQUFTQyxLQUFULENBTFg7O0FBT0EsYUFBT2EsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmhCLElBQWpCOztBQUVBLFNBQVNhLGNBQVQsQ0FBd0JELE1BQXhCLEVBQWdDRixxQkFBaEMsRUFBdUQ7QUFDckQsTUFBSUgsT0FBT1UsU0FBWCxDQURxRCxDQUMvQjs7QUFFdEJsQixRQUFNbUIsSUFBTixDQUFXLFVBQVNDLElBQVQsRUFBZTtBQUN4QlosV0FBT1ksS0FBS0MsVUFBTCxDQUFnQlIsTUFBaEIsRUFBd0JGLHFCQUF4QixDQUFQOztBQUVBLFFBQUlMLFNBQVVFLFNBQVMsSUFBdkI7O0FBRUEsV0FBT0YsTUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0UsSUFBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuL3BhcnQvdGVybWluYWwnKSxcbiAgICBQcm9kdWN0aW9uUGFydCA9IHJlcXVpcmUoJy4vcGFydC9wcm9kdWN0aW9uJyksXG4gICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCA9IHJlcXVpcmUoJy4vcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbnMnKTtcblxudmFyIFBhcnRzID0gW1xuICBUZXJtaW5hbFBhcnQsXG4gIFJlZ3VsYXJFeHByZXNzaW9uUGFydCxcbiAgWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCxcbiAgUHJvZHVjdGlvblBhcnRcbl07XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgdmFyIHBhcnNlZCA9IHBhcnQucGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIHBhcnRzID0gc3ltYm9sU2VxdWVuY2UubWFwU3ltYm9scyhmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICB2YXIgcGFydCA9IHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwKSB7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwKTtcblxuICAgIHZhciBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cbiJdfQ==