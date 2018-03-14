'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ruleNames = require('../ruleNames'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var RightRecursivePartRuleDefinition = function (_Definition) {
  _inherits(RightRecursivePartRuleDefinition, _Definition);

  function RightRecursivePartRuleDefinition(terminalSymbolContent) {
    _classCallCheck(this, RightRecursivePartRuleDefinition);

    var noWhitespace = false,
        rightRecursivePartRuleName = RightRecursivePartRuleName,
        terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, noWhitespace),
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
        parts = [terminalSymbolPart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (RightRecursivePartRuleDefinition.__proto__ || Object.getPrototypeOf(RightRecursivePartRuleDefinition)).call(this, parts));
  }

  return RightRecursivePartRuleDefinition;
}(Definition);

module.exports = RightRecursivePartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZVBhcnRSdWxlLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiUnVsZU5hbWVQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsInRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm5vV2hpdGVzcGFjZSIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwidGVybWluYWxTeW1ib2xQYXJ0IiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLDhCQUFSLENBRnJCO0FBQUEsSUFHTUcscUJBQXFCSCxRQUFRLGlDQUFSLENBSDNCOztJQUtRSSwwQixHQUErQkgsUyxDQUEvQkcsMEI7O0lBRUZDLGdDOzs7QUFDSiw0Q0FBWUMscUJBQVosRUFBbUM7QUFBQTs7QUFDakMsUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLDZCQUE2QkosMEJBRG5DO0FBQUEsUUFFTUsscUJBQXFCLElBQUlOLGtCQUFKLENBQXVCRyxxQkFBdkIsRUFBOENDLFlBQTlDLENBRjNCO0FBQUEsUUFHTUcsaUNBQWlDLElBQUlSLFlBQUosQ0FBaUJNLDBCQUFqQixFQUE2Q0QsWUFBN0MsQ0FIdkM7QUFBQSxRQUlNSSxRQUFRLENBQ05GLGtCQURNLEVBRU5DLDhCQUZNLENBSmQ7O0FBRGlDLCtKQVUzQkMsS0FWMkI7QUFXbEM7OztFQVo0Q1osVTs7QUFlL0NhLE9BQU9DLE9BQVAsR0FBaUJSLGdDQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodGVybWluYWxTeW1ib2xDb250ZW50KSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgPSBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19