'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = require('./configuration'),
    arrayUtilities = require('../utilities/array'),
    parserUtilities = require('../utilities/parser');

var first = arrayUtilities.first,
    tokensFromLines = parserUtilities.tokensFromLines;

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
      var tokens = tokensFromLines(lines),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJzZXJVdGlsaXRpZXMiLCJmaXJzdCIsInRva2Vuc0Zyb21MaW5lcyIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJydWxlIiwidG9rZW5zIiwibm9kZSIsInBhcnNlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFJ1bGUiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJBcnJheSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lTGVuZ3RoIiwiTWF0aCIsIm1heCIsInJ1bGVzU3RyaW5nIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxpQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4Qjs7QUFJTSxJQUFFRyxLQUFGLEdBQVlGLGNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLGVBREYsR0FDc0JGLGVBRHRCLENBQ0VFLGVBREY7O0lBR0FDLFk7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7a0NBRWFDLEssRUFBT0MsSSxFQUFNO0FBQ3pCLFVBQU1DLFNBQVNMLGdCQUFnQkcsS0FBaEIsQ0FBZjtBQUFBLFVBQ01HLE9BQU8sS0FBS0MsS0FBTCxDQUFXRixNQUFYLEVBQW1CRCxJQUFuQixDQURiOztBQUdBLGFBQU9FLElBQVA7QUFDRDs7OzBCQUVLRCxNLEVBQXFCO0FBQUEsVUFBYkQsSUFBYSx1RUFBTixJQUFNOztBQUN6QixVQUFJRSxPQUFPLElBQVg7O0FBRUEsVUFBSUYsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1JLGNBQWMsS0FBS04sS0FBTCxDQUFXTyxNQUEvQjs7QUFFQSxZQUFJRCxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLGNBQU1FLFlBQVlYLE1BQU0sS0FBS0csS0FBWCxDQUFsQjs7QUFFQUUsaUJBQU9NLFNBQVAsQ0FIbUIsQ0FHRDtBQUNuQjtBQUNGOztBQUVELFVBQUlOLFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNTyxnQkFBZ0IsSUFBSWhCLGFBQUosQ0FBa0JVLE1BQWxCLEVBQTBCLEtBQUtILEtBQS9CLENBQXRCO0FBQUEsWUFDTVUsZUFBZSxLQURyQjtBQUFBLFlBQzRCO0FBQ3RCQyxzQkFBY1QsS0FBS0csS0FBTCxDQUFXSSxhQUFYLEVBQTBCQyxZQUExQixDQUZwQjs7QUFJQSxZQUFJQyxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJQLGlCQUFRTyx1QkFBdUJDLEtBQXhCLEdBQ0VmLE1BQU1jLFdBQU4sQ0FERixHQUVJQSxXQUZYO0FBR0Q7QUFDRjs7QUFFRCxhQUFPUCxJQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1TLHdCQUF3QixLQUFLYixLQUFMLENBQVdjLE1BQVgsQ0FBa0IsVUFBU0QscUJBQVQsRUFBZ0NYLElBQWhDLEVBQXNDO0FBQzlFLFlBQU1hLFdBQVdiLEtBQUtjLE9BQUwsRUFBakI7QUFBQSxZQUNNQyxpQkFBaUJGLFNBQVNSLE1BRGhDOztBQUdBTSxnQ0FBd0JLLEtBQUtDLEdBQUwsQ0FBU04scUJBQVQsRUFBZ0NJLGNBQWhDLENBQXhCOztBQUVBLGVBQU9KLHFCQUFQO0FBQ0QsT0FQdUIsRUFPckIsQ0FQcUIsQ0FBOUI7QUFBQSxVQVFNTyxjQUFjLEtBQUtwQixLQUFMLENBQVdjLE1BQVgsQ0FBa0IsVUFBU00sV0FBVCxFQUFzQmxCLElBQXRCLEVBQTRCO0FBQzFELFlBQU1tQixhQUFhbkIsS0FBS29CLFFBQUwsQ0FBY1QscUJBQWQsQ0FBbkI7O0FBRUFPLHVCQUFlQyxVQUFmOztBQUVBLGVBQU9ELFdBQVA7QUFDRCxPQU5hLEVBTVgsRUFOVyxDQVJwQjs7QUFnQkEsYUFBT0EsV0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQnpCLFlBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vY29uZmlndXJhdGlvbicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHBhcnNlclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXInKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRva2Vuc0Zyb21MaW5lcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuICAgIFxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBydWxlID0gbnVsbCkge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlc0xlbmd0aCA9IHRoaXMucnVsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UnVsZSA9IGZpcnN0KHRoaXMucnVsZXMpO1xuXG4gICAgICAgIHJ1bGUgPSBmaXJzdFJ1bGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24odG9rZW5zLCB0aGlzLnJ1bGVzKSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICAgIG5vZGVPck5vZGVzID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBpZiAobm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IChub2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgIGZpcnN0KG5vZGVPck5vZGVzKSA6XG4gICAgICAgICAgICAgICAgICAgbm9kZU9yTm9kZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBydWxlc0FzU3RyaW5nKCkge1xuICAgIGNvbnN0IG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoO1xuICBcbiAgICAgICAgICAgIG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBtYXhpbXVtUnVsZU5hbWVMZW5ndGg7XG4gICAgICAgICAgfSwgMCksXG4gICAgICAgICAgcnVsZXNTdHJpbmcgPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihydWxlc1N0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICBydWxlc1N0cmluZyArPSBydWxlU3RyaW5nO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgICAgICB9LCAnJyk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuIl19