"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartOfContentPartDefinition;
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
const { startOfContent } = _occamlexers.specialSymbols;
class StartOfContentPartDefinition extends _definition.default {
    static fromNothing() {
        const content = startOfContent, stringLiteralPart = _stringLiteral.default.fromContent(content), parts = [
            stringLiteralPart
        ], precedence = null, startOfContentPartDefinition = new StartOfContentPartDefinition(parts, precedence);
        return startOfContentPartDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3N0YXJ0T2ZDb250ZW50UGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvc3RyaW5nTGl0ZXJhbFwiO1xuXG5jb25zdCB7IHN0YXJ0T2ZDb250ZW50IH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHN0YXJ0T2ZDb250ZW50LCAgLy8vXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbFBhcnQgPSBTdHJpbmdMaXRlcmFsUGFydC5mcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHN0cmluZ0xpdGVyYWxQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBzdGFydE9mQ29udGVudFBhcnREZWZpbml0aW9uID0gbmV3IFN0YXJ0T2ZDb250ZW50UGFydERlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb250ZW50UGFydERlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdGFydE9mQ29udGVudFBhcnREZWZpbml0aW9uIiwic3RhcnRPZkNvbnRlbnQiLCJzcGVjaWFsU3ltYm9scyIsIkRlZmluaXRpb24iLCJmcm9tTm90aGluZyIsImNvbnRlbnQiLCJzdHJpbmdMaXRlcmFsUGFydCIsIlN0cmluZ0xpdGVyYWxQYXJ0IiwiZnJvbUNvbnRlbnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJzdGFydE9mQ29udGVudFBhcnREZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXFCQTs7OzZCQVBVO21FQUVSO3NFQUNPOzs7Ozs7QUFFOUIsTUFBTSxFQUFFQyxjQUFjLEVBQUUsR0FBR0MsMkJBQWM7QUFFMUIsTUFBTUYscUNBQXFDRyxtQkFBVTtJQUNsRSxPQUFPQyxjQUFjO1FBQ25CLE1BQU1DLFVBQVVKLGdCQUNWSyxvQkFBb0JDLHNCQUFpQixDQUFDQyxXQUFXLENBQUNILFVBQ2xESSxRQUFRO1lBQ05IO1NBQ0QsRUFDREksYUFBYSxNQUNiQywrQkFBK0IsSUFBSVgsNkJBQTZCUyxPQUFPQztRQUU3RSxPQUFPQztJQUNUO0FBQ0YifQ==