"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AmbiguousModifierRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _modifier = /*#__PURE__*/ _interop_require_default(require("../node/bnf/modifier"));
var _ambiguousModifierRule = /*#__PURE__*/ _interop_require_default(require("../definition/ambiguousModifierRule"));
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
var AmbiguousModifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(AmbiguousModifierRule, Rule);
    var _super = _create_super(AmbiguousModifierRule);
    function AmbiguousModifierRule() {
        _class_call_check(this, AmbiguousModifierRule);
        return _super.apply(this, arguments);
    }
    _create_class(AmbiguousModifierRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.ambiguousModifierRuleName, ambiguousModifierRuleDefinition = _ambiguousModifierRule.default.fromNothing(), ambiguous = false, definitions = [
                    ambiguousModifierRuleDefinition
                ], NonTerminalNode = _modifier.default, ambiguousModifierRule = new AmbiguousModifierRule(name, ambiguous, definitions, NonTerminalNode);
                return ambiguousModifierRule;
            }
        }
    ]);
    return AmbiguousModifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2FtYmlndW91c01vZGlmaWVyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IE1vZGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvbW9kaWZpZXJcIjtcbmltcG9ydCBBbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2FtYmlndW91c01vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBhbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbWJpZ3VvdXNNb2RpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBhbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gQW1iaWd1b3VzTW9kaWZpZXJSdWxlRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgYW1iaWd1b3VzTW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTW9kaWZpZXJCTkZOb2RlLFxuICAgICAgICAgIGFtYmlndW91c01vZGlmaWVyUnVsZSA9IG5ldyBBbWJpZ3VvdXNNb2RpZmllclJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBhbWJpZ3VvdXNNb2RpZmllclJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQW1iaWd1b3VzTW9kaWZpZXJSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwiYW1iaWd1b3VzTW9kaWZpZXJSdWxlTmFtZSIsImFtYmlndW91c01vZGlmaWVyUnVsZURlZmluaXRpb24iLCJBbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJNb2RpZmllckJORk5vZGUiLCJhbWJpZ3VvdXNNb2RpZmllclJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjsrREFDVzs0RUFDZ0I7eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxvQ0FBeUIsRUFDaENDLGtDQUFrQ0MsOEJBQStCLENBQUNKLFdBQVcsSUFDN0VLLFlBQVksT0FDWkMsY0FBYztvQkFDWkg7aUJBQ0QsRUFDREksa0JBQWtCQyxpQkFBZSxFQUNqQ0Msd0JBQXdCLElBVGJWLHNCQVN1Q0UsTUFBTUksV0FBV0MsYUFBYUM7Z0JBRXRGLE9BQU9FO1lBQ1Q7OztXQVptQlY7RUFBOEJXLGFBQUkifQ==