"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalPartRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _terminal = /*#__PURE__*/ _interop_require_default(require("../node/bnf/part/terminal"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../definition/ruleName"));
var _ruleNames = require("../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var TerminalPartRule = /*#__PURE__*/ function(Rule) {
    _inherits(TerminalPartRule, Rule);
    var _super = _create_super(TerminalPartRule);
    function TerminalPartRule() {
        _class_call_check(this, TerminalPartRule);
        var name = _ruleNames.terminalPartRuleName, epsilonRuleNameDefinition = new _ruleName.default(_ruleNames.epsilonRuleName), wildcardRuleNameDefinition = new _ruleName.default(_ruleNames.wildcardRuleName), endOfLineRuleNameDefinition = new _ruleName.default(_ruleNames.endOfLineRuleName), terminalSymbolRuleNameDefinition = new _ruleName.default(_ruleNames.terminalSymbolRuleName), regularExpressionRuleNameDefinition = new _ruleName.default(_ruleNames.regularExpressionRuleName), significantTokenTypeRuleNameDefinition = new _ruleName.default(_ruleNames.significantTokenTypeRuleName), ambiguous = false, definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            wildcardRuleNameDefinition,
            epsilonRuleNameDefinition
        ], Node = _terminal.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return TerminalPartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Rlcm1pbmFsUGFydC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5cbmltcG9ydCB7IGVwc2lsb25SdWxlTmFtZSxcbiAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWUsXG4gICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZSxcbiAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZSxcbiAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUsXG4gICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0ZXJtaW5hbFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBlcHNpbG9uUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihlcHNpbG9uUnVsZU5hbWUpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbih3aWxkY2FyZFJ1bGVOYW1lKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKGVuZE9mTGluZVJ1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24odGVybWluYWxTeW1ib2xSdWxlTmFtZSksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lKSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVuZE9mTGluZVJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFRlcm1pbmFsUGFydEJORk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnRSdWxlIiwibmFtZSIsInRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsImVwc2lsb25SdWxlTmFtZSIsIndpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uIiwid2lsZGNhcmRSdWxlTmFtZSIsImVuZE9mTGluZVJ1bGVOYW1lRGVmaW5pdGlvbiIsImVuZE9mTGluZVJ1bGVOYW1lIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIiwicmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24iLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24iLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiVGVybWluYWxQYXJ0Qk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzJEQVpKOytEQUNlOytEQUNEO3lCQVFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLGlDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7UUFFakIsSUFBTUMsT0FBT0MsK0JBQW9CLEVBQzNCQyw0QkFBNEIsSUFBSUMsaUJBQWtCLENBQUNDLDBCQUFlLEdBQ2xFQyw2QkFBNkIsSUFBSUYsaUJBQWtCLENBQUNHLDJCQUFnQixHQUNwRUMsOEJBQThCLElBQUlKLGlCQUFrQixDQUFDSyw0QkFBaUIsR0FDdEVDLG1DQUFtQyxJQUFJTixpQkFBa0IsQ0FBQ08saUNBQXNCLEdBQ2hGQyxzQ0FBc0MsSUFBSVIsaUJBQWtCLENBQUNTLG9DQUF5QixHQUN0RkMseUNBQXlDLElBQUlWLGlCQUFrQixDQUFDVyx1Q0FBNEIsR0FDNUZDLFlBQVksS0FBSyxFQUNqQkMsY0FBYztZQUNaSDtZQUNBRjtZQUNBRjtZQUNBRjtZQUNBRjtZQUNBSDtTQUNELEVBQ0RlLE9BQU9DLGlCQUFtQjtpQ0FFMUJsQixNQUFNZSxXQUFXQyxhQUFhQzs7V0FwQm5CbEI7RUFBeUJvQixhQUFJIn0=