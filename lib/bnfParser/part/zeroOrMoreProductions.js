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
      var parsed = false,
          production = ProductionPart.findProduction(this.name, productions);

      if (production !== null) {
        parsed = true;

        for (;;) {
          var index = context.getIndex(),
              savedIndex = index; ///

          if (!production.parse(input, context, productions)) {
            context.backtrack(savedIndex);

            return parsed;
          }
        }
      }

      return parsed;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbnMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvblBhcnQiLCJyZXF1aXJlIiwiWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCIsIm5hbWUiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsImluZGV4IiwiZ2V0SW5kZXgiLCJzYXZlZEluZGV4IiwicGFyc2UiLCJiYWNrdHJhY2siLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwiemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxpQkFBaUJDLFFBQVEsY0FBUixDQUFyQjs7SUFFTUMseUI7QUFDSixxQ0FBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQWI7QUFBQSxVQUNJQyxhQUFhUixlQUFlUyxjQUFmLENBQThCLEtBQUtOLElBQW5DLEVBQXlDRyxXQUF6QyxDQURqQjs7QUFHQSxVQUFJRSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCRCxpQkFBUyxJQUFUOztBQUVBLGlCQUFRO0FBQ04sY0FBSUcsUUFBUUwsUUFBUU0sUUFBUixFQUFaO0FBQUEsY0FDSUMsYUFBYUYsS0FEakIsQ0FETSxDQUVrQjs7QUFFeEIsY0FBSSxDQUFDRixXQUFXSyxLQUFYLENBQWlCVCxLQUFqQixFQUF3QkMsT0FBeEIsRUFBaUNDLFdBQWpDLENBQUwsRUFBb0Q7QUFDbERELG9CQUFRUyxTQUFSLENBQWtCRixVQUFsQjs7QUFFQSxtQkFBT0wsTUFBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPQSxNQUFQO0FBQ0Q7OzsrQkFFaUJRLE0sRUFBUUMscUIsRUFBdUI7QUFDL0MsVUFBSUMsNEJBQTRCLElBQWhDO0FBQUEsVUFDSUMsOEJBQThCLFlBRGxDO0FBQUEsVUFFSUMsVUFBVUosT0FBT0ssS0FBUCxDQUFhRiwyQkFBYixDQUZkOztBQUlBLFVBQUlDLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSUUsY0FBY0MsT0FBT0gsT0FBUCxDQUFsQjtBQUFBLFlBQ0loQixPQUFPa0IsV0FEWCxDQURvQixDQUVJOztBQUV4Qkosb0NBQTRCLElBQUlmLHlCQUFKLENBQThCQyxJQUE5QixDQUE1QjtBQUNEOztBQUVELGFBQU9jLHlCQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCdEIseUJBQWpCOztBQUVBLFNBQVNvQixNQUFULENBQWdCRyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6Inplcm9Pck1vcmVQcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFByb2R1Y3Rpb25QYXJ0ID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb25QYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMubmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICAgIGZvcig7Oykge1xuICAgICAgICB2YXIgaW5kZXggPSBjb250ZXh0LmdldEluZGV4KCksXG4gICAgICAgICAgICBzYXZlZEluZGV4ID0gaW5kZXg7IC8vL1xuXG4gICAgICAgIGlmICghcHJvZHVjdGlvbi5wYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpKSB7XG4gICAgICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHApIHtcbiAgICB2YXIgemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCA9IG51bGwsXG4gICAgICAgIHplcm9Pck1vcmVQcm9kdWN0aW9uc1JlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgbmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCA9IG5ldyBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0KG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19