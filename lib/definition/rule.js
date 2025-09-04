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
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
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
var separator = _occamlexers.specialSymbols.separator, terminator = _occamlexers.specialSymbols.terminator;
var RuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RuleDefinition, Definition);
    function RuleDefinition() {
        _class_call_check(this, RuleDefinition);
        return _call_super(this, RuleDefinition, arguments);
    }
    _create_class(RuleDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var ruleName;
                var separatorStringLiteralContent = separator, terminatorStringLiteralContent = terminator; ///
                ruleName = _ruleNames.OPACITY_MODIFIER_RULE_NAME;
                var opacityModifierRuleNamePart = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.NAME_RULE_NAME;
                var nameRuleNamePart = _ruleName.default.fromRuleName(ruleName), optionalOpacityRuleNamePartPart = _optionalPart.default.fromPart(opacityModifierRuleNamePart), separatorStringLiteralPart = _stringLiteral.default.fromContent(separatorStringLiteralContent);
                ruleName = _ruleNames.DEFINITIONS_RULE_NAME;
                var definitionsRuleNamePart = _ruleName.default.fromRuleName(ruleName), terminatorStringLiteralPart = _stringLiteral.default.fromContent(terminatorStringLiteralContent), parts = [
                    nameRuleNamePart,
                    optionalOpacityRuleNamePartPart,
                    separatorStringLiteralPart,
                    definitionsRuleNamePart,
                    terminatorStringLiteralPart
                ], precedence = null, ruleDefinition = new RuleDefinition(parts, precedence);
                return ruleDefinition;
            }
        }
    ]);
    return RuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvc3RyaW5nTGl0ZXJhbFwiO1xuXG5pbXBvcnQgeyBOQU1FX1JVTEVfTkFNRSwgREVGSU5JVElPTlNfUlVMRV9OQU1FLCBPUEFDSVRZX01PRElGSUVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBzZXBhcmF0b3IsIHRlcm1pbmF0b3IgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHJ1bGVOYW1lO1xuXG4gICAgY29uc3Qgc2VwYXJhdG9yU3RyaW5nTGl0ZXJhbENvbnRlbnQgPSBzZXBhcmF0b3IsIC8vL1xuICAgICAgICAgIHRlcm1pbmF0b3JTdHJpbmdMaXRlcmFsQ29udGVudCA9IHRlcm1pbmF0b3I7IC8vL1xuXG4gICAgcnVsZU5hbWUgPSBPUEFDSVRZX01PRElGSUVSX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IG9wYWNpdHlNb2RpZmllclJ1bGVOYW1lUGFydCA9IFJ1bGVOYW1lUGFydC5mcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcnVsZU5hbWUgPSBOQU1FX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IG5hbWVSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBvcHRpb25hbE9wYWNpdHlSdWxlTmFtZVBhcnRQYXJ0ID0gT3B0aW9uYWxQYXJ0UGFydC5mcm9tUGFydChvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHNlcGFyYXRvclN0cmluZ0xpdGVyYWxQYXJ0ID0gU3RyaW5nTGl0ZXJhbFBhcnQuZnJvbUNvbnRlbnQoc2VwYXJhdG9yU3RyaW5nTGl0ZXJhbENvbnRlbnQpO1xuXG4gICAgcnVsZU5hbWUgPSBERUZJTklUSU9OU19SVUxFX05BTUU7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc1J1bGVOYW1lUGFydCA9IFJ1bGVOYW1lUGFydC5mcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmF0b3JTdHJpbmdMaXRlcmFsUGFydCA9IFN0cmluZ0xpdGVyYWxQYXJ0LmZyb21Db250ZW50KHRlcm1pbmF0b3JTdHJpbmdMaXRlcmFsQ29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBuYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxPcGFjaXR5UnVsZU5hbWVQYXJ0UGFydCxcbiAgICAgICAgICAgIHNlcGFyYXRvclN0cmluZ0xpdGVyYWxQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hdG9yU3RyaW5nTGl0ZXJhbFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIHJ1bGVEZWZpbml0aW9uID0gbmV3IFJ1bGVEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBydWxlRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVEZWZpbml0aW9uIiwic2VwYXJhdG9yIiwic3BlY2lhbFN5bWJvbHMiLCJ0ZXJtaW5hdG9yIiwiZnJvbU5vdGhpbmciLCJydWxlTmFtZSIsInNlcGFyYXRvclN0cmluZ0xpdGVyYWxDb250ZW50IiwidGVybWluYXRvclN0cmluZ0xpdGVyYWxDb250ZW50IiwiT1BBQ0lUWV9NT0RJRklFUl9SVUxFX05BTUUiLCJvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJmcm9tUnVsZU5hbWUiLCJOQU1FX1JVTEVfTkFNRSIsIm5hbWVSdWxlTmFtZVBhcnQiLCJvcHRpb25hbE9wYWNpdHlSdWxlTmFtZVBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsImZyb21QYXJ0Iiwic2VwYXJhdG9yU3RyaW5nTGl0ZXJhbFBhcnQiLCJTdHJpbmdMaXRlcmFsUGFydCIsImZyb21Db250ZW50IiwiREVGSU5JVElPTlNfUlVMRV9OQU1FIiwiZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQiLCJ0ZXJtaW5hdG9yU3RyaW5nTGl0ZXJhbFBhcnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJydWxlRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJCQVhVO2lFQUVSOytEQUNFO21FQUNJO29FQUNDO3lCQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixJQUFRQyxZQUEwQkMsMkJBQWMsQ0FBeENELFdBQVdFLGFBQWVELDJCQUFjLENBQTdCQztBQUVKLElBQUEsQUFBTUgsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkksS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBSUM7Z0JBRUosSUFBTUMsZ0NBQWdDTCxXQUNoQ00saUNBQWlDSixZQUFZLEdBQUc7Z0JBRXRERSxXQUFXRyxxQ0FBMEI7Z0JBRXJDLElBQU1DLDhCQUE4QkMsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDTjtnQkFFOURBLFdBQVdPLHlCQUFjO2dCQUV6QixJQUFNQyxtQkFBbUJILGlCQUFZLENBQUNDLFlBQVksQ0FBQ04sV0FDN0NTLGtDQUFrQ0MscUJBQWdCLENBQUNDLFFBQVEsQ0FBQ1AsOEJBQzVEUSw2QkFBNkJDLHNCQUFpQixDQUFDQyxXQUFXLENBQUNiO2dCQUVqRUQsV0FBV2UsZ0NBQXFCO2dCQUVoQyxJQUFNQywwQkFBMEJYLGlCQUFZLENBQUNDLFlBQVksQ0FBQ04sV0FDcERpQiw4QkFBOEJKLHNCQUFpQixDQUFDQyxXQUFXLENBQUNaLGlDQUM1RGdCLFFBQVE7b0JBQ05WO29CQUNBQztvQkFDQUc7b0JBQ0FJO29CQUNBQztpQkFDRCxFQUNERSxhQUFhLE1BQ2JDLGlCQUFpQixJQTdCTnpCLGVBNkJ5QnVCLE9BQU9DO2dCQUVqRCxPQUFPQztZQUNUOzs7V0FoQ21CekI7RUFBdUIwQixtQkFBVSJ9