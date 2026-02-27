"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartOfContentPart;
    }
});
const _occamlexers = require("occam-lexers");
const _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
const _startOfContent = /*#__PURE__*/ _interop_require_default(require("../../node/terminal/startOfContent"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { startOfContent } = _occamlexers.specialSymbols;
class StartOfContentPart extends _terminal.default {
    isStartOfContentPart() {
        const startOfContentPart = true;
        return startOfContentPart;
    }
    parse(nodes, state, callback, callAhead) {
        let parsed;
        let startOfContentNode = null;
        const savedIndex = state.getSavedIndex(), atStartOfContent = state.isAtStartOfContent();
        if (atStartOfContent) {
            startOfContentNode = _startOfContent.default.fromNothing();
        }
        parsed = startOfContentNode !== null;
        if (parsed) {
            nodes.push(startOfContentNode);
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
        const string = startOfContent; ///
        return string;
    }
    static fromNothing() {
        const startOfContentPart = new StartOfContentPart();
        return startOfContentPart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3N0YXJ0T2ZDb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFN0YXJ0T2ZDb250ZW50Tm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtaW5hbC9zdGFydE9mQ29udGVudFwiO1xuXG5jb25zdCB7IHN0YXJ0T2ZDb250ZW50IH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRPZkNvbnRlbnRQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgaXNTdGFydE9mQ29udGVudFBhcnQoKSB7XG4gICAgY29uc3Qgc3RhcnRPZkNvbnRlbnRQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGFydE9mQ29udGVudFBhcnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IHN0YXJ0T2ZDb250ZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIGF0U3RhcnRPZkNvbnRlbnQgPSBzdGF0ZS5pc0F0U3RhcnRPZkNvbnRlbnQoKTtcblxuICAgIGlmIChhdFN0YXJ0T2ZDb250ZW50KSB7XG4gICAgICBzdGFydE9mQ29udGVudE5vZGUgPSBTdGFydE9mQ29udGVudE5vZGUuZnJvbU5vdGhpbmcoKTtcbiAgICB9XG5cbiAgICBwYXJzZWQgPSAoc3RhcnRPZkNvbnRlbnROb2RlICE9PSBudWxsKVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaChzdGFydE9mQ29udGVudE5vZGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIGlmIChjYWxsQWhlYWQgIT09IG51bGwpIHtcbiAgICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0YXJ0T2ZDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RhcnRPZkNvbnRlbnRQYXJ0ID0gbmV3IFN0YXJ0T2ZDb250ZW50UGFydCgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb250ZW50UGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXJ0T2ZDb250ZW50UGFydCIsInN0YXJ0T2ZDb250ZW50Iiwic3BlY2lhbFN5bWJvbHMiLCJUZXJtaW5hbFBhcnQiLCJpc1N0YXJ0T2ZDb250ZW50UGFydCIsInN0YXJ0T2ZDb250ZW50UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwic3RhcnRPZkNvbnRlbnROb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJhdFN0YXJ0T2ZDb250ZW50IiwiaXNBdFN0YXJ0T2ZDb250ZW50IiwiU3RhcnRPZkNvbnRlbnROb2RlIiwiZnJvbU5vdGhpbmciLCJwdXNoIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJzdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7NkJBUFU7aUVBRU47dUVBQ007Ozs7OztBQUUvQixNQUFNLEVBQUVDLGNBQWMsRUFBRSxHQUFHQywyQkFBYztBQUUxQixNQUFNRiwyQkFBMkJHLGlCQUFZO0lBQzFEQyx1QkFBdUI7UUFDckIsTUFBTUMscUJBQXFCO1FBRTNCLE9BQU9BO0lBQ1Q7SUFFQUMsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFO1FBQ3ZDLElBQUlDO1FBRUosSUFBSUMscUJBQXFCO1FBRXpCLE1BQU1DLGFBQWFMLE1BQU1NLGFBQWEsSUFDaENDLG1CQUFtQlAsTUFBTVEsa0JBQWtCO1FBRWpELElBQUlELGtCQUFrQjtZQUNwQkgscUJBQXFCSyx1QkFBa0IsQ0FBQ0MsV0FBVztRQUNyRDtRQUVBUCxTQUFVQyx1QkFBdUI7UUFFakMsSUFBSUQsUUFBUTtZQUNWSixNQUFNWSxJQUFJLENBQUNQO1lBRVgsSUFBSUQsUUFBUTtnQkFDVixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCQyxTQUFTRDtnQkFDWDtZQUNGO1FBQ0Y7UUFFQSxJQUFJLENBQUNDLFFBQVE7WUFDWEgsTUFBTVksU0FBUyxDQUFDUDtRQUNsQjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQVUsV0FBVztRQUNULE1BQU1DLFNBQVNyQixnQkFBZ0IsR0FBRztRQUVsQyxPQUFPcUI7SUFDVDtJQUVBLE9BQU9KLGNBQWM7UUFDbkIsTUFBTWIscUJBQXFCLElBQUlMO1FBRS9CLE9BQU9LO0lBQ1Q7QUFDRiJ9