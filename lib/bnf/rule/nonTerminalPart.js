"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _ruleName = _interopRequireDefault(require("../definition/ruleName"));

var _nonTerminal = _interopRequireDefault(require("../node/part/nonTerminal"));

var _ruleName2 = _interopRequireDefault(require("../definition/partRule/nonTerminal/ruleName"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NonTerminalPartRule = /*#__PURE__*/function (_Rule) {
  _inherits(NonTerminalPartRule, _Rule);

  var _super = _createSuper(NonTerminalPartRule);

  function NonTerminalPartRule() {
    _classCallCheck(this, NonTerminalPartRule);

    var name = _ruleNames.NonTerminalPartRuleName,
        choiceOfPartsRuleName = _ruleNames.ChoiceOfPartsRuleName,
        sequenceOfPartsRuleName = _ruleNames.SequenceOfPartsRuleName,
        choiceOfPartsRuleNameDefinition = new _ruleName["default"](choiceOfPartsRuleName),
        sequenceOfPartsRuleNameDefinition = new _ruleName["default"](sequenceOfPartsRuleName),
        ruleNameNonTerminalPartRuleDefinition = new _ruleName2["default"](),
        definitions = [choiceOfPartsRuleNameDefinition, sequenceOfPartsRuleNameDefinition, ruleNameNonTerminalPartRuleDefinition],
        Node = _nonTerminal["default"];
    return _super.call(this, name, definitions, Node);
  }

  return NonTerminalPartRule;
}(_rule["default"]);

exports["default"] = NonTerminalPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnRSdWxlIiwibmFtZSIsIk5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwiQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwic2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUiLCJTZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSIsImNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJSdWxlTmFtZURlZmluaXRpb24iLCJzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIk5vblRlcm1pbmFsUGFydE5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxtQjs7Ozs7QUFDbkIsaUNBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdDLGtDQUFiO0FBQUEsUUFDTUMscUJBQXFCLEdBQUdDLGdDQUQ5QjtBQUFBLFFBRU1DLHVCQUF1QixHQUFHQyxrQ0FGaEM7QUFBQSxRQUdNQywrQkFBK0IsR0FBRyxJQUFJQyxvQkFBSixDQUF1QkwscUJBQXZCLENBSHhDO0FBQUEsUUFJSU0saUNBQWlDLEdBQUcsSUFBSUQsb0JBQUosQ0FBdUJILHVCQUF2QixDQUp4QztBQUFBLFFBS01LLHFDQUFxQyxHQUFHLElBQUlDLHFCQUFKLEVBTDlDO0FBQUEsUUFNTUMsV0FBVyxHQUFHLENBQ1pMLCtCQURZLEVBRVpFLGlDQUZZLEVBR1pDLHFDQUhZLENBTnBCO0FBQUEsUUFXTUcsSUFBSSxHQUFHQyx1QkFYYjtBQURZLDZCQWNOYixJQWRNLEVBY0FXLFdBZEEsRUFjYUMsSUFkYjtBQWViOzs7RUFoQjhDRSxnQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IFJ1bGVOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9ydWxlTmFtZVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydE5vZGUgZnJvbSBcIi4uL25vZGUvcGFydC9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcGFydFJ1bGUvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsIENob2ljZU9mUGFydHNSdWxlTmFtZSwgU2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IE5vblRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlTmFtZSA9IENob2ljZU9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSA9IFNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKGNob2ljZU9mUGFydHNSdWxlTmFtZSksXG4gICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oc2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbFBhcnROb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXX0=