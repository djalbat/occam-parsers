"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _rule1 = /*#__PURE__*/ _interop_require_default(require("../node/bnf/rule"));
var _rule2 = /*#__PURE__*/ _interop_require_default(require("../definition/rule"));
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
var RuleRule = /*#__PURE__*/ function(Rule) {
    _inherits(RuleRule, Rule);
    var _super = _create_super(RuleRule);
    function RuleRule() {
        _class_call_check(this, RuleRule);
        var ruleDefinition = new _rule2.default(), name = _ruleNames.ruleRuleName, ambiguous = false, definitions = [
            ruleDefinition
        ], Node = _rule1.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return RuleRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3J1bGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUnVsZUJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3J1bGVcIjtcbmltcG9ydCBSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9ydWxlXCI7XG5cbmltcG9ydCB7IHJ1bGVSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZURlZmluaXRpb24gPSBuZXcgUnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gcnVsZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBydWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJ1bGVCTkZOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vZGUpO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGVSdWxlIiwicnVsZURlZmluaXRpb24iLCJSdWxlRGVmaW5pdGlvbiIsIm5hbWUiLCJydWxlUnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJSdWxlQk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5KOzREQUNPOzREQUNHO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTtRQUVqQixJQUFNQyxpQkFBaUIsSUFBSUMsY0FBYyxJQUNuQ0MsT0FBT0MsdUJBQVksRUFDbkJDLFlBQVksS0FBSyxFQUNqQkMsY0FBYztZQUNaTDtTQUNELEVBQ0RNLE9BQU9DLGNBQVc7aUNBRWxCTCxNQUFNRSxXQUFXQyxhQUFhQzs7V0FWbkJQO0VBQWlCUyxhQUFJIn0=