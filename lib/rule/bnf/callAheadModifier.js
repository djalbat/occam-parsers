"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CallAheadModifierBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _callAheadModifier = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/callAheadModifier"));
var _callAheadModifierRule = /*#__PURE__*/ _interop_require_default(require("../../definition/callAheadModifierRule"));
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
var CallAheadModifierBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(CallAheadModifierBNFRule, Rule);
    function CallAheadModifierBNFRule() {
        _class_call_check(this, CallAheadModifierBNFRule);
        return _call_super(this, CallAheadModifierBNFRule, arguments);
    }
    _create_class(CallAheadModifierBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.callAheadModifierRuleName, callAheadModifierRuleDefinition = _callAheadModifierRule.default.fromNothing(), opacity = null, definitions = [
                    callAheadModifierRuleDefinition
                ], NonTerminalNode = _callAheadModifier.default, callAheadModifierRule = new CallAheadModifierBNFRule(name, opacity, definitions, NonTerminalNode);
                return callAheadModifierRule;
            }
        }
    ]);
    return CallAheadModifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9jYWxsQWhlYWRNb2RpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBDYWxsQWhlYWRNb2RpZmllckJORk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvYm5mL2NhbGxBaGVhZE1vZGlmaWVyXCI7XG5pbXBvcnQgQ2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9jYWxsQWhlYWRNb2RpZmllclJ1bGVcIjtcblxuaW1wb3J0IHsgY2FsbEFoZWFkTW9kaWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gY2FsbEFoZWFkTW9kaWZpZXJSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgY2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IENhbGxBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNhbGxBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IENhbGxBaGVhZE1vZGlmaWVyQk5GTm9kZSwgIC8vL1xuICAgICAgICAgIGNhbGxBaGVhZE1vZGlmaWVyUnVsZSA9IG5ldyBDYWxsQWhlYWRNb2RpZmllckJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gY2FsbEFoZWFkTW9kaWZpZXJSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwiY2FsbEFoZWFkTW9kaWZpZXJSdWxlTmFtZSIsImNhbGxBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJDYWxsQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiQ2FsbEFoZWFkTW9kaWZpZXJCTkZOb2RlIiwiY2FsbEFoZWFkTW9kaWZpZXJSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7d0VBQ29COzRFQUNPO3lCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0Msb0NBQXlCLEVBQ2hDQyxrQ0FBa0NDLDhCQUErQixDQUFDSixXQUFXLElBQzdFSyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pIO2lCQUNELEVBQ0RJLGtCQUFrQkMsMEJBQXdCLEVBQzFDQyx3QkFBd0IsSUFUYlYseUJBUzBDRSxNQUFNSSxTQUFTQyxhQUFhQztnQkFFdkYsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUFpQ1csYUFBSSJ9