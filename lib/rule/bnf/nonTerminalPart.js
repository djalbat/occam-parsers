"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalPartBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../../definition/ruleName"));
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/part/nonTerminal"));
var _ruleName1 = /*#__PURE__*/ _interop_require_default(require("../../definition/partRule/nonTerminal/ruleName"));
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
var NonTerminalPartBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(NonTerminalPartBNFRule, Rule);
    function NonTerminalPartBNFRule() {
        _class_call_check(this, NonTerminalPartBNFRule);
        return _call_super(this, NonTerminalPartBNFRule, arguments);
    }
    _create_class(NonTerminalPartBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.nonTerminalPartRuleName, choiceOfPartsRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.choiceOfPartsRuleName), sequenceOfPartsRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.sequenceOfPartsRuleName), ruleNameNonTerminalPartRuleDefinition = _ruleName1.default.fromNothing(), opacity = null, definitions = [
                    choiceOfPartsRuleNameDefinition,
                    sequenceOfPartsRuleNameDefinition,
                    ruleNameNonTerminalPartRuleDefinition
                ], NonTerminalNode = _nonTerminal.default, nonTerminalPartRule = new NonTerminalPartBNFRule(name, opacity, definitions, NonTerminalNode);
                return nonTerminalPartRule;
            }
        }
    ]);
    return NonTerminalPartBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9ub25UZXJtaW5hbFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0Qk5GTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ibmYvcGFydC9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcGFydFJ1bGUvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcblxuaW1wb3J0IHsgbm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsIGNob2ljZU9mUGFydHNSdWxlTmFtZSwgc2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsUGFydEJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBub25UZXJtaW5hbFBhcnRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUoY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lKSxcbiAgICAgICAgICBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsUGFydEJORk5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgTm9uVGVybWluYWxQYXJ0Qk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbFBhcnRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0Qk5GUnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZSIsIm5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsImNob2ljZU9mUGFydHNSdWxlTmFtZSIsInNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiIsInNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lIiwicnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIlJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJOb25UZXJtaW5hbFBhcnRCTkZOb2RlIiwibm9uVGVybWluYWxQYXJ0UnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBKOytEQUNjO2tFQUNJO2dFQUNlO3lCQUVzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RSxJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxrQ0FBdUIsRUFDOUJDLGtDQUFrQ0MsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ0MsZ0NBQXFCLEdBQ3ZGQyxvQ0FBb0NILGlCQUFrQixDQUFDQyxZQUFZLENBQUNHLGtDQUF1QixHQUMzRkMsd0NBQXdDQyxrQkFBcUMsQ0FBQ1YsV0FBVyxJQUN6RlcsVUFBVSxNQUNWQyxjQUFjO29CQUNaVDtvQkFDQUk7b0JBQ0FFO2lCQUNELEVBQ0RJLGtCQUFrQkMsb0JBQXNCLEVBQ3hDQyxzQkFBc0IsSUFiWGhCLHVCQWFzQ0UsTUFBTVUsU0FBU0MsYUFBYUM7Z0JBRW5GLE9BQU9FO1lBQ1Q7OztXQWhCbUJoQjtFQUErQmlCLGFBQUkifQ==