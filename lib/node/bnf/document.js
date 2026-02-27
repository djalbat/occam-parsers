"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentBNFNode;
    }
});
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
const _ruleNames = require("../../ruleNames");
const _node = require("../../utilities/node");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DocumentBNFNode extends _nonTerminal.default {
    generateRules(Rule) {
        const ruleName = _ruleNames.RULE_RULE_NAME, childNodes = this.getChildNodes(), ruleBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, ruleName), rules = ruleBNFNodes.map((ruleBNFNode)=>{
            const rule = ruleBNFNode.generateRule(Rule);
            return rule;
        });
        return rules;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(DocumentBNFNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFJVTEVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50Qk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZXMoUnVsZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUlVMRV9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVCTkZOb2RlcyA9IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBydWxlTmFtZSksXG4gICAgICAgICAgcnVsZXMgPSBydWxlQk5GTm9kZXMubWFwKChydWxlQk5GTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVCTkZOb2RlLmdlbmVyYXRlUnVsZShSdWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShEb2N1bWVudEJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50Qk5GTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdlbmVyYXRlUnVsZXMiLCJSdWxlIiwicnVsZU5hbWUiLCJSVUxFX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZUJORk5vZGVzIiwibm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIiwicnVsZXMiLCJtYXAiLCJydWxlQk5GTm9kZSIsInJ1bGUiLCJnZW5lcmF0ZVJ1bGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztvRUFMTTsyQkFFSTtzQkFDZ0I7Ozs7OztBQUVoQyxNQUFNQSx3QkFBd0JDLG9CQUFlO0lBQzFEQyxjQUFjQyxJQUFJLEVBQUU7UUFDbEIsTUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxlQUFlQyxJQUFBQSxvQ0FBOEIsRUFBQ0gsWUFBWUYsV0FDMURNLFFBQVFGLGFBQWFHLEdBQUcsQ0FBQyxDQUFDQztZQUN4QixNQUFNQyxPQUFPRCxZQUFZRSxZQUFZLENBQUNYO1lBRXRDLE9BQU9VO1FBQ1Q7UUFFTixPQUFPSDtJQUNUO0lBRUEsT0FBT0ssMkNBQTJDWCxRQUFRLEVBQUVFLFVBQVUsRUFBRVUsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPaEIsb0JBQWUsQ0FBQ2MsMENBQTBDLENBQUNmLGlCQUFpQkksVUFBVUUsWUFBWVUsU0FBU0M7SUFBYTtBQUNoTyJ9