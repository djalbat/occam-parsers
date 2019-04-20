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

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket,
    PartRuleName = ruleNames.PartRuleName,
    RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var GroupOfPartsPartRuleDefinition = function (_Definition) {
      _inherits(GroupOfPartsPartRuleDefinition, _Definition);

      function GroupOfPartsPartRuleDefinition() {
            _classCallCheck(this, GroupOfPartsPartRuleDefinition);

            var lookAhead = false,
                noWhitespace = false,
                partRuleName = PartRuleName,
                rightRecursivePartRuleName = RightRecursivePartRuleName,
                openBracketTerminalSymbolContent = openBracket,
                closeBracketTerminalSymbolContent = closeBracket,
                partRuleNamePart = new RuleNamePart(partRuleName, lookAhead, noWhitespace),
                rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, lookAhead, noWhitespace),
                openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
                closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
                oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart, noWhitespace),
                parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart, rightRecursivePartRuleNamePart];

            return _possibleConstructorReturn(this, (GroupOfPartsPartRuleDefinition.__proto__ || Object.getPrototypeOf(GroupOfPartsPartRuleDefinition)).call(this, parts));
      }

      return GroupOfPartsPartRuleDefinition;
}(Definition);

module.exports = GroupOfPartsPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwib3BlbkJyYWNrZXQiLCJjbG9zZUJyYWNrZXQiLCJQYXJ0UnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIkdyb3VwT2ZQYXJ0c1BhcnRSdWxlRGVmaW5pdGlvbiIsImxvb2tBaGVhZCIsIm5vV2hpdGVzcGFjZSIsInBhcnRSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJwYXJ0UnVsZU5hbWVQYXJ0IiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsaUJBQVIsQ0FBbEI7QUFBQSxJQUNNRSxhQUFhRixRQUFRLGtCQUFSLENBRG5CO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxpQ0FBUixDQUZyQjtBQUFBLElBR01JLHFCQUFxQkosUUFBUSxvQ0FBUixDQUgzQjtBQUFBLElBSU1LLHFCQUFxQkwsUUFBUSx1Q0FBUixDQUozQjs7QUFNTSxJQUFFTSxRQUFGLEdBQWVQLE1BQWYsQ0FBRU8sUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxXQUZGLEdBRWdDRCxjQUZoQyxDQUVFQyxXQUZGO0FBQUEsSUFFZUMsWUFGZixHQUVnQ0YsY0FGaEMsQ0FFZUUsWUFGZjtBQUFBLElBR0VDLFlBSEYsR0FHK0NULFNBSC9DLENBR0VTLFlBSEY7QUFBQSxJQUdnQkMsMEJBSGhCLEdBRytDVixTQUgvQyxDQUdnQlUsMEJBSGhCOztJQUtBQyw4Qjs7O0FBQ0osZ0RBQWM7QUFBQTs7QUFDWixnQkFBTUMsWUFBWSxLQUFsQjtBQUFBLGdCQUNNQyxlQUFlLEtBRHJCO0FBQUEsZ0JBRU1DLGVBQWVMLFlBRnJCO0FBQUEsZ0JBR01NLDZCQUE2QkwsMEJBSG5DO0FBQUEsZ0JBSU1NLG1DQUFtQ1QsV0FKekM7QUFBQSxnQkFLTVUsb0NBQW9DVCxZQUwxQztBQUFBLGdCQU1NVSxtQkFBbUIsSUFBSWhCLFlBQUosQ0FBaUJZLFlBQWpCLEVBQStCRixTQUEvQixFQUEwQ0MsWUFBMUMsQ0FOekI7QUFBQSxnQkFPTU0saUNBQWlDLElBQUlqQixZQUFKLENBQWlCYSwwQkFBakIsRUFBNkNILFNBQTdDLEVBQXdEQyxZQUF4RCxDQVB2QztBQUFBLGdCQVFNTyxnQ0FBZ0MsSUFBSWpCLGtCQUFKLENBQXVCYSxnQ0FBdkIsRUFBeURILFlBQXpELENBUnRDO0FBQUEsZ0JBU01RLGlDQUFpQyxJQUFJbEIsa0JBQUosQ0FBdUJjLGlDQUF2QixFQUEwREosWUFBMUQsQ0FUdkM7QUFBQSxnQkFVTVMsaUNBQWlDLElBQUlsQixrQkFBSixDQUF1QmMsZ0JBQXZCLEVBQXlDTCxZQUF6QyxDQVZ2QztBQUFBLGdCQVdNVSxRQUFRLENBQ05ILDZCQURNLEVBRU5GLGdCQUZNLEVBR05JLDhCQUhNLEVBSU5ELDhCQUpNLEVBS05GLDhCQUxNLENBWGQ7O0FBRFksbUtBb0JOSSxLQXBCTTtBQXFCYjs7O0VBdEIwQ3RCLFU7O0FBeUI3Q3VCLE9BQU9DLE9BQVAsR0FBaUJkLDhCQUFqQiIsImZpbGUiOiJncm91cE9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi8uLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgUGFydFJ1bGVOYW1lLCBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBHcm91cE9mUGFydHNQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcGFydFJ1bGVOYW1lID0gUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lID0gUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lLCBsb29rQWhlYWQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSwgbG9va0FoZWFkLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnRSdWxlTmFtZVBhcnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19