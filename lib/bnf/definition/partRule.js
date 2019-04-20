'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName');

var RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var PartRuleDefinition = function (_Definition) {
  _inherits(PartRuleDefinition, _Definition);

  function PartRuleDefinition(ruleName) {
    _classCallCheck(this, PartRuleDefinition);

    var lookAhead = false,
        noWhitespace = false,
        rightRecursivePartRuleName = RightRecursivePartRuleName,
        ruleNameRuleNamePart = new RuleNamePart(ruleName, lookAhead, noWhitespace),
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
        parts = [ruleNameRuleNamePart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (PartRuleDefinition.__proto__ || Object.getPrototypeOf(PartRuleDefinition)).call(this, parts));
  }

  return PartRuleDefinition;
}(Definition);

module.exports = PartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS5qcyJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwiUGFydFJ1bGVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJub1doaXRlc3BhY2UiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsInJ1bGVOYW1lUnVsZU5hbWVQYXJ0IiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLDhCQUFSLENBRnJCOztJQUlRRywwQixHQUErQkosUyxDQUEvQkksMEI7O0lBRUZDLGtCOzs7QUFDSiw4QkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixRQUFNQyxZQUFZLEtBQWxCO0FBQUEsUUFDTUMsZUFBZSxLQURyQjtBQUFBLFFBRU1DLDZCQUE2QkwsMEJBRm5DO0FBQUEsUUFHTU0sdUJBQXVCLElBQUlQLFlBQUosQ0FBaUJHLFFBQWpCLEVBQTJCQyxTQUEzQixFQUFzQ0MsWUFBdEMsQ0FIN0I7QUFBQSxRQUlNRyxpQ0FBaUMsSUFBSVIsWUFBSixDQUFpQk0sMEJBQWpCLEVBQTZDRCxZQUE3QyxDQUp2QztBQUFBLFFBS01JLFFBQVEsQ0FDTkYsb0JBRE0sRUFFTkMsOEJBRk0sQ0FMZDs7QUFEb0IsbUlBV2RDLEtBWGM7QUFZckI7OztFQWI4QlYsVTs7QUFnQmpDVyxPQUFPQyxPQUFQLEdBQWlCVCxrQkFBakIiLCJmaWxlIjoicGFydFJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUpIHtcbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSwgbG9va0FoZWFkLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0UnVsZURlZmluaXRpb247XG4iXX0=