'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    ruleNames = require('../ruleNames'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket,
    PartRuleName = ruleNames.PartRuleName,
    RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var GroupOfPartsDefinition = function (_Definition) {
      _inherits(GroupOfPartsDefinition, _Definition);

      function GroupOfPartsDefinition() {
            _classCallCheck(this, GroupOfPartsDefinition);

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
                parts = [openBracketTerminalSymbolPart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart, rightRecursivePartRuleNamePart];

            return _possibleConstructorReturn(this, (GroupOfPartsDefinition.__proto__ || Object.getPrototypeOf(GroupOfPartsDefinition)).call(this, parts));
      }

      return GroupOfPartsDefinition;
}(Definition);

module.exports = GroupOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJydWxlTmFtZXMiLCJSdWxlTmFtZVBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwib3BlbkJyYWNrZXQiLCJjbG9zZUJyYWNrZXQiLCJQYXJ0UnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIkdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJwYXJ0UnVsZU5hbWUiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0Iiwib25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLDhCQUFSLENBRnJCO0FBQUEsSUFHTUkscUJBQXFCSixRQUFRLG9DQUFSLENBSDNCO0FBQUEsSUFJTUsscUJBQXFCTCxRQUFRLGlDQUFSLENBSjNCOztBQU1NLElBQUVNLFFBQUYsR0FBZVAsTUFBZixDQUFFTyxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLFdBRkYsR0FFZ0NELGNBRmhDLENBRUVDLFdBRkY7QUFBQSxJQUVlQyxZQUZmLEdBRWdDRixjQUZoQyxDQUVlRSxZQUZmO0FBQUEsSUFHRUMsWUFIRixHQUcrQ1IsU0FIL0MsQ0FHRVEsWUFIRjtBQUFBLElBR2dCQywwQkFIaEIsR0FHK0NULFNBSC9DLENBR2dCUywwQkFIaEI7O0lBS0FDLHNCOzs7QUFDSix3Q0FBYztBQUFBOztBQUNaLGdCQUFNQyxlQUFlLEtBQXJCO0FBQUEsZ0JBQ01DLGVBQWVKLFlBRHJCO0FBQUEsZ0JBRU1LLDZCQUE2QkosMEJBRm5DO0FBQUEsZ0JBR01LLG1DQUFtQ1IsV0FIekM7QUFBQSxnQkFJTVMsb0NBQW9DUixZQUoxQztBQUFBLGdCQUtNUyxtQkFBbUIsSUFBSWYsWUFBSixDQUFpQlcsWUFBakIsRUFBK0JELFlBQS9CLENBTHpCO0FBQUEsZ0JBTU1NLGlDQUFpQyxJQUFJaEIsWUFBSixDQUFpQlksMEJBQWpCLEVBQTZDRixZQUE3QyxDQU52QztBQUFBLGdCQU9NTyxnQ0FBZ0MsSUFBSWYsa0JBQUosQ0FBdUJXLGdDQUF2QixFQUF5REgsWUFBekQsQ0FQdEM7QUFBQSxnQkFRTVEsaUNBQWlDLElBQUloQixrQkFBSixDQUF1QlksaUNBQXZCLEVBQTBESixZQUExRCxDQVJ2QztBQUFBLGdCQVNNUyxpQ0FBaUMsSUFBSWxCLGtCQUFKLENBQXVCYyxnQkFBdkIsRUFBeUNMLFlBQXpDLENBVHZDO0FBQUEsZ0JBVU1VLFFBQVEsQ0FDTkgsNkJBRE0sRUFFTkUsOEJBRk0sRUFHTkQsOEJBSE0sRUFJTkYsOEJBSk0sQ0FWZDs7QUFEWSxtSkFrQk5JLEtBbEJNO0FBbUJiOzs7RUFwQmtDdEIsVTs7QUF1QnJDdUIsT0FBT0MsT0FBUCxHQUFpQmIsc0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IG9wZW5CcmFja2V0LCBjbG9zZUJyYWNrZXQgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBQYXJ0UnVsZU5hbWUsIFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcGFydFJ1bGVOYW1lID0gUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lID0gUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydFJ1bGVOYW1lUGFydCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c0RlZmluaXRpb247XG4iXX0=