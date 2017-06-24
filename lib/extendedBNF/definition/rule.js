'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName'),
    TerminalSymbolPart = require('../part/terminalSymbol');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    separator = specialSymbols.separator,
    terminator = specialSymbols.terminator;

var RuleDefinition = function (_Definition) {
      _inherits(RuleDefinition, _Definition);

      function RuleDefinition() {
            _classCallCheck(this, RuleDefinition);

            var separatorTerminalSymbolContent = separator,
                terminatorTerminalSymbolContent = terminator,
                ruleNameRuleName = 'ruleName',
                definitionsRuleName = 'definitions',
                separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
                terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent),
                definitionsRuleNamePart = new RuleNamePart(definitionsRuleName),
                ruleNameRuleNamePart = new RuleNamePart(ruleNameRuleName),
                parts = [ruleNameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];

            return _possibleConstructorReturn(this, (RuleDefinition.__proto__ || Object.getPrototypeOf(RuleDefinition)).call(this, parts));
      }

      return RuleDefinition;
}(Definition);

module.exports = RuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL3J1bGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJFeHRlbmRlZEJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJzZXBhcmF0b3IiLCJ0ZXJtaW5hdG9yIiwiUnVsZURlZmluaXRpb24iLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwicnVsZU5hbWVSdWxlTmFtZSIsImRlZmluaXRpb25zUnVsZU5hbWUiLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwiZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVJ1bGVOYW1lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUUsZUFBZUYsUUFBUSxrQkFBUixDQURyQjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSx3QkFBUixDQUYzQjs7QUFJTSxJQUFFSSxnQkFBRixHQUF1QkwsTUFBdkIsQ0FBRUssZ0JBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxnQkFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLFNBRkYsR0FFNEJELGNBRjVCLENBRUVDLFNBRkY7QUFBQSxJQUVhQyxVQUZiLEdBRTRCRixjQUY1QixDQUVhRSxVQUZiOztJQUlBQyxjOzs7QUFDSixnQ0FBYztBQUFBOztBQUNaLGdCQUFNQyxpQ0FBaUNILFNBQXZDO0FBQUEsZ0JBQ01JLGtDQUFrQ0gsVUFEeEM7QUFBQSxnQkFFTUksbUJBQW1CLFVBRnpCO0FBQUEsZ0JBR01DLHNCQUFzQixhQUg1QjtBQUFBLGdCQUlNQyw4QkFBOEIsSUFBSVYsa0JBQUosQ0FBdUJNLDhCQUF2QixDQUpwQztBQUFBLGdCQUtNSywrQkFBK0IsSUFBSVgsa0JBQUosQ0FBdUJPLCtCQUF2QixDQUxyQztBQUFBLGdCQU1NSywwQkFBMEIsSUFBSWIsWUFBSixDQUFpQlUsbUJBQWpCLENBTmhDO0FBQUEsZ0JBT01JLHVCQUF1QixJQUFJZCxZQUFKLENBQWlCUyxnQkFBakIsQ0FQN0I7QUFBQSxnQkFRTU0sUUFBUSxDQUNORCxvQkFETSxFQUVOSCwyQkFGTSxFQUdORSx1QkFITSxFQUlORCw0QkFKTSxDQVJkOztBQURZLG1JQWdCTkcsS0FoQk07QUFpQmI7OztFQWxCMEJoQixVOztBQXFCN0JpQixPQUFPQyxPQUFQLEdBQWlCWCxjQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBFeHRlbmRlZEJORkxleGVyLFxuICAgICAgeyBzZXBhcmF0b3IsIHRlcm1pbmF0b3IgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBzZXBhcmF0b3IsXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHRlcm1pbmF0b3IsXG4gICAgICAgICAgcnVsZU5hbWVSdWxlTmFtZSA9ICdydWxlTmFtZScsXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZSA9ICdkZWZpbml0aW9ucycsXG4gICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChkZWZpbml0aW9uc1J1bGVOYW1lKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWVSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlRGVmaW5pdGlvbjtcbiJdfQ==