'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionNamePart = function () {
  function ProductionNamePart(productionName) {
    _classCallCheck(this, ProductionNamePart);

    this.productionName = productionName;
  }

  _createClass(ProductionNamePart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = false,
          production = ProductionNamePart.findProduction(this.productionName, productions);

      if (production !== null) {
        parsed = production.parse(input, context, productions);
      }

      return parsed;
    }
  }], [{
    key: 'findProduction',
    value: function findProduction(productionName, productions) {
      var foundProduction = null;

      productions.some(function (production) {
        var name = production.getName();

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
    value: function fromSymbol(symbol) {
      var productionName = symbol,
          ///
      productionNamePart = new ProductionNamePart(productionName);

      return productionNamePart;
    }
  }]);

  return ProductionNamePart;
}();

module.exports = ProductionNamePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwicGFyc2VkIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwicGFyc2UiLCJmb3VuZFByb2R1Y3Rpb24iLCJzb21lIiwibmFtZSIsImdldE5hbWUiLCJzeW1ib2wiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGtCO0FBQ0osOEJBQVlDLGNBQVosRUFBNEI7QUFBQTs7QUFDMUIsU0FBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQWI7QUFBQSxVQUNJQyxhQUFhTixtQkFBbUJPLGNBQW5CLENBQWtDLEtBQUtOLGNBQXZDLEVBQXVERyxXQUF2RCxDQURqQjs7QUFHQSxVQUFJRSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCRCxpQkFBU0MsV0FBV0UsS0FBWCxDQUFpQk4sS0FBakIsRUFBd0JDLE9BQXhCLEVBQWlDQyxXQUFqQyxDQUFUO0FBQ0Q7O0FBRUQsYUFBT0MsTUFBUDtBQUNEOzs7bUNBRXFCSixjLEVBQWdCRyxXLEVBQWE7QUFDakQsVUFBSUssa0JBQWtCLElBQXRCOztBQUVBTCxrQkFBWU0sSUFBWixDQUFpQixVQUFTSixVQUFULEVBQXFCO0FBQ3BDLFlBQUlLLE9BQU9MLFdBQVdNLE9BQVgsRUFBWDs7QUFFQSxZQUFJRCxTQUFTVixjQUFiLEVBQTZCO0FBQzNCUSw0QkFBa0JILFVBQWxCOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBLFVBQUlBLGFBQWFHLGVBQWpCOztBQUVBLGFBQU9ILFVBQVA7QUFDRDs7OytCQUVpQk8sTSxFQUFRO0FBQ3hCLFVBQUlaLGlCQUFpQlksTUFBckI7QUFBQSxVQUE4QjtBQUMxQkMsMkJBQXFCLElBQUlkLGtCQUFKLENBQXVCQyxjQUF2QixDQUR6Qjs7QUFHQSxhQUFPYSxrQkFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmhCLGtCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVQYXJ0IHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb25OYW1lUGFydC5maW5kUHJvZHVjdGlvbih0aGlzLnByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VkID0gcHJvZHVjdGlvbi5wYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIGZvdW5kUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBwcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICAgIHZhciBuYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBwcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICBmb3VuZFByb2R1Y3Rpb24gPSBwcm9kdWN0aW9uO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHByb2R1Y3Rpb24gPSBmb3VuZFByb2R1Y3Rpb247XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCkge1xuICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHN5bWJvbCwgIC8vL1xuICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZVBhcnQ7XG4iXX0=