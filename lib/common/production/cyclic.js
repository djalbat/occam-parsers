'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    Production = require('../production');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi9jeWNsaWMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uIiwiQ3ljbGljUHJvZHVjdGlvbiIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlc1Byb2R1Y3Rpb25OYW1lcyIsIm1hcCIsInJ1bGUiLCJydWxlUGFydHMiLCJnZXRQYXJ0cyIsInJ1bGVGaXJzdFBhcnQiLCJmaXJzdCIsInJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCIsInJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJydWxlUHJvZHVjdGlvbk5hbWUiLCJwcm9kdWN0aW9uIiwiY3ljbGljUHJvZHVjdGlvbiIsInJ1bGVzRnJvbVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTmFtZSIsImdldE5hbWUiLCJwcm9kdWN0aW9uTm9kZSIsImdldE5vZGUiLCJuYW1lIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9kdWN0aW9uUnVsZXMiLCJjeWNsaWNSdWxlcyIsInJlZHVjZSIsInByb2R1Y3Rpb25SdWxlIiwicHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCIsImdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiY3ljbGljUGFydCIsImN5Y2xpY1BhcnRzIiwiY3ljbGljUnVsZSIsInB1c2giLCJjeWNsaWNSdWxlc0xlbmd0aCIsImxlbmd0aCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5COztJQUdNRSxnQjs7Ozs7Ozs7Ozs7OENBQ3NCO0FBQ3hCLFVBQU1DLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsdUJBQXVCRixNQUFNRyxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQzlDLFlBQU1DLFlBQVlELEtBQUtFLFFBQUwsRUFBbEI7QUFBQSxZQUNNQyxnQkFBZ0JDLE1BQU1ILFNBQU4sQ0FEdEI7QUFBQSxZQUVNSSw4QkFBOEJGLGFBRnBDO0FBQUEsWUFFb0Q7QUFDOUNHLG9EQUE0Q0QsNEJBQTRCRSxpQkFBNUIsRUFIbEQ7QUFBQSxZQUlNQyxxQkFBcUJGLHlDQUozQixDQUQ4QyxDQUt3Qjs7QUFFdEUsZUFBT0Usa0JBQVA7QUFDRCxPQVJzQixDQUQ3Qjs7QUFXQSxhQUFPVixvQkFBUDtBQUNEOzs7bUNBRXFCVyxVLEVBQVk7QUFDaEMsVUFBSUMsbUJBQW1CLElBQXZCOztBQUVBLFVBQU1kLFFBQVFlLG9CQUFvQkYsVUFBcEIsQ0FBZDs7QUFFQSxVQUFJYixVQUFVLElBQWQsRUFBb0I7QUFDbEIsWUFBTWdCLGlCQUFpQkgsV0FBV0ksT0FBWCxFQUF2QjtBQUFBLFlBQ01DLGlCQUFpQkwsV0FBV00sT0FBWCxFQUR2QjtBQUFBLFlBRU1DLE9BQU9KLGNBRmI7QUFBQSxZQUU2QjtBQUN2QkssZUFBT0gsY0FIYjs7QUFLQUosMkJBQW1CLElBQUlmLGdCQUFKLENBQXFCcUIsSUFBckIsRUFBMkJwQixLQUEzQixFQUFrQ3FCLElBQWxDLENBQW5CO0FBQ0Q7O0FBRUQsYUFBT1AsZ0JBQVA7QUFDRDs7OztFQS9CNEJoQixVOztBQWtDL0J3QixPQUFPQyxPQUFQLEdBQWlCeEIsZ0JBQWpCOztBQUVBLFNBQVNnQixtQkFBVCxDQUE2QkYsVUFBN0IsRUFBeUM7QUFDdkMsTUFBSWIsUUFBUSxJQUFaOztBQUVBLE1BQU13QixrQkFBa0JYLFdBQVdaLFFBQVgsRUFBeEI7QUFBQSxNQUNNd0IsY0FBY0QsZ0JBQWdCRSxNQUFoQixDQUF1QixVQUFTRCxXQUFULEVBQXNCRSxjQUF0QixFQUFzQztBQUN6RSxRQUFNQyx3Q0FBd0NELGVBQWVFLDBCQUFmLEVBQTlDOztBQUVBLFFBQUlELDBDQUEwQyxJQUE5QyxFQUFvRDtBQUNsRCxVQUFNRSxhQUFhRixxQ0FBbkI7QUFBQSxVQUNNRyxjQUFjLENBQ1pELFVBRFksQ0FEcEI7QUFBQSxVQUlNRSxhQUFhLElBQUlwQyxJQUFKLENBQVNtQyxXQUFULENBSm5COztBQU1BTixrQkFBWVEsSUFBWixDQUFpQkQsVUFBakI7QUFDRDs7QUFFRCxXQUFPUCxXQUFQO0FBQ0QsR0FkYSxFQWNYLEVBZFcsQ0FEcEI7QUFBQSxNQWdCTVMsb0JBQW9CVCxZQUFZVSxNQWhCdEM7O0FBa0JBLE1BQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QmxDLFlBQVF5QixXQUFSO0FBQ0Q7O0FBRUQsU0FBT3pCLEtBQVA7QUFDRDs7QUFFRCxTQUFTUSxLQUFULENBQWU0QixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiY3ljbGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgQ3ljbGljUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBnZXRSdWxlc1Byb2R1Y3Rpb25OYW1lcygpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lcyA9IHJ1bGVzLm1hcChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlUGFydHMgPSBydWxlLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgICBydWxlRmlyc3RQYXJ0ID0gZmlyc3QocnVsZVBhcnRzKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHJ1bGVGaXJzdFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlUHJvZHVjdGlvbk5hbWUgPSBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZTsgLy8vXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlUHJvZHVjdGlvbk5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzUHJvZHVjdGlvbk5hbWVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGxldCBjeWNsaWNQcm9kdWN0aW9uID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbik7XG4gICAgXG4gICAgaWYgKHJ1bGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbk5vZGU7XG5cbiAgICAgIGN5Y2xpY1Byb2R1Y3Rpb24gPSBuZXcgQ3ljbGljUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjeWNsaWNQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ljbGljUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGxldCBydWxlcyA9IG51bGw7XG4gIFxuICBjb25zdCBwcm9kdWN0aW9uUnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgIGN5Y2xpY1J1bGVzID0gcHJvZHVjdGlvblJ1bGVzLnJlZHVjZShmdW5jdGlvbihjeWNsaWNSdWxlcywgcHJvZHVjdGlvblJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uUnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gcHJvZHVjdGlvblJ1bGUuZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAocHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY3ljbGljUGFydCA9IHByb2R1Y3Rpb25SdWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICAgICAgICBjeWNsaWNQYXJ0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgY3ljbGljUGFydFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGN5Y2xpY1J1bGUgPSBuZXcgUnVsZShjeWNsaWNQYXJ0cyk7XG5cbiAgICAgICAgICAgIGN5Y2xpY1J1bGVzLnB1c2goY3ljbGljUnVsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBjeWNsaWNSdWxlcztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBjeWNsaWNSdWxlc0xlbmd0aCA9IGN5Y2xpY1J1bGVzLmxlbmd0aDtcbiAgXG4gIGlmIChjeWNsaWNSdWxlc0xlbmd0aCA+IDApIHtcbiAgICBydWxlcyA9IGN5Y2xpY1J1bGVzO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==