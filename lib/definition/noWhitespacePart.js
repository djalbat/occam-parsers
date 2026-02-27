"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoWhitespacePartDefinition;
    }
});
const _occamlexers = require("occam-lexers");
const _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
const _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { noWhitespace } = _occamlexers.specialSymbols;
class NoWhitespacePartDefinition extends _definition.default {
    static fromNothing() {
        const content = noWhitespace, stringLiteralPart = _stringLiteral.default.fromContent(content), parts = [
            stringLiteralPart
        ], precedence = null, noWhitespacePartDefinition = new NoWhitespacePartDefinition(parts, precedence);
        return noWhitespacePartDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL25vV2hpdGVzcGFjZVBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWxQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3N0cmluZ0xpdGVyYWxcIjtcblxuY29uc3QgeyBub1doaXRlc3BhY2UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY29udGVudCA9IG5vV2hpdGVzcGFjZSwgIC8vL1xuICAgICAgICAgIHN0cmluZ0xpdGVyYWxQYXJ0ID0gU3RyaW5nTGl0ZXJhbFBhcnQuZnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBzdHJpbmdMaXRlcmFsUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24gPSBuZXcgTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJzcGVjaWFsU3ltYm9scyIsIkRlZmluaXRpb24iLCJmcm9tTm90aGluZyIsImNvbnRlbnQiLCJzdHJpbmdMaXRlcmFsUGFydCIsIlN0cmluZ0xpdGVyYWxQYXJ0IiwiZnJvbUNvbnRlbnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7Ozs2QkFQVTttRUFFUjtzRUFDTzs7Ozs7O0FBRTlCLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUdDLDJCQUFjO0FBRXhCLE1BQU1GLG1DQUFtQ0csbUJBQVU7SUFDaEUsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxVQUFVSixjQUNWSyxvQkFBb0JDLHNCQUFpQixDQUFDQyxXQUFXLENBQUNILFVBQ2xESSxRQUFRO1lBQ05IO1NBQ0QsRUFDREksYUFBYSxNQUNiQyw2QkFBNkIsSUFBSVgsMkJBQTJCUyxPQUFPQztRQUV6RSxPQUFPQztJQUNUO0FBQ0YifQ==