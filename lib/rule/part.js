"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _part = /*#__PURE__*/ _interop_require_default(require("../node/bnf/part"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../definition/ruleName"));
var _terminal = /*#__PURE__*/ _interop_require_default(require("../definition/partRule/terminal"));
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../definition/partRule/nonTerminal"));
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
var PartRule = /*#__PURE__*/ function(Rule) {
    _inherits(PartRule, Rule);
    function PartRule() {
        _class_call_check(this, PartRule);
        return _call_super(this, PartRule, arguments);
    }
    _create_class(PartRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.partRuleName, terminalPartRuleDefinition = _terminal.default.fromNothing(), nonTerminalPartRuleDefinition = _nonTerminal.default.fromNothing(), noWhitespacePartRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.noWhitespacePartRuleName), startOfContentPartRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.startOfContentPartRuleName), opacity = null, definitions = [
                    nonTerminalPartRuleDefinition,
                    terminalPartRuleDefinition,
                    startOfContentPartRuleNameDefinition,
                    noWhitespacePartRuleNameDefinition
                ], NonTerminalNode = _part.default, partRule = new PartRule(name, opacity, definitions, NonTerminalNode);
                return partRule;
            }
        }
    ]);
    return PartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3BhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUGFydEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3BhcnRcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IHBhcnRSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lLCBzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBwYXJ0UnVsZU5hbWUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUGFydEJORk5vZGUsICAvLy9cbiAgICAgICAgICBwYXJ0UnVsZSA9IG5ldyBQYXJ0UnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBwYXJ0UnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhcnRSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwicGFydFJ1bGVOYW1lIiwidGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIiwic3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWVEZWZpbml0aW9uIiwic3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJQYXJ0Qk5GTm9kZSIsInBhcnRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MkRBUko7MkRBQ087K0RBQ087K0RBQ1E7a0VBQ0c7eUJBRXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyx1QkFBWSxFQUNuQkMsNkJBQTZCQyxpQkFBMEIsQ0FBQ0osV0FBVyxJQUNuRUssZ0NBQWdDQyxvQkFBNkIsQ0FBQ04sV0FBVyxJQUN6RU8scUNBQXFDQyxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDQyxtQ0FBd0IsR0FDN0ZDLHVDQUF1Q0gsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ0cscUNBQTBCLEdBQ2pHQyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pUO29CQUNBRjtvQkFDQVE7b0JBQ0FKO2lCQUNELEVBQ0RRLGtCQUFrQkMsYUFBVyxFQUM3QkMsV0FBVyxJQWZBbEIsU0FlYUUsTUFBTVksU0FBU0MsYUFBYUM7Z0JBRTFELE9BQU9FO1lBQ1Q7OztXQWxCbUJsQjtFQUFpQm1CLGFBQUkifQ==