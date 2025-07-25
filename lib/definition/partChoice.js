"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartChoiceDefinition;
    }
});
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/ruleName"));
var _optionalPart = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/optionalPart"));
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
var PartChoiceDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(PartChoiceDefinition, Definition);
    function PartChoiceDefinition() {
        _class_call_check(this, PartChoiceDefinition);
        return _call_super(this, PartChoiceDefinition, arguments);
    }
    _create_class(PartChoiceDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var ruleName;
                ruleName = _ruleNames.PART_RULE_NAME;
                var partRuleNamePart = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.PRECEDENCE_RULE_NAME;
                var precedenceRuleNamePart = _ruleName.default.fromRuleName(ruleName), optionalPrecedenceRuleNamePartPart = _optionalPart.default.fromPart(precedenceRuleNamePart), parts = [
                    partRuleNamePart,
                    optionalPrecedenceRuleNamePartPart
                ], precedence = null, partChoiceDefinition = new PartChoiceDefinition(parts, precedence);
                return partChoiceDefinition;
            }
        }
    ]);
    return PartChoiceDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRDaG9pY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgT3B0aW9uYWxQYXJ0UGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnRcIjtcblxuaW1wb3J0IHsgUEFSVF9SVUxFX05BTUUsIFBSRUNFREVOQ0VfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Q2hvaWNlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHJ1bGVOYW1lO1xuXG4gICAgcnVsZU5hbWUgPSBQQVJUX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IHBhcnRSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJ1bGVOYW1lID0gUFJFQ0VERU5DRV9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgb3B0aW9uYWxQcmVjZWRlbmNlUnVsZU5hbWVQYXJ0UGFydCA9IE9wdGlvbmFsUGFydFBhcnQuZnJvbVBhcnQocHJlY2VkZW5jZVJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxQcmVjZWRlbmNlUnVsZU5hbWVQYXJ0UGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgcGFydENob2ljZURlZmluaXRpb24gPSBuZXcgUGFydENob2ljZURlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHBhcnRDaG9pY2VEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFydENob2ljZURlZmluaXRpb24iLCJmcm9tTm90aGluZyIsInJ1bGVOYW1lIiwiUEFSVF9SVUxFX05BTUUiLCJwYXJ0UnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiZnJvbVJ1bGVOYW1lIiwiUFJFQ0VERU5DRV9SVUxFX05BTUUiLCJwcmVjZWRlbmNlUnVsZU5hbWVQYXJ0Iiwib3B0aW9uYWxQcmVjZWRlbmNlUnVsZU5hbWVQYXJ0UGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJmcm9tUGFydCIsInBhcnRzIiwicHJlY2VkZW5jZSIsInBhcnRDaG9pY2VEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7aUVBTkU7K0RBQ0U7bUVBQ0k7eUJBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBSUM7Z0JBRUpBLFdBQVdDLHlCQUFjO2dCQUV6QixJQUFNQyxtQkFBbUJDLGlCQUFZLENBQUNDLFlBQVksQ0FBQ0o7Z0JBRW5EQSxXQUFXSywrQkFBb0I7Z0JBRS9CLElBQU1DLHlCQUF5QkgsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDSixXQUNuRE8scUNBQXFDQyxxQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDSCx5QkFDL0RJLFFBQVE7b0JBQ05SO29CQUNBSztpQkFDRCxFQUNESSxhQUFhLE1BQ2JDLHVCQUF1QixJQWpCWmQscUJBaUJxQ1ksT0FBT0M7Z0JBRTdELE9BQU9DO1lBQ1Q7OztXQXBCbUJkO0VBQTZCZSxtQkFBVSJ9