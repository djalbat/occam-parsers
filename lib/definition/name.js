"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NameDefinition;
    }
});
const _occamlexers = require("occam-lexers");
const _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
const _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../part/terminal/significantTokenType"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { nameType } = _occamlexers.types;
class NameDefinition extends _definition.default {
    static fromNothing() {
        const significantTokenType = nameType, nameSignificantTokenTypePart = _significantTokenType.default.fromSignificantTokenType(significantTokenType), parts = [
            nameSignificantTokenTypePart
        ], precedence = null, nameDefinition = new NameDefinition(parts, precedence);
        return nameDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5jb25zdCB7IG5hbWVUeXBlIH0gPSB0eXBlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gbmFtZVR5cGUsICAvLy9cbiAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0LmZyb21TaWduaWZpY2FudFRva2VuVHlwZShzaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBuYW1lRGVmaW5pdGlvbiA9IG5ldyBOYW1lRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gbmFtZURlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOYW1lRGVmaW5pdGlvbiIsIm5hbWVUeXBlIiwidHlwZXMiLCJEZWZpbml0aW9uIiwiZnJvbU5vdGhpbmciLCJzaWduaWZpY2FudFRva2VuVHlwZSIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJuYW1lRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7Ozs2QkFQQzttRUFFQzs2RUFDYzs7Ozs7O0FBRXJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdDLGtCQUFLO0FBRVgsTUFBTUYsdUJBQXVCRyxtQkFBVTtJQUNwRCxPQUFPQyxjQUFjO1FBQ25CLE1BQU1DLHVCQUF1QkosVUFDdkJLLCtCQUErQkMsNkJBQXdCLENBQUNDLHdCQUF3QixDQUFDSCx1QkFDakZJLFFBQVE7WUFDTkg7U0FDRCxFQUNESSxhQUFhLE1BQ2JDLGlCQUFpQixJQUFJWCxlQUFlUyxPQUFPQztRQUVqRCxPQUFPQztJQUNUO0FBQ0YifQ==