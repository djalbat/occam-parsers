'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    separator = specialSymbols.separator,
    terminator = specialSymbols.terminator,
    NameRuleName = ruleNames.NameRuleName,
    DefinitionsRuleName = ruleNames.DefinitionsRuleName;

var RuleDefinition = function (_Definition) {
      _inherits(RuleDefinition, _Definition);

      function RuleDefinition() {
            _classCallCheck(this, RuleDefinition);

            var noWhitespace = false,
                separatorTerminalSymbolContent = separator,
                terminatorTerminalSymbolContent = terminator,
                nameRuleName = NameRuleName,
                definitionsRuleName = DefinitionsRuleName,
                nameRuleNamePart = new RuleNamePart(nameRuleName, noWhitespace),
                separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
                definitionsRuleNamePart = new RuleNamePart(definitionsRuleName, noWhitespace),
                terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent, noWhitespace),
                parts = [nameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];

            return _possibleConstructorReturn(this, (RuleDefinition.__proto__ || Object.getPrototypeOf(RuleDefinition)).call(this, parts));
      }

      return RuleDefinition;
}(Definition);

module.exports = RuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsInNlcGFyYXRvciIsInRlcm1pbmF0b3IiLCJOYW1lUnVsZU5hbWUiLCJEZWZpbml0aW9uc1J1bGVOYW1lIiwiUnVsZURlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwibmFtZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnNSdWxlTmFtZSIsIm5hbWVSdWxlTmFtZVBhcnQiLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJkZWZpbml0aW9uc1J1bGVOYW1lUGFydCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01FLGFBQWFGLFFBQVEsZUFBUixDQURuQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsOEJBQVIsQ0FGckI7QUFBQSxJQUdNSSxxQkFBcUJKLFFBQVEsaUNBQVIsQ0FIM0I7O0FBS00sSUFBRUssUUFBRixHQUFlTixNQUFmLENBQUVNLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsU0FGRixHQUU0QkQsY0FGNUIsQ0FFRUMsU0FGRjtBQUFBLElBRWFDLFVBRmIsR0FFNEJGLGNBRjVCLENBRWFFLFVBRmI7QUFBQSxJQUdFQyxZQUhGLEdBR3dDUixTQUh4QyxDQUdFUSxZQUhGO0FBQUEsSUFHZ0JDLG1CQUhoQixHQUd3Q1QsU0FIeEMsQ0FHZ0JTLG1CQUhoQjs7SUFLQUMsYzs7O0FBQ0osZ0NBQWM7QUFBQTs7QUFDWixnQkFBTUMsZUFBZSxLQUFyQjtBQUFBLGdCQUNNQyxpQ0FBaUNOLFNBRHZDO0FBQUEsZ0JBRU1PLGtDQUFrQ04sVUFGeEM7QUFBQSxnQkFHTU8sZUFBZU4sWUFIckI7QUFBQSxnQkFJTU8sc0JBQXNCTixtQkFKNUI7QUFBQSxnQkFLTU8sbUJBQW1CLElBQUlkLFlBQUosQ0FBaUJZLFlBQWpCLEVBQStCSCxZQUEvQixDQUx6QjtBQUFBLGdCQU1NTSw4QkFBOEIsSUFBSWQsa0JBQUosQ0FBdUJTLDhCQUF2QixFQUF1REQsWUFBdkQsQ0FOcEM7QUFBQSxnQkFPTU8sMEJBQTBCLElBQUloQixZQUFKLENBQWlCYSxtQkFBakIsRUFBc0NKLFlBQXRDLENBUGhDO0FBQUEsZ0JBUU1RLCtCQUErQixJQUFJaEIsa0JBQUosQ0FBdUJVLCtCQUF2QixFQUF3REYsWUFBeEQsQ0FSckM7QUFBQSxnQkFTTVMsUUFBUSxDQUNOSixnQkFETSxFQUVOQywyQkFGTSxFQUdOQyx1QkFITSxFQUlOQyw0QkFKTSxDQVRkOztBQURZLG1JQWlCTkMsS0FqQk07QUFrQmI7OztFQW5CMEJuQixVOztBQXNCN0JvQixPQUFPQyxPQUFQLEdBQWlCWixjQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgc2VwYXJhdG9yLCB0ZXJtaW5hdG9yIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgTmFtZVJ1bGVOYW1lLCBEZWZpbml0aW9uc1J1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHNlcGFyYXRvcixcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gdGVybWluYXRvcixcbiAgICAgICAgICBuYW1lUnVsZU5hbWUgPSBOYW1lUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZSA9IERlZmluaXRpb25zUnVsZU5hbWUsXG4gICAgICAgICAgbmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQobmFtZVJ1bGVOYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChkZWZpbml0aW9uc1J1bGVOYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBuYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVEZWZpbml0aW9uO1xuIl19