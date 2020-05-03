"use strict";

var _occamLexers = require("occam-lexers");

var _definition = _interopRequireDefault(require("../definition"));

var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));

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

var separator = _occamLexers.specialSymbols.separator,
    terminator = _occamLexers.specialSymbols.terminator;

var RuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RuleDefinition, _Definition);

  function RuleDefinition() {
    _classCallCheck(this, RuleDefinition);

    var separatorTerminalSymbolContent = separator,
        terminatorTerminalSymbolContent = terminator,
        nameRuleName = _ruleNames.NameRuleName,
        definitionsRuleName = _ruleNames.DefinitionsRuleName,
        nameRuleNamePart = new _ruleName["default"](nameRuleName),
        separatorTerminalSymbolPart = new _terminalSymbol["default"](separatorTerminalSymbolContent),
        definitionsRuleNamePart = new _ruleName["default"](definitionsRuleName),
        terminatorTerminalSymbolPart = new _terminalSymbol["default"](terminatorTerminalSymbolContent),
        parts = [nameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(RuleDefinition).call(this, parts));
  }

  return RuleDefinition;
}(_definition["default"]);

module.exports = RuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsic2VwYXJhdG9yIiwic3BlY2lhbFN5bWJvbHMiLCJ0ZXJtaW5hdG9yIiwiUnVsZURlZmluaXRpb24iLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwibmFtZVJ1bGVOYW1lIiwiTmFtZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnNSdWxlTmFtZSIsIkRlZmluaXRpb25zUnVsZU5hbWUiLCJuYW1lUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0Iiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxTLEdBQTBCQywyQixDQUExQkQsUztJQUFXRSxVLEdBQWVELDJCLENBQWZDLFU7O0lBRWJDLGM7OztBQUNKLDRCQUFjO0FBQUE7O0FBQ1osUUFBTUMsOEJBQThCLEdBQUdKLFNBQXZDO0FBQUEsUUFDTUssK0JBQStCLEdBQUdILFVBRHhDO0FBQUEsUUFFTUksWUFBWSxHQUFHQyx1QkFGckI7QUFBQSxRQUdNQyxtQkFBbUIsR0FBR0MsOEJBSDVCO0FBQUEsUUFJTUMsZ0JBQWdCLEdBQUcsSUFBSUMsb0JBQUosQ0FBaUJMLFlBQWpCLENBSnpCO0FBQUEsUUFLTU0sMkJBQTJCLEdBQUcsSUFBSUMsMEJBQUosQ0FBdUJULDhCQUF2QixDQUxwQztBQUFBLFFBTU1VLHVCQUF1QixHQUFHLElBQUlILG9CQUFKLENBQWlCSCxtQkFBakIsQ0FOaEM7QUFBQSxRQU9NTyw0QkFBNEIsR0FBRyxJQUFJRiwwQkFBSixDQUF1QlIsK0JBQXZCLENBUHJDO0FBQUEsUUFRTVcsS0FBSyxHQUFHLENBQ05OLGdCQURNLEVBRU5FLDJCQUZNLEVBR05FLHVCQUhNLEVBSU5DLDRCQUpNLENBUmQ7QUFEWSx1RkFnQk5DLEtBaEJNO0FBaUJiOzs7RUFsQjBCQyxzQjs7QUFxQjdCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJoQixjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcblxuaW1wb3J0IHsgTmFtZVJ1bGVOYW1lLCBEZWZpbml0aW9uc1J1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHNlcGFyYXRvciwgdGVybWluYXRvciB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHNlcGFyYXRvcixcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gdGVybWluYXRvcixcbiAgICAgICAgICBuYW1lUnVsZU5hbWUgPSBOYW1lUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZSA9IERlZmluaXRpb25zUnVsZU5hbWUsXG4gICAgICAgICAgbmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQobmFtZVJ1bGVOYW1lKSxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRlZmluaXRpb25zUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlRGVmaW5pdGlvbjtcbiJdfQ==