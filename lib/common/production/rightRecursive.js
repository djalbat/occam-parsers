'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    Production = require('../production'),
    EpsilonPart = require('../part/epsilon'),
    NonTerminalNode = require('../node/nonTerminal'),
    ProductionNamePart = require('../part/productionName');

var RightRecursiveProduction = function (_Production) {
  _inherits(RightRecursiveProduction, _Production);

  function RightRecursiveProduction() {
    _classCallCheck(this, RightRecursiveProduction);

    return _possibleConstructorReturn(this, (RightRecursiveProduction.__proto__ || Object.getPrototypeOf(RightRecursiveProduction)).apply(this, arguments));
  }

  _createClass(RightRecursiveProduction, null, [{
    key: 'productionNamePartFromProduction',
    value: function productionNamePartFromProduction(production) {
      var name = nameFromProduction(production),
          noWhitespace = false,
          ///
      productionNamePart = new ProductionNamePart(name, noWhitespace);

      return productionNamePart;
    }
  }, {
    key: 'fromProduction',
    value: function fromProduction(production) {
      var productionName = production.getName(),
          name = productionName,
          ///
      rules = rulesFromProduction(production),
          Node = NonTerminalNode,
          ///
      rightRecursiveProduction = new Production(name, rules, Node);

      return rightRecursiveProduction;
    }
  }]);

  return RightRecursiveProduction;
}(Production);

module.exports = RightRecursiveProduction;

function rulesFromProduction(production) {
  var rightRecursiveRules = rightRecursiveRulesFromProduction(production),
      epsilonPart = new EpsilonPart(),
      epsilonParts = [epsilonPart],
      epsilonPartRule = new Rule(epsilonParts),
      rules = [].concat(rightRecursiveRules).concat(epsilonPartRule);

  return rules;
}

