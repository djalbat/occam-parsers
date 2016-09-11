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
    key: 'fromSymbols',
    value: function fromSymbols(symbols, Parts) {
      var zeroOrMoreProductionNamesPart = null,
          firstSymbol = first(symbols),
          thirdSymbol = third(symbols),
          fourthSymbol = fourth(symbols);

      if (firstSymbol === '(' && thirdSymbol === ')' && fourthSymbol === '*') {
        var secondSymbol = second(symbols),
            productionName = secondSymbol;

        symbols.shift();
        symbols.shift();
        symbols.shift();
        symbols.shift();

        zeroOrMoreProductionNamesPart = new ZeroOrMoreProductionNamesPart(productionName);
      }

      return zeroOrMoreProductionNamesPart;
    }
  }]);

  return ZeroOrMoreProductionNamesPart;
}();

module.exports = ZeroOrMoreProductionNamesPart;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
function fourth(array) {
  return array[3];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb25OYW1lUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydCIsInByb2R1Y3Rpb25OYW1lIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJpbmRleCIsInBhcnNlIiwic3ltYm9scyIsIlBhcnRzIiwiemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQiLCJmaXJzdFN5bWJvbCIsImZpcnN0IiwidGhpcmRTeW1ib2wiLCJ0aGlyZCIsImZvdXJ0aFN5bWJvbCIsImZvdXJ0aCIsInNlY29uZFN5bWJvbCIsInNlY29uZCIsInNoaWZ0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEscUJBQXFCQyxRQUFRLGtCQUFSLENBQXpCOztJQUVNQyw2QjtBQUNKLHlDQUFZQyxjQUFaLEVBQTRCO0FBQUE7O0FBQzFCLFNBQUtBLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsYUFBYVAsbUJBQW1CUSxjQUFuQixDQUFrQyxLQUFLTCxjQUF2QyxFQUF1REcsV0FBdkQsQ0FBakI7O0FBRUEsZUFBUTtBQUNOLFlBQUlHLFFBQVFKLFFBQVFJLEtBQXBCOztBQUVBLFlBQUksQ0FBQ0YsV0FBV0csS0FBWCxDQUFpQk4sS0FBakIsRUFBd0JDLE9BQXhCLEVBQWlDQyxXQUFqQyxDQUFMLEVBQW9EO0FBQ2xERCxrQkFBUUksS0FBUixHQUFnQkEsS0FBaEI7O0FBRUEsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRjs7O2dDQUVrQkUsTyxFQUFTQyxLLEVBQU87QUFDakMsVUFBSUMsZ0NBQWdDLElBQXBDO0FBQUEsVUFDSUMsY0FBY0MsTUFBTUosT0FBTixDQURsQjtBQUFBLFVBRUlLLGNBQWNDLE1BQU1OLE9BQU4sQ0FGbEI7QUFBQSxVQUdJTyxlQUFlQyxPQUFPUixPQUFQLENBSG5COztBQUtBLFVBQU9HLGdCQUFnQixHQUFqQixJQUNDRSxnQkFBZ0IsR0FEakIsSUFFQ0UsaUJBQWlCLEdBRnhCLEVBRWdDO0FBQzlCLFlBQUlFLGVBQWVDLE9BQU9WLE9BQVAsQ0FBbkI7QUFBQSxZQUNJUixpQkFBaUJpQixZQURyQjs7QUFHQVQsZ0JBQVFXLEtBQVI7QUFDQVgsZ0JBQVFXLEtBQVI7QUFDQVgsZ0JBQVFXLEtBQVI7QUFDQVgsZ0JBQVFXLEtBQVI7O0FBRUFULHdDQUFnQyxJQUFJWCw2QkFBSixDQUFrQ0MsY0FBbEMsQ0FBaEM7QUFDRDs7QUFFRCxhQUFPVSw2QkFBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQnRCLDZCQUFqQjs7QUFFQSxTQUFTYSxLQUFULENBQWVVLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTSixNQUFULENBQWdCSSxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzNDLFNBQVNSLEtBQVQsQ0FBZVEsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNOLE1BQVQsQ0FBZ0JNLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbk5hbWVQYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMucHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICAgIGZvcig7Oykge1xuICAgICAgdmFyIGluZGV4ID0gY29udGV4dC5pbmRleDtcblxuICAgICAgaWYgKCFwcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykpIHtcbiAgICAgICAgY29udGV4dC5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2xzKHN5bWJvbHMsIFBhcnRzKSB7XG4gICAgdmFyIHplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0ID0gbnVsbCxcbiAgICAgICAgZmlyc3RTeW1ib2wgPSBmaXJzdChzeW1ib2xzKSxcbiAgICAgICAgdGhpcmRTeW1ib2wgPSB0aGlyZChzeW1ib2xzKSxcbiAgICAgICAgZm91cnRoU3ltYm9sID0gZm91cnRoKHN5bWJvbHMpO1xuXG4gICAgaWYgKCAgKGZpcnN0U3ltYm9sID09PSAnKCcpXG4gICAgICAgJiYgKHRoaXJkU3ltYm9sID09PSAnKScpXG4gICAgICAgJiYgKGZvdXJ0aFN5bWJvbCA9PT0gJyonKSAgKSB7XG4gICAgICB2YXIgc2Vjb25kU3ltYm9sID0gc2Vjb25kKHN5bWJvbHMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gc2Vjb25kU3ltYm9sO1xuXG4gICAgICBzeW1ib2xzLnNoaWZ0KCk7XG4gICAgICBzeW1ib2xzLnNoaWZ0KCk7XG4gICAgICBzeW1ib2xzLnNoaWZ0KCk7XG4gICAgICBzeW1ib2xzLnNoaWZ0KCk7XG5cbiAgICAgIHplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0KHByb2R1Y3Rpb25OYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cbiJdfQ==