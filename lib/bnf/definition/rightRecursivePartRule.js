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

    var noWhitespace = void 0;

    noWhitespace = true;

    var terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, noWhitespace);

    noWhitespace = false;

    var rightRecursivePartRuleName = RightRecursivePartRuleName,
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
        parts = [terminalSymbolPart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (RightRecursivePartRuleDefinition.__proto__ || Object.getPrototypeOf(RightRecursivePartRuleDefinition)).call(this, parts));
  }

  return RightRecursivePartRuleDefinition;
}(Definition);

module.exports = RightRecursivePartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZVBhcnRSdWxlLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiUnVsZU5hbWVQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsInRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm5vV2hpdGVzcGFjZSIsInRlcm1pbmFsU3ltYm9sUGFydCIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLDhCQUFSLENBRnJCO0FBQUEsSUFHTUcscUJBQXFCSCxRQUFRLGlDQUFSLENBSDNCOztJQUtRSSwwQixHQUErQkgsUyxDQUEvQkcsMEI7O0lBRUZDLGdDOzs7QUFDSiw0Q0FBWUMscUJBQVosRUFBbUM7QUFBQTs7QUFDakMsUUFBSUMscUJBQUo7O0FBRUFBLG1CQUFlLElBQWY7O0FBRUEsUUFBTUMscUJBQXFCLElBQUlMLGtCQUFKLENBQXVCRyxxQkFBdkIsRUFBOENDLFlBQTlDLENBQTNCOztBQUVBQSxtQkFBZSxLQUFmOztBQUVBLFFBQU1FLDZCQUE2QkwsMEJBQW5DO0FBQUEsUUFDTU0saUNBQWlDLElBQUlSLFlBQUosQ0FBaUJPLDBCQUFqQixFQUE2Q0YsWUFBN0MsQ0FEdkM7QUFBQSxRQUVNSSxRQUFRLENBQ05ILGtCQURNLEVBRU5FLDhCQUZNLENBRmQ7O0FBVGlDLCtKQWdCM0JDLEtBaEIyQjtBQWlCbEM7OztFQWxCNENaLFU7O0FBcUIvQ2EsT0FBT0MsT0FBUCxHQUFpQlIsZ0NBQWpCIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFN5bWJvbENvbnRlbnQpIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG5cbiAgICBjb25zdCByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb247XG4iXX0=