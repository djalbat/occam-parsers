"use strict";

var _occamLexers = require("occam-lexers");

var _definition = _interopRequireDefault(require("../definition"));

var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));

var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));

var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var openBracket = _occamLexers.specialSymbols.openBracket,
    closeBracket = _occamLexers.specialSymbols.closeBracket;

var GroupOfPartsDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(GroupOfPartsDefinition, _Definition);

  function GroupOfPartsDefinition() {
    _classCallCheck(this, GroupOfPartsDefinition);

    var partRuleName = _ruleNames.PartRuleName,
        openBracketTerminalSymbolContent = openBracket,
        ///
    closeBracketTerminalSymbolContent = closeBracket,
        ///
    partRuleNamePart = new _ruleName["default"](partRuleName),
        openBracketTerminalSymbolPart = new _terminalSymbol["default"](openBracketTerminalSymbolContent),
        closeBracketTerminalSymbolPart = new _terminalSymbol["default"](closeBracketTerminalSymbolContent),
        oneOrMorePartRuleNamePartsPart = new _oneOrMoreParts["default"](partRuleNamePart),
        parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(GroupOfPartsDefinition).call(this, parts));
  }

  return GroupOfPartsDefinition;
}(_definition["default"]);

module.exports = GroupOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJvcGVuQnJhY2tldCIsInNwZWNpYWxTeW1ib2xzIiwiY2xvc2VCcmFja2V0IiwiR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiIsInBhcnRSdWxlTmFtZSIsIlBhcnRSdWxlTmFtZSIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0Iiwib25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwicGFydHMiLCJEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxXLEdBQThCQywyQixDQUE5QkQsVztJQUFhRSxZLEdBQWlCRCwyQixDQUFqQkMsWTs7SUFFZkMsc0I7OztBQUNKLG9DQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxHQUFHQyx1QkFBckI7QUFBQSxRQUNNQyxnQ0FBZ0MsR0FBR04sV0FEekM7QUFBQSxRQUNzRDtBQUNoRE8sSUFBQUEsaUNBQWlDLEdBQUdMLFlBRjFDO0FBQUEsUUFFd0Q7QUFDbERNLElBQUFBLGdCQUFnQixHQUFHLElBQUlDLG9CQUFKLENBQWlCTCxZQUFqQixDQUh6QjtBQUFBLFFBSU1NLDZCQUE2QixHQUFHLElBQUlDLDBCQUFKLENBQXVCTCxnQ0FBdkIsQ0FKdEM7QUFBQSxRQUtNTSw4QkFBOEIsR0FBRyxJQUFJRCwwQkFBSixDQUF1QkosaUNBQXZCLENBTHZDO0FBQUEsUUFNTU0sOEJBQThCLEdBQUcsSUFBSUMsMEJBQUosQ0FBdUJOLGdCQUF2QixDQU52QztBQUFBLFFBT01PLEtBQUssR0FBRyxDQUNOTCw2QkFETSxFQUVORixnQkFGTSxFQUdOSyw4QkFITSxFQUlORCw4QkFKTSxDQVBkO0FBRFksK0ZBZU5HLEtBZk07QUFnQmI7OztFQWpCa0NDLHNCOztBQW9CckNDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmYsc0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IE9uZU9yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lID0gUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gb3BlbkJyYWNrZXQsIC8vL1xuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGNsb3NlQnJhY2tldCwgLy8vXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnRSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzRGVmaW5pdGlvbjsiXX0=