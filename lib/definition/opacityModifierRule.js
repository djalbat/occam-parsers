"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OpacityModifierRuleDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _partChoice = /*#__PURE__*/ _interop_require_default(require("../partChoice"));
var _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../part/terminal/noWhitespace"));
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/choiceOfParts"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
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
var opaque = _occamlexers.specialSymbols.opaque, semiOpaque = _occamlexers.specialSymbols.semiOpaque;
var OpacityModifierRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(OpacityModifierRuleDefinition, Definition);
    function OpacityModifierRuleDefinition() {
        _class_call_check(this, OpacityModifierRuleDefinition);
        return _call_super(this, OpacityModifierRuleDefinition, arguments);
    }
    _create_class(OpacityModifierRuleDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content;
                content = opaque; ///
                var opaqueTerminalSymbolPart = _terminalSymbol.default.fromContent(content);
                content = semiOpaque; ///
                var semiOpaqueTerminalSymbolPart = _terminalSymbol.default.fromContent(content);
                var opaqueTerminalSymbolPartChoice = _partChoice.default.fromPart(opaqueTerminalSymbolPart), semiOpaqueTerminalSymbolPartChoice = _partChoice.default.fromPart(semiOpaqueTerminalSymbolPart), partChoices = [
                    opaqueTerminalSymbolPartChoice,
                    semiOpaqueTerminalSymbolPartChoice
                ], choiceOfOpaqueTerminalSymbolAndSemiOpaqueTerminalSymbolPartsPart = _choiceOfParts.default.fromPartChoices(partChoices), noWhitespacePart = _noWhitespace.default.fromNothing(), parts = [
                    noWhitespacePart,
                    choiceOfOpaqueTerminalSymbolAndSemiOpaqueTerminalSymbolPartsPart
                ], precedence = null, opacityModifierRuleDefinition = new OpacityModifierRuleDefinition(parts, precedence);
                return opacityModifierRuleDefinition;
            }
        }
    ]);
    return OpacityModifierRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL29wYWNpdHlNb2RpZmllclJ1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFBhcnRDaG9pY2UgZnJvbSBcIi4uL3BhcnRDaG9pY2VcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcblxuY29uc3QgeyBvcGFxdWUsIHNlbWlPcGFxdWUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb250ZW50ID0gb3BhcXVlOyAvLy9cblxuICAgIGNvbnN0IG9wYXF1ZVRlcm1pbmFsU3ltYm9sUGFydCA9IFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIGNvbnRlbnQgPSBzZW1pT3BhcXVlOyAvLy9cblxuICAgIGNvbnN0IHNlbWlPcGFxdWVUZXJtaW5hbFN5bWJvbFBhcnQgPSBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICBjb25zdCBvcGFxdWVUZXJtaW5hbFN5bWJvbFBhcnRDaG9pY2UgPSBQYXJ0Q2hvaWNlLmZyb21QYXJ0KG9wYXF1ZVRlcm1pbmFsU3ltYm9sUGFydCksXG4gICAgICAgICAgc2VtaU9wYXF1ZVRlcm1pbmFsU3ltYm9sUGFydENob2ljZSA9IFBhcnRDaG9pY2UuZnJvbVBhcnQoc2VtaU9wYXF1ZVRlcm1pbmFsU3ltYm9sUGFydCksXG4gICAgICAgICAgcGFydENob2ljZXMgPSBbXG4gICAgICAgICAgICBvcGFxdWVUZXJtaW5hbFN5bWJvbFBhcnRDaG9pY2UsXG4gICAgICAgICAgICBzZW1pT3BhcXVlVGVybWluYWxTeW1ib2xQYXJ0Q2hvaWNlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjaG9pY2VPZk9wYXF1ZVRlcm1pbmFsU3ltYm9sQW5kU2VtaU9wYXF1ZVRlcm1pbmFsU3ltYm9sUGFydHNQYXJ0ID0gQ2hvaWNlT2ZQYXJ0c1BhcnQuZnJvbVBhcnRDaG9pY2VzKHBhcnRDaG9pY2VzKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0ID0gTm9XaGl0ZXNwYWNlUGFydC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCxcbiAgICAgICAgICAgIGNob2ljZU9mT3BhcXVlVGVybWluYWxTeW1ib2xBbmRTZW1pT3BhcXVlVGVybWluYWxTeW1ib2xQYXJ0c1BhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIG9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gbmV3IE9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBvcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwib3BhcXVlIiwic3BlY2lhbFN5bWJvbHMiLCJzZW1pT3BhcXVlIiwiZnJvbU5vdGhpbmciLCJjb250ZW50Iiwib3BhcXVlVGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiZnJvbUNvbnRlbnQiLCJzZW1pT3BhcXVlVGVybWluYWxTeW1ib2xQYXJ0Iiwib3BhcXVlVGVybWluYWxTeW1ib2xQYXJ0Q2hvaWNlIiwiUGFydENob2ljZSIsImZyb21QYXJ0Iiwic2VtaU9wYXF1ZVRlcm1pbmFsU3ltYm9sUGFydENob2ljZSIsInBhcnRDaG9pY2VzIiwiY2hvaWNlT2ZPcGFxdWVUZXJtaW5hbFN5bWJvbEFuZFNlbWlPcGFxdWVUZXJtaW5hbFN5bWJvbFBhcnRzUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0IiwiZnJvbVBhcnRDaG9pY2VzIiwibm9XaGl0ZXNwYWNlUGFydCIsIk5vV2hpdGVzcGFjZVBhcnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJvcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJCQVZVO2lFQUVSO2lFQUNBO21FQUNNO29FQUNDO3FFQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQVFDLFNBQXVCQywyQkFBYyxDQUFyQ0QsUUFBUUUsYUFBZUQsMkJBQWMsQ0FBN0JDO0FBRUQsSUFBQSxBQUFNSCw4Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaSSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFJQztnQkFFSkEsVUFBVUosUUFBUSxHQUFHO2dCQUVyQixJQUFNSywyQkFBMkJDLHVCQUFrQixDQUFDQyxXQUFXLENBQUNIO2dCQUVoRUEsVUFBVUYsWUFBWSxHQUFHO2dCQUV6QixJQUFNTSwrQkFBK0JGLHVCQUFrQixDQUFDQyxXQUFXLENBQUNIO2dCQUVwRSxJQUFNSyxpQ0FBaUNDLG1CQUFVLENBQUNDLFFBQVEsQ0FBQ04sMkJBQ3JETyxxQ0FBcUNGLG1CQUFVLENBQUNDLFFBQVEsQ0FBQ0gsK0JBQ3pESyxjQUFjO29CQUNaSjtvQkFDQUc7aUJBQ0QsRUFDREUsbUVBQW1FQyxzQkFBaUIsQ0FBQ0MsZUFBZSxDQUFDSCxjQUNyR0ksbUJBQW1CQyxxQkFBZ0IsQ0FBQ2YsV0FBVyxJQUMvQ2dCLFFBQVE7b0JBQ05GO29CQUNBSDtpQkFDRCxFQUNETSxhQUFhLE1BQ2JDLGdDQUFnQyxJQXpCckJ0Qiw4QkF5QnVEb0IsT0FBT0M7Z0JBRS9FLE9BQU9DO1lBQ1Q7OztXQTVCbUJ0QjtFQUFzQ3VCLG1CQUFVIn0=