'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    Production = require('../production'),
    UnitProduction = require('../production/unit');

var CyclicProduction = function (_Production) {
  _inherits(CyclicProduction, _Production);

  function CyclicProduction() {
    _classCallCheck(this, CyclicProduction);

    return _possibleConstructorReturn(this, (CyclicProduction.__proto__ || Object.getPrototypeOf(CyclicProduction)).apply(this, arguments));
  }

  _createClass(CyclicProduction, [{
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
    key: 'getUnitProductionPartProductionNames',
    value: function getUnitProductionPartProductionNames() {
      var rules = this.getRules(),
          unitProductionPartProductionNames = rules.reduce(function (unitProductionPartProductionNames, rule) {
        var rulePartsLength = rule.getPartsLength();

        if (rulePartsLength === 1) {
          var ruleFirstProductionNamePart = rule.getFirstProductionNamePart(),
              ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName(),
              unitProductionPartProductionName = ruleFirstProductionNamePartProductionName; ///

          unitProductionPartProductionNames = unitProductionPartProductionNames.concat(unitProductionPartProductionName);
        }

        return unitProductionPartProductionNames;
      }, []);

      return unitProductionPartProductionNames;
    }
  }, {
    key: 'getUnitProductions',
    value: function getUnitProductions() {
      var name = this.getName(),
          unitProductionsName = name,
          ///
      unitProductionPartProductionNames = this.getUnitProductionPartProductionNames(),
          unitProductions = unitProductionPartProductionNames.map(function (unitProductionPartProductionName) {
        var name = unitProductionsName,
            ///
        partProductionName = unitProductionPartProductionName,
            ///
        unitProduction = UnitProduction.fromNameAndPartProductionName(name, partProductionName);

        return unitProduction;
      });

      return unitProductions;
    }
  }], [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var cyclicProduction = null;

      var rules = rulesFromProduction(production);

      if (rules !== null) {
        var productionName = production.getName(),
            productionNode = production.getNode(),
            name = productionName,
            ///
        Node = productionNode;

        cyclicProduction = new CyclicProduction(name, rules, Node);
      }

      return cyclicProduction;
    }
  }]);

  return CyclicProduction;
}(Production);

module.exports = CyclicProduction;

