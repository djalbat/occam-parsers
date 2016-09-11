'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ZeroOrMoreProductionNamesPart = function () {
  function ZeroOrMoreProductionNamesPart(productionName) {
    _classCallCheck(this, ZeroOrMoreProductionNamesPart);

    this.productionName = productionName;
  }

  _createClass(ZeroOrMoreProductionNamesPart, null, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzLmpzIl0sIm5hbWVzIjpbIlplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJzeW1ib2xzIiwiUGFydHMiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydCIsImZpcnN0U3ltYm9sIiwiZmlyc3QiLCJ0aGlyZFN5bWJvbCIsInRoaXJkIiwiZm91cnRoU3ltYm9sIiwiZm91cnRoIiwic2Vjb25kU3ltYm9sIiwic2Vjb25kIiwic2hpZnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsNkI7QUFDSix5Q0FBWUMsY0FBWixFQUE0QjtBQUFBOztBQUMxQixTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNEOzs7O2dDQUVrQkMsTyxFQUFTQyxLLEVBQU87QUFDakMsVUFBSUMsZ0NBQWdDLElBQXBDO0FBQUEsVUFDSUMsY0FBY0MsTUFBTUosT0FBTixDQURsQjtBQUFBLFVBRUlLLGNBQWNDLE1BQU1OLE9BQU4sQ0FGbEI7QUFBQSxVQUdJTyxlQUFlQyxPQUFPUixPQUFQLENBSG5COztBQUtBLFVBQU9HLGdCQUFnQixHQUFqQixJQUNDRSxnQkFBZ0IsR0FEakIsSUFFQ0UsaUJBQWlCLEdBRnhCLEVBRWdDO0FBQzlCLFlBQUlFLGVBQWVDLE9BQU9WLE9BQVAsQ0FBbkI7QUFBQSxZQUNJRCxpQkFBaUJVLFlBRHJCOztBQUdBVCxnQkFBUVcsS0FBUjtBQUNBWCxnQkFBUVcsS0FBUjtBQUNBWCxnQkFBUVcsS0FBUjtBQUNBWCxnQkFBUVcsS0FBUjs7QUFFQVQsd0NBQWdDLElBQUlKLDZCQUFKLENBQWtDQyxjQUFsQyxDQUFoQztBQUNEOztBQUVELGFBQU9HLDZCQUFQO0FBQ0Q7Ozs7OztBQUdIVSxPQUFPQyxPQUFQLEdBQWlCZiw2QkFBakI7O0FBRUEsU0FBU00sS0FBVCxDQUFlVSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0osTUFBVCxDQUFnQkksS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTUixLQUFULENBQWVRLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTTixNQUFULENBQWdCTSxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6Inplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0IHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbHMoc3ltYm9scywgUGFydHMpIHtcbiAgICB2YXIgemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQgPSBudWxsLFxuICAgICAgICBmaXJzdFN5bWJvbCA9IGZpcnN0KHN5bWJvbHMpLFxuICAgICAgICB0aGlyZFN5bWJvbCA9IHRoaXJkKHN5bWJvbHMpLFxuICAgICAgICBmb3VydGhTeW1ib2wgPSBmb3VydGgoc3ltYm9scyk7XG5cbiAgICBpZiAoICAoZmlyc3RTeW1ib2wgPT09ICcoJylcbiAgICAgICAmJiAodGhpcmRTeW1ib2wgPT09ICcpJylcbiAgICAgICAmJiAoZm91cnRoU3ltYm9sID09PSAnKicpICApIHtcbiAgICAgIHZhciBzZWNvbmRTeW1ib2wgPSBzZWNvbmQoc3ltYm9scyksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBzZWNvbmRTeW1ib2w7XG5cbiAgICAgIHN5bWJvbHMuc2hpZnQoKTtcbiAgICAgIHN5bWJvbHMuc2hpZnQoKTtcbiAgICAgIHN5bWJvbHMuc2hpZnQoKTtcbiAgICAgIHN5bWJvbHMuc2hpZnQoKTtcblxuICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQgPSBuZXcgWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQocHJvZHVjdGlvbk5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuIl19