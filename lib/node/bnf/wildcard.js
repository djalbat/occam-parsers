"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return WildcardBNFNode;
    }
});
const _wildcard = /*#__PURE__*/ _interop_require_default(require("../../part/terminal/wildcard"));
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class WildcardBNFNode extends _nonTerminal.default {
    generatePart(callAhead) {
        const wildcardPart = _wildcard.default.fromNothing();
        return wildcardPart;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(WildcardBNFNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi93aWxkY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFdpbGRjYXJkUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbC93aWxkY2FyZFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWxkY2FyZEJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKSB7XG4gICAgY29uc3Qgd2lsZGNhcmRQYXJ0ID0gV2lsZGNhcmRQYXJ0LmZyb21Ob3RoaW5nKCk7XG5cbiAgICByZXR1cm4gd2lsZGNhcmRQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShXaWxkY2FyZEJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIldpbGRjYXJkQk5GTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdlbmVyYXRlUGFydCIsImNhbGxBaGVhZCIsIndpbGRjYXJkUGFydCIsIldpbGRjYXJkUGFydCIsImZyb21Ob3RoaW5nIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7aUVBSEk7b0VBQ0c7Ozs7OztBQUViLE1BQU1BLHdCQUF3QkMsb0JBQWU7SUFDMURDLGFBQWFDLFNBQVMsRUFBRTtRQUN0QixNQUFNQyxlQUFlQyxpQkFBWSxDQUFDQyxXQUFXO1FBRTdDLE9BQU9GO0lBQ1Q7SUFFQSxPQUFPRywyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9WLG9CQUFlLENBQUNNLDBDQUEwQyxDQUFDUCxpQkFBaUJRLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDaE8ifQ==