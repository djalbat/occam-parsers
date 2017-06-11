'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftRecursiveProduction = require('./production/leftRecursive'),
    RightRecursiveProduction = require('./production/rightRecursive'),
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
        var leftRecursiveProduction = LeftRecursiveProduction.fromProduction(production);

        if (leftRecursiveProduction !== null) {
          debugger;

          var nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromLeftRecursiveProduction(leftRecursiveProduction),
              rightRecursiveProduction = RightRecursiveProduction.fromLeftRecursiveProduction(leftRecursiveProduction);

          nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);

          rightRecursiveProductions.push(rightRecursiveProduction);
        }

        // const begin = 0,
        //       end = index,  ///
        //       previousNonLeftRecursiveProductions = nonLeftRecursiveProductions.slice(begin, end),
        //       previousProductions = previousNonLeftRecursiveProductions,  ///
        //       nonImplicitlyLeftRecursiveProduction = NonImplicitlyLeftRecursiveProduction.fromProductionAndPreviousProductions(production, previousProductions);
        //
        // if (nonImplicitlyLeftRecursiveProduction !== null) {
        //   production = nonImplicitlyLeftRecursiveProduction;  ///
        // }
        //
        // const productionLeftRecursive = production.isLeftRecursive();
        //
        // if (productionLeftRecursive) {
        //   const nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromProduction(production),
        //         rightRecursiveProduction = RightRecursiveProduction.fromProduction(production);
        //
        // } else {
        //   const nonLeftRecursiveProduction = production;  ///
        //
        //   nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);
        // }
      });

      productions = [].concat(nonLeftRecursiveProductions).concat(rightRecursiveProductions);

      return productions;
    }
  }]);

  return leftRecursion;
}();

module.exports = leftRecursion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFtbWFyL2xlZnRSZWN1cnNpb24uanMiXSwibmFtZXMiOlsiTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIiwiTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJsZWZ0UmVjdXJzaW9uIiwicHJvZHVjdGlvbnMiLCJub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMiLCJyaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zIiwiZm9yRWFjaCIsInByb2R1Y3Rpb24iLCJpbmRleCIsImxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwiZnJvbVByb2R1Y3Rpb24iLCJub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImZyb21MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsInJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiIsInB1c2giLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsMEJBQTBCQyxRQUFRLDRCQUFSLENBQWhDO0FBQUEsSUFDTUMsMkJBQTJCRCxRQUFRLDZCQUFSLENBRGpDO0FBQUEsSUFFTUUsNkJBQTZCRixRQUFRLCtCQUFSLENBRm5DO0FBQUEsSUFHTUcsdUNBQXVDSCxRQUFRLHlDQUFSLENBSDdDOztJQUtNSSxhOzs7Ozs7OzhCQUNhQyxXLEVBQWE7QUFDNUIsVUFBTUMsOEJBQThCLEVBQXBDO0FBQUEsVUFDTUMsNEJBQTRCLEVBRGxDOztBQUdBRixrQkFBWUcsT0FBWixDQUFvQixVQUFTQyxVQUFULEVBQXFCQyxLQUFyQixFQUE0QjtBQUM5QyxZQUFNQywwQkFBMEJaLHdCQUF3QmEsY0FBeEIsQ0FBdUNILFVBQXZDLENBQWhDOztBQUVBLFlBQUlFLDRCQUE0QixJQUFoQyxFQUFzQztBQUNwQzs7QUFFQSxjQUFNRSw2QkFBNkJYLDJCQUEyQlksMkJBQTNCLENBQXVESCx1QkFBdkQsQ0FBbkM7QUFBQSxjQUNNSSwyQkFBMkJkLHlCQUF5QmEsMkJBQXpCLENBQXFESCx1QkFBckQsQ0FEakM7O0FBR0FMLHNDQUE0QlUsSUFBNUIsQ0FBaUNILDBCQUFqQzs7QUFFQU4sb0NBQTBCUyxJQUExQixDQUErQkQsd0JBQS9CO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsT0FuQ0Q7O0FBcUNBVixvQkFBYyxHQUFHWSxNQUFILENBQVVYLDJCQUFWLEVBQXVDVyxNQUF2QyxDQUE4Q1YseUJBQTlDLENBQWQ7O0FBRUEsYUFBT0YsV0FBUDtBQUNEOzs7Ozs7QUFHSGEsT0FBT0MsT0FBUCxHQUFpQmYsYUFBakIiLCJmaWxlIjoibGVmdFJlY3Vyc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbGVmdFJlY3Vyc2l2ZScpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3JpZ2h0UmVjdXJzaXZlJyksXG4gICAgICBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub25MZWZ0UmVjdXJzaXZlJyksXG4gICAgICBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUnKTtcblxuY2xhc3MgbGVmdFJlY3Vyc2lvbiB7XG4gIHN0YXRpYyBlbGltaW5hdGUocHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMgPSBbXSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zID0gW107XG5cbiAgICBwcm9kdWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3Rpb24sIGluZGV4KSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IExlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pO1xuICAgICAgXG4gICAgICBpZiAobGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgZGVidWdnZXJcblxuICAgICAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmZyb21MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbihsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiksXG4gICAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbi5mcm9tTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24obGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pO1xuXG4gICAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcblxuICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLnB1c2gocmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gY29uc3QgYmVnaW4gPSAwLFxuICAgICAgLy8gICAgICAgZW5kID0gaW5kZXgsICAvLy9cbiAgICAgIC8vICAgICAgIHByZXZpb3VzTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zID0gbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLnNsaWNlKGJlZ2luLCBlbmQpLFxuICAgICAgLy8gICAgICAgcHJldmlvdXNQcm9kdWN0aW9ucyA9IHByZXZpb3VzTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLCAgLy8vXG4gICAgICAvLyAgICAgICBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpO1xuICAgICAgLy9cbiAgICAgIC8vIGlmIChub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIC8vICAgcHJvZHVjdGlvbiA9IG5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjsgIC8vL1xuICAgICAgLy8gfVxuICAgICAgLy9cbiAgICAgIC8vIGNvbnN0IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlID0gcHJvZHVjdGlvbi5pc0xlZnRSZWN1cnNpdmUoKTtcbiAgICAgIC8vXG4gICAgICAvLyBpZiAocHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIC8vICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgIC8vICAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pO1xuICAgICAgLy9cbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcHJvZHVjdGlvbjsgIC8vL1xuICAgICAgLy9cbiAgICAgIC8vICAgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLnB1c2gobm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pO1xuICAgICAgLy8gfVxuICAgIH0pO1xuXG4gICAgcHJvZHVjdGlvbnMgPSBbXS5jb25jYXQobm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zKS5jb25jYXQocmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsZWZ0UmVjdXJzaW9uO1xuIl19