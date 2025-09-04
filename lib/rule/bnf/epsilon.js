"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../../definition/stringLiteral"));
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
var epsilon = _occamlexers.specialSymbols.epsilon;
var EpsilonBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(EpsilonBNFRule, Rule);
    function EpsilonBNFRule() {
        _class_call_check(this, EpsilonBNFRule);
        return _call_super(this, EpsilonBNFRule, arguments);
    }
    _create_class(EpsilonBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = epsilon, epsilonStringLiteralDefinition = _stringLiteral.default.fromContent(content), name = _ruleNames.EPSILON_RULE_NAME, opacity = null, definitions = [
                    epsilonStringLiteralDefinition
                ], epsilonRule = new EpsilonBNFRule(name, opacity, definitions);
                return epsilonRule;
            }
        }
    ]);
    return EpsilonBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lcHNpbG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBTdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9zdHJpbmdMaXRlcmFsXCI7XG5cbmltcG9ydCB7IEVQU0lMT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVwc2lsb24sIC8vL1xuICAgICAgICAgIGVwc2lsb25TdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiA9IFN0cmluZ0xpdGVyYWxEZWZpbml0aW9uLmZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBFUFNJTE9OX1JVTEVfTkFNRSwgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uU3RyaW5nTGl0ZXJhbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25CTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBlcHNpbG9uUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwc2lsb25CTkZSdWxlIiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJjb250ZW50IiwiZXBzaWxvblN0cmluZ0xpdGVyYWxEZWZpbml0aW9uIiwiU3RyaW5nTGl0ZXJhbERlZmluaXRpb24iLCJmcm9tQ29udGVudCIsIm5hbWUiLCJFUFNJTE9OX1JVTEVfTkFNRSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsImVwc2lsb25SdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7MkJBVFU7MkRBRWQ7b0VBQ21CO3lCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU0sQUFBRUMsVUFBWUMsMkJBQWMsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxVQUFVSCxTQUNWSSxpQ0FBaUNDLHNCQUF1QixDQUFDQyxXQUFXLENBQUNILFVBQ3JFSSxPQUFPQyw0QkFBaUIsRUFDeEJDLFVBQVUsTUFDVkMsY0FBYztvQkFDWk47aUJBQ0QsRUFDRE8sY0FBYyxJQVRIWixlQVNzQlEsTUFBTUUsU0FBU0M7Z0JBRXRELE9BQU9DO1lBQ1Q7OztXQVptQlo7RUFBdUJhLGFBQUkifQ==