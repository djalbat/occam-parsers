"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalPartBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../../definition/ruleName"));
var _ruleName1 = /*#__PURE__*/ _interop_require_default(require("../../definition/partRule/nonTerminal/ruleName"));
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
var NonTerminalPartBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(NonTerminalPartBNFRule, Rule);
    function NonTerminalPartBNFRule() {
        _class_call_check(this, NonTerminalPartBNFRule);
        return _call_super(this, NonTerminalPartBNFRule, arguments);
    }
    _create_class(NonTerminalPartBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var ruleName;
                var name = _ruleNames.NON_TERMINAL_PART_RULE_NAME; ///
                ruleName = _ruleNames.CHOICE_OF_PARTS_RULE_NAME;
                var choiceOfPartsRuleNameDefinition = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.SEQUENCE_OF_PARTS_RULE_NAME;
                var sequenceOfPartsRuleNameDefinition = _ruleName.default.fromRuleName(ruleName), ruleNameNonTerminalPartRuleDefinition = _ruleName1.default.fromNothing(), opacity = null, definitions = [
                    choiceOfPartsRuleNameDefinition,
                    sequenceOfPartsRuleNameDefinition,
                    ruleNameNonTerminalPartRuleDefinition
                ], nonTerminalPartRule = new NonTerminalPartBNFRule(name, opacity, definitions);
                return nonTerminalPartRule;
            }
        }
    ]);
    return NonTerminalPartBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9ub25UZXJtaW5hbFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5pbXBvcnQgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBDSE9JQ0VfT0ZfUEFSVFNfUlVMRV9OQU1FLCBTRVFVRU5DRV9PRl9QQVJUU19SVUxFX05BTUUsIE5PTl9URVJNSU5BTF9QQVJUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxQYXJ0Qk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHJ1bGVOYW1lO1xuXG4gICAgY29uc3QgbmFtZSA9IE5PTl9URVJNSU5BTF9QQVJUX1JVTEVfTkFNRTsgLy8vXG5cbiAgICBydWxlTmFtZSA9IENIT0lDRV9PRl9QQVJUU19SVUxFX05BTUU7XG5cbiAgICBjb25zdCBjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBydWxlTmFtZSA9IFNFUVVFTkNFX09GX1BBUlRTX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgcnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IG5ldyBOb25UZXJtaW5hbFBhcnRCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbFBhcnRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0Qk5GUnVsZSIsImZyb21Ob3RoaW5nIiwicnVsZU5hbWUiLCJuYW1lIiwiTk9OX1RFUk1JTkFMX1BBUlRfUlVMRV9OQU1FIiwiQ0hPSUNFX09GX1BBUlRTX1JVTEVfTkFNRSIsImNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJSdWxlTmFtZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJTRVFVRU5DRV9PRl9QQVJUU19SVUxFX05BTUUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIm5vblRlcm1pbmFsUGFydFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjsrREFDYztnRUFDbUI7eUJBRWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJGLElBQUEsQUFBTUEsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBSUM7Z0JBRUosSUFBTUMsT0FBT0Msc0NBQTJCLEVBQUUsR0FBRztnQkFFN0NGLFdBQVdHLG9DQUF5QjtnQkFFcEMsSUFBTUMsa0NBQWtDQyxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDTjtnQkFFeEVBLFdBQVdPLHNDQUEyQjtnQkFFdEMsSUFBTUMsb0NBQW9DSCxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDTixXQUNwRVMsd0NBQXdDQyxrQkFBcUMsQ0FBQ1gsV0FBVyxJQUN6RlksVUFBVSxNQUNWQyxjQUFjO29CQUNaUjtvQkFDQUk7b0JBQ0FDO2lCQUNELEVBQ0RJLHNCQUFzQixJQXBCWGYsdUJBb0JzQ0csTUFBTVUsU0FBU0M7Z0JBRXRFLE9BQU9DO1lBQ1Q7OztXQXZCbUJmO0VBQStCZ0IsYUFBSSJ9