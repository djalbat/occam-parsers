"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return WildcardRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _wildcard = /*#__PURE__*/ _interop_require_default(require("../node/bnf/wildcard"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../definition/terminalSymbol"));
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
var wildcard = _occamlexers.specialSymbols.wildcard;
var WildcardRule = /*#__PURE__*/ function(Rule) {
    _inherits(WildcardRule, Rule);
    var _super = _create_super(WildcardRule);
    function WildcardRule() {
        _class_call_check(this, WildcardRule);
        return _super.apply(this, arguments);
    }
    _create_class(WildcardRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = wildcard, wildcardTerminalSymbolDefinition = _terminalSymbol.default.fromContent(content), name = _ruleNames.wildcardRuleName, ambiguous = false, definitions = [
                    wildcardTerminalSymbolDefinition
                ], NonTerminalNode = _wildcard.default, wildcardRule = new WildcardRule(name, ambiguous, definitions, NonTerminalNode);
                return wildcardRule;
            }
        }
    ]);
    return WildcardRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3dpbGRjYXJkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBXaWxkY2FyZEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3dpbGRjYXJkXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IHdpbGRjYXJkUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgd2lsZGNhcmQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWxkY2FyZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB3aWxkY2FyZCwgLy8vXG4gICAgICAgICAgd2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24uZnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgbmFtZSA9IHdpbGRjYXJkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBXaWxkY2FyZEJORk5vZGUsICAvLy9cbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gd2lsZGNhcmRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIldpbGRjYXJkUnVsZSIsIndpbGRjYXJkIiwic3BlY2lhbFN5bWJvbHMiLCJmcm9tTm90aGluZyIsImNvbnRlbnQiLCJ3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsImZyb21Db250ZW50IiwibmFtZSIsIndpbGRjYXJkUnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIldpbGRjYXJkQk5GTm9kZSIsIndpbGRjYXJkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJCQVZVOzJEQUVkOytEQUNXO3FFQUNTO3lCQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLElBQU0sQUFBRUMsV0FBYUMsMkJBQWMsQ0FBM0JEO0FBRU8sSUFBQSxBQUFNRCw2QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxVQUFVSCxVQUNWSSxtQ0FBbUNDLHVCQUF3QixDQUFDQyxXQUFXLENBQUNILFVBQ3hFSSxPQUFPQywyQkFBZ0IsRUFDdkJDLFlBQVksT0FDWkMsY0FBYztvQkFDWk47aUJBQ0QsRUFDRE8sa0JBQWtCQyxpQkFBZSxFQUNqQ0MsZUFBZSxJQVZKZCxhQVVxQlEsTUFBTUUsV0FBV0MsYUFBYUM7Z0JBRXBFLE9BQU9FO1lBQ1Q7OztXQWJtQmQ7RUFBcUJlLGFBQUkifQ==