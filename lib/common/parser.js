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
      var documentNode = null,
          context = new Context(tokens),
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var noWhitespace = false,
            firstProduction = first(this.productions),
            nodes = firstProduction.parse(context, this.productions, noWhitespace),
            firstNode = first(nodes);

        documentNode = firstNode; ///
      }

      return documentNode;
    }
  }, {
    key: 'parseGivenProductionName',
    value: function parseGivenProductionName(tokens, productionName) {
      var context = new Context(tokens),
          production = this.findProduction(productionName),
          noWhitespace = false,
          nodes = production.parse(context, this.productions, noWhitespace);

      return nodes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJkb2N1bWVudE5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJub1doaXRlc3BhY2UiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsIm5vZGVzIiwicGFyc2UiLCJmaXJzdE5vZGUiLCJwcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsIm5hbWUiLCJpbmRleCIsImluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lIiwiZm91bmRJbmRleCIsInNvbWUiLCJnZXROYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7O0lBRU1DLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzBCQUVLQyxNLEVBQVE7QUFDWixVQUFJQyxlQUFlLElBQW5CO0FBQUEsVUFDSUMsVUFBVSxJQUFJTixPQUFKLENBQVlJLE1BQVosQ0FEZDtBQUFBLFVBRUlHLG9CQUFvQixLQUFLSixXQUFMLENBQWlCSyxNQUZ6Qzs7QUFJQSxVQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBSUUsZUFBZSxLQUFuQjtBQUFBLFlBQ0lDLGtCQUFrQkMsTUFBTSxLQUFLUixXQUFYLENBRHRCO0FBQUEsWUFFSVMsUUFBUUYsZ0JBQWdCRyxLQUFoQixDQUFzQlAsT0FBdEIsRUFBK0IsS0FBS0gsV0FBcEMsRUFBaURNLFlBQWpELENBRlo7QUFBQSxZQUdJSyxZQUFZSCxNQUFNQyxLQUFOLENBSGhCOztBQUtBUCx1QkFBZVMsU0FBZixDQU55QixDQU1DO0FBQzNCOztBQUVELGFBQU9ULFlBQVA7QUFDRDs7OzZDQUV3QkQsTSxFQUFRVyxjLEVBQWdCO0FBQy9DLFVBQUlULFVBQVUsSUFBSU4sT0FBSixDQUFZSSxNQUFaLENBQWQ7QUFBQSxVQUNJWSxhQUFhLEtBQUtDLGNBQUwsQ0FBb0JGLGNBQXBCLENBRGpCO0FBQUEsVUFFSU4sZUFBZSxLQUZuQjtBQUFBLFVBR0lHLFFBQVFJLFdBQVdILEtBQVgsQ0FBaUJQLE9BQWpCLEVBQTBCLEtBQUtILFdBQS9CLEVBQTRDTSxZQUE1QyxDQUhaOztBQUtBLGFBQU9HLEtBQVA7QUFDRDs7O21DQUVjRyxjLEVBQWdCO0FBQzdCLFVBQUlHLE9BQU9ILGNBQVg7QUFBQSxVQUE0QjtBQUN4QkksY0FBUSxLQUFLQyx1QkFBTCxDQUE2QkYsSUFBN0IsQ0FEWjtBQUFBLFVBRUlGLGFBQWNHLFVBQVUsSUFBWCxHQUNFLEtBQUtoQixXQUFMLENBQWlCZ0IsS0FBakIsQ0FERixHQUVJLElBSnJCOztBQU1BLGFBQU9ILFVBQVA7QUFDRDs7OzRDQUV1QkUsSSxFQUFNO0FBQzVCLFVBQUlDLEtBQUo7QUFBQSxVQUNJRSxhQUFhLElBRGpCOztBQUdBLFdBQUtsQixXQUFMLENBQWlCbUIsSUFBakIsQ0FBc0IsVUFBU04sVUFBVCxFQUFxQkcsS0FBckIsRUFBNEI7QUFDaEQsWUFBSUosaUJBQWlCQyxXQUFXTyxPQUFYLEVBQXJCOztBQUVBLFlBQUlSLG1CQUFtQkcsSUFBdkIsRUFBNkI7QUFDM0JHLHVCQUFhRixLQUFiOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBQSxjQUFRRSxVQUFSLENBaEI0QixDQWdCUjs7QUFFcEIsYUFBT0YsS0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnZCLFlBQWpCOztBQUVBLFNBQVNTLEtBQVQsQ0FBZWUsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIHBhcnNlKHRva2Vucykge1xuICAgIHZhciBkb2N1bWVudE5vZGUgPSBudWxsLFxuICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zKSxcbiAgICAgICAgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIHZhciBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdCh0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBub2RlcyA9IGZpcnN0UHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCB0aGlzLnByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgZG9jdW1lbnROb2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnROb2RlO1xuICB9XG5cbiAgcGFyc2VHaXZlblByb2R1Y3Rpb25OYW1lKHRva2VucywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucyksXG4gICAgICAgIHByb2R1Y3Rpb24gPSB0aGlzLmZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgIG5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCB0aGlzLnByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IChpbmRleCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3Rpb25zW2luZGV4XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUobmFtZSkge1xuICAgIHZhciBpbmRleCxcbiAgICAgICAgZm91bmRJbmRleCA9IG51bGw7XG5cbiAgICB0aGlzLnByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbiwgaW5kZXgpIHtcbiAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbk5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW5kZXggPSBmb3VuZEluZGV4OyAvLy9cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=