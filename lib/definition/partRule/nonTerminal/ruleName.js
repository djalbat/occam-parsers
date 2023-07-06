"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameNonTerminalPartRuleDefinition;
    }
});
var _definition = /*#__PURE__*/ _interop_require_default(require("../../../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../../../part/nonTerminal/ruleName"));
var _optionalPart = /*#__PURE__*/ _interop_require_default(require("../../../part/nonTerminal/optionalPart"));
var _ruleNames = require("../../../ruleNames");
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
var RuleNameNonTerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RuleNameNonTerminalPartRuleDefinition, Definition);
    var _super = _create_super(RuleNameNonTerminalPartRuleDefinition);
    function RuleNameNonTerminalPartRuleDefinition() {
        _class_call_check(this, RuleNameNonTerminalPartRuleDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(RuleNameNonTerminalPartRuleDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var ruleNameRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.ruleNameRuleName), lookAheadModifierRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.lookAheadModifierRuleName), optionalLookAheadRuleNamePartPart = _optionalPart.default.fromPart(lookAheadModifierRuleNamePart), parts = [
                    ruleNameRuleNamePart,
                    optionalLookAheadRuleNamePartPart
                ], precedence = null, ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(parts, precedence);
                return ruleNameNonTerminalPartRuleDefinition;
            }
        }
    ]);
    return RuleNameNonTerminalPartRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uLy4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUnVsZU5hbWUsIGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZVJ1bGVOYW1lKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCA9IFJ1bGVOYW1lUGFydC5mcm9tUnVsZU5hbWUobG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgb3B0aW9uYWxMb29rQWhlYWRSdWxlTmFtZVBhcnRQYXJ0ID0gT3B0aW9uYWxQYXJ0UGFydC5mcm9tUGFydChsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgcnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJmcm9tTm90aGluZyIsInJ1bGVOYW1lUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiZnJvbVJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlTmFtZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWVQYXJ0IiwibG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsIm9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJmcm9tUGFydCIsInBhcnRzIiwicHJlY2VkZW5jZSIsInJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztpRUFORTsrREFDRTttRUFDSTt5QkFFK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBQSxBQUFNQSxzREFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyx1QkFBdUJDLGlCQUFZLENBQUNDLFlBQVksQ0FBQ0MsMkJBQWdCLEdBQ2pFQyxnQ0FBZ0NILGlCQUFZLENBQUNDLFlBQVksQ0FBQ0csb0NBQXlCLEdBQ25GQyxvQ0FBb0NDLHFCQUFnQixDQUFDQyxRQUFRLENBQUNKLGdDQUM5REssUUFBUTtvQkFDTlQ7b0JBQ0FNO2lCQUNELEVBQ0RJLGFBQWEsTUFDYkMsd0NBQXdDLElBVjdCYixzQ0FVdUVXLE9BQU9DO2dCQUUvRixPQUFPQztZQUNUOzs7V0FibUJiO0VBQThDYyxtQkFBVSJ9