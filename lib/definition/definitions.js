"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionsDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/ruleName"));
var _optionalPart = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/optionalPart"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
var _zeroOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/zeroOrMoreParts"));
var _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/sequenceOfParts"));
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
var verticalBar = _occamlexers.specialSymbols.verticalBar;
var DefinitionsDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DefinitionsDefinition, Definition);
    var _super = _create_super(DefinitionsDefinition);
    function DefinitionsDefinition() {
        _class_call_check(this, DefinitionsDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(DefinitionsDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var verticalBarTerminalSymbolContent = verticalBar, definitionRuleNamePart = new _ruleName.default(_ruleNames.definitionRuleName), precedenceRuleNamePart = new _ruleName.default(_ruleNames.precedenceRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), optionalPrecedenceRuleNamePartPart = new _optionalPart.default(precedenceRuleNamePart), verticalBarTerminalSymbolThenDefinitionRuleNameParts = [
                    verticalBarTerminalSymbolPart,
                    definitionRuleNamePart,
                    optionalPrecedenceRuleNamePartPart
                ], sequenceOfPartsPart = new _sequenceOfParts.default(verticalBarTerminalSymbolThenDefinitionRuleNameParts), zeroOrMoreSequenceOfPartsPart = new _zeroOrMoreParts.default(sequenceOfPartsPart), parts = [
                    definitionRuleNamePart,
                    optionalPrecedenceRuleNamePartPart,
                    zeroOrMoreSequenceOfPartsPart
                ], precedence = null, definitionsDefinition = new DefinitionsDefinition(parts, precedence);
                return definitionsDefinition;
            }
        }
    ]);
    return DefinitionsDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RlZmluaXRpb25zLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBPcHRpb25hbFBhcnRQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydFwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzXCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgZGVmaW5pdGlvblJ1bGVOYW1lLCBwcmVjZWRlbmNlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgdmVydGljYWxCYXIgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uc0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50ID0gdmVydGljYWxCYXIsXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQoZGVmaW5pdGlvblJ1bGVOYW1lKSxcbiAgICAgICAgICBwcmVjZWRlbmNlUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwcmVjZWRlbmNlUnVsZU5hbWUpLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgb3B0aW9uYWxQcmVjZWRlbmNlUnVsZU5hbWVQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHByZWNlZGVuY2VSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuRGVmaW5pdGlvblJ1bGVOYW1lUGFydHMgPSBbXG4gICAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25SdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBvcHRpb25hbFByZWNlZGVuY2VSdWxlTmFtZVBhcnRQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5EZWZpbml0aW9uUnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgemVyb09yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChzZXF1ZW5jZU9mUGFydHNQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25SdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBvcHRpb25hbFByZWNlZGVuY2VSdWxlTmFtZVBhcnRQYXJ0LFxuICAgICAgICAgICAgemVyb09yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uc0RlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZWZpbml0aW9uc0RlZmluaXRpb24iLCJ2ZXJ0aWNhbEJhciIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCIsImRlZmluaXRpb25SdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJkZWZpbml0aW9uUnVsZU5hbWUiLCJwcmVjZWRlbmNlUnVsZU5hbWVQYXJ0IiwicHJlY2VkZW5jZVJ1bGVOYW1lIiwidmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJvcHRpb25hbFByZWNlZGVuY2VSdWxlTmFtZVBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuRGVmaW5pdGlvblJ1bGVOYW1lUGFydHMiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsInplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwicHJlY2VkZW5jZSIsImRlZmluaXRpb25zRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7OzJCQWJVO2lFQUVSOytEQUNFO21FQUNJO3FFQUNFO3NFQUNDO3NFQUNBO3lCQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNLEFBQUVDLGNBQWdCQyw0QkFBaEJEO0FBRU8sSUFBQSxBQUFNRCxzQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxtQ0FBbUNILGFBQ25DSSx5QkFBeUIsSUFBSUMsa0JBQWFDLGdDQUMxQ0MseUJBQXlCLElBQUlGLGtCQUFhRyxnQ0FDMUNDLGdDQUFnQyxJQUFJQyx3QkFBbUJQLG1DQUN2RFEscUNBQXFDLElBQUlDLHNCQUFpQkwseUJBQzFETSx1REFBdUQ7b0JBQ3JESjtvQkFDQUw7b0JBQ0FPO2lCQUNELEVBQ0RHLHNCQUFzQixJQUFJQyx5QkFBb0JGLHVEQUM5Q0csZ0NBQWdDLElBQUlDLHlCQUFvQkgsc0JBQ3hESSxRQUFRO29CQUNOZDtvQkFDQU87b0JBQ0FLO2lCQUNELEVBQ0RHLGFBQWEsTUFDYkMsd0JBQXdCLElBcEJickIsc0JBb0J1Q21CLE9BQU9DO2dCQUUvRCxPQUFPQztZQUNUOzs7V0F2Qm1CckI7RUFBOEJzQiJ9