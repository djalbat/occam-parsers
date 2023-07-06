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
var RuleRule = /*#__PURE__*/ function(Rule) {
    _inherits(RuleRule, Rule);
    var _super = _create_super(RuleRule);
    function RuleRule() {
        _class_call_check(this, RuleRule);
        return _super.apply(this, arguments);
    }
    _create_class(RuleRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var ruleDefinition = _rule2.default.fromNothing(), name = _ruleNames.ruleRuleName, ambiguous = false, definitions = [
                    ruleDefinition
                ], NonTerminalNode = _rule1.default, ruleRule = new RuleRule(name, ambiguous, definitions, NonTerminalNode);
                return ruleRule;
            }
        }
    ]);
    return RuleRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3J1bGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUnVsZUJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3J1bGVcIjtcbmltcG9ydCBSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9ydWxlXCI7XG5cbmltcG9ydCB7IHJ1bGVSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVEZWZpbml0aW9uID0gUnVsZURlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBydWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUnVsZUJORk5vZGUsXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlUnVsZSIsImZyb21Ob3RoaW5nIiwicnVsZURlZmluaXRpb24iLCJSdWxlRGVmaW5pdGlvbiIsIm5hbWUiLCJydWxlUnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIlJ1bGVCTkZOb2RlIiwicnVsZVJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjs0REFDTzs0REFDRzt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsaUJBQWlCQyxjQUFjLENBQUNGLFdBQVcsSUFDM0NHLE9BQU9DLHVCQUFZLEVBQ25CQyxZQUFZLE9BQ1pDLGNBQWM7b0JBQ1pMO2lCQUNELEVBQ0RNLGtCQUFrQkMsY0FBVyxFQUM3QkMsV0FBVyxJQVRBVixTQVNhSSxNQUFNRSxXQUFXQyxhQUFhQztnQkFFNUQsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUFpQlcsYUFBSSJ9