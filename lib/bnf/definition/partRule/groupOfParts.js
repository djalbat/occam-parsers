'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../../part/terminal/terminalSymbol'),
    OneOrMorePartsPart = require('../../part/nonTerminal/oneOrMoreParts');

var specialSymbols = lexers.specialSymbols,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket,
    PartRuleName = ruleNames.PartRuleName,
    RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var GroupOfPartsPartRuleDefinition = function (_Definition) {
      _inherits(GroupOfPartsPartRuleDefinition, _Definition);

      function GroupOfPartsPartRuleDefinition() {
            _classCallCheck(this, GroupOfPartsPartRuleDefinition);

            var noWhitespace = false,
                partRuleName = PartRuleName,
                rightRecursivePartRuleName = RightRecursivePartRuleName,
                openBracketTerminalSymbolContent = openBracket,
                closeBracketTerminalSymbolContent = closeBracket,
                partRuleNamePart = new RuleNamePart(partRuleName, noWhitespace),
                rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
                openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
                closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
                oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart, noWhitespace),
                parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart, rightRecursivePartRuleNamePart];

            return _possibleConstructorReturn(this, (GroupOfPartsPartRuleDefinition.__proto__ || Object.getPrototypeOf(GroupOfPartsPartRuleDefinition)).call(this, parts));
      }

      return GroupOfPartsPartRuleDefinition;
}(Definition);

module.exports = GroupOfPartsPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJzcGVjaWFsU3ltYm9scyIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiUGFydFJ1bGVOYW1lIiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUiLCJHcm91cE9mUGFydHNQYXJ0UnVsZURlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJwYXJ0UnVsZU5hbWUiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0Iiwib25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGlCQUFSLENBQWxCO0FBQUEsSUFDTUUsYUFBYUYsUUFBUSxrQkFBUixDQURuQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsaUNBQVIsQ0FGckI7QUFBQSxJQUdNSSxxQkFBcUJKLFFBQVEsb0NBQVIsQ0FIM0I7QUFBQSxJQUlNSyxxQkFBcUJMLFFBQVEsdUNBQVIsQ0FKM0I7O0FBTU0sSUFBRU0sY0FBRixHQUFxQlAsTUFBckIsQ0FBRU8sY0FBRjtBQUFBLElBQ0VDLFdBREYsR0FDZ0NELGNBRGhDLENBQ0VDLFdBREY7QUFBQSxJQUNlQyxZQURmLEdBQ2dDRixjQURoQyxDQUNlRSxZQURmO0FBQUEsSUFFRUMsWUFGRixHQUUrQ1IsU0FGL0MsQ0FFRVEsWUFGRjtBQUFBLElBRWdCQywwQkFGaEIsR0FFK0NULFNBRi9DLENBRWdCUywwQkFGaEI7O0lBSUFDLDhCOzs7QUFDSixnREFBYztBQUFBOztBQUNaLGdCQUFNQyxlQUFlLEtBQXJCO0FBQUEsZ0JBQ01DLGVBQWVKLFlBRHJCO0FBQUEsZ0JBRU1LLDZCQUE2QkosMEJBRm5DO0FBQUEsZ0JBR01LLG1DQUFtQ1IsV0FIekM7QUFBQSxnQkFJTVMsb0NBQW9DUixZQUoxQztBQUFBLGdCQUtNUyxtQkFBbUIsSUFBSWQsWUFBSixDQUFpQlUsWUFBakIsRUFBK0JELFlBQS9CLENBTHpCO0FBQUEsZ0JBTU1NLGlDQUFpQyxJQUFJZixZQUFKLENBQWlCVywwQkFBakIsRUFBNkNGLFlBQTdDLENBTnZDO0FBQUEsZ0JBT01PLGdDQUFnQyxJQUFJZixrQkFBSixDQUF1QlcsZ0NBQXZCLEVBQXlESCxZQUF6RCxDQVB0QztBQUFBLGdCQVFNUSxpQ0FBaUMsSUFBSWhCLGtCQUFKLENBQXVCWSxpQ0FBdkIsRUFBMERKLFlBQTFELENBUnZDO0FBQUEsZ0JBU01TLGlDQUFpQyxJQUFJaEIsa0JBQUosQ0FBdUJZLGdCQUF2QixFQUF5Q0wsWUFBekMsQ0FUdkM7QUFBQSxnQkFVTVUsUUFBUSxDQUNOSCw2QkFETSxFQUVORixnQkFGTSxFQUdOSSw4QkFITSxFQUlORCw4QkFKTSxFQUtORiw4QkFMTSxDQVZkOztBQURZLG1LQW1CTkksS0FuQk07QUFvQmI7OztFQXJCMENwQixVOztBQXdCN0NxQixPQUFPQyxPQUFQLEdBQWlCYiw4QkFBakIiLCJmaWxlIjoiZ3JvdXBPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IG9wZW5CcmFja2V0LCBjbG9zZUJyYWNrZXQgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBQYXJ0UnVsZU5hbWUsIFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c1BhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0UnVsZU5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgPSBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IG9wZW5CcmFja2V0LFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGNsb3NlQnJhY2tldCxcbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgb25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0UnVsZU5hbWVQYXJ0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c1BhcnRSdWxlRGVmaW5pdGlvbjtcbiJdfQ==