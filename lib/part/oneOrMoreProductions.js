'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionPart = require('./production'),
    ZeroOrMoreProductionsPart = require('./zeroOrMoreProductions');

var OneOrMoreProductionsPart = function () {
  function OneOrMoreProductionsPart(name, zeroOrMoreProductionsPart) {
    _classCallCheck(this, OneOrMoreProductionsPart);

    this.name = name;
    this.zeroOrMoreProductionsPart = zeroOrMoreProductionsPart;
  }

  _createClass(OneOrMoreProductionsPart, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = null,
          production = ProductionPart.findProduction(this.name, productions);

      if (production !== null) {
        context.saveIndex();

        var productionNodes = production.parse(context, productions),
            parsed = productionNodes !== null;

        if (parsed) {
          nodes = productionNodes;

          var zeroOrMoreNodes = this.zeroOrMoreProductionsPart.parse(context, productions);

          nodes = nodes.concat(zeroOrMoreNodes);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
      var oneOrMoreProductionsPart = null,
          oneOrMoreProductionsRegExp = /([^*]+)\+$/,
          matches = symbol.match(oneOrMoreProductionsRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            name = secondMatch,
            ///
        zeroOrMoreProductionsPart = new ZeroOrMoreProductionsPart(name);

        oneOrMoreProductionsPart = new OneOrMoreProductionsPart(name, zeroOrMoreProductionsPart);
      }

      return oneOrMoreProductionsPart;
    }
  }]);

  return OneOrMoreProductionsPart;
}();

module.exports = OneOrMoreProductionsPart;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L29uZU9yTW9yZVByb2R1Y3Rpb25zLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb25QYXJ0IiwicmVxdWlyZSIsIlplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQiLCJPbmVPck1vcmVQcm9kdWN0aW9uc1BhcnQiLCJuYW1lIiwiemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwic2F2ZUluZGV4IiwicHJvZHVjdGlvbk5vZGVzIiwicGFyc2UiLCJwYXJzZWQiLCJ6ZXJvT3JNb3JlTm9kZXMiLCJjb25jYXQiLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ0ZXJtaW5hbFR5cGVzIiwib25lT3JNb3JlUHJvZHVjdGlvbnNQYXJ0Iiwib25lT3JNb3JlUHJvZHVjdGlvbnNSZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxjQUFSLENBQXJCO0FBQUEsSUFDSUMsNEJBQTRCRCxRQUFRLHlCQUFSLENBRGhDOztJQUdNRSx3QjtBQUNKLG9DQUFZQyxJQUFaLEVBQWtCQyx5QkFBbEIsRUFBNkM7QUFBQTs7QUFDM0MsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MseUJBQUwsR0FBaUNBLHlCQUFqQztBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYTtBQUMxQixVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhVCxlQUFlVSxjQUFmLENBQThCLEtBQUtOLElBQW5DLEVBQXlDRyxXQUF6QyxDQURqQjs7QUFHQSxVQUFJRSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCSCxnQkFBUUssU0FBUjs7QUFFQSxZQUFJQyxrQkFBa0JILFdBQVdJLEtBQVgsQ0FBaUJQLE9BQWpCLEVBQTBCQyxXQUExQixDQUF0QjtBQUFBLFlBQ0lPLFNBQVVGLG9CQUFvQixJQURsQzs7QUFHQSxZQUFJRSxNQUFKLEVBQVk7QUFDVk4sa0JBQVFJLGVBQVI7O0FBRUEsY0FBSUcsa0JBQWtCLEtBQUtWLHlCQUFMLENBQStCUSxLQUEvQixDQUFxQ1AsT0FBckMsRUFBOENDLFdBQTlDLENBQXRCOztBQUVBQyxrQkFBUUEsTUFBTVEsTUFBTixDQUFhRCxlQUFiLENBQVI7QUFDRDtBQUNGOztBQUVELGFBQU9QLEtBQVA7QUFDRDs7OytCQUVpQlMsTSxFQUFRQyxxQixFQUF1QkMsYSxFQUFlO0FBQzlELFVBQUlDLDJCQUEyQixJQUEvQjtBQUFBLFVBQ0lDLDZCQUE2QixZQURqQztBQUFBLFVBRUlDLFVBQVVMLE9BQU9NLEtBQVAsQ0FBYUYsMEJBQWIsQ0FGZDs7QUFJQSxVQUFJQyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlFLGNBQWNDLE9BQU9ILE9BQVAsQ0FBbEI7QUFBQSxZQUNJbEIsT0FBT29CLFdBRFg7QUFBQSxZQUN3QjtBQUNwQm5CLG9DQUE0QixJQUFJSCx5QkFBSixDQUE4QkUsSUFBOUIsQ0FGaEM7O0FBSUFnQixtQ0FBMkIsSUFBSWpCLHdCQUFKLENBQTZCQyxJQUE3QixFQUFtQ0MseUJBQW5DLENBQTNCO0FBQ0Q7O0FBRUQsYUFBT2Usd0JBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJ4Qix3QkFBakI7O0FBRUEsU0FBU3NCLE1BQVQsQ0FBZ0JHLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoib25lT3JNb3JlUHJvZHVjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9kdWN0aW9uUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbicpLFxuICAgIFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQgPSByZXF1aXJlKCcuL3plcm9Pck1vcmVQcm9kdWN0aW9ucycpO1xuXG5jbGFzcyBPbmVPck1vcmVQcm9kdWN0aW9uc1BhcnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQgPSB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0O1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvblBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5uYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC5zYXZlSW5kZXgoKTtcblxuICAgICAgdmFyIHByb2R1Y3Rpb25Ob2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpLFxuICAgICAgICAgIHBhcnNlZCA9IChwcm9kdWN0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gcHJvZHVjdGlvbk5vZGVzO1xuICAgICAgICBcbiAgICAgICAgdmFyIHplcm9Pck1vcmVOb2RlcyA9IHRoaXMuemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydC5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG4gICAgICAgIFxuICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh6ZXJvT3JNb3JlTm9kZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMpIHtcbiAgICB2YXIgb25lT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gbnVsbCxcbiAgICAgICAgb25lT3JNb3JlUHJvZHVjdGlvbnNSZWdFeHAgPSAvKFteKl0rKVxcKyQvLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKG9uZU9yTW9yZVByb2R1Y3Rpb25zUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgbmFtZSA9IHNlY29uZE1hdGNoLCAvLy9cbiAgICAgICAgICB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQobmFtZSk7XG5cbiAgICAgIG9uZU9yTW9yZVByb2R1Y3Rpb25zUGFydCA9IG5ldyBPbmVPck1vcmVQcm9kdWN0aW9uc1BhcnQobmFtZSwgemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9uZU9yTW9yZVByb2R1Y3Rpb25zUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZVByb2R1Y3Rpb25zUGFydDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19