"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ErrorRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _error = /*#__PURE__*/ _interop_require_default(require("../node/bnf/error"));
var _error1 = /*#__PURE__*/ _interop_require_default(require("../definition/error"));
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
var ErrorRule = /*#__PURE__*/ function(Rule) {
    _inherits(ErrorRule, Rule);
    var _super = _create_super(ErrorRule);
    function ErrorRule() {
        _class_call_check(this, ErrorRule);
        return _super.apply(this, arguments);
    }
    _create_class(ErrorRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var errorDefinition = _error1.default.fromNothing(), name = _ruleNames.errorRuleName, ambiguous = false, definitions = [
                    errorDefinition
                ], NonTerminalNode = _error.default, errorRule = new ErrorRule(name, ambiguous, definitions, NonTerminalNode);
                return errorRule;
            }
        }
    ]);
    return ErrorRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEVycm9yQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvZXJyb3JcIjtcbmltcG9ydCBFcnJvckRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZXJyb3JcIjtcblxuaW1wb3J0IHsgZXJyb3JSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBlcnJvckRlZmluaXRpb24gPSBFcnJvckRlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gZXJyb3JSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcnJvckRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEVycm9yQk5GTm9kZSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZXJyb3JSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXJyb3JSdWxlIiwiZnJvbU5vdGhpbmciLCJlcnJvckRlZmluaXRpb24iLCJFcnJvckRlZmluaXRpb24iLCJuYW1lIiwiZXJyb3JSdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiRXJyb3JCTkZOb2RlIiwiZXJyb3JSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7NERBQ1E7NkRBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLDBCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLGtCQUFrQkMsZUFBZSxDQUFDRixXQUFXLElBQzdDRyxPQUFPQyx3QkFBYSxFQUNwQkMsWUFBWSxPQUNaQyxjQUFjO29CQUNaTDtpQkFDRCxFQUNETSxrQkFBa0JDLGNBQVksRUFDOUJDLFlBQVksSUFURFYsVUFTZUksTUFBTUUsV0FBV0MsYUFBYUM7Z0JBRTlELE9BQU9FO1lBQ1Q7OztXQVptQlY7RUFBa0JXLGFBQUkifQ==