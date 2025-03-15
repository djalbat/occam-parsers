"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CallAheadModifierRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _callAheadModifier = /*#__PURE__*/ _interop_require_default(require("../node/bnf/callAheadModifier"));
var _callAheadModifierRule = /*#__PURE__*/ _interop_require_default(require("../definition/callAheadModifierRule"));
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
var CallAheadModifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(CallAheadModifierRule, Rule);
    function CallAheadModifierRule() {
        _class_call_check(this, CallAheadModifierRule);
        return _call_super(this, CallAheadModifierRule, arguments);
    }
    _create_class(CallAheadModifierRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.callAheadModifierRuleName, callAheadModifierRuleDefinition = _callAheadModifierRule.default.fromNothing(), opacity = null, definitions = [
                    callAheadModifierRuleDefinition
                ], NonTerminalNode = _callAheadModifier.default, callAheadModifierRule = new CallAheadModifierRule(name, opacity, definitions, NonTerminalNode);
                return callAheadModifierRule;
            }
        }
    ]);
    return CallAheadModifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2NhbGxBaGVhZE1vZGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IENhbGxBaGVhZE1vZGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvY2FsbEFoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBDYWxsQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2NhbGxBaGVhZE1vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBjYWxsQWhlYWRNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsQWhlYWRNb2RpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBjYWxsQWhlYWRNb2RpZmllclJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBjYWxsQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gQ2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgY2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gQ2FsbEFoZWFkTW9kaWZpZXJCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgY2FsbEFoZWFkTW9kaWZpZXJSdWxlID0gbmV3IENhbGxBaGVhZE1vZGlmaWVyUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBjYWxsQWhlYWRNb2RpZmllclJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDYWxsQWhlYWRNb2RpZmllclJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJjYWxsQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwiY2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIkNhbGxBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJDYWxsQWhlYWRNb2RpZmllckJORk5vZGUiLCJjYWxsQWhlYWRNb2RpZmllclJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjt3RUFDb0I7NEVBQ087eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0Msb0NBQXlCLEVBQ2hDQyxrQ0FBa0NDLDhCQUErQixDQUFDSixXQUFXLElBQzdFSyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pIO2lCQUNELEVBQ0RJLGtCQUFrQkMsMEJBQXdCLEVBQzFDQyx3QkFBd0IsSUFUYlYsc0JBU3VDRSxNQUFNSSxTQUFTQyxhQUFhQztnQkFFcEYsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUE4QlcsYUFBSSJ9