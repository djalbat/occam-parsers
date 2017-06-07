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
      var productionRulePartsLength = productionRule.getPartsLength();

      if (productionRulePartsLength === 1) {
        var cyclicPart = productionRuleFirstProductionNamePart,
            cyclicParts = [cyclicPart],
            cyclicRule = new Rule(cyclicParts);

        cyclicRules.push(cyclicRule);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi9jeWNsaWMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uIiwiQ3ljbGljUHJvZHVjdGlvbiIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlc1Byb2R1Y3Rpb25OYW1lcyIsIm1hcCIsInJ1bGUiLCJydWxlUGFydHMiLCJnZXRQYXJ0cyIsInJ1bGVGaXJzdFBhcnQiLCJmaXJzdCIsInJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCIsInJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJydWxlUHJvZHVjdGlvbk5hbWUiLCJwcm9kdWN0aW9uIiwiY3ljbGljUHJvZHVjdGlvbiIsInJ1bGVzRnJvbVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTmFtZSIsImdldE5hbWUiLCJwcm9kdWN0aW9uTm9kZSIsImdldE5vZGUiLCJuYW1lIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9kdWN0aW9uUnVsZXMiLCJjeWNsaWNSdWxlcyIsInJlZHVjZSIsInByb2R1Y3Rpb25SdWxlIiwicHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCIsImdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwicHJvZHVjdGlvblJ1bGVQYXJ0c0xlbmd0aCIsImdldFBhcnRzTGVuZ3RoIiwiY3ljbGljUGFydCIsImN5Y2xpY1BhcnRzIiwiY3ljbGljUnVsZSIsInB1c2giLCJjeWNsaWNSdWxlc0xlbmd0aCIsImxlbmd0aCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5COztJQUdNRSxnQjs7Ozs7Ozs7Ozs7OENBQ3NCO0FBQ3hCLFVBQU1DLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsdUJBQXVCRixNQUFNRyxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQzlDLFlBQU1DLFlBQVlELEtBQUtFLFFBQUwsRUFBbEI7QUFBQSxZQUNNQyxnQkFBZ0JDLE1BQU1ILFNBQU4sQ0FEdEI7QUFBQSxZQUVNSSw4QkFBOEJGLGFBRnBDO0FBQUEsWUFFb0Q7QUFDOUNHLG9EQUE0Q0QsNEJBQTRCRSxpQkFBNUIsRUFIbEQ7QUFBQSxZQUlNQyxxQkFBcUJGLHlDQUozQixDQUQ4QyxDQUt3Qjs7QUFFdEUsZUFBT0Usa0JBQVA7QUFDRCxPQVJzQixDQUQ3Qjs7QUFXQSxhQUFPVixvQkFBUDtBQUNEOzs7bUNBRXFCVyxVLEVBQVk7QUFDaEMsVUFBSUMsbUJBQW1CLElBQXZCOztBQUVBLFVBQU1kLFFBQVFlLG9CQUFvQkYsVUFBcEIsQ0FBZDs7QUFFQSxVQUFJYixVQUFVLElBQWQsRUFBb0I7QUFDbEIsWUFBTWdCLGlCQUFpQkgsV0FBV0ksT0FBWCxFQUF2QjtBQUFBLFlBQ01DLGlCQUFpQkwsV0FBV00sT0FBWCxFQUR2QjtBQUFBLFlBRU1DLE9BQU9KLGNBRmI7QUFBQSxZQUU2QjtBQUN2QkssZUFBT0gsY0FIYjs7QUFLQUosMkJBQW1CLElBQUlmLGdCQUFKLENBQXFCcUIsSUFBckIsRUFBMkJwQixLQUEzQixFQUFrQ3FCLElBQWxDLENBQW5CO0FBQ0Q7O0FBRUQsYUFBT1AsZ0JBQVA7QUFDRDs7OztFQS9CNEJoQixVOztBQWtDL0J3QixPQUFPQyxPQUFQLEdBQWlCeEIsZ0JBQWpCOztBQUVBLFNBQVNnQixtQkFBVCxDQUE2QkYsVUFBN0IsRUFBeUM7QUFDdkMsTUFBSWIsUUFBUSxJQUFaOztBQUVBLE1BQU13QixrQkFBa0JYLFdBQVdaLFFBQVgsRUFBeEI7QUFBQSxNQUNNd0IsY0FBY0QsZ0JBQWdCRSxNQUFoQixDQUF1QixVQUFTRCxXQUFULEVBQXNCRSxjQUF0QixFQUFzQztBQUN6RSxRQUFNQyx3Q0FBd0NELGVBQWVFLDBCQUFmLEVBQTlDOztBQUVBLFFBQUlELDBDQUEwQyxJQUE5QyxFQUFvRDtBQUNsRCxVQUFNRSw0QkFBNEJILGVBQWVJLGNBQWYsRUFBbEM7O0FBRUEsVUFBSUQsOEJBQThCLENBQWxDLEVBQXFDO0FBQ25DLFlBQU1FLGFBQWFKLHFDQUFuQjtBQUFBLFlBQ01LLGNBQWMsQ0FDWkQsVUFEWSxDQURwQjtBQUFBLFlBSU1FLGFBQWEsSUFBSXRDLElBQUosQ0FBU3FDLFdBQVQsQ0FKbkI7O0FBTUFSLG9CQUFZVSxJQUFaLENBQWlCRCxVQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBT1QsV0FBUDtBQUNELEdBbEJhLEVBa0JYLEVBbEJXLENBRHBCO0FBQUEsTUFvQk1XLG9CQUFvQlgsWUFBWVksTUFwQnRDOztBQXNCQSxNQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekJwQyxZQUFReUIsV0FBUjtBQUNEOztBQUVELFNBQU96QixLQUFQO0FBQ0Q7O0FBRUQsU0FBU1EsS0FBVCxDQUFlOEIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImN5Y2xpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIEN5Y2xpY1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgZ2V0UnVsZXNQcm9kdWN0aW9uTmFtZXMoKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZXNQcm9kdWN0aW9uTmFtZXMgPSBydWxlcy5tYXAoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVBhcnRzID0gcnVsZS5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgICAgcnVsZUZpcnN0UGFydCA9IGZpcnN0KHJ1bGVQYXJ0cyksXG4gICAgICAgICAgICAgICAgICBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgPSBydWxlRmlyc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSA9IHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydC5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgcnVsZVByb2R1Y3Rpb25OYW1lID0gcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWU7IC8vL1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZVByb2R1Y3Rpb25OYW1lO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBydWxlc1Byb2R1Y3Rpb25OYW1lcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBsZXQgY3ljbGljUHJvZHVjdGlvbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pO1xuICAgIFxuICAgIGlmIChydWxlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb25Ob2RlO1xuXG4gICAgICBjeWNsaWNQcm9kdWN0aW9uID0gbmV3IEN5Y2xpY1Byb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY3ljbGljUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN5Y2xpY1Byb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBsZXQgcnVsZXMgPSBudWxsO1xuICBcbiAgY29uc3QgcHJvZHVjdGlvblJ1bGVzID0gcHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICBjeWNsaWNSdWxlcyA9IHByb2R1Y3Rpb25SdWxlcy5yZWR1Y2UoZnVuY3Rpb24oY3ljbGljUnVsZXMsIHByb2R1Y3Rpb25SdWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHByb2R1Y3Rpb25SdWxlLmdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0KCk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHByb2R1Y3Rpb25SdWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25SdWxlUGFydHNMZW5ndGggPSBwcm9kdWN0aW9uUnVsZS5nZXRQYXJ0c0xlbmd0aCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJvZHVjdGlvblJ1bGVQYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBjb25zdCBjeWNsaWNQYXJ0ID0gcHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgICAgICAgICAgY3ljbGljUGFydHMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgY3ljbGljUGFydFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjeWNsaWNSdWxlID0gbmV3IFJ1bGUoY3ljbGljUGFydHMpO1xuXG4gICAgICAgICAgICAgIGN5Y2xpY1J1bGVzLnB1c2goY3ljbGljUnVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBjeWNsaWNSdWxlcztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBjeWNsaWNSdWxlc0xlbmd0aCA9IGN5Y2xpY1J1bGVzLmxlbmd0aDtcbiAgXG4gIGlmIChjeWNsaWNSdWxlc0xlbmd0aCA+IDApIHtcbiAgICBydWxlcyA9IGN5Y2xpY1J1bGVzO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==