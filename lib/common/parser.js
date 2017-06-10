'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    parserUtil = require('../util/parser');

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    this.productions = productions;
  }

  _createClass(CommonParser, [{
    key: 'getProductions',
    value: function getProductions() {
      return this.productions;
    }
  }, {
    key: 'nodeFromLines',
    value: function nodeFromLines(lines) {
      var production = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var tokens = parserUtil.tokensFromLines(lines),
          node = this.parse(tokens, production);

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(tokens, production) {
      var node = null;

      if (production === null) {
        var productionsLength = this.productions.length;

        if (productionsLength > 0) {
          var firstProduction = first(this.productions);

          production = firstProduction; ///
        }
      }

      if (production !== null) {
        var context = new Context(tokens, this.productions),
            noWhitespace = false,
            nodeOrNodes = production.parse(context, noWhitespace);

        if (nodeOrNodes !== null) {
          node = nodeOrNodes instanceof Array ? first(nodeOrNodes) : nodeOrNodes;
        }
      }

      return node;
    }
  }, {
    key: 'findProduction',
    value: function findProduction(productionName) {
      return parserUtil.findProduction(productionName, this.productions);
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwicGFyc2VyVXRpbCIsIkNvbW1vblBhcnNlciIsInByb2R1Y3Rpb25zIiwibGluZXMiLCJwcm9kdWN0aW9uIiwidG9rZW5zIiwidG9rZW5zRnJvbUxpbmVzIiwibm9kZSIsInBhcnNlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsIkFycmF5IiwicHJvZHVjdGlvbk5hbWUiLCJmaW5kUHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsZ0JBQVIsQ0FEbkI7O0lBR01FLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0EsV0FBWjtBQUNEOzs7a0NBRWFDLEssRUFBMEI7QUFBQSxVQUFuQkMsVUFBbUIsdUVBQU4sSUFBTTs7QUFDdEMsVUFBTUMsU0FBU0wsV0FBV00sZUFBWCxDQUEyQkgsS0FBM0IsQ0FBZjtBQUFBLFVBQ01JLE9BQU8sS0FBS0MsS0FBTCxDQUFXSCxNQUFYLEVBQW1CRCxVQUFuQixDQURiOztBQUdBLGFBQU9HLElBQVA7QUFDRDs7OzBCQUVLRixNLEVBQVFELFUsRUFBWTtBQUN4QixVQUFJRyxPQUFPLElBQVg7O0FBRUEsVUFBSUgsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixZQUFNSyxvQkFBb0IsS0FBS1AsV0FBTCxDQUFpQlEsTUFBM0M7O0FBRUEsWUFBSUQsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLGNBQU1FLGtCQUFrQkMsTUFBTSxLQUFLVixXQUFYLENBQXhCOztBQUVBRSx1QkFBYU8sZUFBYixDQUh5QixDQUdLO0FBQy9CO0FBQ0Y7O0FBRUQsVUFBSVAsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixZQUFNUyxVQUFVLElBQUlmLE9BQUosQ0FBWU8sTUFBWixFQUFvQixLQUFLSCxXQUF6QixDQUFoQjtBQUFBLFlBQ01ZLGVBQWUsS0FEckI7QUFBQSxZQUVNQyxjQUFjWCxXQUFXSSxLQUFYLENBQWlCSyxPQUFqQixFQUEwQkMsWUFBMUIsQ0FGcEI7O0FBSUEsWUFBSUMsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCUixpQkFBUVEsdUJBQXVCQyxLQUF4QixHQUNFSixNQUFNRyxXQUFOLENBREYsR0FFSUEsV0FGWDtBQUdEO0FBQ0Y7O0FBRUQsYUFBT1IsSUFBUDtBQUNEOzs7bUNBRWNVLGMsRUFBZ0I7QUFBRSxhQUFPakIsV0FBV2tCLGNBQVgsQ0FBMEJELGNBQTFCLEVBQTBDLEtBQUtmLFdBQS9DLENBQVA7QUFBcUU7Ozs7OztBQUd4R2lCLE9BQU9DLE9BQVAsR0FBaUJuQixZQUFqQjs7QUFFQSxTQUFTVyxLQUFULENBQWVTLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcbiAgICAgIHBhcnNlclV0aWwgPSByZXF1aXJlKCcuLi91dGlsL3BhcnNlcicpO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9ucykge1xuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uID0gbnVsbCkge1xuICAgIGNvbnN0IHRva2VucyA9IHBhcnNlclV0aWwudG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb24pO1xuICAgIFxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uID0gZmlyc3QodGhpcy5wcm9kdWN0aW9ucyk7XG5cbiAgICAgICAgcHJvZHVjdGlvbiA9IGZpcnN0UHJvZHVjdGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMsIHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBmaXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUsIHRoaXMucHJvZHVjdGlvbnMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==