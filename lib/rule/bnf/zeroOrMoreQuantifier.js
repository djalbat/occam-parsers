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
var _quantifier = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/quantifier"));
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
                var name = _ruleNames.zeroOrMoreQuantifierRuleName, specialSymbol = asterisk, zeroOrMoreQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), opacity = null, definitions = [
                    zeroOrMoreQuantifierRuleDefinition
                ], NonTerminalNode = _quantifier.default, zeroOrMoreQuantifierRule = new ZeroOrMoreQuantifierBNFRule(name, opacity, definitions, NonTerminalNode);
                return zeroOrMoreQuantifierRule;
            }
        }
    ]);
    return ZeroOrMoreQuantifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi96ZXJvT3JNb3JlUXVhbnRpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgUXVhbnRpZmllckJORk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvYm5mL3F1YW50aWZpZXJcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcXVhbnRpZmllclJ1bGVcIjtcblxuaW1wb3J0IHsgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBhc3RlcmlzayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFplcm9Pck1vcmVRdWFudGlmaWVyQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBzcGVjaWFsU3ltYm9sID0gYXN0ZXJpc2ssIC8vL1xuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb24gPSBRdWFudGlmaWVyUnVsZURlZmluaXRpb24uZnJvbVNwZWNpYWxTeW1ib2woc3BlY2lhbFN5bWJvbCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBRdWFudGlmaWVyQk5GTm9kZSwgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IFplcm9Pck1vcmVRdWFudGlmaWVyQk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJaZXJvT3JNb3JlUXVhbnRpZmllckJORlJ1bGUiLCJhc3RlcmlzayIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsInNwZWNpYWxTeW1ib2wiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiZnJvbVNwZWNpYWxTeW1ib2wiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJRdWFudGlmaWVyQk5GTm9kZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJCQVZVOzJEQUVkO2lFQUNhO3FFQUNPO3lCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU0sQUFBRUMsV0FBYUMsMkJBQWMsQ0FBM0JEO0FBRU8sSUFBQSxBQUFNRCw0Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MsdUNBQTRCLEVBQ25DQyxnQkFBZ0JMLFVBQ2hCTSxxQ0FBcUNDLHVCQUF3QixDQUFDQyxpQkFBaUIsQ0FBQ0gsZ0JBQ2hGSSxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pKO2lCQUNELEVBQ0RLLGtCQUFrQkMsbUJBQWlCLEVBQ25DQywyQkFBMkIsSUFWaEJkLDRCQVVnREksTUFBTU0sU0FBU0MsYUFBYUM7Z0JBRTdGLE9BQU9FO1lBQ1Q7OztXQWJtQmQ7RUFBb0NlLGFBQUkifQ==