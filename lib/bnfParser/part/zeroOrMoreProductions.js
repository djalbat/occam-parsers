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
          var index = context.index;

          if (!production.parse(input, context, productions)) {
            context.index = index;

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
        var name = matches[1];

        zeroOrMoreProductionsPart = new ZeroOrMoreProductionsPart(name);
      }

      return zeroOrMoreProductionsPart;
    }
  }]);

  return ZeroOrMoreProductionsPart;
}();

module.exports = ZeroOrMoreProductionsPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbnMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvblBhcnQiLCJyZXF1aXJlIiwiWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCIsIm5hbWUiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsImluZGV4IiwicGFyc2UiLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwiemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxjQUFSLENBQXJCOztJQUVNQyx5QjtBQUNKLHFDQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBYjtBQUFBLFVBQ0lDLGFBQWFSLGVBQWVTLGNBQWYsQ0FBOEIsS0FBS04sSUFBbkMsRUFBeUNHLFdBQXpDLENBRGpCOztBQUdBLFVBQUlFLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJELGlCQUFTLElBQVQ7O0FBRUEsaUJBQVE7QUFDTixjQUFJRyxRQUFRTCxRQUFRSyxLQUFwQjs7QUFFQSxjQUFJLENBQUNGLFdBQVdHLEtBQVgsQ0FBaUJQLEtBQWpCLEVBQXdCQyxPQUF4QixFQUFpQ0MsV0FBakMsQ0FBTCxFQUFvRDtBQUNsREQsb0JBQVFLLEtBQVIsR0FBZ0JBLEtBQWhCOztBQUVBLG1CQUFPSCxNQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9BLE1BQVA7QUFDRDs7OytCQUVpQkssTSxFQUFRQyxxQixFQUF1QjtBQUMvQyxVQUFJQyw0QkFBNEIsSUFBaEM7QUFBQSxVQUNJQyw4QkFBOEIsWUFEbEM7QUFBQSxVQUVJQyxVQUFVSixPQUFPSyxLQUFQLENBQWFGLDJCQUFiLENBRmQ7O0FBSUEsVUFBSUMsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJYixPQUFPYSxRQUFRLENBQVIsQ0FBWDs7QUFFQUYsb0NBQTRCLElBQUlaLHlCQUFKLENBQThCQyxJQUE5QixDQUE1QjtBQUNEOztBQUVELGFBQU9XLHlCQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCakIseUJBQWpCIiwiZmlsZSI6Inplcm9Pck1vcmVQcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFByb2R1Y3Rpb25QYXJ0ID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb25QYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMubmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICAgIGZvcig7Oykge1xuICAgICAgICB2YXIgaW5kZXggPSBjb250ZXh0LmluZGV4O1xuXG4gICAgICAgIGlmICghcHJvZHVjdGlvbi5wYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpKSB7XG4gICAgICAgICAgY29udGV4dC5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIHplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQgPSBudWxsLFxuICAgICAgICB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNSZWdFeHAgPSAvKFteKl0rKVxcKiQvLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHplcm9Pck1vcmVQcm9kdWN0aW9uc1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIG5hbWUgPSBtYXRjaGVzWzFdO1xuXG4gICAgICB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0O1xuIl19