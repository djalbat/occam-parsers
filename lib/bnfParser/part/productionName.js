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
    key: 'fromSymbol',
    value: function fromSymbol(symbol, Parts) {
      var productionName = symbol,
          ///
      productionNamePart = new ProductionNamePart(productionName);

      return productionNamePart;
    }
  }]);

  return ProductionNamePart;
}();

module.exports = ProductionNamePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwicGFyc2VkIiwicGFyc2UiLCJmb3VuZFByb2R1Y3Rpb24iLCJ1bmRlZmluZWQiLCJzb21lIiwibmFtZSIsImdldE5hbWUiLCJzeW1ib2wiLCJQYXJ0cyIsInByb2R1Y3Rpb25OYW1lUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsa0I7QUFDSiw4QkFBWUMsY0FBWixFQUE0QjtBQUFBOztBQUMxQixTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLGFBQWFMLG1CQUFtQk0sY0FBbkIsQ0FBa0MsS0FBS0wsY0FBdkMsRUFBdURHLFdBQXZELENBQWpCO0FBQUEsVUFDSUcsU0FBU0YsV0FBV0csS0FBWCxDQUFpQk4sS0FBakIsRUFBd0JDLE9BQXhCLEVBQWlDQyxXQUFqQyxDQURiOztBQUdBLGFBQU9HLE1BQVA7QUFDRDs7O21DQUVxQk4sYyxFQUFnQkcsVyxFQUFhO0FBQ2pELFVBQUlLLGtCQUFrQkMsU0FBdEI7O0FBRUFOLGtCQUFZTyxJQUFaLENBQWlCLFVBQVNOLFVBQVQsRUFBcUI7QUFDcEMsWUFBSU8sT0FBT1AsV0FBV1EsT0FBWCxFQUFYOztBQUVBLFlBQUlELFNBQVNYLGNBQWIsRUFBNkI7QUFDM0JRLDRCQUFrQkosVUFBbEI7O0FBRUEsaUJBQU8sSUFBUDtBQUNELFNBSkQsTUFJTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BVkQ7O0FBWUEsVUFBSUEsYUFBYUksZUFBakI7O0FBRUEsYUFBT0osVUFBUDtBQUNEOzs7K0JBRWlCUyxNLEVBQVFDLEssRUFBTztBQUMvQixVQUFJZCxpQkFBaUJhLE1BQXJCO0FBQUEsVUFBOEI7QUFDMUJFLDJCQUFxQixJQUFJaEIsa0JBQUosQ0FBdUJDLGNBQXZCLENBRHpCOztBQUdBLGFBQU9lLGtCQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsa0JBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb25OYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnQge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uTmFtZVBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5wcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpLFxuICAgICAgICBwYXJzZWQgPSBwcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBmb3VuZFByb2R1Y3Rpb24gPSB1bmRlZmluZWQ7XG5cbiAgICBwcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICAgIHZhciBuYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBwcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICBmb3VuZFByb2R1Y3Rpb24gPSBwcm9kdWN0aW9uO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHByb2R1Y3Rpb24gPSBmb3VuZFByb2R1Y3Rpb247XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgUGFydHMpIHtcbiAgICB2YXIgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2wsICAvLy9cbiAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJ0O1xuIl19