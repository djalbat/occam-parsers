'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var specialSymbols = lexers.specialSymbols,
    separator = specialSymbols.separator,
    terminator = specialSymbols.terminator,
    NameRuleName = ruleNames.NameRuleName,
    DefinitionsRuleName = ruleNames.DefinitionsRuleName;

var RuleDefinition = function (_Definition) {
      _inherits(RuleDefinition, _Definition);

      function RuleDefinition() {
            _classCallCheck(this, RuleDefinition);

            var nonWhitespace = false,
                separatorTerminalSymbolContent = separator,
                terminatorTerminalSymbolContent = terminator,
                nameRuleName = NameRuleName,
                definitionsRuleName = DefinitionsRuleName,
                nameRuleNamePart = new RuleNamePart(nameRuleName),
                separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, nonWhitespace),
                definitionsRuleNamePart = new RuleNamePart(definitionsRuleName),
                terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent, nonWhitespace),
                parts = [nameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];

            return _possibleConstructorReturn(this, (RuleDefinition.__proto__ || Object.getPrototypeOf(RuleDefinition)).call(this, parts));
      }

      return RuleDefinition;
}(Definition);

module.exports = RuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0Iiwic3BlY2lhbFN5bWJvbHMiLCJzZXBhcmF0b3IiLCJ0ZXJtaW5hdG9yIiwiTmFtZVJ1bGVOYW1lIiwiRGVmaW5pdGlvbnNSdWxlTmFtZSIsIlJ1bGVEZWZpbml0aW9uIiwibm9uV2hpdGVzcGFjZSIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJuYW1lUnVsZU5hbWUiLCJkZWZpbml0aW9uc1J1bGVOYW1lIiwibmFtZVJ1bGVOYW1lUGFydCIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsImRlZmluaXRpb25zUnVsZU5hbWVQYXJ0IiwidGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWUQsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUUsYUFBYUYsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSw4QkFBUixDQUZyQjtBQUFBLElBR01JLHFCQUFxQkosUUFBUSxpQ0FBUixDQUgzQjs7QUFLTSxJQUFFSyxjQUFGLEdBQXFCTixNQUFyQixDQUFFTSxjQUFGO0FBQUEsSUFDRUMsU0FERixHQUM0QkQsY0FENUIsQ0FDRUMsU0FERjtBQUFBLElBQ2FDLFVBRGIsR0FDNEJGLGNBRDVCLENBQ2FFLFVBRGI7QUFBQSxJQUVFQyxZQUZGLEdBRXdDUCxTQUZ4QyxDQUVFTyxZQUZGO0FBQUEsSUFFZ0JDLG1CQUZoQixHQUV3Q1IsU0FGeEMsQ0FFZ0JRLG1CQUZoQjs7SUFJQUMsYzs7O0FBQ0osZ0NBQWM7QUFBQTs7QUFDWixnQkFBTUMsZ0JBQWdCLEtBQXRCO0FBQUEsZ0JBQ01DLGlDQUFpQ04sU0FEdkM7QUFBQSxnQkFFTU8sa0NBQWtDTixVQUZ4QztBQUFBLGdCQUdNTyxlQUFlTixZQUhyQjtBQUFBLGdCQUlNTyxzQkFBc0JOLG1CQUo1QjtBQUFBLGdCQUtNTyxtQkFBbUIsSUFBSWIsWUFBSixDQUFpQlcsWUFBakIsQ0FMekI7QUFBQSxnQkFNTUcsOEJBQThCLElBQUliLGtCQUFKLENBQXVCUSw4QkFBdkIsRUFBdURELGFBQXZELENBTnBDO0FBQUEsZ0JBT01PLDBCQUEwQixJQUFJZixZQUFKLENBQWlCWSxtQkFBakIsQ0FQaEM7QUFBQSxnQkFRTUksK0JBQStCLElBQUlmLGtCQUFKLENBQXVCUywrQkFBdkIsRUFBd0RGLGFBQXhELENBUnJDO0FBQUEsZ0JBU01TLFFBQVEsQ0FDTkosZ0JBRE0sRUFFTkMsMkJBRk0sRUFHTkMsdUJBSE0sRUFJTkMsNEJBSk0sQ0FUZDs7QUFEWSxtSUFpQk5DLEtBakJNO0FBa0JiOzs7RUFuQjBCbEIsVTs7QUFzQjdCbUIsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBzZXBhcmF0b3IsIHRlcm1pbmF0b3IgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBOYW1lUnVsZU5hbWUsIERlZmluaXRpb25zUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9uV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHNlcGFyYXRvcixcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gdGVybWluYXRvcixcbiAgICAgICAgICBuYW1lUnVsZU5hbWUgPSBOYW1lUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZSA9IERlZmluaXRpb25zUnVsZU5hbWUsXG4gICAgICAgICAgbmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQobmFtZVJ1bGVOYW1lKSxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9uV2hpdGVzcGFjZSksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRlZmluaXRpb25zUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vbldoaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlRGVmaW5pdGlvbjtcbiJdfQ==