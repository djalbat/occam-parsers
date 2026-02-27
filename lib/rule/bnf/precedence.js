"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PrecedenceBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _precedence = /*#__PURE__*/ _interop_require_default(require("../../definition/precedence"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PrecedenceBNFRule extends _rule.default {
    static fromNothing() {
        const name = _ruleNames.PRECEDENCE_RULE_NAME, precedenceDefinition = _precedence.default.fromNothing(), opacity = null, definitions = [
            precedenceDefinition
        ], precedenceRule = new PrecedenceBNFRule(name, opacity, definitions);
        return precedenceRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9wcmVjZWRlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFByZWNlZGVuY2VEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3ByZWNlZGVuY2VcIjtcblxuaW1wb3J0IHsgUFJFQ0VERU5DRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWNlZGVuY2VCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gUFJFQ0VERU5DRV9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICBwcmVjZWRlbmNlRGVmaW5pdGlvbiA9IFByZWNlZGVuY2VEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBwcmVjZWRlbmNlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZVJ1bGUgPSBuZXcgUHJlY2VkZW5jZUJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHByZWNlZGVuY2VSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJlY2VkZW5jZUJORlJ1bGUiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwiUFJFQ0VERU5DRV9SVUxFX05BTUUiLCJwcmVjZWRlbmNlRGVmaW5pdGlvbiIsIlByZWNlZGVuY2VEZWZpbml0aW9uIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwicHJlY2VkZW5jZVJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7bUVBQ2dCOzJCQUVJOzs7Ozs7QUFFdEIsTUFBTUEsMEJBQTBCQyxhQUFJO0lBQ2pELE9BQU9DLGNBQWM7UUFDbkIsTUFBTUMsT0FBT0MsK0JBQW9CLEVBQzNCQyx1QkFBdUJDLG1CQUFvQixDQUFDSixXQUFXLElBQ3ZESyxVQUFVLE1BQ1ZDLGNBQWM7WUFDWkg7U0FDRCxFQUNESSxpQkFBaUIsSUFBSVQsa0JBQWtCRyxNQUFNSSxTQUFTQztRQUU1RCxPQUFPQztJQUNUO0FBQ0YifQ==