'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    arrayUtil = require('../util/array'),
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
    value: function nodeFromLines(lines, production) {
      var tokens = parserUtil.tokensFromLines(lines),
          node = this.parse(tokens, production);

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(tokens) {
      var production = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var node = null;

      if (production === null) {
        var productionsLength = this.productions.length;

        if (productionsLength > 0) {
          var firstProduction = arrayUtil.first(this.productions);

          production = firstProduction; ///
        }
      }

      if (production !== null) {
        var context = new Context(tokens, this.productions),
            noWhitespace = false,
            ///
        nodeOrNodes = production.parse(context, noWhitespace);

        if (nodeOrNodes !== null) {
          node = nodeOrNodes instanceof Array ? arrayUtil.first(nodeOrNodes) : nodeOrNodes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwicGFyc2VyVXRpbCIsIkNvbW1vblBhcnNlciIsInByb2R1Y3Rpb25zIiwibGluZXMiLCJwcm9kdWN0aW9uIiwidG9rZW5zIiwidG9rZW5zRnJvbUxpbmVzIiwibm9kZSIsInBhcnNlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsIkFycmF5IiwicHJvZHVjdGlvbk5hbWUiLCJmaW5kUHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRSxhQUFhRixRQUFRLGdCQUFSLENBRm5COztJQUlNRyxZO0FBQ0osd0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtBLFdBQVo7QUFDRDs7O2tDQUVhQyxLLEVBQU9DLFUsRUFBWTtBQUMvQixVQUFNQyxTQUFTTCxXQUFXTSxlQUFYLENBQTJCSCxLQUEzQixDQUFmO0FBQUEsVUFDTUksT0FBTyxLQUFLQyxLQUFMLENBQVdILE1BQVgsRUFBbUJELFVBQW5CLENBRGI7O0FBR0EsYUFBT0csSUFBUDtBQUNEOzs7MEJBRUtGLE0sRUFBMkI7QUFBQSxVQUFuQkQsVUFBbUIsdUVBQU4sSUFBTTs7QUFDL0IsVUFBSUcsT0FBTyxJQUFYOztBQUVBLFVBQUlILGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsWUFBTUssb0JBQW9CLEtBQUtQLFdBQUwsQ0FBaUJRLE1BQTNDOztBQUVBLFlBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixjQUFNRSxrQkFBa0JaLFVBQVVhLEtBQVYsQ0FBZ0IsS0FBS1YsV0FBckIsQ0FBeEI7O0FBRUFFLHVCQUFhTyxlQUFiLENBSHlCLENBR0s7QUFDL0I7QUFDRjs7QUFFRCxVQUFJUCxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLFlBQU1TLFVBQVUsSUFBSWhCLE9BQUosQ0FBWVEsTUFBWixFQUFvQixLQUFLSCxXQUF6QixDQUFoQjtBQUFBLFlBQ01ZLGVBQWUsS0FEckI7QUFBQSxZQUM0QjtBQUN0QkMsc0JBQWNYLFdBQVdJLEtBQVgsQ0FBaUJLLE9BQWpCLEVBQTBCQyxZQUExQixDQUZwQjs7QUFJQSxZQUFJQyxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJSLGlCQUFRUSx1QkFBdUJDLEtBQXhCLEdBQ0VqQixVQUFVYSxLQUFWLENBQWdCRyxXQUFoQixDQURGLEdBRUlBLFdBRlg7QUFHRDtBQUNGOztBQUVELGFBQU9SLElBQVA7QUFDRDs7O21DQUVjVSxjLEVBQWdCO0FBQUUsYUFBT2pCLFdBQVdrQixjQUFYLENBQTBCRCxjQUExQixFQUEwQyxLQUFLZixXQUEvQyxDQUFQO0FBQXFFOzs7Ozs7QUFHeEdpQixPQUFPQyxPQUFQLEdBQWlCbkIsWUFBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXG4gICAgICBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5JyksXG4gICAgICBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9wYXJzZXInKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgbm9kZUZyb21MaW5lcyhsaW5lcywgcHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHRva2VucyA9IHBhcnNlclV0aWwudG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb24pO1xuICAgIFxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uID0gbnVsbCkge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGlmIChwcm9kdWN0aW9uID09PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbiA9IGFycmF5VXRpbC5maXJzdCh0aGlzLnByb2R1Y3Rpb25zKTtcblxuICAgICAgICBwcm9kdWN0aW9uID0gZmlyc3RQcm9kdWN0aW9uOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucywgdGhpcy5wcm9kdWN0aW9ucyksXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBhcnJheVV0aWwuZmlyc3Qobm9kZU9yTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICBub2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKSB7IHJldHVybiBwYXJzZXJVdGlsLmZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lLCB0aGlzLnByb2R1Y3Rpb25zKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcbiJdfQ==