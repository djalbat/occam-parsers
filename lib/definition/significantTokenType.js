"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SignificantTokenTypeDefinition;
    }
});
const _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
const _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../part/terminal/significantTokenType"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SignificantTokenTypeDefinition extends _definition.default {
    static fromSignificantTokenType(significantTokenType) {
        const significantTokenTypePart = _significantTokenType.default.fromSignificantTokenType(significantTokenType), parts = [
            significantTokenTypePart
        ], precedence = null, significantTokenTypeDefinition = new SignificantTokenTypeDefinition(parts, precedence);
        return significantTokenTypeDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuVHlwZShzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydC5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGUoc2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJEZWZpbml0aW9uIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJzaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7bUVBSEU7NkVBQ2M7Ozs7OztBQUV0QixNQUFNQSx1Q0FBdUNDLG1CQUFVO0lBQ3BFLE9BQU9DLHlCQUF5QkMsb0JBQW9CLEVBQUU7UUFDcEQsTUFBTUMsMkJBQTJCQyw2QkFBd0IsQ0FBQ0gsd0JBQXdCLENBQUNDLHVCQUM3RUcsUUFBUTtZQUNORjtTQUNELEVBQ0RHLGFBQWEsTUFDYkMsaUNBQWlDLElBQUlSLCtCQUErQk0sT0FBT0M7UUFFakYsT0FBT0M7SUFDVDtBQUNGIn0=