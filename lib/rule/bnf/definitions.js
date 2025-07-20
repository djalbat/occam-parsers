"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionsBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _definitions = /*#__PURE__*/ _interop_require_default(require("../../definition/definitions"));
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
var DefinitionsBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(DefinitionsBNFRule, Rule);
    function DefinitionsBNFRule() {
        _class_call_check(this, DefinitionsBNFRule);
        return _call_super(this, DefinitionsBNFRule, arguments);
    }
    _create_class(DefinitionsBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var definitionsDefinition = _definitions.default.fromNothing(), name = _ruleNames.DEFINITIONS_RULE_NAME, opacity = null, definitions = [
                    definitionsDefinition
                ], definitionsRule = new DefinitionsBNFRule(name, opacity, definitions);
                return definitionsRule;
            }
        }
    ]);
    return DefinitionsBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9kZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBEZWZpbml0aW9uc0RlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vZGVmaW5pdGlvbnNcIjtcblxuaW1wb3J0IHsgREVGSU5JVElPTlNfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uc0JORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zRGVmaW5pdGlvbiA9IERlZmluaXRpb25zRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5hbWUgPSBERUZJTklUSU9OU19SVUxFX05BTUUsIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvbnNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uc1J1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWZpbml0aW9uc0JORlJ1bGUiLCJmcm9tTm90aGluZyIsImRlZmluaXRpb25zRGVmaW5pdGlvbiIsIkRlZmluaXRpb25zRGVmaW5pdGlvbiIsIm5hbWUiLCJERUZJTklUSU9OU19SVUxFX05BTUUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc1J1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMSjtrRUFDaUI7eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyx3QkFBd0JDLG9CQUFxQixDQUFDRixXQUFXLElBQ3pERyxPQUFPQyxnQ0FBcUIsRUFDNUJDLFVBQVUsTUFDVkMsY0FBYztvQkFDWkw7aUJBQ0QsRUFDRE0sa0JBQWtCLElBUlBSLG1CQVE4QkksTUFBTUUsU0FBU0M7Z0JBRTlELE9BQU9DO1lBQ1Q7OztXQVhtQlI7RUFBMkJTLGFBQUkifQ==