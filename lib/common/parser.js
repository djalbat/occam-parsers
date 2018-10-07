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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwidG9rZW5zIiwicnVsZSIsIm5vZGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UnVsZSIsImNvbmZpZ3VyYXRpb24iLCJmcm9tVG9rZW5zQW5kUnVsZXMiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsInBhcnNlIiwiQXJyYXkiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJyZWR1Y2UiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZUxlbmd0aCIsIk1hdGgiLCJtYXgiLCJydWxlc1N0cmluZyIsInJ1bGVTdHJpbmciLCJhc1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsaUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7O0lBR1FFLEssR0FBVUQsYyxDQUFWQyxLOztJQUVGQyxZO0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzBCQUVLQyxNLEVBQXFCO0FBQUEsVUFBYkMsSUFBYSx1RUFBTixJQUFNOztBQUN6QixVQUFJQyxPQUFPLElBQVg7O0FBRUEsVUFBSUQsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1FLGNBQWMsS0FBS0osS0FBTCxDQUFXSyxNQUEvQjs7QUFFQSxZQUFJRCxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLGNBQU1FLFlBQVlSLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjs7QUFFQUUsaUJBQU9JLFNBQVAsQ0FIbUIsQ0FHRDtBQUNuQjtBQUNGOztBQUVELFVBQUlKLFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNSyxnQkFBZ0JaLGNBQWNhLGtCQUFkLENBQWlDUCxNQUFqQyxFQUF5QyxLQUFLRCxLQUE5QyxDQUF0QjtBQUFBLFlBQ01TLGVBQWUsS0FEckI7QUFBQSxZQUM0QjtBQUN0QkMsc0JBQWNSLEtBQUtTLEtBQUwsQ0FBV0osYUFBWCxFQUEwQkUsWUFBMUIsQ0FGcEI7O0FBSUEsWUFBSUMsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCUCxpQkFBUU8sdUJBQXVCRSxLQUF4QixHQUNFZCxNQUFNWSxXQUFOLENBREYsR0FFSUEsV0FGWDtBQUdEO0FBQ0Y7O0FBRUQsYUFBT1AsSUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNVSx3QkFBd0IsS0FBS2IsS0FBTCxDQUFXYyxNQUFYLENBQWtCLFVBQVNELHFCQUFULEVBQWdDWCxJQUFoQyxFQUFzQztBQUM5RSxZQUFNYSxXQUFXYixLQUFLYyxPQUFMLEVBQWpCO0FBQUEsWUFDTUMsaUJBQWlCRixTQUFTVixNQURoQzs7QUFHQVEsZ0NBQXdCSyxLQUFLQyxHQUFMLENBQVNOLHFCQUFULEVBQWdDSSxjQUFoQyxDQUF4Qjs7QUFFQSxlQUFPSixxQkFBUDtBQUNELE9BUHVCLEVBT3JCLENBUHFCLENBQTlCO0FBQUEsVUFRTU8sY0FBYyxLQUFLcEIsS0FBTCxDQUFXYyxNQUFYLENBQWtCLFVBQVNNLFdBQVQsRUFBc0JsQixJQUF0QixFQUE0QjtBQUMxRCxZQUFNbUIsYUFBYW5CLEtBQUtvQixRQUFMLENBQWNULHFCQUFkLENBQW5COztBQUVBTyx1QkFBZUMsVUFBZjs7QUFFQSxlQUFPRCxXQUFQO0FBQ0QsT0FOYSxFQU1YLEVBTlcsQ0FScEI7O0FBZ0JBLGFBQU9BLFdBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJ6QixZQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL2NvbmZpZ3VyYXRpb24nKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBydWxlID0gbnVsbCkge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlc0xlbmd0aCA9IHRoaXMucnVsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UnVsZSA9IGZpcnN0KHRoaXMucnVsZXMpO1xuXG4gICAgICAgIHJ1bGUgPSBmaXJzdFJ1bGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb25maWd1cmF0aW9uID0gQ29uZmlndXJhdGlvbi5mcm9tVG9rZW5zQW5kUnVsZXModG9rZW5zLCB0aGlzLnJ1bGVzKSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICAgIG5vZGVPck5vZGVzID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBpZiAobm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IChub2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgIGZpcnN0KG5vZGVPck5vZGVzKSA6XG4gICAgICAgICAgICAgICAgICAgbm9kZU9yTm9kZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBydWxlc0FzU3RyaW5nKCkge1xuICAgIGNvbnN0IG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoO1xuICBcbiAgICAgICAgICAgIG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBtYXhpbXVtUnVsZU5hbWVMZW5ndGg7XG4gICAgICAgICAgfSwgMCksXG4gICAgICAgICAgcnVsZXNTdHJpbmcgPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihydWxlc1N0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICBydWxlc1N0cmluZyArPSBydWxlU3RyaW5nO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgICAgICB9LCAnJyk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuIl19