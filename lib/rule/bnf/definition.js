"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _definition = /*#__PURE__*/ _interop_require_default(require("../../definition/definition"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DefinitionBNFRule extends _rule.default {
    static fromNothing() {
        const name = _ruleNames.DEFINITION_RULE_NAME, definitionDefinition = _definition.default.fromNothing(), opacity = null, definitions = [
            definitionDefinition
        ], definitionRule = new DefinitionBNFRule(name, opacity, definitions);
        return definitionRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IERlZmluaXRpb25EZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2RlZmluaXRpb25cIjtcblxuaW1wb3J0IHsgREVGSU5JVElPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25CTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gREVGSU5JVElPTl9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvbiA9IERlZmluaXRpb25EZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvbkJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25SdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVmaW5pdGlvbkJORlJ1bGUiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwiREVGSU5JVElPTl9SVUxFX05BTUUiLCJkZWZpbml0aW9uRGVmaW5pdGlvbiIsIkRlZmluaXRpb25EZWZpbml0aW9uIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvblJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7bUVBQ2dCOzJCQUVJOzs7Ozs7QUFFdEIsTUFBTUEsMEJBQTBCQyxhQUFJO0lBQ2pELE9BQU9DLGNBQWM7UUFDbkIsTUFBTUMsT0FBT0MsK0JBQW9CLEVBQzNCQyx1QkFBdUJDLG1CQUFvQixDQUFDSixXQUFXLElBQ3ZESyxVQUFVLE1BQ1ZDLGNBQWM7WUFDWkg7U0FDRCxFQUNESSxpQkFBaUIsSUFBSVQsa0JBQWtCRyxNQUFNSSxTQUFTQztRQUU1RCxPQUFPQztJQUNUO0FBQ0YifQ==