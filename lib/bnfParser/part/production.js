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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb25QYXJ0IiwibmFtZSIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwicGFyc2VkIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwicGFyc2UiLCJmb3VuZFByb2R1Y3Rpb24iLCJzb21lIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwicHJvZHVjdGlvblBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGM7QUFDSiwwQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQWI7QUFBQSxVQUNJQyxhQUFhTixlQUFlTyxjQUFmLENBQThCLEtBQUtOLElBQW5DLEVBQXlDRyxXQUF6QyxDQURqQjs7QUFHQSxVQUFJRSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCRCxpQkFBU0MsV0FBV0UsS0FBWCxDQUFpQk4sS0FBakIsRUFBd0JDLE9BQXhCLEVBQWlDQyxXQUFqQyxDQUFUO0FBQ0Q7O0FBRUQsYUFBT0MsTUFBUDtBQUNEOzs7bUNBRXFCSixJLEVBQU1HLFcsRUFBYTtBQUN2QyxVQUFJSyxrQkFBa0IsSUFBdEI7O0FBRUFMLGtCQUFZTSxJQUFaLENBQWlCLFVBQVNKLFVBQVQsRUFBcUI7QUFDcEMsWUFBSUssaUJBQWlCTCxXQUFXTSxPQUFYLEVBQXJCOztBQUVBLFlBQUlYLFNBQVNVLGNBQWIsRUFBNkI7QUFDM0JGLDRCQUFrQkgsVUFBbEI7O0FBRUEsaUJBQU8sSUFBUDtBQUNELFNBSkQsTUFJTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BVkQ7O0FBWUEsVUFBSUEsYUFBYUcsZUFBakI7O0FBRUEsYUFBT0gsVUFBUDtBQUNEOzs7K0JBRWlCTyxNLEVBQVFDLHFCLEVBQXVCO0FBQy9DLFVBQUliLE9BQU9ZLE1BQVg7QUFBQSxVQUFvQjtBQUNoQkUsdUJBQWlCLElBQUlmLGNBQUosQ0FBbUJDLElBQW5CLENBRHJCOztBQUdBLGFBQU9jLGNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJqQixjQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQcm9kdWN0aW9uUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIFxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VkID0gZmFsc2UsXG4gICAgICAgIHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uUGFydC5maW5kUHJvZHVjdGlvbih0aGlzLm5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBwYXJzZWQgPSBwcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUHJvZHVjdGlvbihuYW1lLCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBmb3VuZFByb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgcHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgICB2YXIgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgICAgIGZvdW5kUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb247XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcHJvZHVjdGlvbiA9IGZvdW5kUHJvZHVjdGlvbjtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHApIHtcbiAgICB2YXIgbmFtZSA9IHN5bWJvbCwgIC8vL1xuICAgICAgICBwcm9kdWN0aW9uUGFydCA9IG5ldyBQcm9kdWN0aW9uUGFydChuYW1lKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25QYXJ0O1xuIl19