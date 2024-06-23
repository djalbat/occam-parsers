"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/ruleName"));
var _optionalPart = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/optionalPart"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
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
var separator = _occamlexers.specialSymbols.separator, terminator = _occamlexers.specialSymbols.terminator;
var RuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RuleDefinition, Definition);
    var _super = _create_super(RuleDefinition);
    function RuleDefinition() {
        _class_call_check(this, RuleDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(RuleDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var separatorTerminalSymbolContent = separator, terminatorTerminalSymbolContent = terminator, opacityModifierRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.opacityModifierRuleName), nameRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.nameRuleName), optionalOpacityRuleNamePartPart = _optionalPart.default.fromPart(opacityModifierRuleNamePart), separatorTerminalSymbolPart = _terminalSymbol.default.fromContent(separatorTerminalSymbolContent), definitionsRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.definitionsRuleName), terminatorTerminalSymbolPart = _terminalSymbol.default.fromContent(terminatorTerminalSymbolContent), parts = [
                    nameRuleNamePart,
                    optionalOpacityRuleNamePartPart,
                    separatorTerminalSymbolPart,
                    definitionsRuleNamePart,
                    terminatorTerminalSymbolPart
                ], precedence = null, ruleDefinition = new RuleDefinition(parts, precedence);
                return ruleDefinition;
            }
        }
    ]);
    return RuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IG5hbWVSdWxlTmFtZSwgZGVmaW5pdGlvbnNSdWxlTmFtZSwgb3BhY2l0eU1vZGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgc2VwYXJhdG9yLCB0ZXJtaW5hdG9yIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHNlcGFyYXRvcixcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gdGVybWluYXRvcixcbiAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKG9wYWNpdHlNb2RpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShuYW1lUnVsZU5hbWUpLFxuICAgICAgICAgIG9wdGlvbmFsT3BhY2l0eVJ1bGVOYW1lUGFydFBhcnQgPSBPcHRpb25hbFBhcnRQYXJ0LmZyb21QYXJ0KG9wYWNpdHlNb2RpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gVGVybWluYWxTeW1ib2xQYXJ0LmZyb21Db250ZW50KHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKGRlZmluaXRpb25zUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbUNvbnRlbnQodGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBuYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxPcGFjaXR5UnVsZU5hbWVQYXJ0UGFydCxcbiAgICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgcnVsZURlZmluaXRpb24gPSBuZXcgUnVsZURlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHJ1bGVEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZURlZmluaXRpb24iLCJzZXBhcmF0b3IiLCJzcGVjaWFsU3ltYm9scyIsInRlcm1pbmF0b3IiLCJmcm9tTm90aGluZyIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJmcm9tUnVsZU5hbWUiLCJvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZSIsIm5hbWVSdWxlTmFtZVBhcnQiLCJuYW1lUnVsZU5hbWUiLCJvcHRpb25hbE9wYWNpdHlSdWxlTmFtZVBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsImZyb21QYXJ0Iiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiZnJvbUNvbnRlbnQiLCJkZWZpbml0aW9uc1J1bGVOYW1lUGFydCIsImRlZmluaXRpb25zUnVsZU5hbWUiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJwcmVjZWRlbmNlIiwicnVsZURlZmluaXRpb24iLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzsyQkFYVTtpRUFFUjsrREFDRTttRUFDSTtxRUFDRTt5QkFFNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBUUMsWUFBMEJDLDJCQUFjLENBQXhDRCxXQUFXRSxhQUFlRCwyQkFBYyxDQUE3QkM7QUFFSixJQUFBLEFBQU1ILCtCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkksS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsaUNBQWlDSixXQUNqQ0ssa0NBQWtDSCxZQUNsQ0ksOEJBQThCQyxpQkFBWSxDQUFDQyxZQUFZLENBQUNDLGtDQUF1QixHQUMvRUMsbUJBQW1CSCxpQkFBWSxDQUFDQyxZQUFZLENBQUNHLHVCQUFZLEdBQ3pEQyxrQ0FBa0NDLHFCQUFnQixDQUFDQyxRQUFRLENBQUNSLDhCQUM1RFMsOEJBQThCQyx1QkFBa0IsQ0FBQ0MsV0FBVyxDQUFDYixpQ0FDN0RjLDBCQUEwQlgsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDVyw4QkFBbUIsR0FDdkVDLCtCQUErQkosdUJBQWtCLENBQUNDLFdBQVcsQ0FBQ1osa0NBQzlEZ0IsUUFBUTtvQkFDTlg7b0JBQ0FFO29CQUNBRztvQkFDQUc7b0JBQ0FFO2lCQUNELEVBQ0RFLGFBQWEsTUFDYkMsaUJBQWlCLElBbEJOeEIsZUFrQnlCc0IsT0FBT0M7Z0JBRWpELE9BQU9DO1lBQ1Q7OztXQXJCbUJ4QjtFQUF1QnlCLG1CQUFVIn0=