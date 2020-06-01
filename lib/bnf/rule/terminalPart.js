"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _terminal = _interopRequireDefault(require("../node/part/terminal"));

var _ruleName = _interopRequireDefault(require("../definition/ruleName"));

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

var TerminalPartRule = /*#__PURE__*/function (_Rule) {
  _inherits(TerminalPartRule, _Rule);

  var _super = _createSuper(TerminalPartRule);

  function TerminalPartRule() {
    _classCallCheck(this, TerminalPartRule);

    var name = _ruleNames.TerminalPartRuleName,
        epsilonRuleName = _ruleNames.EpsilonRuleName,
        wildcardRuleName = _ruleNames.WildcardRuleName,
        endOfLineRuleName = _ruleNames.EndOfLineRuleName,
        terminalSymbolRuleName = _ruleNames.TerminalSymbolRuleName,
        regularExpressionRuleName = _ruleNames.RegularExpressionRuleName,
        significantTokenTypeRuleName = _ruleNames.SignificantTokenTypeRuleName,
        epsilonRuleNameDefinition = new _ruleName["default"](epsilonRuleName),
        wildcardRuleNameDefinition = new _ruleName["default"](wildcardRuleName),
        endOfLineRuleNameDefinition = new _ruleName["default"](endOfLineRuleName),
        terminalSymbolRuleNameDefinition = new _ruleName["default"](terminalSymbolRuleName),
        regularExpressionRuleNameDefinition = new _ruleName["default"](regularExpressionRuleName),
        significantTokenTypeRuleNameDefinition = new _ruleName["default"](significantTokenTypeRuleName),
        definitions = [significantTokenTypeRuleNameDefinition, regularExpressionRuleNameDefinition, terminalSymbolRuleNameDefinition, endOfLineRuleNameDefinition, epsilonRuleNameDefinition, wildcardRuleNameDefinition],
        Node = _terminal["default"];
    return _super.call(this, name, definitions, Node);
  }

  return TerminalPartRule;
}(_rule["default"]);

exports["default"] = TerminalPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnRSdWxlIiwibmFtZSIsIlRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiZXBzaWxvblJ1bGVOYW1lIiwiRXBzaWxvblJ1bGVOYW1lIiwid2lsZGNhcmRSdWxlTmFtZSIsIldpbGRjYXJkUnVsZU5hbWUiLCJlbmRPZkxpbmVSdWxlTmFtZSIsIkVuZE9mTGluZVJ1bGVOYW1lIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZSIsIlRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwiUmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIiwiZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIndpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uIiwiZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24iLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiVGVybWluYWxQYXJ0Tm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7OztBQUNuQiw4QkFBYztBQUFBOztBQUNaLFFBQU1DLElBQUksR0FBR0MsK0JBQWI7QUFBQSxRQUNNQyxlQUFlLEdBQUdDLDBCQUR4QjtBQUFBLFFBRU1DLGdCQUFnQixHQUFHQywyQkFGekI7QUFBQSxRQUdNQyxpQkFBaUIsR0FBR0MsNEJBSDFCO0FBQUEsUUFJTUMsc0JBQXNCLEdBQUdDLGlDQUovQjtBQUFBLFFBS01DLHlCQUF5QixHQUFHQyxvQ0FMbEM7QUFBQSxRQU1NQyw0QkFBNEIsR0FBR0MsdUNBTnJDO0FBQUEsUUFPTUMseUJBQXlCLEdBQUcsSUFBSUMsb0JBQUosQ0FBdUJiLGVBQXZCLENBUGxDO0FBQUEsUUFRTWMsMEJBQTBCLEdBQUcsSUFBSUQsb0JBQUosQ0FBdUJYLGdCQUF2QixDQVJuQztBQUFBLFFBU01hLDJCQUEyQixHQUFHLElBQUlGLG9CQUFKLENBQXVCVCxpQkFBdkIsQ0FUcEM7QUFBQSxRQVVNWSxnQ0FBZ0MsR0FBRyxJQUFJSCxvQkFBSixDQUF1QlAsc0JBQXZCLENBVnpDO0FBQUEsUUFXTVcsbUNBQW1DLEdBQUcsSUFBSUosb0JBQUosQ0FBdUJMLHlCQUF2QixDQVg1QztBQUFBLFFBWU1VLHNDQUFzQyxHQUFHLElBQUlMLG9CQUFKLENBQXVCSCw0QkFBdkIsQ0FaL0M7QUFBQSxRQWFNUyxXQUFXLEdBQUcsQ0FDWkQsc0NBRFksRUFFWkQsbUNBRlksRUFHWkQsZ0NBSFksRUFJWkQsMkJBSlksRUFLWkgseUJBTFksRUFNWkUsMEJBTlksQ0FicEI7QUFBQSxRQXFCTU0sSUFBSSxHQUFHQyxvQkFyQmI7QUFEWSw2QkF3Qk52QixJQXhCTSxFQXdCQXFCLFdBeEJBLEVBd0JhQyxJQXhCYjtBQXlCYjs7O0VBMUIyQ0UsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnROb2RlIGZyb20gXCIuLi9ub2RlL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcblxuaW1wb3J0IHsgVGVybWluYWxQYXJ0UnVsZU5hbWUsIFJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUsIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUsIFRlcm1pbmFsU3ltYm9sUnVsZU5hbWUsIEVuZE9mTGluZVJ1bGVOYW1lLCBFcHNpbG9uUnVsZU5hbWUsIFdpbGRjYXJkUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IFRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIGVwc2lsb25SdWxlTmFtZSA9IEVwc2lsb25SdWxlTmFtZSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lID0gV2lsZGNhcmRSdWxlTmFtZSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZSA9IEVuZE9mTGluZVJ1bGVOYW1lLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUgPSBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUgPSBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lLFxuICAgICAgICAgIGVwc2lsb25SdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKGVwc2lsb25SdWxlTmFtZSksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHdpbGRjYXJkUnVsZU5hbWUpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oZW5kT2ZMaW5lUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbih0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ocmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gVGVybWluYWxQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl19