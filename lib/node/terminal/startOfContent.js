"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartOfContentNode;
    }
});
const _terminal = /*#__PURE__*/ _interop_require_default(require("../terminal"));
const _startOfContentNode = /*#__PURE__*/ _interop_require_default(require("../../parseTree/startOfContentNode"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StartOfContentNode extends _terminal.default {
    getType() {
        const type = null; ///
        return type;
    }
    getContent() {
        const content = _constants.EMPTY_STRING;
        return content;
    }
    isStartOfContentNode() {
        const startOfContentNode = true;
        return startOfContentNode;
    }
    asParseTree(tokens) {
        const startOfContentNodeParseTree = _startOfContentNode.default.fromNothing(), parseTree = startOfContentNodeParseTree; ///
        return parseTree;
    }
    match(node, depth) {
        let matches = false;
        const nodeTerminalNode = node.isTerminalNode();
        if (nodeTerminalNode) {
            const terminalNode = node, terminalNodeStartOfContentNode = terminalNode.isStartOfContentNode();
            if (terminalNodeStartOfContentNode) {
                matches = true;
            }
        }
        return matches;
    }
    static fromNothing() {
        return _terminal.default.fromNothing(StartOfContentNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL3N0YXJ0T2ZDb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi90ZXJtaW5hbFwiO1xuaW1wb3J0IFN0YXJ0T2ZDb250ZW50Tm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vLi4vcGFyc2VUcmVlL3N0YXJ0T2ZDb250ZW50Tm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0T2ZDb250ZW50Tm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpc1N0YXJ0T2ZDb250ZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGFydE9mQ29udGVudE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb250ZW50Tm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHN0YXJ0T2ZDb250ZW50Tm9kZVBhcnNlVHJlZSA9IFN0YXJ0T2ZDb250ZW50Tm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHN0YXJ0T2ZDb250ZW50Tm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlU3RhcnRPZkNvbnRlbnROb2RlID0gdGVybWluYWxOb2RlLmlzU3RhcnRPZkNvbnRlbnROb2RlKCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVTdGFydE9mQ29udGVudE5vZGUpIHtcbiAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBUZXJtaW5hbE5vZGUuZnJvbU5vdGhpbmcoU3RhcnRPZkNvbnRlbnROb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXJ0T2ZDb250ZW50Tm9kZSIsIlRlcm1pbmFsTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJpc1N0YXJ0T2ZDb250ZW50Tm9kZSIsInN0YXJ0T2ZDb250ZW50Tm9kZSIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwic3RhcnRPZkNvbnRlbnROb2RlUGFyc2VUcmVlIiwiU3RhcnRPZkNvbnRlbnROb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJtYXRjaCIsIm5vZGUiLCJkZXB0aCIsIm1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVTdGFydE9mQ29udGVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7aUVBTEk7MkVBQ2U7MkJBRVg7Ozs7OztBQUVkLE1BQU1BLDJCQUEyQkMsaUJBQVk7SUFDMURDLFVBQVU7UUFDUixNQUFNQyxPQUFPLE1BQU8sR0FBRztRQUV2QixPQUFPQTtJQUNUO0lBRUFDLGFBQWE7UUFDWCxNQUFNQyxVQUFVQyx1QkFBWTtRQUU1QixPQUFPRDtJQUNUO0lBRUFFLHVCQUF1QjtRQUNyQixNQUFNQyxxQkFBcUI7UUFFM0IsT0FBT0E7SUFDVDtJQUVBQyxZQUFZQyxNQUFNLEVBQUU7UUFDbEIsTUFBTUMsOEJBQThCQywyQkFBMkIsQ0FBQ0MsV0FBVyxJQUNyRUMsWUFBWUgsNkJBQThCLEdBQUc7UUFFbkQsT0FBT0c7SUFDVDtJQUVBQyxNQUFNQyxJQUFJLEVBQUVDLEtBQUssRUFBRTtRQUNqQixJQUFJQyxVQUFVO1FBRWQsTUFBTUMsbUJBQW1CSCxLQUFLSSxjQUFjO1FBRTVDLElBQUlELGtCQUFrQjtZQUNwQixNQUFNRSxlQUFlTCxNQUNmTSxpQ0FBaUNELGFBQWFkLG9CQUFvQjtZQUV4RSxJQUFJZSxnQ0FBZ0M7Z0JBQ2xDSixVQUFVO1lBQ1o7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTCxjQUFjO1FBQUUsT0FBT1osaUJBQVksQ0FBQ1ksV0FBVyxDQUFDYjtJQUFxQjtBQUM5RSJ9