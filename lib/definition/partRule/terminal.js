"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalPartRuleDefinition;
    }
});
const _definition = /*#__PURE__*/ _interop_require_default(require("../../definition"));
const _ruleName = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/ruleName"));
const _zeroOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/zeroOrMoreParts"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TerminalPartRuleDefinition extends _definition.default {
    static fromNothing() {
        let ruleName;
        ruleName = _ruleNames.QUANTIFIER_RULE_NAME;
        const quantifierRuleNamePart = _ruleName.default.fromRuleName(ruleName);
        ruleName = _ruleNames.TERMINAL_PART_RULE_NAME;
        const terminalPartRuleNamePart = _ruleName.default.fromRuleName(ruleName), zeroOrMoreQuantifierRuleNamePartsPart = _zeroOrMoreParts.default.fromPart(quantifierRuleNamePart), parts = [
            terminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
        ], precedence = null, terminalPartRuleDefinition = new TerminalPartRuleDefinition(parts, precedence);
        return terminalPartRuleDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRSdWxlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IFFVQU5USUZJRVJfUlVMRV9OQU1FLCBURVJNSU5BTF9QQVJUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGxldCBydWxlTmFtZTtcblxuICAgIHJ1bGVOYW1lID0gUVVBTlRJRklFUl9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBydWxlTmFtZSA9IFRFUk1JTkFMX1BBUlRfUlVMRV9OQU1FO1xuXG4gICAgY29uc3QgdGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydCA9IFplcm9Pck1vcmVQYXJ0c1BhcnQuZnJvbVBhcnQocXVhbnRpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJmcm9tTm90aGluZyIsInJ1bGVOYW1lIiwiUVVBTlRJRklFUl9SVUxFX05BTUUiLCJxdWFudGlmaWVyUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiZnJvbVJ1bGVOYW1lIiwiVEVSTUlOQUxfUEFSVF9SVUxFX05BTUUiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsImZyb21QYXJ0IiwicGFydHMiLCJwcmVjZWRlbmNlIiwidGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7bUVBTkU7aUVBQ0U7d0VBQ087MkJBRThCOzs7Ozs7QUFFL0MsTUFBTUEsbUNBQW1DQyxtQkFBVTtJQUNoRSxPQUFPQyxjQUFjO1FBQ25CLElBQUlDO1FBRUpBLFdBQVdDLCtCQUFvQjtRQUUvQixNQUFNQyx5QkFBeUJDLGlCQUFZLENBQUNDLFlBQVksQ0FBQ0o7UUFFekRBLFdBQVdLLGtDQUF1QjtRQUVsQyxNQUFNQywyQkFBMkJILGlCQUFZLENBQUNDLFlBQVksQ0FBQ0osV0FDckRPLHdDQUF3Q0Msd0JBQW1CLENBQUNDLFFBQVEsQ0FBQ1AseUJBQ3JFUSxRQUFRO1lBQ05KO1lBQ0FDO1NBQ0QsRUFDREksYUFBYSxNQUNiQyw2QkFBNkIsSUFBSWYsMkJBQTJCYSxPQUFPQztRQUV6RSxPQUFPQztJQUNUO0FBQ0YifQ==