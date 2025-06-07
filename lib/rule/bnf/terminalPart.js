"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalPartBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../../definition/ruleName"));
var _terminal = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/part/terminal"));
var _ruleNames = require("../../ruleNames");
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
var TerminalPartBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(TerminalPartBNFRule, Rule);
    function TerminalPartBNFRule() {
        _class_call_check(this, TerminalPartBNFRule);
        return _call_super(this, TerminalPartBNFRule, arguments);
    }
    _create_class(TerminalPartBNFRule, null, [
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
                ], NonTerminalNode = _terminal.default, terminalPartRule = new TerminalPartBNFRule(name, opacity, definitions, NonTerminalNode);
                return terminalPartRule;
            }
        }
    ]);
    return TerminalPartBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi90ZXJtaW5hbFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0Qk5GTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ibmYvcGFydC90ZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBlcHNpbG9uUnVsZU5hbWUsXG4gICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lLFxuICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWUsXG4gICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZSxcbiAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUsXG4gICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUsXG4gICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lLFxuICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWUsXG4gICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnRCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gdGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUoZXBzaWxvblJ1bGVOYW1lKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUod2lsZGNhcmRSdWxlTmFtZSksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShlbmRPZkxpbmVSdWxlTmFtZSksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUpLFxuICAgICAgICAgIHN0YXJ0T2ZDb250ZW50UGFydFJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUoc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lKSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVuZE9mTGluZVJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsUGFydEJORk5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydEJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0UnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1pbmFsUGFydEJORlJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZSIsImVwc2lsb25SdWxlTmFtZURlZmluaXRpb24iLCJSdWxlTmFtZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJlcHNpbG9uUnVsZU5hbWUiLCJ3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbiIsIndpbGRjYXJkUnVsZU5hbWUiLCJlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24iLCJlbmRPZkxpbmVSdWxlTmFtZSIsInRlcm1pbmFsU3ltYm9sUnVsZU5hbWVEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24iLCJub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUiLCJzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZURlZmluaXRpb24iLCJzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIlRlcm1pbmFsUGFydEJORk5vZGUiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7OzJEQWRKOytEQUNjOytEQUNDO3lCQVVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MsK0JBQW9CLEVBQzNCQyw0QkFBNEJDLGlCQUFrQixDQUFDQyxZQUFZLENBQUNDLDBCQUFlLEdBQzNFQyw2QkFBNkJILGlCQUFrQixDQUFDQyxZQUFZLENBQUNHLDJCQUFnQixHQUM3RUMsOEJBQThCTCxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDSyw0QkFBaUIsR0FDL0VDLG1DQUFtQ1AsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ08saUNBQXNCLEdBQ3pGQyxxQ0FBcUNULGlCQUFrQixDQUFDQyxZQUFZLENBQUNTLG1DQUF3QixHQUM3RkMsc0NBQXNDWCxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDVyxvQ0FBeUIsR0FDL0ZDLHVDQUF1Q2IsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ2EscUNBQTBCLEdBQ2pHQyx5Q0FBeUNmLGlCQUFrQixDQUFDQyxZQUFZLENBQUNlLHVDQUE0QixHQUNyR0MsVUFBVSxNQUNWQyxjQUFjO29CQUNaSDtvQkFDQUo7b0JBQ0FKO29CQUNBRjtvQkFDQUY7b0JBQ0FKO29CQUNBVTtvQkFDQUk7aUJBQ0QsRUFDRE0sa0JBQWtCQyxpQkFBbUIsRUFDckNDLG1CQUFtQixJQXZCUjFCLG9CQXVCZ0NFLE1BQU1vQixTQUFTQyxhQUFhQztnQkFFN0UsT0FBT0U7WUFDVDs7O1dBMUJtQjFCO0VBQTRCMkIsYUFBSSJ9