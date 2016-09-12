'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionNamePart = require('./productionName');

var ZeroOrMoreProductionNamesPart = function () {
  function ZeroOrMoreProductionNamesPart(productionName) {
    _classCallCheck(this, ZeroOrMoreProductionNamesPart);

    this.productionName = productionName;
  }

  _createClass(ZeroOrMoreProductionNamesPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = false,
          production = ProductionNamePart.findProduction(this.productionName, productions);

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
    value: function fromSymbol(symbol) {
      var zeroOrMoreProductionNamesPart = null,
          zeroOrMoreProductionNamesRegExp = /([^*]+)\*$/,
          matches = symbol.match(zeroOrMoreProductionNamesRegExp);

      if (matches !== null) {
        var productionName = matches[1];

        zeroOrMoreProductionNamesPart = new ZeroOrMoreProductionNamesPart(productionName);
      }

      return zeroOrMoreProductionNamesPart;
    }
  }]);

  return ZeroOrMoreProductionNamesPart;
}();

module.exports = ZeroOrMoreProductionNamesPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb25OYW1lUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydCIsInByb2R1Y3Rpb25OYW1lIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJwYXJzZWQiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJpbmRleCIsInBhcnNlIiwic3ltYm9sIiwiemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHFCQUFxQkMsUUFBUSxrQkFBUixDQUF6Qjs7SUFFTUMsNkI7QUFDSix5Q0FBWUMsY0FBWixFQUE0QjtBQUFBOztBQUMxQixTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBYjtBQUFBLFVBQ0lDLGFBQWFSLG1CQUFtQlMsY0FBbkIsQ0FBa0MsS0FBS04sY0FBdkMsRUFBdURHLFdBQXZELENBRGpCOztBQUdBLFVBQUlFLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJELGlCQUFTLElBQVQ7O0FBRUEsaUJBQVE7QUFDTixjQUFJRyxRQUFRTCxRQUFRSyxLQUFwQjs7QUFFQSxjQUFJLENBQUNGLFdBQVdHLEtBQVgsQ0FBaUJQLEtBQWpCLEVBQXdCQyxPQUF4QixFQUFpQ0MsV0FBakMsQ0FBTCxFQUFvRDtBQUNsREQsb0JBQVFLLEtBQVIsR0FBZ0JBLEtBQWhCOztBQUVBLG1CQUFPSCxNQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9BLE1BQVA7QUFDRDs7OytCQUVpQkssTSxFQUFRO0FBQ3hCLFVBQUlDLGdDQUFnQyxJQUFwQztBQUFBLFVBQ0lDLGtDQUFrQyxZQUR0QztBQUFBLFVBRUlDLFVBQVVILE9BQU9JLEtBQVAsQ0FBYUYsK0JBQWIsQ0FGZDs7QUFJQSxVQUFJQyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlaLGlCQUFpQlksUUFBUSxDQUFSLENBQXJCOztBQUVBRix3Q0FBZ0MsSUFBSVgsNkJBQUosQ0FBa0NDLGNBQWxDLENBQWhDO0FBQ0Q7O0FBRUQsYUFBT1UsNkJBQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJoQiw2QkFBakIiLCJmaWxlIjoiemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb25OYW1lUGFydC5maW5kUHJvZHVjdGlvbih0aGlzLnByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvbnRleHQuaW5kZXg7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykpIHtcbiAgICAgICAgICBjb250ZXh0LmluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sKSB7XG4gICAgdmFyIHplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0ID0gbnVsbCxcbiAgICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1JlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gbWF0Y2hlc1sxXTtcblxuICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQgPSBuZXcgWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQocHJvZHVjdGlvbk5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0O1xuIl19