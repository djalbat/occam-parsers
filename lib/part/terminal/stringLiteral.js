"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StringLiteralPart;
    }
});
const _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
const _terminal1 = /*#__PURE__*/ _interop_require_default(require("../../node/terminal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StringLiteralPart extends _terminal.default {
    constructor(content){
        super();
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    parse(nodes, state, callback, callAhead) {
        let parsed;
        let terminalNode = null;
        const savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
        if (significantToken !== null) {
            const content = significantToken.getContent();
            if (content === this.content) {
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
        const content = this.content.replace(/\\/, "\\\\"), string = `"${content}"`;
        return string;
    }
    static fromContent(content) {
        const stringLiteralPart = new StringLiteralPart(content);
        return stringLiteralPart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3N0cmluZ0xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvdGVybWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nTGl0ZXJhbFBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBzdGF0ZS5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gdGhpcy5jb250ZW50KSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAodGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2godGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZSgvXFxcXC8sIFwiXFxcXFxcXFxcIiksXG4gICAgICAgICAgc3RyaW5nID0gYFwiJHtjb250ZW50fVwiYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzdHJpbmdMaXRlcmFsUGFydCA9IG5ldyBTdHJpbmdMaXRlcmFsUGFydChjb250ZW50KTtcblxuICAgIHJldHVybiBzdHJpbmdMaXRlcmFsUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0cmluZ0xpdGVyYWxQYXJ0IiwiVGVybWluYWxQYXJ0IiwiY29udGVudCIsImdldENvbnRlbnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJUZXJtaW5hbE5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsInB1c2giLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInJlcGxhY2UiLCJzdHJpbmciLCJmcm9tQ29udGVudCIsInN0cmluZ0xpdGVyYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7O2lFQUhJO2tFQUNBOzs7Ozs7QUFFVixNQUFNQSwwQkFBMEJDLGlCQUFZO0lBQ3pELFlBQVlDLE9BQU8sQ0FBRTtRQUNuQixLQUFLO1FBRUwsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0QsT0FBTztJQUNyQjtJQUVBRSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUU7UUFDdkMsSUFBSUM7UUFFSixJQUFJQyxlQUFlO1FBRW5CLE1BQU1DLGFBQWFMLE1BQU1NLGFBQWEsSUFDaENDLHVCQUF1QlAsTUFBTVEsdUJBQXVCLElBQ3pEQyxtQkFBbUJGLHNCQUFzQixHQUFHO1FBRTdDLElBQUlFLHFCQUFxQixNQUFNO1lBQzdCLE1BQU1iLFVBQVVhLGlCQUFpQlosVUFBVTtZQUUzQyxJQUFJRCxZQUFZLElBQUksQ0FBQ0EsT0FBTyxFQUFFO2dCQUM1QlEsZUFBZU0sa0JBQVksQ0FBQ0Msb0JBQW9CLENBQUNGO1lBQ25EO1FBQ0Y7UUFFQU4sU0FBVUMsaUJBQWlCO1FBRTNCLElBQUlELFFBQVE7WUFDVkosTUFBTWEsSUFBSSxDQUFDUjtZQUVYLElBQUlELFFBQVE7Z0JBQ1YsSUFBSUQsY0FBYyxNQUFNO29CQUN0QkMsU0FBU0Q7Z0JBQ1g7WUFDRjtRQUNGO1FBRUEsSUFBSSxDQUFDQyxRQUFRO1lBQ1hILE1BQU1hLFNBQVMsQ0FBQ1I7UUFDbEI7UUFFQSxPQUFPRjtJQUNUO0lBRUFXLFdBQVc7UUFDVCxNQUFNbEIsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ21CLE9BQU8sQ0FBQyxNQUFNLFNBQ3JDQyxTQUFTLENBQUMsQ0FBQyxFQUFFcEIsUUFBUSxDQUFDLENBQUM7UUFFN0IsT0FBT29CO0lBQ1Q7SUFFQSxPQUFPQyxZQUFZckIsT0FBTyxFQUFFO1FBQzFCLE1BQU1zQixvQkFBb0IsSUFBSXhCLGtCQUFrQkU7UUFFaEQsT0FBT3NCO0lBQ1Q7QUFDRiJ9