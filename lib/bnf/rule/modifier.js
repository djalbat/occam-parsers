'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    PartNode = require('../node/part'),
    ruleNames = require('../ruleNames'),
    RuleNameDefinition = require('../definition/ruleName');

var ModifierRuleName = ruleNames.ModifierRuleName,
    OptionalModifierRuleName = ruleNames.OptionalModifierRuleName,
    OneOrMoreModifierRuleName = ruleNames.OneOrMoreModifierRuleName,
    ZeroOrMoreModifierRuleName = ruleNames.ZeroOrMoreModifierRuleName;

var ModifierRule = function (_Rule) {
  _inherits(ModifierRule, _Rule);

  function ModifierRule() {
    _classCallCheck(this, ModifierRule);

    var name = ModifierRuleName,
        optionalModifierRuleName = OptionalModifierRuleName,
        oneOrMoreModifierRuleName = OneOrMoreModifierRuleName,
        zeroOrMoreModifierRuleName = ZeroOrMoreModifierRuleName,
        optionalModifierRuleNameDefinition = new RuleNameDefinition(optionalModifierRuleName),
        oneOrMoreModifierRuleNameDefinition = new RuleNameDefinition(oneOrMoreModifierRuleName),
        zeroOrMoreModifierRuleNameDefinition = new RuleNameDefinition(zeroOrMoreModifierRuleName),
        definitions = [optionalModifierRuleNameDefinition, oneOrMoreModifierRuleNameDefinition, zeroOrMoreModifierRuleNameDefinition],
        Node = PartNode;

    return _possibleConstructorReturn(this, (ModifierRule.__proto__ || Object.getPrototypeOf(ModifierRule)).call(this, name, definitions, Node));
  }

  return ModifierRule;
}(Rule);

module.exports = ModifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9tb2RpZmllci5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlBhcnROb2RlIiwicnVsZU5hbWVzIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiTW9kaWZpZXJSdWxlTmFtZSIsIk9wdGlvbmFsTW9kaWZpZXJSdWxlTmFtZSIsIk9uZU9yTW9yZU1vZGlmaWVyUnVsZU5hbWUiLCJaZXJvT3JNb3JlTW9kaWZpZXJSdWxlTmFtZSIsIk1vZGlmaWVyUnVsZSIsIm5hbWUiLCJvcHRpb25hbE1vZGlmaWVyUnVsZU5hbWUiLCJvbmVPck1vcmVNb2RpZmllclJ1bGVOYW1lIiwiemVyb09yTW9yZU1vZGlmaWVyUnVsZU5hbWUiLCJvcHRpb25hbE1vZGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uIiwib25lT3JNb3JlTW9kaWZpZXJSdWxlTmFtZURlZmluaXRpb24iLCJ6ZXJvT3JNb3JlTW9kaWZpZXJSdWxlTmFtZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLFdBQVdELFFBQVEsY0FBUixDQURqQjtBQUFBLElBRU1FLFlBQVlGLFFBQVEsY0FBUixDQUZsQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSx3QkFBUixDQUgzQjs7SUFLUUksZ0IsR0FBc0dGLFMsQ0FBdEdFLGdCO0lBQWtCQyx3QixHQUFvRkgsUyxDQUFwRkcsd0I7SUFBMEJDLHlCLEdBQTBESixTLENBQTFESSx5QjtJQUEyQkMsMEIsR0FBK0JMLFMsQ0FBL0JLLDBCOztJQUV6RUMsWTs7O0FBQ0osMEJBQWM7QUFBQTs7QUFDWixRQUFNQyxPQUFPTCxnQkFBYjtBQUFBLFFBQ01NLDJCQUEyQkwsd0JBRGpDO0FBQUEsUUFFTU0sNEJBQTRCTCx5QkFGbEM7QUFBQSxRQUdNTSw2QkFBNkJMLDBCQUhuQztBQUFBLFFBSU1NLHFDQUFxQyxJQUFJVixrQkFBSixDQUF1Qk8sd0JBQXZCLENBSjNDO0FBQUEsUUFLTUksc0NBQXNDLElBQUlYLGtCQUFKLENBQXVCUSx5QkFBdkIsQ0FMNUM7QUFBQSxRQU1NSSx1Q0FBdUMsSUFBSVosa0JBQUosQ0FBdUJTLDBCQUF2QixDQU43QztBQUFBLFFBT01JLGNBQWMsQ0FDWkgsa0NBRFksRUFFWkMsbUNBRlksRUFHWkMsb0NBSFksQ0FQcEI7QUFBQSxRQVlNRSxPQUFPaEIsUUFaYjs7QUFEWSx1SEFlTlEsSUFmTSxFQWVBTyxXQWZBLEVBZWFDLElBZmI7QUFnQmI7OztFQWpCd0JsQixJOztBQW9CM0JtQixPQUFPQyxPQUFQLEdBQWlCWCxZQUFqQiIsImZpbGUiOiJtb2RpZmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFBhcnROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9wYXJ0JyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcnVsZU5hbWUnKTtcblxuY29uc3QgeyBNb2RpZmllclJ1bGVOYW1lLCBPcHRpb25hbE1vZGlmaWVyUnVsZU5hbWUsIE9uZU9yTW9yZU1vZGlmaWVyUnVsZU5hbWUsIFplcm9Pck1vcmVNb2RpZmllclJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIE1vZGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gTW9kaWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBvcHRpb25hbE1vZGlmaWVyUnVsZU5hbWUgPSBPcHRpb25hbE1vZGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb25lT3JNb3JlTW9kaWZpZXJSdWxlTmFtZSA9IE9uZU9yTW9yZU1vZGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgemVyb09yTW9yZU1vZGlmaWVyUnVsZU5hbWUgPSBaZXJvT3JNb3JlTW9kaWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBvcHRpb25hbE1vZGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihvcHRpb25hbE1vZGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIG9uZU9yTW9yZU1vZGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihvbmVPck1vcmVNb2RpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlTW9kaWZpZXJSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHplcm9Pck1vcmVNb2RpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsTW9kaWZpZXJSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBvbmVPck1vcmVNb2RpZmllclJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHplcm9Pck1vcmVNb2RpZmllclJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFBhcnROb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kaWZpZXJSdWxlO1xuIl19