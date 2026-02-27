"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineBNFNode;
    }
});
const _endOfLine = /*#__PURE__*/ _interop_require_default(require("../../part/terminal/endOfLine"));
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EndOfLineBNFNode extends _nonTerminal.default {
    generatePart(callAhead) {
        const endOfLinePart = _endOfLine.default.fromNothing();
        return endOfLinePart;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(EndOfLineBNFNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbmRPZkxpbmVQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsL2VuZE9mTGluZVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGNhbGxBaGVhZCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVBhcnQgPSBFbmRPZkxpbmVQYXJ0LmZyb21Ob3RoaW5nKCk7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRW5kT2ZMaW5lQk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiRW5kT2ZMaW5lQk5GTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdlbmVyYXRlUGFydCIsImNhbGxBaGVhZCIsImVuZE9mTGluZVBhcnQiLCJFbmRPZkxpbmVQYXJ0IiwiZnJvbU5vdGhpbmciLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFxQkE7OztrRUFISztvRUFDRTs7Ozs7O0FBRWIsTUFBTUEseUJBQXlCQyxvQkFBZTtJQUMzREMsYUFBYUMsU0FBUyxFQUFFO1FBQ3RCLE1BQU1DLGdCQUFnQkMsa0JBQWEsQ0FBQ0MsV0FBVztRQUUvQyxPQUFPRjtJQUNUO0lBRUEsT0FBT0csMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPVixvQkFBZSxDQUFDTSwwQ0FBMEMsQ0FBQ1Asa0JBQWtCUSxVQUFVQyxZQUFZQyxTQUFTQztJQUFhO0FBQ2pPIn0=