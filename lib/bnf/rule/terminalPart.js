"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _terminal = _interopRequireDefault(require("../node/part/terminal"));
var _ruleName = _interopRequireDefault(require("../definition/ruleName"));
var _ruleNames = require("../ruleNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var TerminalPartRule = /*#__PURE__*/ function(Rule) {
    _inherits(TerminalPartRule, Rule);
    function TerminalPartRule() {
        _classCallCheck(this, TerminalPartRule);
        var name = _ruleNames.TerminalPartRuleName, epsilonRuleName = _ruleNames.EpsilonRuleName, wildcardRuleName = _ruleNames.WildcardRuleName, endOfLineRuleName = _ruleNames.EndOfLineRuleName, terminalSymbolRuleName = _ruleNames.TerminalSymbolRuleName, regularExpressionRuleName = _ruleNames.RegularExpressionRuleName, significantTokenTypeRuleName = _ruleNames.SignificantTokenTypeRuleName, epsilonRuleNameDefinition = new _ruleName.default(epsilonRuleName), wildcardRuleNameDefinition = new _ruleName.default(wildcardRuleName), endOfLineRuleNameDefinition = new _ruleName.default(endOfLineRuleName), terminalSymbolRuleNameDefinition = new _ruleName.default(terminalSymbolRuleName), regularExpressionRuleNameDefinition = new _ruleName.default(regularExpressionRuleName), significantTokenTypeRuleNameDefinition = new _ruleName.default(significantTokenTypeRuleName), definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            epsilonRuleNameDefinition,
            wildcardRuleNameDefinition
        ], Node = _terminal.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalPartRule).call(this, name, definitions, Node));
    }
    return TerminalPartRule;
}(_rule.default);
exports.default = TerminalPartRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS90ZXJtaW5hbFBhcnQuanMiXSwibmFtZXMiOlsiUnVsZSIsIlRlcm1pbmFsUGFydE5vZGUiLCJSdWxlTmFtZURlZmluaXRpb24iLCJUZXJtaW5hbFBhcnRSdWxlTmFtZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIiwiVGVybWluYWxTeW1ib2xSdWxlTmFtZSIsIkVuZE9mTGluZVJ1bGVOYW1lIiwiRXBzaWxvblJ1bGVOYW1lIiwiV2lsZGNhcmRSdWxlTmFtZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJlcHNpbG9uUnVsZU5hbWUiLCJ3aWxkY2FyZFJ1bGVOYW1lIiwiZW5kT2ZMaW5lUnVsZU5hbWUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIiwicmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJlcHNpbG9uUnVsZU5hbWVEZWZpbml0aW9uIiwid2lsZGNhcmRSdWxlTmFtZURlZmluaXRpb24iLCJlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUssR0FBUyxDQUFULEtBQVM7QUFDRyxHQUF1QixDQUF2QixTQUF1QjtBQUNyQixHQUF3QixDQUF4QixTQUF3QjtBQUVxSCxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVySyxnQkFBZ0IsaUJBQXRCLFFBQVE7Y0FBRixnQkFBZ0I7YUFBaEIsZ0JBQWdCOzhCQUFoQixnQkFBZ0I7UUFFakMsR0FBSyxDQUFDLElBQUksR0FKOEosVUFBYyx1QkFLaEwsZUFBZSxHQUxtSixVQUFjLGtCQU1oTCxnQkFBZ0IsR0FOa0osVUFBYyxtQkFPaEwsaUJBQWlCLEdBUGlKLFVBQWMsb0JBUWhMLHNCQUFzQixHQVI0SSxVQUFjLHlCQVNoTCx5QkFBeUIsR0FUeUksVUFBYyw0QkFVaEwsNEJBQTRCLEdBVnNJLFVBQWMsK0JBV2hMLHlCQUF5QixHQUFHLEdBQUcsQ0FiVixTQUF3QixTQWFNLGVBQWUsR0FDbEUsMEJBQTBCLEdBQUcsR0FBRyxDQWRYLFNBQXdCLFNBY08sZ0JBQWdCLEdBQ3BFLDJCQUEyQixHQUFHLEdBQUcsQ0FmWixTQUF3QixTQWVRLGlCQUFpQixHQUN0RSxnQ0FBZ0MsR0FBRyxHQUFHLENBaEJqQixTQUF3QixTQWdCYSxzQkFBc0IsR0FDaEYsbUNBQW1DLEdBQUcsR0FBRyxDQWpCcEIsU0FBd0IsU0FpQmdCLHlCQUF5QixHQUN0RixzQ0FBc0MsR0FBRyxHQUFHLENBbEJ2QixTQUF3QixTQWtCbUIsNEJBQTRCLEdBQzVGLFdBQVcsR0FBRyxDQUFDO1lBQ2Isc0NBQXNDO1lBQ3RDLG1DQUFtQztZQUNuQyxnQ0FBZ0M7WUFDaEMsMkJBQTJCO1lBQzNCLHlCQUF5QjtZQUN6QiwwQkFBMEI7UUFDNUIsQ0FBQyxFQUNELElBQUksR0E1QmUsU0FBdUI7Z0VBSy9CLGdCQUFnQixhQXlCM0IsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQXpCWixnQkFBZ0I7RUFOcEIsS0FBUztrQkFNTCxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnROb2RlIGZyb20gXCIuLi9ub2RlL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcblxuaW1wb3J0IHsgVGVybWluYWxQYXJ0UnVsZU5hbWUsIFJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUsIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUsIFRlcm1pbmFsU3ltYm9sUnVsZU5hbWUsIEVuZE9mTGluZVJ1bGVOYW1lLCBFcHNpbG9uUnVsZU5hbWUsIFdpbGRjYXJkUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IFRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIGVwc2lsb25SdWxlTmFtZSA9IEVwc2lsb25SdWxlTmFtZSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lID0gV2lsZGNhcmRSdWxlTmFtZSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZSA9IEVuZE9mTGluZVJ1bGVOYW1lLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUgPSBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUgPSBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lLFxuICAgICAgICAgIGVwc2lsb25SdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKGVwc2lsb25SdWxlTmFtZSksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHdpbGRjYXJkUnVsZU5hbWUpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oZW5kT2ZMaW5lUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbih0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ocmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gVGVybWluYWxQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl19