"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PrecedenceRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _precedence = /*#__PURE__*/ _interop_require_default(require("../node/bnf/precedence"));
var _precedence1 = /*#__PURE__*/ _interop_require_default(require("../definition/precedence"));
var _ruleNames = require("../ruleNames");
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
var PrecedenceRule = /*#__PURE__*/ function(Rule) {
    _inherits(PrecedenceRule, Rule);
    var _super = _create_super(PrecedenceRule);
    function PrecedenceRule() {
        _class_call_check(this, PrecedenceRule);
        return _super.apply(this, arguments);
    }
    _create_class(PrecedenceRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.precedenceRuleName, precedenceDefinition = _precedence1.default.fromNothing(), ambiguous = false, definitions = [
                    precedenceDefinition
                ], NonTerminalNode = _precedence.default, precedenceRule = new PrecedenceRule(name, ambiguous, definitions, NonTerminalNode);
                return precedenceRule;
            }
        }
    ]);
    return PrecedenceRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3ByZWNlZGVuY2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUHJlY2VkZW5jZUJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3ByZWNlZGVuY2VcIjtcbmltcG9ydCBQcmVjZWRlbmNlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wcmVjZWRlbmNlXCI7XG5cbmltcG9ydCB7IHByZWNlZGVuY2VSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlY2VkZW5jZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBwcmVjZWRlbmNlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBwcmVjZWRlbmNlRGVmaW5pdGlvbiA9IFByZWNlZGVuY2VEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBwcmVjZWRlbmNlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUHJlY2VkZW5jZUJORk5vZGUsICAvLy9cbiAgICAgICAgICBwcmVjZWRlbmNlUnVsZSA9IG5ldyBQcmVjZWRlbmNlUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZWNlZGVuY2VSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlByZWNlZGVuY2VSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwicHJlY2VkZW5jZVJ1bGVOYW1lIiwicHJlY2VkZW5jZURlZmluaXRpb24iLCJQcmVjZWRlbmNlRGVmaW5pdGlvbiIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiUHJlY2VkZW5jZUJORk5vZGUiLCJwcmVjZWRlbmNlUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5KO2lFQUNhO2tFQUNHO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MsK0JBQ1BDLHVCQUF1QkMscUJBQXFCSixlQUM1Q0ssWUFBWSxPQUNaQyxjQUFjO29CQUNaSDtpQkFDRCxFQUNESSxrQkFBa0JDLHFCQUNsQkMsaUJBQWlCLElBVE5WLGVBU3lCRSxNQUFNSSxXQUFXQyxhQUFhQztnQkFFeEUsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUF1QlcifQ==