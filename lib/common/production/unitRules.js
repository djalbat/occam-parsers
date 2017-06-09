'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitRule = require('../rule/unit'),
    Production = require('../production'),
    UnitRuleProduction = require('./unitRule');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi91bml0UnVsZXMuanMiXSwibmFtZXMiOlsiVW5pdFJ1bGUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbiIsIlVuaXRSdWxlUHJvZHVjdGlvbiIsIlVuaXRSdWxlc1Byb2R1Y3Rpb24iLCJydWxlcyIsImdldFJ1bGVzIiwicnVsZXNQcm9kdWN0aW9uTmFtZXMiLCJtYXAiLCJydWxlIiwicnVsZVBhcnRzIiwiZ2V0UGFydHMiLCJydWxlRmlyc3RQYXJ0IiwiZmlyc3QiLCJydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwicnVsZVByb2R1Y3Rpb25OYW1lIiwidW5pdFJ1bGVzIiwicmVkdWNlIiwidW5pdFJ1bGUiLCJmcm9tUnVsZSIsImNvbmNhdCIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0VW5pdFJ1bGVzIiwidW5pdFJ1bGVzUHJvZHVjdGlvbnMiLCJ1bml0UnVsZXNQcm9kdWN0aW9uIiwiZnJvbU5hbWVBbmRVbml0UnVsZSIsInByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uUnVsZXMiLCJwcm9kdWN0aW9uUnVsZSIsInVuaXRSdWxlc0xlbmd0aCIsImxlbmd0aCIsInByb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvbk5vZGUiLCJnZXROb2RlIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGNBQVIsQ0FBakI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsWUFBUixDQUYzQjs7SUFJTUcsbUI7Ozs7Ozs7Ozs7OzhDQUNzQjtBQUN4QixVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLHVCQUF1QkYsTUFBTUcsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUM5QyxZQUFNQyxZQUFZRCxLQUFLRSxRQUFMLEVBQWxCO0FBQUEsWUFDTUMsZ0JBQWdCQyxNQUFNSCxTQUFOLENBRHRCO0FBQUEsWUFFTUksOEJBQThCRixhQUZwQztBQUFBLFlBRW9EO0FBQzlDRyxvREFBNENELDRCQUE0QkUsaUJBQTVCLEVBSGxEO0FBQUEsWUFJTUMscUJBQXFCRix5Q0FKM0IsQ0FEOEMsQ0FLd0I7O0FBRXRFLGVBQU9FLGtCQUFQO0FBQ0QsT0FSc0IsQ0FEN0I7O0FBV0EsYUFBT1Ysb0JBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUYsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNWSxZQUFZYixNQUFNYyxNQUFOLENBQWEsVUFBU0QsU0FBVCxFQUFvQlQsSUFBcEIsRUFBMEI7QUFDakQsWUFBTVcsV0FBV3BCLFNBQVNxQixRQUFULENBQWtCWixJQUFsQixDQUFqQjs7QUFFQSxZQUFJVyxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCRixzQkFBWUEsVUFBVUksTUFBVixDQUFpQkYsUUFBakIsQ0FBWjtBQUNEOztBQUVELGVBQU9GLFNBQVA7QUFDRCxPQVJXLEVBUVQsRUFSUyxDQURsQjs7QUFXQSxhQUFPQSxTQUFQO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsVUFBTUssT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNTixZQUFZLEtBQUtPLFlBQUwsRUFEbEI7QUFBQSxVQUVNQyx1QkFBdUJSLFVBQVVWLEdBQVYsQ0FBYyxVQUFTWSxRQUFULEVBQW1CO0FBQ3RELFlBQU1PLHNCQUFzQnhCLG1CQUFtQnlCLG1CQUFuQixDQUF1Q0wsSUFBdkMsRUFBNkNILFFBQTdDLENBQTVCOztBQUVBLGVBQU9PLG1CQUFQO0FBQ0QsT0FKc0IsQ0FGN0I7O0FBUUEsYUFBT0Qsb0JBQVA7QUFDRDs7O21DQUVxQkcsVSxFQUFZO0FBQ2hDLFVBQUlGLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNRyxrQkFBa0JELFdBQVd2QixRQUFYLEVBQXhCO0FBQUEsVUFDTVksWUFBWVksZ0JBQWdCWCxNQUFoQixDQUF1QixVQUFTRCxTQUFULEVBQW9CYSxjQUFwQixFQUFvQztBQUNyRSxZQUFNWCxXQUFXcEIsU0FBU3FCLFFBQVQsQ0FBa0JVLGNBQWxCLENBQWpCOztBQUVBLFlBQUlYLGFBQWEsSUFBakIsRUFBdUI7QUFDckJGLHNCQUFZQSxVQUFVSSxNQUFWLENBQWlCRixRQUFqQixDQUFaO0FBQ0Q7O0FBRUQsZUFBT0YsU0FBUDtBQUNELE9BUlcsRUFRVCxFQVJTLENBRGxCO0FBQUEsVUFVTWMsa0JBQWtCZCxVQUFVZSxNQVZsQzs7QUFZQSxVQUFJRCxlQUFKLEVBQXFCO0FBQ25CLFlBQU1FLGlCQUFpQkwsV0FBV0wsT0FBWCxFQUF2QjtBQUFBLFlBQ01XLGlCQUFpQk4sV0FBV08sT0FBWCxFQUR2QjtBQUFBLFlBRU1iLE9BQU9XLGNBRmI7QUFBQSxZQUU2QjtBQUN2QjdCLGdCQUFRYSxTQUhkO0FBQUEsWUFHMEI7QUFDcEJtQixlQUFPRixjQUpiOztBQU1BUiw4QkFBc0IsSUFBSXZCLG1CQUFKLENBQXdCbUIsSUFBeEIsRUFBOEJsQixLQUE5QixFQUFxQ2dDLElBQXJDLENBQXRCO0FBQ0Q7O0FBRUQsYUFBT1YsbUJBQVA7QUFDRDs7OztFQXJFK0J6QixVOztBQXdFbENvQyxPQUFPQyxPQUFQLEdBQWlCbkMsbUJBQWpCOztBQUVBLFNBQVNTLEtBQVQsQ0FBZTJCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ1bml0UnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaXRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS91bml0JyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgVW5pdFJ1bGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi91bml0UnVsZScpO1xuXG5jbGFzcyBVbml0UnVsZXNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGdldFJ1bGVzUHJvZHVjdGlvbk5hbWVzKCkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbk5hbWVzID0gcnVsZXMubWFwKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVQYXJ0cyA9IHJ1bGUuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVGaXJzdFBhcnQgPSBmaXJzdChydWxlUGFydHMpLFxuICAgICAgICAgICAgICAgICAgcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gcnVsZUZpcnN0UGFydCwgIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uTmFtZSA9IHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lOyAvLy9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVQcm9kdWN0aW9uTmFtZTtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXNQcm9kdWN0aW9uTmFtZXM7XG4gIH1cbiAgXG4gIGdldFVuaXRSdWxlcygpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICB1bml0UnVsZXMgPSBydWxlcy5yZWR1Y2UoZnVuY3Rpb24odW5pdFJ1bGVzLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21SdWxlKHJ1bGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodW5pdFJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdW5pdFJ1bGVzID0gdW5pdFJ1bGVzLmNvbmNhdCh1bml0UnVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB1bml0UnVsZXM7XG4gICAgICAgICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiB1bml0UnVsZXM7XG4gIH1cbiAgXG4gIGdldFVuaXRSdWxlUHJvZHVjdGlvbnMoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHVuaXRSdWxlcyA9IHRoaXMuZ2V0VW5pdFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFJ1bGVzUHJvZHVjdGlvbnMgPSB1bml0UnVsZXMubWFwKGZ1bmN0aW9uKHVuaXRSdWxlKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0UnVsZXNQcm9kdWN0aW9uID0gVW5pdFJ1bGVQcm9kdWN0aW9uLmZyb21OYW1lQW5kVW5pdFJ1bGUobmFtZSwgdW5pdFJ1bGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdW5pdFJ1bGVzUHJvZHVjdGlvbjtcbiAgICAgICAgICB9KTsgXG4gICAgXG4gICAgcmV0dXJuIHVuaXRSdWxlc1Byb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGxldCB1bml0UnVsZXNQcm9kdWN0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25SdWxlcyA9IHByb2R1Y3Rpb24uZ2V0UnVsZXMoKSxcbiAgICAgICAgICB1bml0UnVsZXMgPSBwcm9kdWN0aW9uUnVsZXMucmVkdWNlKGZ1bmN0aW9uKHVuaXRSdWxlcywgcHJvZHVjdGlvblJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbVJ1bGUocHJvZHVjdGlvblJ1bGUpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdW5pdFJ1bGVzID0gdW5pdFJ1bGVzLmNvbmNhdCh1bml0UnVsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1bml0UnVsZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHVuaXRSdWxlc0xlbmd0aCA9IHVuaXRSdWxlcy5sZW5ndGg7XG5cbiAgICBpZiAodW5pdFJ1bGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgICAgICBydWxlcyA9IHVuaXRSdWxlcywgIC8vL1xuICAgICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb25Ob2RlO1xuXG4gICAgICB1bml0UnVsZXNQcm9kdWN0aW9uID0gbmV3IFVuaXRSdWxlc1Byb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdW5pdFJ1bGVzUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXRSdWxlc1Byb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19