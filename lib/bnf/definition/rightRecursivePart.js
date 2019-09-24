'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var RightRecursivePartDefinition = function (_Definition) {
  _inherits(RightRecursivePartDefinition, _Definition);

  function RightRecursivePartDefinition(terminalSymbolContent) {
    _classCallCheck(this, RightRecursivePartDefinition);

    var content = terminalSymbolContent,
        ///
    noWhitespace = true,
        terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace),
        rightRecursivePartRuleName = RightRecursivePartRuleName,
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
        parts = [terminalSymbolPart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (RightRecursivePartDefinition.__proto__ || Object.getPrototypeOf(RightRecursivePartDefinition)).call(this, parts));
  }

  return RightRecursivePartDefinition;
}(Definition);

module.exports = RightRecursivePartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsicnVsZU5hbWVzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJjb250ZW50Iiwibm9XaGl0ZXNwYWNlIiwidGVybWluYWxTeW1ib2xQYXJ0IiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsOEJBQVIsQ0FGckI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsaUNBQVIsQ0FIM0I7O0lBS1FJLDBCLEdBQStCTCxTLENBQS9CSywwQjs7SUFFRkMsNEI7OztBQUNKLHdDQUFZQyxxQkFBWixFQUFtQztBQUFBOztBQUNqQyxRQUFNQyxVQUFVRCxxQkFBaEI7QUFBQSxRQUF3QztBQUNwQ0UsbUJBQWUsSUFEbkI7QUFBQSxRQUVNQyxxQkFBcUIsSUFBSU4sa0JBQUosQ0FBdUJJLE9BQXZCLEVBQWdDQyxZQUFoQyxDQUYzQjtBQUFBLFFBR0lFLDZCQUE2Qk4sMEJBSGpDO0FBQUEsUUFJTU8saUNBQWlDLElBQUlULFlBQUosQ0FBaUJRLDBCQUFqQixDQUp2QztBQUFBLFFBS01FLFFBQVEsQ0FDTkgsa0JBRE0sRUFFTkUsOEJBRk0sQ0FMZDs7QUFEaUMsdUpBVzNCQyxLQVgyQjtBQVlsQzs7O0VBYndDWCxVOztBQWdCM0NZLE9BQU9DLE9BQVAsR0FBaUJULDRCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZVBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsU3ltYm9sQ29udGVudCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbFN5bWJvbENvbnRlbnQsICAvLy9cblx0XHQgICAgICBub1doaXRlc3BhY2UgPSB0cnVlLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCwgbm9XaGl0ZXNwYWNlKSxcblx0XHQgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb247XG4iXX0=