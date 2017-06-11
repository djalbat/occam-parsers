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
    key: 'fromRule',
    value: function fromRule(rule, callback) {
      var implicitlyLeftRecursiveRule = null;

      var ruleFirstPart = rule.getFirstPart();

      if (ruleFirstPart instanceof ProductionNamePart) {
        var ruleFirstProductionNamePart = ruleFirstPart,
            ///
        ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName(),
            productionName = ruleFirstProductionNamePartProductionName,
            ///
        ruleImplicitlyLeftRecursive = callback(productionName);

        if (ruleImplicitlyLeftRecursive) {
          var parts = rule.getParts();

          implicitlyLeftRecursiveRule = new ImplicitlyLeftRecursiveRule(parts);
        }
      }

      return implicitlyLeftRecursiveRule;
    }
  }, {
    key: 'fromRuleAndPreviousProduction',
    value: function fromRuleAndPreviousProduction(rule, previousProduction) {
      var previousProductionName = previousProduction.getName(),
          implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRule(rule, function (productionName) {
        var ruleImplicitlyLeftRecursive = previousProductionName === productionName;

        return ruleImplicitlyLeftRecursive;
      });

      return implicitlyLeftRecursiveRule;
    }
  }, {
    key: 'fromRuleAndPreviousProductions',
    value: function fromRuleAndPreviousProductions(rule, previousProductions) {
      var previousProductionNames = previousProductions.map(function (previousProduction) {
        var previousProductionName = previousProduction.getName();

        return previousProductionName;
      }),
          implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRule(rule, function (productionName) {
        var ruleImplicitlyLeftRecursive = previousProductionNames.includes(productionName);

        return ruleImplicitlyLeftRecursive;
      });

      return implicitlyLeftRecursiveRule;
    }
  }]);

  return ImplicitlyLeftRecursiveRule;
}(Rule);

