"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _name = /*#__PURE__*/ _interop_require_default(require("../../definition/name"));
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
var RuleNameBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(RuleNameBNFRule, Rule);
    function RuleNameBNFRule() {
        _class_call_check(this, RuleNameBNFRule);
        return _call_super(this, RuleNameBNFRule, arguments);
    }
    _create_class(RuleNameBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var nameDefinition = _name.default.fromNothing(), name = _ruleNames.RULE_NAME_RULE_NAME, opacity = null, definitions = [
                    nameDefinition ///
                ], ruleNameRule = new RuleNameBNFRule(name, opacity, definitions);
                return ruleNameRule;
            }
        }
    ]);
    return RuleNameBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9uYW1lXCI7XG5cbmltcG9ydCB7IFJVTEVfTkFNRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZURlZmluaXRpb24gPSBOYW1lRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5hbWUgPSBSVUxFX05BTUVfUlVMRV9OQU1FLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBuYW1lRGVmaW5pdGlvbiAgLy8vXG4gICAgICAgICAgXSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBydWxlTmFtZVJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlTmFtZUJORlJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWVEZWZpbml0aW9uIiwiTmFtZURlZmluaXRpb24iLCJuYW1lIiwiUlVMRV9OQU1FX1JVTEVfTkFNRSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsInJ1bGVOYW1lUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKOzJEQUNVO3lCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsaUJBQWlCQyxhQUFjLENBQUNGLFdBQVcsSUFDM0NHLE9BQU9DLDhCQUFtQixFQUMxQkMsVUFBVSxNQUNWQyxjQUFjO29CQUNaTCxlQUFnQixHQUFHO2lCQUNwQixFQUNETSxlQUFlLElBUkpSLGdCQVF3QkksTUFBTUUsU0FBU0M7Z0JBRXhELE9BQU9DO1lBQ1Q7OztXQVhtQlI7RUFBd0JTLGFBQUkifQ==