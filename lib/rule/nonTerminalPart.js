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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var NonTerminalPartRule = /*#__PURE__*/ function(Rule) {
    _inherits(NonTerminalPartRule, Rule);
    var _super = _create_super(NonTerminalPartRule);
    function NonTerminalPartRule() {
        _class_call_check(this, NonTerminalPartRule);
        return _super.apply(this, arguments);
    }
    _create_class(NonTerminalPartRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.nonTerminalPartRuleName, choiceOfPartsRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.choiceOfPartsRuleName), sequenceOfPartsRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.sequenceOfPartsRuleName), ruleNameNonTerminalPartRuleDefinition = _ruleName1.default.fromNothing(), ambiguous = false, definitions = [
                    choiceOfPartsRuleNameDefinition,
                    sequenceOfPartsRuleNameDefinition,
                    ruleNameNonTerminalPartRuleDefinition
                ], NonTerminalNode = _nonTerminal.default, nonTerminalPartRule = new NonTerminalPartRule(name, ambiguous, definitions, NonTerminalNode);
                return nonTerminalPartRule;
            }
        }
    ]);
    return NonTerminalPartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL25vblRlcm1pbmFsUGFydC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBOb25UZXJtaW5hbFBhcnRCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9wYXJ0L25vblRlcm1pbmFsXCI7XG5pbXBvcnQgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBub25UZXJtaW5hbFBhcnRSdWxlTmFtZSwgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lLCBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShjaG9pY2VPZlBhcnRzUnVsZU5hbWUpLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUoc2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgcnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxQYXJ0Qk5GTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxQYXJ0UnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnRSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwibm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwiY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwic2VxdWVuY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uIiwic2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUiLCJydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxQYXJ0Qk5GTm9kZSIsIm5vblRlcm1pbmFsUGFydFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQSjsrREFDYztrRUFDSTtnRUFDZTt5QkFFc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxrQ0FBdUIsRUFDOUJDLGtDQUFrQ0MsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ0MsZ0NBQXFCLEdBQ3ZGQyxvQ0FBb0NILGlCQUFrQixDQUFDQyxZQUFZLENBQUNHLGtDQUF1QixHQUMzRkMsd0NBQXdDQyxrQkFBcUMsQ0FBQ1YsV0FBVyxJQUN6RlcsWUFBWSxPQUNaQyxjQUFjO29CQUNaVDtvQkFDQUk7b0JBQ0FFO2lCQUNELEVBQ0RJLGtCQUFrQkMsb0JBQXNCLEVBQ3hDQyxzQkFBc0IsSUFiWGhCLG9CQWFtQ0UsTUFBTVUsV0FBV0MsYUFBYUM7Z0JBRWxGLE9BQU9FO1lBQ1Q7OztXQWhCbUJoQjtFQUE0QmlCLGFBQUkifQ==