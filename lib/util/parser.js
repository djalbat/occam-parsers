'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RightRecursiveProduction = require('../common/production/rightRecursive'),
    NonLeftRecursiveProduction = require('../common/production/nonLeftRecursive'),
    NonImplicitlyLeftRecursiveProduction = require('../common/production/nonImplicitlyLeftRecursive');

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
    key: 'eliminateLeftRecursiveProductions',
    value: function eliminateLeftRecursiveProductions(productions) {
      var nonLeftRecursiveProductions = [],
          rightRecursiveProductions = [];

      productions.forEach(function (production, index) {
        var begin = 0,
            end = index,
            ///
        previousNonLeftRecursiveProductions = nonLeftRecursiveProductions.slice(begin, end),
            previousProductions = previousNonLeftRecursiveProductions,
            ///
        productionImplicitlyLeftRecursive = production.isImplicitlyLeftRecursive(previousProductions);

        if (productionImplicitlyLeftRecursive) {
          var nonImplicitlyLeftRecursiveProduction = NonImplicitlyLeftRecursiveProduction.fromProductionAndPreviousProductions(production, previousProductions);

          production = nonImplicitlyLeftRecursiveProduction; ///
        }

        var productionLeftRecursive = production.isLeftRecursive();

        if (productionLeftRecursive) {
          var nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromProduction(production),
              rightRecursiveProduction = RightRecursiveProduction.fromProduction(production);

          nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);

          rightRecursiveProductions.push(rightRecursiveProduction);
        } else {
          var _nonLeftRecursiveProduction = production; ///

          nonLeftRecursiveProductions.push(_nonLeftRecursiveProduction);
        }
      });

      productions = [].concat(nonLeftRecursiveProductions).concat(rightRecursiveProductions);

      return productions;
    }
  }]);

  return parserUtil;
}();

