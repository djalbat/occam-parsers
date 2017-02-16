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
            nodes = production.parse(context, this.productions, noWhitespace);

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
    key: 'parseGivenProductionName',
    value: function parseGivenProductionName(productionName, tokens) {
      var node = null,
          context = new Context(tokens),
          production = this.findProduction(productionName),
          noWhitespace = false,
          nodes = production.parse(context, this.productions, noWhitespace);

      if (nodes !== null) {
        var nodesLength = nodes.length;

        if (nodesLength > 0) {
          var firstNode = first(nodes);

          node = firstNode; ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJub2RlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJwcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJwYXJzZSIsIm5vZGVzTGVuZ3RoIiwiZmlyc3ROb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJmaW5kUHJvZHVjdGlvbiIsIm5hbWUiLCJpbmRleCIsImluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lIiwiZm91bmRJbmRleCIsInNvbWUiLCJnZXROYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7O0lBRU1DLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzBCQUVLQyxNLEVBQVE7QUFDWixVQUFJQyxPQUFPLElBQVg7QUFBQSxVQUNJQyxvQkFBb0IsS0FBS0gsV0FBTCxDQUFpQkksTUFEekM7O0FBR0EsVUFBSUQsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFlBQUlFLGtCQUFrQkMsTUFBTSxLQUFLTixXQUFYLENBQXRCO0FBQUEsWUFDSU8sVUFBVSxJQUFJVixPQUFKLENBQVlJLE1BQVosQ0FEZDtBQUFBLFlBRUlPLGFBQWFILGVBRmpCO0FBQUEsWUFFa0M7QUFDOUJJLHVCQUFlLEtBSG5CO0FBQUEsWUFJSUMsUUFBUUYsV0FBV0csS0FBWCxDQUFpQkosT0FBakIsRUFBMEIsS0FBS1AsV0FBL0IsRUFBNENTLFlBQTVDLENBSlo7O0FBTUEsWUFBSUMsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGNBQUlFLGNBQWNGLE1BQU1OLE1BQXhCOztBQUVBLGNBQUlRLGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsZ0JBQUlDLFlBQVlQLE1BQU1JLEtBQU4sQ0FBaEI7O0FBRUFSLG1CQUFPVyxTQUFQLENBSG1CLENBR0Q7QUFDbkI7QUFDRjtBQUNGOztBQUVELGFBQU9YLElBQVA7QUFDRDs7OzZDQUV3QlksYyxFQUFnQmIsTSxFQUFRO0FBQy9DLFVBQUlDLE9BQU8sSUFBWDtBQUFBLFVBQ0lLLFVBQVUsSUFBSVYsT0FBSixDQUFZSSxNQUFaLENBRGQ7QUFBQSxVQUVJTyxhQUFhLEtBQUtPLGNBQUwsQ0FBb0JELGNBQXBCLENBRmpCO0FBQUEsVUFHSUwsZUFBZSxLQUhuQjtBQUFBLFVBSUlDLFFBQVFGLFdBQVdHLEtBQVgsQ0FBaUJKLE9BQWpCLEVBQTBCLEtBQUtQLFdBQS9CLEVBQTRDUyxZQUE1QyxDQUpaOztBQU1BLFVBQUlDLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixZQUFJRSxjQUFjRixNQUFNTixNQUF4Qjs7QUFFQSxZQUFJUSxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLGNBQUlDLFlBQVlQLE1BQU1JLEtBQU4sQ0FBaEI7O0FBRUFSLGlCQUFPVyxTQUFQLENBSG1CLENBR0Q7QUFDbkI7QUFDRjs7QUFFRCxhQUFPWCxJQUFQO0FBQ0Q7OzttQ0FFY1ksYyxFQUFnQjtBQUM3QixVQUFJRSxPQUFPRixjQUFYO0FBQUEsVUFBNEI7QUFDeEJHLGNBQVEsS0FBS0MsdUJBQUwsQ0FBNkJGLElBQTdCLENBRFo7QUFBQSxVQUVJUixhQUFjUyxVQUFVLElBQVgsR0FDRSxLQUFLakIsV0FBTCxDQUFpQmlCLEtBQWpCLENBREYsR0FFSSxJQUpyQjs7QUFNQSxhQUFPVCxVQUFQO0FBQ0Q7Ozs0Q0FFdUJRLEksRUFBTTtBQUM1QixVQUFJQyxLQUFKO0FBQUEsVUFDSUUsYUFBYSxJQURqQjs7QUFHQSxXQUFLbkIsV0FBTCxDQUFpQm9CLElBQWpCLENBQXNCLFVBQVNaLFVBQVQsRUFBcUJTLEtBQXJCLEVBQTRCO0FBQ2hELFlBQUlILGlCQUFpQk4sV0FBV2EsT0FBWCxFQUFyQjs7QUFFQSxZQUFJUCxtQkFBbUJFLElBQXZCLEVBQTZCO0FBQzNCRyx1QkFBYUYsS0FBYjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FWRDs7QUFZQUEsY0FBUUUsVUFBUixDQWhCNEIsQ0FnQlI7O0FBRXBCLGFBQU9GLEtBQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJ4QixZQUFqQjs7QUFFQSxTQUFTTyxLQUFULENBQWVrQixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9ucykge1xuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgcGFyc2UodG9rZW5zKSB7XG4gICAgdmFyIG5vZGUgPSBudWxsLFxuICAgICAgICBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMpLFxuICAgICAgICAgIHByb2R1Y3Rpb24gPSBmaXJzdFByb2R1Y3Rpb24sIC8vL1xuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIG5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCB0aGlzLnByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBpZiAobm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChub2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlR2l2ZW5Qcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSwgdG9rZW5zKSB7XG4gICAgdmFyIG5vZGUgPSBudWxsLFxuICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zKSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IHRoaXMuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgbm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHRoaXMucHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBpZiAobm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICAgIG5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IChpbmRleCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3Rpb25zW2luZGV4XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUobmFtZSkge1xuICAgIHZhciBpbmRleCxcbiAgICAgICAgZm91bmRJbmRleCA9IG51bGw7XG5cbiAgICB0aGlzLnByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbiwgaW5kZXgpIHtcbiAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbk5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW5kZXggPSBmb3VuZEluZGV4OyAvLy9cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=