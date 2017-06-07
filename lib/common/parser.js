'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    parserUtil = require('../util/parser');

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    productions = parserUtil.eliminateCycles(productions); ///

    productions = parserUtil.eliminateLeftRecursion(productions); ///

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
      var name = productionName,
          ///
      index = this.indexOfProductionByName(name),
          production = index !== null ? this.productions[index] : null;

      return production;
    }
  }, {
    key: 'indexOfProductionByName',
    value: function indexOfProductionByName(name) {
      var index = void 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwicGFyc2VyVXRpbCIsIkNvbW1vblBhcnNlciIsInByb2R1Y3Rpb25zIiwiZWxpbWluYXRlQ3ljbGVzIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsImxpbmVzIiwicHJvZHVjdGlvbiIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsIm5vZGUiLCJwYXJzZSIsInByb2R1Y3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQcm9kdWN0aW9uIiwiZmlyc3QiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJBcnJheSIsInByb2R1Y3Rpb25OYW1lIiwibmFtZSIsImluZGV4IiwiaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUiLCJmb3VuZEluZGV4Iiwic29tZSIsImdldE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGdCQUFSLENBRG5COztJQUdNRSxZO0FBQ0osd0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkJBLGtCQUFjRixXQUFXRyxlQUFYLENBQTJCRCxXQUEzQixDQUFkLENBRHVCLENBQ2dDOztBQUV2REEsa0JBQWNGLFdBQVdJLHNCQUFYLENBQWtDRixXQUFsQyxDQUFkLENBSHVCLENBR3VDOztBQUU5RCxTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0EsV0FBWjtBQUNEOzs7a0NBRWFHLEssRUFBMEI7QUFBQSxVQUFuQkMsVUFBbUIsdUVBQU4sSUFBTTs7QUFDdEMsVUFBTUMsU0FBU1AsV0FBV1EsZUFBWCxDQUEyQkgsS0FBM0IsQ0FBZjtBQUFBLFVBQ01JLE9BQU8sS0FBS0MsS0FBTCxDQUFXSCxNQUFYLEVBQW1CRCxVQUFuQixDQURiOztBQUdBLGFBQU9HLElBQVA7QUFDRDs7OzBCQUVLRixNLEVBQVFELFUsRUFBWTtBQUN4QixVQUFJRyxPQUFPLElBQVg7O0FBRUEsVUFBSUgsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixZQUFNSyxvQkFBb0IsS0FBS1QsV0FBTCxDQUFpQlUsTUFBM0M7O0FBRUEsWUFBSUQsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLGNBQU1FLGtCQUFrQkMsTUFBTSxLQUFLWixXQUFYLENBQXhCOztBQUVBSSx1QkFBYU8sZUFBYixDQUh5QixDQUdLO0FBQy9CO0FBQ0Y7O0FBRUQsVUFBSVAsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixZQUFNUyxVQUFVLElBQUlqQixPQUFKLENBQVlTLE1BQVosRUFBb0IsS0FBS0wsV0FBekIsQ0FBaEI7QUFBQSxZQUNNYyxlQUFlLEtBRHJCO0FBQUEsWUFFTUMsY0FBY1gsV0FBV0ksS0FBWCxDQUFpQkssT0FBakIsRUFBMEJDLFlBQTFCLENBRnBCOztBQUlBLFlBQUlDLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QlIsaUJBQVFRLHVCQUF1QkMsS0FBeEIsR0FDRUosTUFBTUcsV0FBTixDQURGLEdBRUlBLFdBRlg7QUFHRDtBQUNGOztBQUVELGFBQU9SLElBQVA7QUFDRDs7O21DQUVjVSxjLEVBQWdCO0FBQzdCLFVBQU1DLE9BQU9ELGNBQWI7QUFBQSxVQUE4QjtBQUN4QkUsY0FBUSxLQUFLQyx1QkFBTCxDQUE2QkYsSUFBN0IsQ0FEZDtBQUFBLFVBRU1kLGFBQWNlLFVBQVUsSUFBWCxHQUNFLEtBQUtuQixXQUFMLENBQWlCbUIsS0FBakIsQ0FERixHQUVJLElBSnZCOztBQU1BLGFBQU9mLFVBQVA7QUFDRDs7OzRDQUV1QmMsSSxFQUFNO0FBQzVCLFVBQUlDLGNBQUo7QUFBQSxVQUNJRSxhQUFhLElBRGpCOztBQUdBLFdBQUtyQixXQUFMLENBQWlCc0IsSUFBakIsQ0FBc0IsVUFBU2xCLFVBQVQsRUFBcUJlLEtBQXJCLEVBQTRCO0FBQ2hELFlBQU1GLGlCQUFpQmIsV0FBV21CLE9BQVgsRUFBdkI7O0FBRUEsWUFBSU4sbUJBQW1CQyxJQUF2QixFQUE2QjtBQUMzQkcsdUJBQWFGLEtBQWI7O0FBRUEsaUJBQU8sSUFBUDtBQUNELFNBSkQsTUFJTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BVkQ7O0FBWUFBLGNBQVFFLFVBQVIsQ0FoQjRCLENBZ0JSOztBQUVwQixhQUFPRixLQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCMUIsWUFBakI7O0FBRUEsU0FBU2EsS0FBVCxDQUFlYyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXG4gICAgICBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9wYXJzZXInKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICBwcm9kdWN0aW9ucyA9IHBhcnNlclV0aWwuZWxpbWluYXRlQ3ljbGVzKHByb2R1Y3Rpb25zKTsgLy8vXG5cbiAgICBwcm9kdWN0aW9ucyA9IHBhcnNlclV0aWwuZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihwcm9kdWN0aW9ucyk7IC8vL1xuXG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIG5vZGVGcm9tTGluZXMobGluZXMsIHByb2R1Y3Rpb24gPSBudWxsKSB7XG4gICAgY29uc3QgdG9rZW5zID0gcGFyc2VyVXRpbC50b2tlbnNGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIG5vZGUgPSB0aGlzLnBhcnNlKHRva2VucywgcHJvZHVjdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocHJvZHVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdCh0aGlzLnByb2R1Y3Rpb25zKTtcblxuICAgICAgICBwcm9kdWN0aW9uID0gZmlyc3RQcm9kdWN0aW9uOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucywgdGhpcy5wcm9kdWN0aW9ucyksXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVPck5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBpZiAobm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IChub2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgIGZpcnN0KG5vZGVPck5vZGVzKSA6XG4gICAgICAgICAgICAgICAgICAgbm9kZU9yTm9kZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmaW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gKGluZGV4ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0aW9uc1tpbmRleF0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUobmFtZSkge1xuICAgIGxldCBpbmRleCxcbiAgICAgICAgZm91bmRJbmRleCA9IG51bGw7XG5cbiAgICB0aGlzLnByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbiwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBmb3VuZEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpbmRleCA9IGZvdW5kSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==