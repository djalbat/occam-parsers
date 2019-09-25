'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    OptionalPartPart = require('../../part/nonTerminal/optionalPart'),
    TerminalSymbolPart = require('../../part/terminal/terminalSymbol'),
    ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

var specialSymbols = lexers.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE,
    QuantifierRuleName = ruleNames.QuantifierRuleName,
    TerminalPartRuleName = ruleNames.TerminalPartRuleName;

var TerminalPartRuleDefinition = function (_Definition) {
      _inherits(TerminalPartRuleDefinition, _Definition);

      function TerminalPartRuleDefinition() {
            _classCallCheck(this, TerminalPartRuleDefinition);

            var noWhitespace = false,
                quantifierRuleName = QuantifierRuleName,
                terminalPartRuleName = TerminalPartRuleName,
                noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
                quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
                terminalPartRuleNamePart = new RuleNamePart(terminalPartRuleName),
                noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
                zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
                optionalNoWhitespaceTerminalSymbolPartPart = new OptionalPartPart(noWhitespaceTerminalSymbolPart),
                parts = [optionalNoWhitespaceTerminalSymbolPartPart, terminalPartRuleNamePart, zeroOrMoreQuantifierRuleNamePartsPart];

            return _possibleConstructorReturn(this, (TerminalPartRuleDefinition.__proto__ || Object.getPrototypeOf(TerminalPartRuleDefinition)).call(this, parts));
      }

      return TerminalPartRuleDefinition;
}(Definition);

module.exports = TerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0Iiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiUXVhbnRpZmllclJ1bGVOYW1lIiwiVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm5vV2hpdGVzcGFjZSIsInF1YW50aWZpZXJSdWxlTmFtZSIsInRlcm1pbmFsUGFydFJ1bGVOYW1lIiwibm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50IiwicXVhbnRpZmllclJ1bGVOYW1lUGFydCIsInRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCIsIm5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQiLCJvcHRpb25hbE5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsaUJBQVIsQ0FBbEI7QUFBQSxJQUNNRSxhQUFhRixRQUFRLGtCQUFSLENBRG5CO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxpQ0FBUixDQUZyQjtBQUFBLElBR01JLG1CQUFtQkosUUFBUSxxQ0FBUixDQUh6QjtBQUFBLElBSU1LLHFCQUFxQkwsUUFBUSxvQ0FBUixDQUozQjtBQUFBLElBS01NLHNCQUFzQk4sUUFBUSx3Q0FBUixDQUw1Qjs7QUFPTSxJQUFFTyxjQUFGLEdBQXFCUixNQUFyQixDQUFFUSxjQUFGO0FBQUEsSUFDRUMsYUFERixHQUNvQkQsY0FEcEIsQ0FDRUMsYUFERjtBQUFBLElBRUVDLGtCQUZGLEdBRStDUixTQUYvQyxDQUVFUSxrQkFGRjtBQUFBLElBRXNCQyxvQkFGdEIsR0FFK0NULFNBRi9DLENBRXNCUyxvQkFGdEI7O0lBSUFDLDBCOzs7QUFDSiw0Q0FBYztBQUFBOztBQUNaLGdCQUFNQyxlQUFlLEtBQXJCO0FBQUEsZ0JBQ01DLHFCQUFxQkosa0JBRDNCO0FBQUEsZ0JBRU1LLHVCQUF1Qkosb0JBRjdCO0FBQUEsZ0JBR01LLG9DQUFvQ1AsYUFIMUM7QUFBQSxnQkFJTVEseUJBQXlCLElBQUliLFlBQUosQ0FBaUJVLGtCQUFqQixDQUovQjtBQUFBLGdCQUtNSSwyQkFBMkIsSUFBSWQsWUFBSixDQUFpQlcsb0JBQWpCLENBTGpDO0FBQUEsZ0JBTU1JLGlDQUFpQyxJQUFJYixrQkFBSixDQUF1QlUsaUNBQXZCLEVBQTBESCxZQUExRCxDQU52QztBQUFBLGdCQU9NTyx3Q0FBd0MsSUFBSWIsbUJBQUosQ0FBd0JVLHNCQUF4QixDQVA5QztBQUFBLGdCQVFNSSw2Q0FBNkMsSUFBSWhCLGdCQUFKLENBQXFCYyw4QkFBckIsQ0FSbkQ7QUFBQSxnQkFTTUcsUUFBUSxDQUNORCwwQ0FETSxFQUVOSCx3QkFGTSxFQUdORSxxQ0FITSxDQVRkOztBQURZLDJKQWdCTkUsS0FoQk07QUFpQmI7OztFQWxCc0NuQixVOztBQXFCekNvQixPQUFPQyxPQUFQLEdBQWlCWiwwQkFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi8uLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBRdWFudGlmaWVyUnVsZU5hbWUsIFRlcm1pbmFsUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlTmFtZSA9IFF1YW50aWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZSA9IFRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9IE5PX1dISVRFU1BBQ0UsXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocXVhbnRpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHRlcm1pbmFsUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocXVhbnRpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgb3B0aW9uYWxOb1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQobm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsTm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0UGFydCxcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb247XG4iXX0=