'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitRule = require('../rule/unit'),
    Production = require('../../common/production'),
    UnitRuleProduction = require('../production/unitRule');

var UnitRulesProduction = function (_Production) {
  _inherits(UnitRulesProduction, _Production);

  function UnitRulesProduction() {
    _classCallCheck(this, UnitRulesProduction);

    return _possibleConstructorReturn(this, (UnitRulesProduction.__proto__ || Object.getPrototypeOf(UnitRulesProduction)).apply(this, arguments));
  }

  _createClass(UnitRulesProduction, [{
    key: 'getRulesProductionNames',
    value: function getRulesProductionNames() {
      var rules = this.getRules(),
          rulesProductionNames = rules.map(function (rule) {
        var ruleParts = rule.getParts(),
            ruleFirstPart = first(ruleParts),
            ruleFirstProductionNamePart = ruleFirstPart,
            ///
        ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName(),
            ruleProductionName = ruleFirstProductionNamePartProductionName; ///

        return ruleProductionName;
      });

      return rulesProductionNames;
    }
  }, {
    key: 'getUnitRules',
    value: function getUnitRules() {
      var rules = this.getRules(),
          unitRules = rules.reduce(function (unitRules, rule) {
        var unitRule = UnitRule.fromRule(rule);

        if (unitRule !== null) {
          unitRules = unitRules.concat(unitRule);
        }

        return unitRules;
      }, []);

      return unitRules;
    }
  }, {
    key: 'getUnitRuleProductions',
    value: function getUnitRuleProductions() {
      var name = this.getName(),
          unitRules = this.getUnitRules(),
          unitRulesProductions = unitRules.map(function (unitRule) {
        var unitRulesProduction = UnitRuleProduction.fromNameAndUnitRule(name, unitRule);

        return unitRulesProduction;
      });

      return unitRulesProductions;
    }
  }], [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var unitRulesProduction = null;

      var productionRules = production.getRules(),
          unitRules = productionRules.reduce(function (unitRules, productionRule) {
        var unitRule = UnitRule.fromRule(productionRule);

        if (unitRule !== null) {
          unitRules = unitRules.concat(unitRule);
        }

        return unitRules;
      }, []),
          unitRulesLength = unitRules.length;

      if (unitRulesLength) {
        var productionName = production.getName(),
            productionNode = production.getNode(),
            name = productionName,
            ///
        rules = unitRules,
            ///
        Node = productionNode;

        unitRulesProduction = new UnitRulesProduction(name, rules, Node);
      }

      return unitRulesProduction;
    }
  }]);

  return UnitRulesProduction;
}(Production);