function rightRecursiveRulesFromProduction(production) {
  var productionLeftRecursiveRules = production.getLeftRecursiveRules(),
      rightRecursiveRules = productionLeftRecursiveRules.map(function (productionLeftRecursiveRule) {
    var productionLeftRecursiveRuleAllButFirstParts = productionLeftRecursiveRule.getAllButFirstParts(),
        productionNamePart = RightRecursiveProduction.productionNamePartFromProduction(production),
        rightRecursiveRuleParts = [].concat(productionLeftRecursiveRuleAllButFirstParts).concat(productionNamePart),
        rightRecursiveRule = new Rule(rightRecursiveRuleParts);

    return rightRecursiveRule;
  });

  return rightRecursiveRules;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi9yaWdodFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJFcHNpbG9uUGFydCIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiIsInByb2R1Y3Rpb24iLCJuYW1lIiwibmFtZUZyb21Qcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlIiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicnVsZXMiLCJydWxlc0Zyb21Qcm9kdWN0aW9uIiwiTm9kZSIsInJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVzIiwicmlnaHRSZWN1cnNpdmVSdWxlc0Zyb21Qcm9kdWN0aW9uIiwiZXBzaWxvblBhcnQiLCJlcHNpbG9uUGFydHMiLCJlcHNpbG9uUGFydFJ1bGUiLCJjb25jYXQiLCJwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzIiwibWFwIiwicHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlIiwicHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlQWxsQnV0Rmlyc3RQYXJ0cyIsImdldEFsbEJ1dEZpcnN0UGFydHMiLCJwcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbiIsInJpZ2h0UmVjdXJzaXZlUnVsZVBhcnRzIiwicmlnaHRSZWN1cnNpdmVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxpQkFBUixDQUZwQjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxxQkFBUixDQUh4QjtBQUFBLElBSU1JLHFCQUFxQkosUUFBUSx3QkFBUixDQUozQjs7SUFNTUssd0I7Ozs7Ozs7Ozs7O3FEQUNvQ0MsVSxFQUFZO0FBQ2xELFVBQU1DLE9BQU9DLG1CQUFtQkYsVUFBbkIsQ0FBYjtBQUFBLFVBQ01HLGVBQWUsS0FEckI7QUFBQSxVQUM0QjtBQUN0QkMsMkJBQXFCLElBQUlOLGtCQUFKLENBQXVCRyxJQUF2QixFQUE2QkUsWUFBN0IsQ0FGM0I7O0FBSUEsYUFBT0Msa0JBQVA7QUFDRDs7O21DQUVxQkosVSxFQUFZO0FBQ2hDLFVBQU1LLGlCQUFpQkwsV0FBV00sT0FBWCxFQUF2QjtBQUFBLFVBQ01MLE9BQU9JLGNBRGI7QUFBQSxVQUM2QjtBQUN2QkUsY0FBUUMsb0JBQW9CUixVQUFwQixDQUZkO0FBQUEsVUFHTVMsT0FBT1osZUFIYjtBQUFBLFVBRzhCO0FBQ3hCYSxpQ0FBMkIsSUFBSWYsVUFBSixDQUFlTSxJQUFmLEVBQXFCTSxLQUFyQixFQUE0QkUsSUFBNUIsQ0FKakM7O0FBTUEsYUFBT0Msd0JBQVA7QUFDRDs7OztFQWpCb0NmLFU7O0FBb0J2Q2dCLE9BQU9DLE9BQVAsR0FBaUJiLHdCQUFqQjs7QUFFQSxTQUFTUyxtQkFBVCxDQUE2QlIsVUFBN0IsRUFBeUM7QUFDdkMsTUFBTWEsc0JBQXNCQyxrQ0FBa0NkLFVBQWxDLENBQTVCO0FBQUEsTUFDTWUsY0FBYyxJQUFJbkIsV0FBSixFQURwQjtBQUFBLE1BRU1vQixlQUFlLENBQ2JELFdBRGEsQ0FGckI7QUFBQSxNQUtNRSxrQkFBa0IsSUFBSXhCLElBQUosQ0FBU3VCLFlBQVQsQ0FMeEI7QUFBQSxNQU1NVCxRQUFRLEdBQUdXLE1BQUgsQ0FBVUwsbUJBQVYsRUFBK0JLLE1BQS9CLENBQXNDRCxlQUF0QyxDQU5kOztBQVFBLFNBQU9WLEtBQVA7QUFDRDs7QUFFRCxTQUFTTyxpQ0FBVCxDQUEyQ2QsVUFBM0MsRUFBdUQ7QUFDckQsTUFBTW1CLCtCQUErQm5CLFdBQVdvQixxQkFBWCxFQUFyQztBQUFBLE1BQ01QLHNCQUFzQk0sNkJBQTZCRSxHQUE3QixDQUFpQyxVQUFTQywyQkFBVCxFQUFzQztBQUMzRixRQUFNQyw4Q0FBOENELDRCQUE0QkUsbUJBQTVCLEVBQXBEO0FBQUEsUUFDTXBCLHFCQUFxQkwseUJBQXlCMEIsZ0NBQXpCLENBQTBEekIsVUFBMUQsQ0FEM0I7QUFBQSxRQUVNMEIsMEJBQTBCLEdBQUdSLE1BQUgsQ0FBVUssMkNBQVYsRUFBdURMLE1BQXZELENBQThEZCxrQkFBOUQsQ0FGaEM7QUFBQSxRQUdNdUIscUJBQXFCLElBQUlsQyxJQUFKLENBQVNpQyx1QkFBVCxDQUgzQjs7QUFLQSxXQUFPQyxrQkFBUDtBQUNELEdBUHFCLENBRDVCOztBQVVBLFNBQU9kLG1CQUFQO0FBQ0QiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgRXBzaWxvblBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L2Vwc2lsb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBwcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChuYW1lLCBub1doaXRlc3BhY2UpO1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHJpZ2h0UmVjdXJzaXZlUnVsZXMgPSByaWdodFJlY3Vyc2l2ZVJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgIGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgIGVwc2lsb25QYXJ0cyA9IFtcbiAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICBdLFxuICAgICAgICBlcHNpbG9uUGFydFJ1bGUgPSBuZXcgUnVsZShlcHNpbG9uUGFydHMpLFxuICAgICAgICBydWxlcyA9IFtdLmNvbmNhdChyaWdodFJlY3Vyc2l2ZVJ1bGVzKS5jb25jYXQoZXBzaWxvblBhcnRSdWxlKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0UmVjdXJzaXZlUnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZXMgPSBwcm9kdWN0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlcygpLFxuICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVzID0gcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlcy5tYXAoZnVuY3Rpb24ocHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlQWxsQnV0Rmlyc3RQYXJ0cyA9IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZS5nZXRBbGxCdXRGaXJzdFBhcnRzKCksXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uLnByb2R1Y3Rpb25OYW1lUGFydEZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZVBhcnRzID0gW10uY29uY2F0KHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZUFsbEJ1dEZpcnN0UGFydHMpLmNvbmNhdChwcm9kdWN0aW9uTmFtZVBhcnQpLFxuICAgICAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSdWxlKHJpZ2h0UmVjdXJzaXZlUnVsZVBhcnRzKTtcblxuICAgICAgICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGVzO1xufVxuIl19