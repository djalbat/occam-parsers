"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoWhitespacePartBNFNode;
    }
});
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
const _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../../part/terminal/noWhitespace"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NoWhitespacePartBNFNode extends _nonTerminal.default {
    generatePart(callAhead) {
        const noWhitespacePart = _noWhitespace.default.fromNothing();
        return noWhitespacePart;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(NoWhitespacePartBNFNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbC9ub1doaXRlc3BhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9XaGl0ZXNwYWNlUGFydEJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IE5vV2hpdGVzcGFjZVBhcnQuZnJvbU5vdGhpbmcoKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShOb1doaXRlc3BhY2VQYXJ0Qk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiTm9XaGl0ZXNwYWNlUGFydEJORk5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJjYWxsQWhlYWQiLCJub1doaXRlc3BhY2VQYXJ0IiwiTm9XaGl0ZXNwYWNlUGFydCIsImZyb21Ob3RoaW5nIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7b0VBSE87cUVBQ0M7Ozs7OztBQUVkLE1BQU1BLGdDQUFnQ0Msb0JBQWU7SUFDbEVDLGFBQWFDLFNBQVMsRUFBRTtRQUN0QixNQUFNQyxtQkFBbUJDLHFCQUFnQixDQUFDQyxXQUFXO1FBRXJELE9BQU9GO0lBQ1Q7SUFFQSxPQUFPRywyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9WLG9CQUFlLENBQUNNLDBDQUEwQyxDQUFDUCx5QkFBeUJRLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDeE8ifQ==