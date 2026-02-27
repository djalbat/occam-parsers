"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartBNFNode;
    }
});
const _necessary = require("necessary");
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
const _optionalPart = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/optionalPart"));
const _oneOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/oneOrMoreParts"));
const _zeroOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/zeroOrMoreParts"));
const _bnf = require("../../utilities/bnf");
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { last } = _necessary.arrayUtilities;
class PartBNFNode extends _nonTerminal.default {
    generatePart(callAhead) {
        const childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes);
        return part;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(PartBNFNode, ruleName, childNodes, opacity, precedence);
    }
}
function partFromNodes(nodes) {
    let part;
    const nodesLength = nodes.length;
    if (nodesLength === 1) {
        const node = nodes.pop(), callAhead = false;
        part = node.generatePart(callAhead);
    } else {
        const lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);
        if (lastNodeQuantifierNode) {
            const node = nodes.pop(), quantifierNode = node; ///
            part = partFromNodes(nodes);
            const ruleName = (0, _bnf.ruleNameFromQuantifierNode)(quantifierNode), collectionOfPartsPart = collectionOfPartsPartFromPartAndRuleName(part, ruleName);
            part = collectionOfPartsPart; ///
        } else {
            nodes.shift();
            part = partFromNodes(nodes);
        }
    }
    return part;
}
function isLastNodeQuantifierNode(nodes) {
    const lastNode = last(nodes), lastNodeQuantifierNode = (0, _bnf.isNodeQuantifierNode)(lastNode);
    return lastNodeQuantifierNode;
}
function collectionOfPartsPartFromPartAndRuleName(part, ruleName) {
    let collectionOfPartsPart;
    switch(ruleName){
        case _ruleNames.OPTIONAL_QUANTIFIER_RULE_NAME:
            const optionalPartPart = _optionalPart.default.fromPart(part);
            collectionOfPartsPart = optionalPartPart; ///
            break;
        case _ruleNames.ONE_OR_MORE_QUANTIFIER_RULE_NAME:
            const oneOrMorePartsPart = _oneOrMoreParts.default.fromPart(part);
            collectionOfPartsPart = oneOrMorePartsPart; ///
            break;
        case _ruleNames.ZERO_OR_MORE_QUANTIFIER_RULE_NAME:
            const zeroOrMorePartsPart = _zeroOrMoreParts.default.fromPart(part);
            collectionOfPartsPart = zeroOrMorePartsPart; ///
            break;
    }
    return collectionOfPartsPart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgaXNOb2RlUXVhbnRpZmllck5vZGUsIHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ibmZcIjtcbmltcG9ydCB7IE9QVElPTkFMX1FVQU5USUZJRVJfUlVMRV9OQU1FLCBPTkVfT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSwgWkVST19PUl9NT1JFX1FVQU5USUZJRVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Qk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChjYWxsQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFBhcnRCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2Rlcykge1xuICBsZXQgcGFydDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgY2FsbEFoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IGNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0ID0gY29sbGVjdGlvbk9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSkge1xuICBsZXQgY29sbGVjdGlvbk9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIE9QVElPTkFMX1FVQU5USUZJRVJfUlVMRV9OQU1FIDpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBPcHRpb25hbFBhcnRQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBPTkVfT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSA6XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBPbmVPck1vcmVQYXJ0c1BhcnQuZnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgWkVST19PUl9NT1JFX1FVQU5USUZJRVJfUlVMRV9OQU1FIDpcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQ7XG59XG4iXSwibmFtZXMiOlsiUGFydEJORk5vZGUiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJjYWxsQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwicGFydEZyb21Ob2RlcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGUiLCJwb3AiLCJsYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwiaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGUiLCJydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSIsImNvbGxlY3Rpb25PZlBhcnRzUGFydCIsImNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUiLCJzaGlmdCIsImxhc3ROb2RlIiwiaXNOb2RlUXVhbnRpZmllck5vZGUiLCJPUFRJT05BTF9RVUFOVElGSUVSX1JVTEVfTkFNRSIsIm9wdGlvbmFsUGFydFBhcnQiLCJPcHRpb25hbFBhcnRQYXJ0IiwiZnJvbVBhcnQiLCJPTkVfT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlpFUk9fT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQXFCQTs7OzJCQVpVO29FQUVIO3FFQUNDO3VFQUNFO3dFQUNDO3FCQUVpQzsyQkFDa0Q7Ozs7OztBQUVuSCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyx5QkFBYztBQUVoQixNQUFNRixvQkFBb0JHLG9CQUFlO0lBQ3REQyxhQUFhQyxTQUFTLEVBQUU7UUFDdEIsTUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLFFBQVFGLFdBQVdHLEtBQUssSUFDeEJDLE9BQU9DLGNBQWNIO1FBRTNCLE9BQU9FO0lBQ1Q7SUFFQSxPQUFPRSwyQ0FBMkNDLFFBQVEsRUFBRVAsVUFBVSxFQUFFUSxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9aLG9CQUFlLENBQUNTLDBDQUEwQyxDQUFDWixhQUFhYSxVQUFVUCxZQUFZUSxTQUFTQztJQUFhO0FBQzVOO0FBRUEsU0FBU0osY0FBY0gsS0FBSztJQUMxQixJQUFJRTtJQUVKLE1BQU1NLGNBQWNSLE1BQU1TLE1BQU07SUFFaEMsSUFBSUQsZ0JBQWdCLEdBQUc7UUFDckIsTUFBTUUsT0FBT1YsTUFBTVcsR0FBRyxJQUNoQmQsWUFBWTtRQUVsQkssT0FBT1EsS0FBS2QsWUFBWSxDQUFDQztJQUMzQixPQUFPO1FBQ0wsTUFBTWUseUJBQXlCQyx5QkFBeUJiO1FBRXhELElBQUlZLHdCQUF3QjtZQUMxQixNQUFNRixPQUFPVixNQUFNVyxHQUFHLElBQ2hCRyxpQkFBaUJKLE1BQU8sR0FBRztZQUVqQ1IsT0FBT0MsY0FBY0g7WUFFckIsTUFBTUssV0FBV1UsSUFBQUEsK0JBQTBCLEVBQUNELGlCQUN0Q0Usd0JBQXdCQyx5Q0FBeUNmLE1BQU1HO1lBRTdFSCxPQUFPYyx1QkFBdUIsR0FBRztRQUNuQyxPQUFPO1lBQ0xoQixNQUFNa0IsS0FBSztZQUVYaEIsT0FBT0MsY0FBY0g7UUFDdkI7SUFDRjtJQUVBLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTVyx5QkFBeUJiLEtBQUs7SUFDckMsTUFBTW1CLFdBQVcxQixLQUFLTyxRQUNoQlkseUJBQXlCUSxJQUFBQSx5QkFBb0IsRUFBQ0Q7SUFFcEQsT0FBT1A7QUFDVDtBQUVBLFNBQVNLLHlDQUF5Q2YsSUFBSSxFQUFFRyxRQUFRO0lBQzlELElBQUlXO0lBRUosT0FBUVg7UUFDTixLQUFLZ0Isd0NBQTZCO1lBQ2hDLE1BQU1DLG1CQUFtQkMscUJBQWdCLENBQUNDLFFBQVEsQ0FBQ3RCO1lBRW5EYyx3QkFBd0JNLGtCQUFrQixHQUFHO1lBQzdDO1FBRUYsS0FBS0csMkNBQWdDO1lBQ25DLE1BQU1DLHFCQUFxQkMsdUJBQWtCLENBQUNILFFBQVEsQ0FBQ3RCO1lBRXZEYyx3QkFBd0JVLG9CQUFvQixHQUFHO1lBQy9DO1FBRUYsS0FBS0UsNENBQWlDO1lBQ3BDLE1BQU1DLHNCQUFzQkMsd0JBQW1CLENBQUNOLFFBQVEsQ0FBQ3RCO1lBRXpEYyx3QkFBd0JhLHFCQUFzQixHQUFHO1lBQ2pEO0lBQ0o7SUFFQSxPQUFPYjtBQUNUIn0=