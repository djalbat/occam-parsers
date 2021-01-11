"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _definition = _interopRequireDefault(require("../../../definition"));

var _ruleName = _interopRequireDefault(require("../../../part/nonTerminal/ruleName"));

var _optionalPart = _interopRequireDefault(require("../../../part/nonTerminal/optionalPart"));

var _ruleNames = require("../../../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RuleNameNonTerminalPartRuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RuleNameNonTerminalPartRuleDefinition, _Definition);

  var _super = _createSuper(RuleNameNonTerminalPartRuleDefinition);

  function RuleNameNonTerminalPartRuleDefinition() {
    _classCallCheck(this, RuleNameNonTerminalPartRuleDefinition);

    var ruleNameRuleName = _ruleNames.RuleNameRuleName,
        lookAheadModifierRuleName = _ruleNames.LookAheadModifierRuleName,
        ruleNameRuleNamePart = new _ruleName["default"](ruleNameRuleName),
        lookAheadModifierRuleNamePart = new _ruleName["default"](lookAheadModifierRuleName),
        optionalLookAheadRuleNamePartPart = new _optionalPart["default"](lookAheadModifierRuleNamePart),
        parts = [ruleNameRuleNamePart, optionalLookAheadRuleNamePartPart];
    return _super.call(this, parts);
  }

  return RuleNameNonTerminalPartRuleDefinition;
}(_definition["default"]);

exports["default"] = RuleNameNonTerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJydWxlTmFtZVJ1bGVOYW1lIiwiUnVsZU5hbWVSdWxlTmFtZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCIsIm9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0cyIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHFDOzs7OztBQUNuQixtREFBYztBQUFBOztBQUNaLFFBQU1DLGdCQUFnQixHQUFHQywyQkFBekI7QUFBQSxRQUNNQyx5QkFBeUIsR0FBR0Msb0NBRGxDO0FBQUEsUUFFTUMsb0JBQW9CLEdBQUcsSUFBSUMsb0JBQUosQ0FBaUJMLGdCQUFqQixDQUY3QjtBQUFBLFFBR01NLDZCQUE2QixHQUFHLElBQUlELG9CQUFKLENBQWlCSCx5QkFBakIsQ0FIdEM7QUFBQSxRQUlNSyxpQ0FBaUMsR0FBRyxJQUFJQyx3QkFBSixDQUFxQkYsNkJBQXJCLENBSjFDO0FBQUEsUUFLTUcsS0FBSyxHQUFHLENBQ05MLG9CQURNLEVBRU5HLGlDQUZNLENBTGQ7QUFEWSw2QkFXTkUsS0FYTTtBQVliOzs7RUFiZ0VDLHNCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi8uLi8uLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgT3B0aW9uYWxQYXJ0UGFydCBmcm9tIFwiLi4vLi4vLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnRcIjtcblxuaW1wb3J0IHsgUnVsZU5hbWVSdWxlTmFtZSwgTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBydWxlTmFtZVJ1bGVOYW1lID0gUnVsZU5hbWVSdWxlTmFtZSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lID0gTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWVSdWxlTmFtZSksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIG9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxMb29rQWhlYWRSdWxlTmFtZVBhcnRQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIl19