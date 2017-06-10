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
    key: 'findProduction',
    value: function findProduction(productionName, productions) {
      var foundProduction = null;

      productions.some(function (production) {
        var name = production.getName();

        if (name === productionName) {
          foundProduction = production;

          return true;
        }
      });

      var production = foundProduction;

      return production;
    }
  }]);

  return parserUtil;
}();

module.exports = parserUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhcnNlci5qcyJdLCJuYW1lcyI6WyJwYXJzZXJVdGlsIiwibGluZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCIsInByb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvbnMiLCJmb3VuZFByb2R1Y3Rpb24iLCJzb21lIiwicHJvZHVjdGlvbiIsIm5hbWUiLCJnZXROYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxVOzs7Ozs7O29DQUNtQkMsSyxFQUFPO0FBQzVCLFVBQU1DLFNBQVNELE1BQU1FLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCRSxJQUFqQixFQUF1QjtBQUNqRCxZQUFNQyxhQUFhRCxLQUFLRSxTQUFMLEVBQW5COztBQUVBSixpQkFBU0EsT0FBT0ssTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0gsTUFBUDtBQUNELE9BTmMsRUFNWixFQU5ZLENBQWY7O0FBUUEsYUFBT0EsTUFBUDtBQUNEOzs7bUNBRXFCTSxjLEVBQWdCQyxXLEVBQWE7QUFDakQsVUFBSUMsa0JBQWtCLElBQXRCOztBQUVBRCxrQkFBWUUsSUFBWixDQUFpQixVQUFTQyxVQUFULEVBQXFCO0FBQ3BDLFlBQU1DLE9BQU9ELFdBQVdFLE9BQVgsRUFBYjs7QUFFQSxZQUFJRCxTQUFTTCxjQUFiLEVBQTZCO0FBQzNCRSw0QkFBa0JFLFVBQWxCOztBQUVBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsVUFBTUEsYUFBYUYsZUFBbkI7O0FBRUEsYUFBT0UsVUFBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQmhCLFVBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgcGFyc2VyVXRpbCB7XG4gIHN0YXRpYyB0b2tlbnNGcm9tTGluZXMobGluZXMpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XG4gICAgICBjb25zdCBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcblxuICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcblxuICAgICAgcmV0dXJuIHRva2VucztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgc3RhdGljIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucykge1xuICAgIGxldCBmb3VuZFByb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgcHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgICBjb25zdCBuYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBwcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICBmb3VuZFByb2R1Y3Rpb24gPSBwcm9kdWN0aW9uO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbiA9IGZvdW5kUHJvZHVjdGlvbjtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyVXRpbDtcbiJdfQ==