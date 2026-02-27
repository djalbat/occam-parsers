"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoWhitespaceNode;
    }
});
const _terminal = /*#__PURE__*/ _interop_require_default(require("../terminal"));
const _noWhitespaceNode = /*#__PURE__*/ _interop_require_default(require("../../parseTree/noWhitespaceNode"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NoWhitespaceNode extends _terminal.default {
    getType() {
        const type = null; ///
        return type;
    }
    getContent() {
        const content = _constants.EMPTY_STRING;
        return content;
    }
    isNoWhitespaceNode() {
        const noWhitespaceNode = true;
        return noWhitespaceNode;
    }
    asParseTree(tokens) {
        const noWhitespaceNodeParseTree = _noWhitespaceNode.default.fromNothing(), parseTree = noWhitespaceNodeParseTree; ///
        return parseTree;
    }
    match(node, depth) {
        let matches = false;
        const nodeTerminalNode = node.isTerminalNode();
        if (nodeTerminalNode) {
            const terminalNode = node, terminalNodeNoWhitespaceNode = terminalNode.isNoWhitespaceNode();
            if (terminalNodeNoWhitespaceNode) {
                matches = true;
            }
        }
        return matches;
    }
    static fromNothing() {
        return _terminal.default.fromNothing(NoWhitespaceNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL25vV2hpdGVzcGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvbm9XaGl0ZXNwYWNlTm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZU5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaXNOb1doaXRlc3BhY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZU5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlID0gTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBtYXRjaChub2RlLCBkZXB0aCkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU5vV2hpdGVzcGFjZU5vZGUgPSB0ZXJtaW5hbE5vZGUuaXNOb1doaXRlc3BhY2VOb2RlKCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVOb1doaXRlc3BhY2VOb2RlKSB7XG4gICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gVGVybWluYWxOb2RlLmZyb21Ob3RoaW5nKE5vV2hpdGVzcGFjZU5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiTm9XaGl0ZXNwYWNlTm9kZSIsIlRlcm1pbmFsTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJpc05vV2hpdGVzcGFjZU5vZGUiLCJub1doaXRlc3BhY2VOb2RlIiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIiwiTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwibWF0Y2giLCJub2RlIiwiZGVwdGgiLCJtYXRjaGVzIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlTm9XaGl0ZXNwYWNlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztpRUFMSTt5RUFDYTsyQkFFVDs7Ozs7O0FBRWQsTUFBTUEseUJBQXlCQyxpQkFBWTtJQUN4REMsVUFBVTtRQUNSLE1BQU1DLE9BQU8sTUFBTyxHQUFHO1FBRXZCLE9BQU9BO0lBQ1Q7SUFFQUMsYUFBYTtRQUNYLE1BQU1DLFVBQVVDLHVCQUFZO1FBRTVCLE9BQU9EO0lBQ1Q7SUFFQUUscUJBQXFCO1FBQ25CLE1BQU1DLG1CQUFtQjtRQUV6QixPQUFPQTtJQUNUO0lBRUFDLFlBQVlDLE1BQU0sRUFBRTtRQUNsQixNQUFNQyw0QkFBNEJDLHlCQUF5QixDQUFDQyxXQUFXLElBQ2pFQyxZQUFZSCwyQkFBNEIsR0FBRztRQUVqRCxPQUFPRztJQUNUO0lBRUFDLE1BQU1DLElBQUksRUFBRUMsS0FBSyxFQUFFO1FBQ2pCLElBQUlDLFVBQVU7UUFFZCxNQUFNQyxtQkFBbUJILEtBQUtJLGNBQWM7UUFFNUMsSUFBSUQsa0JBQWtCO1lBQ3BCLE1BQU1FLGVBQWVMLE1BQ2ZNLCtCQUErQkQsYUFBYWQsa0JBQWtCO1lBRXBFLElBQUllLDhCQUE4QjtnQkFDaENKLFVBQVU7WUFDWjtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE9BQU9MLGNBQWM7UUFBRSxPQUFPWixpQkFBWSxDQUFDWSxXQUFXLENBQUNiO0lBQW1CO0FBQzVFIn0=