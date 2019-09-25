'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    OptionalPartPart = require('../../part/nonTerminal/optionalPart'),
    TerminalSymbolPart = require('../../part/terminal/terminalSymbol');

var specialSymbols = lexers.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE,
    TerminalPartRuleName = ruleNames.TerminalPartRuleName;

var TerminalPartRuleDefinition = function (_Definition) {
      _inherits(TerminalPartRuleDefinition, _Definition);

      function TerminalPartRuleDefinition() {
            _classCallCheck(this, TerminalPartRuleDefinition);

            var noWhitespace = false,
                terminalPartRuleName = TerminalPartRuleName,
                noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
                terminalPartRuleNamePart = new RuleNamePart(terminalPartRuleName),
                noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
                optionalNoWhitespaceTerminalSymbolPartPart = new OptionalPartPart(noWhitespaceTerminalSymbolPart),
                parts = [optionalNoWhitespaceTerminalSymbolPartPart, terminalPartRuleNamePart];

            return _possibleConstructorReturn(this, (TerminalPartRuleDefinition.__proto__ || Object.getPrototypeOf(TerminalPartRuleDefinition)).call(this, parts));
      }

      return TerminalPartRuleDefinition;
}(Definition);

module.exports = TerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJUZXJtaW5hbFBhcnRSdWxlTmFtZSIsIlRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwidGVybWluYWxQYXJ0UnVsZU5hbWUiLCJub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQiLCJvcHRpb25hbE5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsaUJBQVIsQ0FBbEI7QUFBQSxJQUNNRSxhQUFhRixRQUFRLGtCQUFSLENBRG5CO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxpQ0FBUixDQUZyQjtBQUFBLElBR01JLG1CQUFtQkosUUFBUSxxQ0FBUixDQUh6QjtBQUFBLElBSU1LLHFCQUFxQkwsUUFBUSxvQ0FBUixDQUozQjs7QUFNTSxJQUFFTSxjQUFGLEdBQXFCUCxNQUFyQixDQUFFTyxjQUFGO0FBQUEsSUFDRUMsYUFERixHQUNvQkQsY0FEcEIsQ0FDRUMsYUFERjtBQUFBLElBRUVDLG9CQUZGLEdBRTJCUCxTQUYzQixDQUVFTyxvQkFGRjs7SUFJQUMsMEI7OztBQUNKLDRDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLGVBQWUsS0FBckI7QUFBQSxnQkFDTUMsdUJBQXVCSCxvQkFEN0I7QUFBQSxnQkFFTUksb0NBQW9DTCxhQUYxQztBQUFBLGdCQUdNTSwyQkFBMkIsSUFBSVYsWUFBSixDQUFpQlEsb0JBQWpCLENBSGpDO0FBQUEsZ0JBSU1HLGlDQUFpQyxJQUFJVCxrQkFBSixDQUF1Qk8saUNBQXZCLEVBQTBERixZQUExRCxDQUp2QztBQUFBLGdCQUtNSyw2Q0FBNkMsSUFBSVgsZ0JBQUosQ0FBcUJVLDhCQUFyQixDQUxuRDtBQUFBLGdCQU1NRSxRQUFRLENBQ05ELDBDQURNLEVBRU5GLHdCQUZNLENBTmQ7O0FBRFksMkpBWU5HLEtBWk07QUFhYjs7O0VBZHNDZCxVOztBQWlCekNlLE9BQU9DLE9BQVAsR0FBaUJULDBCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uLy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydCcpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBUZXJtaW5hbFBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZSA9IFRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9IE5PX1dISVRFU1BBQ0UsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydCh0ZXJtaW5hbFBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgb3B0aW9uYWxOb1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQobm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsTm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0UGFydCxcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbjtcbiJdfQ==