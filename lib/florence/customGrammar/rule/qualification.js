'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../../bnf/rule'),
    QualificationNode = require('../node/qualification'),
    RuleNamePart = require('../../../bnf/part/nonTerminal/ruleName'),
    OptionalPartPart = require('../../../bnf/part/nonTerminal/optionalPart'),
    ChoiceOfPartsPart = require('../../../bnf/part/nonTerminal/choiceOfParts'),
    TerminalSymbolPart = require('../../../bnf/part/terminal/terminalSymbol');

var QualificationRule = function (_Rule) {
  _inherits(QualificationRule, _Rule);

  function QualificationRule() {
    _classCallCheck(this, QualificationRule);

    var byTerminalSymbolContent = 'by',
        fromTerminalSymbolContent = 'from',
        referenceRuleName = 'reference',
        referenceRuleNamePart = new RuleNamePart(referenceRuleName),
        byTerminalSymbolPart = new TerminalSymbolPart(byTerminalSymbolContent),
        fromTerminalSymbolPart = new TerminalSymbolPart(fromTerminalSymbolContent),
        byOfFromChoiceOfPartsPartParts = [byTerminalSymbolPart, fromTerminalSymbolPart],
        byOfFromChoiceOfPartsPart = new ChoiceOfPartsPart(byOfFromChoiceOfPartsPartParts),
        optionalReferenceRuleNamePart = new OptionalPartPart(referenceRuleNamePart),
        parts = [byOfFromChoiceOfPartsPart, optionalReferenceRuleNamePart],
        definition = new Definition(parts),
        name = QualificationRule.ruleName,
        ///
    definitions = [definition],
        Node = QualificationNode;

    return _possibleConstructorReturn(this, (QualificationRule.__proto__ || Object.getPrototypeOf(QualificationRule)).call(this, name, definitions, Node));
  }

  return QualificationRule;
}(Rule);

QualificationRule.ruleName = 'qualification';

module.exports = QualificationRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZS9jdXN0b21HcmFtbWFyL3J1bGUvcXVhbGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlF1YWxpZmljYXRpb25Ob2RlIiwiUnVsZU5hbWVQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIkNob2ljZU9mUGFydHNQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUXVhbGlmaWNhdGlvblJ1bGUiLCJieVRlcm1pbmFsU3ltYm9sQ29udGVudCIsImZyb21UZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJyZWZlcmVuY2VSdWxlTmFtZSIsInJlZmVyZW5jZVJ1bGVOYW1lUGFydCIsImJ5VGVybWluYWxTeW1ib2xQYXJ0IiwiZnJvbVRlcm1pbmFsU3ltYm9sUGFydCIsImJ5T2ZGcm9tQ2hvaWNlT2ZQYXJ0c1BhcnRQYXJ0cyIsImJ5T2ZGcm9tQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJvcHRpb25hbFJlZmVyZW5jZVJ1bGVOYW1lUGFydCIsInBhcnRzIiwiZGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJuYW1lIiwicnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLG1CQUFSLENBQWI7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsdUJBQVIsQ0FEMUI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLHdDQUFSLENBRnJCO0FBQUEsSUFHTUcsbUJBQW1CSCxRQUFRLDRDQUFSLENBSHpCO0FBQUEsSUFJTUksb0JBQW9CSixRQUFRLDZDQUFSLENBSjFCO0FBQUEsSUFLTUsscUJBQXFCTCxRQUFRLDJDQUFSLENBTDNCOztJQU9NTSxpQjs7O0FBQ0osK0JBQWM7QUFBQTs7QUFDWixRQUFNQywwQkFBMEIsSUFBaEM7QUFBQSxRQUNNQyw0QkFBNEIsTUFEbEM7QUFBQSxRQUVNQyxvQkFBb0IsV0FGMUI7QUFBQSxRQUdNQyx3QkFBd0IsSUFBSVIsWUFBSixDQUFpQk8saUJBQWpCLENBSDlCO0FBQUEsUUFJTUUsdUJBQXVCLElBQUlOLGtCQUFKLENBQXVCRSx1QkFBdkIsQ0FKN0I7QUFBQSxRQUtNSyx5QkFBeUIsSUFBSVAsa0JBQUosQ0FBdUJHLHlCQUF2QixDQUwvQjtBQUFBLFFBTU1LLGlDQUFpQyxDQUMvQkYsb0JBRCtCLEVBRS9CQyxzQkFGK0IsQ0FOdkM7QUFBQSxRQVVNRSw0QkFBNEIsSUFBSVYsaUJBQUosQ0FBc0JTLDhCQUF0QixDQVZsQztBQUFBLFFBV01FLGdDQUFnQyxJQUFJWixnQkFBSixDQUFxQk8scUJBQXJCLENBWHRDO0FBQUEsUUFZTU0sUUFBUSxDQUNORix5QkFETSxFQUVOQyw2QkFGTSxDQVpkO0FBQUEsUUFnQk1FLGFBQWEsSUFBSUMsVUFBSixDQUFlRixLQUFmLENBaEJuQjtBQUFBLFFBaUJNRyxPQUFPYixrQkFBa0JjLFFBakIvQjtBQUFBLFFBaUIwQztBQUNwQ0Msa0JBQWMsQ0FDWkosVUFEWSxDQWxCcEI7QUFBQSxRQXFCTUssT0FBT3JCLGlCQXJCYjs7QUFEWSxpSUF3Qk5rQixJQXhCTSxFQXdCQUUsV0F4QkEsRUF3QmFDLElBeEJiO0FBeUJiOzs7RUExQjZCdkIsSTs7QUE2QmhDTyxrQkFBa0JjLFFBQWxCLEdBQTZCLGVBQTdCOztBQUVBRyxPQUFPQyxPQUFQLEdBQWlCbEIsaUJBQWpCIiwiZmlsZSI6InF1YWxpZmljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi8uLi9ibmYvcnVsZScpLFxuICAgICAgUXVhbGlmaWNhdGlvbk5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3F1YWxpZmljYXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vLi4vYm5mL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBDaG9pY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNsYXNzIFF1YWxpZmljYXRpb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGJ5VGVybWluYWxTeW1ib2xDb250ZW50ID0gJ2J5JyxcbiAgICAgICAgICBmcm9tVGVybWluYWxTeW1ib2xDb250ZW50ID0gJ2Zyb20nLFxuICAgICAgICAgIHJlZmVyZW5jZVJ1bGVOYW1lID0gJ3JlZmVyZW5jZScsXG4gICAgICAgICAgcmVmZXJlbmNlUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyZWZlcmVuY2VSdWxlTmFtZSksXG4gICAgICAgICAgYnlUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGJ5VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBmcm9tVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChmcm9tVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBieU9mRnJvbUNob2ljZU9mUGFydHNQYXJ0UGFydHMgPSBbXG4gICAgICAgICAgICBieVRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGZyb21UZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIGJ5T2ZGcm9tQ2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQoYnlPZkZyb21DaG9pY2VPZlBhcnRzUGFydFBhcnRzKSxcbiAgICAgICAgICBvcHRpb25hbFJlZmVyZW5jZVJ1bGVOYW1lUGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHJlZmVyZW5jZVJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBieU9mRnJvbUNob2ljZU9mUGFydHNQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxSZWZlcmVuY2VSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyksXG4gICAgICAgICAgbmFtZSA9IFF1YWxpZmljYXRpb25SdWxlLnJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUXVhbGlmaWNhdGlvbk5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5RdWFsaWZpY2F0aW9uUnVsZS5ydWxlTmFtZSA9ICdxdWFsaWZpY2F0aW9uJztcblxubW9kdWxlLmV4cG9ydHMgPSBRdWFsaWZpY2F0aW9uUnVsZTtcbiJdfQ==