function rulesFromProduction(production) {
  var rules = null;

  var productionRules = production.getRules(),
      cyclicRules = productionRules.reduce(function (cyclicRules, productionRule) {
    var productionRuleFirstProductionNamePart = productionRule.getFirstProductionNamePart();

    if (productionRuleFirstProductionNamePart !== null) {
      var cyclicPart = productionRuleFirstProductionNamePart,
          cyclicParts = [cyclicPart],
          cyclicRule = new Rule(cyclicParts);

      cyclicRules.push(cyclicRule);
    }

    return cyclicRules;
  }, []),
      cyclicRulesLength = cyclicRules.length;

  if (cyclicRulesLength > 0) {
    rules = cyclicRules;
  }

  return rules;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi9jeWNsaWMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uIiwiVW5pdFByb2R1Y3Rpb24iLCJDeWNsaWNQcm9kdWN0aW9uIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGVzUHJvZHVjdGlvbk5hbWVzIiwibWFwIiwicnVsZSIsInJ1bGVQYXJ0cyIsImdldFBhcnRzIiwicnVsZUZpcnN0UGFydCIsImZpcnN0IiwicnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwicnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsInJ1bGVQcm9kdWN0aW9uTmFtZSIsInVuaXRQcm9kdWN0aW9uUGFydFByb2R1Y3Rpb25OYW1lcyIsInJlZHVjZSIsInJ1bGVQYXJ0c0xlbmd0aCIsImdldFBhcnRzTGVuZ3RoIiwiZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJ1bml0UHJvZHVjdGlvblBhcnRQcm9kdWN0aW9uTmFtZSIsImNvbmNhdCIsIm5hbWUiLCJnZXROYW1lIiwidW5pdFByb2R1Y3Rpb25zTmFtZSIsImdldFVuaXRQcm9kdWN0aW9uUGFydFByb2R1Y3Rpb25OYW1lcyIsInVuaXRQcm9kdWN0aW9ucyIsInBhcnRQcm9kdWN0aW9uTmFtZSIsInVuaXRQcm9kdWN0aW9uIiwiZnJvbU5hbWVBbmRQYXJ0UHJvZHVjdGlvbk5hbWUiLCJwcm9kdWN0aW9uIiwiY3ljbGljUHJvZHVjdGlvbiIsInJ1bGVzRnJvbVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZSIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvZHVjdGlvblJ1bGVzIiwiY3ljbGljUnVsZXMiLCJwcm9kdWN0aW9uUnVsZSIsInByb2R1Y3Rpb25SdWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJjeWNsaWNQYXJ0IiwiY3ljbGljUGFydHMiLCJjeWNsaWNSdWxlIiwicHVzaCIsImN5Y2xpY1J1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSU1HLGdCOzs7Ozs7Ozs7Ozs4Q0FDc0I7QUFDeEIsVUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyx1QkFBdUJGLE1BQU1HLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDOUMsWUFBTUMsWUFBWUQsS0FBS0UsUUFBTCxFQUFsQjtBQUFBLFlBQ01DLGdCQUFnQkMsTUFBTUgsU0FBTixDQUR0QjtBQUFBLFlBRU1JLDhCQUE4QkYsYUFGcEM7QUFBQSxZQUVvRDtBQUM5Q0csb0RBQTRDRCw0QkFBNEJFLGlCQUE1QixFQUhsRDtBQUFBLFlBSU1DLHFCQUFxQkYseUNBSjNCLENBRDhDLENBS3dCOztBQUV0RSxlQUFPRSxrQkFBUDtBQUNELE9BUnNCLENBRDdCOztBQVdBLGFBQU9WLG9CQUFQO0FBQ0Q7OzsyREFFc0M7QUFDckMsVUFBTUYsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNWSxvQ0FBb0NiLE1BQU1jLE1BQU4sQ0FBYSxVQUFTRCxpQ0FBVCxFQUE0Q1QsSUFBNUMsRUFBa0Q7QUFDakcsWUFBTVcsa0JBQWtCWCxLQUFLWSxjQUFMLEVBQXhCOztBQUVBLFlBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixjQUFNTiw4QkFBOEJMLEtBQUthLDBCQUFMLEVBQXBDO0FBQUEsY0FDTVAsNENBQTRDRCw0QkFBNEJFLGlCQUE1QixFQURsRDtBQUFBLGNBRU1PLG1DQUFtQ1IseUNBRnpDLENBRHlCLENBRzJEOztBQUVwRkcsOENBQW9DQSxrQ0FBa0NNLE1BQWxDLENBQXlDRCxnQ0FBekMsQ0FBcEM7QUFDRDs7QUFFRCxlQUFPTCxpQ0FBUDtBQUNELE9BWm1DLEVBWWpDLEVBWmlDLENBRDFDOztBQWVBLGFBQU9BLGlDQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTU8sT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxzQkFBc0JGLElBRDVCO0FBQUEsVUFDa0M7QUFDNUJQLDBDQUFvQyxLQUFLVSxvQ0FBTCxFQUYxQztBQUFBLFVBR01DLGtCQUFrQlgsa0NBQWtDVixHQUFsQyxDQUFzQyxVQUFTZSxnQ0FBVCxFQUEyQztBQUNqRyxZQUFNRSxPQUFPRSxtQkFBYjtBQUFBLFlBQWtDO0FBQzVCRyw2QkFBcUJQLGdDQUQzQjtBQUFBLFlBQzhEO0FBQ3hEUSx5QkFBaUI1QixlQUFlNkIsNkJBQWYsQ0FBNkNQLElBQTdDLEVBQW1ESyxrQkFBbkQsQ0FGdkI7O0FBSUEsZUFBT0MsY0FBUDtBQUNELE9BTmlCLENBSHhCOztBQVdBLGFBQU9GLGVBQVA7QUFDRDs7O21DQUVxQkksVSxFQUFZO0FBQ2hDLFVBQUlDLG1CQUFtQixJQUF2Qjs7QUFFQSxVQUFNN0IsUUFBUThCLG9CQUFvQkYsVUFBcEIsQ0FBZDs7QUFFQSxVQUFJNUIsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLFlBQU0rQixpQkFBaUJILFdBQVdQLE9BQVgsRUFBdkI7QUFBQSxZQUNNVyxpQkFBaUJKLFdBQVdLLE9BQVgsRUFEdkI7QUFBQSxZQUVNYixPQUFPVyxjQUZiO0FBQUEsWUFFNkI7QUFDdkJHLGVBQU9GLGNBSGI7O0FBS0FILDJCQUFtQixJQUFJOUIsZ0JBQUosQ0FBcUJxQixJQUFyQixFQUEyQnBCLEtBQTNCLEVBQWtDa0MsSUFBbEMsQ0FBbkI7QUFDRDs7QUFFRCxhQUFPTCxnQkFBUDtBQUNEOzs7O0VBakU0QmhDLFU7O0FBb0UvQnNDLE9BQU9DLE9BQVAsR0FBaUJyQyxnQkFBakI7O0FBRUEsU0FBUytCLG1CQUFULENBQTZCRixVQUE3QixFQUF5QztBQUN2QyxNQUFJNUIsUUFBUSxJQUFaOztBQUVBLE1BQU1xQyxrQkFBa0JULFdBQVczQixRQUFYLEVBQXhCO0FBQUEsTUFDTXFDLGNBQWNELGdCQUFnQnZCLE1BQWhCLENBQXVCLFVBQVN3QixXQUFULEVBQXNCQyxjQUF0QixFQUFzQztBQUN6RSxRQUFNQyx3Q0FBd0NELGVBQWV0QiwwQkFBZixFQUE5Qzs7QUFFQSxRQUFJdUIsMENBQTBDLElBQTlDLEVBQW9EO0FBQ2xELFVBQU1DLGFBQWFELHFDQUFuQjtBQUFBLFVBQ01FLGNBQWMsQ0FDWkQsVUFEWSxDQURwQjtBQUFBLFVBSU1FLGFBQWEsSUFBSWhELElBQUosQ0FBUytDLFdBQVQsQ0FKbkI7O0FBTUFKLGtCQUFZTSxJQUFaLENBQWlCRCxVQUFqQjtBQUNEOztBQUVELFdBQU9MLFdBQVA7QUFDRCxHQWRhLEVBY1gsRUFkVyxDQURwQjtBQUFBLE1BZ0JNTyxvQkFBb0JQLFlBQVlRLE1BaEJ0Qzs7QUFrQkEsTUFBSUQsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCN0MsWUFBUXNDLFdBQVI7QUFDRDs7QUFFRCxTQUFPdEMsS0FBUDtBQUNEOztBQUVELFNBQVNRLEtBQVQsQ0FBZXVDLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJjeWNsaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgVW5pdFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uL3VuaXQnKTtcblxuY2xhc3MgQ3ljbGljUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBnZXRSdWxlc1Byb2R1Y3Rpb25OYW1lcygpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lcyA9IHJ1bGVzLm1hcChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlUGFydHMgPSBydWxlLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgICBydWxlRmlyc3RQYXJ0ID0gZmlyc3QocnVsZVBhcnRzKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHJ1bGVGaXJzdFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlUHJvZHVjdGlvbk5hbWUgPSBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZTsgLy8vXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlUHJvZHVjdGlvbk5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzUHJvZHVjdGlvbk5hbWVzO1xuICB9XG4gIFxuICBnZXRVbml0UHJvZHVjdGlvblBhcnRQcm9kdWN0aW9uTmFtZXMoKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFByb2R1Y3Rpb25QYXJ0UHJvZHVjdGlvbk5hbWVzID0gcnVsZXMucmVkdWNlKGZ1bmN0aW9uKHVuaXRQcm9kdWN0aW9uUGFydFByb2R1Y3Rpb25OYW1lcywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVBhcnRzTGVuZ3RoID0gcnVsZS5nZXRQYXJ0c0xlbmd0aCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocnVsZVBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHJ1bGUuZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQoKSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgdW5pdFByb2R1Y3Rpb25QYXJ0UHJvZHVjdGlvbk5hbWUgPSBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZTsgLy8vXG5cbiAgICAgICAgICAgICAgdW5pdFByb2R1Y3Rpb25QYXJ0UHJvZHVjdGlvbk5hbWVzID0gdW5pdFByb2R1Y3Rpb25QYXJ0UHJvZHVjdGlvbk5hbWVzLmNvbmNhdCh1bml0UHJvZHVjdGlvblBhcnRQcm9kdWN0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB1bml0UHJvZHVjdGlvblBhcnRQcm9kdWN0aW9uTmFtZXM7XG4gICAgICAgICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiB1bml0UHJvZHVjdGlvblBhcnRQcm9kdWN0aW9uTmFtZXM7XG4gIH1cbiAgXG4gIGdldFVuaXRQcm9kdWN0aW9ucygpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdFByb2R1Y3Rpb25zTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgIHVuaXRQcm9kdWN0aW9uUGFydFByb2R1Y3Rpb25OYW1lcyA9IHRoaXMuZ2V0VW5pdFByb2R1Y3Rpb25QYXJ0UHJvZHVjdGlvbk5hbWVzKCksXG4gICAgICAgICAgdW5pdFByb2R1Y3Rpb25zID0gdW5pdFByb2R1Y3Rpb25QYXJ0UHJvZHVjdGlvbk5hbWVzLm1hcChmdW5jdGlvbih1bml0UHJvZHVjdGlvblBhcnRQcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHVuaXRQcm9kdWN0aW9uc05hbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lID0gdW5pdFByb2R1Y3Rpb25QYXJ0UHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHVuaXRQcm9kdWN0aW9uID0gVW5pdFByb2R1Y3Rpb24uZnJvbU5hbWVBbmRQYXJ0UHJvZHVjdGlvbk5hbWUobmFtZSwgcGFydFByb2R1Y3Rpb25OYW1lKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gdW5pdFByb2R1Y3Rpb247XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXRQcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBsZXQgY3ljbGljUHJvZHVjdGlvbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pO1xuICAgIFxuICAgIGlmIChydWxlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb25Ob2RlO1xuXG4gICAgICBjeWNsaWNQcm9kdWN0aW9uID0gbmV3IEN5Y2xpY1Byb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY3ljbGljUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN5Y2xpY1Byb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBsZXQgcnVsZXMgPSBudWxsO1xuICBcbiAgY29uc3QgcHJvZHVjdGlvblJ1bGVzID0gcHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICBjeWNsaWNSdWxlcyA9IHByb2R1Y3Rpb25SdWxlcy5yZWR1Y2UoZnVuY3Rpb24oY3ljbGljUnVsZXMsIHByb2R1Y3Rpb25SdWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHByb2R1Y3Rpb25SdWxlLmdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0KCk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHByb2R1Y3Rpb25SdWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGN5Y2xpY1BhcnQgPSBwcm9kdWN0aW9uUnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgICAgICAgY3ljbGljUGFydHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIGN5Y2xpY1BhcnRcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBjeWNsaWNSdWxlID0gbmV3IFJ1bGUoY3ljbGljUGFydHMpO1xuXG4gICAgICAgICAgICBjeWNsaWNSdWxlcy5wdXNoKGN5Y2xpY1J1bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gY3ljbGljUnVsZXM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgY3ljbGljUnVsZXNMZW5ndGggPSBjeWNsaWNSdWxlcy5sZW5ndGg7XG4gIFxuICBpZiAoY3ljbGljUnVsZXNMZW5ndGggPiAwKSB7XG4gICAgcnVsZXMgPSBjeWNsaWNSdWxlcztcbiAgfVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=