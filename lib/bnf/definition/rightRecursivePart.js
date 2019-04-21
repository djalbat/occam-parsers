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

    var content = terminalSymbolContent,
        ///
    terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);

    noWhitespace = false;

    var rightRecursivePartRuleName = RightRecursivePartRuleName,
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
        parts = [terminalSymbolPart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (RightRecursivePartDefinition.__proto__ || Object.getPrototypeOf(RightRecursivePartDefinition)).call(this, parts));
  }

  return RightRecursivePartDefinition;
}(Definition);

module.exports = RightRecursivePartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsicnVsZU5hbWVzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJub1doaXRlc3BhY2UiLCJjb250ZW50IiwidGVybWluYWxTeW1ib2xQYXJ0IiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsOEJBQVIsQ0FGckI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsaUNBQVIsQ0FIM0I7O0lBS1FJLDBCLEdBQStCTCxTLENBQS9CSywwQjs7SUFFRkMsNEI7OztBQUNKLHdDQUFZQyxxQkFBWixFQUFtQztBQUFBOztBQUNqQyxRQUFJQyxxQkFBSjs7QUFFQUEsbUJBQWUsSUFBZjs7QUFFQSxRQUFNQyxVQUFVRixxQkFBaEI7QUFBQSxRQUF3QztBQUNsQ0cseUJBQXFCLElBQUlOLGtCQUFKLENBQXVCSyxPQUF2QixFQUFnQ0QsWUFBaEMsQ0FEM0I7O0FBR0FBLG1CQUFlLEtBQWY7O0FBRUEsUUFBTUcsNkJBQTZCTiwwQkFBbkM7QUFBQSxRQUNNTyxpQ0FBaUMsSUFBSVQsWUFBSixDQUFpQlEsMEJBQWpCLEVBQTZDSCxZQUE3QyxDQUR2QztBQUFBLFFBRU1LLFFBQVEsQ0FDTkgsa0JBRE0sRUFFTkUsOEJBRk0sQ0FGZDs7QUFWaUMsdUpBaUIzQkMsS0FqQjJCO0FBa0JsQzs7O0VBbkJ3Q1gsVTs7QUFzQjNDWSxPQUFPQyxPQUFQLEdBQWlCVCw0QkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmVQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFN5bWJvbENvbnRlbnQpIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbFN5bWJvbENvbnRlbnQsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lID0gUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uO1xuIl19