'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../../part/terminal/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE,
    PartRuleName = ruleNames.PartRuleName,
    RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var NoWhitespacePartRuleDefinition = function (_Definition) {
      _inherits(NoWhitespacePartRuleDefinition, _Definition);

      function NoWhitespacePartRuleDefinition() {
            _classCallCheck(this, NoWhitespacePartRuleDefinition);

            var lookAhead = false,
                noWhitespace = false,
                partRuleName = PartRuleName,
                rightRecursivePartRuleName = RightRecursivePartRuleName,
                noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
                partRuleNamePart = new RuleNamePart(partRuleName, lookAhead, noWhitespace),
                rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, lookAhead, noWhitespace),
                noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
                parts = [noWhitespaceTerminalSymbolPart, partRuleNamePart, rightRecursivePartRuleNamePart];

            return _possibleConstructorReturn(this, (NoWhitespacePartRuleDefinition.__proto__ || Object.getPrototypeOf(NoWhitespacePartRuleDefinition)).call(this, parts));
      }

      return NoWhitespacePartRuleDefinition;
}(Definition);

module.exports = NoWhitespacePartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub1doaXRlc3BhY2UuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiTk9fV0hJVEVTUEFDRSIsIlBhcnRSdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGVEZWZpbml0aW9uIiwibG9va0FoZWFkIiwibm9XaGl0ZXNwYWNlIiwicGFydFJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUiLCJub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJwYXJ0UnVsZU5hbWVQYXJ0IiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0Iiwibm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGlCQUFSLENBQWxCO0FBQUEsSUFDTUUsYUFBYUYsUUFBUSxrQkFBUixDQURuQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsaUNBQVIsQ0FGckI7QUFBQSxJQUdNSSxxQkFBcUJKLFFBQVEsb0NBQVIsQ0FIM0I7O0FBS00sSUFBRUssUUFBRixHQUFlTixNQUFmLENBQUVNLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsYUFGRixHQUVvQkQsY0FGcEIsQ0FFRUMsYUFGRjtBQUFBLElBR0VDLFlBSEYsR0FHK0NQLFNBSC9DLENBR0VPLFlBSEY7QUFBQSxJQUdnQkMsMEJBSGhCLEdBRytDUixTQUgvQyxDQUdnQlEsMEJBSGhCOztJQUtBQyw4Qjs7O0FBQ0osZ0RBQWM7QUFBQTs7QUFDWixnQkFBTUMsWUFBWSxLQUFsQjtBQUFBLGdCQUNNQyxlQUFlLEtBRHJCO0FBQUEsZ0JBRU1DLGVBQWVMLFlBRnJCO0FBQUEsZ0JBR01NLDZCQUE2QkwsMEJBSG5DO0FBQUEsZ0JBSU1NLG9DQUFvQ1IsYUFKMUM7QUFBQSxnQkFLTVMsbUJBQW1CLElBQUliLFlBQUosQ0FBaUJVLFlBQWpCLEVBQStCRixTQUEvQixFQUEwQ0MsWUFBMUMsQ0FMekI7QUFBQSxnQkFNTUssaUNBQWlDLElBQUlkLFlBQUosQ0FBaUJXLDBCQUFqQixFQUE2Q0gsU0FBN0MsRUFBd0RDLFlBQXhELENBTnZDO0FBQUEsZ0JBT01NLGlDQUFpQyxJQUFJZCxrQkFBSixDQUF1QlcsaUNBQXZCLEVBQTBESCxZQUExRCxDQVB2QztBQUFBLGdCQVFNTyxRQUFRLENBQ05ELDhCQURNLEVBRU5GLGdCQUZNLEVBR05DLDhCQUhNLENBUmQ7O0FBRFksbUtBZU5FLEtBZk07QUFnQmI7OztFQWpCMENqQixVOztBQW9CN0NrQixPQUFPQyxPQUFQLEdBQWlCWCw4QkFBakIiLCJmaWxlIjoibm9XaGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFBhcnRSdWxlTmFtZSwgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTm9XaGl0ZXNwYWNlUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRSdWxlTmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9IE5PX1dISVRFU1BBQ0UsXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lLCBsb29rQWhlYWQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSwgbG9va0FoZWFkLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQobm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VQYXJ0UnVsZURlZmluaXRpb247XG4iXX0=