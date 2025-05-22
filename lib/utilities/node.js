"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get nodeFromChildNodesAndRuleName () {
        return nodeFromChildNodesAndRuleName;
    },
    get nodesFromChildNodesAndRuleName () {
        return nodesFromChildNodesAndRuleName;
    }
});
function nodeFromChildNodesAndRuleName(childNodes, ruleName) {
    var node = null;
    childNodes.some(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, nonTerminalNodeRuleName = nonTerminalNode.getRuleName(), nonTerminalNodeRuleNameRuleName = nonTerminalNodeRuleName === ruleName;
            if (nonTerminalNodeRuleNameRuleName) {
                node = childNode; ///
                return true;
            }
        }
    });
    return node;
}
function nodesFromChildNodesAndRuleName(childNodes, ruleName) {
    var nodes = childNodes.filter(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, nonTerminalNodeRuleName = nonTerminalNode.getRuleName(), nonTerminalNodeRuleNameRuleName = nonTerminalNodeRuleName === ruleName;
            if (nonTerminalNodeRuleNameRuleName) {
                return true;
            }
        }
    });
    return nodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKSB7XG4gIGxldCBub2RlID0gbnVsbDtcblxuICBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcnVsZU5hbWUpO1xuXG4gICAgICBpZiAobm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSkge1xuICAgICAgICBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKSB7XG4gIGNvbnN0IG5vZGVzID0gY2hpbGROb2Rlcy5maWx0ZXIoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcnVsZU5hbWUpO1xuXG4gICAgICBpZiAobm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsIm5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsImNoaWxkTm9kZXMiLCJydWxlTmFtZSIsIm5vZGUiLCJzb21lIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSIsIm5vZGVzIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFFZ0JBO2VBQUFBOztRQXNCQUM7ZUFBQUE7OztBQXRCVCxTQUFTRCw4QkFBOEJFLFVBQVUsRUFBRUMsUUFBUTtJQUNoRSxJQUFJQyxPQUFPO0lBRVhGLFdBQVdHLElBQUksQ0FBQyxTQUFDQztRQUNmLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCSSwwQkFBMEJELGdCQUFnQkUsV0FBVyxJQUNyREMsa0NBQW1DRiw0QkFBNEJQO1lBRXJFLElBQUlTLGlDQUFpQztnQkFDbkNSLE9BQU9FLFdBQVcsR0FBRztnQkFFckIsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTSCwrQkFBK0JDLFVBQVUsRUFBRUMsUUFBUTtJQUNqRSxJQUFNVSxRQUFRWCxXQUFXWSxNQUFNLENBQUMsU0FBQ1I7UUFDL0IsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1FLGtCQUFrQkgsV0FDbEJJLDBCQUEwQkQsZ0JBQWdCRSxXQUFXLElBQ3JEQyxrQ0FBbUNGLDRCQUE0QlA7WUFFckUsSUFBSVMsaUNBQWlDO2dCQUNuQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT0M7QUFDVCJ9