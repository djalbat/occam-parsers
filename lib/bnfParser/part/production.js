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
    value: function parse(input, context, productions) {
      var parsed = false,
          production = ProductionPart.findProduction(this.name, productions);

      if (production !== null) {
        parsed = production.parse(input, context, productions);
      }

      return parsed;
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
    value: function fromSymbol(symbol, specialSymbolsRegExp) {
      var name = symbol,
          ///
      productionPart = new ProductionPart(name);

      return productionPart;
    }
  }]);

  return ProductionPart;
}();

module.exports = ProductionPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb25QYXJ0IiwibmFtZSIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwicGFyc2VkIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwicGFyc2UiLCJmb3VuZFByb2R1Y3Rpb24iLCJzb21lIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwic3ltYm9sIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJwcm9kdWN0aW9uUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsYztBQUNKLDBCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBYjtBQUFBLFVBQ0lDLGFBQWFOLGVBQWVPLGNBQWYsQ0FBOEIsS0FBS04sSUFBbkMsRUFBeUNHLFdBQXpDLENBRGpCOztBQUdBLFVBQUlFLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJELGlCQUFTQyxXQUFXRSxLQUFYLENBQWlCTixLQUFqQixFQUF3QkMsT0FBeEIsRUFBaUNDLFdBQWpDLENBQVQ7QUFDRDs7QUFFRCxhQUFPQyxNQUFQO0FBQ0Q7OzttQ0FFcUJKLEksRUFBTUcsVyxFQUFhO0FBQ3ZDLFVBQUlLLGtCQUFrQixJQUF0Qjs7QUFFQUwsa0JBQVlNLElBQVosQ0FBaUIsVUFBU0osVUFBVCxFQUFxQjtBQUNwQyxZQUFJSyxpQkFBaUJMLFdBQVdNLE9BQVgsRUFBckI7O0FBRUEsWUFBSVgsU0FBU1UsY0FBYixFQUE2QjtBQUMzQkYsNEJBQWtCSCxVQUFsQjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FWRDs7QUFZQSxVQUFJQSxhQUFhRyxlQUFqQjs7QUFFQSxhQUFPSCxVQUFQO0FBQ0Q7OzsrQkFFaUJPLE0sRUFBUUMsb0IsRUFBc0I7QUFDOUMsVUFBSWIsT0FBT1ksTUFBWDtBQUFBLFVBQW9CO0FBQ2hCRSx1QkFBaUIsSUFBSWYsY0FBSixDQUFtQkMsSUFBbkIsQ0FEckI7O0FBR0EsYUFBT2MsY0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmpCLGNBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFByb2R1Y3Rpb25QYXJ0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb25QYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMubmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIHBhcnNlZCA9IHByb2R1Y3Rpb24ucGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZpbmRQcm9kdWN0aW9uKG5hbWUsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIGZvdW5kUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBwcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgZm91bmRQcm9kdWN0aW9uID0gcHJvZHVjdGlvbjtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBwcm9kdWN0aW9uID0gZm91bmRQcm9kdWN0aW9uO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNwZWNpYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIG5hbWUgPSBzeW1ib2wsICAvLy9cbiAgICAgICAgcHJvZHVjdGlvblBhcnQgPSBuZXcgUHJvZHVjdGlvblBhcnQobmFtZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uUGFydDtcbiJdfQ==