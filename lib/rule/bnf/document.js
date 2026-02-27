"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _document = /*#__PURE__*/ _interop_require_default(require("../../definition/document"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DocumentBNFRule extends _rule.default {
    static fromNothing() {
        const documentDefinition = _document.default.fromNothing(), name = _ruleNames.DOCUMENT_RULE_NAME, opacity = null, definitions = [
            documentDefinition
        ], documentRule = new DocumentBNFRule(name, opacity, definitions);
        return documentRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBEb2N1bWVudERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgRE9DVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudEJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RGVmaW5pdGlvbiA9IERvY3VtZW50RGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5hbWUgPSBET0NVTUVOVF9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRvY3VtZW50RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50Qk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gZG9jdW1lbnRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRG9jdW1lbnRCTkZSdWxlIiwiUnVsZSIsImZyb21Ob3RoaW5nIiwiZG9jdW1lbnREZWZpbml0aW9uIiwiRG9jdW1lbnREZWZpbml0aW9uIiwibmFtZSIsIkRPQ1VNRU5UX1JVTEVfTkFNRSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsImRvY3VtZW50UnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7Ozs2REFMSjtpRUFDYzsyQkFFSTs7Ozs7O0FBRXBCLE1BQU1BLHdCQUF3QkMsYUFBSTtJQUMvQyxPQUFPQyxjQUFjO1FBQ25CLE1BQU1DLHFCQUFxQkMsaUJBQWtCLENBQUNGLFdBQVcsSUFDbkRHLE9BQU9DLDZCQUFrQixFQUN6QkMsVUFBVSxNQUNWQyxjQUFjO1lBQ1pMO1NBQ0QsRUFDRE0sZUFBZSxJQUFJVCxnQkFBZ0JLLE1BQU1FLFNBQVNDO1FBRXhELE9BQU9DO0lBQ1Q7QUFDRiJ9