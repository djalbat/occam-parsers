"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return WildcardBNFRule;
    }
});
const _occamlexers = require("occam-lexers");
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../../definition/stringLiteral"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { wildcard } = _occamlexers.specialSymbols;
class WildcardBNFRule extends _rule.default {
    static fromNothing() {
        const content = wildcard, wildcardStringLiteralDefinition = _stringLiteral.default.fromContent(content), name = _ruleNames.WILDCARD_RULE_NAME, opacity = null, definitions = [
            wildcardStringLiteralDefinition
        ], wildcardRule = new WildcardBNFRule(name, opacity, definitions);
        return wildcardRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi93aWxkY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vc3RyaW5nTGl0ZXJhbFwiO1xuXG5pbXBvcnQgeyBXSUxEQ0FSRF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgd2lsZGNhcmQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWxkY2FyZEJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB3aWxkY2FyZCwgLy8vXG4gICAgICAgICAgd2lsZGNhcmRTdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiA9IFN0cmluZ0xpdGVyYWxEZWZpbml0aW9uLmZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBXSUxEQ0FSRF9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkU3RyaW5nTGl0ZXJhbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IG5ldyBXaWxkY2FyZEJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHdpbGRjYXJkUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIldpbGRjYXJkQk5GUnVsZSIsIndpbGRjYXJkIiwic3BlY2lhbFN5bWJvbHMiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJjb250ZW50Iiwid2lsZGNhcmRTdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiIsIlN0cmluZ0xpdGVyYWxEZWZpbml0aW9uIiwiZnJvbUNvbnRlbnQiLCJuYW1lIiwiV0lMRENBUkRfUlVMRV9OQU1FIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwid2lsZGNhcmRSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXFCQTs7OzZCQVRVOzZEQUVkO3NFQUNtQjsyQkFFRDs7Ozs7O0FBRW5DLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdDLDJCQUFjO0FBRXBCLE1BQU1GLHdCQUF3QkcsYUFBSTtJQUMvQyxPQUFPQyxjQUFjO1FBQ25CLE1BQU1DLFVBQVVKLFVBQ1ZLLGtDQUFrQ0Msc0JBQXVCLENBQUNDLFdBQVcsQ0FBQ0gsVUFDdEVJLE9BQU9DLDZCQUFrQixFQUN6QkMsVUFBVSxNQUNWQyxjQUFjO1lBQ1pOO1NBQ0QsRUFDRE8sZUFBZSxJQUFJYixnQkFBZ0JTLE1BQU1FLFNBQVNDO1FBRXhELE9BQU9DO0lBQ1Q7QUFDRiJ9