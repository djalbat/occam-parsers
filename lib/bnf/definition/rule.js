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
                definitionsRuleNamePart = new RuleNamePart(definitionsRuleName, noWhitespace),
                ruleNameRuleNamePart = new RuleNamePart(ruleNameRuleName, noWhitespace),
                parts = [ruleNameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];

            return _possibleConstructorReturn(this, (RuleDefinition.__proto__ || Object.getPrototypeOf(RuleDefinition)).call(this, parts));
      }

      return RuleDefinition;
}(Definition);

module.exports = RuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwicnVsZU5hbWVzIiwiUnVsZU5hbWVQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsInNlcGFyYXRvciIsInRlcm1pbmF0b3IiLCJSdWxlTmFtZVJ1bGVOYW1lIiwiRGVmaW5pdGlvbnNSdWxlTmFtZSIsIlJ1bGVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwidGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInJ1bGVOYW1lUnVsZU5hbWUiLCJkZWZpbml0aW9uc1J1bGVOYW1lIiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwidGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsImRlZmluaXRpb25zUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGFBQWFELFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsOEJBQVIsQ0FGckI7QUFBQSxJQUdNSSxxQkFBcUJKLFFBQVEsaUNBQVIsQ0FIM0I7O0FBS00sSUFBRUssUUFBRixHQUFlTixNQUFmLENBQUVNLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsU0FGRixHQUU0QkQsY0FGNUIsQ0FFRUMsU0FGRjtBQUFBLElBRWFDLFVBRmIsR0FFNEJGLGNBRjVCLENBRWFFLFVBRmI7QUFBQSxJQUdFQyxnQkFIRixHQUc0Q1AsU0FINUMsQ0FHRU8sZ0JBSEY7QUFBQSxJQUdvQkMsbUJBSHBCLEdBRzRDUixTQUg1QyxDQUdvQlEsbUJBSHBCOztJQUtBQyxjOzs7QUFDSixnQ0FBYztBQUFBOztBQUNaLGdCQUFNQyxlQUFlLEtBQXJCO0FBQUEsZ0JBQ01DLGlDQUFpQ04sU0FEdkM7QUFBQSxnQkFFTU8sa0NBQWtDTixVQUZ4QztBQUFBLGdCQUdNTyxtQkFBbUJOLGdCQUh6QjtBQUFBLGdCQUlNTyxzQkFBc0JOLG1CQUo1QjtBQUFBLGdCQUtNTyw4QkFBOEIsSUFBSWIsa0JBQUosQ0FBdUJTLDhCQUF2QixFQUF1REQsWUFBdkQsQ0FMcEM7QUFBQSxnQkFNTU0sK0JBQStCLElBQUlkLGtCQUFKLENBQXVCVSwrQkFBdkIsRUFBd0RGLFlBQXhELENBTnJDO0FBQUEsZ0JBT01PLDBCQUEwQixJQUFJaEIsWUFBSixDQUFpQmEsbUJBQWpCLEVBQXNDSixZQUF0QyxDQVBoQztBQUFBLGdCQVFNUSx1QkFBdUIsSUFBSWpCLFlBQUosQ0FBaUJZLGdCQUFqQixFQUFtQ0gsWUFBbkMsQ0FSN0I7QUFBQSxnQkFTTVMsUUFBUSxDQUNORCxvQkFETSxFQUVOSCwyQkFGTSxFQUdORSx1QkFITSxFQUlORCw0QkFKTSxDQVRkOztBQURZLG1JQWlCTkcsS0FqQk07QUFrQmI7OztFQW5CMEJwQixVOztBQXNCN0JxQixPQUFPQyxPQUFQLEdBQWlCWixjQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgc2VwYXJhdG9yLCB0ZXJtaW5hdG9yIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgUnVsZU5hbWVSdWxlTmFtZSwgRGVmaW5pdGlvbnNSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBzZXBhcmF0b3IsXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHRlcm1pbmF0b3IsXG4gICAgICAgICAgcnVsZU5hbWVSdWxlTmFtZSA9IFJ1bGVOYW1lUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZSA9IERlZmluaXRpb25zUnVsZU5hbWUsXG4gICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQoZGVmaW5pdGlvbnNSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWVSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVEZWZpbml0aW9uO1xuIl19