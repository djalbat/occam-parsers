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
                partRuleNamePart = new RuleNamePart(partRuleName),
                rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
                openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
                closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
                oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart, noWhitespace),
                parts = [openBracketTerminalSymbolPart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart, rightRecursivePartRuleNamePart];

            return _possibleConstructorReturn(this, (GroupOfPartsDefinition.__proto__ || Object.getPrototypeOf(GroupOfPartsDefinition)).call(this, parts));
      }

      return GroupOfPartsDefinition;
}(Definition);

module.exports = GroupOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJydWxlTmFtZXMiLCJSdWxlTmFtZVBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwib3BlbkJyYWNrZXQiLCJjbG9zZUJyYWNrZXQiLCJQYXJ0UnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIkdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJwYXJ0UnVsZU5hbWUiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0Iiwib25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLDhCQUFSLENBRnJCO0FBQUEsSUFHTUkscUJBQXFCSixRQUFRLG9DQUFSLENBSDNCO0FBQUEsSUFJTUsscUJBQXFCTCxRQUFRLGlDQUFSLENBSjNCOztBQU1NLElBQUVNLFFBQUYsR0FBZVAsTUFBZixDQUFFTyxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLFdBRkYsR0FFZ0NELGNBRmhDLENBRUVDLFdBRkY7QUFBQSxJQUVlQyxZQUZmLEdBRWdDRixjQUZoQyxDQUVlRSxZQUZmO0FBQUEsSUFHRUMsWUFIRixHQUcrQ1IsU0FIL0MsQ0FHRVEsWUFIRjtBQUFBLElBR2dCQywwQkFIaEIsR0FHK0NULFNBSC9DLENBR2dCUywwQkFIaEI7O0lBS0FDLHNCOzs7QUFDSix3Q0FBYztBQUFBOztBQUNaLGdCQUFNQyxlQUFlLEtBQXJCO0FBQUEsZ0JBQ01DLGVBQWVKLFlBRHJCO0FBQUEsZ0JBRU1LLDZCQUE2QkosMEJBRm5DO0FBQUEsZ0JBR01LLG1DQUFtQ1IsV0FIekM7QUFBQSxnQkFJTVMsb0NBQW9DUixZQUoxQztBQUFBLGdCQUtNUyxtQkFBbUIsSUFBSWYsWUFBSixDQUFpQlcsWUFBakIsQ0FMekI7QUFBQSxnQkFNTUssaUNBQWlDLElBQUloQixZQUFKLENBQWlCWSwwQkFBakIsQ0FOdkM7QUFBQSxnQkFPTUssZ0NBQWdDLElBQUlmLGtCQUFKLENBQXVCVyxnQ0FBdkIsRUFBeURILFlBQXpELENBUHRDO0FBQUEsZ0JBUU1RLGlDQUFpQyxJQUFJaEIsa0JBQUosQ0FBdUJZLGlDQUF2QixFQUEwREosWUFBMUQsQ0FSdkM7QUFBQSxnQkFTTVMsaUNBQWlDLElBQUlsQixrQkFBSixDQUF1QmMsZ0JBQXZCLEVBQXlDTCxZQUF6QyxDQVR2QztBQUFBLGdCQVVNVSxRQUFRLENBQ05ILDZCQURNLEVBRU5FLDhCQUZNLEVBR05ELDhCQUhNLEVBSU5GLDhCQUpNLENBVmQ7O0FBRFksbUpBa0JOSSxLQWxCTTtBQW1CYjs7O0VBcEJrQ3RCLFU7O0FBdUJyQ3VCLE9BQU9DLE9BQVAsR0FBaUJiLHNCQUFqQiIsImZpbGUiOiJncm91cE9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgUGFydFJ1bGVOYW1lLCBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBHcm91cE9mUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRSdWxlTmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gb3BlbkJyYWNrZXQsXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gY2xvc2VCcmFja2V0LFxuICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydFJ1bGVOYW1lUGFydCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c0RlZmluaXRpb247XG4iXX0=