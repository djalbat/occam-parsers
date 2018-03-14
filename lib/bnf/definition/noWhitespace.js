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
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE,
    PartRuleName = ruleNames.PartRuleName,
    RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName;

var NoWhitespaceDefinition = function (_Definition) {
      _inherits(NoWhitespaceDefinition, _Definition);

      function NoWhitespaceDefinition() {
            _classCallCheck(this, NoWhitespaceDefinition);

            var noWhitespace = false,
                partRuleName = PartRuleName,
                rightRecursivePartRuleName = RightRecursivePartRuleName,
                noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
                partRuleNamePart = new RuleNamePart(partRuleName, noWhitespace),
                rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
                noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
                parts = [noWhitespaceTerminalSymbolPart, partRuleNamePart, rightRecursivePartRuleNamePart];

            return _possibleConstructorReturn(this, (NoWhitespaceDefinition.__proto__ || Object.getPrototypeOf(NoWhitespaceDefinition)).call(this, parts));
      }

      return NoWhitespaceDefinition;
}(Definition);

module.exports = NoWhitespaceDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ub1doaXRlc3BhY2UuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJydWxlTmFtZXMiLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiTk9fV0hJVEVTUEFDRSIsIlBhcnRSdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwiTm9XaGl0ZXNwYWNlRGVmaW5pdGlvbiIsIm5vV2hpdGVzcGFjZSIsInBhcnRSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwibm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCIsIm5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSw4QkFBUixDQUZyQjtBQUFBLElBR01JLHFCQUFxQkosUUFBUSxpQ0FBUixDQUgzQjs7QUFLTSxJQUFFSyxRQUFGLEdBQWVOLE1BQWYsQ0FBRU0sUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxhQUZGLEdBRW9CRCxjQUZwQixDQUVFQyxhQUZGO0FBQUEsSUFHRUMsWUFIRixHQUcrQ04sU0FIL0MsQ0FHRU0sWUFIRjtBQUFBLElBR2dCQywwQkFIaEIsR0FHK0NQLFNBSC9DLENBR2dCTywwQkFIaEI7O0lBS0FDLHNCOzs7QUFDSix3Q0FBYztBQUFBOztBQUNaLGdCQUFNQyxlQUFlLEtBQXJCO0FBQUEsZ0JBQ01DLGVBQWVKLFlBRHJCO0FBQUEsZ0JBRU1LLDZCQUE2QkosMEJBRm5DO0FBQUEsZ0JBR01LLG9DQUFvQ1AsYUFIMUM7QUFBQSxnQkFJTVEsbUJBQW1CLElBQUlaLFlBQUosQ0FBaUJTLFlBQWpCLEVBQStCRCxZQUEvQixDQUp6QjtBQUFBLGdCQUtNSyxpQ0FBaUMsSUFBSWIsWUFBSixDQUFpQlUsMEJBQWpCLEVBQTZDRixZQUE3QyxDQUx2QztBQUFBLGdCQU1NTSxpQ0FBaUMsSUFBSWIsa0JBQUosQ0FBdUJVLGlDQUF2QixFQUEwREgsWUFBMUQsQ0FOdkM7QUFBQSxnQkFPTU8sUUFBUSxDQUNORCw4QkFETSxFQUVORixnQkFGTSxFQUdOQyw4QkFITSxDQVBkOztBQURZLG1KQWNORSxLQWRNO0FBZWI7OztFQWhCa0NqQixVOztBQW1CckNrQixPQUFPQyxPQUFQLEdBQWlCVixzQkFBakIiLCJmaWxlIjoibm9XaGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFBhcnRSdWxlTmFtZSwgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTm9XaGl0ZXNwYWNlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0UnVsZU5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgPSBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBOT19XSElURVNQQUNFLFxuICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHBhcnRSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQobm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VEZWZpbml0aW9uO1xuIl19