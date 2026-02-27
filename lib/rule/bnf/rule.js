"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _rule1 = /*#__PURE__*/ _interop_require_default(require("../../definition/rule"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RuleBNFRule extends _rule.default {
    static fromNothing() {
        const ruleDefinition = _rule1.default.fromNothing(), name = _ruleNames.RULE_RULE_NAME, opacity = null, definitions = [
            ruleDefinition
        ], ruleRule = new RuleBNFRule(name, opacity, definitions);
        return ruleRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3J1bGVcIjtcblxuaW1wb3J0IHsgUlVMRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBydWxlRGVmaW5pdGlvbiA9IFJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbmFtZSA9IFJVTEVfUlVMRV9OQU1FLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBydWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZUJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGVSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZUJORlJ1bGUiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJydWxlRGVmaW5pdGlvbiIsIlJ1bGVEZWZpbml0aW9uIiwibmFtZSIsIlJVTEVfUlVMRV9OQU1FIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwicnVsZVJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7OERBQ1U7MkJBRUk7Ozs7OztBQUVoQixNQUFNQSxvQkFBb0JDLGFBQUk7SUFDM0MsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxpQkFBaUJDLGNBQWMsQ0FBQ0YsV0FBVyxJQUMzQ0csT0FBT0MseUJBQWMsRUFDckJDLFVBQVUsTUFDVkMsY0FBYztZQUNaTDtTQUNELEVBQ0RNLFdBQVcsSUFBSVQsWUFBWUssTUFBTUUsU0FBU0M7UUFFaEQsT0FBT0M7SUFDVDtBQUNGIn0=