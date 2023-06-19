"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return QuantifierRuleDefinition;
    }
});
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
var QuantifierRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(QuantifierRuleDefinition, Definition);
    var _super = _create_super(QuantifierRuleDefinition);
    function QuantifierRuleDefinition() {
        _class_call_check(this, QuantifierRuleDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(QuantifierRuleDefinition, null, [
        {
            key: "fromSpecialSymbol",
            value: function fromSpecialSymbol(specialSymbol) {
                var content = specialSymbol, noWhitespacePart = _noWhitespace.default.fromNothing(), terminalSymbolPart = _terminalSymbol.default.fromContent(content), parts = [
                    noWhitespacePart,
                    terminalSymbolPart
                ], precedence = null, quantifierRuleDefinition = new QuantifierRuleDefinition(parts, precedence);
                return quantifierRuleDefinition;
            }
        }
    ]);
    return QuantifierRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvbm9XaGl0ZXNwYWNlXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVNwZWNpYWxTeW1ib2woc3BlY2lhbFN5bWJvbCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzcGVjaWFsU3ltYm9sLCAgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCA9IE5vV2hpdGVzcGFjZVBhcnQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0LFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBxdWFudGlmaWVyUnVsZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiZnJvbVNwZWNpYWxTeW1ib2wiLCJzcGVjaWFsU3ltYm9sIiwiY29udGVudCIsIm5vV2hpdGVzcGFjZVBhcnQiLCJOb1doaXRlc3BhY2VQYXJ0IiwiZnJvbU5vdGhpbmciLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJmcm9tQ29udGVudCIsInBhcnRzIiwicHJlY2VkZW5jZSIsInF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2lFQUpFO21FQUNNO3FFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhO2dCQUNwQyxJQUFNQyxVQUFVRCxlQUNWRSxtQkFBbUJDLHNCQUFpQkMsZUFDcENDLHFCQUFxQkMsd0JBQW1CQyxZQUFZTixVQUNwRE8sUUFBUTtvQkFDTk47b0JBQ0FHO2lCQUNELEVBQ0RJLGFBQWEsTUFDYkMsMkJBQTJCLElBVmhCWix5QkFVNkNVLE9BQU9DO2dCQUVyRSxPQUFPQztZQUNUOzs7V0FibUJaO0VBQWlDYSJ9