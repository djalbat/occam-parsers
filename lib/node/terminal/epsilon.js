"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonNode;
    }
});
const _occamlexers = require("occam-lexers");
const _terminal = /*#__PURE__*/ _interop_require_default(require("../terminal"));
const _epsilonNode = /*#__PURE__*/ _interop_require_default(require("../../parseTree/epsilonNode"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { epsilon } = _occamlexers.specialSymbols;
class EpsilonNode extends _terminal.default {
    getType() {
        const type = null; ///
        return type;
    }
    getContent() {
        const content = epsilon; ///
        return content;
    }
    isEpsilonNode() {
        const epsilonNode = true;
        return epsilonNode;
    }
    asParseTree(tokens) {
        const epsilonNodeParseTree = _epsilonNode.default.fromNothing(), parseTree = epsilonNodeParseTree; ///
        return parseTree;
    }
    match(node, depth) {
        let matches = false;
        const nodeTerminalNode = node.isTerminalNode();
        if (nodeTerminalNode) {
            const terminalNode = node, terminalNodeEpsilonNode = terminalNode.isEpsilonNode();
            if (terminalNodeEpsilonNode) {
                matches = true;
            }
        }
        return matches;
    }
    static fromNothing() {
        return _terminal.default.fromNothing(EpsilonNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi90ZXJtaW5hbFwiO1xuaW1wb3J0IEVwc2lsb25Ob2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvZXBzaWxvbk5vZGVcIjtcblxuY29uc3QgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvbk5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVwc2lsb247ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaXNFcHNpbG9uTm9kZSgpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IEVwc2lsb25Ob2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvbk5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBtYXRjaChub2RlLCBkZXB0aCkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlID0gdGVybWluYWxOb2RlLmlzRXBzaWxvbk5vZGUoKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gVGVybWluYWxOb2RlLmZyb21Ob3RoaW5nKEVwc2lsb25Ob2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkVwc2lsb25Ob2RlIiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiVGVybWluYWxOb2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJnZXRDb250ZW50IiwiY29udGVudCIsImlzRXBzaWxvbk5vZGUiLCJlcHNpbG9uTm9kZSIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwiZXBzaWxvbk5vZGVQYXJzZVRyZWUiLCJFcHNpbG9uTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwibWF0Y2giLCJub2RlIiwiZGVwdGgiLCJtYXRjaGVzIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlRXBzaWxvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7NkJBUFU7aUVBRU47b0VBQ1E7Ozs7OztBQUVqQyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHQywyQkFBYztBQUVuQixNQUFNRixvQkFBb0JHLGlCQUFZO0lBQ25EQyxVQUFVO1FBQ1IsTUFBTUMsT0FBTyxNQUFPLEdBQUc7UUFFdkIsT0FBT0E7SUFDVDtJQUVBQyxhQUFhO1FBQ1gsTUFBTUMsVUFBVU4sU0FBVSxHQUFHO1FBRTdCLE9BQU9NO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsY0FBYztRQUVwQixPQUFPQTtJQUNUO0lBRUFDLFlBQVlDLE1BQU0sRUFBRTtRQUNsQixNQUFNQyx1QkFBdUJDLG9CQUFvQixDQUFDQyxXQUFXLElBQ3ZEQyxZQUFZSCxzQkFBdUIsR0FBRztRQUU1QyxPQUFPRztJQUNUO0lBRUFDLE1BQU1DLElBQUksRUFBRUMsS0FBSyxFQUFFO1FBQ2pCLElBQUlDLFVBQVU7UUFFZCxNQUFNQyxtQkFBbUJILEtBQUtJLGNBQWM7UUFFNUMsSUFBSUQsa0JBQWtCO1lBQ3BCLE1BQU1FLGVBQWVMLE1BQ2ZNLDBCQUEwQkQsYUFBYWQsYUFBYTtZQUUxRCxJQUFJZSx5QkFBeUI7Z0JBQzNCSixVQUFVO1lBQ1o7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTCxjQUFjO1FBQUUsT0FBT1gsaUJBQVksQ0FBQ1csV0FBVyxDQUFDZDtJQUFjO0FBQ3ZFIn0=