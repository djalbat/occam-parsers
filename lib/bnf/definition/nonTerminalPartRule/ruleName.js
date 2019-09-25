'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    OptionalPartPart = require('../../part/nonTerminal/optionalPart');

var RuleNameRuleName = ruleNames.RuleNameRuleName,
    LookAheadModifierRuleName = ruleNames.LookAheadModifierRuleName;

var RuleNameNonTerminalPartRuleDefinition = function (_Definition) {
  _inherits(RuleNameNonTerminalPartRuleDefinition, _Definition);

  function RuleNameNonTerminalPartRuleDefinition() {
    _classCallCheck(this, RuleNameNonTerminalPartRuleDefinition);

    var ruleNameRuleName = RuleNameRuleName,
        lookAheadModifierRuleName = LookAheadModifierRuleName,
        ruleNameRuleNamePart = new RuleNamePart(ruleNameRuleName),
        lookAheadModifierRuleNamePart = new RuleNamePart(lookAheadModifierRuleName),
        optionalLookAheadRuleNamePartPart = new OptionalPartPart(lookAheadModifierRuleNamePart),
        parts = [ruleNameRuleNamePart, optionalLookAheadRuleNamePartPart];

    return _possibleConstructorReturn(this, (RuleNameNonTerminalPartRuleDefinition.__proto__ || Object.getPrototypeOf(RuleNameNonTerminalPartRuleDefinition)).call(this, parts));
  }

  return RuleNameNonTerminalPartRuleDefinition;
}(Definition);

module.exports = RuleNameNonTerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ub25UZXJtaW5hbFBhcnRSdWxlL3J1bGVOYW1lLmpzIl0sIm5hbWVzIjpbInJ1bGVOYW1lcyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIlJ1bGVOYW1lUnVsZU5hbWUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsInJ1bGVOYW1lUnVsZU5hbWUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCIsIm9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsa0JBQVIsQ0FEbkI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGlDQUFSLENBRnJCO0FBQUEsSUFHTUcsbUJBQW1CSCxRQUFRLHFDQUFSLENBSHpCOztJQUtRSSxnQixHQUFnREwsUyxDQUFoREssZ0I7SUFBa0JDLHlCLEdBQThCTixTLENBQTlCTSx5Qjs7SUFFcEJDLHFDOzs7QUFDSixtREFBYztBQUFBOztBQUNaLFFBQU1DLG1CQUFtQkgsZ0JBQXpCO0FBQUEsUUFDTUksNEJBQTRCSCx5QkFEbEM7QUFBQSxRQUVNSSx1QkFBdUIsSUFBSVAsWUFBSixDQUFpQkssZ0JBQWpCLENBRjdCO0FBQUEsUUFHTUcsZ0NBQWdDLElBQUlSLFlBQUosQ0FBaUJNLHlCQUFqQixDQUh0QztBQUFBLFFBSU1HLG9DQUFvQyxJQUFJUixnQkFBSixDQUFxQk8sNkJBQXJCLENBSjFDO0FBQUEsUUFLTUUsUUFBUSxDQUNOSCxvQkFETSxFQUVORSxpQ0FGTSxDQUxkOztBQURZLHlLQVdOQyxLQVhNO0FBWWI7OztFQWJpRFgsVTs7QUFnQnBEWSxPQUFPQyxPQUFQLEdBQWlCUixxQ0FBakIiLCJmaWxlIjoicnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uLy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydCcpO1xuXG5jb25zdCB7IFJ1bGVOYW1lUnVsZU5hbWUsIExvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBydWxlTmFtZVJ1bGVOYW1lID0gUnVsZU5hbWVSdWxlTmFtZSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lID0gTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWVSdWxlTmFtZSksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIG9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxMb29rQWhlYWRSdWxlTmFtZVBhcnRQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb247XG4iXX0=