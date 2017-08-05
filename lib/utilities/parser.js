'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parserUtilities = function () {
  function parserUtilities() {
    _classCallCheck(this, parserUtilities);
  }

  _createClass(parserUtilities, null, [{
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
    key: 'findRuleByName',
    value: function findRuleByName(name, rules) {
      var rule = rules.find(function (rule) {
        var ruleName = rule.getName(),
            found = ruleName === name;

        return found;
      }) || null; ///

      return rule;
    }
  }]);

  return parserUtilities;
}();

module.exports = parserUtilities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvcGFyc2VyLmpzIl0sIm5hbWVzIjpbInBhcnNlclV0aWxpdGllcyIsImxpbmVzIiwidG9rZW5zIiwicmVkdWNlIiwibGluZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiLCJuYW1lIiwicnVsZXMiLCJydWxlIiwiZmluZCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImZvdW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxlOzs7Ozs7O29DQUNtQkMsSyxFQUFPO0FBQzVCLFVBQU1DLFNBQVNELE1BQU1FLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCRSxJQUFqQixFQUF1QjtBQUNqRCxZQUFNQyxhQUFhRCxLQUFLRSxTQUFMLEVBQW5COztBQUVBSixpQkFBU0EsT0FBT0ssTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0gsTUFBUDtBQUNELE9BTmMsRUFNWixFQU5ZLENBQWY7O0FBUUEsYUFBT0EsTUFBUDtBQUNEOzs7bUNBRXFCTSxJLEVBQU1DLEssRUFBTztBQUNqQyxVQUFNQyxPQUFPRCxNQUFNRSxJQUFOLENBQVcsVUFBU0QsSUFBVCxFQUFlO0FBQ3JDLFlBQU1FLFdBQVdGLEtBQUtHLE9BQUwsRUFBakI7QUFBQSxZQUNNQyxRQUFTRixhQUFhSixJQUQ1Qjs7QUFHQSxlQUFPTSxLQUFQO0FBQ0QsT0FMWSxLQUtQLElBTE4sQ0FEaUMsQ0FNckI7O0FBRVosYUFBT0osSUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQmhCLGVBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgcGFyc2VyVXRpbGl0aWVzIHtcbiAgc3RhdGljIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICAgIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgIGNvbnN0IGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xuXG4gICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuXG4gICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpIHtcbiAgICBjb25zdCBydWxlID0gcnVsZXMuZmluZChmdW5jdGlvbihydWxlKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgZm91bmQgPSAocnVsZU5hbWUgPT09IG5hbWUpO1xuICAgICAgXG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSkgfHwgbnVsbDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZXJVdGlsaXRpZXM7XG4iXX0=