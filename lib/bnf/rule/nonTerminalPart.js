'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    PartNode = require('../node/part'),
    ruleNames = require('../ruleNames'),
    RuleNameDefinition = require('../definition/ruleName'),
    RuleNameNonTerminalPartRuleDefinition = require('../definition/nonTerminalPartRule/ruleName');

var ChoiceOfPartsRuleName = ruleNames.ChoiceOfPartsRuleName,
    GroupOfPartsRuleName = ruleNames.GroupOfPartsRuleName;

var NonTerminalPartRule = function (_Rule) {
  _inherits(NonTerminalPartRule, _Rule);

  function NonTerminalPartRule() {
    _classCallCheck(this, NonTerminalPartRule);

    var name = PartRuleName,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ub25UZXJtaW5hbFBhcnQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQYXJ0Tm9kZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJDaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJHcm91cE9mUGFydHNSdWxlTmFtZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJuYW1lIiwiUGFydFJ1bGVOYW1lIiwiZ3JvdXBPZlBhcnRzUnVsZU5hbWUiLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJncm91cE9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uIiwicnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsV0FBV0QsUUFBUSxjQUFSLENBRGpCO0FBQUEsSUFFTUUsWUFBWUYsUUFBUSxjQUFSLENBRmxCO0FBQUEsSUFHTUcscUJBQXFCSCxRQUFRLHdCQUFSLENBSDNCO0FBQUEsSUFJTUksd0NBQXdDSixRQUFRLDRDQUFSLENBSjlDOztJQU1RSyxxQixHQUFnREgsUyxDQUFoREcscUI7SUFBdUJDLG9CLEdBQXlCSixTLENBQXpCSSxvQjs7SUFFekJDLG1COzs7QUFDSixpQ0FBYztBQUFBOztBQUNaLFFBQU1DLE9BQU9DLFlBQWI7QUFBQSxRQUNNQyx1QkFBdUJKLG9CQUQ3QjtBQUFBLFFBRU1LLHdCQUF3Qk4scUJBRjlCO0FBQUEsUUFHTU8saUNBQWlDLElBQUlULGtCQUFKLENBQXVCTyxvQkFBdkIsQ0FIdkM7QUFBQSxRQUlNRyxrQ0FBa0MsSUFBSVYsa0JBQUosQ0FBdUJRLHFCQUF2QixDQUp4QztBQUFBLFFBS01HLHdDQUF3QyxJQUFJVixxQ0FBSixFQUw5QztBQUFBLFFBTU1XLGNBQWMsQ0FDWkYsK0JBRFksRUFFWkQsOEJBRlksRUFHWkUscUNBSFksQ0FOcEI7QUFBQSxRQVdNRSxPQUFPZixRQVhiOztBQURZLHFJQWNOTyxJQWRNLEVBY0FPLFdBZEEsRUFjYUMsSUFkYjtBQWViOzs7RUFoQitCakIsSTs7QUFtQmxDa0IsT0FBT0MsT0FBUCxHQUFpQlgsbUJBQWpCIiwiZmlsZSI6Im5vblRlcm1pbmFsUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFBhcnROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9wYXJ0JyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcnVsZU5hbWUnKSxcbiAgICAgIFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL25vblRlcm1pbmFsUGFydFJ1bGUvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBDaG9pY2VPZlBhcnRzUnVsZU5hbWUsIEdyb3VwT2ZQYXJ0c1J1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIE5vblRlcm1pbmFsUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBncm91cE9mUGFydHNSdWxlTmFtZSA9IEdyb3VwT2ZQYXJ0c1J1bGVOYW1lLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlTmFtZSA9IENob2ljZU9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBncm91cE9mUGFydHNSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKGdyb3VwT2ZQYXJ0c1J1bGVOYW1lKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihjaG9pY2VPZlBhcnRzUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsUGFydFJ1bGU7XG4iXX0=