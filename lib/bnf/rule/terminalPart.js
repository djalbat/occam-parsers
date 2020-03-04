'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    TerminalPartNode = require('../node/part/terminal'),
    RuleNameDefinition = require('../definition/ruleName');

var TerminalPartRuleName = ruleNames.TerminalPartRuleName,
    RegularExpressionRuleName = ruleNames.RegularExpressionRuleName,
    SignificantTokenTypeRuleName = ruleNames.SignificantTokenTypeRuleName,
    TerminalSymbolRuleName = ruleNames.TerminalSymbolRuleName,
    EndOfLineRuleName = ruleNames.EndOfLineRuleName,
    EpsilonRuleName = ruleNames.EpsilonRuleName,
    WildcardRuleName = ruleNames.WildcardRuleName;

var TerminalPartRule = /*#__PURE__*/function (_Rule) {
  _inherits(TerminalPartRule, _Rule);

  function TerminalPartRule() {
    _classCallCheck(this, TerminalPartRule);

    var name = TerminalPartRuleName,
        epsilonRuleName = EpsilonRuleName,
        wildcardRuleName = WildcardRuleName,
        endOfLineRuleName = EndOfLineRuleName,
        terminalSymbolRuleName = TerminalSymbolRuleName,
        regularExpressionRuleName = RegularExpressionRuleName,
        significantTokenTypeRuleName = SignificantTokenTypeRuleName,
        epsilonRuleNameDefinition = new RuleNameDefinition(epsilonRuleName),
        wildcardRuleNameDefinition = new RuleNameDefinition(wildcardRuleName),
        endOfLineRuleNameDefinition = new RuleNameDefinition(endOfLineRuleName),
        terminalSymbolRuleNameDefinition = new RuleNameDefinition(terminalSymbolRuleName),
        regularExpressionRuleNameDefinition = new RuleNameDefinition(regularExpressionRuleName),
        significantTokenTypeRuleNameDefinition = new RuleNameDefinition(significantTokenTypeRuleName),
        definitions = [significantTokenTypeRuleNameDefinition, regularExpressionRuleNameDefinition, terminalSymbolRuleNameDefinition, endOfLineRuleNameDefinition, epsilonRuleNameDefinition, wildcardRuleNameDefinition],
        Node = TerminalPartNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(TerminalPartRule).call(this, name, definitions, Node));
  }

  return TerminalPartRule;
}(Rule);

