"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return WildcardPart;
    }
});
const _occamlexers = require("occam-lexers");
const _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
const _terminal1 = /*#__PURE__*/ _interop_require_default(require("../../node/terminal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { wildcard } = _occamlexers.specialSymbols;
class WildcardPart extends _terminal.default {
    parse(nodes, state, callback, callAhead) {
        let parsed;
        let terminalNode = null;
        const savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
        if (significantToken !== null) {
            terminalNode = _terminal1.default.fromSignificantToken(significantToken);
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
        const string = wildcard; ///
        return string;
    }
    static fromNothing() {
        const wildcardPart = new WildcardPart();
        return wildcardPart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3dpbGRjYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtaW5hbFwiO1xuXG5jb25zdCB7IHdpbGRjYXJkIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lsZGNhcmRQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBzdGF0ZS5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIH1cblxuICAgIHBhcnNlZCA9ICh0ZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaCh0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIGlmIChjYWxsQWhlYWQgIT09IG51bGwpIHtcbiAgICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHdpbGRjYXJkOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkUGFydCA9IG5ldyBXaWxkY2FyZFBhcnQoKTtcblxuICAgIHJldHVybiB3aWxkY2FyZFBhcnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJXaWxkY2FyZFBhcnQiLCJ3aWxkY2FyZCIsInNwZWNpYWxTeW1ib2xzIiwiVGVybWluYWxQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tTm90aGluZyIsIndpbGRjYXJkUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7Ozs2QkFQVTtpRUFFTjtrRUFDQTs7Ozs7O0FBRXpCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdDLDJCQUFjO0FBRXBCLE1BQU1GLHFCQUFxQkcsaUJBQVk7SUFDcERDLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRTtRQUN2QyxJQUFJQztRQUVKLElBQUlDLGVBQWU7UUFFbkIsTUFBTUMsYUFBYUwsTUFBTU0sYUFBYSxJQUNoQ0MsdUJBQXVCUCxNQUFNUSx1QkFBdUIsSUFDekRDLG1CQUFtQkYsc0JBQXNCLEdBQUc7UUFFN0MsSUFBSUUscUJBQXFCLE1BQU07WUFDN0JMLGVBQWVNLGtCQUFZLENBQUNDLG9CQUFvQixDQUFDRjtRQUNuRDtRQUVBTixTQUFVQyxpQkFBaUI7UUFFM0IsSUFBSUQsUUFBUTtZQUNWSixNQUFNYSxJQUFJLENBQUNSO1lBRVgsSUFBSUQsUUFBUTtnQkFDVixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCQyxTQUFTRDtnQkFDWDtZQUNGO1FBQ0Y7UUFFQSxJQUFJLENBQUNDLFFBQVE7WUFDWEgsTUFBTWEsU0FBUyxDQUFDUjtRQUNsQjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQVcsV0FBVztRQUNULE1BQU1DLFNBQVNwQixVQUFXLEdBQUc7UUFFN0IsT0FBT29CO0lBQ1Q7SUFFQSxPQUFPQyxjQUFjO1FBQ25CLE1BQU1DLGVBQWUsSUFBSXZCO1FBRXpCLE9BQU91QjtJQUNUO0FBQ0YifQ==