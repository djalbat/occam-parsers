"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require("../rule"),
    ruleNames = require("../ruleNames"),
    RuleNameDefinition = require("../definition/ruleName"),
    NonTerminalPartNode = require("../node/part/nonTerminal"),
    RuleNameNonTerminalPartRuleDefinition = require("../definition/partRule/nonTerminal/ruleName");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIk5vblRlcm1pbmFsUGFydE5vZGUiLCJSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJDaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJHcm91cE9mUGFydHNSdWxlTmFtZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJuYW1lIiwiZ3JvdXBPZlBhcnRzUnVsZU5hbWUiLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJncm91cE9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uIiwicnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01DLFNBQVMsR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FEekI7QUFBQSxJQUVNRSxrQkFBa0IsR0FBR0YsT0FBTyxDQUFDLHdCQUFELENBRmxDO0FBQUEsSUFHTUcsbUJBQW1CLEdBQUdILE9BQU8sQ0FBQywwQkFBRCxDQUhuQztBQUFBLElBSU1JLHFDQUFxQyxHQUFHSixPQUFPLENBQUMsNkNBQUQsQ0FKckQ7O0lBTVFLLHVCLEdBQXlFSixTLENBQXpFSSx1QjtJQUF5QkMscUIsR0FBZ0RMLFMsQ0FBaERLLHFCO0lBQXVCQyxvQixHQUF5Qk4sUyxDQUF6Qk0sb0I7O0lBRWxEQyxtQjs7O0FBQ0osaUNBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdKLHVCQUFiO0FBQUEsUUFDTUssb0JBQW9CLEdBQUdILG9CQUQ3QjtBQUFBLFFBRU1JLHFCQUFxQixHQUFHTCxxQkFGOUI7QUFBQSxRQUdNTSw4QkFBOEIsR0FBRyxJQUFJVixrQkFBSixDQUF1QlEsb0JBQXZCLENBSHZDO0FBQUEsUUFJTUcsK0JBQStCLEdBQUcsSUFBSVgsa0JBQUosQ0FBdUJTLHFCQUF2QixDQUp4QztBQUFBLFFBS01HLHFDQUFxQyxHQUFHLElBQUlWLHFDQUFKLEVBTDlDO0FBQUEsUUFNTVcsV0FBVyxHQUFHLENBQ1pGLCtCQURZLEVBRVpELDhCQUZZLEVBR1pFLHFDQUhZLENBTnBCO0FBQUEsUUFXTUUsSUFBSSxHQUFHYixtQkFYYjtBQURZLDRGQWNOTSxJQWRNLEVBY0FNLFdBZEEsRUFjYUMsSUFkYjtBQWViOzs7RUFoQitCakIsSTs7QUFtQmxDa0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixtQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoXCIuLi9ydWxlXCIpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZShcIi4uL3J1bGVOYW1lc1wiKSxcbiAgICAgIFJ1bGVOYW1lRGVmaW5pdGlvbiA9IHJlcXVpcmUoXCIuLi9kZWZpbml0aW9uL3J1bGVOYW1lXCIpLFxuICAgICAgTm9uVGVybWluYWxQYXJ0Tm9kZSA9IHJlcXVpcmUoXCIuLi9ub2RlL3BhcnQvbm9uVGVybWluYWxcIiksXG4gICAgICBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb24vcGFydFJ1bGUvbm9uVGVybWluYWwvcnVsZU5hbWVcIik7XG5cbmNvbnN0IHsgTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsIENob2ljZU9mUGFydHNSdWxlTmFtZSwgR3JvdXBPZlBhcnRzUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTm9uVGVybWluYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZU5hbWUgPSBHcm91cE9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWUgPSBDaG9pY2VPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihncm91cE9mUGFydHNSdWxlTmFtZSksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lKSxcbiAgICAgICAgICBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBncm91cE9mUGFydHNSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsUGFydFJ1bGU7XG4iXX0=