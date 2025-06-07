"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return QuantifierBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _part = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/part"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../../definition/ruleName"));
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
var QuantifierBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(QuantifierBNFRule, Rule);
    function QuantifierBNFRule() {
        _class_call_check(this, QuantifierBNFRule);
        return _call_super(this, QuantifierBNFRule, arguments);
    }
    _create_class(QuantifierBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.quantifierRuleName, optionalQuantifierRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.optionalQuantifierRuleName), oneOrMoreQuantifierRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.oneOrMoreQuantifierRuleName), zeroOrMoreQuantifierRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.zeroOrMoreQuantifierRuleName), opacity = null, definitions = [
                    optionalQuantifierRuleNameDefinition,
                    oneOrMoreQuantifierRuleNameDefinition,
                    zeroOrMoreQuantifierRuleNameDefinition
                ], NonTerminalNode = _part.default, quantifierRule = new QuantifierBNFRule(name, opacity, definitions, NonTerminalNode);
                return quantifierRule;
            }
        }
    ]);
    return QuantifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9xdWFudGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFBhcnRCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi9wYXJ0XCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5cbmltcG9ydCB7IHF1YW50aWZpZXJSdWxlTmFtZSwgb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSwgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVhbnRpZmllckJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBxdWFudGlmaWVyUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZSh6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUGFydEJORk5vZGUsICAvLy9cbiAgICAgICAgICBxdWFudGlmaWVyUnVsZSA9IG5ldyBRdWFudGlmaWVyQk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBxdWFudGlmaWVyUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlF1YW50aWZpZXJCTkZSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwicXVhbnRpZmllclJ1bGVOYW1lIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24iLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiUGFydEJORk5vZGUiLCJxdWFudGlmaWVyUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5KOzJEQUNPOytEQUNPO3lCQUUyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRyxJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLDZCQUFrQixFQUN6QkMsdUNBQXVDQyxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDQyxxQ0FBMEIsR0FDakdDLHdDQUF3Q0gsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ0csc0NBQTJCLEdBQ25HQyx5Q0FBeUNMLGlCQUFrQixDQUFDQyxZQUFZLENBQUNLLHVDQUE0QixHQUNyR0MsVUFBVSxNQUNWQyxjQUFjO29CQUNaVDtvQkFDQUk7b0JBQ0FFO2lCQUNELEVBQ0RJLGtCQUFrQkMsYUFBVyxFQUM3QkMsaUJBQWlCLElBYk5oQixrQkFhNEJFLE1BQU1VLFNBQVNDLGFBQWFDO2dCQUV6RSxPQUFPRTtZQUNUOzs7V0FoQm1CaEI7RUFBMEJpQixhQUFJIn0=