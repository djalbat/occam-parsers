"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return QuantifierRuleDefinition;
    }
});
const _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
const _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../part/terminal/noWhitespace"));
const _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class QuantifierRuleDefinition extends _definition.default {
    static fromSpecialSymbol(specialSymbol) {
        const content = specialSymbol, noWhitespacePart = _noWhitespace.default.fromNothing(), stringLiteralPart = _stringLiteral.default.fromContent(content), parts = [
            noWhitespacePart,
            stringLiteralPart
        ], precedence = null, quantifierRuleDefinition = new QuantifierRuleDefinition(parts, precedence);
        return quantifierRuleDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvbm9XaGl0ZXNwYWNlXCI7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvc3RyaW5nTGl0ZXJhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWFudGlmaWVyUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21TcGVjaWFsU3ltYm9sKHNwZWNpYWxTeW1ib2wpIHtcbiAgICBjb25zdCBjb250ZW50ID0gc3BlY2lhbFN5bWJvbCwgIC8vL1xuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnQgPSBOb1doaXRlc3BhY2VQYXJ0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbFBhcnQgPSBTdHJpbmdMaXRlcmFsUGFydC5mcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnQsXG4gICAgICAgICAgICBzdHJpbmdMaXRlcmFsUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gbmV3IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcXVhbnRpZmllclJ1bGVEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiIsImZyb21TcGVjaWFsU3ltYm9sIiwic3BlY2lhbFN5bWJvbCIsImNvbnRlbnQiLCJub1doaXRlc3BhY2VQYXJ0IiwiTm9XaGl0ZXNwYWNlUGFydCIsImZyb21Ob3RoaW5nIiwic3RyaW5nTGl0ZXJhbFBhcnQiLCJTdHJpbmdMaXRlcmFsUGFydCIsImZyb21Db250ZW50IiwicGFydHMiLCJwcmVjZWRlbmNlIiwicXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O21FQUpFO3FFQUNNO3NFQUNDOzs7Ozs7QUFFZixNQUFNQSxpQ0FBaUNDLG1CQUFVO0lBQzlELE9BQU9DLGtCQUFrQkMsYUFBYSxFQUFFO1FBQ3RDLE1BQU1DLFVBQVVELGVBQ1ZFLG1CQUFtQkMscUJBQWdCLENBQUNDLFdBQVcsSUFDL0NDLG9CQUFvQkMsc0JBQWlCLENBQUNDLFdBQVcsQ0FBQ04sVUFDbERPLFFBQVE7WUFDTk47WUFDQUc7U0FDRCxFQUNESSxhQUFhLE1BQ2JDLDJCQUEyQixJQUFJYix5QkFBeUJXLE9BQU9DO1FBRXJFLE9BQU9DO0lBQ1Q7QUFDRiJ9