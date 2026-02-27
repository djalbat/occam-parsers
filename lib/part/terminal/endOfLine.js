"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLinePart;
    }
});
const _occamlexers = require("occam-lexers");
const _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
const _endOfLine = /*#__PURE__*/ _interop_require_default(require("../../node/terminal/endOfLine"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { endOfLine } = _occamlexers.specialSymbols;
class EndOfLinePart extends _terminal.default {
    parse(nodes, state, callback, callAhead) {
        let parsed;
        let endOfLineNode = null;
        const savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
        if (significantToken !== null) {
            const significantTokenEndOfLineToken = significantToken.isEndOfLineToken();
            if (significantTokenEndOfLineToken) {
                endOfLineNode = _endOfLine.default.fromSignificantToken(significantToken);
            }
        }
        parsed = endOfLineNode !== null;
        if (parsed) {
            nodes.push(endOfLineNode);
            if (parsed) {
                if (callAhead !== null) {
                    parsed = callAhead();
                }
            }
        }
        if (!parsed) {
            state.backtrack(savedIndex);
        }
        return parsed;
    }
    asString() {
        const string = endOfLine; ///
        return string;
    }
    static fromNothing() {
        const endOfLinePart = new EndOfLinePart();
        return endOfLinePart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBFbmRPZkxpbmVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZVwiO1xuXG5jb25zdCB7IGVuZE9mTGluZSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IGVuZE9mTGluZU5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBzdGF0ZS5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgZW5kT2ZMaW5lTm9kZSA9IEVuZE9mTGluZU5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKGVuZE9mTGluZU5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaChlbmRPZkxpbmVOb2RlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBlbmRPZkxpbmU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQoKTtcblxuICAgIHJldHVybiBlbmRPZkxpbmVQYXJ0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsImVuZE9mTGluZSIsInNwZWNpYWxTeW1ib2xzIiwiVGVybWluYWxQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJlbmRPZkxpbmVOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tTm90aGluZyIsImVuZE9mTGluZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7NkJBUFU7aUVBRU47a0VBQ0M7Ozs7OztBQUUxQixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQywyQkFBYztBQUVyQixNQUFNRixzQkFBc0JHLGlCQUFZO0lBQ3JEQyxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUU7UUFDdkMsSUFBSUM7UUFFSixJQUFJQyxnQkFBZ0I7UUFFcEIsTUFBTUMsYUFBYUwsTUFBTU0sYUFBYSxJQUNoQ0MsdUJBQXVCUCxNQUFNUSx1QkFBdUIsSUFDcERDLG1CQUFtQkYsc0JBQXNCLEdBQUc7UUFFbEQsSUFBSUUscUJBQXFCLE1BQU07WUFDN0IsTUFBTUMsaUNBQWlDRCxpQkFBaUJFLGdCQUFnQjtZQUV4RSxJQUFJRCxnQ0FBZ0M7Z0JBQ2xDTixnQkFBZ0JRLGtCQUFhLENBQUNDLG9CQUFvQixDQUFDSjtZQUNyRDtRQUNGO1FBRUFOLFNBQVVDLGtCQUFrQjtRQUU1QixJQUFJRCxRQUFRO1lBQ1ZKLE1BQU1lLElBQUksQ0FBQ1Y7WUFFWCxJQUFJRCxRQUFRO2dCQUNWLElBQUlELGNBQWMsTUFBTTtvQkFDdEJDLFNBQVNEO2dCQUNYO1lBQ0Y7UUFDRjtRQUVBLElBQUksQ0FBQ0MsUUFBUTtZQUNYSCxNQUFNZSxTQUFTLENBQUNWO1FBQ2xCO1FBRUEsT0FBT0Y7SUFDVDtJQUVBYSxXQUFXO1FBQ1QsTUFBTUMsU0FBU3RCLFdBQVcsR0FBRztRQUU3QixPQUFPc0I7SUFDVDtJQUVBLE9BQU9DLGNBQWM7UUFDbkIsTUFBTUMsZ0JBQWdCLElBQUl6QjtRQUUxQixPQUFPeUI7SUFDVDtBQUNGIn0=