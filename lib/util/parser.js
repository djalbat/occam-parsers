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

  return parserUtil;
}();

module.exports = parserUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhcnNlci5qcyJdLCJuYW1lcyI6WyJwYXJzZXJVdGlsIiwibGluZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCIsIm5hbWUiLCJydWxlcyIsInJ1bGUiLCJmaW5kIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZm91bmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFU7Ozs7Ozs7b0NBQ21CQyxLLEVBQU87QUFDNUIsVUFBTUMsU0FBU0QsTUFBTUUsTUFBTixDQUFhLFVBQVNELE1BQVQsRUFBaUJFLElBQWpCLEVBQXVCO0FBQ2pELFlBQU1DLGFBQWFELEtBQUtFLFNBQUwsRUFBbkI7O0FBRUFKLGlCQUFTQSxPQUFPSyxNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxlQUFPSCxNQUFQO0FBQ0QsT0FOYyxFQU1aLEVBTlksQ0FBZjs7QUFRQSxhQUFPQSxNQUFQO0FBQ0Q7OzttQ0FFcUJNLEksRUFBTUMsSyxFQUFPO0FBQ2pDLFVBQU1DLE9BQU9ELE1BQU1FLElBQU4sQ0FBVyxVQUFTRCxJQUFULEVBQWU7QUFDckMsWUFBTUUsV0FBV0YsS0FBS0csT0FBTCxFQUFqQjtBQUFBLFlBQ01DLFFBQVNGLGFBQWFKLElBRDVCOztBQUdBLGVBQU9NLEtBQVA7QUFDRCxPQUxZLEtBS1AsSUFMTixDQURpQyxDQU1yQjs7QUFFWixhQUFPSixJQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCaEIsVUFBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBwYXJzZXJVdGlsIHtcbiAgc3RhdGljIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICAgIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgIGNvbnN0IGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xuXG4gICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuXG4gICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpIHtcbiAgICBjb25zdCBydWxlID0gcnVsZXMuZmluZChmdW5jdGlvbihydWxlKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgZm91bmQgPSAocnVsZU5hbWUgPT09IG5hbWUpO1xuICAgICAgXG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSkgfHwgbnVsbDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZXJVdGlsO1xuIl19