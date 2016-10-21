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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Byb2R1Y3Rpb25OYW1lLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb25OYW1lUGFydCIsIm5hbWUiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsInBhcnNlIiwiZm91bmRQcm9kdWN0aW9uIiwic29tZSIsInByb2R1Y3Rpb25OYW1lUGFydCIsImdldE5hbWUiLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGtCO0FBQ0osOEJBQVlDLElBQVosRUFBa0JDLFlBQWxCLEVBQWdDO0FBQUE7O0FBQzlCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYU4sbUJBQW1CTyxjQUFuQixDQUFrQyxLQUFLTixJQUF2QyxFQUE2Q0csV0FBN0MsQ0FEakI7O0FBR0EsVUFBSUUsZUFBZSxJQUFuQixFQUF5QjtBQUN2QkQsZ0JBQVFDLFdBQVdFLEtBQVgsQ0FBaUJMLE9BQWpCLEVBQTBCQyxXQUExQixFQUF1Q0YsWUFBdkMsQ0FBUjtBQUNEOztBQUVELGFBQU9HLEtBQVA7QUFDRDs7O21DQUVxQkosSSxFQUFNRyxXLEVBQWE7QUFDdkMsVUFBSUssa0JBQWtCLElBQXRCOztBQUVBTCxrQkFBWU0sSUFBWixDQUFpQixVQUFTSixVQUFULEVBQXFCO0FBQ3BDLFlBQUlLLHFCQUFxQkwsV0FBV00sT0FBWCxFQUF6Qjs7QUFFQSxZQUFJWCxTQUFTVSxrQkFBYixFQUFpQztBQUMvQkYsNEJBQWtCSCxVQUFsQjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FWRDs7QUFZQSxVQUFJQSxhQUFhRyxlQUFqQjs7QUFFQSxhQUFPSCxVQUFQO0FBQ0Q7OzsrQkFFaUJPLE0sRUFBUUMscUIsRUFBdUJDLHFCLEVBQXVCYixZLEVBQWM7QUFDcEYsVUFBSUQsT0FBT1ksTUFBWDtBQUFBLFVBQW9CO0FBQ2hCRiwyQkFBcUIsSUFBSVgsa0JBQUosQ0FBdUJDLElBQXZCLEVBQTZCQyxZQUE3QixDQUR6Qjs7QUFHQSxhQUFPUyxrQkFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQmpCLGtCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVQYXJ0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbk5hbWVQYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMubmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZmluZFByb2R1Y3Rpb24obmFtZSwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgZm91bmRQcm9kdWN0aW9uID0gbnVsbDtcblxuICAgIHByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbikge1xuICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lUGFydCA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gcHJvZHVjdGlvbk5hbWVQYXJ0KSB7XG4gICAgICAgIGZvdW5kUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb247XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcHJvZHVjdGlvbiA9IGZvdW5kUHJvZHVjdGlvbjtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5hbWUgPSBzeW1ib2wsICAvLy9cbiAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChuYW1lLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUGFydDtcbiJdfQ==