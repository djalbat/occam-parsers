"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZeroOrMoreQuantifierBNFRule;
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
var asterisk = _occamlexers.specialSymbols.asterisk;
var ZeroOrMoreQuantifierBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(ZeroOrMoreQuantifierBNFRule, Rule);
    function ZeroOrMoreQuantifierBNFRule() {
        _class_call_check(this, ZeroOrMoreQuantifierBNFRule);
        return _call_super(this, ZeroOrMoreQuantifierBNFRule, arguments);
    }
    _create_class(ZeroOrMoreQuantifierBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.ZERO_OR_MORE_QUANTIFIER_RULE_NAME, specialSymbol = asterisk, zeroOrMoreQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), opacity = null, definitions = [
                    zeroOrMoreQuantifierRuleDefinition
                ], zeroOrMoreQuantifierRule = new ZeroOrMoreQuantifierBNFRule(name, opacity, definitions);
                return zeroOrMoreQuantifierRule;
            }
        }
    ]);
    return ZeroOrMoreQuantifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi96ZXJvT3JNb3JlUXVhbnRpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlXCI7XG5cbmltcG9ydCB7IFpFUk9fT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBhc3RlcmlzayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFplcm9Pck1vcmVRdWFudGlmaWVyQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFpFUk9fT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIHNwZWNpYWxTeW1ib2wgPSBhc3RlcmlzaywgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbi5mcm9tU3BlY2lhbFN5bWJvbChzcGVjaWFsU3ltYm9sKSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBaZXJvT3JNb3JlUXVhbnRpZmllckJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlplcm9Pck1vcmVRdWFudGlmaWVyQk5GUnVsZSIsImFzdGVyaXNrIiwic3BlY2lhbFN5bWJvbHMiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJaRVJPX09SX01PUkVfUVVBTlRJRklFUl9SVUxFX05BTUUiLCJzcGVjaWFsU3ltYm9sIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImZyb21TcGVjaWFsU3ltYm9sIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7MkJBVFU7MkRBRWQ7cUVBQ29CO3lCQUVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQU0sQUFBRUMsV0FBYUMsMkJBQWMsQ0FBM0JEO0FBRU8sSUFBQSxBQUFNRCw0Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyw0Q0FBaUMsRUFDeENDLGdCQUFnQkwsVUFDaEJNLHFDQUFxQ0MsdUJBQXdCLENBQUNDLGlCQUFpQixDQUFDSCxnQkFDaEZJLFVBQVUsTUFDVkMsY0FBYztvQkFDWko7aUJBQ0QsRUFDREssMkJBQTJCLElBVGhCWiw0QkFTZ0RJLE1BQU1NLFNBQVNDO2dCQUVoRixPQUFPQztZQUNUOzs7V0FabUJaO0VBQW9DYSxhQUFJIn0=