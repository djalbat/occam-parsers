'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require('../rule'),
    NonTerminalPartNode = require('../node/part/nonTerminal'),
    ruleNames = require('../ruleNames'),
    RuleNameDefinition = require('../definition/ruleName'),
    RuleNameNonTerminalPartRuleDefinition = require('../definition/partRule/nonTerminal/ruleName');

var NonTerminalPartRuleName = ruleNames.NonTerminalPartRuleName,
    ChoiceOfPartsRuleName = ruleNames.ChoiceOfPartsRuleName,
    GroupOfPartsRuleName = ruleNames.GroupOfPartsRuleName;

var NonTerminalPartRule = /*#__PURE__*/function (_Rule) {
  _inherits(NonTerminalPartRule, _Rule);

  function NonTerminalPartRule() {
    _classCallCheck(this, NonTerminalPartRule);

    var name = NonTerminalPartRuleName,
        groupOfPartsRuleName = GroupOfPartsRuleName,
        choiceOfPartsRuleName = ChoiceOfPartsRuleName,
        groupOfPartsRuleNameDefinition = new RuleNameDefinition(groupOfPartsRuleName),
        choiceOfPartsRuleNameDefinition = new RuleNameDefinition(choiceOfPartsRuleName),
        ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(),
        definitions = [choiceOfPartsRuleNameDefinition, groupOfPartsRuleNameDefinition, ruleNameNonTerminalPartRuleDefinition],
        Node = NonTerminalPartNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartRule).call(this, name, definitions, Node));
  }

  return NonTerminalPartRule;
}(Rule);

module.exports = NonTerminalPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsUGFydE5vZGUiLCJydWxlTmFtZXMiLCJSdWxlTmFtZURlZmluaXRpb24iLCJSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJDaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJHcm91cE9mUGFydHNSdWxlTmFtZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJuYW1lIiwiZ3JvdXBPZlBhcnRzUnVsZU5hbWUiLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJncm91cE9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uIiwicnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01DLG1CQUFtQixHQUFHRCxPQUFPLENBQUMsMEJBQUQsQ0FEbkM7QUFBQSxJQUVNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBRnpCO0FBQUEsSUFHTUcsa0JBQWtCLEdBQUdILE9BQU8sQ0FBQyx3QkFBRCxDQUhsQztBQUFBLElBSU1JLHFDQUFxQyxHQUFHSixPQUFPLENBQUMsNkNBQUQsQ0FKckQ7O0lBTVFLLHVCLEdBQXlFSCxTLENBQXpFRyx1QjtJQUF5QkMscUIsR0FBZ0RKLFMsQ0FBaERJLHFCO0lBQXVCQyxvQixHQUF5QkwsUyxDQUF6Qkssb0I7O0lBRWxEQyxtQjs7O0FBQ0osaUNBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdKLHVCQUFiO0FBQUEsUUFDTUssb0JBQW9CLEdBQUdILG9CQUQ3QjtBQUFBLFFBRU1JLHFCQUFxQixHQUFHTCxxQkFGOUI7QUFBQSxRQUdNTSw4QkFBOEIsR0FBRyxJQUFJVCxrQkFBSixDQUF1Qk8sb0JBQXZCLENBSHZDO0FBQUEsUUFJTUcsK0JBQStCLEdBQUcsSUFBSVYsa0JBQUosQ0FBdUJRLHFCQUF2QixDQUp4QztBQUFBLFFBS01HLHFDQUFxQyxHQUFHLElBQUlWLHFDQUFKLEVBTDlDO0FBQUEsUUFNTVcsV0FBVyxHQUFHLENBQ1pGLCtCQURZLEVBRVpELDhCQUZZLEVBR1pFLHFDQUhZLENBTnBCO0FBQUEsUUFXTUUsSUFBSSxHQUFHZixtQkFYYjtBQURZLDRGQWNOUSxJQWRNLEVBY0FNLFdBZEEsRUFjYUMsSUFkYjtBQWViOzs7RUFoQitCakIsSTs7QUFtQmxDa0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixtQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBOb25UZXJtaW5hbFBhcnROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9wYXJ0L25vblRlcm1pbmFsJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcnVsZU5hbWUnKSxcbiAgICAgIFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsIENob2ljZU9mUGFydHNSdWxlTmFtZSwgR3JvdXBPZlBhcnRzUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTm9uVGVybWluYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZU5hbWUgPSBHcm91cE9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWUgPSBDaG9pY2VPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihncm91cE9mUGFydHNSdWxlTmFtZSksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lKSxcbiAgICAgICAgICBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBncm91cE9mUGFydHNSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsUGFydFJ1bGU7XG4iXX0=