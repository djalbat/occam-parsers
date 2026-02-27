"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoWhitespacePartBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _noWhitespacePart = /*#__PURE__*/ _interop_require_default(require("../../definition/noWhitespacePart"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NoWhitespacePartBNFRule extends _rule.default {
    static fromNothing() {
        const noWhitespacePartDefinition = _noWhitespacePart.default.fromNothing(), name = _ruleNames.NO_WHITESPACE_PART_RULE_NAME, opacity = null, definitions = [
            noWhitespacePartDefinition
        ], noWhitespacePartRule = new NoWhitespacePartBNFRule(name, opacity, definitions);
        return noWhitespacePartRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL25vV2hpdGVzcGFjZVBhcnRcIjtcblxuaW1wb3J0IHsgTk9fV0hJVEVTUEFDRV9QQVJUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9XaGl0ZXNwYWNlUGFydEJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uID0gTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gTk9fV0hJVEVTUEFDRV9QQVJUX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gbmV3IE5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VQYXJ0UnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlIiwiUnVsZSIsImZyb21Ob3RoaW5nIiwibm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIm5hbWUiLCJOT19XSElURVNQQUNFX1BBUlRfUlVMRV9OQU1FIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7eUVBQ3NCOzJCQUVNOzs7Ozs7QUFFOUIsTUFBTUEsZ0NBQWdDQyxhQUFJO0lBQ3ZELE9BQU9DLGNBQWM7UUFDbkIsTUFBTUMsNkJBQTZCQyx5QkFBMEIsQ0FBQ0YsV0FBVyxJQUNuRUcsT0FBT0MsdUNBQTRCLEVBQ25DQyxVQUFVLE1BQ1ZDLGNBQWM7WUFDWkw7U0FDRCxFQUNETSx1QkFBdUIsSUFBSVQsd0JBQXdCSyxNQUFNRSxTQUFTQztRQUV4RSxPQUFPQztJQUNUO0FBQ0YifQ==