module.exports = ImplicitlyLeftRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJmaXJzdFBhcnQiLCJnZXRGaXJzdFBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwicHJldmlvdXNQcm9kdWN0aW9uTmFtZSIsInJ1bGUiLCJjYWxsYmFjayIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsInJ1bGVGaXJzdFBhcnQiLCJydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lIiwicnVsZUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwicGFydHMiLCJnZXRQYXJ0cyIsInByZXZpb3VzUHJvZHVjdGlvbiIsImdldE5hbWUiLCJmcm9tUnVsZSIsInByZXZpb3VzUHJvZHVjdGlvbnMiLCJwcmV2aW91c1Byb2R1Y3Rpb25OYW1lcyIsIm1hcCIsImluY2x1ZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLG1CQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsa0NBQVIsQ0FEM0I7O0lBR01FLDJCOzs7Ozs7Ozs7OztnREFDd0I7QUFDMUIsVUFBTUMsWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMscUJBQXFCRixTQUQzQjtBQUFBLFVBQ3NDO0FBQ2hDRyx5Q0FBbUNELG1CQUFtQkUsaUJBQW5CLEVBRnpDO0FBQUEsVUFHTUMseUJBQXlCRixnQ0FIL0IsQ0FEMEIsQ0FJd0M7O0FBRWxFLGFBQU9FLHNCQUFQO0FBQ0Q7Ozs2QkFFZUMsSSxFQUFNQyxRLEVBQVU7QUFDOUIsVUFBSUMsOEJBQThCLElBQWxDOztBQUVBLFVBQU1DLGdCQUFnQkgsS0FBS0wsWUFBTCxFQUF0Qjs7QUFFQSxVQUFJUSx5QkFBeUJYLGtCQUE3QixFQUFpRDtBQUMvQyxZQUFNWSw4QkFBOEJELGFBQXBDO0FBQUEsWUFBb0Q7QUFDOUNFLG9EQUE0Q0QsNEJBQTRCTixpQkFBNUIsRUFEbEQ7QUFBQSxZQUVNUSxpQkFBaUJELHlDQUZ2QjtBQUFBLFlBRWtFO0FBQzVERSxzQ0FBOEJOLFNBQVNLLGNBQVQsQ0FIcEM7O0FBS0EsWUFBSUMsMkJBQUosRUFBaUM7QUFDL0IsY0FBTUMsUUFBUVIsS0FBS1MsUUFBTCxFQUFkOztBQUVBUCx3Q0FBOEIsSUFBSVQsMkJBQUosQ0FBZ0NlLEtBQWhDLENBQTlCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPTiwyQkFBUDtBQUNEOzs7a0RBRW9DRixJLEVBQU1VLGtCLEVBQW9CO0FBQzdELFVBQU1YLHlCQUF5QlcsbUJBQW1CQyxPQUFuQixFQUEvQjtBQUFBLFVBQ01ULDhCQUE4QlQsNEJBQTRCbUIsUUFBNUIsQ0FBcUNaLElBQXJDLEVBQTJDLFVBQVNNLGNBQVQsRUFBeUI7QUFDaEcsWUFBTUMsOEJBQStCUiwyQkFBMkJPLGNBQWhFOztBQUVBLGVBQU9DLDJCQUFQO0FBQ0QsT0FKNkIsQ0FEcEM7O0FBUUEsYUFBT0wsMkJBQVA7QUFDRDs7O21EQUVxQ0YsSSxFQUFNYSxtQixFQUFxQjtBQUMvRCxVQUFNQywwQkFBMEJELG9CQUFvQkUsR0FBcEIsQ0FBd0IsVUFBU0wsa0JBQVQsRUFBNkI7QUFDN0UsWUFBTVgseUJBQXlCVyxtQkFBbUJDLE9BQW5CLEVBQS9COztBQUVBLGVBQU9aLHNCQUFQO0FBQ0QsT0FKeUIsQ0FBaEM7QUFBQSxVQUtNRyw4QkFBOEJULDRCQUE0Qm1CLFFBQTVCLENBQXFDWixJQUFyQyxFQUEyQyxVQUFTTSxjQUFULEVBQXlCO0FBQ2hHLFlBQU1DLDhCQUE4Qk8sd0JBQXdCRSxRQUF4QixDQUFpQ1YsY0FBakMsQ0FBcEM7O0FBRUEsZUFBT0MsMkJBQVA7QUFDRCxPQUo2QixDQUxwQzs7QUFXQSxhQUFPTCwyQkFBUDtBQUNEOzs7O0VBeER1Q1osSTs7QUEyRDFDMkIsT0FBT0MsT0FBUCxHQUFpQnpCLDJCQUFqQiIsImZpbGUiOiJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgZ2V0UHJldmlvdXNQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gcHJldmlvdXNQcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlRmlyc3RQYXJ0ID0gcnVsZS5nZXRGaXJzdFBhcnQoKTtcblxuICAgIGlmIChydWxlRmlyc3RQYXJ0IGluc3RhbmNlb2YgUHJvZHVjdGlvbk5hbWVQYXJ0KSB7XG4gICAgICBjb25zdCBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgPSBydWxlRmlyc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgICBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSA9IHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydC5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgICAgICBydWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBjYWxsYmFjayhwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICAgIGlmIChydWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBydWxlLmdldFBhcnRzKCk7XG5cbiAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZShwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZUFuZFByZXZpb3VzUHJvZHVjdGlvbihydWxlLCBwcmV2aW91c1Byb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID0gcHJldmlvdXNQcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUuZnJvbVJ1bGUocnVsZSwgZnVuY3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID09PSBwcm9kdWN0aW9uTmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmVcbiAgICAgICAgICB9KTtcbiAgICBcblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUnVsZUFuZFByZXZpb3VzUHJvZHVjdGlvbnMocnVsZSwgcHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbk5hbWVzID0gcHJldmlvdXNQcm9kdWN0aW9ucy5tYXAoZnVuY3Rpb24ocHJldmlvdXNQcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID0gcHJldmlvdXNQcm9kdWN0aW9uLmdldE5hbWUoKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9kdWN0aW9uTmFtZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUuZnJvbVJ1bGUocnVsZSwgZnVuY3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHByZXZpb3VzUHJvZHVjdGlvbk5hbWVzLmluY2x1ZGVzKHByb2R1Y3Rpb25OYW1lKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlO1xuIl19