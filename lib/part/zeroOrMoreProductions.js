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
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3plcm9Pck1vcmVQcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwibmFtZSIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwic2F2ZUluZGV4IiwicHJvZHVjdGlvbk5vZGVzIiwicGFyc2UiLCJwYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ0ZXJtaW5hbFR5cGVzIiwiemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCIsInplcm9Pck1vcmVQcm9kdWN0aW9uc1JlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsaUJBQWlCQyxRQUFRLGNBQVIsQ0FBckI7O0lBRU1DLHlCO0FBQ0oscUNBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhO0FBQzFCLFVBQUlDLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLGFBQWFQLGVBQWVRLGNBQWYsQ0FBOEIsS0FBS0wsSUFBbkMsRUFBeUNFLFdBQXpDLENBRGpCOztBQUdBLFVBQUlFLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJELGdCQUFRLEVBQVI7O0FBRUEsaUJBQVE7QUFDTkYsa0JBQVFLLFNBQVI7O0FBRUEsY0FBSUMsa0JBQWtCSCxXQUFXSSxLQUFYLENBQWlCUCxPQUFqQixFQUEwQkMsV0FBMUIsQ0FBdEI7QUFBQSxjQUNJTyxTQUFVRixvQkFBb0IsSUFEbEM7O0FBR0EsY0FBSUUsTUFBSixFQUFZO0FBQ1ZOLG9CQUFRQSxNQUFNTyxNQUFOLENBQWFILGVBQWIsQ0FBUjtBQUNELFdBRkQsTUFFTztBQUNMTixvQkFBUVUsU0FBUjs7QUFFQSxtQkFBT1IsS0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFaUJTLE0sRUFBUUMscUIsRUFBdUJDLGEsRUFBZTtBQUM5RCxVQUFJQyw0QkFBNEIsSUFBaEM7QUFBQSxVQUNJQyw4QkFBOEIsWUFEbEM7QUFBQSxVQUVJQyxVQUFVTCxPQUFPTSxLQUFQLENBQWFGLDJCQUFiLENBRmQ7O0FBSUEsVUFBSUMsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJRSxjQUFjQyxPQUFPSCxPQUFQLENBQWxCO0FBQUEsWUFDSWpCLE9BQU9tQixXQURYLENBRG9CLENBRUk7O0FBRXhCSixvQ0FBNEIsSUFBSWhCLHlCQUFKLENBQThCQyxJQUE5QixDQUE1QjtBQUNEOztBQUVELGFBQU9lLHlCQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCdkIseUJBQWpCOztBQUVBLFNBQVNxQixNQUFULENBQWdCRyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6Inplcm9Pck1vcmVQcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFByb2R1Y3Rpb25QYXJ0ID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb25QYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMubmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGVzID0gW107XG5cbiAgICAgIGZvcig7Oykge1xuICAgICAgICBjb250ZXh0LnNhdmVJbmRleCgpO1xuICAgICAgICBcbiAgICAgICAgdmFyIHByb2R1Y3Rpb25Ob2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpLFxuICAgICAgICAgICAgcGFyc2VkID0gKHByb2R1Y3Rpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHByb2R1Y3Rpb25Ob2Rlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5iYWNrdHJhY2soKTtcblxuICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMpIHtcbiAgICB2YXIgemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCA9IG51bGwsXG4gICAgICAgIHplcm9Pck1vcmVQcm9kdWN0aW9uc1JlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgbmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCA9IG5ldyBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0KG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19