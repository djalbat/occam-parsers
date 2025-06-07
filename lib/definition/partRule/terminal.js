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
                var quantifierRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.quantifierRuleName), terminalPartRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.terminalPartRuleName), zeroOrMoreQuantifierRuleNamePartsPart = _zeroOrMoreParts.default.fromPart(quantifierRuleNamePart), parts = [
                    terminalPartRuleNamePart,
                    zeroOrMoreQuantifierRuleNamePartsPart
                ], precedence = null, terminalPartRuleDefinition = new TerminalPartRuleDefinition(parts, precedence);
                return terminalPartRuleDefinition;
            }
        }
    ]);
    return TerminalPartRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRSdWxlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IHF1YW50aWZpZXJSdWxlTmFtZSwgdGVybWluYWxQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShxdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCA9IFJ1bGVOYW1lUGFydC5mcm9tUnVsZU5hbWUodGVybWluYWxQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHF1YW50aWZpZXJSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJmcm9tTm90aGluZyIsInF1YW50aWZpZXJSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJmcm9tUnVsZU5hbWUiLCJxdWFudGlmaWVyUnVsZU5hbWUiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiZnJvbVBhcnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJ0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O2lFQU5FOytEQUNFO3NFQUNPO3lCQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLHlCQUF5QkMsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDQyw2QkFBa0IsR0FDckVDLDJCQUEyQkgsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDRywrQkFBb0IsR0FDekVDLHdDQUF3Q0Msd0JBQW1CLENBQUNDLFFBQVEsQ0FBQ1IseUJBQ3JFUyxRQUFRO29CQUNOTDtvQkFDQUU7aUJBQ0QsRUFDREksYUFBYSxNQUNiQyw2QkFBNkIsSUFWbEJiLDJCQVVpRFcsT0FBT0M7Z0JBRXpFLE9BQU9DO1lBQ1Q7OztXQWJtQmI7RUFBbUNjLG1CQUFVIn0=