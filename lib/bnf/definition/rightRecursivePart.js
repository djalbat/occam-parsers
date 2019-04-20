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

    var noWhitespace = void 0;

    noWhitespace = true;

    var terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, noWhitespace);

    noWhitespace = false;

    var lookAhead = false,
        rightRecursivePartRuleName = RightRecursivePartRuleName,
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, lookAhead, noWhitespace),
        parts = [terminalSymbolPart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (RightRecursivePartDefinition.__proto__ || Object.getPrototypeOf(RightRecursivePartDefinition)).call(this, parts));
  }

  return RightRecursivePartDefinition;
}(Definition);

module.exports = RightRecursivePartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsicnVsZU5hbWVzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJub1doaXRlc3BhY2UiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJsb29rQWhlYWQiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSw4QkFBUixDQUZyQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSxpQ0FBUixDQUgzQjs7SUFLUUksMEIsR0FBK0JMLFMsQ0FBL0JLLDBCOztJQUVGQyw0Qjs7O0FBQ0osd0NBQVlDLHFCQUFaLEVBQW1DO0FBQUE7O0FBQ2pDLFFBQUlDLHFCQUFKOztBQUVBQSxtQkFBZSxJQUFmOztBQUVBLFFBQU1DLHFCQUFxQixJQUFJTCxrQkFBSixDQUF1QkcscUJBQXZCLEVBQThDQyxZQUE5QyxDQUEzQjs7QUFFQUEsbUJBQWUsS0FBZjs7QUFFQSxRQUFNRSxZQUFZLEtBQWxCO0FBQUEsUUFDTUMsNkJBQTZCTiwwQkFEbkM7QUFBQSxRQUVNTyxpQ0FBaUMsSUFBSVQsWUFBSixDQUFpQlEsMEJBQWpCLEVBQTZDRCxTQUE3QyxFQUF3REYsWUFBeEQsQ0FGdkM7QUFBQSxRQUdNSyxRQUFRLENBQ05KLGtCQURNLEVBRU5HLDhCQUZNLENBSGQ7O0FBVGlDLHVKQWlCM0JDLEtBakIyQjtBQWtCbEM7OztFQW5Cd0NYLFU7O0FBc0IzQ1ksT0FBT0MsT0FBUCxHQUFpQlQsNEJBQWpCIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodGVybWluYWxTeW1ib2xDb250ZW50KSB7XG4gICAgbGV0IG5vV2hpdGVzcGFjZTtcblxuICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG5cbiAgICBjb25zdCB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgPSBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLCBsb29rQWhlYWQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbjtcbiJdfQ==