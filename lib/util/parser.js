'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parserUtil = function () {
  function parserUtil() {
    _classCallCheck(this, parserUtil);
  }

  _createClass(parserUtil, null, [{
    key: 'tokensFromLines',
    value: function tokensFromLines(lines) {
      var tokens = lines.reduce(function (tokens, line) {
        var lineTokens = line.getTokens();

        tokens = tokens.concat(lineTokens);

        return tokens;
      }, []);

      return tokens;
    }
  }, {
    key: 'findRule',
    value: function findRule(ruleName, rules) {
      var foundRule = null;

      rules.some(function (rule) {
        var ruleFound = rule.isFoundByRuleName(ruleName);

        if (ruleFound) {
          foundRule = rule;

          return true;
        }
      });

      var rule = foundRule; ///

      return rule;
    }
  }]);

  return parserUtil;
}();

module.exports = parserUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhcnNlci5qcyJdLCJuYW1lcyI6WyJwYXJzZXJVdGlsIiwibGluZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCIsInJ1bGVOYW1lIiwicnVsZXMiLCJmb3VuZFJ1bGUiLCJzb21lIiwicnVsZSIsInJ1bGVGb3VuZCIsImlzRm91bmRCeVJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxVOzs7Ozs7O29DQUNtQkMsSyxFQUFPO0FBQzVCLFVBQU1DLFNBQVNELE1BQU1FLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCRSxJQUFqQixFQUF1QjtBQUNqRCxZQUFNQyxhQUFhRCxLQUFLRSxTQUFMLEVBQW5COztBQUVBSixpQkFBU0EsT0FBT0ssTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0gsTUFBUDtBQUNELE9BTmMsRUFNWixFQU5ZLENBQWY7O0FBUUEsYUFBT0EsTUFBUDtBQUNEOzs7NkJBRWlCTSxRLEVBQVVDLEssRUFBTztBQUNqQyxVQUFJQyxZQUFZLElBQWhCOztBQUVBRCxZQUFNRSxJQUFOLENBQVcsVUFBU0MsSUFBVCxFQUFlO0FBQ3hCLFlBQU1DLFlBQVlELEtBQUtFLGlCQUFMLENBQXVCTixRQUF2QixDQUFsQjs7QUFFQSxZQUFJSyxTQUFKLEVBQWU7QUFDYkgsc0JBQVlFLElBQVo7O0FBRUEsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxVQUFNQSxPQUFPRixTQUFiLENBYmlDLENBYVQ7O0FBRXhCLGFBQU9FLElBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJoQixVQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIHBhcnNlclV0aWwge1xuICBzdGF0aWMgdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgbGluZSkge1xuICAgICAgY29uc3QgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XG5cbiAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG5cbiAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gICAgc3RhdGljIGZpbmRSdWxlKHJ1bGVOYW1lLCBydWxlcykge1xuICAgIGxldCBmb3VuZFJ1bGUgPSBudWxsO1xuXG4gICAgcnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICBjb25zdCBydWxlRm91bmQgPSBydWxlLmlzRm91bmRCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcbiAgICAgIFxuICAgICAgaWYgKHJ1bGVGb3VuZCkge1xuICAgICAgICBmb3VuZFJ1bGUgPSBydWxlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnVsZSA9IGZvdW5kUnVsZTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlclV0aWw7XG4iXX0=