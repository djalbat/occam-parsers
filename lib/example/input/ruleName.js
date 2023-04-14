"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  border: 1px solid darkgrey;\n  padding: 0.25rem;\n  font-size: 1.2rem;\n  font-family: monospace;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RuleNameInput = /*#__PURE__*/ function(Input) {
    _inherits(RuleNameInput, Input);
    var _super = _create_super(RuleNameInput);
    function RuleNameInput() {
        _class_call_check(this, RuleNameInput);
        return _super.apply(this, arguments);
    }
    _create_class(RuleNameInput, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var value = this.getValue(), ruleName = value; ///
                return ruleName;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getRuleName = this.getRuleName.bind(this);
                return {
                    getRuleName: getRuleName
                };
            }
        }
    ]);
    return RuleNameInput;
}(_easy.Input);
_define_property(RuleNameInput, "defaultProperties", {
    className: "rule-name",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(RuleNameInput)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIFJ1bGVOYW1lSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRSdWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UnVsZU5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnVsZS1uYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShSdWxlTmFtZUlucHV0KWBcblxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJSdWxlTmFtZUlucHV0IiwiZ2V0UnVsZU5hbWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwicnVsZU5hbWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIklucHV0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0QkE7OztlQUFBOzs7b0VBMUJzQjtvQkFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUEsOEJBc0JILEFBdEJIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxXQUFXRixPQUFPLEdBQUc7Z0JBRTNCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1KLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNLLElBQUksQ0FBQyxJQUFJO2dCQUU5QyxPQUFRO29CQUNOTCxhQUFBQTtnQkFDRjtZQUNGOzs7V0FkSUQ7RUFBc0JPLFdBQUs7QUFnQi9CLGlCQWhCSVAsZUFnQkdRLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxZQUFZO0FBQ2Q7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDWCJ9