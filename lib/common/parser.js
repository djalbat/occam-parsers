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
    key: 'nodeFromSignificantTokens',
    value: function nodeFromSignificantTokens(significantTokens, rule) {
      var node = this.parse(significantTokens, rule);

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(significantTokens) {
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
        var configuration = Configuration.fromSignificantTokensAndRules(significantTokens, this.rules),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJydWxlIiwibm9kZSIsInBhcnNlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFJ1bGUiLCJjb25maWd1cmF0aW9uIiwiZnJvbVNpZ25pZmljYW50VG9rZW5zQW5kUnVsZXMiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsIkFycmF5IiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwicmVkdWNlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVMZW5ndGgiLCJNYXRoIiwibWF4IiwicnVsZXNTdHJpbmciLCJydWxlU3RyaW5nIiwiYXNTdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLGlCQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCOztJQUdRRSxLLEdBQVVELGMsQ0FBVkMsSzs7SUFFRkMsWTtBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs4Q0FFeUJDLGlCLEVBQW1CQyxJLEVBQU07QUFDakQsVUFBTUMsT0FBTyxLQUFLQyxLQUFMLENBQVdILGlCQUFYLEVBQThCQyxJQUE5QixDQUFiOztBQUVBLGFBQU9DLElBQVA7QUFDRDs7OzBCQUVLRixpQixFQUFnQztBQUFBLFVBQWJDLElBQWEsdUVBQU4sSUFBTTs7QUFDcEMsVUFBSUMsT0FBTyxJQUFYOztBQUVBLFVBQUlELFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNRyxjQUFjLEtBQUtMLEtBQUwsQ0FBV00sTUFBL0I7O0FBRUEsWUFBSUQsY0FBYyxDQUFsQixFQUFxQjtBQUNuQixjQUFNRSxZQUFZVCxNQUFNLEtBQUtFLEtBQVgsQ0FBbEI7O0FBRUFFLGlCQUFPSyxTQUFQLENBSG1CLENBR0Q7QUFDbkI7QUFDRjs7QUFFRCxVQUFJTCxTQUFTLElBQWIsRUFBbUI7QUFDakIsWUFBTU0sZ0JBQWdCYixjQUFjYyw2QkFBZCxDQUE0Q1IsaUJBQTVDLEVBQStELEtBQUtELEtBQXBFLENBQXRCO0FBQUEsWUFDTVUsZUFBZSxLQURyQjtBQUFBLFlBQzRCO0FBQ3RCQyxzQkFBY1QsS0FBS0UsS0FBTCxDQUFXSSxhQUFYLEVBQTBCRSxZQUExQixDQUZwQjs7QUFJQSxZQUFJQyxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJSLGlCQUFRUSx1QkFBdUJDLEtBQXhCLEdBQ0VkLE1BQU1hLFdBQU4sQ0FERixHQUVJQSxXQUZYO0FBR0Q7QUFDRjs7QUFFRCxhQUFPUixJQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1VLHdCQUF3QixLQUFLYixLQUFMLENBQVdjLE1BQVgsQ0FBa0IsVUFBU0QscUJBQVQsRUFBZ0NYLElBQWhDLEVBQXNDO0FBQzlFLFlBQU1hLFdBQVdiLEtBQUtjLE9BQUwsRUFBakI7QUFBQSxZQUNNQyxpQkFBaUJGLFNBQVNULE1BRGhDOztBQUdBTyxnQ0FBd0JLLEtBQUtDLEdBQUwsQ0FBU04scUJBQVQsRUFBZ0NJLGNBQWhDLENBQXhCOztBQUVBLGVBQU9KLHFCQUFQO0FBQ0QsT0FQdUIsRUFPckIsQ0FQcUIsQ0FBOUI7QUFBQSxVQVFNTyxjQUFjLEtBQUtwQixLQUFMLENBQVdjLE1BQVgsQ0FBa0IsVUFBU00sV0FBVCxFQUFzQmxCLElBQXRCLEVBQTRCO0FBQzFELFlBQU1tQixhQUFhbkIsS0FBS29CLFFBQUwsQ0FBY1QscUJBQWQsQ0FBbkI7O0FBRUFPLHVCQUFlQyxVQUFmOztBQUVBLGVBQU9ELFdBQVA7QUFDRCxPQU5hLEVBTVgsRUFOVyxDQVJwQjs7QUFnQkEsYUFBT0EsV0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQnpCLFlBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vY29uZmlndXJhdGlvbicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBub2RlRnJvbVNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zLCBydWxlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2Uoc2lnbmlmaWNhbnRUb2tlbnMsIHJ1bGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZShzaWduaWZpY2FudFRva2VucywgcnVsZSA9IG51bGwpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZXNMZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdCh0aGlzLnJ1bGVzKTtcblxuICAgICAgICBydWxlID0gZmlyc3RSdWxlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IENvbmZpZ3VyYXRpb24uZnJvbVNpZ25pZmljYW50VG9rZW5zQW5kUnVsZXMoc2lnbmlmaWNhbnRUb2tlbnMsIHRoaXMucnVsZXMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgZmlyc3Qobm9kZU9yTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICBub2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJ1bGVzQXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24obWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGg7XG4gIFxuICAgICAgICAgICAgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gTWF0aC5tYXgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlTmFtZUxlbmd0aCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIG1heGltdW1SdWxlTmFtZUxlbmd0aDtcbiAgICAgICAgICB9LCAwKSxcbiAgICAgICAgICBydWxlc1N0cmluZyA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKHJ1bGVzU3RyaW5nLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5hc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nICs9IHJ1bGVTdHJpbmc7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICAgICAgICAgIH0sICcnKTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG4iXX0=