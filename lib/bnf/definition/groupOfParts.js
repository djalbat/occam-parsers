'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    ruleNames = require('../ruleNames'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket;

var GroupOfPartsDefinition = function (_Definition) {
      _inherits(GroupOfPartsDefinition, _Definition);

      function GroupOfPartsDefinition() {
            _classCallCheck(this, GroupOfPartsDefinition);

            var partRuleName = ruleNames.PartRule,
                rightRecursivePartRuleName = ruleNames.RightRecursivePartRule,
                openBracketTerminalSymbolContent = openBracket,
                closeBracketTerminalSymbolContent = closeBracket,
                partRuleNamePart = new RuleNamePart(partRuleName),
                rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
                openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
                closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
                oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
                parts = [openBracketTerminalSymbolPart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart, rightRecursivePartRuleNamePart];

            return _possibleConstructorReturn(this, (GroupOfPartsDefinition.__proto__ || Object.getPrototypeOf(GroupOfPartsDefinition)).call(this, parts));
      }

      return GroupOfPartsDefinition;
}(Definition);

module.exports = GroupOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJydWxlTmFtZXMiLCJSdWxlTmFtZVBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwib3BlbkJyYWNrZXQiLCJjbG9zZUJyYWNrZXQiLCJHcm91cE9mUGFydHNEZWZpbml0aW9uIiwicGFydFJ1bGVOYW1lIiwiUGFydFJ1bGUiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsInBhcnRSdWxlTmFtZVBhcnQiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsIm9uZU9yTW9yZVBhcnRSdWxlTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSw4QkFBUixDQUZyQjtBQUFBLElBR01JLHFCQUFxQkosUUFBUSxvQ0FBUixDQUgzQjtBQUFBLElBSU1LLHFCQUFxQkwsUUFBUSxpQ0FBUixDQUozQjs7QUFNTSxJQUFFTSxRQUFGLEdBQWVQLE1BQWYsQ0FBRU8sUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxXQUZGLEdBRWdDRCxjQUZoQyxDQUVFQyxXQUZGO0FBQUEsSUFFZUMsWUFGZixHQUVnQ0YsY0FGaEMsQ0FFZUUsWUFGZjs7SUFJQUMsc0I7OztBQUNKLHdDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLGVBQWVULFVBQVVVLFFBQS9CO0FBQUEsZ0JBQ01DLDZCQUE2QlgsVUFBVVksc0JBRDdDO0FBQUEsZ0JBRU1DLG1DQUFtQ1AsV0FGekM7QUFBQSxnQkFHTVEsb0NBQW9DUCxZQUgxQztBQUFBLGdCQUlNUSxtQkFBbUIsSUFBSWQsWUFBSixDQUFpQlEsWUFBakIsQ0FKekI7QUFBQSxnQkFLTU8saUNBQWlDLElBQUlmLFlBQUosQ0FBaUJVLDBCQUFqQixDQUx2QztBQUFBLGdCQU1NTSxnQ0FBZ0MsSUFBSWQsa0JBQUosQ0FBdUJVLGdDQUF2QixDQU50QztBQUFBLGdCQU9NSyxpQ0FBaUMsSUFBSWYsa0JBQUosQ0FBdUJXLGlDQUF2QixDQVB2QztBQUFBLGdCQVFNSyxpQ0FBaUMsSUFBSWpCLGtCQUFKLENBQXVCYSxnQkFBdkIsQ0FSdkM7QUFBQSxnQkFTTUssUUFBUSxDQUNOSCw2QkFETSxFQUVORSw4QkFGTSxFQUdORCw4QkFITSxFQUlORiw4QkFKTSxDQVRkOztBQURZLG1KQWlCTkksS0FqQk07QUFrQmI7OztFQW5Ca0NyQixVOztBQXNCckNzQixPQUFPQyxPQUFQLEdBQWlCZCxzQkFBakIiLCJmaWxlIjoiZ3JvdXBPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lID0gcnVsZU5hbWVzLlBhcnRSdWxlLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lID0gcnVsZU5hbWVzLlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUsXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnRSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzRGVmaW5pdGlvbjtcbiJdfQ==