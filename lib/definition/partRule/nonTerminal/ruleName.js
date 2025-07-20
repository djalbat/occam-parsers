"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameNonTerminalPartRuleDefinition;
    }
});
var _definition = /*#__PURE__*/ _interop_require_default(require("../../../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../../../part/nonTerminal/ruleName"));
var _optionalPart = /*#__PURE__*/ _interop_require_default(require("../../../part/nonTerminal/optionalPart"));
var _ruleNames = require("../../../ruleNames");
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
var RuleNameNonTerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RuleNameNonTerminalPartRuleDefinition, Definition);
    function RuleNameNonTerminalPartRuleDefinition() {
        _class_call_check(this, RuleNameNonTerminalPartRuleDefinition);
        return _call_super(this, RuleNameNonTerminalPartRuleDefinition, arguments);
    }
    _create_class(RuleNameNonTerminalPartRuleDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var ruleName;
                ruleName = _ruleNames.RULE_NAME_RULE_NAME;
                var ruleNameRuleNamePart = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.CALL_AHEAD_MODIFIER_RULE_NAME;
                var callAheadModifierRuleNamePart = _ruleName.default.fromRuleName(ruleName), optionalCallAheadRuleNamePartPart = _optionalPart.default.fromPart(callAheadModifierRuleNamePart), parts = [
                    ruleNameRuleNamePart,
                    optionalCallAheadRuleNamePartPart
                ], precedence = null, ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(parts, precedence);
                return ruleNameNonTerminalPartRuleDefinition;
            }
        }
    ]);
    return RuleNameNonTerminalPartRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uLy4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5cbmltcG9ydCB7IFJVTEVfTkFNRV9SVUxFX05BTUUsIENBTExfQUhFQURfTU9ESUZJRVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBsZXQgcnVsZU5hbWU7XG5cbiAgICBydWxlTmFtZSA9IFJVTEVfTkFNRV9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBydWxlTmFtZVJ1bGVOYW1lUGFydCA9IFJ1bGVOYW1lUGFydC5mcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcnVsZU5hbWUgPSBDQUxMX0FIRUFEX01PRElGSUVSX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IGNhbGxBaGVhZE1vZGlmaWVyUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgb3B0aW9uYWxDYWxsQWhlYWRSdWxlTmFtZVBhcnRQYXJ0ID0gT3B0aW9uYWxQYXJ0UGFydC5mcm9tUGFydChjYWxsQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9wdGlvbmFsQ2FsbEFoZWFkUnVsZU5hbWVQYXJ0UGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgcnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImZyb21Ob3RoaW5nIiwicnVsZU5hbWUiLCJSVUxFX05BTUVfUlVMRV9OQU1FIiwicnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJmcm9tUnVsZU5hbWUiLCJDQUxMX0FIRUFEX01PRElGSUVSX1JVTEVfTkFNRSIsImNhbGxBaGVhZE1vZGlmaWVyUnVsZU5hbWVQYXJ0Iiwib3B0aW9uYWxDYWxsQWhlYWRSdWxlTmFtZVBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsImZyb21QYXJ0IiwicGFydHMiLCJwcmVjZWRlbmNlIiwicnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O2lFQU5FOytEQUNFO21FQUNJO3lCQUVzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFBLEFBQU1BLHNEQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQUlDO2dCQUVKQSxXQUFXQyw4QkFBbUI7Z0JBRTlCLElBQU1DLHVCQUF1QkMsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDSjtnQkFFdkRBLFdBQVdLLHdDQUE2QjtnQkFFeEMsSUFBTUMsZ0NBQWdDSCxpQkFBWSxDQUFDQyxZQUFZLENBQUNKLFdBQzFETyxvQ0FBb0NDLHFCQUFnQixDQUFDQyxRQUFRLENBQUNILGdDQUM5REksUUFBUTtvQkFDTlI7b0JBQ0FLO2lCQUNELEVBQ0RJLGFBQWEsTUFDYkMsd0NBQXdDLElBakI3QmQsc0NBaUJ1RVksT0FBT0M7Z0JBRS9GLE9BQU9DO1lBQ1Q7OztXQXBCbUJkO0VBQThDZSxtQkFBVSJ9