'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../common/production'),
    ImplicitlyLeftRecursiveRule = require('../rule/implicitlyLeftRecursive');

var ImplicitlyLeftRecursiveProduction = function (_Production) {
  _inherits(ImplicitlyLeftRecursiveProduction, _Production);

  function ImplicitlyLeftRecursiveProduction() {
    _classCallCheck(this, ImplicitlyLeftRecursiveProduction);

    return _possibleConstructorReturn(this, (ImplicitlyLeftRecursiveProduction.__proto__ || Object.getPrototypeOf(ImplicitlyLeftRecursiveProduction)).apply(this, arguments));
  }

  _createClass(ImplicitlyLeftRecursiveProduction, null, [{
    key: 'fromProductionAndPreviousProductions',
    value: function fromProductionAndPreviousProductions(production, previousProductions) {
      var implicitlyLeftRecursiveProduction = null;

      var implicitlyLeftRecursiveRules = implicitlyLeftRecursiveRulesFromProductionAndPreviousProductions(production, previousProductions),
          implicitlyLeftRecursiveRulesLength = implicitlyLeftRecursiveRules.length,
          productionImplicitlyLeftRecursive = implicitlyLeftRecursiveRulesLength > 0;

      if (productionImplicitlyLeftRecursive) {
        implicitlyLeftRecursiveProduction = Production.fromProduction(production, ImplicitlyLeftRecursiveProduction); ///
      }

      return implicitlyLeftRecursiveProduction;
    }
  }]);

  return ImplicitlyLeftRecursiveProduction;
}(Production);

module.exports = ImplicitlyLeftRecursiveProduction;

function implicitlyLeftRecursiveRulesFromProductionAndPreviousProductions(production, previousProductions) {
  var productionRules = production.getRules(),
      implicitlyLeftRecursiveRules = productionRules.reduce(function (implicitlyLeftRecursiveRules, productionRule) {
    var rule = productionRule,
        ///
    implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRuleAndPreviousProductions(rule, previousProductions);

    if (implicitlyLeftRecursiveRule !== null) {
      implicitlyLeftRecursiveRules.push(implicitlyLeftRecursiveRule);
    }

    return implicitlyLeftRecursiveRules;
  }, []);

  return implicitlyLeftRecursiveRules;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uIiwicHJldmlvdXNQcm9kdWN0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVzRnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlc0xlbmd0aCIsImxlbmd0aCIsInByb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSIsImZyb21Qcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb2R1Y3Rpb25SdWxlcyIsImdldFJ1bGVzIiwicmVkdWNlIiwicHJvZHVjdGlvblJ1bGUiLCJydWxlIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIiwiZnJvbVJ1bGVBbmRQcmV2aW91c1Byb2R1Y3Rpb25zIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLHlCQUFSLENBQW5CO0FBQUEsSUFDTUMsOEJBQThCRCxRQUFRLGlDQUFSLENBRHBDOztJQUdNRSxpQzs7Ozs7Ozs7Ozs7eURBQ3dDQyxVLEVBQVlDLG1CLEVBQXFCO0FBQzNFLFVBQUlDLG9DQUFvQyxJQUF4Qzs7QUFFQSxVQUFNQywrQkFBK0JDLGlFQUFpRUosVUFBakUsRUFBNkVDLG1CQUE3RSxDQUFyQztBQUFBLFVBQ01JLHFDQUFxQ0YsNkJBQTZCRyxNQUR4RTtBQUFBLFVBRU1DLG9DQUFxQ0YscUNBQXFDLENBRmhGOztBQUlBLFVBQUlFLGlDQUFKLEVBQXVDO0FBQ3JDTCw0Q0FBb0NOLFdBQVdZLGNBQVgsQ0FBMEJSLFVBQTFCLEVBQXNDRCxpQ0FBdEMsQ0FBcEMsQ0FEcUMsQ0FDeUU7QUFDL0c7O0FBRUQsYUFBT0csaUNBQVA7QUFDRDs7OztFQWI2Q04sVTs7QUFnQmhEYSxPQUFPQyxPQUFQLEdBQWlCWCxpQ0FBakI7O0FBRUEsU0FBU0ssZ0VBQVQsQ0FBMEVKLFVBQTFFLEVBQXNGQyxtQkFBdEYsRUFBMkc7QUFDekcsTUFBTVUsa0JBQWtCWCxXQUFXWSxRQUFYLEVBQXhCO0FBQUEsTUFDTVQsK0JBQStCUSxnQkFBZ0JFLE1BQWhCLENBQXVCLFVBQVNWLDRCQUFULEVBQXVDVyxjQUF2QyxFQUF1RDtBQUMzRyxRQUFNQyxPQUFPRCxjQUFiO0FBQUEsUUFBOEI7QUFDeEJFLGtDQUE4QmxCLDRCQUE0Qm1CLDhCQUE1QixDQUEyREYsSUFBM0QsRUFBaUVkLG1CQUFqRSxDQURwQzs7QUFHQSxRQUFJZSxnQ0FBZ0MsSUFBcEMsRUFBMEM7QUFDeENiLG1DQUE2QmUsSUFBN0IsQ0FBa0NGLDJCQUFsQztBQUNEOztBQUVELFdBQU9iLDRCQUFQO0FBQ0QsR0FUOEIsRUFTNUIsRUFUNEIsQ0FEckM7O0FBWUEsU0FBT0EsNEJBQVA7QUFDRCIsImZpbGUiOiJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJyksXG4gICAgICBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlJyk7XG5cbmNsYXNzIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgICBsZXQgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVzID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlc0Zyb21Qcm9kdWN0aW9uQW5kUHJldmlvdXNQcm9kdWN0aW9ucyhwcm9kdWN0aW9uLCBwcmV2aW91c1Byb2R1Y3Rpb25zKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVzTGVuZ3RoID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlcy5sZW5ndGgsXG4gICAgICAgICAgcHJvZHVjdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZXNMZW5ndGggPiAwKTsgXG4gICAgXG4gICAgaWYgKHByb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uLCBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVzRnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgY29uc3QgcHJvZHVjdGlvblJ1bGVzID0gcHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVzID0gcHJvZHVjdGlvblJ1bGVzLnJlZHVjZShmdW5jdGlvbihpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVzLCBwcm9kdWN0aW9uUnVsZSkge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBwcm9kdWN0aW9uUnVsZSwgIC8vL1xuICAgICAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZS5mcm9tUnVsZUFuZFByZXZpb3VzUHJvZHVjdGlvbnMocnVsZSwgcHJldmlvdXNQcm9kdWN0aW9ucyk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlcy5wdXNoKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZXM7XG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlcztcbn1cbiJdfQ==