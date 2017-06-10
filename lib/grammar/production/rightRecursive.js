'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    Production = require('../../common/production'),
    EpsilonPart = require('../../common/part/epsilon'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    ProductionNamePart = require('../../common/part/productionName');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vcmlnaHRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uIiwiRXBzaWxvblBhcnQiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwibmFtZSIsIm5vV2hpdGVzcGFjZSIsInByb2R1Y3Rpb25OYW1lUGFydCIsInJ1bGVzIiwicnVsZXNGcm9tUHJvZHVjdGlvbiIsIk5vZGUiLCJyaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwicmlnaHRSZWN1cnNpdmVSdWxlcyIsInJpZ2h0UmVjdXJzaXZlUnVsZXNGcm9tUHJvZHVjdGlvbiIsImVwc2lsb25QYXJ0IiwiZXBzaWxvblBhcnRzIiwiZXBzaWxvblBhcnRSdWxlIiwiY29uY2F0IiwicHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlcyIsImdldExlZnRSZWN1cnNpdmVSdWxlcyIsIm1hcCIsInByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZSIsInByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZUFsbEJ1dEZpcnN0UGFydHMiLCJnZXRBbGxCdXRGaXJzdFBhcnRzIiwicHJvZHVjdGlvbk5hbWVQYXJ0RnJvbVByb2R1Y3Rpb24iLCJyaWdodFJlY3Vyc2l2ZVJ1bGVQYXJ0cyIsInJpZ2h0UmVjdXJzaXZlUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLG1CQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLHlCQUFSLENBRG5CO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSwyQkFBUixDQUZwQjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSwrQkFBUixDQUh4QjtBQUFBLElBSU1JLHFCQUFxQkosUUFBUSxrQ0FBUixDQUozQjs7SUFNTUssd0I7Ozs7Ozs7Ozs7O3FEQUNvQ0MsVSxFQUFZO0FBQ2xELFVBQU1DLGlCQUFpQkQsV0FBV0UsT0FBWCxFQUF2QjtBQUFBLFVBQ01DLE9BQU9GLGNBRGI7QUFBQSxVQUM2QjtBQUN2QkcscUJBQWUsS0FGckI7QUFBQSxVQUU0QjtBQUN0QkMsMkJBQXFCLElBQUlQLGtCQUFKLENBQXVCSyxJQUF2QixFQUE2QkMsWUFBN0IsQ0FIM0I7O0FBS0EsYUFBT0Msa0JBQVA7QUFDRDs7O21DQUVxQkwsVSxFQUFZO0FBQ2hDLFVBQU1DLGlCQUFpQkQsV0FBV0UsT0FBWCxFQUF2QjtBQUFBLFVBQ01DLE9BQU9GLGNBRGI7QUFBQSxVQUM2QjtBQUN2QkssY0FBUUMsb0JBQW9CUCxVQUFwQixDQUZkO0FBQUEsVUFHTVEsT0FBT1gsZUFIYjtBQUFBLFVBRzhCO0FBQ3hCWSxpQ0FBMkIsSUFBSWQsVUFBSixDQUFlUSxJQUFmLEVBQXFCRyxLQUFyQixFQUE0QkUsSUFBNUIsQ0FKakM7O0FBTUEsYUFBT0Msd0JBQVA7QUFDRDs7OztFQWxCb0NkLFU7O0FBcUJ2Q2UsT0FBT0MsT0FBUCxHQUFpQlosd0JBQWpCOztBQUVBLFNBQVNRLG1CQUFULENBQTZCUCxVQUE3QixFQUF5QztBQUN2QyxNQUFNWSxzQkFBc0JDLGtDQUFrQ2IsVUFBbEMsQ0FBNUI7QUFBQSxNQUNNYyxjQUFjLElBQUlsQixXQUFKLEVBRHBCO0FBQUEsTUFFTW1CLGVBQWUsQ0FDYkQsV0FEYSxDQUZyQjtBQUFBLE1BS01FLGtCQUFrQixJQUFJdkIsSUFBSixDQUFTc0IsWUFBVCxDQUx4QjtBQUFBLE1BTU1ULFFBQVEsR0FBR1csTUFBSCxDQUFVTCxtQkFBVixFQUErQkssTUFBL0IsQ0FBc0NELGVBQXRDLENBTmQ7O0FBUUEsU0FBT1YsS0FBUDtBQUNEOztBQUVELFNBQVNPLGlDQUFULENBQTJDYixVQUEzQyxFQUF1RDtBQUNyRCxNQUFNa0IsK0JBQStCbEIsV0FBV21CLHFCQUFYLEVBQXJDO0FBQUEsTUFDTVAsc0JBQXNCTSw2QkFBNkJFLEdBQTdCLENBQWlDLFVBQVNDLDJCQUFULEVBQXNDO0FBQzNGLFFBQU1DLDhDQUE4Q0QsNEJBQTRCRSxtQkFBNUIsRUFBcEQ7QUFBQSxRQUNNbEIscUJBQXFCTix5QkFBeUJ5QixnQ0FBekIsQ0FBMER4QixVQUExRCxDQUQzQjtBQUFBLFFBRU15QiwwQkFBMEIsR0FBR1IsTUFBSCxDQUFVSywyQ0FBVixFQUF1REwsTUFBdkQsQ0FBOERaLGtCQUE5RCxDQUZoQztBQUFBLFFBR01xQixxQkFBcUIsSUFBSWpDLElBQUosQ0FBU2dDLHVCQUFULENBSDNCOztBQUtBLFdBQU9DLGtCQUFQO0FBQ0QsR0FQcUIsQ0FENUI7O0FBVUEsU0FBT2QsbUJBQVA7QUFDRCIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIEVwc2lsb25QYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvZXBzaWxvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgcHJvZHVjdGlvbk5hbWVQYXJ0RnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChuYW1lLCBub1doaXRlc3BhY2UpO1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHJpZ2h0UmVjdXJzaXZlUnVsZXMgPSByaWdodFJlY3Vyc2l2ZVJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgIGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgIGVwc2lsb25QYXJ0cyA9IFtcbiAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICBdLFxuICAgICAgICBlcHNpbG9uUGFydFJ1bGUgPSBuZXcgUnVsZShlcHNpbG9uUGFydHMpLFxuICAgICAgICBydWxlcyA9IFtdLmNvbmNhdChyaWdodFJlY3Vyc2l2ZVJ1bGVzKS5jb25jYXQoZXBzaWxvblBhcnRSdWxlKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0UmVjdXJzaXZlUnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZXMgPSBwcm9kdWN0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlcygpLFxuICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVzID0gcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlcy5tYXAoZnVuY3Rpb24ocHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlQWxsQnV0Rmlyc3RQYXJ0cyA9IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZS5nZXRBbGxCdXRGaXJzdFBhcnRzKCksXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uLnByb2R1Y3Rpb25OYW1lUGFydEZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZVBhcnRzID0gW10uY29uY2F0KHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZUFsbEJ1dEZpcnN0UGFydHMpLmNvbmNhdChwcm9kdWN0aW9uTmFtZVBhcnQpLFxuICAgICAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSdWxlKHJpZ2h0UmVjdXJzaXZlUnVsZVBhcnRzKTtcblxuICAgICAgICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGVzO1xufVxuIl19