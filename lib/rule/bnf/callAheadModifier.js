"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CallAheadModifierBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _callAheadModifierRule = /*#__PURE__*/ _interop_require_default(require("../../definition/callAheadModifierRule"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CallAheadModifierBNFRule extends _rule.default {
    static fromNothing() {
        const name = _ruleNames.CALL_AHEAD_MODIFIER_RULE_NAME, callAheadModifierRuleDefinition = _callAheadModifierRule.default.fromNothing(), opacity = null, definitions = [
            callAheadModifierRuleDefinition
        ], callAheadModifierRule = new CallAheadModifierBNFRule(name, opacity, definitions);
        return callAheadModifierRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9jYWxsQWhlYWRNb2RpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBDYWxsQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2NhbGxBaGVhZE1vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBDQUxMX0FIRUFEX01PRElGSUVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gQ0FMTF9BSEVBRF9NT0RJRklFUl9SVUxFX05BTUUsIC8vL1xuICAgICAgICAgIGNhbGxBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSBDYWxsQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjYWxsQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjYWxsQWhlYWRNb2RpZmllclJ1bGUgPSBuZXcgQ2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBjYWxsQWhlYWRNb2RpZmllclJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDYWxsQWhlYWRNb2RpZmllckJORlJ1bGUiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwiQ0FMTF9BSEVBRF9NT0RJRklFUl9SVUxFX05BTUUiLCJjYWxsQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiQ2FsbEFoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsImNhbGxBaGVhZE1vZGlmaWVyUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7Ozs2REFMSjs4RUFDMkI7MkJBRUU7Ozs7OztBQUUvQixNQUFNQSxpQ0FBaUNDLGFBQUk7SUFDeEQsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxPQUFPQyx3Q0FBNkIsRUFDcENDLGtDQUFrQ0MsOEJBQStCLENBQUNKLFdBQVcsSUFDN0VLLFVBQVUsTUFDVkMsY0FBYztZQUNaSDtTQUNELEVBQ0RJLHdCQUF3QixJQUFJVCx5QkFBeUJHLE1BQU1JLFNBQVNDO1FBRTFFLE9BQU9DO0lBQ1Q7QUFDRiJ9