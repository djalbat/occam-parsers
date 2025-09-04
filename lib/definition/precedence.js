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
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
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
                var significantTokenType = numberType, openBracketStringLiteralContent = openBracket, closeBracketStringLiteralContent = closeBracket, openBracketStringLiteralPart = _stringLiteral.default.fromContent(openBracketStringLiteralContent), closeBracketStringLiteralPart = _stringLiteral.default.fromContent(closeBracketStringLiteralContent), numberSignificantTokenTypePart = _significantTokenType.default.fromSignificantTokenType(significantTokenType), optionalNumberSignificantTokenTypePartPart = _optionalPart.default.fromPart(numberSignificantTokenTypePart), parts = [
                    openBracketStringLiteralPart,
                    optionalNumberSignificantTokenTypePartPart,
                    closeBracketStringLiteralPart
                ], precedence = null, precedenceDefinition = new PrecedenceDefinition(parts, precedence);
                return precedenceDefinition;
            }
        }
    ]);
    return PrecedenceDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3ByZWNlZGVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHR5cGVzLCBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBPcHRpb25hbFBhcnRQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydFwiO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWxQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3N0cmluZ0xpdGVyYWxcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuY29uc3QgeyBudW1iZXJUeXBlIH0gPSB0eXBlcyxcbiAgICAgIHsgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWNlZGVuY2VEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZSA9IG51bWJlclR5cGUsICAvLy9cbiAgICAgICAgICBvcGVuQnJhY2tldFN0cmluZ0xpdGVyYWxDb250ZW50ID0gb3BlbkJyYWNrZXQsIC8vL1xuICAgICAgICAgIGNsb3NlQnJhY2tldFN0cmluZ0xpdGVyYWxDb250ZW50ID0gY2xvc2VCcmFja2V0LCAvLy9cbiAgICAgICAgICBvcGVuQnJhY2tldFN0cmluZ0xpdGVyYWxQYXJ0ID0gU3RyaW5nTGl0ZXJhbFBhcnQuZnJvbUNvbnRlbnQob3BlbkJyYWNrZXRTdHJpbmdMaXRlcmFsQ29udGVudCksXG4gICAgICAgICAgY2xvc2VCcmFja2V0U3RyaW5nTGl0ZXJhbFBhcnQgPSBTdHJpbmdMaXRlcmFsUGFydC5mcm9tQ29udGVudChjbG9zZUJyYWNrZXRTdHJpbmdMaXRlcmFsQ29udGVudCksXG4gICAgICAgICAgbnVtYmVyU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0LmZyb21TaWduaWZpY2FudFRva2VuVHlwZShzaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgb3B0aW9uYWxOdW1iZXJTaWduaWZpY2FudFRva2VuVHlwZVBhcnRQYXJ0ID0gT3B0aW9uYWxQYXJ0UGFydC5mcm9tUGFydChudW1iZXJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRTdHJpbmdMaXRlcmFsUGFydCxcbiAgICAgICAgICAgIG9wdGlvbmFsTnVtYmVyU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UGFydCxcbiAgICAgICAgICAgIGNsb3NlQnJhY2tldFN0cmluZ0xpdGVyYWxQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBwcmVjZWRlbmNlRGVmaW5pdGlvbiA9IG5ldyBQcmVjZWRlbmNlRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcHJlY2VkZW5jZURlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmVjZWRlbmNlRGVmaW5pdGlvbiIsIm51bWJlclR5cGUiLCJ0eXBlcyIsIm9wZW5CcmFja2V0Iiwic3BlY2lhbFN5bWJvbHMiLCJjbG9zZUJyYWNrZXQiLCJmcm9tTm90aGluZyIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwib3BlbkJyYWNrZXRTdHJpbmdMaXRlcmFsQ29udGVudCIsImNsb3NlQnJhY2tldFN0cmluZ0xpdGVyYWxDb250ZW50Iiwib3BlbkJyYWNrZXRTdHJpbmdMaXRlcmFsUGFydCIsIlN0cmluZ0xpdGVyYWxQYXJ0IiwiZnJvbUNvbnRlbnQiLCJjbG9zZUJyYWNrZXRTdHJpbmdMaXRlcmFsUGFydCIsIm51bWJlclNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsImZyb21TaWduaWZpY2FudFRva2VuVHlwZSIsIm9wdGlvbmFsTnVtYmVyU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJmcm9tUGFydCIsInBhcnRzIiwicHJlY2VkZW5jZSIsInByZWNlZGVuY2VEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkJBVmlCO2lFQUVmO21FQUNNO29FQUNDOzJFQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUMsYUFBZUMsa0JBQUssQ0FBcEJELFlBQ0FFLGNBQThCQywyQkFBYyxDQUE1Q0QsYUFBYUUsZUFBaUJELDJCQUFjLENBQS9CQztBQUVOLElBQUEsQUFBTUwscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWk0sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsdUJBQXVCTixZQUN2Qk8sa0NBQWtDTCxhQUNsQ00sbUNBQW1DSixjQUNuQ0ssK0JBQStCQyxzQkFBaUIsQ0FBQ0MsV0FBVyxDQUFDSixrQ0FDN0RLLGdDQUFnQ0Ysc0JBQWlCLENBQUNDLFdBQVcsQ0FBQ0gsbUNBQzlESyxpQ0FBaUNDLDZCQUF3QixDQUFDQyx3QkFBd0IsQ0FBQ1QsdUJBQ25GVSw2Q0FBNkNDLHFCQUFnQixDQUFDQyxRQUFRLENBQUNMLGlDQUN2RU0sUUFBUTtvQkFDTlY7b0JBQ0FPO29CQUNBSjtpQkFDRCxFQUNEUSxhQUFhLE1BQ2JDLHVCQUF1QixJQWZadEIscUJBZXFDb0IsT0FBT0M7Z0JBRTdELE9BQU9DO1lBQ1Q7OztXQWxCbUJ0QjtFQUE2QnVCLG1CQUFVIn0=