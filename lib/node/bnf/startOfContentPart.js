"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartOfContentPartBNFNode;
    }
});
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
const _startOfContent = /*#__PURE__*/ _interop_require_default(require("../../part/terminal/startOfContent"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StartOfContentPartBNFNode extends _nonTerminal.default {
    generatePart(callAhead) {
        const startOfContentPart = _startOfContent.default.fromNothing();
        return startOfContentPart;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(StartOfContentPartBNFNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9zdGFydE9mQ29udGVudFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBTdGFydE9mQ29udGVudFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWwvc3RhcnRPZkNvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChjYWxsQWhlYWQpIHtcbiAgICBjb25zdCBzdGFydE9mQ29udGVudFBhcnQgPSBTdGFydE9mQ29udGVudFBhcnQuZnJvbU5vdGhpbmcoKTtcblxuICAgIHJldHVybiBzdGFydE9mQ29udGVudFBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFN0YXJ0T2ZDb250ZW50UGFydEJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXJ0T2ZDb250ZW50UGFydEJORk5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJjYWxsQWhlYWQiLCJzdGFydE9mQ29udGVudFBhcnQiLCJTdGFydE9mQ29udGVudFBhcnQiLCJmcm9tTm90aGluZyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7O29FQUhPO3VFQUNHOzs7Ozs7QUFFaEIsTUFBTUEsa0NBQWtDQyxvQkFBZTtJQUNwRUMsYUFBYUMsU0FBUyxFQUFFO1FBQ3RCLE1BQU1DLHFCQUFxQkMsdUJBQWtCLENBQUNDLFdBQVc7UUFFekQsT0FBT0Y7SUFDVDtJQUVBLE9BQU9HLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT1Ysb0JBQWUsQ0FBQ00sMENBQTBDLENBQUNQLDJCQUEyQlEsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUMxTyJ9