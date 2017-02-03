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
      var node = null,
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var firstProduction = first(this.productions),
            context = new Context(tokens),
            production = firstProduction,
            ///
        noWhitespace = false,
            nodes = production.parse(context, this.productions, noWhitespace),
            firstNode = first(nodes);

        node = firstNode; ///
      }

      return node;
    }
  }, {
    key: 'parseGivenProductionName',
    value: function parseGivenProductionName(tokens, productionName) {
      var context = new Context(tokens),
          production = this.findProduction(productionName),
          noWhitespace = false,
          nodes = production.parse(context, this.productions, noWhitespace),
          firstNode = first(nodes),
          node = firstNode; ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJub2RlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJwcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJwYXJzZSIsImZpcnN0Tm9kZSIsInByb2R1Y3Rpb25OYW1lIiwiZmluZFByb2R1Y3Rpb24iLCJuYW1lIiwiaW5kZXgiLCJpbmRleE9mUHJvZHVjdGlvbkJ5TmFtZSIsImZvdW5kSW5kZXgiLCJzb21lIiwiZ2V0TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkOztJQUVNQyxZO0FBQ0osd0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OzswQkFFS0MsTSxFQUFRO0FBQ1osVUFBSUMsT0FBTyxJQUFYO0FBQUEsVUFDSUMsb0JBQW9CLEtBQUtILFdBQUwsQ0FBaUJJLE1BRHpDOztBQUdBLFVBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFJRSxrQkFBa0JDLE1BQU0sS0FBS04sV0FBWCxDQUF0QjtBQUFBLFlBQ0lPLFVBQVUsSUFBSVYsT0FBSixDQUFZSSxNQUFaLENBRGQ7QUFBQSxZQUVJTyxhQUFhSCxlQUZqQjtBQUFBLFlBRWtDO0FBQzlCSSx1QkFBZSxLQUhuQjtBQUFBLFlBSUlDLFFBQVFGLFdBQVdHLEtBQVgsQ0FBaUJKLE9BQWpCLEVBQTBCLEtBQUtQLFdBQS9CLEVBQTRDUyxZQUE1QyxDQUpaO0FBQUEsWUFLSUcsWUFBWU4sTUFBTUksS0FBTixDQUxoQjs7QUFPQVIsZUFBT1UsU0FBUCxDQVJ5QixDQVFQO0FBQ25COztBQUVELGFBQU9WLElBQVA7QUFDRDs7OzZDQUV3QkQsTSxFQUFRWSxjLEVBQWdCO0FBQy9DLFVBQUlOLFVBQVUsSUFBSVYsT0FBSixDQUFZSSxNQUFaLENBQWQ7QUFBQSxVQUNJTyxhQUFhLEtBQUtNLGNBQUwsQ0FBb0JELGNBQXBCLENBRGpCO0FBQUEsVUFFSUosZUFBZSxLQUZuQjtBQUFBLFVBR0lDLFFBQVFGLFdBQVdHLEtBQVgsQ0FBaUJKLE9BQWpCLEVBQTBCLEtBQUtQLFdBQS9CLEVBQTRDUyxZQUE1QyxDQUhaO0FBQUEsVUFJSUcsWUFBWU4sTUFBTUksS0FBTixDQUpoQjtBQUFBLFVBS0lSLE9BQU9VLFNBTFgsQ0FEK0MsQ0FNekI7O0FBRXRCLGFBQU9WLElBQVA7QUFDRDs7O21DQUVjVyxjLEVBQWdCO0FBQzdCLFVBQUlFLE9BQU9GLGNBQVg7QUFBQSxVQUE0QjtBQUN4QkcsY0FBUSxLQUFLQyx1QkFBTCxDQUE2QkYsSUFBN0IsQ0FEWjtBQUFBLFVBRUlQLGFBQWNRLFVBQVUsSUFBWCxHQUNFLEtBQUtoQixXQUFMLENBQWlCZ0IsS0FBakIsQ0FERixHQUVJLElBSnJCOztBQU1BLGFBQU9SLFVBQVA7QUFDRDs7OzRDQUV1Qk8sSSxFQUFNO0FBQzVCLFVBQUlDLEtBQUo7QUFBQSxVQUNJRSxhQUFhLElBRGpCOztBQUdBLFdBQUtsQixXQUFMLENBQWlCbUIsSUFBakIsQ0FBc0IsVUFBU1gsVUFBVCxFQUFxQlEsS0FBckIsRUFBNEI7QUFDaEQsWUFBSUgsaUJBQWlCTCxXQUFXWSxPQUFYLEVBQXJCOztBQUVBLFlBQUlQLG1CQUFtQkUsSUFBdkIsRUFBNkI7QUFDM0JHLHVCQUFhRixLQUFiOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBQSxjQUFRRSxVQUFSLENBaEI0QixDQWdCUjs7QUFFcEIsYUFBT0YsS0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnZCLFlBQWpCOztBQUVBLFNBQVNPLEtBQVQsQ0FBZWlCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBwYXJzZSh0b2tlbnMpIHtcbiAgICB2YXIgbm9kZSA9IG51bGwsXG4gICAgICAgIHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAocHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICB2YXIgZmlyc3RQcm9kdWN0aW9uID0gZmlyc3QodGhpcy5wcm9kdWN0aW9ucyksXG4gICAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucyksXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IGZpcnN0UHJvZHVjdGlvbiwgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgbm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHRoaXMucHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlR2l2ZW5Qcm9kdWN0aW9uTmFtZSh0b2tlbnMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMpLFxuICAgICAgICBwcm9kdWN0aW9uID0gdGhpcy5maW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICBub2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgdGhpcy5wcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpLFxuICAgICAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IChpbmRleCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3Rpb25zW2luZGV4XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUobmFtZSkge1xuICAgIHZhciBpbmRleCxcbiAgICAgICAgZm91bmRJbmRleCA9IG51bGw7XG5cbiAgICB0aGlzLnByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbiwgaW5kZXgpIHtcbiAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbk5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW5kZXggPSBmb3VuZEluZGV4OyAvLy9cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=