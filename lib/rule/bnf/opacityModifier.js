"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OpacityModifierBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _opacityModifierRule = /*#__PURE__*/ _interop_require_default(require("../../definition/opacityModifierRule"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class OpacityModifierBNFRule extends _rule.default {
    static fromNothing() {
        const name = _ruleNames.OPACITY_MODIFIER_RULE_NAME, opacityModifierRuleDefinition = _opacityModifierRule.default.fromNothing(), opacity = null, definitions = [
            opacityModifierRuleDefinition
        ], opacityModifierRule = new OpacityModifierBNFRule(name, opacity, definitions);
        return opacityModifierRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9vcGFjaXR5TW9kaWZpZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgT3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vb3BhY2l0eU1vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBPUEFDSVRZX01PRElGSUVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BhY2l0eU1vZGlmaWVyQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9QQUNJVFlfTU9ESUZJRVJfUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IE9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eU1vZGlmaWVyUnVsZSA9IG5ldyBPcGFjaXR5TW9kaWZpZXJCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBvcGFjaXR5TW9kaWZpZXJSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT3BhY2l0eU1vZGlmaWVyQk5GUnVsZSIsIlJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJPUEFDSVRZX01PRElGSUVSX1JVTEVfTkFNRSIsIm9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiT3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJvcGFjaXR5TW9kaWZpZXJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7OzZEQUxKOzRFQUN5QjsyQkFFQzs7Ozs7O0FBRTVCLE1BQU1BLCtCQUErQkMsYUFBSTtJQUN0RCxPQUFPQyxjQUFjO1FBQ25CLE1BQU1DLE9BQU9DLHFDQUEwQixFQUNqQ0MsZ0NBQWdDQyw0QkFBNkIsQ0FBQ0osV0FBVyxJQUN6RUssVUFBVSxNQUNWQyxjQUFjO1lBQ1pIO1NBQ0QsRUFDREksc0JBQXNCLElBQUlULHVCQUF1QkcsTUFBTUksU0FBU0M7UUFFdEUsT0FBT0M7SUFDVDtBQUNGIn0=