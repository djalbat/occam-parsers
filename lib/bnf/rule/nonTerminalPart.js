'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    NonTerminalPartNode = require('../node/part/nonTerminal'),
    ruleNames = require('../ruleNames'),
    RuleNameDefinition = require('../definition/ruleName'),
    RuleNameNonTerminalPartRuleDefinition = require('../definition/nonTerminalPartRule/ruleName');

var NonTerminalPartRuleName = ruleNames.NonTerminalPartRuleName,
    ChoiceOfPartsRuleName = ruleNames.ChoiceOfPartsRuleName,
    GroupOfPartsRuleName = ruleNames.GroupOfPartsRuleName;

var NonTerminalPartRule = function (_Rule) {
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

    return _possibleConstructorReturn(this, (NonTerminalPartRule.__proto__ || Object.getPrototypeOf(NonTerminalPartRule)).call(this, name, definitions, Node));
  }

  return NonTerminalPartRule;
}(Rule);

module.exports = NonTerminalPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ub25UZXJtaW5hbFBhcnQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbFBhcnROb2RlIiwicnVsZU5hbWVzIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIk5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwiR3JvdXBPZlBhcnRzUnVsZU5hbWUiLCJOb25UZXJtaW5hbFBhcnRSdWxlIiwibmFtZSIsImdyb3VwT2ZQYXJ0c1J1bGVOYW1lIiwiY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwiZ3JvdXBPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uIiwiY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiIsInJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSwwQkFBUixDQUQ1QjtBQUFBLElBRU1FLFlBQVlGLFFBQVEsY0FBUixDQUZsQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSx3QkFBUixDQUgzQjtBQUFBLElBSU1JLHdDQUF3Q0osUUFBUSw0Q0FBUixDQUo5Qzs7SUFNUUssdUIsR0FBeUVILFMsQ0FBekVHLHVCO0lBQXlCQyxxQixHQUFnREosUyxDQUFoREkscUI7SUFBdUJDLG9CLEdBQXlCTCxTLENBQXpCSyxvQjs7SUFFbERDLG1COzs7QUFDSixpQ0FBYztBQUFBOztBQUNaLFFBQU1DLE9BQU9KLHVCQUFiO0FBQUEsUUFDTUssdUJBQXVCSCxvQkFEN0I7QUFBQSxRQUVNSSx3QkFBd0JMLHFCQUY5QjtBQUFBLFFBR01NLGlDQUFpQyxJQUFJVCxrQkFBSixDQUF1Qk8sb0JBQXZCLENBSHZDO0FBQUEsUUFJTUcsa0NBQWtDLElBQUlWLGtCQUFKLENBQXVCUSxxQkFBdkIsQ0FKeEM7QUFBQSxRQUtNRyx3Q0FBd0MsSUFBSVYscUNBQUosRUFMOUM7QUFBQSxRQU1NVyxjQUFjLENBQ1pGLCtCQURZLEVBRVpELDhCQUZZLEVBR1pFLHFDQUhZLENBTnBCO0FBQUEsUUFXTUUsT0FBT2YsbUJBWGI7O0FBRFkscUlBY05RLElBZE0sRUFjQU0sV0FkQSxFQWNhQyxJQWRiO0FBZWI7OztFQWhCK0JqQixJOztBQW1CbENrQixPQUFPQyxPQUFQLEdBQWlCVixtQkFBakIiLCJmaWxlIjoibm9uVGVybWluYWxQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgTm9uVGVybWluYWxQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcGFydC9ub25UZXJtaW5hbCcpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBSdWxlTmFtZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3J1bGVOYW1lJyksXG4gICAgICBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ub25UZXJtaW5hbFBhcnRSdWxlL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsIENob2ljZU9mUGFydHNSdWxlTmFtZSwgR3JvdXBPZlBhcnRzUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTm9uVGVybWluYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZU5hbWUgPSBHcm91cE9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWUgPSBDaG9pY2VPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihncm91cE9mUGFydHNSdWxlTmFtZSksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lKSxcbiAgICAgICAgICBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBncm91cE9mUGFydHNSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsUGFydFJ1bGU7XG4iXX0=