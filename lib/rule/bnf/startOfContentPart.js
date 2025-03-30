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
var _startOfContentPart = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/startOfContentPart"));
var _startOfContentPart1 = /*#__PURE__*/ _interop_require_default(require("../../definition/startOfContentPart"));
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
                var startOfContentPartDefinition = _startOfContentPart1.default.fromNothing(), name = _ruleNames.startOfContentPartRuleName, opacity = null, definitions = [
                    startOfContentPartDefinition
                ], NonTerminalNode = _startOfContentPart.default, startOfContentPartRule = new StartOfContentPartBNFRule(name, opacity, definitions, NonTerminalNode);
                return startOfContentPartRule;
            }
        }
    ]);
    return StartOfContentPartBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9zdGFydE9mQ29udGVudFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ibmYvc3RhcnRPZkNvbnRlbnRQYXJ0XCI7XG5pbXBvcnQgU3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9zdGFydE9mQ29udGVudFBhcnRcIjtcblxuaW1wb3J0IHsgc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0T2ZDb250ZW50UGFydEJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0YXJ0T2ZDb250ZW50UGFydERlZmluaXRpb24gPSBTdGFydE9mQ29udGVudFBhcnREZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbmFtZSA9IHN0YXJ0T2ZDb250ZW50UGFydFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBzdGFydE9mQ29udGVudFBhcnREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBTdGFydE9mQ29udGVudFBhcnRCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZSA9IG5ldyBTdGFydE9mQ29udGVudFBhcnRCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb250ZW50UGFydFJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdGFydE9mQ29udGVudFBhcnRCTkZSdWxlIiwiZnJvbU5vdGhpbmciLCJzdGFydE9mQ29udGVudFBhcnREZWZpbml0aW9uIiwiU3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvbiIsIm5hbWUiLCJzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIlN0YXJ0T2ZDb250ZW50UGFydEJORk5vZGUiLCJzdGFydE9mQ29udGVudFBhcnRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7eUVBQ3FCOzBFQUNHO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLCtCQUErQkMsNEJBQTRCLENBQUNGLFdBQVcsSUFDdkVHLE9BQU9DLHFDQUEwQixFQUNqQ0MsVUFBVSxNQUNWQyxjQUFjO29CQUNaTDtpQkFDRCxFQUNETSxrQkFBa0JDLDJCQUF5QixFQUMzQ0MseUJBQXlCLElBVGRWLDBCQVM0Q0ksTUFBTUUsU0FBU0MsYUFBYUM7Z0JBRXpGLE9BQU9FO1lBQ1Q7OztXQVptQlY7RUFBa0NXLGFBQUkifQ==