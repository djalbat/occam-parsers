"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartOfContentPartBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _startOfContentPart = /*#__PURE__*/ _interop_require_default(require("../../definition/startOfContentPart"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StartOfContentPartBNFRule extends _rule.default {
    static fromNothing() {
        const startOfContentPartDefinition = _startOfContentPart.default.fromNothing(), name = _ruleNames.START_OF_CONTENT_PART_RULE_NAME, opacity = null, definitions = [
            startOfContentPartDefinition
        ], startOfContentPartRule = new StartOfContentPartBNFRule(name, opacity, definitions);
        return startOfContentPartRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9zdGFydE9mQ29udGVudFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgU3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9zdGFydE9mQ29udGVudFBhcnRcIjtcblxuaW1wb3J0IHsgU1RBUlRfT0ZfQ09OVEVOVF9QQVJUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvbiA9IFN0YXJ0T2ZDb250ZW50UGFydERlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gU1RBUlRfT0ZfQ09OVEVOVF9QQVJUX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZSA9IG5ldyBTdGFydE9mQ29udGVudFBhcnRCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBzdGFydE9mQ29udGVudFBhcnRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZSIsIlJ1bGUiLCJmcm9tTm90aGluZyIsInN0YXJ0T2ZDb250ZW50UGFydERlZmluaXRpb24iLCJTdGFydE9mQ29udGVudFBhcnREZWZpbml0aW9uIiwibmFtZSIsIlNUQVJUX09GX0NPTlRFTlRfUEFSVF9SVUxFX05BTUUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJzdGFydE9mQ29udGVudFBhcnRSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7OzZEQUxKOzJFQUN3QjsyQkFFTzs7Ozs7O0FBRWpDLE1BQU1BLGtDQUFrQ0MsYUFBSTtJQUN6RCxPQUFPQyxjQUFjO1FBQ25CLE1BQU1DLCtCQUErQkMsMkJBQTRCLENBQUNGLFdBQVcsSUFDdkVHLE9BQU9DLDBDQUErQixFQUN0Q0MsVUFBVSxNQUNWQyxjQUFjO1lBQ1pMO1NBQ0QsRUFDRE0seUJBQXlCLElBQUlULDBCQUEwQkssTUFBTUUsU0FBU0M7UUFFNUUsT0FBT0M7SUFDVDtBQUNGIn0=