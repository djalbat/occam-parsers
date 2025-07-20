"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return QuantifierBNFRule;
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
var QuantifierBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(QuantifierBNFRule, Rule);
    function QuantifierBNFRule() {
        _class_call_check(this, QuantifierBNFRule);
        return _call_super(this, QuantifierBNFRule, arguments);
    }
    _create_class(QuantifierBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var ruleName;
                var name = _ruleNames.QUANTIFIER_RULE_NAME; ///
                ruleName = _ruleNames.OPTIONAL_QUANTIFIER_RULE_NAME;
                var optionalQuantifierRuleNameDefinition = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.ONE_OR_MORE_QUANTIFIER_RULE_NAME;
                var oneOrMoreQuantifierRuleNameDefinition = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.ZERO_OR_MORE_QUANTIFIER_RULE_NAME;
                var zeroOrMoreQuantifierRuleNameDefinition = _ruleName.default.fromRuleName(ruleName), opacity = null, definitions = [
                    optionalQuantifierRuleNameDefinition,
                    oneOrMoreQuantifierRuleNameDefinition,
                    zeroOrMoreQuantifierRuleNameDefinition
                ], quantifierRule = new QuantifierBNFRule(name, opacity, definitions);
                return quantifierRule;
            }
        }
    ]);
    return QuantifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9xdWFudGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFJ1bGVOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9ydWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBRVUFOVElGSUVSX1JVTEVfTkFNRSwgT1BUSU9OQUxfUVVBTlRJRklFUl9SVUxFX05BTUUsIE9ORV9PUl9NT1JFX1FVQU5USUZJRVJfUlVMRV9OQU1FLCBaRVJPX09SX01PUkVfUVVBTlRJRklFUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1YW50aWZpZXJCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBsZXQgcnVsZU5hbWU7XG4gICAgY29uc3QgbmFtZSA9IFFVQU5USUZJRVJfUlVMRV9OQU1FOyAgLy8vXG5cbiAgICBydWxlTmFtZSA9IE9QVElPTkFMX1FVQU5USUZJRVJfUlVMRV9OQU1FXG5cbiAgICBjb25zdCBvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJ1bGVOYW1lID0gT05FX09SX01PUkVfUVVBTlRJRklFUl9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBydWxlTmFtZSA9IFpFUk9fT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlID0gbmV3IFF1YW50aWZpZXJCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBxdWFudGlmaWVyUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlF1YW50aWZpZXJCTkZSdWxlIiwiZnJvbU5vdGhpbmciLCJydWxlTmFtZSIsIm5hbWUiLCJRVUFOVElGSUVSX1JVTEVfTkFNRSIsIk9QVElPTkFMX1FVQU5USUZJRVJfUlVMRV9OQU1FIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwiT05FX09SX01PUkVfUVVBTlRJRklFUl9SVUxFX05BTUUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uIiwiWkVST19PUl9NT1JFX1FVQU5USUZJRVJfUlVMRV9OQU1FIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJxdWFudGlmaWVyUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKOytEQUNjO3lCQUUwRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxSCxJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQUlDO2dCQUNKLElBQU1DLE9BQU9DLCtCQUFvQixFQUFHLEdBQUc7Z0JBRXZDRixXQUFXRyx3Q0FBNkI7Z0JBRXhDLElBQU1DLHVDQUF1Q0MsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ047Z0JBRTdFQSxXQUFXTywyQ0FBZ0M7Z0JBRTNDLElBQU1DLHdDQUF3Q0gsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ047Z0JBRTlFQSxXQUFXUyw0Q0FBaUM7Z0JBRTVDLElBQU1DLHlDQUF5Q0wsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ04sV0FDekVXLFVBQVUsTUFDVkMsY0FBYztvQkFDWlI7b0JBQ0FJO29CQUNBRTtpQkFDRCxFQUNERyxpQkFBaUIsSUF0Qk5mLGtCQXNCNEJHLE1BQU1VLFNBQVNDO2dCQUU1RCxPQUFPQztZQUNUOzs7V0F6Qm1CZjtFQUEwQmdCLGFBQUkifQ==