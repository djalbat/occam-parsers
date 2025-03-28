"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalPartRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../definition/ruleName"));
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../node/bnf/part/nonTerminal"));
var _ruleName1 = /*#__PURE__*/ _interop_require_default(require("../definition/partRule/nonTerminal/ruleName"));
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
var NonTerminalPartRule = /*#__PURE__*/ function(Rule) {
    _inherits(NonTerminalPartRule, Rule);
    function NonTerminalPartRule() {
        _class_call_check(this, NonTerminalPartRule);
        return _call_super(this, NonTerminalPartRule, arguments);
    }
    _create_class(NonTerminalPartRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.nonTerminalPartRuleName, choiceOfPartsRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.choiceOfPartsRuleName), sequenceOfPartsRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.sequenceOfPartsRuleName), ruleNameNonTerminalPartRuleDefinition = _ruleName1.default.fromNothing(), opacity = null, definitions = [
                    choiceOfPartsRuleNameDefinition,
                    sequenceOfPartsRuleNameDefinition,
                    ruleNameNonTerminalPartRuleDefinition
                ], NonTerminalNode = _nonTerminal.default, nonTerminalPartRule = new NonTerminalPartRule(name, opacity, definitions, NonTerminalNode);
                return nonTerminalPartRule;
            }
        }
    ]);
    return NonTerminalPartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL25vblRlcm1pbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBOb25UZXJtaW5hbFBhcnRCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9wYXJ0L25vblRlcm1pbmFsXCI7XG5pbXBvcnQgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBub25UZXJtaW5hbFBhcnRSdWxlTmFtZSwgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lLCBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShjaG9pY2VPZlBhcnRzUnVsZU5hbWUpLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUoc2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgcnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxQYXJ0Qk5GTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsUGFydFJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnRSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwibm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwiY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwic2VxdWVuY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uIiwic2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUiLCJydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIk5vblRlcm1pbmFsUGFydEJORk5vZGUiLCJub25UZXJtaW5hbFBhcnRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkRBUEo7K0RBQ2M7a0VBQ0k7Z0VBQ2U7eUJBRXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLGtDQUF1QixFQUM5QkMsa0NBQWtDQyxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDQyxnQ0FBcUIsR0FDdkZDLG9DQUFvQ0gsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ0csa0NBQXVCLEdBQzNGQyx3Q0FBd0NDLGtCQUFxQyxDQUFDVixXQUFXLElBQ3pGVyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pUO29CQUNBSTtvQkFDQUU7aUJBQ0QsRUFDREksa0JBQWtCQyxvQkFBc0IsRUFDeENDLHNCQUFzQixJQWJYaEIsb0JBYW1DRSxNQUFNVSxTQUFTQyxhQUFhQztnQkFFaEYsT0FBT0U7WUFDVDs7O1dBaEJtQmhCO0VBQTRCaUIsYUFBSSJ9