"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionsDefinition;
    }
});
const _occamlexers = require("occam-lexers");
const _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
const _ruleName = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/ruleName"));
const _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
const _zeroOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/zeroOrMoreParts"));
const _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/sequenceOfParts"));
const _ruleNames = require("../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { verticalBar } = _occamlexers.specialSymbols;
class DefinitionsDefinition extends _definition.default {
    static fromNothing() {
        let parts;
        const content = verticalBar, ruleName = _ruleNames.DEFINITION_RULE_NAME, definitionRuleNamePart = _ruleName.default.fromRuleName(ruleName), verticalBarStringLiteralPart = _stringLiteral.default.fromContent(content);
        parts = [
            verticalBarStringLiteralPart,
            definitionRuleNamePart
        ];
        const sequenceOfPartsPart = _sequenceOfParts.default.fromParts(parts), zeroOrMoreSequenceOfPartsPart = _zeroOrMoreParts.default.fromPart(sequenceOfPartsPart);
        parts = [
            definitionRuleNamePart,
            zeroOrMoreSequenceOfPartsPart
        ];
        const precedence = null, definitionsDefinition = new DefinitionsDefinition(parts, precedence);
        return definitionsDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RlZmluaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBTdHJpbmdMaXRlcmFsUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zdHJpbmdMaXRlcmFsXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBERUZJTklUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB2ZXJ0aWNhbEJhciB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25zRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgY29uc3QgY29udGVudCA9IHZlcnRpY2FsQmFyLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBERUZJTklUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgdmVydGljYWxCYXJTdHJpbmdMaXRlcmFsUGFydCA9IFN0cmluZ0xpdGVyYWxQYXJ0LmZyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICB2ZXJ0aWNhbEJhclN0cmluZ0xpdGVyYWxQYXJ0LFxuICAgICAgZGVmaW5pdGlvblJ1bGVOYW1lUGFydFxuICAgIF07XG5cbiAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gU2VxdWVuY2VPZlBhcnRzUGFydC5mcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIHplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tUGFydChzZXF1ZW5jZU9mUGFydHNQYXJ0KTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgZGVmaW5pdGlvblJ1bGVOYW1lUGFydCxcbiAgICAgIHplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0XG4gICAgXTtcblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uc0RlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlZmluaXRpb25zRGVmaW5pdGlvbiIsInZlcnRpY2FsQmFyIiwic3BlY2lhbFN5bWJvbHMiLCJEZWZpbml0aW9uIiwiZnJvbU5vdGhpbmciLCJwYXJ0cyIsImNvbnRlbnQiLCJydWxlTmFtZSIsIkRFRklOSVRJT05fUlVMRV9OQU1FIiwiZGVmaW5pdGlvblJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsImZyb21SdWxlTmFtZSIsInZlcnRpY2FsQmFyU3RyaW5nTGl0ZXJhbFBhcnQiLCJTdHJpbmdMaXRlcmFsUGFydCIsImZyb21Db250ZW50Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJmcm9tUGFydHMiLCJ6ZXJvT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJmcm9tUGFydCIsInByZWNlZGVuY2UiLCJkZWZpbml0aW9uc0RlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBcUJBOzs7NkJBWlU7bUVBRVI7aUVBQ0U7c0VBQ0s7d0VBQ0U7d0VBQ0E7MkJBRUs7Ozs7OztBQUVyQyxNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHQywyQkFBYztBQUV2QixNQUFNRiw4QkFBOEJHLG1CQUFVO0lBQzNELE9BQU9DLGNBQWM7UUFDbkIsSUFBSUM7UUFFSixNQUFNQyxVQUFVTCxhQUNWTSxXQUFXQywrQkFBb0IsRUFDL0JDLHlCQUF5QkMsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDSixXQUNuREssK0JBQStCQyxzQkFBaUIsQ0FBQ0MsV0FBVyxDQUFDUjtRQUVuRUQsUUFBUTtZQUNOTztZQUNBSDtTQUNEO1FBRUQsTUFBTU0sc0JBQXNCQyx3QkFBbUIsQ0FBQ0MsU0FBUyxDQUFDWixRQUNwRGEsZ0NBQWdDQyx3QkFBbUIsQ0FBQ0MsUUFBUSxDQUFDTDtRQUVuRVYsUUFBUTtZQUNOSTtZQUNBUztTQUNEO1FBRUQsTUFBTUcsYUFBYSxNQUNiQyx3QkFBd0IsSUFBSXRCLHNCQUFzQkssT0FBT2dCO1FBRS9ELE9BQU9DO0lBQ1Q7QUFDRiJ9