'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Context = require('./configuration'),
    parserUtilities = require('../utilities/parser');

var array = necessary.array,
    first = array.first;

var CommonParser = function () {
  function CommonParser(rules) {
    _classCallCheck(this, CommonParser);

    this.rules = rules;
  }

  _createClass(CommonParser, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'nodeFromLines',
    value: function nodeFromLines(lines, rule) {
      var tokens = parserUtilities.tokensFromLines(lines),
          node = this.parse(tokens, rule);

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(tokens) {
      var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var node = null;

      if (rule === null) {
        var rulesLength = this.rules.length;

        if (rulesLength > 0) {
          var firstRule = first(this.rules);

          rule = firstRule; ///
        }
      }

      if (rule !== null) {
        var configuration = new Context(tokens, this.rules),
            noWhitespace = false,
            ///
        nodeOrNodes = rule.parse(configuration, noWhitespace);

        if (nodeOrNodes !== null) {
          node = nodeOrNodes instanceof Array ? first(nodeOrNodes) : nodeOrNodes;
        }
      }

      return node;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var maximumRuleNameLength = this.rules.reduce(function (maximumRuleNameLength, rule) {
        var ruleName = rule.getName(),
            ruleNameLength = ruleName.length;

        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

        return maximumRuleNameLength;
      }, 0),
          string = this.rules.reduce(function (string, rule) {
        var ruleString = rule.toString(maximumRuleNameLength);

        string += ruleString;

        return string;
      }, '');

      return string;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJDb250ZXh0IiwicGFyc2VyVXRpbGl0aWVzIiwiYXJyYXkiLCJmaXJzdCIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJydWxlIiwidG9rZW5zIiwidG9rZW5zRnJvbUxpbmVzIiwibm9kZSIsInBhcnNlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFJ1bGUiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJBcnJheSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lTGVuZ3RoIiwiTWF0aCIsIm1heCIsInN0cmluZyIsInJ1bGVTdHJpbmciLCJ0b1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxpQkFBUixDQUFoQjtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUR4Qjs7QUFHTSxJQUFFRyxLQUFGLEdBQVlKLFNBQVosQ0FBRUksS0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsS0FEWixDQUNFQyxLQURGOztJQUdBQyxZO0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O2tDQUVhQyxLLEVBQU9DLEksRUFBTTtBQUN6QixVQUFNQyxTQUFTUCxnQkFBZ0JRLGVBQWhCLENBQWdDSCxLQUFoQyxDQUFmO0FBQUEsVUFDTUksT0FBTyxLQUFLQyxLQUFMLENBQVdILE1BQVgsRUFBbUJELElBQW5CLENBRGI7O0FBR0EsYUFBT0csSUFBUDtBQUNEOzs7MEJBRUtGLE0sRUFBcUI7QUFBQSxVQUFiRCxJQUFhLHVFQUFOLElBQU07O0FBQ3pCLFVBQUlHLE9BQU8sSUFBWDs7QUFFQSxVQUFJSCxTQUFTLElBQWIsRUFBbUI7QUFDakIsWUFBTUssY0FBYyxLQUFLUCxLQUFMLENBQVdRLE1BQS9COztBQUVBLFlBQUlELGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsY0FBTUUsWUFBWVgsTUFBTSxLQUFLRSxLQUFYLENBQWxCOztBQUVBRSxpQkFBT08sU0FBUCxDQUhtQixDQUdEO0FBQ25CO0FBQ0Y7O0FBRUQsVUFBSVAsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1RLGdCQUFnQixJQUFJZixPQUFKLENBQVlRLE1BQVosRUFBb0IsS0FBS0gsS0FBekIsQ0FBdEI7QUFBQSxZQUNNVyxlQUFlLEtBRHJCO0FBQUEsWUFDNEI7QUFDdEJDLHNCQUFjVixLQUFLSSxLQUFMLENBQVdJLGFBQVgsRUFBMEJDLFlBQTFCLENBRnBCOztBQUlBLFlBQUlDLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QlAsaUJBQVFPLHVCQUF1QkMsS0FBeEIsR0FDRWYsTUFBTWMsV0FBTixDQURGLEdBRUlBLFdBRlg7QUFHRDtBQUNGOztBQUVELGFBQU9QLElBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVMsd0JBQXdCLEtBQUtkLEtBQUwsQ0FBV2UsTUFBWCxDQUFrQixVQUFTRCxxQkFBVCxFQUFnQ1osSUFBaEMsRUFBc0M7QUFDOUUsWUFBTWMsV0FBV2QsS0FBS2UsT0FBTCxFQUFqQjtBQUFBLFlBQ01DLGlCQUFpQkYsU0FBU1IsTUFEaEM7O0FBR0FNLGdDQUF3QkssS0FBS0MsR0FBTCxDQUFTTixxQkFBVCxFQUFnQ0ksY0FBaEMsQ0FBeEI7O0FBRUEsZUFBT0oscUJBQVA7QUFDRCxPQVB1QixFQU9yQixDQVBxQixDQUE5QjtBQUFBLFVBUU1PLFNBQVMsS0FBS3JCLEtBQUwsQ0FBV2UsTUFBWCxDQUFrQixVQUFTTSxNQUFULEVBQWlCbkIsSUFBakIsRUFBdUI7QUFDaEQsWUFBTW9CLGFBQWFwQixLQUFLcUIsUUFBTCxDQUFjVCxxQkFBZCxDQUFuQjs7QUFFQU8sa0JBQVVDLFVBQVY7O0FBRUEsZUFBT0QsTUFBUDtBQUNELE9BTlEsRUFNTixFQU5NLENBUmY7O0FBZ0JBLGFBQU9BLE1BQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUIxQixZQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb25maWd1cmF0aW9uJyksXG4gICAgICBwYXJzZXJVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFyc2VyJyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5O1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlKSB7XG4gICAgY29uc3QgdG9rZW5zID0gcGFyc2VyVXRpbGl0aWVzLnRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zLCBydWxlKTtcbiAgICBcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IG51bGwpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZXNMZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdCh0aGlzLnJ1bGVzKTtcblxuICAgICAgICBydWxlID0gZmlyc3RSdWxlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb250ZXh0KHRva2VucywgdGhpcy5ydWxlcyksXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHJ1bGUucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBmaXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG4gIFxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aDtcbiAgXG4gICAgICAgICAgICBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSBNYXRoLm1heChtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoO1xuICAgICAgICAgIH0sIDApLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKHN0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUudG9TdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICBzdHJpbmcgKz0gcnVsZVN0cmluZztcbiAgXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICAgIH0sICcnKTtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuIl19