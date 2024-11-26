"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionsRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _definitions = /*#__PURE__*/ _interop_require_default(require("../node/bnf/definitions"));
var _definitions1 = /*#__PURE__*/ _interop_require_default(require("../definition/definitions"));
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
var DefinitionsRule = /*#__PURE__*/ function(Rule) {
    _inherits(DefinitionsRule, Rule);
    function DefinitionsRule() {
        _class_call_check(this, DefinitionsRule);
        return _call_super(this, DefinitionsRule, arguments);
    }
    _create_class(DefinitionsRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var definitionsDefinition = _definitions1.default.fromNothing(), name = _ruleNames.definitionsRuleName, opacity = null, definitions = [
                    definitionsDefinition
                ], NonTerminalNode = _definitions.default, definitionsRule = new DefinitionsRule(name, opacity, definitions, NonTerminalNode);
                return definitionsRule;
            }
        }
    ]);
    return DefinitionsRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2RlZmluaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERlZmluaXRpb25zQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvZGVmaW5pdGlvbnNcIjtcbmltcG9ydCBEZWZpbml0aW9uc0RlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZGVmaW5pdGlvbnNcIjtcblxuaW1wb3J0IHsgZGVmaW5pdGlvbnNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbnNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0RlZmluaXRpb24gPSBEZWZpbml0aW9uc0RlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gZGVmaW5pdGlvbnNSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uc0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IERlZmluaXRpb25zQk5GTm9kZSwgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uc1J1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWZpbml0aW9uc1J1bGUiLCJmcm9tTm90aGluZyIsImRlZmluaXRpb25zRGVmaW5pdGlvbiIsIkRlZmluaXRpb25zRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9uc1J1bGVOYW1lIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiRGVmaW5pdGlvbnNCTkZOb2RlIiwiZGVmaW5pdGlvbnNSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7a0VBQ2M7bUVBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsd0JBQXdCQyxxQkFBcUIsQ0FBQ0YsV0FBVyxJQUN6REcsT0FBT0MsOEJBQW1CLEVBQzFCQyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pMO2lCQUNELEVBQ0RNLGtCQUFrQkMsb0JBQWtCLEVBQ3BDQyxrQkFBa0IsSUFUUFYsZ0JBUzJCSSxNQUFNRSxTQUFTQyxhQUFhQztnQkFFeEUsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUF3QlcsYUFBSSJ9