module.exports = UnitRulesProduction;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdFJ1bGVzLmpzIl0sIm5hbWVzIjpbIlVuaXRSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJVbml0UnVsZVByb2R1Y3Rpb24iLCJVbml0UnVsZXNQcm9kdWN0aW9uIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGVzUHJvZHVjdGlvbk5hbWVzIiwibWFwIiwicnVsZSIsInJ1bGVQYXJ0cyIsImdldFBhcnRzIiwicnVsZUZpcnN0UGFydCIsImZpcnN0IiwicnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwicnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsInJ1bGVQcm9kdWN0aW9uTmFtZSIsInVuaXRSdWxlcyIsInJlZHVjZSIsInVuaXRSdWxlIiwiZnJvbVJ1bGUiLCJjb25jYXQiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFVuaXRSdWxlcyIsInVuaXRSdWxlc1Byb2R1Y3Rpb25zIiwidW5pdFJ1bGVzUHJvZHVjdGlvbiIsImZyb21OYW1lQW5kVW5pdFJ1bGUiLCJwcm9kdWN0aW9uIiwicHJvZHVjdGlvblJ1bGVzIiwicHJvZHVjdGlvblJ1bGUiLCJ1bml0UnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJwcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZSIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxjQUFSLENBQWpCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSx5QkFBUixDQURuQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUYzQjs7SUFJTUcsbUI7Ozs7Ozs7Ozs7OzhDQUNzQjtBQUN4QixVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLHVCQUF1QkYsTUFBTUcsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUM5QyxZQUFNQyxZQUFZRCxLQUFLRSxRQUFMLEVBQWxCO0FBQUEsWUFDTUMsZ0JBQWdCQyxNQUFNSCxTQUFOLENBRHRCO0FBQUEsWUFFTUksOEJBQThCRixhQUZwQztBQUFBLFlBRW9EO0FBQzlDRyxvREFBNENELDRCQUE0QkUsaUJBQTVCLEVBSGxEO0FBQUEsWUFJTUMscUJBQXFCRix5Q0FKM0IsQ0FEOEMsQ0FLd0I7O0FBRXRFLGVBQU9FLGtCQUFQO0FBQ0QsT0FSc0IsQ0FEN0I7O0FBV0EsYUFBT1Ysb0JBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUYsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNWSxZQUFZYixNQUFNYyxNQUFOLENBQWEsVUFBU0QsU0FBVCxFQUFvQlQsSUFBcEIsRUFBMEI7QUFDakQsWUFBTVcsV0FBV3BCLFNBQVNxQixRQUFULENBQWtCWixJQUFsQixDQUFqQjs7QUFFQSxZQUFJVyxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCRixzQkFBWUEsVUFBVUksTUFBVixDQUFpQkYsUUFBakIsQ0FBWjtBQUNEOztBQUVELGVBQU9GLFNBQVA7QUFDRCxPQVJXLEVBUVQsRUFSUyxDQURsQjs7QUFXQSxhQUFPQSxTQUFQO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsVUFBTUssT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNTixZQUFZLEtBQUtPLFlBQUwsRUFEbEI7QUFBQSxVQUVNQyx1QkFBdUJSLFVBQVVWLEdBQVYsQ0FBYyxVQUFTWSxRQUFULEVBQW1CO0FBQ3RELFlBQU1PLHNCQUFzQnhCLG1CQUFtQnlCLG1CQUFuQixDQUF1Q0wsSUFBdkMsRUFBNkNILFFBQTdDLENBQTVCOztBQUVBLGVBQU9PLG1CQUFQO0FBQ0QsT0FKc0IsQ0FGN0I7O0FBUUEsYUFBT0Qsb0JBQVA7QUFDRDs7O21DQUVxQkcsVSxFQUFZO0FBQ2hDLFVBQUlGLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNRyxrQkFBa0JELFdBQVd2QixRQUFYLEVBQXhCO0FBQUEsVUFDTVksWUFBWVksZ0JBQWdCWCxNQUFoQixDQUF1QixVQUFTRCxTQUFULEVBQW9CYSxjQUFwQixFQUFvQztBQUNyRSxZQUFNWCxXQUFXcEIsU0FBU3FCLFFBQVQsQ0FBa0JVLGNBQWxCLENBQWpCOztBQUVBLFlBQUlYLGFBQWEsSUFBakIsRUFBdUI7QUFDckJGLHNCQUFZQSxVQUFVSSxNQUFWLENBQWlCRixRQUFqQixDQUFaO0FBQ0Q7O0FBRUQsZUFBT0YsU0FBUDtBQUNELE9BUlcsRUFRVCxFQVJTLENBRGxCO0FBQUEsVUFVTWMsa0JBQWtCZCxVQUFVZSxNQVZsQzs7QUFZQSxVQUFJRCxlQUFKLEVBQXFCO0FBQ25CLFlBQU1FLGlCQUFpQkwsV0FBV0wsT0FBWCxFQUF2QjtBQUFBLFlBQ01XLGlCQUFpQk4sV0FBV08sT0FBWCxFQUR2QjtBQUFBLFlBRU1iLE9BQU9XLGNBRmI7QUFBQSxZQUU2QjtBQUN2QjdCLGdCQUFRYSxTQUhkO0FBQUEsWUFHMEI7QUFDcEJtQixlQUFPRixjQUpiOztBQU1BUiw4QkFBc0IsSUFBSXZCLG1CQUFKLENBQXdCbUIsSUFBeEIsRUFBOEJsQixLQUE5QixFQUFxQ2dDLElBQXJDLENBQXRCO0FBQ0Q7O0FBRUQsYUFBT1YsbUJBQVA7QUFDRDs7OztFQXJFK0J6QixVOztBQXdFbENvQyxPQUFPQyxPQUFQLEdBQWlCbkMsbUJBQWpCOztBQUVBLFNBQVNTLEtBQVQsQ0FBZTJCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ1bml0UnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaXRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS91bml0JyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFVuaXRSdWxlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24vdW5pdFJ1bGUnKTtcblxuY2xhc3MgVW5pdFJ1bGVzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBnZXRSdWxlc1Byb2R1Y3Rpb25OYW1lcygpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lcyA9IHJ1bGVzLm1hcChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlUGFydHMgPSBydWxlLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgICBydWxlRmlyc3RQYXJ0ID0gZmlyc3QocnVsZVBhcnRzKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHJ1bGVGaXJzdFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlUHJvZHVjdGlvbk5hbWUgPSBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZTsgLy8vXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlUHJvZHVjdGlvbk5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzUHJvZHVjdGlvbk5hbWVzO1xuICB9XG4gIFxuICBnZXRVbml0UnVsZXMoKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFJ1bGVzID0gcnVsZXMucmVkdWNlKGZ1bmN0aW9uKHVuaXRSdWxlcywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tUnVsZShydWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHVuaXRSdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHVuaXRSdWxlcyA9IHVuaXRSdWxlcy5jb25jYXQodW5pdFJ1bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdW5pdFJ1bGVzO1xuICAgICAgICAgIH0sIFtdKTtcbiAgICBcbiAgICByZXR1cm4gdW5pdFJ1bGVzO1xuICB9XG4gIFxuICBnZXRVbml0UnVsZVByb2R1Y3Rpb25zKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0UnVsZXMgPSB0aGlzLmdldFVuaXRSdWxlcygpLFxuICAgICAgICAgIHVuaXRSdWxlc1Byb2R1Y3Rpb25zID0gdW5pdFJ1bGVzLm1hcChmdW5jdGlvbih1bml0UnVsZSkge1xuICAgICAgICAgICAgY29uc3QgdW5pdFJ1bGVzUHJvZHVjdGlvbiA9IFVuaXRSdWxlUHJvZHVjdGlvbi5mcm9tTmFtZUFuZFVuaXRSdWxlKG5hbWUsIHVuaXRSdWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHVuaXRSdWxlc1Byb2R1Y3Rpb247XG4gICAgICAgICAgfSk7IFxuICAgIFxuICAgIHJldHVybiB1bml0UnVsZXNQcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBsZXQgdW5pdFJ1bGVzUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9kdWN0aW9uUnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFJ1bGVzID0gcHJvZHVjdGlvblJ1bGVzLnJlZHVjZShmdW5jdGlvbih1bml0UnVsZXMsIHByb2R1Y3Rpb25SdWxlKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21SdWxlKHByb2R1Y3Rpb25SdWxlKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRSdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHVuaXRSdWxlcyA9IHVuaXRSdWxlcy5jb25jYXQodW5pdFJ1bGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdW5pdFJ1bGVzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICB1bml0UnVsZXNMZW5ndGggPSB1bml0UnVsZXMubGVuZ3RoO1xuXG4gICAgaWYgKHVuaXRSdWxlc0xlbmd0aCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgICAgcnVsZXMgPSB1bml0UnVsZXMsICAvLy9cbiAgICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uTm9kZTtcblxuICAgICAgdW5pdFJ1bGVzUHJvZHVjdGlvbiA9IG5ldyBVbml0UnVsZXNQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHVuaXRSdWxlc1Byb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0UnVsZXNQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==