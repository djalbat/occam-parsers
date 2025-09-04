"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CallAheadModifierRuleDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../part/terminal/noWhitespace"));
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
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
var ellipsis = _occamlexers.specialSymbols.ellipsis;
var CallAheadModifierRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(CallAheadModifierRuleDefinition, Definition);
    function CallAheadModifierRuleDefinition() {
        _class_call_check(this, CallAheadModifierRuleDefinition);
        return _call_super(this, CallAheadModifierRuleDefinition, arguments);
    }
    _create_class(CallAheadModifierRuleDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = ellipsis, noWhitespacePart = _noWhitespace.default.fromNothing(), stringLiteralPart = _stringLiteral.default.fromContent(content), parts = [
                    noWhitespacePart,
                    stringLiteralPart
                ], precedence = null, callAheadModifierRuleDefinition = new CallAheadModifierRuleDefinition(parts, precedence);
                return callAheadModifierRuleDefinition;
            }
        }
    ]);
    return CallAheadModifierRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2NhbGxBaGVhZE1vZGlmaWVyUnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9ub1doaXRlc3BhY2VcIjtcbmltcG9ydCBTdHJpbmdMaXRlcmFsUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zdHJpbmdMaXRlcmFsXCI7XG5cbmNvbnN0IHsgZWxsaXBzaXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZWxsaXBzaXMsICAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0ID0gTm9XaGl0ZXNwYWNlUGFydC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0cmluZ0xpdGVyYWxQYXJ0ID0gU3RyaW5nTGl0ZXJhbFBhcnQuZnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0LFxuICAgICAgICAgICAgc3RyaW5nTGl0ZXJhbFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGNhbGxBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgQ2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gY2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNhbGxBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJlbGxpcHNpcyIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJjb250ZW50Iiwibm9XaGl0ZXNwYWNlUGFydCIsIk5vV2hpdGVzcGFjZVBhcnQiLCJzdHJpbmdMaXRlcmFsUGFydCIsIlN0cmluZ0xpdGVyYWxQYXJ0IiwiZnJvbUNvbnRlbnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJjYWxsQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MkJBUlU7aUVBRVI7bUVBQ007b0VBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTSxBQUFFQyxXQUFhQywyQkFBYyxDQUEzQkQ7QUFFTyxJQUFBLEFBQU1ELGdEQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLFVBQVVILFVBQ1ZJLG1CQUFtQkMscUJBQWdCLENBQUNILFdBQVcsSUFDL0NJLG9CQUFvQkMsc0JBQWlCLENBQUNDLFdBQVcsQ0FBQ0wsVUFDbERNLFFBQVE7b0JBQ05MO29CQUNBRTtpQkFDRCxFQUNESSxhQUFhLE1BQ2JDLGtDQUFrQyxJQVZ2QlosZ0NBVTJEVSxPQUFPQztnQkFFbkYsT0FBT0M7WUFDVDs7O1dBYm1CWjtFQUF3Q2EsbUJBQVUifQ==