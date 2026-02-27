"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StringLiteralDefinition;
    }
});
const _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
const _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StringLiteralDefinition extends _definition.default {
    static fromContent(content) {
        const stringLiteralPart = _stringLiteral.default.fromContent(content), parts = [
            stringLiteralPart
        ], precedence = null, stringLiteralDefinition = new StringLiteralDefinition(parts, precedence);
        return stringLiteralDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3N0cmluZ0xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvc3RyaW5nTGl0ZXJhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxQYXJ0ID0gU3RyaW5nTGl0ZXJhbFBhcnQuZnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBzdHJpbmdMaXRlcmFsUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbERlZmluaXRpb24gPSBuZXcgU3RyaW5nTGl0ZXJhbERlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHN0cmluZ0xpdGVyYWxEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RyaW5nTGl0ZXJhbERlZmluaXRpb24iLCJEZWZpbml0aW9uIiwiZnJvbUNvbnRlbnQiLCJjb250ZW50Iiwic3RyaW5nTGl0ZXJhbFBhcnQiLCJTdHJpbmdMaXRlcmFsUGFydCIsInBhcnRzIiwicHJlY2VkZW5jZSIsInN0cmluZ0xpdGVyYWxEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7O21FQUhFO3NFQUNPOzs7Ozs7QUFFZixNQUFNQSxnQ0FBZ0NDLG1CQUFVO0lBQzdELE9BQU9DLFlBQVlDLE9BQU8sRUFBRTtRQUMxQixNQUFNQyxvQkFBb0JDLHNCQUFpQixDQUFDSCxXQUFXLENBQUNDLFVBQ2xERyxRQUFRO1lBQ05GO1NBQ0QsRUFDREcsYUFBYSxNQUNiQywwQkFBMEIsSUFBSVIsd0JBQXdCTSxPQUFPQztRQUVuRSxPQUFPQztJQUNUO0FBQ0YifQ==