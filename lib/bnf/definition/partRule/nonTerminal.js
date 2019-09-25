'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

var ModifierRuleName = ruleNames.ModifierRuleName,
    NonTerminalPartRuleName = ruleNames.NonTerminalPartRuleName;

var NonTerminalPartRuleDefinition = function (_Definition) {
  _inherits(NonTerminalPartRuleDefinition, _Definition);

  function NonTerminalPartRuleDefinition() {
    _classCallCheck(this, NonTerminalPartRuleDefinition);

    var modifierRuleName = ModifierRuleName,
        nonTerminalPartRuleName = NonTerminalPartRuleName,
        modifierRuleNamePart = new RuleNamePart(modifierRuleName),
        nonTerminalPartRuleNamePart = new RuleNamePart(nonTerminalPartRuleName),
        zeroOrMoreModifierRuleNamePartsPart = new ZeroOrMorePartsPart(modifierRuleNamePart),
        parts = [nonTerminalPartRuleNamePart, zeroOrMoreModifierRuleNamePartsPart];

    return _possibleConstructorReturn(this, (NonTerminalPartRuleDefinition.__proto__ || Object.getPrototypeOf(NonTerminalPartRuleDefinition)).call(this, parts));
  }

  return NonTerminalPartRuleDefinition;
}(Definition);

module.exports = NonTerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJNb2RpZmllclJ1bGVOYW1lIiwiTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm1vZGlmaWVyUnVsZU5hbWUiLCJub25UZXJtaW5hbFBhcnRSdWxlTmFtZSIsIm1vZGlmaWVyUnVsZU5hbWVQYXJ0Iiwibm9uVGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0IiwiemVyb09yTW9yZU1vZGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsaUJBQVIsQ0FBbEI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGtCQUFSLENBRG5CO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxpQ0FBUixDQUZyQjtBQUFBLElBR01HLHNCQUFzQkgsUUFBUSx3Q0FBUixDQUg1Qjs7SUFLUUksZ0IsR0FBOENMLFMsQ0FBOUNLLGdCO0lBQWtCQyx1QixHQUE0Qk4sUyxDQUE1Qk0sdUI7O0lBRXBCQyw2Qjs7O0FBQ0osMkNBQWM7QUFBQTs7QUFDWixRQUFNQyxtQkFBbUJILGdCQUF6QjtBQUFBLFFBQ01JLDBCQUEwQkgsdUJBRGhDO0FBQUEsUUFFTUksdUJBQXVCLElBQUlQLFlBQUosQ0FBaUJLLGdCQUFqQixDQUY3QjtBQUFBLFFBR01HLDhCQUE4QixJQUFJUixZQUFKLENBQWlCTSx1QkFBakIsQ0FIcEM7QUFBQSxRQUlNRyxzQ0FBc0MsSUFBSVIsbUJBQUosQ0FBd0JNLG9CQUF4QixDQUo1QztBQUFBLFFBS01HLFFBQVEsQ0FDTkYsMkJBRE0sRUFFTkMsbUNBRk0sQ0FMZDs7QUFEWSx5SkFXTkMsS0FYTTtBQVliOzs7RUFieUNYLFU7O0FBZ0I1Q1ksT0FBT0MsT0FBUCxHQUFpQlIsNkJBQWpCIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi8uLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHMnKTtcblxuY29uc3QgeyBNb2RpZmllclJ1bGVOYW1lLCBOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBtb2RpZmllclJ1bGVOYW1lID0gTW9kaWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlTmFtZSA9IE5vblRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG1vZGlmaWVyUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChtb2RpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlTW9kaWZpZXJSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KG1vZGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHplcm9Pck1vcmVNb2RpZmllclJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19