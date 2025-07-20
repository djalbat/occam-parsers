"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OneOrMoreQuantifierBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _quantifierRule = /*#__PURE__*/ _interop_require_default(require("../../definition/quantifierRule"));
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
var plus = _occamlexers.specialSymbols.plus;
var OneOrMoreQuantifierBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(OneOrMoreQuantifierBNFRule, Rule);
    function OneOrMoreQuantifierBNFRule() {
        _class_call_check(this, OneOrMoreQuantifierBNFRule);
        return _call_super(this, OneOrMoreQuantifierBNFRule, arguments);
    }
    _create_class(OneOrMoreQuantifierBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.ONE_OR_MORE_QUANTIFIER_RULE_NAME, specialSymbol = plus, oneOrMoreQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), opacity = null, definitions = [
                    oneOrMoreQuantifierRuleDefinition
                ], oneOrMoreQuantifierRule = new OneOrMoreQuantifierBNFRule(name, opacity, definitions);
                return oneOrMoreQuantifierRule;
            }
        }
    ]);
    return OneOrMoreQuantifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9vbmVPck1vcmVRdWFudGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcXVhbnRpZmllclJ1bGVcIjtcblxuaW1wb3J0IHsgT05FX09SX01PUkVfUVVBTlRJRklFUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gT05FX09SX01PUkVfUVVBTlRJRklFUl9SVUxFX05BTUUsIC8vL1xuICAgICAgICAgIHNwZWNpYWxTeW1ib2wgPSBwbHVzLCAvLy9cbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb24gPSBRdWFudGlmaWVyUnVsZURlZmluaXRpb24uZnJvbVNwZWNpYWxTeW1ib2woc3BlY2lhbFN5bWJvbCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBvbmVPck1vcmVRdWFudGlmaWVyUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlIiwicGx1cyIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwiT05FX09SX01PUkVfUVVBTlRJRklFUl9SVUxFX05BTUUiLCJzcGVjaWFsU3ltYm9sIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiZnJvbVNwZWNpYWxTeW1ib2wiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzJCQVRVOzJEQUVkO3FFQUNvQjt5QkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNLEFBQUVDLE9BQVNDLDJCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MsMkNBQWdDLEVBQ3ZDQyxnQkFBZ0JMLE1BQ2hCTSxvQ0FBb0NDLHVCQUF3QixDQUFDQyxpQkFBaUIsQ0FBQ0gsZ0JBQy9FSSxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pKO2lCQUNELEVBQ0RLLDBCQUEwQixJQVRmWiwyQkFTOENJLE1BQU1NLFNBQVNDO2dCQUU5RSxPQUFPQztZQUNUOzs7V0FabUJaO0VBQW1DYSxhQUFJIn0=