'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = require('./configuration'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first;

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
    key: 'nodeFromTokens',
    value: function nodeFromTokens(tokens, rule) {
      var node = this.parse(tokens, rule);

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
        var configuration = Configuration.fromTokensAndRules(tokens, this.rules),
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
    key: 'rulesAsString',
    value: function rulesAsString() {
      var maximumRuleNameLength = this.rules.reduce(function (maximumRuleNameLength, rule) {
        var ruleName = rule.getName(),
            ruleNameLength = ruleName.length;

        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

        return maximumRuleNameLength;
      }, 0),
          rulesString = this.rules.reduce(function (rulesString, rule) {
        var ruleString = rule.asString(maximumRuleNameLength);

        rulesString += ruleString;

        return rulesString;
      }, '');

      return rulesString;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwidG9rZW5zIiwicnVsZSIsIm5vZGUiLCJwYXJzZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RSdWxlIiwiY29uZmlndXJhdGlvbiIsImZyb21Ub2tlbnNBbmRSdWxlcyIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiQXJyYXkiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJyZWR1Y2UiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZUxlbmd0aCIsIk1hdGgiLCJtYXgiLCJydWxlc1N0cmluZyIsInJ1bGVTdHJpbmciLCJhc1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsaUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7O0lBR1FFLEssR0FBVUQsYyxDQUFWQyxLOztJQUVGQyxZO0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O21DQUVjQyxNLEVBQVFDLEksRUFBTTtBQUMzQixVQUFNQyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0gsTUFBWCxFQUFtQkMsSUFBbkIsQ0FBYjs7QUFFQSxhQUFPQyxJQUFQO0FBQ0Q7OzswQkFFS0YsTSxFQUFxQjtBQUFBLFVBQWJDLElBQWEsdUVBQU4sSUFBTTs7QUFDekIsVUFBSUMsT0FBTyxJQUFYOztBQUVBLFVBQUlELFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNRyxjQUFjLEtBQUtMLEtBQUwsQ0FBV00sTUFBL0I7O0FBRUEsWUFBSUQsY0FBYyxDQUFsQixFQUFxQjtBQUNuQixjQUFNRSxZQUFZVCxNQUFNLEtBQUtFLEtBQVgsQ0FBbEI7O0FBRUFFLGlCQUFPSyxTQUFQLENBSG1CLENBR0Q7QUFDbkI7QUFDRjs7QUFFRCxVQUFJTCxTQUFTLElBQWIsRUFBbUI7QUFDakIsWUFBTU0sZ0JBQWdCYixjQUFjYyxrQkFBZCxDQUFpQ1IsTUFBakMsRUFBeUMsS0FBS0QsS0FBOUMsQ0FBdEI7QUFBQSxZQUNNVSxlQUFlLEtBRHJCO0FBQUEsWUFDNEI7QUFDdEJDLHNCQUFjVCxLQUFLRSxLQUFMLENBQVdJLGFBQVgsRUFBMEJFLFlBQTFCLENBRnBCOztBQUlBLFlBQUlDLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QlIsaUJBQVFRLHVCQUF1QkMsS0FBeEIsR0FDRWQsTUFBTWEsV0FBTixDQURGLEdBRUlBLFdBRlg7QUFHRDtBQUNGOztBQUVELGFBQU9SLElBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTVUsd0JBQXdCLEtBQUtiLEtBQUwsQ0FBV2MsTUFBWCxDQUFrQixVQUFTRCxxQkFBVCxFQUFnQ1gsSUFBaEMsRUFBc0M7QUFDOUUsWUFBTWEsV0FBV2IsS0FBS2MsT0FBTCxFQUFqQjtBQUFBLFlBQ01DLGlCQUFpQkYsU0FBU1QsTUFEaEM7O0FBR0FPLGdDQUF3QkssS0FBS0MsR0FBTCxDQUFTTixxQkFBVCxFQUFnQ0ksY0FBaEMsQ0FBeEI7O0FBRUEsZUFBT0oscUJBQVA7QUFDRCxPQVB1QixFQU9yQixDQVBxQixDQUE5QjtBQUFBLFVBUU1PLGNBQWMsS0FBS3BCLEtBQUwsQ0FBV2MsTUFBWCxDQUFrQixVQUFTTSxXQUFULEVBQXNCbEIsSUFBdEIsRUFBNEI7QUFDMUQsWUFBTW1CLGFBQWFuQixLQUFLb0IsUUFBTCxDQUFjVCxxQkFBZCxDQUFuQjs7QUFFQU8sdUJBQWVDLFVBQWY7O0FBRUEsZUFBT0QsV0FBUDtBQUNELE9BTmEsRUFNWCxFQU5XLENBUnBCOztBQWdCQSxhQUFPQSxXQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCekIsWUFBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi9jb25maWd1cmF0aW9uJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIG5vZGVGcm9tVG9rZW5zKHRva2VucywgcnVsZSkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IG51bGwpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZXNMZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdCh0aGlzLnJ1bGVzKTtcblxuICAgICAgICBydWxlID0gZmlyc3RSdWxlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IENvbmZpZ3VyYXRpb24uZnJvbVRva2Vuc0FuZFJ1bGVzKHRva2VucywgdGhpcy5ydWxlcyksXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHJ1bGUucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBmaXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcnVsZXNBc1N0cmluZygpIHtcbiAgICBjb25zdCBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aDtcbiAgXG4gICAgICAgICAgICBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSBNYXRoLm1heChtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoO1xuICAgICAgICAgIH0sIDApLFxuICAgICAgICAgIHJ1bGVzU3RyaW5nID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXNTdHJpbmcsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCk7XG4gIFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgKz0gcnVsZVN0cmluZztcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gICAgICAgICAgfSwgJycpO1xuICAgIFxuICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcbiJdfQ==