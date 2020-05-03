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

var NonTerminalPartRuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(NonTerminalPartRuleDefinition, _Definition);

  function NonTerminalPartRuleDefinition() {
    _classCallCheck(this, NonTerminalPartRuleDefinition);

    var quantifierRuleName = _ruleNames.QuantifierRuleName,
        nonTerminalPartRuleName = _ruleNames.NonTerminalPartRuleName,
        quantifierRuleNamePart = new _ruleName["default"](quantifierRuleName),
        nonTerminalPartRuleNamePart = new _ruleName["default"](nonTerminalPartRuleName),
        zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts["default"](quantifierRuleNamePart),
        parts = [nonTerminalPartRuleNamePart, zeroOrMoreQuantifierRuleNamePartsPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartRuleDefinition).call(this, parts));
  }

  return NonTerminalPartRuleDefinition;
}(_definition["default"]);

exports["default"] = NonTerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwicXVhbnRpZmllclJ1bGVOYW1lIiwiUXVhbnRpZmllclJ1bGVOYW1lIiwibm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSIsInF1YW50aWZpZXJSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw2Qjs7O0FBQ25CLDJDQUFjO0FBQUE7O0FBQ1osUUFBTUMsa0JBQWtCLEdBQUdDLDZCQUEzQjtBQUFBLFFBQ01DLHVCQUF1QixHQUFHQyxrQ0FEaEM7QUFBQSxRQUVNQyxzQkFBc0IsR0FBRyxJQUFJQyxvQkFBSixDQUFpQkwsa0JBQWpCLENBRi9CO0FBQUEsUUFHTU0sMkJBQTJCLEdBQUcsSUFBSUQsb0JBQUosQ0FBaUJILHVCQUFqQixDQUhwQztBQUFBLFFBSU1LLHFDQUFxQyxHQUFHLElBQUlDLDJCQUFKLENBQXdCSixzQkFBeEIsQ0FKOUM7QUFBQSxRQUtNSyxLQUFLLEdBQUcsQ0FDTkgsMkJBRE0sRUFFTkMscUNBRk0sQ0FMZDtBQURZLHNHQVdORSxLQVhNO0FBWWI7OztFQWJ3REMsc0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBaZXJvT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBRdWFudGlmaWVyUnVsZU5hbWUsIE5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWUgPSBRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZU5hbWUgPSBOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChxdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQobm9uVGVybWluYWxQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChxdWFudGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXX0=