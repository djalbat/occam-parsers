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
            ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwicGFyc2VyVXRpbCIsIkNvbW1vblBhcnNlciIsInByb2R1Y3Rpb25zIiwibGluZXMiLCJwcm9kdWN0aW9uIiwidG9rZW5zIiwidG9rZW5zRnJvbUxpbmVzIiwibm9kZSIsInBhcnNlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsIkFycmF5IiwicHJvZHVjdGlvbk5hbWUiLCJmaW5kUHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsZ0JBQVIsQ0FEbkI7O0lBR01FLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0EsV0FBWjtBQUNEOzs7a0NBRWFDLEssRUFBMEI7QUFBQSxVQUFuQkMsVUFBbUIsdUVBQU4sSUFBTTs7QUFDdEMsVUFBTUMsU0FBU0wsV0FBV00sZUFBWCxDQUEyQkgsS0FBM0IsQ0FBZjtBQUFBLFVBQ01JLE9BQU8sS0FBS0MsS0FBTCxDQUFXSCxNQUFYLEVBQW1CRCxVQUFuQixDQURiOztBQUdBLGFBQU9HLElBQVA7QUFDRDs7OzBCQUVLRixNLEVBQVFELFUsRUFBWTtBQUN4QixVQUFJRyxPQUFPLElBQVg7O0FBRUEsVUFBSUgsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixZQUFNSyxvQkFBb0IsS0FBS1AsV0FBTCxDQUFpQlEsTUFBM0M7O0FBRUEsWUFBSUQsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLGNBQU1FLGtCQUFrQkMsTUFBTSxLQUFLVixXQUFYLENBQXhCOztBQUVBRSx1QkFBYU8sZUFBYixDQUh5QixDQUdLO0FBQy9CO0FBQ0Y7O0FBRUQsVUFBSVAsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixZQUFNUyxVQUFVLElBQUlmLE9BQUosQ0FBWU8sTUFBWixFQUFvQixLQUFLSCxXQUF6QixDQUFoQjtBQUFBLFlBQ01ZLGVBQWUsS0FEckI7QUFBQSxZQUM0QjtBQUN0QkMsc0JBQWNYLFdBQVdJLEtBQVgsQ0FBaUJLLE9BQWpCLEVBQTBCQyxZQUExQixDQUZwQjs7QUFJQSxZQUFJQyxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJSLGlCQUFRUSx1QkFBdUJDLEtBQXhCLEdBQ0VKLE1BQU1HLFdBQU4sQ0FERixHQUVJQSxXQUZYO0FBR0Q7QUFDRjs7QUFFRCxhQUFPUixJQUFQO0FBQ0Q7OzttQ0FFY1UsYyxFQUFnQjtBQUFFLGFBQU9qQixXQUFXa0IsY0FBWCxDQUEwQkQsY0FBMUIsRUFBMEMsS0FBS2YsV0FBL0MsQ0FBUDtBQUFxRTs7Ozs7O0FBR3hHaUIsT0FBT0MsT0FBUCxHQUFpQm5CLFlBQWpCOztBQUVBLFNBQVNXLEtBQVQsQ0FBZVMsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxuICAgICAgcGFyc2VyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvcGFyc2VyJyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIG5vZGVGcm9tTGluZXMobGluZXMsIHByb2R1Y3Rpb24gPSBudWxsKSB7XG4gICAgY29uc3QgdG9rZW5zID0gcGFyc2VyVXRpbC50b2tlbnNGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIG5vZGUgPSB0aGlzLnBhcnNlKHRva2VucywgcHJvZHVjdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocHJvZHVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdCh0aGlzLnByb2R1Y3Rpb25zKTtcblxuICAgICAgICBwcm9kdWN0aW9uID0gZmlyc3RQcm9kdWN0aW9uOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucywgdGhpcy5wcm9kdWN0aW9ucyksXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBmaXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUsIHRoaXMucHJvZHVjdGlvbnMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==