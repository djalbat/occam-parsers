"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AmbiguousModifierRuleDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../part/terminal/noWhitespace"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
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
var exclamationMark = _occamlexers.specialSymbols.exclamationMark;
var AmbiguousModifierRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(AmbiguousModifierRuleDefinition, Definition);
    var _super = _create_super(AmbiguousModifierRuleDefinition);
    function AmbiguousModifierRuleDefinition() {
        _class_call_check(this, AmbiguousModifierRuleDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(AmbiguousModifierRuleDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = exclamationMark, noWhitespacePart = _noWhitespace.default.fromNothing(), terminalSymbolPart = _terminalSymbol.default.fromContent(content), parts = [
                    noWhitespacePart,
                    terminalSymbolPart
                ], precedence = null, ambiguousModifierRuleDefinition = new AmbiguousModifierRuleDefinition(parts, precedence);
                return ambiguousModifierRuleDefinition;
            }
        }
    ]);
    return AmbiguousModifierRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2FtYmlndW91c01vZGlmaWVyUnVsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9ub1doaXRlc3BhY2VcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcblxuY29uc3QgeyBleGNsYW1hdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXhjbGFtYXRpb25NYXJrLCAgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCA9IE5vV2hpdGVzcGFjZVBhcnQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0LFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBhbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gbmV3IEFtYmlndW91c01vZGlmaWVyUnVsZURlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGFtYmlndW91c01vZGlmaWVyUnVsZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQW1iaWd1b3VzTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJjb250ZW50Iiwibm9XaGl0ZXNwYWNlUGFydCIsIk5vV2hpdGVzcGFjZVBhcnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJmcm9tQ29udGVudCIsInBhcnRzIiwicHJlY2VkZW5jZSIsImFtYmlndW91c01vZGlmaWVyUnVsZURlZmluaXRpb24iLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyQkFSVTtpRUFFUjttRUFDTTtxRUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVDLGtCQUFvQkMsMkJBQWMsQ0FBbENEO0FBRU8sSUFBQSxBQUFNRCxnREFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxVQUFVSCxpQkFDVkksbUJBQW1CQyxxQkFBZ0IsQ0FBQ0gsV0FBVyxJQUMvQ0kscUJBQXFCQyx1QkFBa0IsQ0FBQ0MsV0FBVyxDQUFDTCxVQUNwRE0sUUFBUTtvQkFDTkw7b0JBQ0FFO2lCQUNELEVBQ0RJLGFBQWEsTUFDYkMsa0NBQWtDLElBVnZCWixnQ0FVMkRVLE9BQU9DO2dCQUVuRixPQUFPQztZQUNUOzs7V0FibUJaO0VBQXdDYSxtQkFBVSJ9