"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoWhitespacePartBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _noWhitespacePart = /*#__PURE__*/ _interop_require_default(require("../../definition/noWhitespacePart"));
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
var NoWhitespacePartBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(NoWhitespacePartBNFRule, Rule);
    function NoWhitespacePartBNFRule() {
        _class_call_check(this, NoWhitespacePartBNFRule);
        return _call_super(this, NoWhitespacePartBNFRule, arguments);
    }
    _create_class(NoWhitespacePartBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var noWhitespacePartDefinition = _noWhitespacePart.default.fromNothing(), name = _ruleNames.NO_WHITESPACE_PART_RULE_NAME, opacity = null, definitions = [
                    noWhitespacePartDefinition
                ], noWhitespacePartRule = new NoWhitespacePartBNFRule(name, opacity, definitions);
                return noWhitespacePartRule;
            }
        }
    ]);
    return NoWhitespacePartBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL25vV2hpdGVzcGFjZVBhcnRcIjtcblxuaW1wb3J0IHsgTk9fV0hJVEVTUEFDRV9QQVJUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9XaGl0ZXNwYWNlUGFydEJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uID0gTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gTk9fV0hJVEVTUEFDRV9QQVJUX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gbmV3IE5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VQYXJ0UnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlIiwiZnJvbU5vdGhpbmciLCJub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIk5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIiwibmFtZSIsIk5PX1dISVRFU1BBQ0VfUEFSVF9SVUxFX05BTUUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKO3VFQUNzQjt5QkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLDZCQUE2QkMseUJBQTBCLENBQUNGLFdBQVcsSUFDbkVHLE9BQU9DLHVDQUE0QixFQUNuQ0MsVUFBVSxNQUNWQyxjQUFjO29CQUNaTDtpQkFDRCxFQUNETSx1QkFBdUIsSUFSWlIsd0JBUXdDSSxNQUFNRSxTQUFTQztnQkFFeEUsT0FBT0M7WUFDVDs7O1dBWG1CUjtFQUFnQ1MsYUFBSSJ9