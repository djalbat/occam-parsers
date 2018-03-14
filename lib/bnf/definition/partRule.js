'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ruleNames = require('../ruleNames'),
    RuleNamePart = require('../part/nonTerminal/ruleName');

var RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var PartRuleDefinition = function (_Definition) {
  _inherits(PartRuleDefinition, _Definition);

  function PartRuleDefinition(ruleName) {
    _classCallCheck(this, PartRuleDefinition);

    var noWhitespace = false,
        rightRecursivePartRuleName = RightRecursivePartRuleName,
        ruleNameRuleNamePart = new RuleNamePart(ruleName, noWhitespace),
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
        parts = [ruleNameRuleNamePart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (PartRuleDefinition.__proto__ || Object.getPrototypeOf(PartRuleDefinition)).call(this, parts));
  }

  return PartRuleDefinition;
}(Definition);

module.exports = PartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lUGFydCIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwiUGFydFJ1bGVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJub1doaXRlc3BhY2UiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsInJ1bGVOYW1lUnVsZU5hbWVQYXJ0IiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLDhCQUFSLENBRnJCOztJQUlRRywwQixHQUErQkYsUyxDQUEvQkUsMEI7O0lBRUZDLGtCOzs7QUFDSiw4QkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsNkJBQTZCSiwwQkFEbkM7QUFBQSxRQUVNSyx1QkFBdUIsSUFBSU4sWUFBSixDQUFpQkcsUUFBakIsRUFBMkJDLFlBQTNCLENBRjdCO0FBQUEsUUFHTUcsaUNBQWlDLElBQUlQLFlBQUosQ0FBaUJLLDBCQUFqQixFQUE2Q0QsWUFBN0MsQ0FIdkM7QUFBQSxRQUlNSSxRQUFRLENBQ05GLG9CQURNLEVBRU5DLDhCQUZNLENBSmQ7O0FBRG9CLG1JQVVkQyxLQVZjO0FBV3JCOzs7RUFaOEJYLFU7O0FBZWpDWSxPQUFPQyxPQUFQLEdBQWlCUixrQkFBakIiLCJmaWxlIjoicGFydFJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZU5hbWVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19