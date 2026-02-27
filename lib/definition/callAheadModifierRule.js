"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CallAheadModifierRuleDefinition;
    }
});
const _occamlexers = require("occam-lexers");
const _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
const _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../part/terminal/noWhitespace"));
const _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { ellipsis } = _occamlexers.specialSymbols;
class CallAheadModifierRuleDefinition extends _definition.default {
    static fromNothing() {
        const content = ellipsis, noWhitespacePart = _noWhitespace.default.fromNothing(), stringLiteralPart = _stringLiteral.default.fromContent(content), parts = [
            noWhitespacePart,
            stringLiteralPart
        ], precedence = null, callAheadModifierRuleDefinition = new CallAheadModifierRuleDefinition(parts, precedence);
        return callAheadModifierRuleDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2NhbGxBaGVhZE1vZGlmaWVyUnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9ub1doaXRlc3BhY2VcIjtcbmltcG9ydCBTdHJpbmdMaXRlcmFsUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zdHJpbmdMaXRlcmFsXCI7XG5cbmNvbnN0IHsgZWxsaXBzaXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZWxsaXBzaXMsICAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0ID0gTm9XaGl0ZXNwYWNlUGFydC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0cmluZ0xpdGVyYWxQYXJ0ID0gU3RyaW5nTGl0ZXJhbFBhcnQuZnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0LFxuICAgICAgICAgICAgc3RyaW5nTGl0ZXJhbFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGNhbGxBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgQ2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gY2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNhbGxBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJlbGxpcHNpcyIsInNwZWNpYWxTeW1ib2xzIiwiRGVmaW5pdGlvbiIsImZyb21Ob3RoaW5nIiwiY29udGVudCIsIm5vV2hpdGVzcGFjZVBhcnQiLCJOb1doaXRlc3BhY2VQYXJ0Iiwic3RyaW5nTGl0ZXJhbFBhcnQiLCJTdHJpbmdMaXRlcmFsUGFydCIsImZyb21Db250ZW50IiwicGFydHMiLCJwcmVjZWRlbmNlIiwiY2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFxQkE7Ozs2QkFSVTttRUFFUjtxRUFDTTtzRUFDQzs7Ozs7O0FBRTlCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdDLDJCQUFjO0FBRXBCLE1BQU1GLHdDQUF3Q0csbUJBQVU7SUFDckUsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxVQUFVSixVQUNWSyxtQkFBbUJDLHFCQUFnQixDQUFDSCxXQUFXLElBQy9DSSxvQkFBb0JDLHNCQUFpQixDQUFDQyxXQUFXLENBQUNMLFVBQ2xETSxRQUFRO1lBQ05MO1lBQ0FFO1NBQ0QsRUFDREksYUFBYSxNQUNiQyxrQ0FBa0MsSUFBSWIsZ0NBQWdDVyxPQUFPQztRQUVuRixPQUFPQztJQUNUO0FBQ0YifQ==