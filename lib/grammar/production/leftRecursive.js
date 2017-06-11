'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../common/production'),
    LeftRecursiveRule = require('../rule/leftRecursive');

var LeftRecursiveProduction = function (_Production) {
  _inherits(LeftRecursiveProduction, _Production);

  function LeftRecursiveProduction() {
    _classCallCheck(this, LeftRecursiveProduction);

    return _possibleConstructorReturn(this, (LeftRecursiveProduction.__proto__ || Object.getPrototypeOf(LeftRecursiveProduction)).apply(this, arguments));
  }

  _createClass(LeftRecursiveProduction, [{
    key: 'getLeftRecursiveRules',
    value: function getLeftRecursiveRules() {
      var name = this.getName(),
          rules = this.getRules(),
          productionName = name,
          ///
      leftRecursiveRules = rules.filter(function (rule) {
        var leftRecursiveRule = LeftRecursiveRule.fromRuleAndProductionName(rule, productionName),
            ruleLeftRecursive = leftRecursiveRule !== null;

        return ruleLeftRecursive;
      });

      return leftRecursiveRules;
    }
  }, {
    key: 'getNonLeftRecursiveRules',
    value: function getNonLeftRecursiveRules() {
      var name = this.getName(),
          rules = this.getRules(),
          productionName = name,
          ///
      nonLeftRecursiveRules = rules.filter(function (rule) {
        var leftRecursiveRule = LeftRecursiveRule.fromRuleAndProductionName(rule, productionName),
            ruleNonLeftRecursive = leftRecursiveRule === null;

        return ruleNonLeftRecursive;
      });

      return nonLeftRecursiveRules;
    }
  }], [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var leftRecursiveProduction = null;

      var productionName = production.getName(),
          productionRules = production.getRules(),
          someProductionRuleLeftRecursive = productionRules.some(function (productionRule) {
        var rule = productionRule,
            ///
        leftRecursiveRule = LeftRecursiveRule.fromRuleAndProductionName(rule, productionName),
            productionRuleLeftRecursive = leftRecursiveRule !== null;

        return productionRuleLeftRecursive;
      });

      if (someProductionRuleLeftRecursive) {
        leftRecursiveProduction = Production.fromProduction(production, LeftRecursiveProduction);
      }

      return leftRecursiveProduction;
    }
  }]);

  return LeftRecursiveProduction;
}(Production);

