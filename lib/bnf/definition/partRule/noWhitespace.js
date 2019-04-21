'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../../part/terminal/terminalSymbol');

var specialSymbols = lexers.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE,
    PartRuleName = ruleNames.PartRuleName,
    RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var NoWhitespacePartRuleDefinition = function (_Definition) {
      _inherits(NoWhitespacePartRuleDefinition, _Definition);

      function NoWhitespacePartRuleDefinition() {
            _classCallCheck(this, NoWhitespacePartRuleDefinition);

            var noWhitespace = false,
                partRuleName = PartRuleName,
                rightRecursivePartRuleName = RightRecursivePartRuleName,
                noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
                partRuleNamePart = new RuleNamePart(partRuleName, noWhitespace),
                rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
                noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
                parts = [noWhitespaceTerminalSymbolPart, partRuleNamePart, rightRecursivePartRuleNamePart];

            return _possibleConstructorReturn(this, (NoWhitespacePartRuleDefinition.__proto__ || Object.getPrototypeOf(NoWhitespacePartRuleDefinition)).call(this, parts));
      }

      return NoWhitespacePartRuleDefinition;
}(Definition);

module.exports = NoWhitespacePartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub1doaXRlc3BhY2UuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJQYXJ0UnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlRGVmaW5pdGlvbiIsIm5vV2hpdGVzcGFjZSIsInBhcnRSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwibm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCIsIm5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWUQsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01FLGFBQWFGLFFBQVEsa0JBQVIsQ0FEbkI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGlDQUFSLENBRnJCO0FBQUEsSUFHTUkscUJBQXFCSixRQUFRLG9DQUFSLENBSDNCOztBQUtNLElBQUVLLGNBQUYsR0FBcUJOLE1BQXJCLENBQUVNLGNBQUY7QUFBQSxJQUNFQyxhQURGLEdBQ29CRCxjQURwQixDQUNFQyxhQURGO0FBQUEsSUFFRUMsWUFGRixHQUUrQ04sU0FGL0MsQ0FFRU0sWUFGRjtBQUFBLElBRWdCQywwQkFGaEIsR0FFK0NQLFNBRi9DLENBRWdCTywwQkFGaEI7O0lBSUFDLDhCOzs7QUFDSixnREFBYztBQUFBOztBQUNaLGdCQUFNQyxlQUFlLEtBQXJCO0FBQUEsZ0JBQ01DLGVBQWVKLFlBRHJCO0FBQUEsZ0JBRU1LLDZCQUE2QkosMEJBRm5DO0FBQUEsZ0JBR01LLG9DQUFvQ1AsYUFIMUM7QUFBQSxnQkFJTVEsbUJBQW1CLElBQUlYLFlBQUosQ0FBaUJRLFlBQWpCLEVBQStCRCxZQUEvQixDQUp6QjtBQUFBLGdCQUtNSyxpQ0FBaUMsSUFBSVosWUFBSixDQUFpQlMsMEJBQWpCLEVBQTZDRixZQUE3QyxDQUx2QztBQUFBLGdCQU1NTSxpQ0FBaUMsSUFBSVosa0JBQUosQ0FBdUJTLGlDQUF2QixFQUEwREgsWUFBMUQsQ0FOdkM7QUFBQSxnQkFPTU8sUUFBUSxDQUNORCw4QkFETSxFQUVORixnQkFGTSxFQUdOQyw4QkFITSxDQVBkOztBQURZLG1LQWNORSxLQWRNO0FBZWI7OztFQWhCMENmLFU7O0FBbUI3Q2dCLE9BQU9DLE9BQVAsR0FBaUJWLDhCQUFqQiIsImZpbGUiOiJub1doaXRlc3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi8uLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFBhcnRSdWxlTmFtZSwgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTm9XaGl0ZXNwYWNlUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRSdWxlTmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9IE5PX1dISVRFU1BBQ0UsXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZVBhcnRSdWxlRGVmaW5pdGlvbjtcbiJdfQ==