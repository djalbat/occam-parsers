"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PrecedenceDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _optionalPart = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/optionalPart"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../part/terminal/significantTokenType"));
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
var numberType = _occamlexers.types.numberType, openBracket = _occamlexers.specialSymbols.openBracket, closeBracket = _occamlexers.specialSymbols.closeBracket;
var PrecedenceDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(PrecedenceDefinition, Definition);
    function PrecedenceDefinition() {
        _class_call_check(this, PrecedenceDefinition);
        return _call_super(this, PrecedenceDefinition, arguments);
    }
    _create_class(PrecedenceDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var significantTokenType = numberType, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, openBracketTerminalSymbolPart = _terminalSymbol.default.fromContent(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = _terminalSymbol.default.fromContent(closeBracketTerminalSymbolContent), numberSignificantTokenTypePart = _significantTokenType.default.fromSignificantTokenType(significantTokenType), optionalNumberSignificantTokenTypePartPart = _optionalPart.default.fromPart(numberSignificantTokenTypePart), parts = [
                    openBracketTerminalSymbolPart,
                    optionalNumberSignificantTokenTypePartPart,
                    closeBracketTerminalSymbolPart
                ], precedence = null, precedenceDefinition = new PrecedenceDefinition(parts, precedence);
                return precedenceDefinition;
            }
        }
    ]);
    return PrecedenceDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3ByZWNlZGVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHR5cGVzLCBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBPcHRpb25hbFBhcnRQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydFwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5jb25zdCB7IG51bWJlclR5cGUgfSA9IHR5cGVzLFxuICAgICAgeyBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlY2VkZW5jZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gbnVtYmVyVHlwZSwgIC8vL1xuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gb3BlbkJyYWNrZXQsIC8vL1xuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGNsb3NlQnJhY2tldCwgLy8vXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbUNvbnRlbnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tQ29udGVudChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG51bWJlclNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydC5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGUoc2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG9wdGlvbmFsTnVtYmVyU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UGFydCA9IE9wdGlvbmFsUGFydFBhcnQuZnJvbVBhcnQobnVtYmVyU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxOdW1iZXJTaWduaWZpY2FudFRva2VuVHlwZVBhcnRQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBwcmVjZWRlbmNlRGVmaW5pdGlvbiA9IG5ldyBQcmVjZWRlbmNlRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcHJlY2VkZW5jZURlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmVjZWRlbmNlRGVmaW5pdGlvbiIsIm51bWJlclR5cGUiLCJ0eXBlcyIsIm9wZW5CcmFja2V0Iiwic3BlY2lhbFN5bWJvbHMiLCJjbG9zZUJyYWNrZXQiLCJmcm9tTm90aGluZyIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsImZyb21Db250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwibnVtYmVyU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlIiwib3B0aW9uYWxOdW1iZXJTaWduaWZpY2FudFRva2VuVHlwZVBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsImZyb21QYXJ0IiwicGFydHMiLCJwcmVjZWRlbmNlIiwicHJlY2VkZW5jZURlZmluaXRpb24iLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyQkFWaUI7aUVBRWY7bUVBQ007cUVBQ0U7MkVBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQyxhQUFlQyxrQkFBSyxDQUFwQkQsWUFDQUUsY0FBOEJDLDJCQUFjLENBQTVDRCxhQUFhRSxlQUFpQkQsMkJBQWMsQ0FBL0JDO0FBRU4sSUFBQSxBQUFNTCxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ1pNLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLHVCQUF1Qk4sWUFDdkJPLG1DQUFtQ0wsYUFDbkNNLG9DQUFvQ0osY0FDcENLLGdDQUFnQ0MsdUJBQWtCLENBQUNDLFdBQVcsQ0FBQ0osbUNBQy9ESyxpQ0FBaUNGLHVCQUFrQixDQUFDQyxXQUFXLENBQUNILG9DQUNoRUssaUNBQWlDQyw2QkFBd0IsQ0FBQ0Msd0JBQXdCLENBQUNULHVCQUNuRlUsNkNBQTZDQyxxQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDTCxpQ0FDdkVNLFFBQVE7b0JBQ05WO29CQUNBTztvQkFDQUo7aUJBQ0QsRUFDRFEsYUFBYSxNQUNiQyx1QkFBdUIsSUFmWnRCLHFCQWVxQ29CLE9BQU9DO2dCQUU3RCxPQUFPQztZQUNUOzs7V0FsQm1CdEI7RUFBNkJ1QixtQkFBVSJ9