module.exports = LeftRecursiveProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIkxlZnRSZWN1cnNpdmVSdWxlIiwiTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJuYW1lIiwiZ2V0TmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJwcm9kdWN0aW9uTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlcyIsImZpbHRlciIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZSIsImZyb21SdWxlQW5kUHJvZHVjdGlvbk5hbWUiLCJydWxlTGVmdFJlY3Vyc2l2ZSIsIm5vbkxlZnRSZWN1cnNpdmVSdWxlcyIsInJ1bGVOb25MZWZ0UmVjdXJzaXZlIiwicHJvZHVjdGlvbiIsImxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicHJvZHVjdGlvblJ1bGVzIiwic29tZVByb2R1Y3Rpb25SdWxlTGVmdFJlY3Vyc2l2ZSIsInNvbWUiLCJwcm9kdWN0aW9uUnVsZSIsInByb2R1Y3Rpb25SdWxlTGVmdFJlY3Vyc2l2ZSIsImZyb21Qcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLHlCQUFSLENBQW5CO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHVCQUFSLENBRDFCOztJQUdNRSx1Qjs7Ozs7Ozs7Ozs7NENBQ29CO0FBQ3RCLFVBQU1DLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUMsUUFBUSxLQUFLQyxRQUFMLEVBRGQ7QUFBQSxVQUVNQyxpQkFBaUJKLElBRnZCO0FBQUEsVUFFOEI7QUFDeEJLLDJCQUFxQkgsTUFBTUksTUFBTixDQUFhLFVBQVNDLElBQVQsRUFBZTtBQUMvQyxZQUFNQyxvQkFBb0JWLGtCQUFrQlcseUJBQWxCLENBQTRDRixJQUE1QyxFQUFrREgsY0FBbEQsQ0FBMUI7QUFBQSxZQUNNTSxvQkFBcUJGLHNCQUFzQixJQURqRDs7QUFHQSxlQUFPRSxpQkFBUDtBQUNELE9BTG9CLENBSDNCOztBQVVBLGFBQU9MLGtCQUFQO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsVUFBTUwsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxRQUFRLEtBQUtDLFFBQUwsRUFEZDtBQUFBLFVBRU1DLGlCQUFpQkosSUFGdkI7QUFBQSxVQUU4QjtBQUN4QlcsOEJBQXdCVCxNQUFNSSxNQUFOLENBQWEsVUFBU0MsSUFBVCxFQUFlO0FBQ2xELFlBQU1DLG9CQUFvQlYsa0JBQWtCVyx5QkFBbEIsQ0FBNENGLElBQTVDLEVBQWtESCxjQUFsRCxDQUExQjtBQUFBLFlBQ01RLHVCQUF3Qkosc0JBQXNCLElBRHBEOztBQUdBLGVBQU9JLG9CQUFQO0FBQ0QsT0FMdUIsQ0FIOUI7O0FBVUEsYUFBT0QscUJBQVA7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLFVBQUlDLDBCQUEwQixJQUE5Qjs7QUFFQSxVQUFNVixpQkFBaUJTLFdBQVdaLE9BQVgsRUFBdkI7QUFBQSxVQUNNYyxrQkFBa0JGLFdBQVdWLFFBQVgsRUFEeEI7QUFBQSxVQUVNYSxrQ0FBa0NELGdCQUFnQkUsSUFBaEIsQ0FBcUIsVUFBU0MsY0FBVCxFQUF5QjtBQUM5RSxZQUFNWCxPQUFPVyxjQUFiO0FBQUEsWUFBNkI7QUFDdkJWLDRCQUFvQlYsa0JBQWtCVyx5QkFBbEIsQ0FBNENGLElBQTVDLEVBQWtESCxjQUFsRCxDQUQxQjtBQUFBLFlBRU1lLDhCQUErQlgsc0JBQXNCLElBRjNEOztBQUlBLGVBQU9XLDJCQUFQO0FBQ0QsT0FOaUMsQ0FGeEM7O0FBVUEsVUFBSUgsK0JBQUosRUFBcUM7QUFDbkNGLGtDQUEwQmxCLFdBQVd3QixjQUFYLENBQTBCUCxVQUExQixFQUFzQ2QsdUJBQXRDLENBQTFCO0FBQ0Q7O0FBRUQsYUFBT2UsdUJBQVA7QUFDRDs7OztFQS9DbUNsQixVOztBQWtEdEN5QixPQUFPQyxPQUFQLEdBQWlCdkIsdUJBQWpCIiwiZmlsZSI6ImxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcHJvZHVjdGlvbicpLFxuICAgICAgTGVmdFJlY3Vyc2l2ZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL2xlZnRSZWN1cnNpdmUnKTtcblxuY2xhc3MgTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZXMgPSBydWxlcy5maWx0ZXIoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGUgPSBMZWZ0UmVjdXJzaXZlUnVsZS5mcm9tUnVsZUFuZFByb2R1Y3Rpb25OYW1lKHJ1bGUsIHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVMZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZUxlZnRSZWN1cnNpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVzO1xuICB9XG5cbiAgZ2V0Tm9uTGVmdFJlY3Vyc2l2ZVJ1bGVzKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlUnVsZXMgPSBydWxlcy5maWx0ZXIoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGUgPSBMZWZ0UmVjdXJzaXZlUnVsZS5mcm9tUnVsZUFuZFByb2R1Y3Rpb25OYW1lKHJ1bGUsIHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOb25MZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlID09PSBudWxsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVOb25MZWZ0UmVjdXJzaXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vbkxlZnRSZWN1cnNpdmVSdWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25SdWxlcyA9IHByb2R1Y3Rpb24uZ2V0UnVsZXMoKSxcbiAgICAgICAgICBzb21lUHJvZHVjdGlvblJ1bGVMZWZ0UmVjdXJzaXZlID0gcHJvZHVjdGlvblJ1bGVzLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvblJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBwcm9kdWN0aW9uUnVsZSwgLy8vXG4gICAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZSA9IExlZnRSZWN1cnNpdmVSdWxlLmZyb21SdWxlQW5kUHJvZHVjdGlvbk5hbWUocnVsZSwgcHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgICAgICAgICAgcHJvZHVjdGlvblJ1bGVMZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlICE9PSBudWxsKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb25SdWxlTGVmdFJlY3Vyc2l2ZTtcbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzb21lUHJvZHVjdGlvblJ1bGVMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IFByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiwgTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjtcbiJdfQ==