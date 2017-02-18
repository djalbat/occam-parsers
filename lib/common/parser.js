'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context');

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
    key: 'parse',
    value: function parse(tokens) {
      var production = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var noWhitespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
            nodes = production.parse(context, noWhitespace);

        if (nodes !== null) {
          var nodesLength = nodes.length;

          if (nodesLength > 0) {
            var firstNode = first(nodes);

            node = firstNode; ///
          }
        }
      }

      return node;
    }
  }, {
    key: 'findProduction',
    value: function findProduction(productionName) {
      var name = productionName,
          ///
      index = this.indexOfProductionByName(name),
          production = index !== null ? this.productions[index] : null;

      return production;
    }
  }, {
    key: 'indexOfProductionByName',
    value: function indexOfProductionByName(name) {
      var index,
          foundIndex = null;

      this.productions.some(function (production, index) {
        var productionName = production.getName();

        if (productionName === name) {
          foundIndex = index;

          return true;
        } else {
          return false;
        }
      });

      index = foundIndex; ///

      return index;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJwcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZSIsInByb2R1Y3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQcm9kdWN0aW9uIiwiZmlyc3QiLCJjb250ZXh0Iiwibm9kZXMiLCJwYXJzZSIsIm5vZGVzTGVuZ3RoIiwiZmlyc3ROb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJuYW1lIiwiaW5kZXgiLCJpbmRleE9mUHJvZHVjdGlvbkJ5TmFtZSIsImZvdW5kSW5kZXgiLCJzb21lIiwiZ2V0TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkOztJQUVNQyxZO0FBQ0osd0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtBLFdBQVo7QUFDRDs7OzBCQUVLQyxNLEVBQWlEO0FBQUEsVUFBekNDLFVBQXlDLHVFQUE1QixJQUE0QjtBQUFBLFVBQXRCQyxZQUFzQix1RUFBUCxLQUFPOztBQUNyRCxVQUFJQyxPQUFPLElBQVg7O0FBRUEsVUFBSUYsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixZQUFJRyxvQkFBb0IsS0FBS0wsV0FBTCxDQUFpQk0sTUFBekM7O0FBRUEsWUFBSUQsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLGNBQUlFLGtCQUFrQkMsTUFBTSxLQUFLUixXQUFYLENBQXRCOztBQUVBRSx1QkFBYUssZUFBYixDQUh5QixDQUdLO0FBQy9CO0FBQ0Y7O0FBRUQsVUFBSUwsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixZQUFJTyxVQUFVLElBQUlaLE9BQUosQ0FBWUksTUFBWixFQUFvQixLQUFLRCxXQUF6QixDQUFkO0FBQUEsWUFDSVUsUUFBUVIsV0FBV1MsS0FBWCxDQUFpQkYsT0FBakIsRUFBMEJOLFlBQTFCLENBRFo7O0FBR0EsWUFBSU8sVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGNBQUlFLGNBQWNGLE1BQU1KLE1BQXhCOztBQUVBLGNBQUlNLGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsZ0JBQUlDLFlBQVlMLE1BQU1FLEtBQU4sQ0FBaEI7O0FBRUFOLG1CQUFPUyxTQUFQLENBSG1CLENBR0Q7QUFDbkI7QUFDRjtBQUNGOztBQUVELGFBQU9ULElBQVA7QUFDRDs7O21DQUVjVSxjLEVBQWdCO0FBQzdCLFVBQUlDLE9BQU9ELGNBQVg7QUFBQSxVQUE0QjtBQUN4QkUsY0FBUSxLQUFLQyx1QkFBTCxDQUE2QkYsSUFBN0IsQ0FEWjtBQUFBLFVBRUliLGFBQWNjLFVBQVUsSUFBWCxHQUNFLEtBQUtoQixXQUFMLENBQWlCZ0IsS0FBakIsQ0FERixHQUVJLElBSnJCOztBQU1BLGFBQU9kLFVBQVA7QUFDRDs7OzRDQUV1QmEsSSxFQUFNO0FBQzVCLFVBQUlDLEtBQUo7QUFBQSxVQUNJRSxhQUFhLElBRGpCOztBQUdBLFdBQUtsQixXQUFMLENBQWlCbUIsSUFBakIsQ0FBc0IsVUFBU2pCLFVBQVQsRUFBcUJjLEtBQXJCLEVBQTRCO0FBQ2hELFlBQUlGLGlCQUFpQlosV0FBV2tCLE9BQVgsRUFBckI7O0FBRUEsWUFBSU4sbUJBQW1CQyxJQUF2QixFQUE2QjtBQUMzQkcsdUJBQWFGLEtBQWI7O0FBRUEsaUJBQU8sSUFBUDtBQUNELFNBSkQsTUFJTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BVkQ7O0FBWUFBLGNBQVFFLFVBQVIsQ0FoQjRCLENBZ0JSOztBQUVwQixhQUFPRixLQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCdkIsWUFBakI7O0FBRUEsU0FBU1MsS0FBVCxDQUFlZSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9ucykge1xuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25zO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uID0gbnVsbCwgbm9XaGl0ZXNwYWNlID0gZmFsc2UpIHtcbiAgICB2YXIgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocHJvZHVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgdmFyIHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpO1xuXG4gICAgICAgIHByb2R1Y3Rpb24gPSBmaXJzdFByb2R1Y3Rpb247IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucywgdGhpcy5wcm9kdWN0aW9ucyksXG4gICAgICAgICAgbm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgICAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IChpbmRleCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3Rpb25zW2luZGV4XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUobmFtZSkge1xuICAgIHZhciBpbmRleCxcbiAgICAgICAgZm91bmRJbmRleCA9IG51bGw7XG5cbiAgICB0aGlzLnByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbiwgaW5kZXgpIHtcbiAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbk5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW5kZXggPSBmb3VuZEluZGV4OyAvLy9cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=