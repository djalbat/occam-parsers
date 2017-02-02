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
    key: 'parse',
    value: function parse(tokens) {
      var productionName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var parsedNode = null,
          context = new Context(tokens),
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var noWhitespace = false,
            firstProduction = first(this.productions),
            foundProduction = this.findProduction(productionName),
            production = productionName === null ? firstProduction : foundProduction,
            nodes = production.parse(context, this.productions, noWhitespace),
            maximumDepth = context.getMaximumDepth(),
            depth = context.getDepth();

        if (depth < maximumDepth) {
          if (nodes !== null) {
            var firstNode = first(nodes);

            parsedNode = firstNode; ///
          }
        }
      }

      return parsedNode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJwcm9kdWN0aW9uTmFtZSIsInBhcnNlZE5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJub1doaXRlc3BhY2UiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImZvdW5kUHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwicHJvZHVjdGlvbiIsIm5vZGVzIiwicGFyc2UiLCJtYXhpbXVtRGVwdGgiLCJnZXRNYXhpbXVtRGVwdGgiLCJkZXB0aCIsImdldERlcHRoIiwiZmlyc3ROb2RlIiwibmFtZSIsImluZGV4IiwiaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUiLCJmb3VuZEluZGV4Iiwic29tZSIsImdldE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFdBQVIsQ0FBZDs7SUFFTUMsWTtBQUNKLHdCQUFZQyxXQUFaLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7MEJBRUtDLE0sRUFBK0I7QUFBQSxVQUF2QkMsY0FBdUIsdUVBQU4sSUFBTTs7QUFDbkMsVUFBSUMsYUFBYSxJQUFqQjtBQUFBLFVBQ0lDLFVBQVUsSUFBSVAsT0FBSixDQUFZSSxNQUFaLENBRGQ7QUFBQSxVQUVJSSxvQkFBb0IsS0FBS0wsV0FBTCxDQUFpQk0sTUFGekM7O0FBSUEsVUFBSUQsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFlBQUlFLGVBQWUsS0FBbkI7QUFBQSxZQUNJQyxrQkFBa0JDLE1BQU0sS0FBS1QsV0FBWCxDQUR0QjtBQUFBLFlBRUlVLGtCQUFrQixLQUFLQyxjQUFMLENBQW9CVCxjQUFwQixDQUZ0QjtBQUFBLFlBR0lVLGFBQWNWLG1CQUFtQixJQUFwQixHQUNFTSxlQURGLEdBRUlFLGVBTHJCO0FBQUEsWUFNSUcsUUFBUUQsV0FBV0UsS0FBWCxDQUFpQlYsT0FBakIsRUFBMEIsS0FBS0osV0FBL0IsRUFBNENPLFlBQTVDLENBTlo7QUFBQSxZQU9JUSxlQUFlWCxRQUFRWSxlQUFSLEVBUG5CO0FBQUEsWUFRSUMsUUFBUWIsUUFBUWMsUUFBUixFQVJaOztBQVVBLFlBQUlELFFBQVFGLFlBQVosRUFBMEI7QUFDeEIsY0FBSUYsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGdCQUFJTSxZQUFZVixNQUFNSSxLQUFOLENBQWhCOztBQUVBVix5QkFBYWdCLFNBQWIsQ0FIa0IsQ0FHTTtBQUN6QjtBQUNGO0FBQ0Y7O0FBRUQsYUFBT2hCLFVBQVA7QUFDRDs7O21DQUVjRCxjLEVBQWdCO0FBQzdCLFVBQUlrQixPQUFPbEIsY0FBWDtBQUFBLFVBQTRCO0FBQ3hCbUIsY0FBUSxLQUFLQyx1QkFBTCxDQUE2QkYsSUFBN0IsQ0FEWjtBQUFBLFVBRUlSLGFBQWNTLFVBQVUsSUFBWCxHQUNFLEtBQUtyQixXQUFMLENBQWlCcUIsS0FBakIsQ0FERixHQUVJLElBSnJCOztBQU1BLGFBQU9ULFVBQVA7QUFDRDs7OzRDQUV1QlEsSSxFQUFNO0FBQzVCLFVBQUlDLEtBQUo7QUFBQSxVQUNJRSxhQUFhLElBRGpCOztBQUdBLFdBQUt2QixXQUFMLENBQWlCd0IsSUFBakIsQ0FBc0IsVUFBU1osVUFBVCxFQUFxQlMsS0FBckIsRUFBNEI7QUFDaEQsWUFBSW5CLGlCQUFpQlUsV0FBV2EsT0FBWCxFQUFyQjs7QUFFQSxZQUFJdkIsbUJBQW1Ca0IsSUFBdkIsRUFBNkI7QUFDM0JHLHVCQUFhRixLQUFiOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBQSxjQUFRRSxVQUFSLENBaEI0QixDQWdCUjs7QUFFcEIsYUFBT0YsS0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQjVCLFlBQWpCOztBQUVBLFNBQVNVLEtBQVQsQ0FBZW1CLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBwYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb25OYW1lID0gbnVsbCkge1xuICAgIHZhciBwYXJzZWROb2RlID0gbnVsbCxcbiAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucyksXG4gICAgICAgIHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAocHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICB2YXIgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgZmlyc3RQcm9kdWN0aW9uID0gZmlyc3QodGhpcy5wcm9kdWN0aW9ucyksXG4gICAgICAgICAgZm91bmRQcm9kdWN0aW9uID0gdGhpcy5maW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IChwcm9kdWN0aW9uTmFtZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0UHJvZHVjdGlvbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFByb2R1Y3Rpb24sXG4gICAgICAgICAgbm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHRoaXMucHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gY29udGV4dC5nZXRNYXhpbXVtRGVwdGgoKSxcbiAgICAgICAgICBkZXB0aCA9IGNvbnRleHQuZ2V0RGVwdGgoKTtcblxuICAgICAgaWYgKGRlcHRoIDwgbWF4aW11bURlcHRoKSB7XG4gICAgICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgICAgICBwYXJzZWROb2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWROb2RlO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IChpbmRleCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3Rpb25zW2luZGV4XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUobmFtZSkge1xuICAgIHZhciBpbmRleCxcbiAgICAgICAgZm91bmRJbmRleCA9IG51bGw7XG5cbiAgICB0aGlzLnByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbiwgaW5kZXgpIHtcbiAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbk5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW5kZXggPSBmb3VuZEluZGV4OyAvLy9cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=