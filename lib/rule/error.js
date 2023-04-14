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
        var errorDefinition = new _error1.default(), name = _ruleNames.errorRuleName, ambiguous = false, definitions = [
            errorDefinition
        ], Node = _error.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return ErrorRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2Vycm9yLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEVycm9yQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvZXJyb3JcIjtcbmltcG9ydCBFcnJvckRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZXJyb3JcIjtcblxuaW1wb3J0IHsgZXJyb3JSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVycm9yRGVmaW5pdGlvbiA9IG5ldyBFcnJvckRlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gZXJyb3JSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcnJvckRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBFcnJvckJORk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9kZSk7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRXJyb3JSdWxlIiwiZXJyb3JEZWZpbml0aW9uIiwiRXJyb3JEZWZpbml0aW9uIiwibmFtZSIsImVycm9yUnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJFcnJvckJORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjs0REFDUTs2REFDRzt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLDBCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7UUFFakIsSUFBTUMsa0JBQWtCLElBQUlDLGVBQWUsSUFDckNDLE9BQU9DLHdCQUFhLEVBQ3BCQyxZQUFZLEtBQUssRUFDakJDLGNBQWM7WUFDWkw7U0FDRCxFQUNETSxPQUFPQyxjQUFZO2lDQUVuQkwsTUFBTUUsV0FBV0MsYUFBYUM7O1dBVm5CUDtFQUFrQlMsYUFBSSJ9