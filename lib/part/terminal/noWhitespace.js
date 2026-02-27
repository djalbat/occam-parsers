"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoWhitespacePart;
    }
});
const _occamlexers = require("occam-lexers");
const _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
const _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../../node/terminal/noWhitespace"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { noWhitespace } = _occamlexers.specialSymbols;
class NoWhitespacePart extends _terminal.default {
    isNoWhitespacePart() {
        const noWhitespacePart = true;
        return noWhitespacePart;
    }
    parse(nodes, state, callback, callAhead) {
        let parsed;
        let noWhitespaceNode = null;
        const savedIndex = state.getSavedIndex(), nextTokenWhitespaceToken = state.isNextTokenWhitespaceToken();
        if (!nextTokenWhitespaceToken) {
            noWhitespaceNode = _noWhitespace.default.fromNothing();
        }
        parsed = noWhitespaceNode !== null;
        if (parsed) {
            nodes.push(noWhitespaceNode);
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
        const string = noWhitespace; ///
        return string;
    }
    static fromNothing() {
        const noWhitespacePart = new NoWhitespacePart();
        return noWhitespacePart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL25vV2hpdGVzcGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuXG5jb25zdCB7IG5vV2hpdGVzcGFjZSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBpc05vV2hpdGVzcGFjZVBhcnQoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlUGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBsZXQgbm9XaGl0ZXNwYWNlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IHN0YXRlLmlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICBpZiAoIW5leHRUb2tlbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgbm9XaGl0ZXNwYWNlTm9kZSA9IE5vV2hpdGVzcGFjZU5vZGUuZnJvbU5vdGhpbmcoKTtcbiAgICB9XG5cbiAgICBwYXJzZWQgPSAobm9XaGl0ZXNwYWNlTm9kZSAhPT0gbnVsbClcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2gobm9XaGl0ZXNwYWNlTm9kZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgaWYgKGNhbGxBaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0KCk7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vV2hpdGVzcGFjZVBhcnQiLCJub1doaXRlc3BhY2UiLCJzcGVjaWFsU3ltYm9scyIsIlRlcm1pbmFsUGFydCIsImlzTm9XaGl0ZXNwYWNlUGFydCIsIm5vV2hpdGVzcGFjZVBhcnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsIm5vV2hpdGVzcGFjZU5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiTm9XaGl0ZXNwYWNlTm9kZSIsImZyb21Ob3RoaW5nIiwicHVzaCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXFCQTs7OzZCQVBVO2lFQUVOO3FFQUNJOzs7Ozs7QUFFN0IsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR0MsMkJBQWM7QUFFeEIsTUFBTUYseUJBQXlCRyxpQkFBWTtJQUN4REMscUJBQXFCO1FBQ25CLE1BQU1DLG1CQUFtQjtRQUV6QixPQUFPQTtJQUNUO0lBRUFDLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRTtRQUN2QyxJQUFJQztRQUVKLElBQUlDLG1CQUFtQjtRQUV2QixNQUFNQyxhQUFhTCxNQUFNTSxhQUFhLElBQ2hDQywyQkFBMkJQLE1BQU1RLDBCQUEwQjtRQUVqRSxJQUFJLENBQUNELDBCQUEwQjtZQUM3QkgsbUJBQW1CSyxxQkFBZ0IsQ0FBQ0MsV0FBVztRQUNqRDtRQUVBUCxTQUFVQyxxQkFBcUI7UUFFL0IsSUFBSUQsUUFBUTtZQUNWSixNQUFNWSxJQUFJLENBQUNQO1lBRVgsSUFBSUQsUUFBUTtnQkFDVixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCQyxTQUFTRDtnQkFDWDtZQUNGO1FBQ0Y7UUFFQSxJQUFJLENBQUNDLFFBQVE7WUFDWEgsTUFBTVksU0FBUyxDQUFDUDtRQUNsQjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQVUsV0FBVztRQUNULE1BQU1DLFNBQVNyQixjQUFjLEdBQUc7UUFFaEMsT0FBT3FCO0lBQ1Q7SUFFQSxPQUFPSixjQUFjO1FBQ25CLE1BQU1iLG1CQUFtQixJQUFJTDtRQUU3QixPQUFPSztJQUNUO0FBQ0YifQ==