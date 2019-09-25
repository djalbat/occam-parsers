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
                parts = [noWhitespaceTerminalSymbolPart, terminalPartRuleNamePart];

            return _possibleConstructorReturn(this, (TerminalPartRuleDefinition.__proto__ || Object.getPrototypeOf(TerminalPartRuleDefinition)).call(this, parts));
      }

      return TerminalPartRuleDefinition;
}(Definition);

module.exports = TerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsInNwZWNpYWxTeW1ib2xzIiwiTk9fV0hJVEVTUEFDRSIsIlRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZSIsIm5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCIsInRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCIsIm5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWUQsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01FLGFBQWFGLFFBQVEsa0JBQVIsQ0FEbkI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGlDQUFSLENBRnJCO0FBQUEsSUFHTUkscUJBQXFCSixRQUFRLG9DQUFSLENBSDNCOztBQUtNLElBQUVLLGNBQUYsR0FBcUJOLE1BQXJCLENBQUVNLGNBQUY7QUFBQSxJQUNFQyxhQURGLEdBQ29CRCxjQURwQixDQUNFQyxhQURGO0FBQUEsSUFFRUMsb0JBRkYsR0FFMkJOLFNBRjNCLENBRUVNLG9CQUZGOztJQUlBQywwQjs7O0FBQ0osNENBQWM7QUFBQTs7QUFDWixnQkFBTUMsZUFBZSxLQUFyQjtBQUFBLGdCQUNNQyx1QkFBdUJILG9CQUQ3QjtBQUFBLGdCQUVNSSxvQ0FBb0NMLGFBRjFDO0FBQUEsZ0JBR01NLDJCQUEyQixJQUFJVCxZQUFKLENBQWlCTyxvQkFBakIsQ0FIakM7QUFBQSxnQkFJTUcsaUNBQWlDLElBQUlULGtCQUFKLENBQXVCTyxpQ0FBdkIsRUFBMERGLFlBQTFELENBSnZDO0FBQUEsZ0JBS01LLFFBQVEsQ0FDTkQsOEJBRE0sRUFFTkQsd0JBRk0sQ0FMZDs7QUFEWSwySkFXTkUsS0FYTTtBQVliOzs7RUFic0NaLFU7O0FBZ0J6Q2EsT0FBT0MsT0FBUCxHQUFpQlIsMEJBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBUZXJtaW5hbFBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZSA9IFRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9IE5PX1dISVRFU1BBQ0UsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydCh0ZXJtaW5hbFBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb247XG4iXX0=