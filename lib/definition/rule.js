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
                var separatorTerminalSymbolContent = separator, terminatorTerminalSymbolContent = terminator; ///
                ruleName = _ruleNames.OPACITY_MODIFIER_RULE_NAME;
                var opacityModifierRuleNamePart = _ruleName.default.fromRuleName(ruleName);
                ruleName = _ruleNames.NAME_RULE_NAME;
                var nameRuleNamePart = _ruleName.default.fromRuleName(ruleName), optionalOpacityRuleNamePartPart = _optionalPart.default.fromPart(opacityModifierRuleNamePart), separatorTerminalSymbolPart = _terminalSymbol.default.fromContent(separatorTerminalSymbolContent);
                ruleName = _ruleNames.DEFINITIONS_RULE_NAME;
                var definitionsRuleNamePart = _ruleName.default.fromRuleName(ruleName), terminatorTerminalSymbolPart = _terminalSymbol.default.fromContent(terminatorTerminalSymbolContent), parts = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IE5BTUVfUlVMRV9OQU1FLCBERUZJTklUSU9OU19SVUxFX05BTUUsIE9QQUNJVFlfTU9ESUZJRVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHNlcGFyYXRvciwgdGVybWluYXRvciB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBsZXQgcnVsZU5hbWU7XG5cbiAgICBjb25zdCBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBzZXBhcmF0b3IsIC8vL1xuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB0ZXJtaW5hdG9yOyAvLy9cblxuICAgIHJ1bGVOYW1lID0gT1BBQ0lUWV9NT0RJRklFUl9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJ1bGVOYW1lID0gTkFNRV9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBuYW1lUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgb3B0aW9uYWxPcGFjaXR5UnVsZU5hbWVQYXJ0UGFydCA9IE9wdGlvbmFsUGFydFBhcnQuZnJvbVBhcnQob3BhY2l0eU1vZGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbUNvbnRlbnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50KTtcblxuICAgIHJ1bGVOYW1lID0gREVGSU5JVElPTlNfUlVMRV9OQU1FO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gVGVybWluYWxTeW1ib2xQYXJ0LmZyb21Db250ZW50KHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9wdGlvbmFsT3BhY2l0eVJ1bGVOYW1lUGFydFBhcnQsXG4gICAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBkZWZpbml0aW9uc1J1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIHJ1bGVEZWZpbml0aW9uID0gbmV3IFJ1bGVEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBydWxlRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVEZWZpbml0aW9uIiwic2VwYXJhdG9yIiwic3BlY2lhbFN5bWJvbHMiLCJ0ZXJtaW5hdG9yIiwiZnJvbU5vdGhpbmciLCJydWxlTmFtZSIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJPUEFDSVRZX01PRElGSUVSX1JVTEVfTkFNRSIsIm9wYWNpdHlNb2RpZmllclJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsImZyb21SdWxlTmFtZSIsIk5BTUVfUlVMRV9OQU1FIiwibmFtZVJ1bGVOYW1lUGFydCIsIm9wdGlvbmFsT3BhY2l0eVJ1bGVOYW1lUGFydFBhcnQiLCJPcHRpb25hbFBhcnRQYXJ0IiwiZnJvbVBhcnQiLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJmcm9tQ29udGVudCIsIkRFRklOSVRJT05TX1JVTEVfTkFNRSIsImRlZmluaXRpb25zUnVsZU5hbWVQYXJ0IiwidGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwicHJlY2VkZW5jZSIsInJ1bGVEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkJBWFU7aUVBRVI7K0RBQ0U7bUVBQ0k7cUVBQ0U7eUJBRW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLElBQVFDLFlBQTBCQywyQkFBYyxDQUF4Q0QsV0FBV0UsYUFBZUQsMkJBQWMsQ0FBN0JDO0FBRUosSUFBQSxBQUFNSCwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaSSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFJQztnQkFFSixJQUFNQyxpQ0FBaUNMLFdBQ2pDTSxrQ0FBa0NKLFlBQVksR0FBRztnQkFFdkRFLFdBQVdHLHFDQUEwQjtnQkFFckMsSUFBTUMsOEJBQThCQyxpQkFBWSxDQUFDQyxZQUFZLENBQUNOO2dCQUU5REEsV0FBV08seUJBQWM7Z0JBRXpCLElBQU1DLG1CQUFtQkgsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDTixXQUM3Q1Msa0NBQWtDQyxxQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDUCw4QkFDNURRLDhCQUE4QkMsdUJBQWtCLENBQUNDLFdBQVcsQ0FBQ2I7Z0JBRW5FRCxXQUFXZSxnQ0FBcUI7Z0JBRWhDLElBQU1DLDBCQUEwQlgsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDTixXQUNwRGlCLCtCQUErQkosdUJBQWtCLENBQUNDLFdBQVcsQ0FBQ1osa0NBQzlEZ0IsUUFBUTtvQkFDTlY7b0JBQ0FDO29CQUNBRztvQkFDQUk7b0JBQ0FDO2lCQUNELEVBQ0RFLGFBQWEsTUFDYkMsaUJBQWlCLElBN0JOekIsZUE2QnlCdUIsT0FBT0M7Z0JBRWpELE9BQU9DO1lBQ1Q7OztXQWhDbUJ6QjtFQUF1QjBCLG1CQUFVIn0=