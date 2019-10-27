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

            var partRuleName = PartRuleName,
                openBracketTerminalSymbolContent = openBracket,
                ///
            closeBracketTerminalSymbolContent = closeBracket,
                ///
            partRuleNamePart = new RuleNamePart(partRuleName),
                openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
                closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
                oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
                parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart];

            return _possibleConstructorReturn(this, (GroupOfPartsDefinition.__proto__ || Object.getPrototypeOf(GroupOfPartsDefinition)).call(this, parts));
      }

      return GroupOfPartsDefinition;
}(Definition);

module.exports = GroupOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJQYXJ0UnVsZU5hbWUiLCJzcGVjaWFsU3ltYm9scyIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiIsInBhcnRSdWxlTmFtZSIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0Iiwib25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNRSxhQUFhRixRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLDhCQUFSLENBRnJCO0FBQUEsSUFHTUkscUJBQXFCSixRQUFRLGlDQUFSLENBSDNCO0FBQUEsSUFJTUsscUJBQXFCTCxRQUFRLG9DQUFSLENBSjNCOztBQU1NLElBQUVNLFlBQUYsR0FBbUJMLFNBQW5CLENBQUVLLFlBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCUixNQURyQixDQUNFUSxjQURGO0FBQUEsSUFFRUMsV0FGRixHQUVnQ0QsY0FGaEMsQ0FFRUMsV0FGRjtBQUFBLElBRWVDLFlBRmYsR0FFZ0NGLGNBRmhDLENBRWVFLFlBRmY7O0lBSUFDLHNCOzs7QUFDSix3Q0FBYztBQUFBOztBQUNaLGdCQUFNQyxlQUFlTCxZQUFyQjtBQUFBLGdCQUNNTSxtQ0FBbUNKLFdBRHpDO0FBQUEsZ0JBQ3NEO0FBQ2hESyxnREFBb0NKLFlBRjFDO0FBQUEsZ0JBRXdEO0FBQ2xESywrQkFBbUIsSUFBSVgsWUFBSixDQUFpQlEsWUFBakIsQ0FIekI7QUFBQSxnQkFJTUksZ0NBQWdDLElBQUlYLGtCQUFKLENBQXVCUSxnQ0FBdkIsQ0FKdEM7QUFBQSxnQkFLTUksaUNBQWlDLElBQUlaLGtCQUFKLENBQXVCUyxpQ0FBdkIsQ0FMdkM7QUFBQSxnQkFNTUksaUNBQWlDLElBQUlaLGtCQUFKLENBQXVCUyxnQkFBdkIsQ0FOdkM7QUFBQSxnQkFPTUksUUFBUSxDQUNOSCw2QkFETSxFQUVORCxnQkFGTSxFQUdORyw4QkFITSxFQUlORCw4QkFKTSxDQVBkOztBQURZLG1KQWVORSxLQWZNO0FBZ0JiOzs7RUFqQmtDaEIsVTs7QUFvQnJDaUIsT0FBT0MsT0FBUCxHQUFpQlYsc0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHMnKTtcblxuY29uc3QgeyBQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lID0gUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gb3BlbkJyYWNrZXQsIC8vL1xuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGNsb3NlQnJhY2tldCwgLy8vXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnRSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzRGVmaW5pdGlvbjsiXX0=