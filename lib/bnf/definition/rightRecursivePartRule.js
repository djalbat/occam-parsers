'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ruleNames = require('../ruleNames'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var RightRecursivePartRuleDefinition = function (_Definition) {
  _inherits(RightRecursivePartRuleDefinition, _Definition);

  function RightRecursivePartRuleDefinition(terminalSymbolContent) {
    _classCallCheck(this, RightRecursivePartRuleDefinition);

    var terminalSymbolPartNoWhitespace = true,
        rightRecursivePartRuleName = ruleNames.RightRecursivePartRule,
        terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, terminalSymbolPartNoWhitespace),
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
        parts = [terminalSymbolPart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (RightRecursivePartRuleDefinition.__proto__ || Object.getPrototypeOf(RightRecursivePartRuleDefinition)).call(this, parts));
  }

  return RightRecursivePartRuleDefinition;
}(Definition);

module.exports = RightRecursivePartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZVBhcnRSdWxlLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiUnVsZU5hbWVQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnROb1doaXRlc3BhY2UiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsOEJBQVIsQ0FGckI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsaUNBQVIsQ0FIM0I7O0lBS01JLGdDOzs7QUFDSiw0Q0FBWUMscUJBQVosRUFBbUM7QUFBQTs7QUFDakMsUUFBTUMsaUNBQWlDLElBQXZDO0FBQUEsUUFDTUMsNkJBQTZCTixVQUFVTyxzQkFEN0M7QUFBQSxRQUVNQyxxQkFBcUIsSUFBSU4sa0JBQUosQ0FBdUJFLHFCQUF2QixFQUE4Q0MsOEJBQTlDLENBRjNCO0FBQUEsUUFHTUksaUNBQWlDLElBQUlSLFlBQUosQ0FBaUJLLDBCQUFqQixDQUh2QztBQUFBLFFBSU1JLFFBQVEsQ0FDTkYsa0JBRE0sRUFFTkMsOEJBRk0sQ0FKZDs7QUFEaUMsK0pBVTNCQyxLQVYyQjtBQVdsQzs7O0VBWjRDWixVOztBQWUvQ2EsT0FBT0MsT0FBUCxHQUFpQlQsZ0NBQWpCIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodGVybWluYWxTeW1ib2xDb250ZW50KSB7XG4gICAgY29uc3QgdGVybWluYWxTeW1ib2xQYXJ0Tm9XaGl0ZXNwYWNlID0gdHJ1ZSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9IHJ1bGVOYW1lcy5SaWdodFJlY3Vyc2l2ZVBhcnRSdWxlLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYWxTeW1ib2xDb250ZW50LCB0ZXJtaW5hbFN5bWJvbFBhcnROb1doaXRlc3BhY2UpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19