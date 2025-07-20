"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartOfContentPartBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _startOfContentPart = /*#__PURE__*/ _interop_require_default(require("../../definition/startOfContentPart"));
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
var StartOfContentPartBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(StartOfContentPartBNFRule, Rule);
    function StartOfContentPartBNFRule() {
        _class_call_check(this, StartOfContentPartBNFRule);
        return _call_super(this, StartOfContentPartBNFRule, arguments);
    }
    _create_class(StartOfContentPartBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var startOfContentPartDefinition = _startOfContentPart.default.fromNothing(), name = _ruleNames.START_OF_CONTENT_PART_RULE_NAME, opacity = null, definitions = [
                    startOfContentPartDefinition
                ], startOfContentPartRule = new StartOfContentPartBNFRule(name, opacity, definitions);
                return startOfContentPartRule;
            }
        }
    ]);
    return StartOfContentPartBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9zdGFydE9mQ29udGVudFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgU3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9zdGFydE9mQ29udGVudFBhcnRcIjtcblxuaW1wb3J0IHsgU1RBUlRfT0ZfQ09OVEVOVF9QQVJUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvbiA9IFN0YXJ0T2ZDb250ZW50UGFydERlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gU1RBUlRfT0ZfQ09OVEVOVF9QQVJUX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZSA9IG5ldyBTdGFydE9mQ29udGVudFBhcnRCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBzdGFydE9mQ29udGVudFBhcnRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZSIsImZyb21Ob3RoaW5nIiwic3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvbiIsIlN0YXJ0T2ZDb250ZW50UGFydERlZmluaXRpb24iLCJuYW1lIiwiU1RBUlRfT0ZfQ09OVEVOVF9QQVJUX1JVTEVfTkFNRSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsInN0YXJ0T2ZDb250ZW50UGFydFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMSjt5RUFDd0I7eUJBRU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQywrQkFBK0JDLDJCQUE0QixDQUFDRixXQUFXLElBQ3ZFRyxPQUFPQywwQ0FBK0IsRUFDdENDLFVBQVUsTUFDVkMsY0FBYztvQkFDWkw7aUJBQ0QsRUFDRE0seUJBQXlCLElBUmRSLDBCQVE0Q0ksTUFBTUUsU0FBU0M7Z0JBRTVFLE9BQU9DO1lBQ1Q7OztXQVhtQlI7RUFBa0NTLGFBQUkifQ==