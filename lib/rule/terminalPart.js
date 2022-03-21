"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _terminal = _interopRequireDefault(require("../node/bnf/part/terminal"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var TerminalPartRule = /*#__PURE__*/ function(Rule) {
    _inherits(TerminalPartRule, Rule);
    var _super = _createSuper(TerminalPartRule);
    function TerminalPartRule() {
        _classCallCheck(this, TerminalPartRule);
        var name = _ruleNames.TerminalPartRuleName, wildcardRuleName = _ruleNames.WildcardRuleName, endOfLineRuleName = _ruleNames.EndOfLineRuleName, terminalSymbolRuleName = _ruleNames.TerminalSymbolRuleName, regularExpressionRuleName = _ruleNames.RegularExpressionRuleName, significantTokenTypeRuleName = _ruleNames.SignificantTokenTypeRuleName, wildcardRuleNameDefinition = new _ruleName.default(wildcardRuleName), endOfLineRuleNameDefinition = new _ruleName.default(endOfLineRuleName), terminalSymbolRuleNameDefinition = new _ruleName.default(terminalSymbolRuleName), regularExpressionRuleNameDefinition = new _ruleName.default(regularExpressionRuleName), significantTokenTypeRuleNameDefinition = new _ruleName.default(significantTokenTypeRuleName), ambiguous = false, definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            wildcardRuleNameDefinition
        ], Node = _terminal.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return TerminalPartRule;
}(_rule.default);
exports.default = TerminalPartRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Rlcm1pbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5cbmltcG9ydCB7IFRlcm1pbmFsUGFydFJ1bGVOYW1lLCBSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lLCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lLCBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLCBFbmRPZkxpbmVSdWxlTmFtZSwgV2lsZGNhcmRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgd2lsZGNhcmRSdWxlTmFtZSA9IFdpbGRjYXJkUnVsZU5hbWUsXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWUgPSBFbmRPZkxpbmVSdWxlTmFtZSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lID0gVGVybWluYWxTeW1ib2xSdWxlTmFtZSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lID0gUmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lID0gU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24od2lsZGNhcmRSdWxlTmFtZSksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihlbmRPZkxpbmVSdWxlTmFtZSksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFRlcm1pbmFsUGFydEJORk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydFJ1bGUiLCJuYW1lIiwiVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJ3aWxkY2FyZFJ1bGVOYW1lIiwiV2lsZGNhcmRSdWxlTmFtZSIsImVuZE9mTGluZVJ1bGVOYW1lIiwiRW5kT2ZMaW5lUnVsZU5hbWUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIiwiVGVybWluYWxTeW1ib2xSdWxlTmFtZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJ3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsImVuZE9mTGluZVJ1bGVOYW1lRGVmaW5pdGlvbiIsInRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uIiwicmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24iLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbiIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9kZSIsIlRlcm1pbmFsUGFydEJORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRWlCLElBQUEsS0FBUyxrQ0FBVCxTQUFTLEVBQUE7QUFDTSxJQUFBLFNBQTJCLGtDQUEzQiwyQkFBMkIsRUFBQTtBQUM1QixJQUFBLFNBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTtBQUVvRyxJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7OztLQU56Szs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQVFlLElBQUEsQUFBTUEsZ0JBQWdCLGlCQ1JsQyxBRFFZO3FDQVJmOzthQVFxQkEsZ0JBQWdCOytDQVJyQztRQVVJLElBQU1DLElBQUksR0FBR0MsVUFBb0IscUJBQUEsRUFDM0JDLGdCQUFnQixHQUFHQyxVQUFnQixpQkFBQSxFQUNuQ0MsaUJBQWlCLEdBQUdDLFVBQWlCLGtCQUFBLEVBQ3JDQyxzQkFBc0IsR0FBR0MsVUFBc0IsdUJBQUEsRUFDL0NDLHlCQUF5QixHQUFHQyxVQUF5QiwwQkFBQSxFQUNyREMsNEJBQTRCLEdBQUdDLFVBQTRCLDZCQUFBLEVBQzNEQywwQkFBMEIsR0FBRyxJQUFJQyxTQUFrQixTQUFDWCxnQkFBZ0IsQ0FBQyxFQUNyRVksMkJBQTJCLEdBQUcsSUFBSUQsU0FBa0IsU0FBQ1QsaUJBQWlCLENBQUMsRUFDdkVXLGdDQUFnQyxHQUFHLElBQUlGLFNBQWtCLFNBQUNQLHNCQUFzQixDQUFDLEVBQ2pGVSxtQ0FBbUMsR0FBRyxJQUFJSCxTQUFrQixTQUFDTCx5QkFBeUIsQ0FBQyxFQUN2RlMsc0NBQXNDLEdBQUcsSUFBSUosU0FBa0IsU0FBQ0gsNEJBQTRCLENBQUMsRUFDN0ZRLFNBQVMsR0FBRyxLQUFLLEVBQ2pCQyxXQUFXLEdBQUc7WUFDWkYsc0NBQXNDO1lBQ3RDRCxtQ0FBbUM7WUFDbkNELGdDQUFnQztZQUNoQ0QsMkJBQTJCO1lBQzNCRiwwQkFBMEI7U0FDM0IsRUFDRFEsSUFBSSxHQUFHQyxTQUFtQixRQUFBLEFBQUM7aUNBRTNCckIsSUFBSSxFQUFFa0IsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLElBQUk7OztDQUUzQyxDQXpCNkNFLEtBQUksU0F5QmpEO2tCQXpCb0J2QixnQkFBZ0IsQUFSckMifQ==