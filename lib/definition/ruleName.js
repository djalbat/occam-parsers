"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameDefinition;
    }
});
const _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
const _ruleName = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/ruleName"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RuleNameDefinition extends _definition.default {
    static fromRuleName(ruleName) {
        const ruleNameRuleNamePart = _ruleName.default.fromRuleName(ruleName), parts = [
            ruleNameRuleNamePart
        ], precedence = null, ruleNameDefinition = new RuleNameDefinition(parts, precedence);
        return ruleNameDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgcnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJydWxlTmFtZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7bUVBSEU7aUVBQ0U7Ozs7OztBQUVWLE1BQU1BLDJCQUEyQkMsbUJBQVU7SUFDeEQsT0FBT0MsYUFBYUMsUUFBUSxFQUFFO1FBQzVCLE1BQU1DLHVCQUF1QkMsaUJBQVksQ0FBQ0gsWUFBWSxDQUFDQyxXQUNqREcsUUFBUTtZQUNORjtTQUNELEVBQ0RHLGFBQWEsTUFDYkMscUJBQXFCLElBQUlSLG1CQUFtQk0sT0FBT0M7UUFFekQsT0FBT0M7SUFDVDtBQUNGIn0=