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
var _noWhitespacePart = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/noWhitespacePart"));
var _noWhitespacePart1 = /*#__PURE__*/ _interop_require_default(require("../../definition/noWhitespacePart"));
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
                var noWhitespacePartDefinition = _noWhitespacePart1.default.fromNothing(), name = _ruleNames.noWhitespacePartRuleName, opacity = null, definitions = [
                    noWhitespacePartDefinition
                ], NonTerminalNode = _noWhitespacePart.default, noWhitespacePartRule = new NoWhitespacePartBNFRule(name, opacity, definitions, NonTerminalNode);
                return noWhitespacePartRule;
            }
        }
    ]);
    return NoWhitespacePartBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnRCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi9ub1doaXRlc3BhY2VQYXJ0XCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vbm9XaGl0ZXNwYWNlUGFydFwiO1xuXG5pbXBvcnQgeyBub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiA9IE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbmFtZSA9IG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IE5vV2hpdGVzcGFjZVBhcnRCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUgPSBuZXcgTm9XaGl0ZXNwYWNlUGFydEJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlUGFydFJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb1doaXRlc3BhY2VQYXJ0Qk5GUnVsZSIsImZyb21Ob3RoaW5nIiwibm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIm5hbWUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJOb1doaXRlc3BhY2VQYXJ0Qk5GTm9kZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7dUVBQ21CO3dFQUNHO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsNkJBQTZCQywwQkFBMEIsQ0FBQ0YsV0FBVyxJQUNuRUcsT0FBT0MsbUNBQXdCLEVBQy9CQyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pMO2lCQUNELEVBQ0RNLGtCQUFrQkMseUJBQXVCLEVBQ3pDQyx1QkFBdUIsSUFUWlYsd0JBU3dDSSxNQUFNRSxTQUFTQyxhQUFhQztnQkFFckYsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUFnQ1csYUFBSSJ9