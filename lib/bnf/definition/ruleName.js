'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    OptionalPartPart = require('../part/nonTerminal/optionalPart'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol'),
    SignificantTokenTypePart = require('../part/terminal/significantTokenType');

var BNFLexer = lexers.BNFLexer,
    types = lexers.types,
    nameType = types.nameType,
    specialSymbols = BNFLexer.specialSymbols,
    exclamationMark = specialSymbols.exclamationMark,
    RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var RuleNameDefinition = function (_Definition) {
      _inherits(RuleNameDefinition, _Definition);

      function RuleNameDefinition() {
            _classCallCheck(this, RuleNameDefinition);

            var noWhitespace = void 0;

            noWhitespace = false;

            var nameSignificantTokenType = nameType,
                ///
            nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType, noWhitespace);

            noWhitespace = true;

            var exclamationMarkTerminalSymbolContent = exclamationMark,
                ///
            exclamationMarkTerminalSymbolPart = new TerminalSymbolPart(exclamationMarkTerminalSymbolContent, noWhitespace);

            var lookAhead = false,
                rightRecursivePartRuleName = RightRecursivePartRuleName,
                exclamationMarkTerminalSymbolPartOptionalPart = new OptionalPartPart(exclamationMarkTerminalSymbolPart),
                rightRecursivePartRuleNameRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, lookAhead, noWhitespace),
                parts = [nameSignificantTokenTypePart, exclamationMarkTerminalSymbolPartOptionalPart, rightRecursivePartRuleNameRuleNamePart];

            return _possibleConstructorReturn(this, (RuleNameDefinition.__proto__ || Object.getPrototypeOf(RuleNameDefinition)).call(this, parts));
      }

      return RuleNameDefinition;
}(Definition);

module.exports = RuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJCTkZMZXhlciIsInR5cGVzIiwibmFtZVR5cGUiLCJzcGVjaWFsU3ltYm9scyIsImV4Y2xhbWF0aW9uTWFyayIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwibmFtZVNpZ25pZmljYW50VG9rZW5UeXBlIiwibmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsImV4Y2xhbWF0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsImV4Y2xhbWF0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydCIsImxvb2tBaGVhZCIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwiZXhjbGFtYXRpb25NYXJrVGVybWluYWxTeW1ib2xQYXJ0T3B0aW9uYWxQYXJ0IiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01FLGFBQWFGLFFBQVEsZUFBUixDQURuQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsOEJBQVIsQ0FGckI7QUFBQSxJQUdNSSxtQkFBbUJKLFFBQVEsa0NBQVIsQ0FIekI7QUFBQSxJQUlNSyxxQkFBcUJMLFFBQVEsaUNBQVIsQ0FKM0I7QUFBQSxJQUtNTSwyQkFBMkJOLFFBQVEsdUNBQVIsQ0FMakM7O0lBT1FPLFEsR0FBb0JSLE0sQ0FBcEJRLFE7SUFBVUMsSyxHQUFVVCxNLENBQVZTLEs7SUFDVkMsUSxHQUFhRCxLLENBQWJDLFE7SUFDQUMsYyxHQUFtQkgsUSxDQUFuQkcsYztJQUNBQyxlLEdBQW9CRCxjLENBQXBCQyxlO0lBQ0FDLDBCLEdBQStCWCxTLENBQS9CVywwQjs7SUFFRkMsa0I7OztBQUNKLG9DQUFjO0FBQUE7O0FBQ1osZ0JBQUlDLHFCQUFKOztBQUVBQSwyQkFBZSxLQUFmOztBQUVBLGdCQUFNQywyQkFBMkJOLFFBQWpDO0FBQUEsZ0JBQTRDO0FBQ3RDTywyQ0FBK0IsSUFBSVYsd0JBQUosQ0FBNkJTLHdCQUE3QixFQUF1REQsWUFBdkQsQ0FEckM7O0FBR0FBLDJCQUFlLElBQWY7O0FBRUEsZ0JBQU1HLHVDQUF1Q04sZUFBN0M7QUFBQSxnQkFBOEQ7QUFDeERPLGdEQUFvQyxJQUFJYixrQkFBSixDQUF1Qlksb0NBQXZCLEVBQTZESCxZQUE3RCxDQUQxQzs7QUFHQSxnQkFBTUssWUFBWSxLQUFsQjtBQUFBLGdCQUNNQyw2QkFBNkJSLDBCQURuQztBQUFBLGdCQUVNUyxnREFBZ0QsSUFBSWpCLGdCQUFKLENBQXFCYyxpQ0FBckIsQ0FGdEQ7QUFBQSxnQkFHTUkseUNBQXlDLElBQUluQixZQUFKLENBQWlCaUIsMEJBQWpCLEVBQTZDRCxTQUE3QyxFQUF3REwsWUFBeEQsQ0FIL0M7QUFBQSxnQkFJTVMsUUFBUSxDQUNOUCw0QkFETSxFQUVOSyw2Q0FGTSxFQUdOQyxzQ0FITSxDQUpkOztBQWJZLDJJQXVCTkMsS0F2Qk07QUF3QmI7OztFQXpCOEJyQixVOztBQTRCakNzQixPQUFPQyxPQUFQLEdBQWlCWixrQkFBakIiLCJmaWxlIjoicnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY29uc3QgeyBCTkZMZXhlciwgdHlwZXMgfSA9IGxleGVycyxcbiAgICAgIHsgbmFtZVR5cGUgfSA9IHR5cGVzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFJ1bGVOYW1lRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG5cbiAgICBjb25zdCBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUgPSBuYW1lVHlwZSwgIC8vL1xuICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG5cbiAgICBjb25zdCBleGNsYW1hdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBleGNsYW1hdGlvbk1hcmssIC8vL1xuICAgICAgICAgIGV4Y2xhbWF0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoZXhjbGFtYXRpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgPSBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBleGNsYW1hdGlvbk1hcmtUZXJtaW5hbFN5bWJvbFBhcnRPcHRpb25hbFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChleGNsYW1hdGlvbk1hcmtUZXJtaW5hbFN5bWJvbFBhcnQpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSwgbG9va0FoZWFkLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCxcbiAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydE9wdGlvbmFsUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVEZWZpbml0aW9uO1xuIl19