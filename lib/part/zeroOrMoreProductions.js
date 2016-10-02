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
    value: function fromSymbol(symbol, terminalSymbolsRegExp) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3plcm9Pck1vcmVQcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwibmFtZSIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwic2F2ZUluZGV4IiwicHJvZHVjdGlvbk5vZGVzIiwicGFyc2UiLCJwYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwiemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxpQkFBaUJDLFFBQVEsY0FBUixDQUFyQjs7SUFFTUMseUI7QUFDSixxQ0FBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWE7QUFDMUIsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYVAsZUFBZVEsY0FBZixDQUE4QixLQUFLTCxJQUFuQyxFQUF5Q0UsV0FBekMsQ0FEakI7O0FBR0EsVUFBSUUsZUFBZSxJQUFuQixFQUF5QjtBQUN2QkQsZ0JBQVEsRUFBUjs7QUFFQSxpQkFBUTtBQUNORixrQkFBUUssU0FBUjs7QUFFQSxjQUFJQyxrQkFBa0JILFdBQVdJLEtBQVgsQ0FBaUJQLE9BQWpCLEVBQTBCQyxXQUExQixDQUF0QjtBQUFBLGNBQ0lPLFNBQVVGLG9CQUFvQixJQURsQzs7QUFHQSxjQUFJRSxNQUFKLEVBQVk7QUFDVk4sb0JBQVFBLE1BQU1PLE1BQU4sQ0FBYUgsZUFBYixDQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0xOLG9CQUFRVSxTQUFSOztBQUVBLG1CQUFPUixLQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7OytCQUVpQlMsTSxFQUFRQyxxQixFQUF1QjtBQUMvQyxVQUFJQyw0QkFBNEIsSUFBaEM7QUFBQSxVQUNJQyw4QkFBOEIsWUFEbEM7QUFBQSxVQUVJQyxVQUFVSixPQUFPSyxLQUFQLENBQWFGLDJCQUFiLENBRmQ7O0FBSUEsVUFBSUMsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJRSxjQUFjQyxPQUFPSCxPQUFQLENBQWxCO0FBQUEsWUFDSWhCLE9BQU9rQixXQURYLENBRG9CLENBRUk7O0FBRXhCSixvQ0FBNEIsSUFBSWYseUJBQUosQ0FBOEJDLElBQTlCLENBQTVCO0FBQ0Q7O0FBRUQsYUFBT2MseUJBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJ0Qix5QkFBakI7O0FBRUEsU0FBU29CLE1BQVQsQ0FBZ0JHLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiemVyb09yTW9yZVByb2R1Y3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvZHVjdGlvblBhcnQgPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvblBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5uYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIGNvbnRleHQuc2F2ZUluZGV4KCk7XG4gICAgICAgIFxuICAgICAgICB2YXIgcHJvZHVjdGlvbk5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucyksXG4gICAgICAgICAgICBwYXJzZWQgPSAocHJvZHVjdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocHJvZHVjdGlvbk5vZGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmJhY2t0cmFjaygpO1xuXG4gICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCkge1xuICAgIHZhciB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gbnVsbCxcbiAgICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwID0gLyhbXipdKylcXCokLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh6ZXJvT3JNb3JlUHJvZHVjdGlvbnNSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgICB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=