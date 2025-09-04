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
                var ruleName;
                var name = _ruleNames.TERMINAL_PART_RULE_NAME;
                ruleName = _ruleNames.EPSILON_RULE_NAME;
                var epsilonRuleNameDefinition = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.WILDCARD_RULE_NAME;
                var wildcardRuleNameDefinition = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.END_OF_LINE_RULE_NAME;
                var endOfLineRuleNameDefinition = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.STRING_LITERAL_RULE_NAME;
                var stringLiteralRuleNameDefinition = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.NO_WHITESPACE_PART_RULE_NAME;
                var noWhitespacePartRuleNameDefinition = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.REGULAR_EXPRESSION_RULE_NAME;
                var regularExpressionRuleNameDefinition = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.START_OF_CONTENT_PART_RULE_NAME;
                var startOfContentPartRuleNameDefinition = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.SIGNIFICANT_TOKEN_TYPE_RULE_NAME;
                var significantTokenTypeRuleNameDefinition = _ruleName.default.fromRuleName(ruleName), opacity = null, definitions = [
                    significantTokenTypeRuleNameDefinition,
                    regularExpressionRuleNameDefinition,
                    stringLiteralRuleNameDefinition,
                    endOfLineRuleNameDefinition,
                    wildcardRuleNameDefinition,
                    epsilonRuleNameDefinition,
                    noWhitespacePartRuleNameDefinition,
                    startOfContentPartRuleNameDefinition
                ], terminalPartRule = new TerminalPartBNFRule(name, opacity, definitions);
                return terminalPartRule;
            }
        }
    ]);
    return TerminalPartBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi90ZXJtaW5hbFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5cbmltcG9ydCB7IEVQU0lMT05fUlVMRV9OQU1FLFxuICAgICAgICAgV0lMRENBUkRfUlVMRV9OQU1FLFxuICAgICAgICAgRU5EX09GX0xJTkVfUlVMRV9OQU1FLFxuICAgICAgICAgVEVSTUlOQUxfUEFSVF9SVUxFX05BTUUsXG4gICAgICAgICBTVFJJTkdfTElURVJBTF9SVUxFX05BTUUsXG4gICAgICAgICBOT19XSElURVNQQUNFX1BBUlRfUlVMRV9OQU1FLFxuICAgICAgICAgUkVHVUxBUl9FWFBSRVNTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFNUQVJUX09GX0NPTlRFTlRfUEFSVF9SVUxFX05BTUUsXG4gICAgICAgICBTSUdOSUZJQ0FOVF9UT0tFTl9UWVBFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxQYXJ0Qk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHJ1bGVOYW1lO1xuXG4gICAgY29uc3QgbmFtZSA9IFRFUk1JTkFMX1BBUlRfUlVMRV9OQU1FO1xuXG4gICAgcnVsZU5hbWUgPSBFUFNJTE9OX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IGVwc2lsb25SdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJ1bGVOYW1lID0gV0lMRENBUkRfUlVMRV9OQU1FO1xuXG4gICAgY29uc3Qgd2lsZGNhcmRSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJ1bGVOYW1lID0gRU5EX09GX0xJTkVfUlVMRV9OQU1FO1xuXG4gICAgY29uc3QgZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBydWxlTmFtZSA9IFNUUklOR19MSVRFUkFMX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJ1bGVOYW1lID0gTk9fV0hJVEVTUEFDRV9QQVJUX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJ1bGVOYW1lID0gUkVHVUxBUl9FWFBSRVNTSU9OX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBydWxlTmFtZSA9IFNUQVJUX09GX0NPTlRFTlRfUEFSVF9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJ1bGVOYW1lID0gU0lHTklGSUNBTlRfVE9LRU5fVFlQRV9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHN0cmluZ0xpdGVyYWxSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVwc2lsb25SdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydEJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydFJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnRCTkZSdWxlIiwiZnJvbU5vdGhpbmciLCJydWxlTmFtZSIsIm5hbWUiLCJURVJNSU5BTF9QQVJUX1JVTEVfTkFNRSIsIkVQU0lMT05fUlVMRV9OQU1FIiwiZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsIldJTERDQVJEX1JVTEVfTkFNRSIsIndpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uIiwiRU5EX09GX0xJTkVfUlVMRV9OQU1FIiwiZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uIiwiU1RSSU5HX0xJVEVSQUxfUlVMRV9OQU1FIiwic3RyaW5nTGl0ZXJhbFJ1bGVOYW1lRGVmaW5pdGlvbiIsIk5PX1dISVRFU1BBQ0VfUEFSVF9SVUxFX05BTUUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uIiwiUkVHVUxBUl9FWFBSRVNTSU9OX1JVTEVfTkFNRSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uIiwiU1RBUlRfT0ZfQ09OVEVOVF9QQVJUX1JVTEVfTkFNRSIsInN0YXJ0T2ZDb250ZW50UGFydFJ1bGVOYW1lRGVmaW5pdGlvbiIsIlNJR05JRklDQU5UX1RPS0VOX1RZUEVfUlVMRV9OQU1FIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7MkRBYko7K0RBQ2M7eUJBVWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBSUM7Z0JBRUosSUFBTUMsT0FBT0Msa0NBQXVCO2dCQUVwQ0YsV0FBV0csNEJBQWlCO2dCQUU1QixJQUFNQyw0QkFBNEJDLGlCQUFrQixDQUFDQyxZQUFZLENBQUNOO2dCQUVsRUEsV0FBV08sNkJBQWtCO2dCQUU3QixJQUFNQyw2QkFBNkJILGlCQUFrQixDQUFDQyxZQUFZLENBQUNOO2dCQUVuRUEsV0FBV1MsZ0NBQXFCO2dCQUVoQyxJQUFNQyw4QkFBOEJMLGlCQUFrQixDQUFDQyxZQUFZLENBQUNOO2dCQUVwRUEsV0FBV1csbUNBQXdCO2dCQUVuQyxJQUFNQyxrQ0FBa0NQLGlCQUFrQixDQUFDQyxZQUFZLENBQUNOO2dCQUV4RUEsV0FBV2EsdUNBQTRCO2dCQUV2QyxJQUFNQyxxQ0FBcUNULGlCQUFrQixDQUFDQyxZQUFZLENBQUNOO2dCQUUzRUEsV0FBV2UsdUNBQTRCO2dCQUV2QyxJQUFNQyxzQ0FBc0NYLGlCQUFrQixDQUFDQyxZQUFZLENBQUNOO2dCQUU1RUEsV0FBV2lCLDBDQUErQjtnQkFFMUMsSUFBTUMsdUNBQXVDYixpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDTjtnQkFFN0VBLFdBQVdtQiwyQ0FBZ0M7Z0JBRTNDLElBQU1DLHlDQUF5Q2YsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ04sV0FDekVxQixVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pGO29CQUNBSjtvQkFDQUo7b0JBQ0FGO29CQUNBRjtvQkFDQUo7b0JBQ0FVO29CQUNBSTtpQkFDRCxFQUNESyxtQkFBbUIsSUFoRFJ6QixvQkFnRGdDRyxNQUFNb0IsU0FBU0M7Z0JBRWhFLE9BQU9DO1lBQ1Q7OztXQW5EbUJ6QjtFQUE0QjBCLGFBQUkifQ==