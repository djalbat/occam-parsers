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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJzZXJVdGlsaXRpZXMiLCJmaXJzdCIsInRva2Vuc0Zyb21MaW5lcyIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJydWxlIiwidG9rZW5zIiwibm9kZSIsInBhcnNlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFJ1bGUiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJBcnJheSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lTGVuZ3RoIiwiTWF0aCIsIm1heCIsInJ1bGVzU3RyaW5nIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxpQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4Qjs7QUFJTSxJQUFFRyxLQUFGLEdBQVlGLGNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLGVBREYsR0FDc0JGLGVBRHRCLENBQ0VFLGVBREY7O0lBR0FDLFk7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7a0NBRWFDLEssRUFBT0MsSSxFQUFNO0FBQ3pCLFVBQU1DLFNBQVNMLGdCQUFnQkcsS0FBaEIsQ0FBZjtBQUFBLFVBQ01HLE9BQU8sS0FBS0MsS0FBTCxDQUFXRixNQUFYLEVBQW1CRCxJQUFuQixDQURiOztBQUdBLGFBQU9FLElBQVA7QUFDRDs7OzBCQUVLRCxNLEVBQXFCO0FBQUEsVUFBYkQsSUFBYSx1RUFBTixJQUFNOztBQUN6QixVQUFJRSxPQUFPLElBQVg7O0FBRUEsVUFBSUYsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1JLGNBQWMsS0FBS04sS0FBTCxDQUFXTyxNQUEvQjs7QUFFQSxZQUFJRCxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLGNBQU1FLFlBQVlYLE1BQU0sS0FBS0csS0FBWCxDQUFsQjs7QUFFQUUsaUJBQU9NLFNBQVAsQ0FIbUIsQ0FHRDtBQUNuQjtBQUNGOztBQUVELFVBQUlOLFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNTyxnQkFBZ0IsSUFBSWhCLGFBQUosQ0FBa0JVLE1BQWxCLEVBQTBCLEtBQUtILEtBQS9CLENBQXRCO0FBQUEsWUFDTVUsZUFBZSxLQURyQjtBQUFBLFlBQzRCO0FBQ3RCQyxzQkFBY1QsS0FBS0csS0FBTCxDQUFXSSxhQUFYLEVBQTBCQyxZQUExQixDQUZwQjs7QUFJQSxZQUFJQyxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJQLGlCQUFRTyx1QkFBdUJDLEtBQXhCLEdBQ0VmLE1BQU1jLFdBQU4sQ0FERixHQUVJQSxXQUZYO0FBR0Q7QUFDRjs7QUFFRCxhQUFPUCxJQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1TLHdCQUF3QixLQUFLYixLQUFMLENBQVdjLE1BQVgsQ0FBa0IsVUFBU0QscUJBQVQsRUFBZ0NYLElBQWhDLEVBQXNDO0FBQzlFLFlBQU1hLFdBQVdiLEtBQUtjLE9BQUwsRUFBakI7QUFBQSxZQUNNQyxpQkFBaUJGLFNBQVNSLE1BRGhDOztBQUdBTSxnQ0FBd0JLLEtBQUtDLEdBQUwsQ0FBU04scUJBQVQsRUFBZ0NJLGNBQWhDLENBQXhCOztBQUVBLGVBQU9KLHFCQUFQO0FBQ0QsT0FQdUIsRUFPckIsQ0FQcUIsQ0FBOUI7QUFBQSxVQVFNTyxjQUFjLEtBQUtwQixLQUFMLENBQVdjLE1BQVgsQ0FBa0IsVUFBU00sV0FBVCxFQUFzQmxCLElBQXRCLEVBQTRCO0FBQzFELFlBQU1tQixhQUFhbkIsS0FBS29CLFFBQUwsQ0FBY1QscUJBQWQsQ0FBbkI7O0FBRUFPLHVCQUFlQyxVQUFmOztBQUVBLGVBQU9ELFdBQVA7QUFDRCxPQU5hLEVBTVgsRUFOVyxDQVJwQjs7QUFnQkEsYUFBT0EsV0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQnpCLFlBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vY29uZmlndXJhdGlvbicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHBhcnNlclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXInKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRva2Vuc0Zyb21MaW5lcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSBudWxsKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gdGhpcy5ydWxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RSdWxlID0gZmlyc3QodGhpcy5ydWxlcyk7XG5cbiAgICAgICAgcnVsZSA9IGZpcnN0UnVsZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih0b2tlbnMsIHRoaXMucnVsZXMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgZmlyc3Qobm9kZU9yTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICBub2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJ1bGVzQXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24obWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGg7XG4gIFxuICAgICAgICAgICAgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gTWF0aC5tYXgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlTmFtZUxlbmd0aCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIG1heGltdW1SdWxlTmFtZUxlbmd0aDtcbiAgICAgICAgICB9LCAwKSxcbiAgICAgICAgICBydWxlc1N0cmluZyA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKHJ1bGVzU3RyaW5nLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5hc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nICs9IHJ1bGVTdHJpbmc7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICAgICAgICAgIH0sICcnKTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG4iXX0=