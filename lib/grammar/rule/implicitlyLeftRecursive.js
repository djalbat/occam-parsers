'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    ProductionNamePart = require('../../common/part/productionName');

var ImplicitlyLeftRecursiveRule = function (_Rule) {
  _inherits(ImplicitlyLeftRecursiveRule, _Rule);

  function ImplicitlyLeftRecursiveRule() {
    _classCallCheck(this, ImplicitlyLeftRecursiveRule);

    return _possibleConstructorReturn(this, (ImplicitlyLeftRecursiveRule.__proto__ || Object.getPrototypeOf(ImplicitlyLeftRecursiveRule)).apply(this, arguments));
  }

  _createClass(ImplicitlyLeftRecursiveRule, [{
    key: 'getPreviousProductionName',
    value: function getPreviousProductionName() {
      var firstPart = this.getFirstPart(),
          productionNamePart = firstPart,
          ///
      productionNamePartProductionName = productionNamePart.getProductionName(),
          previousProductionName = productionNamePartProductionName; ///

      return previousProductionName;
    }
  }], [{
    key: 'fromRuleAndPreviousProductions',
    value: function fromRuleAndPreviousProductions(rule, previousProductions) {
      var implicitlyLeftRecursiveRule = null;

      var previousProductionNames = previousProductions.map(function (previousProduction) {
        var previousProductionName = previousProduction.getName();

        return previousProductionName;
      }),
          ruleFirstPart = rule.getFirstPart();

      if (ruleFirstPart instanceof ProductionNamePart) {
        var ruleFirstProductionNamePart = ruleFirstPart,
            ///
        ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName(),
            ruleImplicitlyLeftRecursive = previousProductionNames.includes(ruleFirstProductionNamePartProductionName);

        if (ruleImplicitlyLeftRecursive) {
          var parts = rule.getParts();

          implicitlyLeftRecursiveRule = new ImplicitlyLeftRecursiveRule(parts);
        }
      }

      return implicitlyLeftRecursiveRule;
    }
  }]);

  return ImplicitlyLeftRecursiveRule;
}(Rule);

module.exports = ImplicitlyLeftRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJmaXJzdFBhcnQiLCJnZXRGaXJzdFBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwicHJldmlvdXNQcm9kdWN0aW9uTmFtZSIsInJ1bGUiLCJwcmV2aW91c1Byb2R1Y3Rpb25zIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIiwicHJldmlvdXNQcm9kdWN0aW9uTmFtZXMiLCJtYXAiLCJwcmV2aW91c1Byb2R1Y3Rpb24iLCJnZXROYW1lIiwicnVsZUZpcnN0UGFydCIsInJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCIsInJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lIiwicnVsZUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwiaW5jbHVkZXMiLCJwYXJ0cyIsImdldFBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLG1CQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsa0NBQVIsQ0FEM0I7O0lBR01FLDJCOzs7Ozs7Ozs7OztnREFDd0I7QUFDMUIsVUFBTUMsWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMscUJBQXFCRixTQUQzQjtBQUFBLFVBQ3NDO0FBQ2hDRyx5Q0FBbUNELG1CQUFtQkUsaUJBQW5CLEVBRnpDO0FBQUEsVUFHTUMseUJBQXlCRixnQ0FIL0IsQ0FEMEIsQ0FJd0M7O0FBRWxFLGFBQU9FLHNCQUFQO0FBQ0Q7OzttREFFcUNDLEksRUFBTUMsbUIsRUFBcUI7QUFDL0QsVUFBSUMsOEJBQThCLElBQWxDOztBQUVBLFVBQU1DLDBCQUEwQkYsb0JBQW9CRyxHQUFwQixDQUF3QixVQUFTQyxrQkFBVCxFQUE2QjtBQUM3RSxZQUFNTix5QkFBeUJNLG1CQUFtQkMsT0FBbkIsRUFBL0I7O0FBRUEsZUFBT1Asc0JBQVA7QUFDRCxPQUp5QixDQUFoQztBQUFBLFVBS01RLGdCQUFnQlAsS0FBS0wsWUFBTCxFQUx0Qjs7QUFPQSxVQUFJWSx5QkFBeUJmLGtCQUE3QixFQUFpRDtBQUMvQyxZQUFNZ0IsOEJBQThCRCxhQUFwQztBQUFBLFlBQW9EO0FBQzlDRSxvREFBNENELDRCQUE0QlYsaUJBQTVCLEVBRGxEO0FBQUEsWUFFTVksOEJBQThCUCx3QkFBd0JRLFFBQXhCLENBQWlDRix5Q0FBakMsQ0FGcEM7O0FBSUEsWUFBSUMsMkJBQUosRUFBaUM7QUFDL0IsY0FBTUUsUUFBUVosS0FBS2EsUUFBTCxFQUFkOztBQUVBWCx3Q0FBOEIsSUFBSVQsMkJBQUosQ0FBZ0NtQixLQUFoQyxDQUE5QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT1YsMkJBQVA7QUFDRDs7OztFQWpDdUNaLEk7O0FBb0MxQ3dCLE9BQU9DLE9BQVAsR0FBaUJ0QiwyQkFBakIiLCJmaWxlIjoiaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGdldFByZXZpb3VzUHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgcHJldmlvdXNQcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHByZXZpb3VzUHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUnVsZUFuZFByZXZpb3VzUHJvZHVjdGlvbnMocnVsZSwgcHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbk5hbWVzID0gcHJldmlvdXNQcm9kdWN0aW9ucy5tYXAoZnVuY3Rpb24ocHJldmlvdXNQcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID0gcHJldmlvdXNQcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvZHVjdGlvbk5hbWU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZUZpcnN0UGFydCA9IHJ1bGUuZ2V0Rmlyc3RQYXJ0KCk7XG4gICAgXG4gICAgaWYgKHJ1bGVGaXJzdFBhcnQgaW5zdGFuY2VvZiBQcm9kdWN0aW9uTmFtZVBhcnQpIHtcbiAgICAgIGNvbnN0IHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHJ1bGVGaXJzdFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgICBydWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lcy5pbmNsdWRlcyhydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSk7XG4gICAgICBcbiAgICAgIGlmIChydWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBydWxlLmdldFBhcnRzKCk7XG5cbiAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZShwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZTtcbiJdfQ==