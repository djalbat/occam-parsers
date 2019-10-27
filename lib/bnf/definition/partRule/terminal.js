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
    NON_WHITESPACE = specialSymbols.NON_WHITESPACE,
    QuantifierRuleName = ruleNames.QuantifierRuleName,
    TerminalPartRuleName = ruleNames.TerminalPartRuleName;

var TerminalPartRuleDefinition = function (_Definition) {
      _inherits(TerminalPartRuleDefinition, _Definition);

      function TerminalPartRuleDefinition() {
            _classCallCheck(this, TerminalPartRuleDefinition);

            var nonWhitespace = false,
                quantifierRuleName = QuantifierRuleName,
                terminalPartRuleName = TerminalPartRuleName,
                nonWhitespaceTerminalSymbolContent = NON_WHITESPACE,
                quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
                terminalPartRuleNamePart = new RuleNamePart(terminalPartRuleName),
                nonWhitespaceTerminalSymbolPart = new TerminalSymbolPart(nonWhitespaceTerminalSymbolContent, nonWhitespace),
                zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
                optionalNonWhitespaceTerminalSymbolPartPart = new OptionalPartPart(nonWhitespaceTerminalSymbolPart),
                parts = [optionalNonWhitespaceTerminalSymbolPartPart, terminalPartRuleNamePart, zeroOrMoreQuantifierRuleNamePartsPart];

            return _possibleConstructorReturn(this, (TerminalPartRuleDefinition.__proto__ || Object.getPrototypeOf(TerminalPartRuleDefinition)).call(this, parts));
      }

      return TerminalPartRuleDefinition;
}(Definition);

module.exports = TerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0Iiwic3BlY2lhbFN5bWJvbHMiLCJOT05fV0hJVEVTUEFDRSIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIlRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub25XaGl0ZXNwYWNlIiwicXVhbnRpZmllclJ1bGVOYW1lIiwidGVybWluYWxQYXJ0UnVsZU5hbWUiLCJub25XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50IiwicXVhbnRpZmllclJ1bGVOYW1lUGFydCIsInRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCIsIm5vbldoaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0Iiwib3B0aW9uYWxOb25XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0UGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWUQsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01FLGFBQWFGLFFBQVEsa0JBQVIsQ0FEbkI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGlDQUFSLENBRnJCO0FBQUEsSUFHTUksbUJBQW1CSixRQUFRLHFDQUFSLENBSHpCO0FBQUEsSUFJTUsscUJBQXFCTCxRQUFRLG9DQUFSLENBSjNCO0FBQUEsSUFLTU0sc0JBQXNCTixRQUFRLHdDQUFSLENBTDVCOztBQU9NLElBQUVPLGNBQUYsR0FBcUJSLE1BQXJCLENBQUVRLGNBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxjQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsa0JBRkYsR0FFK0NSLFNBRi9DLENBRUVRLGtCQUZGO0FBQUEsSUFFc0JDLG9CQUZ0QixHQUUrQ1QsU0FGL0MsQ0FFc0JTLG9CQUZ0Qjs7SUFJQUMsMEI7OztBQUNKLDRDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLGdCQUFnQixLQUF0QjtBQUFBLGdCQUNNQyxxQkFBcUJKLGtCQUQzQjtBQUFBLGdCQUVNSyx1QkFBdUJKLG9CQUY3QjtBQUFBLGdCQUdNSyxxQ0FBcUNQLGNBSDNDO0FBQUEsZ0JBSU1RLHlCQUF5QixJQUFJYixZQUFKLENBQWlCVSxrQkFBakIsQ0FKL0I7QUFBQSxnQkFLTUksMkJBQTJCLElBQUlkLFlBQUosQ0FBaUJXLG9CQUFqQixDQUxqQztBQUFBLGdCQU1NSSxrQ0FBa0MsSUFBSWIsa0JBQUosQ0FBdUJVLGtDQUF2QixFQUEyREgsYUFBM0QsQ0FOeEM7QUFBQSxnQkFPTU8sd0NBQXdDLElBQUliLG1CQUFKLENBQXdCVSxzQkFBeEIsQ0FQOUM7QUFBQSxnQkFRTUksOENBQThDLElBQUloQixnQkFBSixDQUFxQmMsK0JBQXJCLENBUnBEO0FBQUEsZ0JBU01HLFFBQVEsQ0FDTkQsMkNBRE0sRUFFTkgsd0JBRk0sRUFHTkUscUNBSE0sQ0FUZDs7QUFEWSwySkFnQk5FLEtBaEJNO0FBaUJiOzs7RUFsQnNDbkIsVTs7QUFxQnpDb0IsT0FBT0MsT0FBUCxHQUFpQlosMEJBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgT3B0aW9uYWxQYXJ0UGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHMnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBOT05fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFF1YW50aWZpZXJSdWxlTmFtZSwgVGVybWluYWxQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9uV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlTmFtZSA9IFF1YW50aWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZSA9IFRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG5vbldoaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBOT05fV0hJVEVTUEFDRSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChxdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQodGVybWluYWxQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIG5vbldoaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG5vbldoaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vbldoaXRlc3BhY2UpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChxdWFudGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBvcHRpb25hbE5vbldoaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQobm9uV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbE5vbldoaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnRQYXJ0LFxuICAgICAgICAgICAgdGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbjtcbiJdfQ==