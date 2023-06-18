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
var _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../part/terminal/noWhitespace"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../part/terminal/significantTokenType"));
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
var numberType = _occamlexers.types.numberType, openBracket = _occamlexers.specialSymbols.openBracket, closeBracket = _occamlexers.specialSymbols.closeBracket;
var PrecedenceDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(PrecedenceDefinition, Definition);
    var _super = _create_super(PrecedenceDefinition);
    function PrecedenceDefinition() {
        _class_call_check(this, PrecedenceDefinition);
        var numberSignificantTokenType = numberType, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, noWhitespacePart = new _noWhitespace.default(), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), numberSignificantTokenTypePart = new _significantTokenType.default(numberSignificantTokenType), parts = [
            openBracketTerminalSymbolPart,
            noWhitespacePart,
            numberSignificantTokenTypePart,
            noWhitespacePart,
            closeBracketTerminalSymbolPart
        ];
        return _super.call(this, parts);
    }
    return PrecedenceDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3ByZWNlZGVuY2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHR5cGVzLCBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5jb25zdCB7IG51bWJlclR5cGUgfSA9IHR5cGVzLFxuICAgICAgeyBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlY2VkZW5jZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbnVtYmVyU2lnbmlmaWNhbnRUb2tlblR5cGUgPSBudW1iZXJUeXBlLCAgLy8vXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCwgLy8vXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gY2xvc2VCcmFja2V0LCAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0ID0gbmV3IE5vV2hpdGVzcGFjZVBhcnQoKSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBudW1iZXJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KG51bWJlclNpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCxcbiAgICAgICAgICAgIG51bWJlclNpZ25pZmljYW50VG9rZW5UeXBlUGFydCxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUHJlY2VkZW5jZURlZmluaXRpb24iLCJudW1iZXJUeXBlIiwidHlwZXMiLCJvcGVuQnJhY2tldCIsInNwZWNpYWxTeW1ib2xzIiwiY2xvc2VCcmFja2V0IiwibnVtYmVyU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm5vV2hpdGVzcGFjZVBhcnQiLCJOb1doaXRlc3BhY2VQYXJ0Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJudW1iZXJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJwYXJ0cyIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJCQVZpQjtpRUFFZjttRUFDTTtxRUFDRTsyRUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQyxhQUFlQyxtQkFBZkQsWUFDQUUsY0FBOEJDLDRCQUE5QkQsYUFBYUUsZUFBaUJELDRCQUFqQkM7QUFFTixJQUFBLEFBQU1MLHFDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7UUFFakIsSUFBTU0sNkJBQTZCTCxZQUM3Qk0sbUNBQW1DSixhQUNuQ0ssb0NBQW9DSCxjQUNwQ0ksbUJBQW1CLElBQUlDLHlCQUN2QkMsZ0NBQWdDLElBQUlDLHdCQUFtQkwsbUNBQ3ZETSxpQ0FBaUMsSUFBSUQsd0JBQW1CSixvQ0FDeERNLGlDQUFpQyxJQUFJQyw4QkFBeUJULDZCQUM5RFUsUUFBUTtZQUNOTDtZQUNBRjtZQUNBSztZQUNBTDtZQUNBSTtTQUNEO2lDQUVERzs7V0FqQldoQjtFQUE2QmlCIn0=