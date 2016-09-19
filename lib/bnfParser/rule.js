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

function partFromSymbol(symbol, terminalSymbolsRegExp, AllParts) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcnVsZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJyZXF1aXJlIiwiUHJvZHVjdGlvblBhcnQiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwiUGFydHMiLCJSdWxlIiwicGFydHMiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnNlIiwic3ltYm9sU2VxdWVuY2UiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJtYXBTeW1ib2xzIiwic3ltYm9sIiwicGFydEZyb21TeW1ib2wiLCJydWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsIkFsbFBhcnRzIiwidW5kZWZpbmVkIiwic29tZSIsIlBhcnQiLCJmcm9tU3ltYm9sIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxpQkFBUixDQUFuQjtBQUFBLElBQ0lDLGlCQUFpQkQsUUFBUSxtQkFBUixDQURyQjtBQUFBLElBRUlFLHdCQUF3QkYsUUFBUSwwQkFBUixDQUY1QjtBQUFBLElBR0lHLDRCQUE0QkgsUUFBUSw4QkFBUixDQUhoQzs7QUFLQSxJQUFJSSxRQUFRLENBQ1ZMLFlBRFUsRUFFVkcscUJBRlUsRUFHVkMseUJBSFUsRUFJVkYsY0FKVSxDQUFaOztJQU9NSSxJO0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsU0FBUyxLQUFLSixLQUFMLENBQVdLLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQzNDLFlBQUlGLFNBQVNFLEtBQUtDLEtBQUwsQ0FBV04sS0FBWCxFQUFrQkMsT0FBbEIsRUFBMkJDLFdBQTNCLENBQWI7O0FBRUEsZUFBT0MsTUFBUDtBQUNELE9BSlksQ0FBYjs7QUFNQSxhQUFPQSxNQUFQO0FBQ0Q7Ozt1Q0FFeUJJLGMsRUFBZ0JDLHFCLEVBQXVCO0FBQy9ELFVBQUlULFFBQVFRLGVBQWVFLFVBQWYsQ0FBMEIsVUFBU0MsTUFBVCxFQUFpQjtBQUNqRCxZQUFJTCxPQUFPTSxlQUFlRCxNQUFmLEVBQXVCRixxQkFBdkIsQ0FBWDs7QUFFQSxlQUFPSCxJQUFQO0FBQ0QsT0FKTyxDQUFaO0FBQUEsVUFLSU8sT0FBTyxJQUFJZCxJQUFKLENBQVNDLEtBQVQsQ0FMWDs7QUFPQSxhQUFPYSxJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCaEIsSUFBakI7O0FBRUEsU0FBU2EsY0FBVCxDQUF3QkQsTUFBeEIsRUFBZ0NGLHFCQUFoQyxFQUF1RE8sUUFBdkQsRUFBaUU7QUFDL0QsTUFBSVYsT0FBT1csU0FBWCxDQUQrRCxDQUN6Qzs7QUFFdEJuQixRQUFNb0IsSUFBTixDQUFXLFVBQVNDLElBQVQsRUFBZTtBQUN4QmIsV0FBT2EsS0FBS0MsVUFBTCxDQUFnQlQsTUFBaEIsRUFBd0JGLHFCQUF4QixDQUFQOztBQUVBLFFBQUlMLFNBQVVFLFNBQVMsSUFBdkI7O0FBRUEsV0FBT0YsTUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0UsSUFBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuL3BhcnQvdGVybWluYWwnKSxcbiAgICBQcm9kdWN0aW9uUGFydCA9IHJlcXVpcmUoJy4vcGFydC9wcm9kdWN0aW9uJyksXG4gICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCA9IHJlcXVpcmUoJy4vcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbnMnKTtcblxudmFyIFBhcnRzID0gW1xuICBUZXJtaW5hbFBhcnQsXG4gIFJlZ3VsYXJFeHByZXNzaW9uUGFydCxcbiAgWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCxcbiAgUHJvZHVjdGlvblBhcnRcbl07XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgdmFyIHBhcnNlZCA9IHBhcnQucGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIHBhcnRzID0gc3ltYm9sU2VxdWVuY2UubWFwU3ltYm9scyhmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICB2YXIgcGFydCA9IHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBBbGxQYXJ0cykge1xuICB2YXIgcGFydCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCk7XG5cbiAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG4iXX0=