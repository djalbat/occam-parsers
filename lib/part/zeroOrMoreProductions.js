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
    value: function parse(input, context, productions) {
      var nodes = null,
          production = ProductionPart.findProduction(this.name, productions);

      if (production !== null) {
        nodes = [];

        for (;;) {
          context.saveIndex();

          var productionNodes = production.parse(input, context, productions),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3plcm9Pck1vcmVQcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwibmFtZSIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJzYXZlSW5kZXgiLCJwcm9kdWN0aW9uTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsImNvbmNhdCIsImJhY2t0cmFjayIsInN5bWJvbCIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwiemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCIsInplcm9Pck1vcmVQcm9kdWN0aW9uc1JlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsaUJBQWlCQyxRQUFRLGNBQVIsQ0FBckI7O0lBRU1DLHlCO0FBQ0oscUNBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYVIsZUFBZVMsY0FBZixDQUE4QixLQUFLTixJQUFuQyxFQUF5Q0csV0FBekMsQ0FEakI7O0FBR0EsVUFBSUUsZUFBZSxJQUFuQixFQUF5QjtBQUN2QkQsZ0JBQVEsRUFBUjs7QUFFQSxpQkFBUTtBQUNORixrQkFBUUssU0FBUjs7QUFFQSxjQUFJQyxrQkFBa0JILFdBQVdJLEtBQVgsQ0FBaUJSLEtBQWpCLEVBQXdCQyxPQUF4QixFQUFpQ0MsV0FBakMsQ0FBdEI7QUFBQSxjQUNJTyxTQUFVRixvQkFBb0IsSUFEbEM7O0FBR0EsY0FBSUUsTUFBSixFQUFZO0FBQ1ZOLG9CQUFRQSxNQUFNTyxNQUFOLENBQWFILGVBQWIsQ0FBUjtBQUNELFdBRkQsTUFFTztBQUNMTixvQkFBUVUsU0FBUjs7QUFFQSxtQkFBT1IsS0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFaUJTLE0sRUFBUUMsb0IsRUFBc0I7QUFDOUMsVUFBSUMsNEJBQTRCLElBQWhDO0FBQUEsVUFDSUMsOEJBQThCLFlBRGxDO0FBQUEsVUFFSUMsVUFBVUosT0FBT0ssS0FBUCxDQUFhRiwyQkFBYixDQUZkOztBQUlBLFVBQUlDLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSUUsY0FBY0MsT0FBT0gsT0FBUCxDQUFsQjtBQUFBLFlBQ0lqQixPQUFPbUIsV0FEWCxDQURvQixDQUVJOztBQUV4Qkosb0NBQTRCLElBQUloQix5QkFBSixDQUE4QkMsSUFBOUIsQ0FBNUI7QUFDRDs7QUFFRCxhQUFPZSx5QkFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQnZCLHlCQUFqQjs7QUFFQSxTQUFTcUIsTUFBVCxDQUFnQkcsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ6ZXJvT3JNb3JlUHJvZHVjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9kdWN0aW9uUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvblBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5uYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIGNvbnRleHQuc2F2ZUluZGV4KCk7XG4gICAgICAgIFxuICAgICAgICB2YXIgcHJvZHVjdGlvbk5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpLFxuICAgICAgICAgICAgcGFyc2VkID0gKHByb2R1Y3Rpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHByb2R1Y3Rpb25Ob2Rlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5iYWNrdHJhY2soKTtcblxuICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cCkge1xuICAgIHZhciB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gbnVsbCxcbiAgICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwID0gLyhbXipdKylcXCokLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh6ZXJvT3JNb3JlUHJvZHVjdGlvbnNSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgICB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=