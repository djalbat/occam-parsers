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
var _opacityModifier = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/opacityModifier"));
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
                var name = _ruleNames.opacityModifierRuleName, opacityModifierRuleDefinition = _opacityModifierRule.default.fromNothing(), opacity = null, definitions = [
                    opacityModifierRuleDefinition
                ], NonTerminalNode = _opacityModifier.default, opacityModifierRule = new OpacityModifierBNFRule(name, opacity, definitions, NonTerminalNode);
                return opacityModifierRule;
            }
        }
    ]);
    return OpacityModifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9vcGFjaXR5TW9kaWZpZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgT3BhY2l0eU1vZGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ibmYvb3BhY2l0eU1vZGlmaWVyXCI7XG5pbXBvcnQgT3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vb3BhY2l0eU1vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BhY2l0eU1vZGlmaWVyQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IG9wYWNpdHlNb2RpZmllclJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IE9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gT3BhY2l0eU1vZGlmaWVyQk5GTm9kZSwgLy8vXG4gICAgICAgICAgb3BhY2l0eU1vZGlmaWVyUnVsZSA9IG5ldyBPcGFjaXR5TW9kaWZpZXJCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG9wYWNpdHlNb2RpZmllclJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPcGFjaXR5TW9kaWZpZXJCTkZSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwib3BhY2l0eU1vZGlmaWVyUnVsZU5hbWUiLCJvcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIk9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiT3BhY2l0eU1vZGlmaWVyQk5GTm9kZSIsIm9wYWNpdHlNb2RpZmllclJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjtzRUFDa0I7MEVBQ087eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0Msa0NBQXVCLEVBQzlCQyxnQ0FBZ0NDLDRCQUE2QixDQUFDSixXQUFXLElBQ3pFSyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pIO2lCQUNELEVBQ0RJLGtCQUFrQkMsd0JBQXNCLEVBQ3hDQyxzQkFBc0IsSUFUWFYsdUJBU3NDRSxNQUFNSSxTQUFTQyxhQUFhQztnQkFFbkYsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUErQlcsYUFBSSJ9