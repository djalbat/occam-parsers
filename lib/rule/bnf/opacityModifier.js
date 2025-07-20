"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OpacityModifierBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _opacityModifierRule = /*#__PURE__*/ _interop_require_default(require("../../definition/opacityModifierRule"));
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
var OpacityModifierBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(OpacityModifierBNFRule, Rule);
    function OpacityModifierBNFRule() {
        _class_call_check(this, OpacityModifierBNFRule);
        return _call_super(this, OpacityModifierBNFRule, arguments);
    }
    _create_class(OpacityModifierBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.OPACITY_MODIFIER_RULE_NAME, opacityModifierRuleDefinition = _opacityModifierRule.default.fromNothing(), opacity = null, definitions = [
                    opacityModifierRuleDefinition
                ], opacityModifierRule = new OpacityModifierBNFRule(name, opacity, definitions);
                return opacityModifierRule;
            }
        }
    ]);
    return OpacityModifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9vcGFjaXR5TW9kaWZpZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgT3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vb3BhY2l0eU1vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBPUEFDSVRZX01PRElGSUVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BhY2l0eU1vZGlmaWVyQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9QQUNJVFlfTU9ESUZJRVJfUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IE9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eU1vZGlmaWVyUnVsZSA9IG5ldyBPcGFjaXR5TW9kaWZpZXJCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBvcGFjaXR5TW9kaWZpZXJSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT3BhY2l0eU1vZGlmaWVyQk5GUnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZSIsIk9QQUNJVFlfTU9ESUZJRVJfUlVMRV9OQU1FIiwib3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJPcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIm9wYWNpdHlNb2RpZmllclJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMSjswRUFDeUI7eUJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxxQ0FBMEIsRUFDakNDLGdDQUFnQ0MsNEJBQTZCLENBQUNKLFdBQVcsSUFDekVLLFVBQVUsTUFDVkMsY0FBYztvQkFDWkg7aUJBQ0QsRUFDREksc0JBQXNCLElBUlhSLHVCQVFzQ0UsTUFBTUksU0FBU0M7Z0JBRXRFLE9BQU9DO1lBQ1Q7OztXQVhtQlI7RUFBK0JTLGFBQUkifQ==