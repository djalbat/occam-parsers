'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RightRecursiveProduction = require('./production/rightRecursive'),
    NonLeftRecursiveProduction = require('./production/nonLeftRecursive'),
    NonImplicitlyLeftRecursiveProduction = require('./production/nonImplicitlyLeftRecursive');

var leftRecursion = function () {
  function leftRecursion() {
    _classCallCheck(this, leftRecursion);
  }

  _createClass(leftRecursion, null, [{
    key: 'eliminate',
    value: function eliminate(productions) {
      var nonLeftRecursiveProductions = [],
          rightRecursiveProductions = [];

      productions.forEach(function (production, index) {
        var begin = 0,
            end = index,
            ///
        previousNonLeftRecursiveProductions = nonLeftRecursiveProductions.slice(begin, end),
            previousProductions = previousNonLeftRecursiveProductions,
            ///
        nonImplicitlyLeftRecursiveProduction = NonImplicitlyLeftRecursiveProduction.fromProductionAndPreviousProductions(production, previousProductions);

        if (nonImplicitlyLeftRecursiveProduction !== null) {
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

  return leftRecursion;
}();

module.exports = leftRecursion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFtbWFyL2xlZnRSZWN1cnNpb24uanMiXSwibmFtZXMiOlsiUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwiTm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwibGVmdFJlY3Vyc2lvbiIsInByb2R1Y3Rpb25zIiwibm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zIiwicmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucyIsImZvckVhY2giLCJwcm9kdWN0aW9uIiwiaW5kZXgiLCJiZWdpbiIsImVuZCIsInByZXZpb3VzTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zIiwic2xpY2UiLCJwcmV2aW91c1Byb2R1Y3Rpb25zIiwibm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwiZnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zIiwicHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0xlZnRSZWN1cnNpdmUiLCJub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImZyb21Qcm9kdWN0aW9uIiwicmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicHVzaCIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSwyQkFBMkJDLFFBQVEsNkJBQVIsQ0FBakM7QUFBQSxJQUNNQyw2QkFBNkJELFFBQVEsK0JBQVIsQ0FEbkM7QUFBQSxJQUVNRSx1Q0FBdUNGLFFBQVEseUNBQVIsQ0FGN0M7O0lBSU1HLGE7Ozs7Ozs7OEJBQ2FDLFcsRUFBYTtBQUM1QixVQUFNQyw4QkFBOEIsRUFBcEM7QUFBQSxVQUNNQyw0QkFBNEIsRUFEbEM7O0FBR0FGLGtCQUFZRyxPQUFaLENBQW9CLFVBQVNDLFVBQVQsRUFBcUJDLEtBQXJCLEVBQTRCO0FBQzlDLFlBQU1DLFFBQVEsQ0FBZDtBQUFBLFlBQ01DLE1BQU1GLEtBRFo7QUFBQSxZQUNvQjtBQUNkRyw4Q0FBc0NQLDRCQUE0QlEsS0FBNUIsQ0FBa0NILEtBQWxDLEVBQXlDQyxHQUF6QyxDQUY1QztBQUFBLFlBR01HLHNCQUFzQkYsbUNBSDVCO0FBQUEsWUFHa0U7QUFDNURHLCtDQUF1Q2IscUNBQXFDYyxvQ0FBckMsQ0FBMEVSLFVBQTFFLEVBQXNGTSxtQkFBdEYsQ0FKN0M7O0FBTUEsWUFBSUMseUNBQXlDLElBQTdDLEVBQW1EO0FBQ2pEUCx1QkFBYU8sb0NBQWIsQ0FEaUQsQ0FDRztBQUNyRDs7QUFFRCxZQUFNRSwwQkFBMEJULFdBQVdVLGVBQVgsRUFBaEM7O0FBRUEsWUFBSUQsdUJBQUosRUFBNkI7QUFDM0IsY0FBTUUsNkJBQTZCbEIsMkJBQTJCbUIsY0FBM0IsQ0FBMENaLFVBQTFDLENBQW5DO0FBQUEsY0FDTWEsMkJBQTJCdEIseUJBQXlCcUIsY0FBekIsQ0FBd0NaLFVBQXhDLENBRGpDOztBQUdBSCxzQ0FBNEJpQixJQUE1QixDQUFpQ0gsMEJBQWpDOztBQUVBYixvQ0FBMEJnQixJQUExQixDQUErQkQsd0JBQS9CO0FBQ0QsU0FQRCxNQU9PO0FBQ0wsY0FBTUYsOEJBQTZCWCxVQUFuQyxDQURLLENBQzJDOztBQUVoREgsc0NBQTRCaUIsSUFBNUIsQ0FBaUNILDJCQUFqQztBQUNEO0FBQ0YsT0F6QkQ7O0FBMkJBZixvQkFBYyxHQUFHbUIsTUFBSCxDQUFVbEIsMkJBQVYsRUFBdUNrQixNQUF2QyxDQUE4Q2pCLHlCQUE5QyxDQUFkOztBQUVBLGFBQU9GLFdBQVA7QUFDRDs7Ozs7O0FBR0hvQixPQUFPQyxPQUFQLEdBQWlCdEIsYUFBakIiLCJmaWxlIjoibGVmdFJlY3Vyc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3JpZ2h0UmVjdXJzaXZlJyksXG4gICAgICBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub25MZWZ0UmVjdXJzaXZlJyksXG4gICAgICBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUnKTtcblxuY2xhc3MgbGVmdFJlY3Vyc2lvbiB7XG4gIHN0YXRpYyBlbGltaW5hdGUocHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMgPSBbXSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zID0gW107XG5cbiAgICBwcm9kdWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3Rpb24sIGluZGV4KSB7XG4gICAgICBjb25zdCBiZWdpbiA9IDAsXG4gICAgICAgICAgICBlbmQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMgPSBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMuc2xpY2UoYmVnaW4sIGVuZCksXG4gICAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25zID0gcHJldmlvdXNOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMsICAvLy9cbiAgICAgICAgICAgIG5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IE5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbkFuZFByZXZpb3VzUHJvZHVjdGlvbnMocHJvZHVjdGlvbiwgcHJldmlvdXNQcm9kdWN0aW9ucyk7XG5cbiAgICAgIGlmIChub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgcHJvZHVjdGlvbiA9IG5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjsgIC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZSA9IHByb2R1Y3Rpb24uaXNMZWZ0UmVjdXJzaXZlKCk7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbik7XG5cbiAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLnB1c2gobm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pO1xuXG4gICAgICAgIHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbnMucHVzaChyaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBwcm9kdWN0aW9uOyAgLy8vXG5cbiAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLnB1c2gobm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvZHVjdGlvbnMgPSBbXS5jb25jYXQobm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zKS5jb25jYXQocmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsZWZ0UmVjdXJzaW9uO1xuIl19