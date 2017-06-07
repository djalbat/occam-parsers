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
      var productionName = production.getName(),
          name = productionName,
          ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi9yaWdodFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJFcHNpbG9uUGFydCIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiIsInByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTmFtZSIsImdldE5hbWUiLCJuYW1lIiwibm9XaGl0ZXNwYWNlIiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicnVsZXMiLCJydWxlc0Zyb21Qcm9kdWN0aW9uIiwiTm9kZSIsInJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVzIiwicmlnaHRSZWN1cnNpdmVSdWxlc0Zyb21Qcm9kdWN0aW9uIiwiZXBzaWxvblBhcnQiLCJlcHNpbG9uUGFydHMiLCJlcHNpbG9uUGFydFJ1bGUiLCJjb25jYXQiLCJwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzIiwibWFwIiwicHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlIiwicHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlQWxsQnV0Rmlyc3RQYXJ0cyIsImdldEFsbEJ1dEZpcnN0UGFydHMiLCJwcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbiIsInJpZ2h0UmVjdXJzaXZlUnVsZVBhcnRzIiwicmlnaHRSZWN1cnNpdmVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxpQkFBUixDQUZwQjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxxQkFBUixDQUh4QjtBQUFBLElBSU1JLHFCQUFxQkosUUFBUSx3QkFBUixDQUozQjs7SUFNTUssd0I7Ozs7Ozs7Ozs7O3FEQUNvQ0MsVSxFQUFZO0FBQ2xELFVBQU1DLGlCQUFpQkQsV0FBV0UsT0FBWCxFQUF2QjtBQUFBLFVBQ01DLE9BQU9GLGNBRGI7QUFBQSxVQUM2QjtBQUN2QkcscUJBQWUsS0FGckI7QUFBQSxVQUU0QjtBQUN0QkMsMkJBQXFCLElBQUlQLGtCQUFKLENBQXVCSyxJQUF2QixFQUE2QkMsWUFBN0IsQ0FIM0I7O0FBS0EsYUFBT0Msa0JBQVA7QUFDRDs7O21DQUVxQkwsVSxFQUFZO0FBQ2hDLFVBQU1DLGlCQUFpQkQsV0FBV0UsT0FBWCxFQUF2QjtBQUFBLFVBQ01DLE9BQU9GLGNBRGI7QUFBQSxVQUM2QjtBQUN2QkssY0FBUUMsb0JBQW9CUCxVQUFwQixDQUZkO0FBQUEsVUFHTVEsT0FBT1gsZUFIYjtBQUFBLFVBRzhCO0FBQ3hCWSxpQ0FBMkIsSUFBSWQsVUFBSixDQUFlUSxJQUFmLEVBQXFCRyxLQUFyQixFQUE0QkUsSUFBNUIsQ0FKakM7O0FBTUEsYUFBT0Msd0JBQVA7QUFDRDs7OztFQWxCb0NkLFU7O0FBcUJ2Q2UsT0FBT0MsT0FBUCxHQUFpQlosd0JBQWpCOztBQUVBLFNBQVNRLG1CQUFULENBQTZCUCxVQUE3QixFQUF5QztBQUN2QyxNQUFNWSxzQkFBc0JDLGtDQUFrQ2IsVUFBbEMsQ0FBNUI7QUFBQSxNQUNNYyxjQUFjLElBQUlsQixXQUFKLEVBRHBCO0FBQUEsTUFFTW1CLGVBQWUsQ0FDYkQsV0FEYSxDQUZyQjtBQUFBLE1BS01FLGtCQUFrQixJQUFJdkIsSUFBSixDQUFTc0IsWUFBVCxDQUx4QjtBQUFBLE1BTU1ULFFBQVEsR0FBR1csTUFBSCxDQUFVTCxtQkFBVixFQUErQkssTUFBL0IsQ0FBc0NELGVBQXRDLENBTmQ7O0FBUUEsU0FBT1YsS0FBUDtBQUNEOztBQUVELFNBQVNPLGlDQUFULENBQTJDYixVQUEzQyxFQUF1RDtBQUNyRCxNQUFNa0IsK0JBQStCbEIsV0FBV21CLHFCQUFYLEVBQXJDO0FBQUEsTUFDTVAsc0JBQXNCTSw2QkFBNkJFLEdBQTdCLENBQWlDLFVBQVNDLDJCQUFULEVBQXNDO0FBQzNGLFFBQU1DLDhDQUE4Q0QsNEJBQTRCRSxtQkFBNUIsRUFBcEQ7QUFBQSxRQUNNbEIscUJBQXFCTix5QkFBeUJ5QixnQ0FBekIsQ0FBMER4QixVQUExRCxDQUQzQjtBQUFBLFFBRU15QiwwQkFBMEIsR0FBR1IsTUFBSCxDQUFVSywyQ0FBVixFQUF1REwsTUFBdkQsQ0FBOERaLGtCQUE5RCxDQUZoQztBQUFBLFFBR01xQixxQkFBcUIsSUFBSWpDLElBQUosQ0FBU2dDLHVCQUFULENBSDNCOztBQUtBLFdBQU9DLGtCQUFQO0FBQ0QsR0FQcUIsQ0FENUI7O0FBVUEsU0FBT2QsbUJBQVA7QUFDRCIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBFcHNpbG9uUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvZXBzaWxvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgc3RhdGljIHByb2R1Y3Rpb25OYW1lUGFydEZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQobmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBjb25zdCByaWdodFJlY3Vyc2l2ZVJ1bGVzID0gcmlnaHRSZWN1cnNpdmVSdWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpLFxuICAgICAgICBlcHNpbG9uUGFydHMgPSBbXG4gICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgXSxcbiAgICAgICAgZXBzaWxvblBhcnRSdWxlID0gbmV3IFJ1bGUoZXBzaWxvblBhcnRzKSxcbiAgICAgICAgcnVsZXMgPSBbXS5jb25jYXQocmlnaHRSZWN1cnNpdmVSdWxlcykuY29uY2F0KGVwc2lsb25QYXJ0UnVsZSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiByaWdodFJlY3Vyc2l2ZVJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBjb25zdCBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVzID0gcHJvZHVjdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZXMoKSxcbiAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlcyA9IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZXMubWFwKGZ1bmN0aW9uKHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZUFsbEJ1dEZpcnN0UGFydHMgPSBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbi5wcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVQYXJ0cyA9IFtdLmNvbmNhdChwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVBbGxCdXRGaXJzdFBhcnRzKS5jb25jYXQocHJvZHVjdGlvbk5hbWVQYXJ0KSxcbiAgICAgICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGUgPSBuZXcgUnVsZShyaWdodFJlY3Vyc2l2ZVJ1bGVQYXJ0cyk7XG5cbiAgICAgICAgICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlcztcbn1cbiJdfQ==