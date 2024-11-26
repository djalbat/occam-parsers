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
var _lookAheadModifier = /*#__PURE__*/ _interop_require_default(require("../node/bnf/lookAheadModifier"));
var _lookAheadModifierRule = /*#__PURE__*/ _interop_require_default(require("../definition/lookAheadModifierRule"));
var _ruleNames = require("../ruleNames");
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
var LookAheadModifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(LookAheadModifierRule, Rule);
    function LookAheadModifierRule() {
        _class_call_check(this, LookAheadModifierRule);
        return _call_super(this, LookAheadModifierRule, arguments);
    }
    _create_class(LookAheadModifierRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.lookAheadModifierRuleName, lookAheadModifierRuleDefinition = _lookAheadModifierRule.default.fromNothing(), opacity = null, definitions = [
                    lookAheadModifierRuleDefinition
                ], NonTerminalNode = _lookAheadModifier.default, lookAheadModifierRule = new LookAheadModifierRule(name, opacity, definitions, NonTerminalNode);
                return lookAheadModifierRule;
            }
        }
    ]);
    return LookAheadModifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IExvb2tBaGVhZE1vZGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvbG9va0FoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2xvb2tBaGVhZE1vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rQWhlYWRNb2RpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTG9va0FoZWFkTW9kaWZpZXJCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlID0gbmV3IExvb2tBaGVhZE1vZGlmaWVyUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBsb29rQWhlYWRNb2RpZmllclJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJMb29rQWhlYWRNb2RpZmllckJORk5vZGUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjt3RUFDb0I7NEVBQ087eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0Msb0NBQXlCLEVBQ2hDQyxrQ0FBa0NDLDhCQUErQixDQUFDSixXQUFXLElBQzdFSyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pIO2lCQUNELEVBQ0RJLGtCQUFrQkMsMEJBQXdCLEVBQzFDQyx3QkFBd0IsSUFUYlYsc0JBU3VDRSxNQUFNSSxTQUFTQyxhQUFhQztnQkFFcEYsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUE4QlcsYUFBSSJ9