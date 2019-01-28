'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ruleNames = require('../ruleNames'),
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

    var rightRecursivePartRuleName = RightRecursivePartRuleName,
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
        parts = [terminalSymbolPart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (RightRecursivePartDefinition.__proto__ || Object.getPrototypeOf(RightRecursivePartDefinition)).call(this, parts));
  }

  return RightRecursivePartDefinition;
}(Definition);

module.exports = RightRecursivePartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJub1doaXRlc3BhY2UiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSw4QkFBUixDQUZyQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSxpQ0FBUixDQUgzQjs7SUFLUUksMEIsR0FBK0JILFMsQ0FBL0JHLDBCOztJQUVGQyw0Qjs7O0FBQ0osd0NBQVlDLHFCQUFaLEVBQW1DO0FBQUE7O0FBQ2pDLFFBQUlDLHFCQUFKOztBQUVBQSxtQkFBZSxJQUFmOztBQUVBLFFBQU1DLHFCQUFxQixJQUFJTCxrQkFBSixDQUF1QkcscUJBQXZCLEVBQThDQyxZQUE5QyxDQUEzQjs7QUFFQUEsbUJBQWUsS0FBZjs7QUFFQSxRQUFNRSw2QkFBNkJMLDBCQUFuQztBQUFBLFFBQ01NLGlDQUFpQyxJQUFJUixZQUFKLENBQWlCTywwQkFBakIsRUFBNkNGLFlBQTdDLENBRHZDO0FBQUEsUUFFTUksUUFBUSxDQUNOSCxrQkFETSxFQUVORSw4QkFGTSxDQUZkOztBQVRpQyx1SkFnQjNCQyxLQWhCMkI7QUFpQmxDOzs7RUFsQndDWixVOztBQXFCM0NhLE9BQU9DLE9BQVAsR0FBaUJSLDRCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZVBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsU3ltYm9sQ29udGVudCkge1xuICAgIGxldCBub1doaXRlc3BhY2U7XG5cbiAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuXG4gICAgY29uc3QgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh0ZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lID0gUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uO1xuIl19