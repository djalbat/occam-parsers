"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RegularExpressionPart;
    }
});
const _necessary = require("necessary");
const _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
const _terminal1 = /*#__PURE__*/ _interop_require_default(require("../../node/terminal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities;
class RegularExpressionPart extends _terminal.default {
    constructor(regularExpression){
        super();
        this.regularExpression = regularExpression;
    }
    getRegularExpression() {
        return this.regularExpression;
    }
    parse(nodes, state, callback, callAhead) {
        let parsed;
        let terminalNode = null;
        const savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
        if (significantToken !== null) {
            const content = significantToken.getContent(), matches = content.match(this.regularExpression);
            if (matches !== null) {
                const firstMatch = first(matches);
                if (firstMatch === content) {
                    terminalNode = _terminal1.default.fromSignificantToken(significantToken);
                }
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
        const regularExpressionString = this.regularExpression.toString(), string = regularExpressionString; ///
        return string;
    }
    static fromRegularExpression(regularExpression) {
        const regularExpressionPart = new RegularExpressionPart(regularExpression);
        return regularExpressionPart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtaW5hbFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocmVndWxhckV4cHJlc3Npb24pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHN0YXRlLmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG5cdFx0XHRcdFx0c2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdE1hdGNoID09PSBjb250ZW50KSB7XG4gICAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKHRlcm1pbmFsTm9kZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2Rlcy5wdXNoKHRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgaWYgKGNhbGxBaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uLnRvU3RyaW5nKCksXG5cdFx0ICAgICAgc3RyaW5nID0gcmVndWxhckV4cHJlc3Npb25TdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVndWxhckV4cHJlc3Npb24ocmVndWxhckV4cHJlc3Npb24pIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiVGVybWluYWxQYXJ0IiwicmVndWxhckV4cHJlc3Npb24iLCJnZXRSZWd1bGFyRXhwcmVzc2lvbiIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsIlRlcm1pbmFsTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwicHVzaCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicmVndWxhckV4cHJlc3Npb25TdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsImZyb21SZWd1bGFyRXhwcmVzc2lvbiIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7OzsyQkFQVTtpRUFFTjtrRUFDQTs7Ozs7O0FBRXpCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO0FBRWpCLE1BQU1GLDhCQUE4QkcsaUJBQVk7SUFDN0QsWUFBWUMsaUJBQWlCLENBQUU7UUFDN0IsS0FBSztRQUVMLElBQUksQ0FBQ0EsaUJBQWlCLEdBQUdBO0lBQzNCO0lBRUFDLHVCQUF1QjtRQUNyQixPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO0lBQy9CO0lBRUFFLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRTtRQUN2QyxJQUFJQztRQUVKLElBQUlDLGVBQWU7UUFFbkIsTUFBTUMsYUFBYUwsTUFBTU0sYUFBYSxJQUNoQ0MsdUJBQXVCUCxNQUFNUSx1QkFBdUIsSUFDekRDLG1CQUFtQkYsc0JBQXNCLEdBQUc7UUFFN0MsSUFBSUUscUJBQXFCLE1BQU07WUFDN0IsTUFBTUMsVUFBVUQsaUJBQWlCRSxVQUFVLElBQ3JDQyxVQUFVRixRQUFRRyxLQUFLLENBQUMsSUFBSSxDQUFDakIsaUJBQWlCO1lBRXBELElBQUlnQixZQUFZLE1BQU07Z0JBQ3BCLE1BQU1FLGFBQWFyQixNQUFNbUI7Z0JBRXpCLElBQUlFLGVBQWVKLFNBQVM7b0JBQzFCTixlQUFlVyxrQkFBWSxDQUFDQyxvQkFBb0IsQ0FBQ1A7Z0JBQ25EO1lBQ0Y7UUFDRjtRQUVBTixTQUFVQyxpQkFBaUI7UUFFM0IsSUFBSUQsUUFBUTtZQUNWSixNQUFNa0IsSUFBSSxDQUFDYjtZQUVYLElBQUlELFFBQVE7Z0JBQ1YsSUFBSUQsY0FBYyxNQUFNO29CQUN0QkMsU0FBU0Q7Z0JBQ1g7WUFDRjtRQUNGO1FBRUEsSUFBSSxDQUFDQyxRQUFRO1lBQ1hILE1BQU1rQixTQUFTLENBQUNiO1FBQ2xCO1FBRUEsT0FBT0Y7SUFDVDtJQUVBZ0IsV0FBVztRQUNULE1BQU1DLDBCQUEwQixJQUFJLENBQUN4QixpQkFBaUIsQ0FBQ3lCLFFBQVEsSUFDM0RDLFNBQVNGLHlCQUF5QixHQUFHO1FBRXpDLE9BQU9FO0lBQ1Q7SUFFQSxPQUFPQyxzQkFBc0IzQixpQkFBaUIsRUFBRTtRQUM5QyxNQUFNNEIsd0JBQXdCLElBQUloQyxzQkFBc0JJO1FBRXhELE9BQU80QjtJQUNUO0FBQ0YifQ==