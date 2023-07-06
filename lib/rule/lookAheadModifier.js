"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LookAheadModifierRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _modifier = /*#__PURE__*/ _interop_require_default(require("../node/bnf/modifier"));
var _lookAheadModifierRule = /*#__PURE__*/ _interop_require_default(require("../definition/lookAheadModifierRule"));
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
var LookAheadModifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(LookAheadModifierRule, Rule);
    var _super = _create_super(LookAheadModifierRule);
    function LookAheadModifierRule() {
        _class_call_check(this, LookAheadModifierRule);
        return _super.apply(this, arguments);
    }
    _create_class(LookAheadModifierRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.lookAheadModifierRuleName, lookAheadModifierRuleDefinition = _lookAheadModifierRule.default.fromNothing(), ambiguous = false, definitions = [
                    lookAheadModifierRuleDefinition
                ], NonTerminalNode = _modifier.default, lookAheadModifierRule = new LookAheadModifierRule(name, ambiguous, definitions, NonTerminalNode);
                return lookAheadModifierRule;
            }
        }
    ]);
    return LookAheadModifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IE1vZGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvbW9kaWZpZXJcIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2xvb2tBaGVhZE1vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rQWhlYWRNb2RpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTW9kaWZpZXJCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlID0gbmV3IExvb2tBaGVhZE1vZGlmaWVyUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGxvb2tBaGVhZE1vZGlmaWVyUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIk1vZGlmaWVyQk5GTm9kZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5KOytEQUNXOzRFQUNnQjt5QkFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLG9DQUF5QixFQUNoQ0Msa0NBQWtDQyw4QkFBK0IsQ0FBQ0osV0FBVyxJQUM3RUssWUFBWSxPQUNaQyxjQUFjO29CQUNaSDtpQkFDRCxFQUNESSxrQkFBa0JDLGlCQUFlLEVBQ2pDQyx3QkFBd0IsSUFUYlYsc0JBU3VDRSxNQUFNSSxXQUFXQyxhQUFhQztnQkFFdEYsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUE4QlcsYUFBSSJ9