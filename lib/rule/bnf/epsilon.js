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
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../../definition/terminalSymbol"));
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
                var content = epsilon, epsilonTerminalSymbolDefinition = _terminalSymbol.default.fromContent(content), name = _ruleNames.EPSILON_RULE_NAME, opacity = null, definitions = [
                    epsilonTerminalSymbolDefinition
                ], epsilonRule = new EpsilonBNFRule(name, opacity, definitions);
                return epsilonRule;
            }
        }
    ]);
    return EpsilonBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lcHNpbG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2xcIjtcblxuaW1wb3J0IHsgRVBTSUxPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb25CTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXBzaWxvbiwgLy8vXG4gICAgICAgICAgZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbi5mcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gRVBTSUxPTl9SVUxFX05BTUUsIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvbkJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIGVwc2lsb25SdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXBzaWxvbkJORlJ1bGUiLCJlcHNpbG9uIiwic3BlY2lhbFN5bWJvbHMiLCJmcm9tTm90aGluZyIsImNvbnRlbnQiLCJlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiZnJvbUNvbnRlbnQiLCJuYW1lIiwiRVBTSUxPTl9SVUxFX05BTUUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJlcHNpbG9uUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzJCQVRVOzJEQUVkO3FFQUNvQjt5QkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNLEFBQUVDLFVBQVlDLDJCQUFjLENBQTFCRDtBQUVPLElBQUEsQUFBTUQsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsVUFBVUgsU0FDVkksa0NBQWtDQyx1QkFBd0IsQ0FBQ0MsV0FBVyxDQUFDSCxVQUN2RUksT0FBT0MsNEJBQWlCLEVBQ3hCQyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pOO2lCQUNELEVBQ0RPLGNBQWMsSUFUSFosZUFTc0JRLE1BQU1FLFNBQVNDO2dCQUV0RCxPQUFPQztZQUNUOzs7V0FabUJaO0VBQXVCYSxhQUFJIn0=