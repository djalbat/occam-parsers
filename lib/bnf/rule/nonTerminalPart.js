"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _ruleName = _interopRequireDefault(require("../definition/ruleName"));

var _nonTerminal = _interopRequireDefault(require("../node/part/nonTerminal"));

var _ruleName2 = _interopRequireDefault(require("../definition/partRule/nonTerminal/ruleName"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NonTerminalPartRule = /*#__PURE__*/function (_Rule) {
  _inherits(NonTerminalPartRule, _Rule);

  function NonTerminalPartRule() {
    _classCallCheck(this, NonTerminalPartRule);

    var name = _ruleNames.NonTerminalPartRuleName,
        groupOfPartsRuleName = _ruleNames.GroupOfPartsRuleName,
        choiceOfPartsRuleName = _ruleNames.ChoiceOfPartsRuleName,
        groupOfPartsRuleNameDefinition = new _ruleName["default"](groupOfPartsRuleName),
        choiceOfPartsRuleNameDefinition = new _ruleName["default"](choiceOfPartsRuleName),
        ruleNameNonTerminalPartRuleDefinition = new _ruleName2["default"](),
        definitions = [choiceOfPartsRuleNameDefinition, groupOfPartsRuleNameDefinition, ruleNameNonTerminalPartRuleDefinition],
        Node = _nonTerminal["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartRule).call(this, name, definitions, Node));
  }

  return NonTerminalPartRule;
}(_rule["default"]);

module.exports = NonTerminalPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnRSdWxlIiwibmFtZSIsIk5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiZ3JvdXBPZlBhcnRzUnVsZU5hbWUiLCJHcm91cE9mUGFydHNSdWxlTmFtZSIsImNob2ljZU9mUGFydHNSdWxlTmFtZSIsIkNob2ljZU9mUGFydHNSdWxlTmFtZSIsImdyb3VwT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsImNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIk5vblRlcm1pbmFsUGFydE5vZGUiLCJSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxtQjs7O0FBQ0osaUNBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdDLGtDQUFiO0FBQUEsUUFDTUMsb0JBQW9CLEdBQUdDLCtCQUQ3QjtBQUFBLFFBRU1DLHFCQUFxQixHQUFHQyxnQ0FGOUI7QUFBQSxRQUdNQyw4QkFBOEIsR0FBRyxJQUFJQyxvQkFBSixDQUF1Qkwsb0JBQXZCLENBSHZDO0FBQUEsUUFJTU0sK0JBQStCLEdBQUcsSUFBSUQsb0JBQUosQ0FBdUJILHFCQUF2QixDQUp4QztBQUFBLFFBS01LLHFDQUFxQyxHQUFHLElBQUlDLHFCQUFKLEVBTDlDO0FBQUEsUUFNTUMsV0FBVyxHQUFHLENBQ1pILCtCQURZLEVBRVpGLDhCQUZZLEVBR1pHLHFDQUhZLENBTnBCO0FBQUEsUUFXTUcsSUFBSSxHQUFHQyx1QkFYYjtBQURZLDRGQWNOYixJQWRNLEVBY0FXLFdBZEEsRUFjYUMsSUFkYjtBQWViOzs7RUFoQitCRSxnQjs7QUFtQmxDQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJqQixtQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBOb25UZXJtaW5hbFBhcnROb2RlIGZyb20gXCIuLi9ub2RlL3BhcnQvbm9uVGVybWluYWxcIjtcbmltcG9ydCBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsUGFydFJ1bGVOYW1lLCBDaG9pY2VPZlBhcnRzUnVsZU5hbWUsIEdyb3VwT2ZQYXJ0c1J1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jbGFzcyBOb25UZXJtaW5hbFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBncm91cE9mUGFydHNSdWxlTmFtZSA9IEdyb3VwT2ZQYXJ0c1J1bGVOYW1lLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlTmFtZSA9IENob2ljZU9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBncm91cE9mUGFydHNSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKGdyb3VwT2ZQYXJ0c1J1bGVOYW1lKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihjaG9pY2VPZlBhcnRzUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbFBhcnROb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxQYXJ0UnVsZTtcbiJdfQ==