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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var TerminalPartRule = /*#__PURE__*/ function(Rule) {
    _inherits(TerminalPartRule, Rule);
    function TerminalPartRule() {
        _class_call_check(this, TerminalPartRule);
        return _call_super(this, TerminalPartRule, arguments);
    }
    _create_class(TerminalPartRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.terminalPartRuleName, epsilonRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.epsilonRuleName), wildcardRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.wildcardRuleName), endOfLineRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.endOfLineRuleName), terminalSymbolRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.terminalSymbolRuleName), noWhitespacePartRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.noWhitespacePartRuleName), regularExpressionRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.regularExpressionRuleName), startOfContentPartRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.startOfContentPartRuleName), significantTokenTypeRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.significantTokenTypeRuleName), opacity = null, definitions = [
                    significantTokenTypeRuleNameDefinition,
                    regularExpressionRuleNameDefinition,
                    terminalSymbolRuleNameDefinition,
                    endOfLineRuleNameDefinition,
                    wildcardRuleNameDefinition,
                    epsilonRuleNameDefinition,
                    noWhitespacePartRuleNameDefinition,
                    startOfContentPartRuleNameDefinition
                ], NonTerminalNode = _terminal.default, terminalPartRule = new TerminalPartRule(name, opacity, definitions, NonTerminalNode);
                return terminalPartRule;
            }
        }
    ]);
    return TerminalPartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Rlcm1pbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9wYXJ0L3Rlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGVwc2lsb25SdWxlTmFtZSxcbiAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWUsXG4gICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZSxcbiAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZSxcbiAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSxcbiAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUsXG4gICAgICAgICBzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZSxcbiAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0ZXJtaW5hbFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBlcHNpbG9uUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShlcHNpbG9uUnVsZU5hbWUpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZSh3aWxkY2FyZFJ1bGVOYW1lKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKGVuZE9mTGluZVJ1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUodGVybWluYWxTeW1ib2xSdWxlTmFtZSksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUobm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSksXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgd2lsZGNhcmRSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBlcHNpbG9uUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHN0YXJ0T2ZDb250ZW50UGFydFJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gVGVybWluYWxQYXJ0Qk5GTm9kZSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydFJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0UnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydFJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZSIsImVwc2lsb25SdWxlTmFtZURlZmluaXRpb24iLCJSdWxlTmFtZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJlcHNpbG9uUnVsZU5hbWUiLCJ3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbiIsIndpbGRjYXJkUnVsZU5hbWUiLCJlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24iLCJlbmRPZkxpbmVSdWxlTmFtZSIsInRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24iLCJub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUiLCJzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZURlZmluaXRpb24iLCJzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIlRlcm1pbmFsUGFydEJORk5vZGUiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7OzJEQWRKOytEQUNjOytEQUNDO3lCQVVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLCtCQUFvQixFQUMzQkMsNEJBQTRCQyxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDQywwQkFBZSxHQUMzRUMsNkJBQTZCSCxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDRywyQkFBZ0IsR0FDN0VDLDhCQUE4QkwsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ0ssNEJBQWlCLEdBQy9FQyxtQ0FBbUNQLGlCQUFrQixDQUFDQyxZQUFZLENBQUNPLGlDQUFzQixHQUN6RkMscUNBQXFDVCxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDUyxtQ0FBd0IsR0FDN0ZDLHNDQUFzQ1gsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ1csb0NBQXlCLEdBQy9GQyx1Q0FBdUNiLGlCQUFrQixDQUFDQyxZQUFZLENBQUNhLHFDQUEwQixHQUNqR0MseUNBQXlDZixpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDZSx1Q0FBNEIsR0FDckdDLFVBQVUsTUFDVkMsY0FBYztvQkFDWkg7b0JBQ0FKO29CQUNBSjtvQkFDQUY7b0JBQ0FGO29CQUNBSjtvQkFDQVU7b0JBQ0FJO2lCQUNELEVBQ0RNLGtCQUFrQkMsaUJBQW1CLEVBQ3JDQyxtQkFBbUIsSUF2QlIxQixpQkF1QjZCRSxNQUFNb0IsU0FBU0MsYUFBYUM7Z0JBRTFFLE9BQU9FO1lBQ1Q7OztXQTFCbUIxQjtFQUF5QjJCLGFBQUkifQ==