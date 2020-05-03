"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _definition = _interopRequireDefault(require("../../definition"));

var _ruleName = _interopRequireDefault(require("../../part/nonTerminal/ruleName"));

var _zeroOrMoreParts = _interopRequireDefault(require("../../part/nonTerminal/zeroOrMoreParts"));

var _ruleNames = require("../../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TerminalPartRuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(TerminalPartRuleDefinition, _Definition);

  function TerminalPartRuleDefinition() {
    _classCallCheck(this, TerminalPartRuleDefinition);

    var quantifierRuleName = _ruleNames.QuantifierRuleName,
        terminalPartRuleName = _ruleNames.TerminalPartRuleName,
        quantifierRuleNamePart = new _ruleName["default"](quantifierRuleName),
        terminalPartRuleNamePart = new _ruleName["default"](terminalPartRuleName),
        zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts["default"](quantifierRuleNamePart),
        parts = [terminalPartRuleNamePart, zeroOrMoreQuantifierRuleNamePartsPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(TerminalPartRuleDefinition).call(this, parts));
  }

  return TerminalPartRuleDefinition;
}(_definition["default"]);

exports["default"] = TerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwicXVhbnRpZmllclJ1bGVOYW1lIiwiUXVhbnRpZmllclJ1bGVOYW1lIiwidGVybWluYWxQYXJ0UnVsZU5hbWUiLCJUZXJtaW5hbFBhcnRSdWxlTmFtZSIsInF1YW50aWZpZXJSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSwwQjs7O0FBQ25CLHdDQUFjO0FBQUE7O0FBQ1osUUFBTUMsa0JBQWtCLEdBQUdDLDZCQUEzQjtBQUFBLFFBQ01DLG9CQUFvQixHQUFHQywrQkFEN0I7QUFBQSxRQUVNQyxzQkFBc0IsR0FBRyxJQUFJQyxvQkFBSixDQUFpQkwsa0JBQWpCLENBRi9CO0FBQUEsUUFHTU0sd0JBQXdCLEdBQUcsSUFBSUQsb0JBQUosQ0FBaUJILG9CQUFqQixDQUhqQztBQUFBLFFBSU1LLHFDQUFxQyxHQUFHLElBQUlDLDJCQUFKLENBQXdCSixzQkFBeEIsQ0FKOUM7QUFBQSxRQUtNSyxLQUFLLEdBQUcsQ0FDTkgsd0JBRE0sRUFFTkMscUNBRk0sQ0FMZDtBQURZLG1HQVdORSxLQVhNO0FBWWI7OztFQWJxREMsc0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBaZXJvT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBRdWFudGlmaWVyUnVsZU5hbWUsIFRlcm1pbmFsUGFydFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWUgPSBRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZU5hbWUgPSBUZXJtaW5hbFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChxdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQodGVybWluYWxQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChxdWFudGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXX0=