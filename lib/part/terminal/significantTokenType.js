"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SignificantTokenTypePart;
    }
});
const _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
const _terminal1 = /*#__PURE__*/ _interop_require_default(require("../../node/terminal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SignificantTokenTypePart extends _terminal.default {
    constructor(significantTokenType){
        super();
        this.significantTokenType = significantTokenType;
    }
    getSignificantTokenType() {
        return this.significantTokenType;
    }
    parse(nodes, state, callback, callAhead) {
        let parsed;
        let terminalNode = null;
        const savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
        if (significantToken !== null) {
            const significantTokenType = significantToken.getType();
            if (significantTokenType === this.significantTokenType) {
                terminalNode = _terminal1.default.fromSignificantToken(significantToken);
            }
        }
        parsed = terminalNode !== null;
        if (parsed) {
            nodes.push(terminalNode);
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
        const string = `[${this.significantTokenType}]`;
        return string;
    }
    static fromSignificantTokenType(significantTokenType) {
        const significantTokenTypePart = new SignificantTokenTypePart(significantTokenType);
        return significantTokenTypePart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gc3RhdGUuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSxcblx0XHRcdFx0XHRzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCk7XG5cbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuVHlwZSA9PT0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKHRlcm1pbmFsTm9kZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2Rlcy5wdXNoKHRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgaWYgKGNhbGxBaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYFske3RoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGV9XWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGUoc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KHNpZ25pZmljYW50VG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJUZXJtaW5hbFBhcnQiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0VHlwZSIsIlRlcm1pbmFsTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwicHVzaCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7O2lFQUhJO2tFQUNBOzs7Ozs7QUFFVixNQUFNQSxpQ0FBaUNDLGlCQUFZO0lBQ2hFLFlBQVlDLG9CQUFvQixDQUFFO1FBQ2hDLEtBQUs7UUFFTCxJQUFJLENBQUNBLG9CQUFvQixHQUFHQTtJQUM5QjtJQUVBQywwQkFBMEI7UUFDeEIsT0FBTyxJQUFJLENBQUNELG9CQUFvQjtJQUNsQztJQUVBRSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUU7UUFDdkMsSUFBSUM7UUFFSixJQUFJQyxlQUFlO1FBRW5CLE1BQU1DLGFBQWFMLE1BQU1NLGFBQWEsSUFDaENDLHVCQUF1QlAsTUFBTVEsdUJBQXVCLElBQ3pEQyxtQkFBbUJGLHNCQUFzQixHQUFHO1FBRTdDLElBQUlFLHFCQUFxQixNQUFNO1lBQzdCLE1BQU1iLHVCQUF1QmEsaUJBQWlCQyxPQUFPO1lBRXJELElBQUlkLHlCQUF5QixJQUFJLENBQUNBLG9CQUFvQixFQUFFO2dCQUN0RFEsZUFBZU8sa0JBQVksQ0FBQ0Msb0JBQW9CLENBQUNIO1lBQ25EO1FBQ0Y7UUFFQU4sU0FBVUMsaUJBQWlCO1FBRTNCLElBQUlELFFBQVE7WUFDVkosTUFBTWMsSUFBSSxDQUFDVDtZQUVYLElBQUlELFFBQVE7Z0JBQ1YsSUFBSUQsY0FBYyxNQUFNO29CQUN0QkMsU0FBU0Q7Z0JBQ1g7WUFDRjtRQUNGO1FBRUEsSUFBSSxDQUFDQyxRQUFRO1lBQ1hILE1BQU1jLFNBQVMsQ0FBQ1Q7UUFDbEI7UUFFQSxPQUFPRjtJQUNUO0lBRUFZLFdBQVc7UUFDVCxNQUFNQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ3BCLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUUvQyxPQUFPb0I7SUFDVDtJQUVBLE9BQU9DLHlCQUF5QnJCLG9CQUFvQixFQUFFO1FBQ3BELE1BQU1zQiwyQkFBMkIsSUFBSXhCLHlCQUF5QkU7UUFFOUQsT0FBT3NCO0lBQ1Q7QUFDRiJ9