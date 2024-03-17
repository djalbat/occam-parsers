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
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../definition/ruleName"));
var _terminal = /*#__PURE__*/ _interop_require_default(require("../node/bnf/part/terminal"));
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
        return _super.apply(this, arguments);
    }
    _create_class(TerminalPartRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.terminalPartRuleName, epsilonRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.epsilonRuleName), wildcardRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.wildcardRuleName), endOfLineRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.endOfLineRuleName), terminalSymbolRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.terminalSymbolRuleName), regularExpressionRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.regularExpressionRuleName), significantTokenTypeRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.significantTokenTypeRuleName), opacity = null, definitions = [
                    significantTokenTypeRuleNameDefinition,
                    regularExpressionRuleNameDefinition,
                    terminalSymbolRuleNameDefinition,
                    endOfLineRuleNameDefinition,
                    wildcardRuleNameDefinition,
                    epsilonRuleNameDefinition
                ], NonTerminalNode = _terminal.default, terminalPartRule = new TerminalPartRule(name, opacity, definitions, NonTerminalNode);
                return terminalPartRule;
            }
        }
    ]);
    return TerminalPartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Rlcm1pbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9wYXJ0L3Rlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGVwc2lsb25SdWxlTmFtZSxcbiAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWUsXG4gICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZSxcbiAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZSxcbiAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUsXG4gICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gdGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUoZXBzaWxvblJ1bGVOYW1lKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUod2lsZGNhcmRSdWxlTmFtZSksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShlbmRPZkxpbmVSdWxlTmFtZSksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUoc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVwc2lsb25SdWxlTmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsUGFydEJORk5vZGUsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZSA9IG5ldyBUZXJtaW5hbFBhcnRSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydFJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnRSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwidGVybWluYWxQYXJ0UnVsZU5hbWUiLCJlcHNpbG9uUnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwiZXBzaWxvblJ1bGVOYW1lIiwid2lsZGNhcmRSdWxlTmFtZURlZmluaXRpb24iLCJ3aWxkY2FyZFJ1bGVOYW1lIiwiZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uIiwiZW5kT2ZMaW5lUnVsZU5hbWUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbiIsInRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJUZXJtaW5hbFBhcnRCTkZOb2RlIiwidGVybWluYWxQYXJ0UnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzJEQVpKOytEQUNjOytEQUNDO3lCQVFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsaUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQywrQkFBb0IsRUFDM0JDLDRCQUE0QkMsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ0MsMEJBQWUsR0FDM0VDLDZCQUE2QkgsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ0csMkJBQWdCLEdBQzdFQyw4QkFBOEJMLGlCQUFrQixDQUFDQyxZQUFZLENBQUNLLDRCQUFpQixHQUMvRUMsbUNBQW1DUCxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDTyxpQ0FBc0IsR0FDekZDLHNDQUFzQ1QsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ1Msb0NBQXlCLEdBQy9GQyx5Q0FBeUNYLGlCQUFrQixDQUFDQyxZQUFZLENBQUNXLHVDQUE0QixHQUNyR0MsVUFBVSxNQUNWQyxjQUFjO29CQUNaSDtvQkFDQUY7b0JBQ0FGO29CQUNBRjtvQkFDQUY7b0JBQ0FKO2lCQUNELEVBQ0RnQixrQkFBa0JDLGlCQUFtQixFQUNyQ0MsbUJBQW1CLElBbkJSdEIsaUJBbUI2QkUsTUFBTWdCLFNBQVNDLGFBQWFDO2dCQUUxRSxPQUFPRTtZQUNUOzs7V0F0Qm1CdEI7RUFBeUJ1QixhQUFJIn0=