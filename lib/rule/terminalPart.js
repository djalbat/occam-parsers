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
                var name = _ruleNames.terminalPartRuleName, epsilonRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.epsilonRuleName), wildcardRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.wildcardRuleName), endOfLineRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.endOfLineRuleName), terminalSymbolRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.terminalSymbolRuleName), regularExpressionRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.regularExpressionRuleName), significantTokenTypeRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.significantTokenTypeRuleName), ambiguous = false, definitions = [
                    significantTokenTypeRuleNameDefinition,
                    regularExpressionRuleNameDefinition,
                    terminalSymbolRuleNameDefinition,
                    endOfLineRuleNameDefinition,
                    wildcardRuleNameDefinition,
                    epsilonRuleNameDefinition
                ], NonTerminalNode = _terminal.default, terminalPartRule = new TerminalPartRule(name, ambiguous, definitions, NonTerminalNode);
                return terminalPartRule;
            }
        }
    ]);
    return TerminalPartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Rlcm1pbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9wYXJ0L3Rlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGVwc2lsb25SdWxlTmFtZSxcbiAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWUsXG4gICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZSxcbiAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZSxcbiAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUsXG4gICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gdGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUoZXBzaWxvblJ1bGVOYW1lKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUod2lsZGNhcmRSdWxlTmFtZSksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShlbmRPZkxpbmVSdWxlTmFtZSksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUoc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVwc2lsb25SdWxlTmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsUGFydEJORk5vZGUsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZSA9IG5ldyBUZXJtaW5hbFBhcnRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0UnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydFJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZSIsImVwc2lsb25SdWxlTmFtZURlZmluaXRpb24iLCJSdWxlTmFtZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJlcHNpbG9uUnVsZU5hbWUiLCJ3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbiIsIndpbGRjYXJkUnVsZU5hbWUiLCJlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24iLCJlbmRPZkxpbmVSdWxlTmFtZSIsInRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uIiwicmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiVGVybWluYWxQYXJ0Qk5GTm9kZSIsInRlcm1pbmFsUGFydFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OzsyREFaSjsrREFDYzsrREFDQzt5QkFRYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MsK0JBQW9CLEVBQzNCQyw0QkFBNEJDLGlCQUFrQixDQUFDQyxZQUFZLENBQUNDLDBCQUFlLEdBQzNFQyw2QkFBNkJILGlCQUFrQixDQUFDQyxZQUFZLENBQUNHLDJCQUFnQixHQUM3RUMsOEJBQThCTCxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDSyw0QkFBaUIsR0FDL0VDLG1DQUFtQ1AsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ08saUNBQXNCLEdBQ3pGQyxzQ0FBc0NULGlCQUFrQixDQUFDQyxZQUFZLENBQUNTLG9DQUF5QixHQUMvRkMseUNBQXlDWCxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDVyx1Q0FBNEIsR0FDckdDLFlBQVksT0FDWkMsY0FBYztvQkFDWkg7b0JBQ0FGO29CQUNBRjtvQkFDQUY7b0JBQ0FGO29CQUNBSjtpQkFDRCxFQUNEZ0Isa0JBQWtCQyxpQkFBbUIsRUFDckNDLG1CQUFtQixJQW5CUnRCLGlCQW1CNkJFLE1BQU1nQixXQUFXQyxhQUFhQztnQkFFNUUsT0FBT0U7WUFDVDs7O1dBdEJtQnRCO0VBQXlCdUIsYUFBSSJ9