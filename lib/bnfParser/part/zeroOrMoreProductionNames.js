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
      var production = ProductionNamePart.findProduction(this.productionName, productions);

      for (;;) {
        var index = context.index;

        if (!production.parse(input, context, productions)) {
          context.index = index;

          return true;
        }
      }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb25OYW1lUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydCIsInByb2R1Y3Rpb25OYW1lIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJpbmRleCIsInBhcnNlIiwic3ltYm9sIiwiemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHFCQUFxQkMsUUFBUSxrQkFBUixDQUF6Qjs7SUFFTUMsNkI7QUFDSix5Q0FBWUMsY0FBWixFQUE0QjtBQUFBOztBQUMxQixTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLGFBQWFQLG1CQUFtQlEsY0FBbkIsQ0FBa0MsS0FBS0wsY0FBdkMsRUFBdURHLFdBQXZELENBQWpCOztBQUVBLGVBQVE7QUFDTixZQUFJRyxRQUFRSixRQUFRSSxLQUFwQjs7QUFFQSxZQUFJLENBQUNGLFdBQVdHLEtBQVgsQ0FBaUJOLEtBQWpCLEVBQXdCQyxPQUF4QixFQUFpQ0MsV0FBakMsQ0FBTCxFQUFvRDtBQUNsREQsa0JBQVFJLEtBQVIsR0FBZ0JBLEtBQWhCOztBQUVBLGlCQUFPLElBQVA7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFaUJFLE0sRUFBUTtBQUN4QixVQUFJQyxnQ0FBZ0MsSUFBcEM7QUFBQSxVQUNJQyxrQ0FBa0MsWUFEdEM7QUFBQSxVQUVJQyxVQUFVSCxPQUFPSSxLQUFQLENBQWFGLCtCQUFiLENBRmQ7O0FBSUEsVUFBSUMsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJWCxpQkFBaUJXLFFBQVEsQ0FBUixDQUFyQjs7QUFFQUYsd0NBQWdDLElBQUlWLDZCQUFKLENBQWtDQyxjQUFsQyxDQUFoQztBQUNEOztBQUVELGFBQU9TLDZCQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCZiw2QkFBakIiLCJmaWxlIjoiemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbk5hbWVQYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMucHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICAgIGZvcig7Oykge1xuICAgICAgdmFyIGluZGV4ID0gY29udGV4dC5pbmRleDtcblxuICAgICAgaWYgKCFwcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykpIHtcbiAgICAgICAgY29udGV4dC5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sKSB7XG4gICAgdmFyIHplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0ID0gbnVsbCxcbiAgICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1JlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gbWF0Y2hlc1sxXTtcblxuICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQgPSBuZXcgWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQocHJvZHVjdGlvbk5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0O1xuIl19