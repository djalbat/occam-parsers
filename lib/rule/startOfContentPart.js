"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartOfContentPartRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _startOfContentPart = /*#__PURE__*/ _interop_require_default(require("../node/bnf/startOfContentPart"));
var _startOfContentPart1 = /*#__PURE__*/ _interop_require_default(require("../definition/startOfContentPart"));
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
var StartOfContentPartRule = /*#__PURE__*/ function(Rule) {
    _inherits(StartOfContentPartRule, Rule);
    function StartOfContentPartRule() {
        _class_call_check(this, StartOfContentPartRule);
        return _call_super(this, StartOfContentPartRule, arguments);
    }
    _create_class(StartOfContentPartRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var startOfContentPartDefinition = _startOfContentPart1.default.fromNothing(), name = _ruleNames.startOfContentPartRuleName, opacity = null, definitions = [
                    startOfContentPartDefinition
                ], NonTerminalNode = _startOfContentPart.default, startOfContentPartRule = new StartOfContentPartRule(name, opacity, definitions, NonTerminalNode);
                return startOfContentPartRule;
            }
        }
    ]);
    return StartOfContentPartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3N0YXJ0T2ZDb250ZW50UGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTdGFydE9mQ29udGVudFBhcnRCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9zdGFydE9mQ29udGVudFBhcnRcIjtcbmltcG9ydCBTdGFydE9mQ29udGVudFBhcnREZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3N0YXJ0T2ZDb250ZW50UGFydFwiO1xuXG5pbXBvcnQgeyBzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRPZkNvbnRlbnRQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvbiA9IFN0YXJ0T2ZDb250ZW50UGFydERlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHN0YXJ0T2ZDb250ZW50UGFydERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFN0YXJ0T2ZDb250ZW50UGFydEJORk5vZGUsICAvLy9cbiAgICAgICAgICBzdGFydE9mQ29udGVudFBhcnRSdWxlID0gbmV3IFN0YXJ0T2ZDb250ZW50UGFydFJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXJ0T2ZDb250ZW50UGFydFJ1bGUiLCJmcm9tTm90aGluZyIsInN0YXJ0T2ZDb250ZW50UGFydERlZmluaXRpb24iLCJTdGFydE9mQ29udGVudFBhcnREZWZpbml0aW9uIiwibmFtZSIsInN0YXJ0T2ZDb250ZW50UGFydFJ1bGVOYW1lIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GTm9kZSIsInN0YXJ0T2ZDb250ZW50UGFydFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjt5RUFDcUI7MEVBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLCtCQUErQkMsNEJBQTRCLENBQUNGLFdBQVcsSUFDdkVHLE9BQU9DLHFDQUEwQixFQUNqQ0MsVUFBVSxNQUNWQyxjQUFjO29CQUNaTDtpQkFDRCxFQUNETSxrQkFBa0JDLDJCQUF5QixFQUMzQ0MseUJBQXlCLElBVGRWLHVCQVN5Q0ksTUFBTUUsU0FBU0MsYUFBYUM7Z0JBRXRGLE9BQU9FO1lBQ1Q7OztXQVptQlY7RUFBK0JXLGFBQUkifQ==