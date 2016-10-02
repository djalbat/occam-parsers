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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Byb2R1Y3Rpb24uanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvblBhcnQiLCJuYW1lIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJwYXJzZSIsImZvdW5kUHJvZHVjdGlvbiIsInNvbWUiLCJwcm9kdWN0aW9uTmFtZSIsImdldE5hbWUiLCJzeW1ib2wiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cCIsInByb2R1Y3Rpb25QYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxjO0FBQ0osMEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhO0FBQzFCLFVBQUlDLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLGFBQWFMLGVBQWVNLGNBQWYsQ0FBOEIsS0FBS0wsSUFBbkMsRUFBeUNFLFdBQXpDLENBRGpCOztBQUdBLFVBQUlFLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJELGdCQUFRQyxXQUFXRSxLQUFYLENBQWlCTCxPQUFqQixFQUEwQkMsV0FBMUIsQ0FBUjtBQUNEOztBQUVELGFBQU9DLEtBQVA7QUFDRDs7O21DQUVxQkgsSSxFQUFNRSxXLEVBQWE7QUFDdkMsVUFBSUssa0JBQWtCLElBQXRCOztBQUVBTCxrQkFBWU0sSUFBWixDQUFpQixVQUFTSixVQUFULEVBQXFCO0FBQ3BDLFlBQUlLLGlCQUFpQkwsV0FBV00sT0FBWCxFQUFyQjs7QUFFQSxZQUFJVixTQUFTUyxjQUFiLEVBQTZCO0FBQzNCRiw0QkFBa0JILFVBQWxCOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBLFVBQUlBLGFBQWFHLGVBQWpCOztBQUVBLGFBQU9ILFVBQVA7QUFDRDs7OytCQUVpQk8sTSxFQUFRQyxvQixFQUFzQjtBQUM5QyxVQUFJWixPQUFPVyxNQUFYO0FBQUEsVUFBb0I7QUFDaEJFLHVCQUFpQixJQUFJZCxjQUFKLENBQW1CQyxJQUFuQixDQURyQjs7QUFHQSxhQUFPYSxjQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCaEIsY0FBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUHJvZHVjdGlvblBhcnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvblBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5uYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZmluZFByb2R1Y3Rpb24obmFtZSwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgZm91bmRQcm9kdWN0aW9uID0gbnVsbDtcblxuICAgIHByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbikge1xuICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBwcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICBmb3VuZFByb2R1Y3Rpb24gPSBwcm9kdWN0aW9uO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHByb2R1Y3Rpb24gPSBmb3VuZFByb2R1Y3Rpb247XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc3BlY2lhbFN5bWJvbHNSZWdFeHApIHtcbiAgICB2YXIgbmFtZSA9IHN5bWJvbCwgIC8vL1xuICAgICAgICBwcm9kdWN0aW9uUGFydCA9IG5ldyBQcm9kdWN0aW9uUGFydChuYW1lKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25QYXJ0O1xuIl19