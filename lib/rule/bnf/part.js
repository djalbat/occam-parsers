"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _terminal = /*#__PURE__*/ _interop_require_default(require("../../definition/partRule/terminal"));
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../definition/partRule/nonTerminal"));
var _ruleNames = require("../../ruleNames");
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
var PartBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(PartBNFRule, Rule);
    function PartBNFRule() {
        _class_call_check(this, PartBNFRule);
        return _call_super(this, PartBNFRule, arguments);
    }
    _create_class(PartBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.PART_RULE_NAME, terminalPartRuleDefinition = _terminal.default.fromNothing(), nonTerminalPartRuleDefinition = _nonTerminal.default.fromNothing(), opacity = null, definitions = [
                    nonTerminalPartRuleDefinition,
                    terminalPartRuleDefinition
                ], partRule = new PartBNFRule(name, opacity, definitions);
                return partRule;
            }
        }
    ]);
    return PartBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3BhcnRSdWxlL3Rlcm1pbmFsXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcGFydFJ1bGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgUEFSVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gUEFSVF9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGFydFJ1bGUgPSBuZXcgUGFydEJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHBhcnRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFydEJORlJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJQQVJUX1JVTEVfTkFNRSIsInRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIk5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwicGFydFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjsrREFDc0I7a0VBQ0c7eUJBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSw0QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyx5QkFBYyxFQUNyQkMsNkJBQTZCQyxpQkFBMEIsQ0FBQ0osV0FBVyxJQUNuRUssZ0NBQWdDQyxvQkFBNkIsQ0FBQ04sV0FBVyxJQUN6RU8sVUFBVSxNQUNWQyxjQUFjO29CQUNaSDtvQkFDQUY7aUJBQ0QsRUFDRE0sV0FBVyxJQVZBVixZQVVnQkUsTUFBTU0sU0FBU0M7Z0JBRWhELE9BQU9DO1lBQ1Q7OztXQWJtQlY7RUFBb0JXLGFBQUkifQ==