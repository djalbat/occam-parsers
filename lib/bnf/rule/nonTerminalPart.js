'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    PartNode = require('../node/part'),
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
        Node = PartNode;

    return _possibleConstructorReturn(this, (NonTerminalPartRule.__proto__ || Object.getPrototypeOf(NonTerminalPartRule)).call(this, name, definitions, Node));
  }

  return NonTerminalPartRule;
}(Rule);

module.exports = NonTerminalPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ub25UZXJtaW5hbFBhcnQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQYXJ0Tm9kZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSIsIkNob2ljZU9mUGFydHNSdWxlTmFtZSIsIkdyb3VwT2ZQYXJ0c1J1bGVOYW1lIiwiTm9uVGVybWluYWxQYXJ0UnVsZSIsIm5hbWUiLCJncm91cE9mUGFydHNSdWxlTmFtZSIsImNob2ljZU9mUGFydHNSdWxlTmFtZSIsImdyb3VwT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiIsImNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxXQUFXRCxRQUFRLGNBQVIsQ0FEakI7QUFBQSxJQUVNRSxZQUFZRixRQUFRLGNBQVIsQ0FGbEI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsd0JBQVIsQ0FIM0I7QUFBQSxJQUlNSSx3Q0FBd0NKLFFBQVEsNENBQVIsQ0FKOUM7O0lBTVFLLHVCLEdBQXlFSCxTLENBQXpFRyx1QjtJQUF5QkMscUIsR0FBZ0RKLFMsQ0FBaERJLHFCO0lBQXVCQyxvQixHQUF5QkwsUyxDQUF6Qkssb0I7O0lBRWxEQyxtQjs7O0FBQ0osaUNBQWM7QUFBQTs7QUFDWixRQUFNQyxPQUFPSix1QkFBYjtBQUFBLFFBQ01LLHVCQUF1Qkgsb0JBRDdCO0FBQUEsUUFFTUksd0JBQXdCTCxxQkFGOUI7QUFBQSxRQUdNTSxpQ0FBaUMsSUFBSVQsa0JBQUosQ0FBdUJPLG9CQUF2QixDQUh2QztBQUFBLFFBSU1HLGtDQUFrQyxJQUFJVixrQkFBSixDQUF1QlEscUJBQXZCLENBSnhDO0FBQUEsUUFLTUcsd0NBQXdDLElBQUlWLHFDQUFKLEVBTDlDO0FBQUEsUUFNTVcsY0FBYyxDQUNaRiwrQkFEWSxFQUVaRCw4QkFGWSxFQUdaRSxxQ0FIWSxDQU5wQjtBQUFBLFFBV01FLE9BQU9mLFFBWGI7O0FBRFkscUlBY05RLElBZE0sRUFjQU0sV0FkQSxFQWNhQyxJQWRiO0FBZWI7OztFQWhCK0JqQixJOztBQW1CbENrQixPQUFPQyxPQUFQLEdBQWlCVixtQkFBakIiLCJmaWxlIjoibm9uVGVybWluYWxQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUGFydE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgUnVsZU5hbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ydWxlTmFtZScpLFxuICAgICAgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9uVGVybWluYWxQYXJ0UnVsZS9ydWxlTmFtZScpO1xuXG5jb25zdCB7IE5vblRlcm1pbmFsUGFydFJ1bGVOYW1lLCBDaG9pY2VPZlBhcnRzUnVsZU5hbWUsIEdyb3VwT2ZQYXJ0c1J1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIE5vblRlcm1pbmFsUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IE5vblRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGVOYW1lID0gR3JvdXBPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lID0gQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oZ3JvdXBPZlBhcnRzUnVsZU5hbWUpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKGNob2ljZU9mUGFydHNSdWxlTmFtZSksXG4gICAgICAgICAgcnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgcnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFBhcnROb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxQYXJ0UnVsZTtcbiJdfQ==