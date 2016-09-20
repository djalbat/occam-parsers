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
      var nodes = null,
          production = ProductionPart.findProduction(this.name, productions);

      if (production !== null) {
        nodes = production.parse(input, context, productions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3Byb2R1Y3Rpb24uanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvblBhcnQiLCJuYW1lIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsInBhcnNlIiwiZm91bmRQcm9kdWN0aW9uIiwic29tZSIsInByb2R1Y3Rpb25OYW1lIiwiZ2V0TmFtZSIsInN5bWJvbCIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwicHJvZHVjdGlvblBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGM7QUFDSiwwQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhTixlQUFlTyxjQUFmLENBQThCLEtBQUtOLElBQW5DLEVBQXlDRyxXQUF6QyxDQURqQjs7QUFHQSxVQUFJRSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCRCxnQkFBUUMsV0FBV0UsS0FBWCxDQUFpQk4sS0FBakIsRUFBd0JDLE9BQXhCLEVBQWlDQyxXQUFqQyxDQUFSO0FBQ0Q7O0FBRUQsYUFBT0MsS0FBUDtBQUNEOzs7bUNBRXFCSixJLEVBQU1HLFcsRUFBYTtBQUN2QyxVQUFJSyxrQkFBa0IsSUFBdEI7O0FBRUFMLGtCQUFZTSxJQUFaLENBQWlCLFVBQVNKLFVBQVQsRUFBcUI7QUFDcEMsWUFBSUssaUJBQWlCTCxXQUFXTSxPQUFYLEVBQXJCOztBQUVBLFlBQUlYLFNBQVNVLGNBQWIsRUFBNkI7QUFDM0JGLDRCQUFrQkgsVUFBbEI7O0FBRUEsaUJBQU8sSUFBUDtBQUNELFNBSkQsTUFJTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BVkQ7O0FBWUEsVUFBSUEsYUFBYUcsZUFBakI7O0FBRUEsYUFBT0gsVUFBUDtBQUNEOzs7K0JBRWlCTyxNLEVBQVFDLG9CLEVBQXNCO0FBQzlDLFVBQUliLE9BQU9ZLE1BQVg7QUFBQSxVQUFvQjtBQUNoQkUsdUJBQWlCLElBQUlmLGNBQUosQ0FBbUJDLElBQW5CLENBRHJCOztBQUdBLGFBQU9jLGNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJqQixjQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQcm9kdWN0aW9uUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIFxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvblBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5uYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZpbmRQcm9kdWN0aW9uKG5hbWUsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIGZvdW5kUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBwcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgZm91bmRQcm9kdWN0aW9uID0gcHJvZHVjdGlvbjtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBwcm9kdWN0aW9uID0gZm91bmRQcm9kdWN0aW9uO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNwZWNpYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIG5hbWUgPSBzeW1ib2wsICAvLy9cbiAgICAgICAgcHJvZHVjdGlvblBhcnQgPSBuZXcgUHJvZHVjdGlvblBhcnQobmFtZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uUGFydDtcbiJdfQ==