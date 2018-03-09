'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    ruleNames = require('../ruleNames'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    separator = specialSymbols.separator,
    terminator = specialSymbols.terminator,
    RuleNameRuleName = ruleNames.RuleNameRuleName,
    DefinitionsRuleName = ruleNames.DefinitionsRuleName;

var RuleDefinition = function (_Definition) {
      _inherits(RuleDefinition, _Definition);

      function RuleDefinition() {
            _classCallCheck(this, RuleDefinition);

            var noWhitespace = false,
                separatorTerminalSymbolContent = separator,
                terminatorTerminalSymbolContent = terminator,
                ruleNameRuleName = RuleNameRuleName,
                definitionsRuleName = DefinitionsRuleName,
                separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
                terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent, noWhitespace),
                definitionsRuleNamePart = new RuleNamePart(definitionsRuleName),
                ruleNameRuleNamePart = new RuleNamePart(ruleNameRuleName),
                parts = [ruleNameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];

            return _possibleConstructorReturn(this, (RuleDefinition.__proto__ || Object.getPrototypeOf(RuleDefinition)).call(this, parts));
      }

      return RuleDefinition;
}(Definition);

module.exports = RuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwicnVsZU5hbWVzIiwiUnVsZU5hbWVQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsInNlcGFyYXRvciIsInRlcm1pbmF0b3IiLCJSdWxlTmFtZVJ1bGVOYW1lIiwiRGVmaW5pdGlvbnNSdWxlTmFtZSIsIlJ1bGVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwidGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInJ1bGVOYW1lUnVsZU5hbWUiLCJkZWZpbml0aW9uc1J1bGVOYW1lIiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwidGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsImRlZmluaXRpb25zUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGFBQWFELFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsOEJBQVIsQ0FGckI7QUFBQSxJQUdNSSxxQkFBcUJKLFFBQVEsaUNBQVIsQ0FIM0I7O0FBS00sSUFBRUssUUFBRixHQUFlTixNQUFmLENBQUVNLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsU0FGRixHQUU0QkQsY0FGNUIsQ0FFRUMsU0FGRjtBQUFBLElBRWFDLFVBRmIsR0FFNEJGLGNBRjVCLENBRWFFLFVBRmI7QUFBQSxJQUdFQyxnQkFIRixHQUc0Q1AsU0FINUMsQ0FHRU8sZ0JBSEY7QUFBQSxJQUdvQkMsbUJBSHBCLEdBRzRDUixTQUg1QyxDQUdvQlEsbUJBSHBCOztJQUtBQyxjOzs7QUFDSixnQ0FBYztBQUFBOztBQUNaLGdCQUFNQyxlQUFlLEtBQXJCO0FBQUEsZ0JBQ01DLGlDQUFpQ04sU0FEdkM7QUFBQSxnQkFFTU8sa0NBQWtDTixVQUZ4QztBQUFBLGdCQUdNTyxtQkFBbUJOLGdCQUh6QjtBQUFBLGdCQUlNTyxzQkFBc0JOLG1CQUo1QjtBQUFBLGdCQUtNTyw4QkFBOEIsSUFBSWIsa0JBQUosQ0FBdUJTLDhCQUF2QixFQUF1REQsWUFBdkQsQ0FMcEM7QUFBQSxnQkFNTU0sK0JBQStCLElBQUlkLGtCQUFKLENBQXVCVSwrQkFBdkIsRUFBd0RGLFlBQXhELENBTnJDO0FBQUEsZ0JBT01PLDBCQUEwQixJQUFJaEIsWUFBSixDQUFpQmEsbUJBQWpCLENBUGhDO0FBQUEsZ0JBUU1JLHVCQUF1QixJQUFJakIsWUFBSixDQUFpQlksZ0JBQWpCLENBUjdCO0FBQUEsZ0JBU01NLFFBQVEsQ0FDTkQsb0JBRE0sRUFFTkgsMkJBRk0sRUFHTkUsdUJBSE0sRUFJTkQsNEJBSk0sQ0FUZDs7QUFEWSxtSUFpQk5HLEtBakJNO0FBa0JiOzs7RUFuQjBCcEIsVTs7QUFzQjdCcUIsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHNlcGFyYXRvciwgdGVybWluYXRvciB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFJ1bGVOYW1lUnVsZU5hbWUsIERlZmluaXRpb25zUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gc2VwYXJhdG9yLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB0ZXJtaW5hdG9yLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWUgPSBSdWxlTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWUgPSBEZWZpbml0aW9uc1J1bGVOYW1lLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRlZmluaXRpb25zUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZVJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVEZWZpbml0aW9uO1xuIl19