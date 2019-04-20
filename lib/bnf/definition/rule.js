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

            var lookAhead = false,
                noWhitespace = false,
                separatorTerminalSymbolContent = separator,
                terminatorTerminalSymbolContent = terminator,
                nameRuleName = NameRuleName,
                definitionsRuleName = DefinitionsRuleName,
                nameRuleNamePart = new RuleNamePart(nameRuleName, lookAhead, noWhitespace),
                separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
                definitionsRuleNamePart = new RuleNamePart(definitionsRuleName, lookAhead, noWhitespace),
                terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent, noWhitespace),
                parts = [nameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];

            return _possibleConstructorReturn(this, (RuleDefinition.__proto__ || Object.getPrototypeOf(RuleDefinition)).call(this, parts));
      }

      return RuleDefinition;
}(Definition);

module.exports = RuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsInNlcGFyYXRvciIsInRlcm1pbmF0b3IiLCJOYW1lUnVsZU5hbWUiLCJEZWZpbml0aW9uc1J1bGVOYW1lIiwiUnVsZURlZmluaXRpb24iLCJsb29rQWhlYWQiLCJub1doaXRlc3BhY2UiLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwibmFtZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnNSdWxlTmFtZSIsIm5hbWVSdWxlTmFtZVBhcnQiLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJkZWZpbml0aW9uc1J1bGVOYW1lUGFydCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01FLGFBQWFGLFFBQVEsZUFBUixDQURuQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsOEJBQVIsQ0FGckI7QUFBQSxJQUdNSSxxQkFBcUJKLFFBQVEsaUNBQVIsQ0FIM0I7O0FBS00sSUFBRUssUUFBRixHQUFlTixNQUFmLENBQUVNLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsU0FGRixHQUU0QkQsY0FGNUIsQ0FFRUMsU0FGRjtBQUFBLElBRWFDLFVBRmIsR0FFNEJGLGNBRjVCLENBRWFFLFVBRmI7QUFBQSxJQUdFQyxZQUhGLEdBR3dDUixTQUh4QyxDQUdFUSxZQUhGO0FBQUEsSUFHZ0JDLG1CQUhoQixHQUd3Q1QsU0FIeEMsQ0FHZ0JTLG1CQUhoQjs7SUFLQUMsYzs7O0FBQ0osZ0NBQWM7QUFBQTs7QUFDWixnQkFBTUMsWUFBWSxLQUFsQjtBQUFBLGdCQUNNQyxlQUFlLEtBRHJCO0FBQUEsZ0JBRU1DLGlDQUFpQ1AsU0FGdkM7QUFBQSxnQkFHTVEsa0NBQWtDUCxVQUh4QztBQUFBLGdCQUlNUSxlQUFlUCxZQUpyQjtBQUFBLGdCQUtNUSxzQkFBc0JQLG1CQUw1QjtBQUFBLGdCQU1NUSxtQkFBbUIsSUFBSWYsWUFBSixDQUFpQmEsWUFBakIsRUFBK0JKLFNBQS9CLEVBQTBDQyxZQUExQyxDQU56QjtBQUFBLGdCQU9NTSw4QkFBOEIsSUFBSWYsa0JBQUosQ0FBdUJVLDhCQUF2QixFQUF1REQsWUFBdkQsQ0FQcEM7QUFBQSxnQkFRTU8sMEJBQTBCLElBQUlqQixZQUFKLENBQWlCYyxtQkFBakIsRUFBc0NMLFNBQXRDLEVBQWlEQyxZQUFqRCxDQVJoQztBQUFBLGdCQVNNUSwrQkFBK0IsSUFBSWpCLGtCQUFKLENBQXVCVywrQkFBdkIsRUFBd0RGLFlBQXhELENBVHJDO0FBQUEsZ0JBVU1TLFFBQVEsQ0FDTkosZ0JBRE0sRUFFTkMsMkJBRk0sRUFHTkMsdUJBSE0sRUFJTkMsNEJBSk0sQ0FWZDs7QUFEWSxtSUFrQk5DLEtBbEJNO0FBbUJiOzs7RUFwQjBCcEIsVTs7QUF1QjdCcUIsT0FBT0MsT0FBUCxHQUFpQmIsY0FBakIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHNlcGFyYXRvciwgdGVybWluYXRvciB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IE5hbWVSdWxlTmFtZSwgRGVmaW5pdGlvbnNSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBzZXBhcmF0b3IsXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHRlcm1pbmF0b3IsXG4gICAgICAgICAgbmFtZVJ1bGVOYW1lID0gTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWUgPSBEZWZpbml0aW9uc1J1bGVOYW1lLFxuICAgICAgICAgIG5hbWVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KG5hbWVSdWxlTmFtZSwgbG9va0FoZWFkLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChkZWZpbml0aW9uc1J1bGVOYW1lLCBsb29rQWhlYWQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5hbWVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBkZWZpbml0aW9uc1J1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZURlZmluaXRpb247XG4iXX0=