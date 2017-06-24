'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    arrayUtil = require('../util/array'),
    parserUtil = require('../util/parser');

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
      var tokens = parserUtil.tokensFromLines(lines),
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
          var firstRule = arrayUtil.first(this.rules);

          rule = firstRule; ///
        }
      }

      if (rule !== null) {
        var context = new Context(tokens, this.rules),
            noWhitespace = false,
            ///
        nodeOrNodes = rule.parse(context, noWhitespace);

        if (nodeOrNodes !== null) {
          node = nodeOrNodes instanceof Array ? arrayUtil.first(nodeOrNodes) : nodeOrNodes;
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
  }, {
    key: 'findRule',
    value: function findRule(ruleName) {
      var rules = this.getRules();

      return parserUtil.findRule(ruleName, rules);
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwicGFyc2VyVXRpbCIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJydWxlIiwidG9rZW5zIiwidG9rZW5zRnJvbUxpbmVzIiwibm9kZSIsInBhcnNlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFJ1bGUiLCJmaXJzdCIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsIkFycmF5IiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwicmVkdWNlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVMZW5ndGgiLCJNYXRoIiwibWF4Iiwic3RyaW5nIiwicnVsZVN0cmluZyIsInRvU3RyaW5nIiwiZ2V0UnVsZXMiLCJmaW5kUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRSxhQUFhRixRQUFRLGdCQUFSLENBRm5COztJQUlNRyxZO0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O2tDQUVhQyxLLEVBQU9DLEksRUFBTTtBQUN6QixVQUFNQyxTQUFTTCxXQUFXTSxlQUFYLENBQTJCSCxLQUEzQixDQUFmO0FBQUEsVUFDTUksT0FBTyxLQUFLQyxLQUFMLENBQVdILE1BQVgsRUFBbUJELElBQW5CLENBRGI7O0FBR0EsYUFBT0csSUFBUDtBQUNEOzs7MEJBRUtGLE0sRUFBcUI7QUFBQSxVQUFiRCxJQUFhLHVFQUFOLElBQU07O0FBQ3pCLFVBQUlHLE9BQU8sSUFBWDs7QUFFQSxVQUFJSCxTQUFTLElBQWIsRUFBbUI7QUFDakIsWUFBTUssY0FBYyxLQUFLUCxLQUFMLENBQVdRLE1BQS9COztBQUVBLFlBQUlELGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsY0FBTUUsWUFBWVosVUFBVWEsS0FBVixDQUFnQixLQUFLVixLQUFyQixDQUFsQjs7QUFFQUUsaUJBQU9PLFNBQVAsQ0FIbUIsQ0FHRDtBQUNuQjtBQUNGOztBQUVELFVBQUlQLFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNUyxVQUFVLElBQUloQixPQUFKLENBQVlRLE1BQVosRUFBb0IsS0FBS0gsS0FBekIsQ0FBaEI7QUFBQSxZQUNNWSxlQUFlLEtBRHJCO0FBQUEsWUFDNEI7QUFDdEJDLHNCQUFjWCxLQUFLSSxLQUFMLENBQVdLLE9BQVgsRUFBb0JDLFlBQXBCLENBRnBCOztBQUlBLFlBQUlDLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QlIsaUJBQVFRLHVCQUF1QkMsS0FBeEIsR0FDRWpCLFVBQVVhLEtBQVYsQ0FBZ0JHLFdBQWhCLENBREYsR0FFSUEsV0FGWDtBQUdEO0FBQ0Y7O0FBRUQsYUFBT1IsSUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVSx3QkFBd0IsS0FBS2YsS0FBTCxDQUFXZ0IsTUFBWCxDQUFrQixVQUFTRCxxQkFBVCxFQUFnQ2IsSUFBaEMsRUFBc0M7QUFDOUUsWUFBTWUsV0FBV2YsS0FBS2dCLE9BQUwsRUFBakI7QUFBQSxZQUNNQyxpQkFBaUJGLFNBQVNULE1BRGhDOztBQUdBTyxnQ0FBd0JLLEtBQUtDLEdBQUwsQ0FBU04scUJBQVQsRUFBZ0NJLGNBQWhDLENBQXhCOztBQUVBLGVBQU9KLHFCQUFQO0FBQ0QsT0FQdUIsRUFPckIsQ0FQcUIsQ0FBOUI7QUFBQSxVQVFNTyxTQUFTLEtBQUt0QixLQUFMLENBQVdnQixNQUFYLENBQWtCLFVBQVNNLE1BQVQsRUFBaUJwQixJQUFqQixFQUF1QjtBQUNoRCxZQUFNcUIsYUFBYXJCLEtBQUtzQixRQUFMLENBQWNULHFCQUFkLENBQW5COztBQUVBTyxrQkFBVUMsVUFBVjs7QUFFQSxlQUFPRCxNQUFQO0FBQ0QsT0FOUSxFQU1OLEVBTk0sQ0FSZjs7QUFnQkEsYUFBT0EsTUFBUDtBQUNEOzs7NkJBRVFMLFEsRUFBVTtBQUNqQixVQUFNakIsUUFBUSxLQUFLeUIsUUFBTCxFQUFkOztBQUVBLGFBQU8zQixXQUFXNEIsUUFBWCxDQUFvQlQsUUFBcEIsRUFBOEJqQixLQUE5QixDQUFQO0FBQ0Q7Ozs7OztBQUdIMkIsT0FBT0MsT0FBUCxHQUFpQjdCLFlBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpLFxuICAgICAgcGFyc2VyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvcGFyc2VyJyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cbiAgXG4gIG5vZGVGcm9tTGluZXMobGluZXMsIHJ1bGUpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBwYXJzZXJVdGlsLnRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zLCBydWxlKTtcbiAgICBcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IG51bGwpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZXNMZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBhcnJheVV0aWwuZmlyc3QodGhpcy5ydWxlcyk7XG5cbiAgICAgICAgcnVsZSA9IGZpcnN0UnVsZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMsIHRoaXMucnVsZXMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgYXJyYXlVdGlsLmZpcnN0KG5vZGVPck5vZGVzKSA6XG4gICAgICAgICAgICAgICAgICAgbm9kZU9yTm9kZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoO1xuICBcbiAgICAgICAgICAgIG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBtYXhpbXVtUnVsZU5hbWVMZW5ndGg7XG4gICAgICAgICAgfSwgMCksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24oc3RyaW5nLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS50b1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHN0cmluZyArPSBydWxlU3RyaW5nO1xuICBcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgICAgfSwgJycpO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBmaW5kUnVsZShydWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpO1xuXG4gICAgcmV0dXJuIHBhcnNlclV0aWwuZmluZFJ1bGUocnVsZU5hbWUsIHJ1bGVzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcbiJdfQ==