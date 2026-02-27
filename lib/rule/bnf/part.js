"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _terminal = /*#__PURE__*/ _interop_require_default(require("../../definition/partRule/terminal"));
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../definition/partRule/nonTerminal"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PartBNFRule extends _rule.default {
    static fromNothing() {
        const name = _ruleNames.PART_RULE_NAME, terminalPartRuleDefinition = _terminal.default.fromNothing(), nonTerminalPartRuleDefinition = _nonTerminal.default.fromNothing(), opacity = null, definitions = [
            nonTerminalPartRuleDefinition,
            terminalPartRuleDefinition
        ], partRule = new PartBNFRule(name, opacity, definitions);
        return partRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3BhcnRSdWxlL3Rlcm1pbmFsXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcGFydFJ1bGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgUEFSVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gUEFSVF9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGFydFJ1bGUgPSBuZXcgUGFydEJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHBhcnRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFydEJORlJ1bGUiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwiUEFSVF9SVUxFX05BTUUiLCJ0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIlRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwibm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsInBhcnRSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7OzZEQU5KO2lFQUNzQjtvRUFDRzsyQkFFWDs7Ozs7O0FBRWhCLE1BQU1BLG9CQUFvQkMsYUFBSTtJQUMzQyxPQUFPQyxjQUFjO1FBQ25CLE1BQU1DLE9BQU9DLHlCQUFjLEVBQ3JCQyw2QkFBNkJDLGlCQUEwQixDQUFDSixXQUFXLElBQ25FSyxnQ0FBZ0NDLG9CQUE2QixDQUFDTixXQUFXLElBQ3pFTyxVQUFVLE1BQ1ZDLGNBQWM7WUFDWkg7WUFDQUY7U0FDRCxFQUNETSxXQUFXLElBQUlYLFlBQVlHLE1BQU1NLFNBQVNDO1FBRWhELE9BQU9DO0lBQ1Q7QUFDRiJ9