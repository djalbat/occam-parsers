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
      var production = ProductionNamePart.findProduction(this.productionName, productions),
          parsed = production.parse(input, context, productions);

      return parsed;
    }
  }], [{
    key: 'findProduction',
    value: function findProduction(productionName, productions) {
      var foundProduction = undefined;

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
    key: 'fromSymbols',
    value: function fromSymbols(symbols, Parts) {
      var symbol = symbols.shift(),
          productionName = symbol,
          ///
      productionNamePart = new ProductionNamePart(productionName);

      return productionNamePart;
    }
  }]);

  return ProductionNamePart;
}();

module.exports = ProductionNamePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwicGFyc2VkIiwicGFyc2UiLCJmb3VuZFByb2R1Y3Rpb24iLCJ1bmRlZmluZWQiLCJzb21lIiwibmFtZSIsImdldE5hbWUiLCJzeW1ib2xzIiwiUGFydHMiLCJzeW1ib2wiLCJzaGlmdCIsInByb2R1Y3Rpb25OYW1lUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsa0I7QUFDSiw4QkFBWUMsY0FBWixFQUE0QjtBQUFBOztBQUMxQixTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLGFBQWFMLG1CQUFtQk0sY0FBbkIsQ0FBa0MsS0FBS0wsY0FBdkMsRUFBdURHLFdBQXZELENBQWpCO0FBQUEsVUFDSUcsU0FBU0YsV0FBV0csS0FBWCxDQUFpQk4sS0FBakIsRUFBd0JDLE9BQXhCLEVBQWlDQyxXQUFqQyxDQURiOztBQUdBLGFBQU9HLE1BQVA7QUFDRDs7O21DQUVxQk4sYyxFQUFnQkcsVyxFQUFhO0FBQ2pELFVBQUlLLGtCQUFrQkMsU0FBdEI7O0FBRUFOLGtCQUFZTyxJQUFaLENBQWlCLFVBQVNOLFVBQVQsRUFBcUI7QUFDcEMsWUFBSU8sT0FBT1AsV0FBV1EsT0FBWCxFQUFYOztBQUVBLFlBQUlELFNBQVNYLGNBQWIsRUFBNkI7QUFDM0JRLDRCQUFrQkosVUFBbEI7O0FBRUEsaUJBQU8sSUFBUDtBQUNELFNBSkQsTUFJTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BVkQ7O0FBWUEsVUFBSUEsYUFBYUksZUFBakI7O0FBRUEsYUFBT0osVUFBUDtBQUNEOzs7Z0NBRWtCUyxPLEVBQVNDLEssRUFBTztBQUNqQyxVQUFJQyxTQUFTRixRQUFRRyxLQUFSLEVBQWI7QUFBQSxVQUNJaEIsaUJBQWlCZSxNQURyQjtBQUFBLFVBQzhCO0FBQzFCRSwyQkFBcUIsSUFBSWxCLGtCQUFKLENBQXVCQyxjQUF2QixDQUZ6Qjs7QUFJQSxhQUFPaUIsa0JBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJwQixrQkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lUGFydCB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb25OYW1lUGFydC5maW5kUHJvZHVjdGlvbih0aGlzLnByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyksXG4gICAgICAgIHBhcnNlZCA9IHByb2R1Y3Rpb24ucGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIGZvdW5kUHJvZHVjdGlvbiA9IHVuZGVmaW5lZDtcblxuICAgIHByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbikge1xuICAgICAgdmFyIG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgICAgIGZvdW5kUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb247XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcHJvZHVjdGlvbiA9IGZvdW5kUHJvZHVjdGlvbjtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xzKHN5bWJvbHMsIFBhcnRzKSB7XG4gICAgdmFyIHN5bWJvbCA9IHN5bWJvbHMuc2hpZnQoKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2wsICAvLy9cbiAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJ0O1xuIl19