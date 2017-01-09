'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionNamePart = function () {
  function ProductionNamePart(name, noWhitespace) {
    _classCallCheck(this, ProductionNamePart);

    this.name = name;
    this.noWhitespace = noWhitespace;
  }

  _createClass(ProductionNamePart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodes = null,
          production = ProductionNamePart.findProduction(this.name, productions);

      if (production !== null) {
        nodes = production.parse(context, productions, noWhitespace);
      }

      return nodes;
    }
  }], [{
    key: 'findProduction',
    value: function findProduction(name, productions) {
      var foundProduction = null;

      productions.some(function (production) {
        var productionNamePart = production.getName();

        if (name === productionNamePart) {
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
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var name = symbol,
          ///
      productionNamePart = new ProductionNamePart(name, noWhitespace);

      return productionNamePart;
    }
  }]);

  return ProductionNamePart;
}();

module.exports = ProductionNamePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uTmFtZVBhcnQiLCJuYW1lIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJwYXJzZSIsImZvdW5kUHJvZHVjdGlvbiIsInNvbWUiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJnZXROYW1lIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxrQjtBQUNKLDhCQUFZQyxJQUFaLEVBQWtCQyxZQUFsQixFQUFnQztBQUFBOztBQUM5QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUYsWSxFQUFjO0FBQ3hDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRHdDLENBQ1U7O0FBRWxELFVBQUlHLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLGFBQWFOLG1CQUFtQk8sY0FBbkIsQ0FBa0MsS0FBS04sSUFBdkMsRUFBNkNHLFdBQTdDLENBRGpCOztBQUdBLFVBQUlFLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJELGdCQUFRQyxXQUFXRSxLQUFYLENBQWlCTCxPQUFqQixFQUEwQkMsV0FBMUIsRUFBdUNGLFlBQXZDLENBQVI7QUFDRDs7QUFFRCxhQUFPRyxLQUFQO0FBQ0Q7OzttQ0FFcUJKLEksRUFBTUcsVyxFQUFhO0FBQ3ZDLFVBQUlLLGtCQUFrQixJQUF0Qjs7QUFFQUwsa0JBQVlNLElBQVosQ0FBaUIsVUFBU0osVUFBVCxFQUFxQjtBQUNwQyxZQUFJSyxxQkFBcUJMLFdBQVdNLE9BQVgsRUFBekI7O0FBRUEsWUFBSVgsU0FBU1Usa0JBQWIsRUFBaUM7QUFDL0JGLDRCQUFrQkgsVUFBbEI7O0FBRUEsaUJBQU8sSUFBUDtBQUNELFNBSkQsTUFJTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BVkQ7O0FBWUEsVUFBSUEsYUFBYUcsZUFBakI7O0FBRUEsYUFBT0gsVUFBUDtBQUNEOzs7K0JBRWlCTyxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1QmIsWSxFQUFjO0FBQ3BGLFVBQUlELE9BQU9ZLE1BQVg7QUFBQSxVQUFvQjtBQUNoQkYsMkJBQXFCLElBQUlYLGtCQUFKLENBQXVCQyxJQUF2QixFQUE2QkMsWUFBN0IsQ0FEekI7O0FBR0EsYUFBT1Msa0JBQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJqQixrQkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb25OYW1lUGFydC5maW5kUHJvZHVjdGlvbih0aGlzLm5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBub2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZpbmRQcm9kdWN0aW9uKG5hbWUsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIGZvdW5kUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBwcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICAgIHZhciBwcm9kdWN0aW9uTmFtZVBhcnQgPSBwcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IHByb2R1Y3Rpb25OYW1lUGFydCkge1xuICAgICAgICBmb3VuZFByb2R1Y3Rpb24gPSBwcm9kdWN0aW9uO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHByb2R1Y3Rpb24gPSBmb3VuZFByb2R1Y3Rpb247XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBuYW1lID0gc3ltYm9sLCAgLy8vXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQobmFtZSwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZVBhcnQ7XG4iXX0=