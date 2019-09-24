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

            var noWhitespace = false,
                separatorTerminalSymbolContent = separator,
                terminatorTerminalSymbolContent = terminator,
                nameRuleName = NameRuleName,
                definitionsRuleName = DefinitionsRuleName,
                nameRuleNamePart = new RuleNamePart(nameRuleName),
                separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
                definitionsRuleNamePart = new RuleNamePart(definitionsRuleName),
                terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent, noWhitespace),
                parts = [nameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];

            return _possibleConstructorReturn(this, (RuleDefinition.__proto__ || Object.getPrototypeOf(RuleDefinition)).call(this, parts));
      }

      return RuleDefinition;
}(Definition);

module.exports = RuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0Iiwic3BlY2lhbFN5bWJvbHMiLCJzZXBhcmF0b3IiLCJ0ZXJtaW5hdG9yIiwiTmFtZVJ1bGVOYW1lIiwiRGVmaW5pdGlvbnNSdWxlTmFtZSIsIlJ1bGVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwidGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm5hbWVSdWxlTmFtZSIsImRlZmluaXRpb25zUnVsZU5hbWUiLCJuYW1lUnVsZU5hbWVQYXJ0Iiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwiZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNRSxhQUFhRixRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLDhCQUFSLENBRnJCO0FBQUEsSUFHTUkscUJBQXFCSixRQUFRLGlDQUFSLENBSDNCOztBQUtNLElBQUVLLGNBQUYsR0FBcUJOLE1BQXJCLENBQUVNLGNBQUY7QUFBQSxJQUNFQyxTQURGLEdBQzRCRCxjQUQ1QixDQUNFQyxTQURGO0FBQUEsSUFDYUMsVUFEYixHQUM0QkYsY0FENUIsQ0FDYUUsVUFEYjtBQUFBLElBRUVDLFlBRkYsR0FFd0NQLFNBRnhDLENBRUVPLFlBRkY7QUFBQSxJQUVnQkMsbUJBRmhCLEdBRXdDUixTQUZ4QyxDQUVnQlEsbUJBRmhCOztJQUlBQyxjOzs7QUFDSixnQ0FBYztBQUFBOztBQUNaLGdCQUFNQyxlQUFlLEtBQXJCO0FBQUEsZ0JBQ01DLGlDQUFpQ04sU0FEdkM7QUFBQSxnQkFFTU8sa0NBQWtDTixVQUZ4QztBQUFBLGdCQUdNTyxlQUFlTixZQUhyQjtBQUFBLGdCQUlNTyxzQkFBc0JOLG1CQUo1QjtBQUFBLGdCQUtNTyxtQkFBbUIsSUFBSWIsWUFBSixDQUFpQlcsWUFBakIsQ0FMekI7QUFBQSxnQkFNTUcsOEJBQThCLElBQUliLGtCQUFKLENBQXVCUSw4QkFBdkIsRUFBdURELFlBQXZELENBTnBDO0FBQUEsZ0JBT01PLDBCQUEwQixJQUFJZixZQUFKLENBQWlCWSxtQkFBakIsQ0FQaEM7QUFBQSxnQkFRTUksK0JBQStCLElBQUlmLGtCQUFKLENBQXVCUywrQkFBdkIsRUFBd0RGLFlBQXhELENBUnJDO0FBQUEsZ0JBU01TLFFBQVEsQ0FDTkosZ0JBRE0sRUFFTkMsMkJBRk0sRUFHTkMsdUJBSE0sRUFJTkMsNEJBSk0sQ0FUZDs7QUFEWSxtSUFpQk5DLEtBakJNO0FBa0JiOzs7RUFuQjBCbEIsVTs7QUFzQjdCbUIsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBzZXBhcmF0b3IsIHRlcm1pbmF0b3IgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBOYW1lUnVsZU5hbWUsIERlZmluaXRpb25zUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gc2VwYXJhdG9yLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB0ZXJtaW5hdG9yLFxuICAgICAgICAgIG5hbWVSdWxlTmFtZSA9IE5hbWVSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGVOYW1lID0gRGVmaW5pdGlvbnNSdWxlTmFtZSxcbiAgICAgICAgICBuYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChuYW1lUnVsZU5hbWUpLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChkZWZpbml0aW9uc1J1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlRGVmaW5pdGlvbjtcbiJdfQ==