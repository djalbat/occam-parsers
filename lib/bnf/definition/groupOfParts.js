'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

var PartRuleName = ruleNames.PartRuleName,
    specialSymbols = lexers.specialSymbols,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket;

var GroupOfPartsDefinition = function (_Definition) {
      _inherits(GroupOfPartsDefinition, _Definition);

      function GroupOfPartsDefinition() {
            _classCallCheck(this, GroupOfPartsDefinition);

            var nonWhitespace = false,
                partRuleName = PartRuleName,
                openBracketTerminalSymbolContent = openBracket,
                ///
            closeBracketTerminalSymbolContent = closeBracket,
                ///
            partRuleNamePart = new RuleNamePart(partRuleName),
                openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, nonWhitespace),
                closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, nonWhitespace),
                oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
                parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart];

            return _possibleConstructorReturn(this, (GroupOfPartsDefinition.__proto__ || Object.getPrototypeOf(GroupOfPartsDefinition)).call(this, parts));
      }

      return GroupOfPartsDefinition;
}(Definition);

module.exports = GroupOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJQYXJ0UnVsZU5hbWUiLCJzcGVjaWFsU3ltYm9scyIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiIsIm5vbldoaXRlc3BhY2UiLCJwYXJ0UnVsZU5hbWUiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsInBhcnRSdWxlTmFtZVBhcnQiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsIm9uZU9yTW9yZVBhcnRSdWxlTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWUQsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUUsYUFBYUYsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSw4QkFBUixDQUZyQjtBQUFBLElBR01JLHFCQUFxQkosUUFBUSxpQ0FBUixDQUgzQjtBQUFBLElBSU1LLHFCQUFxQkwsUUFBUSxvQ0FBUixDQUozQjs7QUFNTSxJQUFFTSxZQUFGLEdBQW1CTCxTQUFuQixDQUFFSyxZQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQlIsTUFEckIsQ0FDRVEsY0FERjtBQUFBLElBRUVDLFdBRkYsR0FFZ0NELGNBRmhDLENBRUVDLFdBRkY7QUFBQSxJQUVlQyxZQUZmLEdBRWdDRixjQUZoQyxDQUVlRSxZQUZmOztJQUlBQyxzQjs7O0FBQ0osd0NBQWM7QUFBQTs7QUFDWixnQkFBTUMsZ0JBQWdCLEtBQXRCO0FBQUEsZ0JBQ01DLGVBQWVOLFlBRHJCO0FBQUEsZ0JBRU1PLG1DQUFtQ0wsV0FGekM7QUFBQSxnQkFFc0Q7QUFDaERNLGdEQUFvQ0wsWUFIMUM7QUFBQSxnQkFHd0Q7QUFDbERNLCtCQUFtQixJQUFJWixZQUFKLENBQWlCUyxZQUFqQixDQUp6QjtBQUFBLGdCQUtNSSxnQ0FBZ0MsSUFBSVosa0JBQUosQ0FBdUJTLGdDQUF2QixFQUF5REYsYUFBekQsQ0FMdEM7QUFBQSxnQkFNTU0saUNBQWlDLElBQUliLGtCQUFKLENBQXVCVSxpQ0FBdkIsRUFBMERILGFBQTFELENBTnZDO0FBQUEsZ0JBT01PLGlDQUFpQyxJQUFJYixrQkFBSixDQUF1QlUsZ0JBQXZCLENBUHZDO0FBQUEsZ0JBUU1JLFFBQVEsQ0FDTkgsNkJBRE0sRUFFTkQsZ0JBRk0sRUFHTkcsOEJBSE0sRUFJTkQsOEJBSk0sQ0FSZDs7QUFEWSxtSkFnQk5FLEtBaEJNO0FBaUJiOzs7RUFsQmtDakIsVTs7QUFxQnJDa0IsT0FBT0MsT0FBUCxHQUFpQlgsc0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHMnKTtcblxuY29uc3QgeyBQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9uV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRSdWxlTmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IG9wZW5CcmFja2V0LCAvLy9cbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsIC8vL1xuICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50LCBub25XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9uV2hpdGVzcGFjZSksXG4gICAgICAgICAgb25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0UnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRSdWxlTmFtZVBhcnRzUGFydCxcbiAgICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c0RlZmluaXRpb247Il19