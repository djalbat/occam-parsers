"use strict";

var _occamLexers = require("occam-lexers");

var _definition = _interopRequireDefault(require("../definition"));

var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));

var _groupOfParts = _interopRequireDefault(require("../part/nonTerminal/groupOfParts"));

var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));

var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var verticalBar = _occamLexers.specialSymbols.verticalBar,
    openBracket = _occamLexers.specialSymbols.openBracket,
    closeBracket = _occamLexers.specialSymbols.closeBracket;

var ChoiceOfPartsDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(ChoiceOfPartsDefinition, _Definition);

  function ChoiceOfPartsDefinition() {
    _classCallCheck(this, ChoiceOfPartsDefinition);

    var partRuleName = _ruleNames.PartRuleName,
        verticalBarTerminalSymbolContent = verticalBar,
        ///
    openBracketTerminalSymbolContent = openBracket,
        ///
    closeBracketTerminalSymbolContent = closeBracket,
        ///
    partRuleNamePart = new _ruleName["default"](partRuleName),
        verticalBarTerminalSymbolPart = new _terminalSymbol["default"](verticalBarTerminalSymbolContent),
        openBracketTerminalSymbolPart = new _terminalSymbol["default"](openBracketTerminalSymbolContent),
        closeBracketTerminalSymbolPart = new _terminalSymbol["default"](closeBracketTerminalSymbolContent),
        verticalBarTerminalSymbolThenPartRuleNameParts = [verticalBarTerminalSymbolPart, partRuleNamePart],
        groupOfPartsPart = new _groupOfParts["default"](verticalBarTerminalSymbolThenPartRuleNameParts),
        oneOrMoreGroupOfPartsPart = new _oneOrMoreParts["default"](groupOfPartsPart),
        parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMoreGroupOfPartsPart, closeBracketTerminalSymbolPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsDefinition).call(this, parts));
  }

  return ChoiceOfPartsDefinition;
}(_definition["default"]);

module.exports = ChoiceOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsidmVydGljYWxCYXIiLCJzcGVjaWFsU3ltYm9scyIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJwYXJ0UnVsZU5hbWUiLCJQYXJ0UnVsZU5hbWUiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzIiwiZ3JvdXBPZlBhcnRzUGFydCIsIkdyb3VwT2ZQYXJ0c1BhcnQiLCJvbmVPck1vcmVHcm91cE9mUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwicGFydHMiLCJEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxXLEdBQTJDQywyQixDQUEzQ0QsVztJQUFhRSxXLEdBQThCRCwyQixDQUE5QkMsVztJQUFhQyxZLEdBQWlCRiwyQixDQUFqQkUsWTs7SUFFNUJDLHVCOzs7QUFDSixxQ0FBYztBQUFBOztBQUNaLFFBQU1DLFlBQVksR0FBR0MsdUJBQXJCO0FBQUEsUUFDTUMsZ0NBQWdDLEdBQUdQLFdBRHpDO0FBQUEsUUFDc0Q7QUFDaERRLElBQUFBLGdDQUFnQyxHQUFHTixXQUZ6QztBQUFBLFFBRXNEO0FBQ2hETyxJQUFBQSxpQ0FBaUMsR0FBR04sWUFIMUM7QUFBQSxRQUd3RDtBQUNsRE8sSUFBQUEsZ0JBQWdCLEdBQUcsSUFBSUMsb0JBQUosQ0FBaUJOLFlBQWpCLENBSnpCO0FBQUEsUUFLTU8sNkJBQTZCLEdBQUcsSUFBSUMsMEJBQUosQ0FBdUJOLGdDQUF2QixDQUx0QztBQUFBLFFBTU1PLDZCQUE2QixHQUFHLElBQUlELDBCQUFKLENBQXVCTCxnQ0FBdkIsQ0FOdEM7QUFBQSxRQU9NTyw4QkFBOEIsR0FBRyxJQUFJRiwwQkFBSixDQUF1QkosaUNBQXZCLENBUHZDO0FBQUEsUUFRTU8sOENBQThDLEdBQUcsQ0FDL0NKLDZCQUQrQyxFQUUvQ0YsZ0JBRitDLENBUnZEO0FBQUEsUUFZTU8sZ0JBQWdCLEdBQUcsSUFBSUMsd0JBQUosQ0FBcUJGLDhDQUFyQixDQVp6QjtBQUFBLFFBYU1HLHlCQUF5QixHQUFHLElBQUlDLDBCQUFKLENBQXVCSCxnQkFBdkIsQ0FibEM7QUFBQSxRQWNNSSxLQUFLLEdBQUcsQ0FDTlAsNkJBRE0sRUFFTkosZ0JBRk0sRUFHTlMseUJBSE0sRUFJTkosOEJBSk0sQ0FkZDtBQURZLGdHQXNCTk0sS0F0Qk07QUF1QmI7OztFQXhCbUNDLHNCOztBQTJCdENDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBCLHVCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBHcm91cE9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL2dyb3VwT2ZQYXJ0c1wiO1xuaW1wb3J0IE9uZU9yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyBQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgdmVydGljYWxCYXIsIG9wZW5CcmFja2V0LCBjbG9zZUJyYWNrZXQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB2ZXJ0aWNhbEJhciwgLy8vXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCwgLy8vXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gY2xvc2VCcmFja2V0LCAvLy9cbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5QYXJ0UnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUGFydCA9IG5ldyBHcm91cE9mUGFydHNQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuUGFydFJ1bGVOYW1lUGFydHMpLFxuICAgICAgICAgIG9uZU9yTW9yZUdyb3VwT2ZQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGdyb3VwT2ZQYXJ0c1BhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlR3JvdXBPZlBhcnRzUGFydCxcbiAgICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNEZWZpbml0aW9uO1xuIl19