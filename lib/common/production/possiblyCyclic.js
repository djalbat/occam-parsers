'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    Production = require('../production');

var PossiblyCyclicProduction = function (_Production) {
  _inherits(PossiblyCyclicProduction, _Production);

  function PossiblyCyclicProduction() {
    _classCallCheck(this, PossiblyCyclicProduction);

    return _possibleConstructorReturn(this, (PossiblyCyclicProduction.__proto__ || Object.getPrototypeOf(PossiblyCyclicProduction)).apply(this, arguments));
  }

  _createClass(PossiblyCyclicProduction, null, [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var possiblyCyclicProduction = null;

      var rules = rulesFromProduction(production);

      if (rules !== null) {
        var productionName = production.getName(),
            productionNode = production.getNode(),
            name = productionName,
            ///
        Node = productionNode;

        possiblyCyclicProduction = new Production(name, rules, Node);
      }

      return possiblyCyclicProduction;
    }
  }]);

  return PossiblyCyclicProduction;
}(Production);

module.exports = PossiblyCyclicProduction;

function rulesFromProduction(production) {
  var rules = null;

  var productionRules = production.getRules(),
      possiblyCyclicRules = productionRules.reduce(function (possiblyCyclicRules, productionRule) {
    var productionRuleFirstProductionNamePart = productionRule.getFirstProductionNamePart();

    if (productionRuleFirstProductionNamePart !== null) {
      var productionRulePartsLength = productionRule.getPartsLength();

      if (productionRulePartsLength === 1) {
        var possiblyCyclicPart = productionRuleFirstProductionNamePart,
            possiblyCyclicParts = [possiblyCyclicPart],
            possiblyCyclicRule = new Rule(possiblyCyclicParts);

        possiblyCyclicRules.push(possiblyCyclicRule);
      }
    }

    return possiblyCyclicRules;
  }, []),
      possiblyCyclicRulesLength = possiblyCyclicRules.length;

  if (possiblyCyclicRulesLength > 0) {
    rules = possiblyCyclicRules;
  }

  return rules;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi9wb3NzaWJseUN5Y2xpYy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJQb3NzaWJseUN5Y2xpY1Byb2R1Y3Rpb24iLCJwcm9kdWN0aW9uIiwicG9zc2libHlDeWNsaWNQcm9kdWN0aW9uIiwicnVsZXMiLCJydWxlc0Zyb21Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJvZHVjdGlvbk5vZGUiLCJnZXROb2RlIiwibmFtZSIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvZHVjdGlvblJ1bGVzIiwiZ2V0UnVsZXMiLCJwb3NzaWJseUN5Y2xpY1J1bGVzIiwicmVkdWNlIiwicHJvZHVjdGlvblJ1bGUiLCJwcm9kdWN0aW9uUnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uUnVsZVBhcnRzTGVuZ3RoIiwiZ2V0UGFydHNMZW5ndGgiLCJwb3NzaWJseUN5Y2xpY1BhcnQiLCJwb3NzaWJseUN5Y2xpY1BhcnRzIiwicG9zc2libHlDeWNsaWNSdWxlIiwicHVzaCIsInBvc3NpYmx5Q3ljbGljUnVsZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGVBQVIsQ0FEbkI7O0lBR01FLHdCOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUNoQyxVQUFJQywyQkFBMkIsSUFBL0I7O0FBRUEsVUFBTUMsUUFBUUMsb0JBQW9CSCxVQUFwQixDQUFkOztBQUVBLFVBQUlFLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixZQUFNRSxpQkFBaUJKLFdBQVdLLE9BQVgsRUFBdkI7QUFBQSxZQUNNQyxpQkFBaUJOLFdBQVdPLE9BQVgsRUFEdkI7QUFBQSxZQUVNQyxPQUFPSixjQUZiO0FBQUEsWUFFNkI7QUFDdkJLLGVBQU9ILGNBSGI7O0FBS0FMLG1DQUEyQixJQUFJSCxVQUFKLENBQWVVLElBQWYsRUFBcUJOLEtBQXJCLEVBQTRCTyxJQUE1QixDQUEzQjtBQUNEOztBQUVELGFBQU9SLHdCQUFQO0FBQ0Q7Ozs7RUFoQm9DSCxVOztBQW1CdkNZLE9BQU9DLE9BQVAsR0FBaUJaLHdCQUFqQjs7QUFFQSxTQUFTSSxtQkFBVCxDQUE2QkgsVUFBN0IsRUFBeUM7QUFDdkMsTUFBSUUsUUFBUSxJQUFaOztBQUVBLE1BQU1VLGtCQUFrQlosV0FBV2EsUUFBWCxFQUF4QjtBQUFBLE1BQ01DLHNCQUFzQkYsZ0JBQWdCRyxNQUFoQixDQUF1QixVQUFTRCxtQkFBVCxFQUE4QkUsY0FBOUIsRUFBOEM7QUFDekYsUUFBTUMsd0NBQXdDRCxlQUFlRSwwQkFBZixFQUE5Qzs7QUFFQSxRQUFJRCwwQ0FBMEMsSUFBOUMsRUFBb0Q7QUFDbEQsVUFBTUUsNEJBQTRCSCxlQUFlSSxjQUFmLEVBQWxDOztBQUVBLFVBQUlELDhCQUE4QixDQUFsQyxFQUFxQztBQUNuQyxZQUFNRSxxQkFBcUJKLHFDQUEzQjtBQUFBLFlBQ01LLHNCQUFzQixDQUNwQkQsa0JBRG9CLENBRDVCO0FBQUEsWUFJTUUscUJBQXFCLElBQUkzQixJQUFKLENBQVMwQixtQkFBVCxDQUozQjs7QUFNQVIsNEJBQW9CVSxJQUFwQixDQUF5QkQsa0JBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPVCxtQkFBUDtBQUNELEdBbEJxQixFQWtCbkIsRUFsQm1CLENBRDVCO0FBQUEsTUFvQk1XLDRCQUE0Qlgsb0JBQW9CWSxNQXBCdEQ7O0FBc0JBLE1BQUlELDRCQUE0QixDQUFoQyxFQUFtQztBQUNqQ3ZCLFlBQVFZLG1CQUFSO0FBQ0Q7O0FBRUQsU0FBT1osS0FBUDtBQUNEIiwiZmlsZSI6InBvc3NpYmx5Q3ljbGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgUG9zc2libHlDeWNsaWNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgbGV0IHBvc3NpYmx5Q3ljbGljUHJvZHVjdGlvbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pO1xuICAgIFxuICAgIGlmIChydWxlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb25Ob2RlO1xuXG4gICAgICBwb3NzaWJseUN5Y2xpY1Byb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBwb3NzaWJseUN5Y2xpY1Byb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3NzaWJseUN5Y2xpY1Byb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBsZXQgcnVsZXMgPSBudWxsO1xuICBcbiAgY29uc3QgcHJvZHVjdGlvblJ1bGVzID0gcHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICBwb3NzaWJseUN5Y2xpY1J1bGVzID0gcHJvZHVjdGlvblJ1bGVzLnJlZHVjZShmdW5jdGlvbihwb3NzaWJseUN5Y2xpY1J1bGVzLCBwcm9kdWN0aW9uUnVsZSkge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25SdWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgPSBwcm9kdWN0aW9uUnVsZS5nZXRGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCgpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChwcm9kdWN0aW9uUnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uUnVsZVBhcnRzTGVuZ3RoID0gcHJvZHVjdGlvblJ1bGUuZ2V0UGFydHNMZW5ndGgoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHByb2R1Y3Rpb25SdWxlUGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgY29uc3QgcG9zc2libHlDeWNsaWNQYXJ0ID0gcHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libHlDeWNsaWNQYXJ0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJseUN5Y2xpY1BhcnRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libHlDeWNsaWNSdWxlID0gbmV3IFJ1bGUocG9zc2libHlDeWNsaWNQYXJ0cyk7XG5cbiAgICAgICAgICAgICAgcG9zc2libHlDeWNsaWNSdWxlcy5wdXNoKHBvc3NpYmx5Q3ljbGljUnVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NzaWJseUN5Y2xpY1J1bGVzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHBvc3NpYmx5Q3ljbGljUnVsZXNMZW5ndGggPSBwb3NzaWJseUN5Y2xpY1J1bGVzLmxlbmd0aDtcbiAgXG4gIGlmIChwb3NzaWJseUN5Y2xpY1J1bGVzTGVuZ3RoID4gMCkge1xuICAgIHJ1bGVzID0gcG9zc2libHlDeWNsaWNSdWxlcztcbiAgfVxuXG4gIHJldHVybiBydWxlcztcbn1cbiJdfQ==