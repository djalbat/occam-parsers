'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionNamePart = function () {
  function ProductionNamePart(productionName, noWhitespace) {
    _classCallCheck(this, ProductionNamePart);

    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }

  _createClass(ProductionNamePart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodeOrNodes = null;

      var productions = context.getProductions(),
          production = ProductionNamePart.findProduction(this.productionName, productions);

      if (production !== null) {
        nodeOrNodes = production.parse(context, noWhitespace);
      }

      return nodeOrNodes;
    }
  }], [{
    key: 'findProduction',
    value: function findProduction(productionName, productions) {
      var name = productionName; ///

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
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var productionName = symbol,
          ///
      productionNamePart = new ProductionNamePart(productionName, noWhitespace);

      return productionNamePart;
    }
  }]);

  return ProductionNamePart;
}();

module.exports = ProductionNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsIm5vV2hpdGVzcGFjZSIsImNvbnRleHQiLCJub2RlT3JOb2RlcyIsInByb2R1Y3Rpb25zIiwiZ2V0UHJvZHVjdGlvbnMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJwYXJzZSIsIm5hbWUiLCJmb3VuZFByb2R1Y3Rpb24iLCJzb21lIiwiZ2V0TmFtZSIsInN5bWJvbCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInByb2R1Y3Rpb25OYW1lUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsa0I7QUFDSiw4QkFBWUMsY0FBWixFQUE0QkMsWUFBNUIsRUFBMEM7QUFBQTs7QUFDeEMsU0FBS0QsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNELFksRUFBYztBQUMzQkEscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUQyQixDQUN1Qjs7QUFFbEQsVUFBSUUsY0FBYyxJQUFsQjs7QUFFQSxVQUFNQyxjQUFjRixRQUFRRyxjQUFSLEVBQXBCO0FBQUEsVUFDTUMsYUFBYVAsbUJBQW1CUSxjQUFuQixDQUFrQyxLQUFLUCxjQUF2QyxFQUF1REksV0FBdkQsQ0FEbkI7O0FBR0EsVUFBSUUsZUFBZSxJQUFuQixFQUF5QjtBQUN2Qkgsc0JBQWNHLFdBQVdFLEtBQVgsQ0FBaUJOLE9BQWpCLEVBQTBCRCxZQUExQixDQUFkO0FBQ0Q7O0FBRUQsYUFBT0UsV0FBUDtBQUNEOzs7bUNBRXFCSCxjLEVBQWdCSSxXLEVBQWE7QUFDakQsVUFBTUssT0FBT1QsY0FBYixDQURpRCxDQUNuQjs7QUFFOUIsVUFBSVUsa0JBQWtCLElBQXRCOztBQUVBTixrQkFBWU8sSUFBWixDQUFpQixVQUFTTCxVQUFULEVBQXFCO0FBQ3BDLFlBQU1OLGlCQUFpQk0sV0FBV00sT0FBWCxFQUF2Qjs7QUFFQSxZQUFJSCxTQUFTVCxjQUFiLEVBQTZCO0FBQzNCVSw0QkFBa0JKLFVBQWxCOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBLFVBQU1BLGFBQWFJLGVBQW5COztBQUVBLGFBQU9KLFVBQVA7QUFDRDs7OytCQUVpQk8sTSxFQUFRQyxxQixFQUF1QmIsWSxFQUFjO0FBQzdELFVBQU1ELGlCQUFpQmEsTUFBdkI7QUFBQSxVQUFnQztBQUMxQkUsMkJBQXFCLElBQUloQixrQkFBSixDQUF1QkMsY0FBdkIsRUFBdUNDLFlBQXZDLENBRDNCOztBQUdBLGFBQU9jLGtCQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsa0JBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb25OYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnQge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IGNvbnRleHQuZ2V0UHJvZHVjdGlvbnMoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbk5hbWVQYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMucHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBub2RlT3JOb2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb2R1Y3Rpb25OYW1lOyAgLy8vXG4gICAgXG4gICAgbGV0IGZvdW5kUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBwcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBwcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICBmb3VuZFByb2R1Y3Rpb24gPSBwcm9kdWN0aW9uO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbiA9IGZvdW5kUHJvZHVjdGlvbjtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gc3ltYm9sLCAgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUGFydDtcbiJdfQ==