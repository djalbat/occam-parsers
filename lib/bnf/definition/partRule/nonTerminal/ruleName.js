'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../../../ruleNames'),
    Definition = require('../../../definition'),
    RuleNamePart = require('../../../part/nonTerminal/ruleName'),
    OptionalPartPart = require('../../../part/nonTerminal/optionalPart');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJSdWxlTmFtZVJ1bGVOYW1lIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsIlJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJydWxlTmFtZVJ1bGVOYW1lIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsInJ1bGVOYW1lUnVsZU5hbWVQYXJ0IiwibG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZVBhcnQiLCJvcHRpb25hbExvb2tBaGVhZFJ1bGVOYW1lUGFydFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsb0JBQVIsQ0FBbEI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLHFCQUFSLENBRG5CO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxvQ0FBUixDQUZyQjtBQUFBLElBR01HLG1CQUFtQkgsUUFBUSx3Q0FBUixDQUh6Qjs7SUFLUUksZ0IsR0FBZ0RMLFMsQ0FBaERLLGdCO0lBQWtCQyx5QixHQUE4Qk4sUyxDQUE5Qk0seUI7O0lBRXBCQyxxQzs7O0FBQ0osbURBQWM7QUFBQTs7QUFDWixRQUFNQyxtQkFBbUJILGdCQUF6QjtBQUFBLFFBQ01JLDRCQUE0QkgseUJBRGxDO0FBQUEsUUFFTUksdUJBQXVCLElBQUlQLFlBQUosQ0FBaUJLLGdCQUFqQixDQUY3QjtBQUFBLFFBR01HLGdDQUFnQyxJQUFJUixZQUFKLENBQWlCTSx5QkFBakIsQ0FIdEM7QUFBQSxRQUlNRyxvQ0FBb0MsSUFBSVIsZ0JBQUosQ0FBcUJPLDZCQUFyQixDQUoxQztBQUFBLFFBS01FLFFBQVEsQ0FDTkgsb0JBRE0sRUFFTkUsaUNBRk0sQ0FMZDs7QUFEWSx5S0FXTkMsS0FYTTtBQVliOzs7RUFiaURYLFU7O0FBZ0JwRFksT0FBT0MsT0FBUCxHQUFpQlIscUNBQWpCIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi8uLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi8uLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnQnKTtcblxuY29uc3QgeyBSdWxlTmFtZVJ1bGVOYW1lLCBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVSdWxlTmFtZSA9IFJ1bGVOYW1lUnVsZU5hbWUsXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSA9IExvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgcnVsZU5hbWVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lUnVsZU5hbWUpLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBvcHRpb25hbExvb2tBaGVhZFJ1bGVOYW1lUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19