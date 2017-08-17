'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ruleNames = require('../ruleNames'),
    RuleNamePart = require('../part/nonTerminal/ruleName');

var PartRuleDefinition = function (_Definition) {
  _inherits(PartRuleDefinition, _Definition);

  function PartRuleDefinition(ruleName) {
    _classCallCheck(this, PartRuleDefinition);

    var rightRecursivePartRuleName = ruleNames.RightRecursivePartRule,
        ruleNameRuleNamePart = new RuleNamePart(ruleName),
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
        parts = [ruleNameRuleNamePart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (PartRuleDefinition.__proto__ || Object.getPrototypeOf(PartRuleDefinition)).call(this, parts));
  }

  return PartRuleDefinition;
}(Definition);

module.exports = PartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lUGFydCIsIlBhcnRSdWxlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlIiwicnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsOEJBQVIsQ0FGckI7O0lBSU1HLGtCOzs7QUFDSiw4QkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixRQUFNQyw2QkFBNkJKLFVBQVVLLHNCQUE3QztBQUFBLFFBQ01DLHVCQUF1QixJQUFJTCxZQUFKLENBQWlCRSxRQUFqQixDQUQ3QjtBQUFBLFFBRU1JLGlDQUFpQyxJQUFJTixZQUFKLENBQWlCRywwQkFBakIsQ0FGdkM7QUFBQSxRQUdNSSxRQUFRLENBQ05GLG9CQURNLEVBRU5DLDhCQUZNLENBSGQ7O0FBRG9CLG1JQVNkQyxLQVRjO0FBVXJCOzs7RUFYOEJWLFU7O0FBY2pDVyxPQUFPQyxPQUFQLEdBQWlCUixrQkFBakIiLCJmaWxlIjoicGFydFJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKTtcblxuY2xhc3MgUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgPSBydWxlTmFtZXMuUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWUpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZU5hbWVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19