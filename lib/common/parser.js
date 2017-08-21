'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Configuration = require('./configuration'),
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
        var configuration = new Configuration(tokens, this.rules),
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
    key: 'asString',
    value: function asString() {
      var maximumRuleNameLength = this.rules.reduce(function (maximumRuleNameLength, rule) {
        var ruleName = rule.getName(),
            ruleNameLength = ruleName.length;

        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

        return maximumRuleNameLength;
      }, 0),
          string = this.rules.reduce(function (string, rule) {
        var ruleString = rule.asString(maximumRuleNameLength);

        string += ruleString;

        return string;
      }, '');

      return string;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJDb25maWd1cmF0aW9uIiwicGFyc2VyVXRpbGl0aWVzIiwiYXJyYXkiLCJmaXJzdCIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJydWxlIiwidG9rZW5zIiwidG9rZW5zRnJvbUxpbmVzIiwibm9kZSIsInBhcnNlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFJ1bGUiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJBcnJheSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lTGVuZ3RoIiwiTWF0aCIsIm1heCIsInN0cmluZyIsInJ1bGVTdHJpbmciLCJhc1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLGlCQUFSLENBQXRCO0FBQUEsSUFDTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRHhCOztBQUdNLElBQUVHLEtBQUYsR0FBWUosU0FBWixDQUFFSSxLQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxLQURaLENBQ0VDLEtBREY7O0lBR0FDLFk7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7a0NBRWFDLEssRUFBT0MsSSxFQUFNO0FBQ3pCLFVBQU1DLFNBQVNQLGdCQUFnQlEsZUFBaEIsQ0FBZ0NILEtBQWhDLENBQWY7QUFBQSxVQUNNSSxPQUFPLEtBQUtDLEtBQUwsQ0FBV0gsTUFBWCxFQUFtQkQsSUFBbkIsQ0FEYjs7QUFHQSxhQUFPRyxJQUFQO0FBQ0Q7OzswQkFFS0YsTSxFQUFxQjtBQUFBLFVBQWJELElBQWEsdUVBQU4sSUFBTTs7QUFDekIsVUFBSUcsT0FBTyxJQUFYOztBQUVBLFVBQUlILFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNSyxjQUFjLEtBQUtQLEtBQUwsQ0FBV1EsTUFBL0I7O0FBRUEsWUFBSUQsY0FBYyxDQUFsQixFQUFxQjtBQUNuQixjQUFNRSxZQUFZWCxNQUFNLEtBQUtFLEtBQVgsQ0FBbEI7O0FBRUFFLGlCQUFPTyxTQUFQLENBSG1CLENBR0Q7QUFDbkI7QUFDRjs7QUFFRCxVQUFJUCxTQUFTLElBQWIsRUFBbUI7QUFDakIsWUFBTVEsZ0JBQWdCLElBQUlmLGFBQUosQ0FBa0JRLE1BQWxCLEVBQTBCLEtBQUtILEtBQS9CLENBQXRCO0FBQUEsWUFDTVcsZUFBZSxLQURyQjtBQUFBLFlBQzRCO0FBQ3RCQyxzQkFBY1YsS0FBS0ksS0FBTCxDQUFXSSxhQUFYLEVBQTBCQyxZQUExQixDQUZwQjs7QUFJQSxZQUFJQyxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJQLGlCQUFRTyx1QkFBdUJDLEtBQXhCLEdBQ0VmLE1BQU1jLFdBQU4sQ0FERixHQUVJQSxXQUZYO0FBR0Q7QUFDRjs7QUFFRCxhQUFPUCxJQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1TLHdCQUF3QixLQUFLZCxLQUFMLENBQVdlLE1BQVgsQ0FBa0IsVUFBU0QscUJBQVQsRUFBZ0NaLElBQWhDLEVBQXNDO0FBQzlFLFlBQU1jLFdBQVdkLEtBQUtlLE9BQUwsRUFBakI7QUFBQSxZQUNNQyxpQkFBaUJGLFNBQVNSLE1BRGhDOztBQUdBTSxnQ0FBd0JLLEtBQUtDLEdBQUwsQ0FBU04scUJBQVQsRUFBZ0NJLGNBQWhDLENBQXhCOztBQUVBLGVBQU9KLHFCQUFQO0FBQ0QsT0FQdUIsRUFPckIsQ0FQcUIsQ0FBOUI7QUFBQSxVQVFNTyxTQUFTLEtBQUtyQixLQUFMLENBQVdlLE1BQVgsQ0FBa0IsVUFBU00sTUFBVCxFQUFpQm5CLElBQWpCLEVBQXVCO0FBQ2hELFlBQU1vQixhQUFhcEIsS0FBS3FCLFFBQUwsQ0FBY1QscUJBQWQsQ0FBbkI7O0FBRUFPLGtCQUFVQyxVQUFWOztBQUVBLGVBQU9ELE1BQVA7QUFDRCxPQU5RLEVBTU4sRUFOTSxDQVJmOztBQWdCQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCMUIsWUFBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vY29uZmlndXJhdGlvbicpLFxuICAgICAgcGFyc2VyVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnNlcicpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuICBcbiAgbm9kZUZyb21MaW5lcyhsaW5lcywgcnVsZSkge1xuICAgIGNvbnN0IHRva2VucyA9IHBhcnNlclV0aWxpdGllcy50b2tlbnNGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIG5vZGUgPSB0aGlzLnBhcnNlKHRva2VucywgcnVsZSk7XG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSBudWxsKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gdGhpcy5ydWxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RSdWxlID0gZmlyc3QodGhpcy5ydWxlcyk7XG5cbiAgICAgICAgcnVsZSA9IGZpcnN0UnVsZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih0b2tlbnMsIHRoaXMucnVsZXMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgZmlyc3Qobm9kZU9yTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICBub2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoO1xuICBcbiAgICAgICAgICAgIG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBtYXhpbXVtUnVsZU5hbWVMZW5ndGg7XG4gICAgICAgICAgfSwgMCksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24oc3RyaW5nLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5hc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHN0cmluZyArPSBydWxlU3RyaW5nO1xuICBcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgICAgfSwgJycpO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG4iXX0=