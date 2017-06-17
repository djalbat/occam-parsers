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
    key: 'toString',
    value: function toString() {
      var maximumProductionNameLength = this.productions.reduce(function (maximumProductionNameLength, production) {
        var productionName = production.getName(),
            productionNameLength = productionName.length;

        maximumProductionNameLength = Math.max(maximumProductionNameLength, productionNameLength);

        return maximumProductionNameLength;
      }, 0),
          string = this.productions.reduce(function (string, production) {
        var productionString = production.toString(maximumProductionNameLength);

        string += productionString;

        return string;
      }, '');

      return string;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwicGFyc2VyVXRpbCIsIkNvbW1vblBhcnNlciIsInByb2R1Y3Rpb25zIiwibGluZXMiLCJwcm9kdWN0aW9uIiwidG9rZW5zIiwidG9rZW5zRnJvbUxpbmVzIiwibm9kZSIsInBhcnNlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsIkFycmF5IiwibWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwicmVkdWNlIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJvZHVjdGlvbk5hbWVMZW5ndGgiLCJNYXRoIiwibWF4Iiwic3RyaW5nIiwicHJvZHVjdGlvblN0cmluZyIsInRvU3RyaW5nIiwiZmluZFByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxlQUFSLENBRGxCO0FBQUEsSUFFTUUsYUFBYUYsUUFBUSxnQkFBUixDQUZuQjs7SUFJTUcsWTtBQUNKLHdCQUFZQyxXQUFaLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQSxXQUFaO0FBQ0Q7OztrQ0FFYUMsSyxFQUFPQyxVLEVBQVk7QUFDL0IsVUFBTUMsU0FBU0wsV0FBV00sZUFBWCxDQUEyQkgsS0FBM0IsQ0FBZjtBQUFBLFVBQ01JLE9BQU8sS0FBS0MsS0FBTCxDQUFXSCxNQUFYLEVBQW1CRCxVQUFuQixDQURiOztBQUdBLGFBQU9HLElBQVA7QUFDRDs7OzBCQUVLRixNLEVBQTJCO0FBQUEsVUFBbkJELFVBQW1CLHVFQUFOLElBQU07O0FBQy9CLFVBQUlHLE9BQU8sSUFBWDs7QUFFQSxVQUFJSCxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLFlBQU1LLG9CQUFvQixLQUFLUCxXQUFMLENBQWlCUSxNQUEzQzs7QUFFQSxZQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsY0FBTUUsa0JBQWtCWixVQUFVYSxLQUFWLENBQWdCLEtBQUtWLFdBQXJCLENBQXhCOztBQUVBRSx1QkFBYU8sZUFBYixDQUh5QixDQUdLO0FBQy9CO0FBQ0Y7O0FBRUQsVUFBSVAsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixZQUFNUyxVQUFVLElBQUloQixPQUFKLENBQVlRLE1BQVosRUFBb0IsS0FBS0gsV0FBekIsQ0FBaEI7QUFBQSxZQUNNWSxlQUFlLEtBRHJCO0FBQUEsWUFDNEI7QUFDdEJDLHNCQUFjWCxXQUFXSSxLQUFYLENBQWlCSyxPQUFqQixFQUEwQkMsWUFBMUIsQ0FGcEI7O0FBSUEsWUFBSUMsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCUixpQkFBUVEsdUJBQXVCQyxLQUF4QixHQUNFakIsVUFBVWEsS0FBVixDQUFnQkcsV0FBaEIsQ0FERixHQUVJQSxXQUZYO0FBR0Q7QUFDRjs7QUFFRCxhQUFPUixJQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1VLDhCQUE4QixLQUFLZixXQUFMLENBQWlCZ0IsTUFBakIsQ0FBd0IsVUFBU0QsMkJBQVQsRUFBc0NiLFVBQXRDLEVBQWtEO0FBQ3RHLFlBQU1lLGlCQUFpQmYsV0FBV2dCLE9BQVgsRUFBdkI7QUFBQSxZQUNNQyx1QkFBdUJGLGVBQWVULE1BRDVDOztBQUdBTyxzQ0FBOEJLLEtBQUtDLEdBQUwsQ0FBU04sMkJBQVQsRUFBc0NJLG9CQUF0QyxDQUE5Qjs7QUFFQSxlQUFPSiwyQkFBUDtBQUNELE9BUDZCLEVBTzNCLENBUDJCLENBQXBDO0FBQUEsVUFRTU8sU0FBUyxLQUFLdEIsV0FBTCxDQUFpQmdCLE1BQWpCLENBQXdCLFVBQVNNLE1BQVQsRUFBaUJwQixVQUFqQixFQUE2QjtBQUM1RCxZQUFNcUIsbUJBQW1CckIsV0FBV3NCLFFBQVgsQ0FBb0JULDJCQUFwQixDQUF6Qjs7QUFFQU8sa0JBQVVDLGdCQUFWOztBQUVBLGVBQU9ELE1BQVA7QUFDRCxPQU5RLEVBTU4sRUFOTSxDQVJmOztBQWdCQSxhQUFPQSxNQUFQO0FBQ0Q7OzttQ0FFY0wsYyxFQUFnQjtBQUFFLGFBQU9uQixXQUFXMkIsY0FBWCxDQUEwQlIsY0FBMUIsRUFBMEMsS0FBS2pCLFdBQS9DLENBQVA7QUFBcUU7Ozs7OztBQUd4RzBCLE9BQU9DLE9BQVAsR0FBaUI1QixZQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIHBhcnNlclV0aWwgPSByZXF1aXJlKCcuLi91dGlsL3BhcnNlcicpO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9ucykge1xuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgdG9rZW5zID0gcGFyc2VyVXRpbC50b2tlbnNGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIG5vZGUgPSB0aGlzLnBhcnNlKHRva2VucywgcHJvZHVjdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb24gPSBudWxsKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uID0gYXJyYXlVdGlsLmZpcnN0KHRoaXMucHJvZHVjdGlvbnMpO1xuXG4gICAgICAgIHByb2R1Y3Rpb24gPSBmaXJzdFByb2R1Y3Rpb247IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zLCB0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICAgIG5vZGVPck5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBpZiAobm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IChub2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgIGFycmF5VXRpbC5maXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG4gIFxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLnJlZHVjZShmdW5jdGlvbihtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgsIHByb2R1Y3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZUxlbmd0aCA9IHByb2R1Y3Rpb25OYW1lLmxlbmd0aDtcbiAgXG4gICAgICAgICAgICBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGggPSBNYXRoLm1heChtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgsIHByb2R1Y3Rpb25OYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gbWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoO1xuICAgICAgICAgIH0sIDApLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMucHJvZHVjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKHN0cmluZywgcHJvZHVjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdGlvblN0cmluZyA9IHByb2R1Y3Rpb24udG9TdHJpbmcobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICBzdHJpbmcgKz0gcHJvZHVjdGlvblN0cmluZztcbiAgXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICAgIH0sICcnKTtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUsIHRoaXMucHJvZHVjdGlvbnMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuIl19