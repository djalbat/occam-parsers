"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalPart;
    }
});
class TerminalPart {
    isCallAhead() {
        const callAhead = false;
        return callAhead;
    }
    isNonTerminalPart() {
        const nonTerminalPart = false;
        return nonTerminalPart;
    }
    isTerminalPart() {
        const terminalPart = true;
        return terminalPart;
    }
    isNoWhitespacePart() {
        const noWhitespacePart = false;
        return noWhitespacePart;
    }
    isStartOfContentPart() {
        const startOfContentPart = false;
        return startOfContentPart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnQge1xuICBpc0NhbGxBaGVhZCgpIHtcbiAgICBjb25zdCBjYWxsQWhlYWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBjYWxsQWhlYWQ7XG4gIH1cblxuICBpc05vblRlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1Rlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZVBhcnQoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZVBhcnQ7XG4gIH1cblxuICBpc1N0YXJ0T2ZDb250ZW50UGFydCgpIHtcbiAgICBjb25zdCBzdGFydE9mQ29udGVudFBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdGFydE9mQ29udGVudFBhcnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJpc0NhbGxBaGVhZCIsImNhbGxBaGVhZCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwiaXNUZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJpc05vV2hpdGVzcGFjZVBhcnQiLCJub1doaXRlc3BhY2VQYXJ0IiwiaXNTdGFydE9mQ29udGVudFBhcnQiLCJzdGFydE9mQ29udGVudFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBcUJBOzs7QUFBTixNQUFNQTtJQUNuQkMsY0FBYztRQUNaLE1BQU1DLFlBQVk7UUFFbEIsT0FBT0E7SUFDVDtJQUVBQyxvQkFBb0I7UUFDbEIsTUFBTUMsa0JBQWtCO1FBRXhCLE9BQU9BO0lBQ1Q7SUFFQUMsaUJBQWlCO1FBQ2YsTUFBTUMsZUFBZTtRQUVyQixPQUFPQTtJQUNUO0lBRUFDLHFCQUFxQjtRQUNuQixNQUFNQyxtQkFBbUI7UUFFekIsT0FBT0E7SUFDVDtJQUVBQyx1QkFBdUI7UUFDckIsTUFBTUMscUJBQXFCO1FBRTNCLE9BQU9BO0lBQ1Q7QUFDRiJ9