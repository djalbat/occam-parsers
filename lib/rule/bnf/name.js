"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NameBNFRule;
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
class NameBNFRule extends _rule.default {
    static fromNothing() {
        const nameDefinition = _name.default.fromNothing(), name = _ruleNames.NAME_RULE_NAME, opacity = null, definitions = [
            nameDefinition
        ], nameRule = new NameBNFRule(name, opacity, definitions);
        return nameRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IE5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL25hbWVcIjtcblxuaW1wb3J0IHsgTkFNRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hbWVCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lRGVmaW5pdGlvbiA9IE5hbWVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbmFtZSA9IE5BTUVfUlVMRV9OQU1FLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBuYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgbmFtZVJ1bGUgPSBuZXcgTmFtZUJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5hbWVSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmFtZUJORlJ1bGUiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lRGVmaW5pdGlvbiIsIk5hbWVEZWZpbml0aW9uIiwibmFtZSIsIk5BTUVfUlVMRV9OQU1FIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwibmFtZVJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7NkRBQ1U7MkJBRUk7Ozs7OztBQUVoQixNQUFNQSxvQkFBb0JDLGFBQUk7SUFDM0MsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxpQkFBaUJDLGFBQWMsQ0FBQ0YsV0FBVyxJQUMzQ0csT0FBT0MseUJBQWMsRUFDckJDLFVBQVUsTUFDVkMsY0FBYztZQUNaTDtTQUNELEVBQ0RNLFdBQVcsSUFBSVQsWUFBWUssTUFBTUUsU0FBU0M7UUFFaEQsT0FBT0M7SUFDVDtBQUNGIn0=