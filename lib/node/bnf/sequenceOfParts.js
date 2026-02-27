"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SequenceOfPartsBNFNode;
    }
});
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
const _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/sequenceOfParts"));
const _ruleNames = require("../../ruleNames");
const _node = require("../../utilities/node");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SequenceOfPartsBNFNode extends _nonTerminal.default {
    generatePart(callAhead) {
        const ruleName = _ruleNames.PART_RULE_NAME, childNodes = this.getChildNodes(), partBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, ruleName);
        callAhead = false; ///
        const parts = partBNFNodes.map((partBNFNode)=>{
            const part = partBNFNode.generatePart(callAhead);
            return part;
        }), sequenceOfPartsPart = _sequenceOfParts.default.fromParts(parts), part = sequenceOfPartsPart; ///
        return part;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(SequenceOfPartsBNFNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9zZXF1ZW5jZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBQQVJUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZU9mUGFydHNCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGNhbGxBaGVhZCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSVF9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhcnRCTkZOb2RlcyA9IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBydWxlTmFtZSk7XG5cbiAgICBjYWxsQWhlYWQgPSBmYWxzZTsgIC8vL1xuXG4gICAgY29uc3QgcGFydHMgPSBwYXJ0Qk5GTm9kZXMubWFwKChwYXJ0Qk5GTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhcnRCTkZOb2RlLmdlbmVyYXRlUGFydChjYWxsQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gU2VxdWVuY2VPZlBhcnRzUGFydC5mcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTZXF1ZW5jZU9mUGFydHNCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNCTkZOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiZ2VuZXJhdGVQYXJ0IiwiY2FsbEFoZWFkIiwicnVsZU5hbWUiLCJQQVJUX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicGFydEJORk5vZGVzIiwibm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIiwicGFydHMiLCJtYXAiLCJwYXJ0Qk5GTm9kZSIsInBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0cyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7O29FQU5PO3dFQUNJOzJCQUVEO3NCQUNnQjs7Ozs7O0FBRWhDLE1BQU1BLCtCQUErQkMsb0JBQWU7SUFDakVDLGFBQWFDLFNBQVMsRUFBRTtRQUN0QixNQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGVBQWVDLElBQUFBLG9DQUE4QixFQUFDSCxZQUFZRjtRQUVoRUQsWUFBWSxPQUFRLEdBQUc7UUFFdkIsTUFBTU8sUUFBUUYsYUFBYUcsR0FBRyxDQUFDLENBQUNDO1lBQ3hCLE1BQU1DLE9BQU9ELFlBQVlWLFlBQVksQ0FBQ0M7WUFFdEMsT0FBT1U7UUFDVCxJQUNBQyxzQkFBc0JDLHdCQUFtQixDQUFDQyxTQUFTLENBQUNOLFFBQ3BERyxPQUFPQyxxQkFBcUIsR0FBRztRQUVyQyxPQUFPRDtJQUNUO0lBRUEsT0FBT0ksMkNBQTJDYixRQUFRLEVBQUVFLFVBQVUsRUFBRVksT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPbEIsb0JBQWUsQ0FBQ2dCLDBDQUEwQyxDQUFDakIsd0JBQXdCSSxVQUFVRSxZQUFZWSxTQUFTQztJQUFhO0FBQ3ZPIn0=