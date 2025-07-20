"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalPartRuleDefinition;
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
var NonTerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(NonTerminalPartRuleDefinition, Definition);
    function NonTerminalPartRuleDefinition() {
        _class_call_check(this, NonTerminalPartRuleDefinition);
        return _call_super(this, NonTerminalPartRuleDefinition, arguments);
    }
    _create_class(NonTerminalPartRuleDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var ruleName;
                ruleName = _ruleNames.QUANTIFIER_RULE_NAME;
                var quantifierRuleNamePart = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.NON_TERMINAL_PART_RULE_NAME;
                var nonTerminalPartRuleNamePart = _ruleName.default.fromRuleName(ruleName), zeroOrMoreQuantifierRuleNamePartsPart = _zeroOrMoreParts.default.fromPart(quantifierRuleNamePart), parts = [
                    nonTerminalPartRuleNamePart,
                    zeroOrMoreQuantifierRuleNamePartsPart
                ], precedence = null, nonTerminalPartRuleDefinition = new NonTerminalPartRuleDefinition(parts, precedence);
                return nonTerminalPartRuleDefinition;
            }
        }
    ]);
    return NonTerminalPartRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IFFVQU5USUZJRVJfUlVMRV9OQU1FLCBOT05fVEVSTUlOQUxfUEFSVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBsZXQgcnVsZU5hbWU7XG5cbiAgICBydWxlTmFtZSA9IFFVQU5USUZJRVJfUlVMRV9OQU1FO1xuXG4gICAgY29uc3QgcXVhbnRpZmllclJ1bGVOYW1lUGFydCA9IFJ1bGVOYW1lUGFydC5mcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcnVsZU5hbWUgPSBOT05fVEVSTUlOQUxfUEFSVF9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tUGFydChxdWFudGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcbiAgICBcbiAgICByZXR1cm4gbm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImZyb21Ob3RoaW5nIiwicnVsZU5hbWUiLCJRVUFOVElGSUVSX1JVTEVfTkFNRSIsInF1YW50aWZpZXJSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJmcm9tUnVsZU5hbWUiLCJOT05fVEVSTUlOQUxfUEFSVF9SVUxFX05BTUUiLCJub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsImZyb21QYXJ0IiwicGFydHMiLCJwcmVjZWRlbmNlIiwibm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztpRUFORTsrREFDRTtzRUFDTzt5QkFFa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsSUFBQSxBQUFNQSw4Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFJQztnQkFFSkEsV0FBV0MsK0JBQW9CO2dCQUUvQixJQUFNQyx5QkFBeUJDLGlCQUFZLENBQUNDLFlBQVksQ0FBQ0o7Z0JBRXpEQSxXQUFXSyxzQ0FBMkI7Z0JBRXRDLElBQU1DLDhCQUE4QkgsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDSixXQUN4RE8sd0NBQXdDQyx3QkFBbUIsQ0FBQ0MsUUFBUSxDQUFDUCx5QkFDckVRLFFBQVE7b0JBQ05KO29CQUNBQztpQkFDRCxFQUNESSxhQUFhLE1BQ2JDLGdDQUFnQyxJQWpCckJkLDhCQWlCdURZLE9BQU9DO2dCQUUvRSxPQUFPQztZQUNUOzs7V0FwQm1CZDtFQUFzQ2UsbUJBQVUifQ==