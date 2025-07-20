"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalPartRuleDefinition;
    }
});
var _definition = /*#__PURE__*/ _interop_require_default(require("../../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/ruleName"));
var _zeroOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/zeroOrMoreParts"));
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
var TerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(TerminalPartRuleDefinition, Definition);
    function TerminalPartRuleDefinition() {
        _class_call_check(this, TerminalPartRuleDefinition);
        return _call_super(this, TerminalPartRuleDefinition, arguments);
    }
    _create_class(TerminalPartRuleDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var ruleName;
                ruleName = _ruleNames.QUANTIFIER_RULE_NAME;
                var quantifierRuleNamePart = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.TERMINAL_PART_RULE_NAME;
                var terminalPartRuleNamePart = _ruleName.default.fromRuleName(ruleName), zeroOrMoreQuantifierRuleNamePartsPart = _zeroOrMoreParts.default.fromPart(quantifierRuleNamePart), parts = [
                    terminalPartRuleNamePart,
                    zeroOrMoreQuantifierRuleNamePartsPart
                ], precedence = null, terminalPartRuleDefinition = new TerminalPartRuleDefinition(parts, precedence);
                return terminalPartRuleDefinition;
            }
        }
    ]);
    return TerminalPartRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRSdWxlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IFFVQU5USUZJRVJfUlVMRV9OQU1FLCBURVJNSU5BTF9QQVJUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGxldCBydWxlTmFtZTtcblxuICAgIHJ1bGVOYW1lID0gUVVBTlRJRklFUl9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBydWxlTmFtZSA9IFRFUk1JTkFMX1BBUlRfUlVMRV9OQU1FO1xuXG4gICAgY29uc3QgdGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydCA9IFplcm9Pck1vcmVQYXJ0c1BhcnQuZnJvbVBhcnQocXVhbnRpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImZyb21Ob3RoaW5nIiwicnVsZU5hbWUiLCJRVUFOVElGSUVSX1JVTEVfTkFNRSIsInF1YW50aWZpZXJSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJmcm9tUnVsZU5hbWUiLCJURVJNSU5BTF9QQVJUX1JVTEVfTkFNRSIsInRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiZnJvbVBhcnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJ0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O2lFQU5FOytEQUNFO3NFQUNPO3lCQUU4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQUlDO2dCQUVKQSxXQUFXQywrQkFBb0I7Z0JBRS9CLElBQU1DLHlCQUF5QkMsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDSjtnQkFFekRBLFdBQVdLLGtDQUF1QjtnQkFFbEMsSUFBTUMsMkJBQTJCSCxpQkFBWSxDQUFDQyxZQUFZLENBQUNKLFdBQ3JETyx3Q0FBd0NDLHdCQUFtQixDQUFDQyxRQUFRLENBQUNQLHlCQUNyRVEsUUFBUTtvQkFDTko7b0JBQ0FDO2lCQUNELEVBQ0RJLGFBQWEsTUFDYkMsNkJBQTZCLElBakJsQmQsMkJBaUJpRFksT0FBT0M7Z0JBRXpFLE9BQU9DO1lBQ1Q7OztXQXBCbUJkO0VBQW1DZSxtQkFBVSJ9