module.exports = parserUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhcnNlci5qcyJdLCJuYW1lcyI6WyJSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJwYXJzZXJVdGlsIiwibGluZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCIsInByb2R1Y3Rpb25zIiwibm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zIiwicmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucyIsImZvckVhY2giLCJwcm9kdWN0aW9uIiwiaW5kZXgiLCJiZWdpbiIsImVuZCIsInByZXZpb3VzTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zIiwic2xpY2UiLCJwcmV2aW91c1Byb2R1Y3Rpb25zIiwicHJvZHVjdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwiaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSIsIm5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImZyb21Qcm9kdWN0aW9uQW5kUHJldmlvdXNQcm9kdWN0aW9ucyIsInByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlIiwiaXNMZWZ0UmVjdXJzaXZlIiwibm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJmcm9tUHJvZHVjdGlvbiIsInJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsMkJBQTJCQyxRQUFRLHFDQUFSLENBQWpDO0FBQUEsSUFDTUMsNkJBQTZCRCxRQUFRLHVDQUFSLENBRG5DO0FBQUEsSUFFTUUsdUNBQXVDRixRQUFRLGlEQUFSLENBRjdDOztJQUlNRyxVOzs7Ozs7O29DQUNtQkMsSyxFQUFPO0FBQzVCLFVBQU1DLFNBQVNELE1BQU1FLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCRSxJQUFqQixFQUF1QjtBQUNqRCxZQUFNQyxhQUFhRCxLQUFLRSxTQUFMLEVBQW5COztBQUVBSixpQkFBU0EsT0FBT0ssTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0gsTUFBUDtBQUNELE9BTmMsRUFNWixFQU5ZLENBQWY7O0FBUUEsYUFBT0EsTUFBUDtBQUNEOzs7c0RBRXdDTSxXLEVBQWE7QUFDcEQsVUFBTUMsOEJBQThCLEVBQXBDO0FBQUEsVUFDTUMsNEJBQTRCLEVBRGxDOztBQUdBRixrQkFBWUcsT0FBWixDQUFvQixVQUFTQyxVQUFULEVBQXFCQyxLQUFyQixFQUE0QjtBQUM5QyxZQUFNQyxRQUFRLENBQWQ7QUFBQSxZQUNNQyxNQUFNRixLQURaO0FBQUEsWUFDb0I7QUFDZEcsOENBQXNDUCw0QkFBNEJRLEtBQTVCLENBQWtDSCxLQUFsQyxFQUF5Q0MsR0FBekMsQ0FGNUM7QUFBQSxZQUdNRyxzQkFBc0JGLG1DQUg1QjtBQUFBLFlBR2tFO0FBQzVERyw0Q0FBb0NQLFdBQVdRLHlCQUFYLENBQXFDRixtQkFBckMsQ0FKMUM7O0FBTUEsWUFBSUMsaUNBQUosRUFBdUM7QUFDckMsY0FBTUUsdUNBQXVDdEIscUNBQXFDdUIsb0NBQXJDLENBQTBFVixVQUExRSxFQUFzRk0sbUJBQXRGLENBQTdDOztBQUVBTix1QkFBYVMsb0NBQWIsQ0FIcUMsQ0FHZTtBQUNyRDs7QUFFRCxZQUFNRSwwQkFBMEJYLFdBQVdZLGVBQVgsRUFBaEM7O0FBRUEsWUFBSUQsdUJBQUosRUFBNkI7QUFDM0IsY0FBTUUsNkJBQTZCM0IsMkJBQTJCNEIsY0FBM0IsQ0FBMENkLFVBQTFDLENBQW5DO0FBQUEsY0FDTWUsMkJBQTJCL0IseUJBQXlCOEIsY0FBekIsQ0FBd0NkLFVBQXhDLENBRGpDOztBQUdBSCxzQ0FBNEJtQixJQUE1QixDQUFpQ0gsMEJBQWpDOztBQUVBZixvQ0FBMEJrQixJQUExQixDQUErQkQsd0JBQS9CO0FBQ0QsU0FQRCxNQU9PO0FBQ0wsY0FBTUYsOEJBQTZCYixVQUFuQyxDQURLLENBQzJDOztBQUVoREgsc0NBQTRCbUIsSUFBNUIsQ0FBaUNILDJCQUFqQztBQUNEO0FBQ0YsT0EzQkQ7O0FBNkJBakIsb0JBQWMsR0FBR0QsTUFBSCxDQUFVRSwyQkFBVixFQUF1Q0YsTUFBdkMsQ0FBOENHLHlCQUE5QyxDQUFkOztBQUVBLGFBQU9GLFdBQVA7QUFDRDs7Ozs7O0FBR0hxQixPQUFPQyxPQUFQLEdBQWlCOUIsVUFBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9jb21tb24vcHJvZHVjdGlvbi9yaWdodFJlY3Vyc2l2ZScpLFxuICAgICAgTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9jb21tb24vcHJvZHVjdGlvbi9ub25MZWZ0UmVjdXJzaXZlJyksXG4gICAgICBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9jb21tb24vcHJvZHVjdGlvbi9ub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZScpO1xuXG5jbGFzcyBwYXJzZXJVdGlsIHtcbiAgc3RhdGljIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICAgIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgIGNvbnN0IGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xuXG4gICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuXG4gICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZWxpbWluYXRlTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zKHByb2R1Y3Rpb25zKSB7XG4gICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zID0gW10sXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucyA9IFtdO1xuXG4gICAgcHJvZHVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihwcm9kdWN0aW9uLCBpbmRleCkge1xuICAgICAgY29uc3QgYmVnaW4gPSAwLFxuICAgICAgICAgICAgZW5kID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIHByZXZpb3VzTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zID0gbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLnNsaWNlKGJlZ2luLCBlbmQpLFxuICAgICAgICAgICAgcHJldmlvdXNQcm9kdWN0aW9ucyA9IHByZXZpb3VzTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLCAgLy8vXG4gICAgICAgICAgICBwcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBwcm9kdWN0aW9uLmlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUocHJldmlvdXNQcm9kdWN0aW9ucyk7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3Qgbm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gTm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uQW5kUHJldmlvdXNQcm9kdWN0aW9ucyhwcm9kdWN0aW9uLCBwcmV2aW91c1Byb2R1Y3Rpb25zKTtcblxuICAgICAgICBwcm9kdWN0aW9uID0gbm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlID0gcHJvZHVjdGlvbi5pc0xlZnRSZWN1cnNpdmUoKTtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKTtcblxuICAgICAgICBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMucHVzaChub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbik7XG5cbiAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb247ICAvLy9cblxuICAgICAgICBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMucHVzaChub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm9kdWN0aW9ucyA9IFtdLmNvbmNhdChub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMpLmNvbmNhdChyaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlclV0aWw7XG4iXX0=