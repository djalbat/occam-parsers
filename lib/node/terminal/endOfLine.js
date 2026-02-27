"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineNode;
    }
});
const _terminal = /*#__PURE__*/ _interop_require_default(require("../terminal"));
const _endOfLineNode = /*#__PURE__*/ _interop_require_default(require("../../parseTree/endOfLineNode"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EndOfLineNode extends _terminal.default {
    getContent(faithful = false) {
        const content = faithful ? super.getContent() : _constants.EMPTY_STRING; ///
        return content;
    }
    asParseTree(tokens) {
        const endOfLineNodeParseTree = _endOfLineNode.default.fromNothing(), parseTree = endOfLineNodeParseTree; ///
        return parseTree;
    }
    static fromSignificantToken(significantToken) {
        return _terminal.default.fromSignificantToken(EndOfLineNode, significantToken);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvZW5kT2ZMaW5lTm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZU5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRDb250ZW50KGZhaXRoZnVsID0gZmFsc2UpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZmFpdGhmdWwgP1xuICAgICAgICAgICAgICAgICAgICAgIHN1cGVyLmdldENvbnRlbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVOb2RlUGFyc2VUcmVlID0gRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IGVuZE9mTGluZU5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbikgeyByZXR1cm4gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKEVuZE9mTGluZU5vZGUsIHNpZ25pZmljYW50VG9rZW4pOyB9XG59XG4iXSwibmFtZXMiOlsiRW5kT2ZMaW5lTm9kZSIsIlRlcm1pbmFsTm9kZSIsImdldENvbnRlbnQiLCJmYWl0aGZ1bCIsImNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJhc1BhcnNlVHJlZSIsInRva2VucyIsImVuZE9mTGluZU5vZGVQYXJzZVRyZWUiLCJFbmRPZkxpbmVOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7aUVBTEk7c0VBQ1U7MkJBRU47Ozs7OztBQUVkLE1BQU1BLHNCQUFzQkMsaUJBQVk7SUFDckRDLFdBQVdDLFdBQVcsS0FBSyxFQUFFO1FBQzNCLE1BQU1DLFVBQVVELFdBQ0UsS0FBSyxDQUFDRCxlQUNKRyx1QkFBWSxFQUFFLEdBQUc7UUFFckMsT0FBT0Q7SUFDVDtJQUVBRSxZQUFZQyxNQUFNLEVBQUU7UUFDbEIsTUFBTUMseUJBQXlCQyxzQkFBc0IsQ0FBQ0MsV0FBVyxJQUMzREMsWUFBWUgsd0JBQXlCLEdBQUc7UUFFOUMsT0FBT0c7SUFDVDtJQUVBLE9BQU9DLHFCQUFxQkMsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPWixpQkFBWSxDQUFDVyxvQkFBb0IsQ0FBQ1osZUFBZWE7SUFBbUI7QUFDN0gifQ==