module.exports = TerminalPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlRlcm1pbmFsUGFydE5vZGUiLCJSdWxlTmFtZURlZmluaXRpb24iLCJUZXJtaW5hbFBhcnRSdWxlTmFtZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIiwiVGVybWluYWxTeW1ib2xSdWxlTmFtZSIsIkVuZE9mTGluZVJ1bGVOYW1lIiwiRXBzaWxvblJ1bGVOYW1lIiwiV2lsZGNhcmRSdWxlTmFtZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJuYW1lIiwiZXBzaWxvblJ1bGVOYW1lIiwid2lsZGNhcmRSdWxlTmFtZSIsImVuZE9mTGluZVJ1bGVOYW1lIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIiwiZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbiIsIndpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uIiwiZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24iLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXBCO0FBQUEsSUFDTUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUR6QjtBQUFBLElBRU1FLGdCQUFnQixHQUFHRixPQUFPLENBQUMsdUJBQUQsQ0FGaEM7QUFBQSxJQUdNRyxrQkFBa0IsR0FBR0gsT0FBTyxDQUFDLHdCQUFELENBSGxDOztJQUtRSSxvQixHQUFnS0gsUyxDQUFoS0csb0I7SUFBc0JDLHlCLEdBQTBJSixTLENBQTFJSSx5QjtJQUEyQkMsNEIsR0FBK0dMLFMsQ0FBL0dLLDRCO0lBQThCQyxzQixHQUFpRk4sUyxDQUFqRk0sc0I7SUFBd0JDLGlCLEdBQXlEUCxTLENBQXpETyxpQjtJQUFtQkMsZSxHQUFzQ1IsUyxDQUF0Q1EsZTtJQUFpQkMsZ0IsR0FBcUJULFMsQ0FBckJTLGdCOztJQUU3SUMsZ0I7OztBQUNKLDhCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHUixvQkFBYjtBQUFBLFFBQ01TLGVBQWUsR0FBR0osZUFEeEI7QUFBQSxRQUVNSyxnQkFBZ0IsR0FBR0osZ0JBRnpCO0FBQUEsUUFHTUssaUJBQWlCLEdBQUdQLGlCQUgxQjtBQUFBLFFBSU1RLHNCQUFzQixHQUFHVCxzQkFKL0I7QUFBQSxRQUtNVSx5QkFBeUIsR0FBR1oseUJBTGxDO0FBQUEsUUFNTWEsNEJBQTRCLEdBQUdaLDRCQU5yQztBQUFBLFFBT01hLHlCQUF5QixHQUFHLElBQUloQixrQkFBSixDQUF1QlUsZUFBdkIsQ0FQbEM7QUFBQSxRQVFNTywwQkFBMEIsR0FBRyxJQUFJakIsa0JBQUosQ0FBdUJXLGdCQUF2QixDQVJuQztBQUFBLFFBU01PLDJCQUEyQixHQUFHLElBQUlsQixrQkFBSixDQUF1QlksaUJBQXZCLENBVHBDO0FBQUEsUUFVTU8sZ0NBQWdDLEdBQUcsSUFBSW5CLGtCQUFKLENBQXVCYSxzQkFBdkIsQ0FWekM7QUFBQSxRQVdNTyxtQ0FBbUMsR0FBRyxJQUFJcEIsa0JBQUosQ0FBdUJjLHlCQUF2QixDQVg1QztBQUFBLFFBWU1PLHNDQUFzQyxHQUFHLElBQUlyQixrQkFBSixDQUF1QmUsNEJBQXZCLENBWi9DO0FBQUEsUUFhTU8sV0FBVyxHQUFHLENBQ1pELHNDQURZLEVBRVpELG1DQUZZLEVBR1pELGdDQUhZLEVBSVpELDJCQUpZLEVBS1pGLHlCQUxZLEVBTVpDLDBCQU5ZLENBYnBCO0FBQUEsUUFxQk1NLElBQUksR0FBR3hCLGdCQXJCYjtBQURZLHlGQXdCTlUsSUF4Qk0sRUF3QkFhLFdBeEJBLEVBd0JhQyxJQXhCYjtBQXlCYjs7O0VBMUI0QjNCLEk7O0FBNkIvQjRCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpCLGdCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgVGVybWluYWxQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcGFydC90ZXJtaW5hbCcpLFxuICAgICAgUnVsZU5hbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ydWxlTmFtZScpO1xuXG5jb25zdCB7IFRlcm1pbmFsUGFydFJ1bGVOYW1lLCBSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lLCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lLCBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLCBFbmRPZkxpbmVSdWxlTmFtZSwgRXBzaWxvblJ1bGVOYW1lLCBXaWxkY2FyZFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFRlcm1pbmFsUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IFRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIGVwc2lsb25SdWxlTmFtZSA9IEVwc2lsb25SdWxlTmFtZSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lID0gV2lsZGNhcmRSdWxlTmFtZSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZSA9IEVuZE9mTGluZVJ1bGVOYW1lLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUgPSBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUgPSBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lLFxuICAgICAgICAgIGVwc2lsb25SdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKGVwc2lsb25SdWxlTmFtZSksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHdpbGRjYXJkUnVsZU5hbWUpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oZW5kT2ZMaW5lUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbih0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ocmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gVGVybWluYWxQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsUGFydFJ1bGU7XG4iXX0=