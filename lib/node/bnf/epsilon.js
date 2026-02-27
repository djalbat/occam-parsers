"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonBNFNode;
    }
});
const _epsilon = /*#__PURE__*/ _interop_require_default(require("../../part/terminal/epsilon"));
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EpsilonBNFNode extends _nonTerminal.default {
    generatePart(callAhead) {
        const epsilonPart = _epsilon.default.fromNothing();
        return epsilonPart;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(EpsilonBNFNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9lcHNpbG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXBzaWxvblBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWwvZXBzaWxvblwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uQk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChjYWxsQWhlYWQpIHtcbiAgICBjb25zdCBlcHNpbG9uUGFydCA9IEVwc2lsb25QYXJ0LmZyb21Ob3RoaW5nKCk7XG5cbiAgICByZXR1cm4gZXBzaWxvblBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEVwc2lsb25CTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFcHNpbG9uQk5GTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdlbmVyYXRlUGFydCIsImNhbGxBaGVhZCIsImVwc2lsb25QYXJ0IiwiRXBzaWxvblBhcnQiLCJmcm9tTm90aGluZyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7O2dFQUhHO29FQUNJOzs7Ozs7QUFFYixNQUFNQSx1QkFBdUJDLG9CQUFlO0lBQ3pEQyxhQUFhQyxTQUFTLEVBQUU7UUFDdEIsTUFBTUMsY0FBY0MsZ0JBQVcsQ0FBQ0MsV0FBVztRQUUzQyxPQUFPRjtJQUNUO0lBRUEsT0FBT0csMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPVixvQkFBZSxDQUFDTSwwQ0FBMEMsQ0FBQ1AsZ0JBQWdCUSxVQUFVQyxZQUFZQyxTQUFTQztJQUFhO0FBQy9OIn0=