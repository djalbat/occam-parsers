'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionPart = function () {
  function ProductionPart(name) {
    _classCallCheck(this, ProductionPart);

    this.name = name;
  }

  _createClass(ProductionPart, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = null,
          production = ProductionPart.findProduction(this.name, productions);

      if (production !== null) {
        nodes = production.parse(context, productions);
      }

      return nodes;
    }
  }], [{
    key: 'findProduction',
    value: function findProduction(name, productions) {
      var foundProduction = null;

      productions.some(function (production) {
        var productionName = production.getName();

        if (name === productionName) {
          foundProduction = production;

          return true;
        } else {
          return false;
        }
      });

      var production = foundProduction;

      return production;
    }
  }, {
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp) {
      var name = symbol,
          ///
      productionPart = new ProductionPart(name);

      return productionPart;
    }
  }]);

  return ProductionPart;
}();

module.exports = ProductionPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Byb2R1Y3Rpb24uanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvblBhcnQiLCJuYW1lIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJwYXJzZSIsImZvdW5kUHJvZHVjdGlvbiIsInNvbWUiLCJwcm9kdWN0aW9uTmFtZSIsImdldE5hbWUiLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJwcm9kdWN0aW9uUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsYztBQUNKLDBCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYTtBQUMxQixVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhTCxlQUFlTSxjQUFmLENBQThCLEtBQUtMLElBQW5DLEVBQXlDRSxXQUF6QyxDQURqQjs7QUFHQSxVQUFJRSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCRCxnQkFBUUMsV0FBV0UsS0FBWCxDQUFpQkwsT0FBakIsRUFBMEJDLFdBQTFCLENBQVI7QUFDRDs7QUFFRCxhQUFPQyxLQUFQO0FBQ0Q7OzttQ0FFcUJILEksRUFBTUUsVyxFQUFhO0FBQ3ZDLFVBQUlLLGtCQUFrQixJQUF0Qjs7QUFFQUwsa0JBQVlNLElBQVosQ0FBaUIsVUFBU0osVUFBVCxFQUFxQjtBQUNwQyxZQUFJSyxpQkFBaUJMLFdBQVdNLE9BQVgsRUFBckI7O0FBRUEsWUFBSVYsU0FBU1MsY0FBYixFQUE2QjtBQUMzQkYsNEJBQWtCSCxVQUFsQjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FWRDs7QUFZQSxVQUFJQSxhQUFhRyxlQUFqQjs7QUFFQSxhQUFPSCxVQUFQO0FBQ0Q7OzsrQkFFaUJPLE0sRUFBUUMscUIsRUFBdUI7QUFDL0MsVUFBSVosT0FBT1csTUFBWDtBQUFBLFVBQW9CO0FBQ2hCRSx1QkFBaUIsSUFBSWQsY0FBSixDQUFtQkMsSUFBbkIsQ0FEckI7O0FBR0EsYUFBT2EsY0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmhCLGNBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFByb2R1Y3Rpb25QYXJ0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb25QYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMubmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZpbmRQcm9kdWN0aW9uKG5hbWUsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIGZvdW5kUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBwcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgZm91bmRQcm9kdWN0aW9uID0gcHJvZHVjdGlvbjtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBwcm9kdWN0aW9uID0gZm91bmRQcm9kdWN0aW9uO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCkge1xuICAgIHZhciBuYW1lID0gc3ltYm9sLCAgLy8vXG4gICAgICAgIHByb2R1Y3Rpb25QYXJ0ID0gbmV3IFByb2R1Y3Rpb25QYXJ0KG5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25QYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvblBhcnQ7XG4iXX0=