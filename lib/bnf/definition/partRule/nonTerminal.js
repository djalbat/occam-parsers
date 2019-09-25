'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

var NonTerminalPartRuleName = ruleNames.NonTerminalPartRuleName;

var NonTerminalPartRuleDefinition = function (_Definition) {
  _inherits(NonTerminalPartRuleDefinition, _Definition);

  function NonTerminalPartRuleDefinition() {
    _classCallCheck(this, NonTerminalPartRuleDefinition);

    var nonTerminalPartRuleName = NonTerminalPartRuleName,
        nonTerminalPartRuleNamePart = new RuleNamePart(nonTerminalPartRuleName),
        zeroOrMoreNonTerminalPartRuleNamePartsPart = new ZeroOrMorePartsPart(nonTerminalPartRuleNamePart),
        parts = [zeroOrMoreNonTerminalPartRuleNamePartsPart];

    return _possibleConstructorReturn(this, (NonTerminalPartRuleDefinition.__proto__ || Object.getPrototypeOf(NonTerminalPartRuleDefinition)).call(this, parts));
  }

  return NonTerminalPartRuleDefinition;
}(Definition);

module.exports = NonTerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSIsIk5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwibm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlTm9uVGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsaUJBQVIsQ0FBbEI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGtCQUFSLENBRG5CO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxpQ0FBUixDQUZyQjtBQUFBLElBR01HLHNCQUFzQkgsUUFBUSx3Q0FBUixDQUg1Qjs7SUFLUUksdUIsR0FBNEJMLFMsQ0FBNUJLLHVCOztJQUVGQyw2Qjs7O0FBQ0osMkNBQWM7QUFBQTs7QUFDWixRQUFNQywwQkFBMEJGLHVCQUFoQztBQUFBLFFBQ01HLDhCQUE4QixJQUFJTCxZQUFKLENBQWlCSSx1QkFBakIsQ0FEcEM7QUFBQSxRQUVNRSw2Q0FBNkMsSUFBSUwsbUJBQUosQ0FBd0JJLDJCQUF4QixDQUZuRDtBQUFBLFFBR01FLFFBQVEsQ0FDTkQsMENBRE0sQ0FIZDs7QUFEWSx5SkFRTkMsS0FSTTtBQVNiOzs7RUFWeUNSLFU7O0FBYTVDUyxPQUFPQyxPQUFQLEdBQWlCTiw2QkFBakIiLCJmaWxlIjoibm9uVGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uLy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IE5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lID0gTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChub25UZXJtaW5hbFBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZU5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQobm9uVGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHplcm9Pck1vcmVOb25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbjtcbiJdfQ==