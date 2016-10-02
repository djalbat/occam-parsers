'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionPart = require('./production');

var ZeroOrMoreProductionsPart = function () {
  function ZeroOrMoreProductionsPart(name) {
    _classCallCheck(this, ZeroOrMoreProductionsPart);

    this.name = name;
  }

  _createClass(ZeroOrMoreProductionsPart, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = null,
          production = ProductionPart.findProduction(this.name, productions);

      if (production !== null) {
        nodes = [];

        for (;;) {
          context.saveIndex();

          var productionNodes = production.parse(context, productions),
              parsed = productionNodes !== null;

          if (parsed) {
            nodes = nodes.concat(productionNodes);
          } else {
            context.backtrack();

            return nodes;
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, specialSymbolsRegExp) {
      var zeroOrMoreProductionsPart = null,
          zeroOrMoreProductionsRegExp = /([^*]+)\*$/,
          matches = symbol.match(zeroOrMoreProductionsRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            name = secondMatch; ///

        zeroOrMoreProductionsPart = new ZeroOrMoreProductionsPart(name);
      }

      return zeroOrMoreProductionsPart;
    }
  }]);

  return ZeroOrMoreProductionsPart;
}();

module.exports = ZeroOrMoreProductionsPart;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3plcm9Pck1vcmVQcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwibmFtZSIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwic2F2ZUluZGV4IiwicHJvZHVjdGlvbk5vZGVzIiwicGFyc2UiLCJwYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2wiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cCIsInplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbnNSZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxjQUFSLENBQXJCOztJQUVNQyx5QjtBQUNKLHFDQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYTtBQUMxQixVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhUCxlQUFlUSxjQUFmLENBQThCLEtBQUtMLElBQW5DLEVBQXlDRSxXQUF6QyxDQURqQjs7QUFHQSxVQUFJRSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCRCxnQkFBUSxFQUFSOztBQUVBLGlCQUFRO0FBQ05GLGtCQUFRSyxTQUFSOztBQUVBLGNBQUlDLGtCQUFrQkgsV0FBV0ksS0FBWCxDQUFpQlAsT0FBakIsRUFBMEJDLFdBQTFCLENBQXRCO0FBQUEsY0FDSU8sU0FBVUYsb0JBQW9CLElBRGxDOztBQUdBLGNBQUlFLE1BQUosRUFBWTtBQUNWTixvQkFBUUEsTUFBTU8sTUFBTixDQUFhSCxlQUFiLENBQVI7QUFDRCxXQUZELE1BRU87QUFDTE4sb0JBQVFVLFNBQVI7O0FBRUEsbUJBQU9SLEtBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRWlCUyxNLEVBQVFDLG9CLEVBQXNCO0FBQzlDLFVBQUlDLDRCQUE0QixJQUFoQztBQUFBLFVBQ0lDLDhCQUE4QixZQURsQztBQUFBLFVBRUlDLFVBQVVKLE9BQU9LLEtBQVAsQ0FBYUYsMkJBQWIsQ0FGZDs7QUFJQSxVQUFJQyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlFLGNBQWNDLE9BQU9ILE9BQVAsQ0FBbEI7QUFBQSxZQUNJaEIsT0FBT2tCLFdBRFgsQ0FEb0IsQ0FFSTs7QUFFeEJKLG9DQUE0QixJQUFJZix5QkFBSixDQUE4QkMsSUFBOUIsQ0FBNUI7QUFDRDs7QUFFRCxhQUFPYyx5QkFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQnRCLHlCQUFqQjs7QUFFQSxTQUFTb0IsTUFBVCxDQUFnQkcsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ6ZXJvT3JNb3JlUHJvZHVjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9kdWN0aW9uUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uUGFydC5maW5kUHJvZHVjdGlvbih0aGlzLm5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBub2RlcyA9IFtdO1xuXG4gICAgICBmb3IoOzspIHtcbiAgICAgICAgY29udGV4dC5zYXZlSW5kZXgoKTtcbiAgICAgICAgXG4gICAgICAgIHZhciBwcm9kdWN0aW9uTm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChwcm9kdWN0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwcm9kdWN0aW9uTm9kZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuYmFja3RyYWNrKCk7XG5cbiAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc3BlY2lhbFN5bWJvbHNSZWdFeHApIHtcbiAgICB2YXIgemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCA9IG51bGwsXG4gICAgICAgIHplcm9Pck1vcmVQcm9kdWN0aW9uc1JlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgbmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCA9IG5ldyBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0KG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19