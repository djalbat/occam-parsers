"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _name = /*#__PURE__*/ _interop_require_default(require("../../definition/name"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RuleNameBNFRule extends _rule.default {
    static fromNothing() {
        const nameDefinition = _name.default.fromNothing(), name = _ruleNames.RULE_NAME_RULE_NAME, opacity = null, definitions = [
            nameDefinition ///
        ], ruleNameRule = new RuleNameBNFRule(name, opacity, definitions);
        return ruleNameRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9uYW1lXCI7XG5cbmltcG9ydCB7IFJVTEVfTkFNRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZURlZmluaXRpb24gPSBOYW1lRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5hbWUgPSBSVUxFX05BTUVfUlVMRV9OQU1FLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBuYW1lRGVmaW5pdGlvbiAgLy8vXG4gICAgICAgICAgXSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBydWxlTmFtZVJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlTmFtZUJORlJ1bGUiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lRGVmaW5pdGlvbiIsIk5hbWVEZWZpbml0aW9uIiwibmFtZSIsIlJVTEVfTkFNRV9SVUxFX05BTUUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJydWxlTmFtZVJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7NkRBQ1U7MkJBRVM7Ozs7OztBQUVyQixNQUFNQSx3QkFBd0JDLGFBQUk7SUFDL0MsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxpQkFBaUJDLGFBQWMsQ0FBQ0YsV0FBVyxJQUMzQ0csT0FBT0MsOEJBQW1CLEVBQzFCQyxVQUFVLE1BQ1ZDLGNBQWM7WUFDWkwsZUFBZ0IsR0FBRztTQUNwQixFQUNETSxlQUFlLElBQUlULGdCQUFnQkssTUFBTUUsU0FBU0M7UUFFeEQsT0FBT0M7SUFDVDtBQUNGIn0=