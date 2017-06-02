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
      var name = nameFromProduction(production),
          rules = rulesFromProduction(production),
          Node = NonTerminalNode,
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

function nameFromProduction(production) {
  var productionName = production.getName(),
      name = productionName + '\'';

  return name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi9yaWdodFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJFcHNpbG9uUGFydCIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiIsInByb2R1Y3Rpb24iLCJuYW1lIiwibmFtZUZyb21Qcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlIiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicnVsZXMiLCJydWxlc0Zyb21Qcm9kdWN0aW9uIiwiTm9kZSIsInJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVzIiwicmlnaHRSZWN1cnNpdmVSdWxlc0Zyb21Qcm9kdWN0aW9uIiwiZXBzaWxvblBhcnQiLCJlcHNpbG9uUGFydHMiLCJlcHNpbG9uUGFydFJ1bGUiLCJjb25jYXQiLCJwcm9kdWN0aW9uTmFtZSIsImdldE5hbWUiLCJwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzIiwibWFwIiwicHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlIiwicHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlQWxsQnV0Rmlyc3RQYXJ0cyIsImdldEFsbEJ1dEZpcnN0UGFydHMiLCJwcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbiIsInJpZ2h0UmVjdXJzaXZlUnVsZVBhcnRzIiwicmlnaHRSZWN1cnNpdmVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxpQkFBUixDQUZwQjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxxQkFBUixDQUh4QjtBQUFBLElBSU1JLHFCQUFxQkosUUFBUSx3QkFBUixDQUozQjs7SUFNTUssd0I7Ozs7Ozs7Ozs7O3FEQUNvQ0MsVSxFQUFZO0FBQ2xELFVBQU1DLE9BQU9DLG1CQUFtQkYsVUFBbkIsQ0FBYjtBQUFBLFVBQ01HLGVBQWUsS0FEckI7QUFBQSxVQUM0QjtBQUN0QkMsMkJBQXFCLElBQUlOLGtCQUFKLENBQXVCRyxJQUF2QixFQUE2QkUsWUFBN0IsQ0FGM0I7O0FBSUEsYUFBT0Msa0JBQVA7QUFDRDs7O21DQUVxQkosVSxFQUFZO0FBQ2hDLFVBQU1DLE9BQU9DLG1CQUFtQkYsVUFBbkIsQ0FBYjtBQUFBLFVBQ01LLFFBQVFDLG9CQUFvQk4sVUFBcEIsQ0FEZDtBQUFBLFVBRU1PLE9BQU9WLGVBRmI7QUFBQSxVQUdNVywyQkFBMkIsSUFBSWIsVUFBSixDQUFlTSxJQUFmLEVBQXFCSSxLQUFyQixFQUE0QkUsSUFBNUIsQ0FIakM7O0FBS0EsYUFBT0Msd0JBQVA7QUFDRDs7OztFQWhCb0NiLFU7O0FBbUJ2Q2MsT0FBT0MsT0FBUCxHQUFpQlgsd0JBQWpCOztBQUVBLFNBQVNPLG1CQUFULENBQTZCTixVQUE3QixFQUF5QztBQUN2QyxNQUFNVyxzQkFBc0JDLGtDQUFrQ1osVUFBbEMsQ0FBNUI7QUFBQSxNQUNNYSxjQUFjLElBQUlqQixXQUFKLEVBRHBCO0FBQUEsTUFFTWtCLGVBQWUsQ0FDYkQsV0FEYSxDQUZyQjtBQUFBLE1BS01FLGtCQUFrQixJQUFJdEIsSUFBSixDQUFTcUIsWUFBVCxDQUx4QjtBQUFBLE1BTU1ULFFBQVEsR0FBR1csTUFBSCxDQUFVTCxtQkFBVixFQUErQkssTUFBL0IsQ0FBc0NELGVBQXRDLENBTmQ7O0FBUUEsU0FBT1YsS0FBUDtBQUNEOztBQUVELFNBQVNILGtCQUFULENBQTRCRixVQUE1QixFQUF3QztBQUN0QyxNQUFNaUIsaUJBQWlCakIsV0FBV2tCLE9BQVgsRUFBdkI7QUFBQSxNQUNNakIsT0FBVWdCLGNBQVYsT0FETjs7QUFHQSxTQUFPaEIsSUFBUDtBQUNEOztBQUVELFNBQVNXLGlDQUFULENBQTJDWixVQUEzQyxFQUF1RDtBQUNyRCxNQUFNbUIsK0JBQStCbkIsV0FBV29CLHFCQUFYLEVBQXJDO0FBQUEsTUFDTVQsc0JBQXNCUSw2QkFBNkJFLEdBQTdCLENBQWlDLFVBQVNDLDJCQUFULEVBQXNDO0FBQzNGLFFBQU1DLDhDQUE4Q0QsNEJBQTRCRSxtQkFBNUIsRUFBcEQ7QUFBQSxRQUNNcEIscUJBQXFCTCx5QkFBeUIwQixnQ0FBekIsQ0FBMER6QixVQUExRCxDQUQzQjtBQUFBLFFBRU0wQiwwQkFBMEIsR0FBR1YsTUFBSCxDQUFVTywyQ0FBVixFQUF1RFAsTUFBdkQsQ0FBOERaLGtCQUE5RCxDQUZoQztBQUFBLFFBR011QixxQkFBcUIsSUFBSWxDLElBQUosQ0FBU2lDLHVCQUFULENBSDNCOztBQUtBLFdBQU9DLGtCQUFQO0FBQ0QsR0FQcUIsQ0FENUI7O0FBVUEsU0FBT2hCLG1CQUFQO0FBQ0QiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgRXBzaWxvblBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L2Vwc2lsb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBwcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChuYW1lLCBub1doaXRlc3BhY2UpO1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHJpZ2h0UmVjdXJzaXZlUnVsZXMgPSByaWdodFJlY3Vyc2l2ZVJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgIGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgIGVwc2lsb25QYXJ0cyA9IFtcbiAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICBdLFxuICAgICAgICBlcHNpbG9uUGFydFJ1bGUgPSBuZXcgUnVsZShlcHNpbG9uUGFydHMpLFxuICAgICAgICBydWxlcyA9IFtdLmNvbmNhdChyaWdodFJlY3Vyc2l2ZVJ1bGVzKS5jb25jYXQoZXBzaWxvblBhcnRSdWxlKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgIG5hbWUgPSBgJHtwcm9kdWN0aW9uTmFtZX0nYDtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gcmlnaHRSZWN1cnNpdmVSdWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgY29uc3QgcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlcyA9IHByb2R1Y3Rpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzKCksXG4gICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZXMgPSBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVzLm1hcChmdW5jdGlvbihwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVBbGxCdXRGaXJzdFBhcnRzID0gcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlLmdldEFsbEJ1dEZpcnN0UGFydHMoKSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24ucHJvZHVjdGlvbk5hbWVQYXJ0RnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlUGFydHMgPSBbXS5jb25jYXQocHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlQWxsQnV0Rmlyc3RQYXJ0cykuY29uY2F0KHByb2R1Y3Rpb25OYW1lUGFydCksXG4gICAgICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlID0gbmV3IFJ1bGUocmlnaHRSZWN1cnNpdmVSdWxlUGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUnVsZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUnVsZXM7XG59XG4iXX0=