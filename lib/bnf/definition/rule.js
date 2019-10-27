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

            var separatorTerminalSymbolContent = separator,
                terminatorTerminalSymbolContent = terminator,
                nameRuleName = NameRuleName,
                definitionsRuleName = DefinitionsRuleName,
                nameRuleNamePart = new RuleNamePart(nameRuleName),
                separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
                definitionsRuleNamePart = new RuleNamePart(definitionsRuleName),
                terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent),
                parts = [nameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];

            return _possibleConstructorReturn(this, (RuleDefinition.__proto__ || Object.getPrototypeOf(RuleDefinition)).call(this, parts));
      }

      return RuleDefinition;
}(Definition);

module.exports = RuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0Iiwic3BlY2lhbFN5bWJvbHMiLCJzZXBhcmF0b3IiLCJ0ZXJtaW5hdG9yIiwiTmFtZVJ1bGVOYW1lIiwiRGVmaW5pdGlvbnNSdWxlTmFtZSIsIlJ1bGVEZWZpbml0aW9uIiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwidGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm5hbWVSdWxlTmFtZSIsImRlZmluaXRpb25zUnVsZU5hbWUiLCJuYW1lUnVsZU5hbWVQYXJ0Iiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwiZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNRSxhQUFhRixRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLDhCQUFSLENBRnJCO0FBQUEsSUFHTUkscUJBQXFCSixRQUFRLGlDQUFSLENBSDNCOztBQUtNLElBQUVLLGNBQUYsR0FBcUJOLE1BQXJCLENBQUVNLGNBQUY7QUFBQSxJQUNFQyxTQURGLEdBQzRCRCxjQUQ1QixDQUNFQyxTQURGO0FBQUEsSUFDYUMsVUFEYixHQUM0QkYsY0FENUIsQ0FDYUUsVUFEYjtBQUFBLElBRUVDLFlBRkYsR0FFd0NQLFNBRnhDLENBRUVPLFlBRkY7QUFBQSxJQUVnQkMsbUJBRmhCLEdBRXdDUixTQUZ4QyxDQUVnQlEsbUJBRmhCOztJQUlBQyxjOzs7QUFDSixnQ0FBYztBQUFBOztBQUNaLGdCQUFNQyxpQ0FBaUNMLFNBQXZDO0FBQUEsZ0JBQ01NLGtDQUFrQ0wsVUFEeEM7QUFBQSxnQkFFTU0sZUFBZUwsWUFGckI7QUFBQSxnQkFHTU0sc0JBQXNCTCxtQkFINUI7QUFBQSxnQkFJTU0sbUJBQW1CLElBQUlaLFlBQUosQ0FBaUJVLFlBQWpCLENBSnpCO0FBQUEsZ0JBS01HLDhCQUE4QixJQUFJWixrQkFBSixDQUF1Qk8sOEJBQXZCLENBTHBDO0FBQUEsZ0JBTU1NLDBCQUEwQixJQUFJZCxZQUFKLENBQWlCVyxtQkFBakIsQ0FOaEM7QUFBQSxnQkFPTUksK0JBQStCLElBQUlkLGtCQUFKLENBQXVCUSwrQkFBdkIsQ0FQckM7QUFBQSxnQkFRTU8sUUFBUSxDQUNOSixnQkFETSxFQUVOQywyQkFGTSxFQUdOQyx1QkFITSxFQUlOQyw0QkFKTSxDQVJkOztBQURZLG1JQWdCTkMsS0FoQk07QUFpQmI7OztFQWxCMEJqQixVOztBQXFCN0JrQixPQUFPQyxPQUFQLEdBQWlCWCxjQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IHNlcGFyYXRvciwgdGVybWluYXRvciB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IE5hbWVSdWxlTmFtZSwgRGVmaW5pdGlvbnNSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBzZXBhcmF0b3IsXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHRlcm1pbmF0b3IsXG4gICAgICAgICAgbmFtZVJ1bGVOYW1lID0gTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWUgPSBEZWZpbml0aW9uc1J1bGVOYW1lLFxuICAgICAgICAgIG5hbWVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KG5hbWVSdWxlTmFtZSksXG4gICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChkZWZpbml0aW9uc1J1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5hbWVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBkZWZpbml0aW9uc1J1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZURlZmluaXRpb247XG4iXX0=