"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    nodeFromChildNodesAndRuleName: function() {
        return nodeFromChildNodesAndRuleName;
    },
    nodesFromChildNodesAndRuleName: function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKSB7XG4gIGxldCBub2RlID0gbnVsbDtcblxuICBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcnVsZU5hbWUpO1xuXG4gICAgICBpZiAobm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSkge1xuICAgICAgICBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKSB7XG4gIGNvbnN0IG5vZGVzID0gY2hpbGROb2Rlcy5maWx0ZXIoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcnVsZU5hbWUpO1xuXG4gICAgICBpZiAobm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsIm5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsImNoaWxkTm9kZXMiLCJydWxlTmFtZSIsIm5vZGUiLCJzb21lIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSIsIm5vZGVzIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLDZCQUE2QjtlQUE3QkE7O0lBc0JBQyw4QkFBOEI7ZUFBOUJBOzs7QUF0QlQsU0FBU0QsOEJBQThCRSxVQUFVLEVBQUVDLFFBQVE7SUFDaEUsSUFBSUMsT0FBTztJQUVYRixXQUFXRyxJQUFJLENBQUMsU0FBQ0M7UUFDZixJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtRQUU1RCxJQUFJRCwwQkFBMEI7WUFDNUIsSUFBTUUsa0JBQWtCSCxXQUNsQkksMEJBQTBCRCxnQkFBZ0JFLFdBQVcsSUFDckRDLGtDQUFtQ0YsNEJBQTRCUDtZQUVyRSxJQUFJUyxpQ0FBaUM7Z0JBQ25DUixPQUFPRSxXQUFXLEdBQUc7Z0JBRXJCLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBU0gsK0JBQStCQyxVQUFVLEVBQUVDLFFBQVE7SUFDakUsSUFBTVUsUUFBUVgsV0FBV1ksTUFBTSxDQUFDLFNBQUNSO1FBQy9CLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCSSwwQkFBMEJELGdCQUFnQkUsV0FBVyxJQUNyREMsa0NBQW1DRiw0QkFBNEJQO1lBRXJFLElBQUlTLGlDQUFpQztnQkFDbkMsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9DO0FBQ1QifQ==