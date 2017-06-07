'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RightRecursiveProduction = require('../common/production/rightRecursive'),
    PossiblyCyclicProduction = require('../common/production/possiblyCyclic'),
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
    key: 'eliminateCycles',
    value: function eliminateCycles(productions) {
      debugger;

      var possiblyCyclicProductions = productions.reduce(function (possiblyCyclicProductions, production) {
        var possiblyCyclicProduction = PossiblyCyclicProduction.fromProduction(production);

        if (possiblyCyclicProduction !== null) {
          possiblyCyclicProductions.push(possiblyCyclicProduction);
        }

        return possiblyCyclicProductions;
      }, []);

      // const firstProduction = first(productions),
      //       production = firstProduction, ///
      //       productionName = production.getName(),
      //       productionNames = [productionName],
      //       productionRules = production.getRules();
      //
      // productionRules.forEach(function(productionRule) {
      //   const productionRuleFirstProductionNamePart = productionRule.getFirstProductionNamePart();
      //
      //   if (productionRuleFirstProductionNamePart !== null) {
      //     const productionRuleFirstProductionNamePartProductionName = productionRuleFirstProductionNamePart.getProductionName(),
      //           productionRuleFirstProductionName = productionRuleFirstProductionNamePartProductionName;  ///
      //
      //   }
      // });

      return productions;
    }
  }, {
    key: 'eliminateLeftRecursion',
    value: function eliminateLeftRecursion(productions) {
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

// function first(array) { return array[0]; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhcnNlci5qcyJdLCJuYW1lcyI6WyJSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiUG9zc2libHlDeWNsaWNQcm9kdWN0aW9uIiwiTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJwYXJzZXJVdGlsIiwibGluZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCIsInByb2R1Y3Rpb25zIiwicG9zc2libHlDeWNsaWNQcm9kdWN0aW9ucyIsInByb2R1Y3Rpb24iLCJwb3NzaWJseUN5Y2xpY1Byb2R1Y3Rpb24iLCJmcm9tUHJvZHVjdGlvbiIsInB1c2giLCJub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMiLCJyaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zIiwiZm9yRWFjaCIsImluZGV4IiwiYmVnaW4iLCJlbmQiLCJwcmV2aW91c05vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucyIsInNsaWNlIiwicHJldmlvdXNQcm9kdWN0aW9ucyIsInByb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSIsImlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUiLCJub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJmcm9tUHJvZHVjdGlvbkFuZFByZXZpb3VzUHJvZHVjdGlvbnMiLCJwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzTGVmdFJlY3Vyc2l2ZSIsIm5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLDJCQUEyQkMsUUFBUSxxQ0FBUixDQUFqQztBQUFBLElBQ01DLDJCQUEyQkQsUUFBUSxxQ0FBUixDQURqQztBQUFBLElBRU1FLDZCQUE2QkYsUUFBUSx1Q0FBUixDQUZuQztBQUFBLElBR01HLHVDQUF1Q0gsUUFBUSxpREFBUixDQUg3Qzs7SUFLTUksVTs7Ozs7OztvQ0FDbUJDLEssRUFBTztBQUM1QixVQUFNQyxTQUFTRCxNQUFNRSxNQUFOLENBQWEsVUFBU0QsTUFBVCxFQUFpQkUsSUFBakIsRUFBdUI7QUFDakQsWUFBTUMsYUFBYUQsS0FBS0UsU0FBTCxFQUFuQjs7QUFFQUosaUJBQVNBLE9BQU9LLE1BQVAsQ0FBY0YsVUFBZCxDQUFUOztBQUVBLGVBQU9ILE1BQVA7QUFDRCxPQU5jLEVBTVosRUFOWSxDQUFmOztBQVFBLGFBQU9BLE1BQVA7QUFDRDs7O29DQUVzQk0sVyxFQUFhO0FBQ2xDOztBQUVBLFVBQU1DLDRCQUE0QkQsWUFBWUwsTUFBWixDQUFtQixVQUFTTSx5QkFBVCxFQUFvQ0MsVUFBcEMsRUFBZ0Q7QUFDbkcsWUFBTUMsMkJBQTJCZCx5QkFBeUJlLGNBQXpCLENBQXdDRixVQUF4QyxDQUFqQzs7QUFFQSxZQUFJQyw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckNGLG9DQUEwQkksSUFBMUIsQ0FBK0JGLHdCQUEvQjtBQUNEOztBQUVELGVBQU9GLHlCQUFQO0FBQ0QsT0FSaUMsRUFRL0IsRUFSK0IsQ0FBbEM7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQU9ELFdBQVA7QUFDRDs7OzJDQUU2QkEsVyxFQUFhO0FBQ3pDLFVBQU1NLDhCQUE4QixFQUFwQztBQUFBLFVBQ01DLDRCQUE0QixFQURsQzs7QUFHQVAsa0JBQVlRLE9BQVosQ0FBb0IsVUFBU04sVUFBVCxFQUFxQk8sS0FBckIsRUFBNEI7QUFDOUMsWUFBTUMsUUFBUSxDQUFkO0FBQUEsWUFDTUMsTUFBTUYsS0FEWjtBQUFBLFlBQ29CO0FBQ2RHLDhDQUFzQ04sNEJBQTRCTyxLQUE1QixDQUFrQ0gsS0FBbEMsRUFBeUNDLEdBQXpDLENBRjVDO0FBQUEsWUFHTUcsc0JBQXNCRixtQ0FINUI7QUFBQSxZQUdrRTtBQUM1REcsNENBQW9DYixXQUFXYyx5QkFBWCxDQUFxQ0YsbUJBQXJDLENBSjFDOztBQU1BLFlBQUlDLGlDQUFKLEVBQXVDO0FBQ3JDLGNBQU1FLHVDQUF1QzFCLHFDQUFxQzJCLG9DQUFyQyxDQUEwRWhCLFVBQTFFLEVBQXNGWSxtQkFBdEYsQ0FBN0M7O0FBRUFaLHVCQUFhZSxvQ0FBYixDQUhxQyxDQUdlO0FBQ3JEOztBQUVELFlBQU1FLDBCQUEwQmpCLFdBQVdrQixlQUFYLEVBQWhDOztBQUVBLFlBQUlELHVCQUFKLEVBQTZCO0FBQzNCLGNBQU1FLDZCQUE2Qi9CLDJCQUEyQmMsY0FBM0IsQ0FBMENGLFVBQTFDLENBQW5DO0FBQUEsY0FDTW9CLDJCQUEyQm5DLHlCQUF5QmlCLGNBQXpCLENBQXdDRixVQUF4QyxDQURqQzs7QUFHQUksc0NBQTRCRCxJQUE1QixDQUFpQ2dCLDBCQUFqQzs7QUFFQWQsb0NBQTBCRixJQUExQixDQUErQmlCLHdCQUEvQjtBQUNELFNBUEQsTUFPTztBQUNMLGNBQU1ELDhCQUE2Qm5CLFVBQW5DLENBREssQ0FDMkM7O0FBRWhESSxzQ0FBNEJELElBQTVCLENBQWlDZ0IsMkJBQWpDO0FBQ0Q7QUFDRixPQTNCRDs7QUE2QkFyQixvQkFBYyxHQUFHRCxNQUFILENBQVVPLDJCQUFWLEVBQXVDUCxNQUF2QyxDQUE4Q1EseUJBQTlDLENBQWQ7O0FBRUEsYUFBT1AsV0FBUDtBQUNEOzs7Ozs7QUFHSHVCLE9BQU9DLE9BQVAsR0FBaUJoQyxVQUFqQjs7QUFFQSIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wcm9kdWN0aW9uL3JpZ2h0UmVjdXJzaXZlJyksXG4gICAgICBQb3NzaWJseUN5Y2xpY1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9jb21tb24vcHJvZHVjdGlvbi9wb3NzaWJseUN5Y2xpYycpLFxuICAgICAgTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9jb21tb24vcHJvZHVjdGlvbi9ub25MZWZ0UmVjdXJzaXZlJyksXG4gICAgICBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9jb21tb24vcHJvZHVjdGlvbi9ub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZScpO1xuXG5jbGFzcyBwYXJzZXJVdGlsIHtcbiAgc3RhdGljIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICAgIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgIGNvbnN0IGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xuXG4gICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuXG4gICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZWxpbWluYXRlQ3ljbGVzKHByb2R1Y3Rpb25zKSB7XG4gICAgZGVidWdnZXJcblxuICAgIGNvbnN0IHBvc3NpYmx5Q3ljbGljUHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24ocG9zc2libHlDeWNsaWNQcm9kdWN0aW9ucywgcHJvZHVjdGlvbikge1xuICAgICAgY29uc3QgcG9zc2libHlDeWNsaWNQcm9kdWN0aW9uID0gUG9zc2libHlDeWNsaWNQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pO1xuXG4gICAgICBpZiAocG9zc2libHlDeWNsaWNQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHBvc3NpYmx5Q3ljbGljUHJvZHVjdGlvbnMucHVzaChwb3NzaWJseUN5Y2xpY1Byb2R1Y3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcG9zc2libHlDeWNsaWNQcm9kdWN0aW9ucztcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBjb25zdCBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdChwcm9kdWN0aW9ucyksXG4gICAgLy8gICAgICAgcHJvZHVjdGlvbiA9IGZpcnN0UHJvZHVjdGlvbiwgLy8vXG4gICAgLy8gICAgICAgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAvLyAgICAgICBwcm9kdWN0aW9uTmFtZXMgPSBbcHJvZHVjdGlvbk5hbWVdLFxuICAgIC8vICAgICAgIHByb2R1Y3Rpb25SdWxlcyA9IHByb2R1Y3Rpb24uZ2V0UnVsZXMoKTtcbiAgICAvL1xuICAgIC8vIHByb2R1Y3Rpb25SdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3Rpb25SdWxlKSB7XG4gICAgLy8gICBjb25zdCBwcm9kdWN0aW9uUnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gcHJvZHVjdGlvblJ1bGUuZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQoKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKHByb2R1Y3Rpb25SdWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpIHtcbiAgICAvLyAgICAgY29uc3QgcHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydC5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgIC8vICAgICAgICAgICBwcm9kdWN0aW9uUnVsZUZpcnN0UHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uUnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWU7ICAvLy9cbiAgICAvL1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG5cbiAgc3RhdGljIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMgPSBbXSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zID0gW107XG5cbiAgICBwcm9kdWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3Rpb24sIGluZGV4KSB7XG4gICAgICBjb25zdCBiZWdpbiA9IDAsXG4gICAgICAgICAgICBlbmQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMgPSBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMuc2xpY2UoYmVnaW4sIGVuZCksXG4gICAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25zID0gcHJldmlvdXNOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMsICAvLy9cbiAgICAgICAgICAgIHByb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHByb2R1Y3Rpb24uaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZShwcmV2aW91c1Byb2R1Y3Rpb25zKTtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpO1xuXG4gICAgICAgIHByb2R1Y3Rpb24gPSBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247ICAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUgPSBwcm9kdWN0aW9uLmlzTGVmdFJlY3Vyc2l2ZSgpO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pO1xuXG4gICAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcblxuICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLnB1c2gocmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcHJvZHVjdGlvbjsgIC8vL1xuXG4gICAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByb2R1Y3Rpb25zID0gW10uY29uY2F0KG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucykuY29uY2F0KHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyVXRpbDtcblxuLy8gZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=