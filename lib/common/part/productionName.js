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
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive(productionName) {
      var leftRecursive = this.productionName === productionName;

      return leftRecursive;
    }
  }, {
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
  }, {
    key: 'toString',
    value: function toString() {
      var string = this.productionName;

      return string;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsIm5vV2hpdGVzcGFjZSIsImxlZnRSZWN1cnNpdmUiLCJjb250ZXh0Iiwibm9kZU9yTm9kZXMiLCJwcm9kdWN0aW9ucyIsImdldFByb2R1Y3Rpb25zIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwicGFyc2UiLCJzdHJpbmciLCJuYW1lIiwiZm91bmRQcm9kdWN0aW9uIiwic29tZSIsImdldE5hbWUiLCJzeW1ib2wiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGtCO0FBQ0osOEJBQVlDLGNBQVosRUFBNEJDLFlBQTVCLEVBQTBDO0FBQUE7O0FBQ3hDLFNBQUtELGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLRCxjQUFaO0FBQ0Q7OztvQ0FFZUEsYyxFQUFnQjtBQUM5QixVQUFNRSxnQkFBaUIsS0FBS0YsY0FBTCxLQUF3QkEsY0FBL0M7O0FBRUEsYUFBT0UsYUFBUDtBQUNEOzs7MEJBRUtDLE8sRUFBU0YsWSxFQUFjO0FBQzNCQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRDJCLENBQ3VCOztBQUVsRCxVQUFJRyxjQUFjLElBQWxCOztBQUVBLFVBQU1DLGNBQWNGLFFBQVFHLGNBQVIsRUFBcEI7QUFBQSxVQUNNQyxhQUFhUixtQkFBbUJTLGNBQW5CLENBQWtDLEtBQUtSLGNBQXZDLEVBQXVESyxXQUF2RCxDQURuQjs7QUFHQSxVQUFJRSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCSCxzQkFBY0csV0FBV0UsS0FBWCxDQUFpQk4sT0FBakIsRUFBMEJGLFlBQTFCLENBQWQ7QUFDRDs7QUFFRCxhQUFPRyxXQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1NLFNBQVMsS0FBS1YsY0FBcEI7O0FBRUEsYUFBT1UsTUFBUDtBQUNEOzs7bUNBRXFCVixjLEVBQWdCSyxXLEVBQWE7QUFDakQsVUFBTU0sT0FBT1gsY0FBYixDQURpRCxDQUNuQjs7QUFFOUIsVUFBSVksa0JBQWtCLElBQXRCOztBQUVBUCxrQkFBWVEsSUFBWixDQUFpQixVQUFTTixVQUFULEVBQXFCO0FBQ3BDLFlBQU1QLGlCQUFpQk8sV0FBV08sT0FBWCxFQUF2Qjs7QUFFQSxZQUFJSCxTQUFTWCxjQUFiLEVBQTZCO0FBQzNCWSw0QkFBa0JMLFVBQWxCOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBLFVBQU1BLGFBQWFLLGVBQW5COztBQUVBLGFBQU9MLFVBQVA7QUFDRDs7OytCQUVpQlEsTSxFQUFRQyxxQixFQUF1QmYsWSxFQUFjO0FBQzdELFVBQU1ELGlCQUFpQmUsTUFBdkI7QUFBQSxVQUFnQztBQUMxQkUsMkJBQXFCLElBQUlsQixrQkFBSixDQUF1QkMsY0FBdkIsRUFBdUNDLFlBQXZDLENBRDNCOztBQUdBLGFBQU9nQixrQkFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnBCLGtCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVQYXJ0IHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGlzTGVmdFJlY3Vyc2l2ZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmUgPSAodGhpcy5wcm9kdWN0aW9uTmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpO1xuICAgIFxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IGNvbnRleHQuZ2V0UHJvZHVjdGlvbnMoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbk5hbWVQYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMucHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBub2RlT3JOb2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvZHVjdGlvbk5hbWU7ICAvLy9cbiAgICBcbiAgICBsZXQgZm91bmRQcm9kdWN0aW9uID0gbnVsbDtcblxuICAgIHByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbikge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgICAgIGZvdW5kUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb247XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9kdWN0aW9uID0gZm91bmRQcm9kdWN0aW9uO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2wsICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpO1xuICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJ0O1xuIl19