"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartChoiceDefinition;
    }
});
const _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
const _ruleName = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/ruleName"));
const _optionalPart = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/optionalPart"));
const _ruleNames = require("../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PartChoiceDefinition extends _definition.default {
    static fromNothing() {
        let ruleName;
        ruleName = _ruleNames.PART_RULE_NAME;
        const partRuleNamePart = _ruleName.default.fromRuleName(ruleName);
        ruleName = _ruleNames.PRECEDENCE_RULE_NAME;
        const precedenceRuleNamePart = _ruleName.default.fromRuleName(ruleName), optionalPrecedenceRuleNamePartPart = _optionalPart.default.fromPart(precedenceRuleNamePart), parts = [
            partRuleNamePart,
            optionalPrecedenceRuleNamePartPart
        ], precedence = null, partChoiceDefinition = new PartChoiceDefinition(parts, precedence);
        return partChoiceDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRDaG9pY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgT3B0aW9uYWxQYXJ0UGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnRcIjtcblxuaW1wb3J0IHsgUEFSVF9SVUxFX05BTUUsIFBSRUNFREVOQ0VfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Q2hvaWNlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHJ1bGVOYW1lO1xuXG4gICAgcnVsZU5hbWUgPSBQQVJUX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IHBhcnRSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJ1bGVOYW1lID0gUFJFQ0VERU5DRV9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgb3B0aW9uYWxQcmVjZWRlbmNlUnVsZU5hbWVQYXJ0UGFydCA9IE9wdGlvbmFsUGFydFBhcnQuZnJvbVBhcnQocHJlY2VkZW5jZVJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxQcmVjZWRlbmNlUnVsZU5hbWVQYXJ0UGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgcGFydENob2ljZURlZmluaXRpb24gPSBuZXcgUGFydENob2ljZURlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHBhcnRDaG9pY2VEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFydENob2ljZURlZmluaXRpb24iLCJEZWZpbml0aW9uIiwiZnJvbU5vdGhpbmciLCJydWxlTmFtZSIsIlBBUlRfUlVMRV9OQU1FIiwicGFydFJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsImZyb21SdWxlTmFtZSIsIlBSRUNFREVOQ0VfUlVMRV9OQU1FIiwicHJlY2VkZW5jZVJ1bGVOYW1lUGFydCIsIm9wdGlvbmFsUHJlY2VkZW5jZVJ1bGVOYW1lUGFydFBhcnQiLCJPcHRpb25hbFBhcnRQYXJ0IiwiZnJvbVBhcnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJwYXJ0Q2hvaWNlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OzttRUFORTtpRUFDRTtxRUFDSTsyQkFFd0I7Ozs7OztBQUV0QyxNQUFNQSw2QkFBNkJDLG1CQUFVO0lBQzFELE9BQU9DLGNBQWM7UUFDbkIsSUFBSUM7UUFFSkEsV0FBV0MseUJBQWM7UUFFekIsTUFBTUMsbUJBQW1CQyxpQkFBWSxDQUFDQyxZQUFZLENBQUNKO1FBRW5EQSxXQUFXSywrQkFBb0I7UUFFL0IsTUFBTUMseUJBQXlCSCxpQkFBWSxDQUFDQyxZQUFZLENBQUNKLFdBQ25ETyxxQ0FBcUNDLHFCQUFnQixDQUFDQyxRQUFRLENBQUNILHlCQUMvREksUUFBUTtZQUNOUjtZQUNBSztTQUNELEVBQ0RJLGFBQWEsTUFDYkMsdUJBQXVCLElBQUlmLHFCQUFxQmEsT0FBT0M7UUFFN0QsT0FBT0M7SUFDVDtBQUNGIn0=