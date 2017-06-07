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

  _createClass(PossiblyCyclicProduction, [{
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
  }], [{
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

        possiblyCyclicProduction = new PossiblyCyclicProduction(name, rules, Node);
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

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi9wb3NzaWJseUN5Y2xpYy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJQb3NzaWJseUN5Y2xpY1Byb2R1Y3Rpb24iLCJydWxlcyIsImdldFJ1bGVzIiwicnVsZXNQcm9kdWN0aW9uTmFtZXMiLCJtYXAiLCJydWxlIiwicnVsZVBhcnRzIiwiZ2V0UGFydHMiLCJydWxlRmlyc3RQYXJ0IiwiZmlyc3QiLCJydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwicnVsZVByb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvbiIsInBvc3NpYmx5Q3ljbGljUHJvZHVjdGlvbiIsInJ1bGVzRnJvbVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTmFtZSIsImdldE5hbWUiLCJwcm9kdWN0aW9uTm9kZSIsImdldE5vZGUiLCJuYW1lIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9kdWN0aW9uUnVsZXMiLCJwb3NzaWJseUN5Y2xpY1J1bGVzIiwicmVkdWNlIiwicHJvZHVjdGlvblJ1bGUiLCJwcm9kdWN0aW9uUnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uUnVsZVBhcnRzTGVuZ3RoIiwiZ2V0UGFydHNMZW5ndGgiLCJwb3NzaWJseUN5Y2xpY1BhcnQiLCJwb3NzaWJseUN5Y2xpY1BhcnRzIiwicG9zc2libHlDeWNsaWNSdWxlIiwicHVzaCIsInBvc3NpYmx5Q3ljbGljUnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsZUFBUixDQURuQjs7SUFHTUUsd0I7Ozs7Ozs7Ozs7OzhDQUNzQjtBQUN4QixVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLHVCQUF1QkYsTUFBTUcsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUM5QyxZQUFNQyxZQUFZRCxLQUFLRSxRQUFMLEVBQWxCO0FBQUEsWUFDTUMsZ0JBQWdCQyxNQUFNSCxTQUFOLENBRHRCO0FBQUEsWUFFTUksOEJBQThCRixhQUZwQztBQUFBLFlBRW9EO0FBQzlDRyxvREFBNENELDRCQUE0QkUsaUJBQTVCLEVBSGxEO0FBQUEsWUFJTUMscUJBQXFCRix5Q0FKM0IsQ0FEOEMsQ0FLd0I7O0FBRXRFLGVBQU9FLGtCQUFQO0FBQ0QsT0FSc0IsQ0FEN0I7O0FBV0EsYUFBT1Ysb0JBQVA7QUFDRDs7O21DQUVxQlcsVSxFQUFZO0FBQ2hDLFVBQUlDLDJCQUEyQixJQUEvQjs7QUFFQSxVQUFNZCxRQUFRZSxvQkFBb0JGLFVBQXBCLENBQWQ7O0FBRUEsVUFBSWIsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLFlBQU1nQixpQkFBaUJILFdBQVdJLE9BQVgsRUFBdkI7QUFBQSxZQUNNQyxpQkFBaUJMLFdBQVdNLE9BQVgsRUFEdkI7QUFBQSxZQUVNQyxPQUFPSixjQUZiO0FBQUEsWUFFNkI7QUFDdkJLLGVBQU9ILGNBSGI7O0FBS0FKLG1DQUEyQixJQUFJZix3QkFBSixDQUE2QnFCLElBQTdCLEVBQW1DcEIsS0FBbkMsRUFBMENxQixJQUExQyxDQUEzQjtBQUNEOztBQUVELGFBQU9QLHdCQUFQO0FBQ0Q7Ozs7RUEvQm9DaEIsVTs7QUFrQ3ZDd0IsT0FBT0MsT0FBUCxHQUFpQnhCLHdCQUFqQjs7QUFFQSxTQUFTZ0IsbUJBQVQsQ0FBNkJGLFVBQTdCLEVBQXlDO0FBQ3ZDLE1BQUliLFFBQVEsSUFBWjs7QUFFQSxNQUFNd0Isa0JBQWtCWCxXQUFXWixRQUFYLEVBQXhCO0FBQUEsTUFDTXdCLHNCQUFzQkQsZ0JBQWdCRSxNQUFoQixDQUF1QixVQUFTRCxtQkFBVCxFQUE4QkUsY0FBOUIsRUFBOEM7QUFDekYsUUFBTUMsd0NBQXdDRCxlQUFlRSwwQkFBZixFQUE5Qzs7QUFFQSxRQUFJRCwwQ0FBMEMsSUFBOUMsRUFBb0Q7QUFDbEQsVUFBTUUsNEJBQTRCSCxlQUFlSSxjQUFmLEVBQWxDOztBQUVBLFVBQUlELDhCQUE4QixDQUFsQyxFQUFxQztBQUNuQyxZQUFNRSxxQkFBcUJKLHFDQUEzQjtBQUFBLFlBQ01LLHNCQUFzQixDQUNwQkQsa0JBRG9CLENBRDVCO0FBQUEsWUFJTUUscUJBQXFCLElBQUl0QyxJQUFKLENBQVNxQyxtQkFBVCxDQUozQjs7QUFNQVIsNEJBQW9CVSxJQUFwQixDQUF5QkQsa0JBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPVCxtQkFBUDtBQUNELEdBbEJxQixFQWtCbkIsRUFsQm1CLENBRDVCO0FBQUEsTUFvQk1XLDRCQUE0Qlgsb0JBQW9CWSxNQXBCdEQ7O0FBc0JBLE1BQUlELDRCQUE0QixDQUFoQyxFQUFtQztBQUNqQ3BDLFlBQVF5QixtQkFBUjtBQUNEOztBQUVELFNBQU96QixLQUFQO0FBQ0Q7O0FBRUQsU0FBU1EsS0FBVCxDQUFlOEIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBvc3NpYmx5Q3ljbGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgUG9zc2libHlDeWNsaWNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGdldFJ1bGVzUHJvZHVjdGlvbk5hbWVzKCkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbk5hbWVzID0gcnVsZXMubWFwKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVQYXJ0cyA9IHJ1bGUuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVGaXJzdFBhcnQgPSBmaXJzdChydWxlUGFydHMpLFxuICAgICAgICAgICAgICAgICAgcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gcnVsZUZpcnN0UGFydCwgIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uTmFtZSA9IHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lOyAvLy9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVQcm9kdWN0aW9uTmFtZTtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXNQcm9kdWN0aW9uTmFtZXM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgbGV0IHBvc3NpYmx5Q3ljbGljUHJvZHVjdGlvbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pO1xuICAgIFxuICAgIGlmIChydWxlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb25Ob2RlO1xuXG4gICAgICBwb3NzaWJseUN5Y2xpY1Byb2R1Y3Rpb24gPSBuZXcgUG9zc2libHlDeWNsaWNQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBvc3NpYmx5Q3ljbGljUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvc3NpYmx5Q3ljbGljUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGxldCBydWxlcyA9IG51bGw7XG4gIFxuICBjb25zdCBwcm9kdWN0aW9uUnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgIHBvc3NpYmx5Q3ljbGljUnVsZXMgPSBwcm9kdWN0aW9uUnVsZXMucmVkdWNlKGZ1bmN0aW9uKHBvc3NpYmx5Q3ljbGljUnVsZXMsIHByb2R1Y3Rpb25SdWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHByb2R1Y3Rpb25SdWxlLmdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0KCk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHByb2R1Y3Rpb25SdWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25SdWxlUGFydHNMZW5ndGggPSBwcm9kdWN0aW9uUnVsZS5nZXRQYXJ0c0xlbmd0aCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJvZHVjdGlvblJ1bGVQYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBjb25zdCBwb3NzaWJseUN5Y2xpY1BhcnQgPSBwcm9kdWN0aW9uUnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgICAgICAgICBwb3NzaWJseUN5Y2xpY1BhcnRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmx5Q3ljbGljUGFydFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBwb3NzaWJseUN5Y2xpY1J1bGUgPSBuZXcgUnVsZShwb3NzaWJseUN5Y2xpY1BhcnRzKTtcblxuICAgICAgICAgICAgICBwb3NzaWJseUN5Y2xpY1J1bGVzLnB1c2gocG9zc2libHlDeWNsaWNSdWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc3NpYmx5Q3ljbGljUnVsZXM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgcG9zc2libHlDeWNsaWNSdWxlc0xlbmd0aCA9IHBvc3NpYmx5Q3ljbGljUnVsZXMubGVuZ3RoO1xuICBcbiAgaWYgKHBvc3NpYmx5Q3ljbGljUnVsZXNMZW5ndGggPiAwKSB7XG4gICAgcnVsZXMgPSBwb3NzaWJseUN5Y2xpY1J1bGVzO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==