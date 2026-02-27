"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return State;
    }
});
class State {
    constructor(index, tokens, ruleMap, precedence, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode){
        this.index = index;
        this.tokens = tokens;
        this.ruleMap = ruleMap;
        this.precedence = precedence;
        this.startOfContent = startOfContent;
        this.NonTerminalNodeMap = NonTerminalNodeMap;
        this.defaultNonTerminalNode = defaultNonTerminalNode;
    }
    getIndex() {
        return this.index;
    }
    getTokens() {
        return this.tokens;
    }
    getRuleMap() {
        return this.ruleMap;
    }
    getPrecedence() {
        return this.precedence;
    }
    getStartOfContent() {
        return this.startOfContent;
    }
    getNonTerminalNode() {
        return this.NonTerminalNodeMap;
    }
    getDefaultNonTerminalNode() {
        return this.defaultNonTerminalNode;
    }
    setIndex(index) {
        this.index = index;
    }
    setTokens(tokens) {
        this.tokens = tokens;
    }
    setRuleMap(ruleMap) {
        this.ruleMap = ruleMap;
    }
    setPrecedence(precedence) {
        this.precedence = precedence;
    }
    setStartOfContent(startOfContent) {
        this.startOfContent = startOfContent;
    }
    getSavedPrecedence() {
        const savedPrecedence = this.precedence;
        return savedPrecedence;
    }
    getSavedIndex() {
        const savedIndex = this.index; ///
        return savedIndex;
    }
    getNextToken() {
        let nextToken = null;
        const tokensLength = this.tokens.length;
        if (this.index < tokensLength) {
            nextToken = this.tokens[this.index++];
        }
        return nextToken;
    }
    isAtStartOfContent() {
        const atStartOfContent = this.startOfContent ? this.index === 0 : false;
        return atStartOfContent;
    }
    getNextSignificantToken() {
        let nextSignificantToken = null;
        const tokensLength = this.tokens.length;
        while(this.index < tokensLength){
            const token = this.tokens[this.index++], tokenSignificant = token.isSignificant();
            if (tokenSignificant) {
                const significantToken = token; ///
                nextSignificantToken = significantToken; ///
                break;
            }
        }
        return nextSignificantToken;
    }
    isNextTokenWhitespaceToken() {
        let nextTokenWhitespaceToken = false;
        const tokensLength = this.tokens.length;
        if (this.index < tokensLength) {
            const nextToken = this.tokens[this.index];
            nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
        }
        return nextTokenWhitespaceToken;
    }
    backtrack(savedIndex) {
        this.index = savedIndex; ///
    }
    resetPrecedence(savedPrecedence) {
        this.precedence = savedPrecedence; ///
    }
    NonTerminalNodeFromRuleName(ruleName) {
        const NonTerminalNode = Object.hasOwn(this.NonTerminalNodeMap, ruleName) ? this.NonTerminalNodeMap[ruleName] : this.defaultNonTerminalNode;
        return NonTerminalNode;
    }
    static fromTokensRuleMapStartOfContentNonTerminalNodeMapAndDefaultNonTerminalNode(tokens, ruleMap, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode) {
        const index = 0, precedence = null, state = new State(index, tokens, ruleMap, precedence, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode);
        return state;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgdG9rZW5zLCBydWxlTWFwLCBwcmVjZWRlbmNlLCBzdGFydE9mQ29udGVudCwgTm9uVGVybWluYWxOb2RlTWFwLCBkZWZhdWx0Tm9uVGVybWluYWxOb2RlKSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgICB0aGlzLnN0YXJ0T2ZDb250ZW50ID0gc3RhcnRPZkNvbnRlbnQ7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGVNYXAgPSBOb25UZXJtaW5hbE5vZGVNYXA7XG4gICAgdGhpcy5kZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gZGVmYXVsdE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFN0YXJ0T2ZDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0T2ZDb250ZW50O1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZU1hcDtcbiAgfVxuXG4gIGdldERlZmF1bHROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgc2V0UnVsZU1hcChydWxlTWFwKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBzZXRTdGFydE9mQ29udGVudChzdGFydE9mQ29udGVudCkge1xuICAgIHRoaXMuc3RhcnRPZkNvbnRlbnQgPSBzdGFydE9mQ29udGVudDtcbiAgfVxuXG4gIGdldFNhdmVkUHJlY2VkZW5jZSgpIHtcbiAgICBjb25zdCBzYXZlZFByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2U7XG5cbiAgICByZXR1cm4gc2F2ZWRQcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGlzQXRTdGFydE9mQ29udGVudCgpIHtcbiAgICBjb25zdCBhdFN0YXJ0T2ZDb250ZW50ID0gdGhpcy5zdGFydE9mQ29udGVudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pbmRleCA9PT0gMCk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xuXG4gICAgcmV0dXJuIGF0U3RhcnRPZkNvbnRlbnQ7XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcblx0XHRsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gIFx0Y29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gIFx0d2hpbGUgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcblx0XHRcdFx0XHRcdHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgXHRcdGlmICh0b2tlblNpZ25pZmljYW50KSB7XG4gIFx0XHQgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgLy8vXG5cblx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1x0Ly8vXG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG4gIFx0fVxuXG5cdFx0cmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXG4gICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuO1xuICB9XG5cblx0YmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuXHR9XG5cbiAgcmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHNhdmVkUHJlY2VkZW5jZTsgIC8vL1xuICB9XG5cbiAgTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gT2JqZWN0Lmhhc093bih0aGlzLk5vblRlcm1pbmFsTm9kZU1hcCwgcnVsZU5hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTm9uVGVybWluYWxOb2RlTWFwW3J1bGVOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdE5vblRlcm1pbmFsTm9kZTtcblxuICAgIHJldHVybiBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc1J1bGVNYXBTdGFydE9mQ29udGVudE5vblRlcm1pbmFsTm9kZU1hcEFuZERlZmF1bHROb25UZXJtaW5hbE5vZGUodG9rZW5zLCBydWxlTWFwLCBzdGFydE9mQ29udGVudCwgTm9uVGVybWluYWxOb2RlTWFwLCBkZWZhdWx0Tm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuXHRcdFx0XHRcdHN0YXRlID0gbmV3IFN0YXRlKGluZGV4LCB0b2tlbnMsIHJ1bGVNYXAsIHByZWNlZGVuY2UsIHN0YXJ0T2ZDb250ZW50LCBOb25UZXJtaW5hbE5vZGVNYXAsIGRlZmF1bHROb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGUiLCJpbmRleCIsInRva2VucyIsInJ1bGVNYXAiLCJwcmVjZWRlbmNlIiwic3RhcnRPZkNvbnRlbnQiLCJOb25UZXJtaW5hbE5vZGVNYXAiLCJkZWZhdWx0Tm9uVGVybWluYWxOb2RlIiwiZ2V0SW5kZXgiLCJnZXRUb2tlbnMiLCJnZXRSdWxlTWFwIiwiZ2V0UHJlY2VkZW5jZSIsImdldFN0YXJ0T2ZDb250ZW50IiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwiZ2V0RGVmYXVsdE5vblRlcm1pbmFsTm9kZSIsInNldEluZGV4Iiwic2V0VG9rZW5zIiwic2V0UnVsZU1hcCIsInNldFByZWNlZGVuY2UiLCJzZXRTdGFydE9mQ29udGVudCIsImdldFNhdmVkUHJlY2VkZW5jZSIsInNhdmVkUHJlY2VkZW5jZSIsImdldFNhdmVkSW5kZXgiLCJzYXZlZEluZGV4IiwiZ2V0TmV4dFRva2VuIiwibmV4dFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwiaXNBdFN0YXJ0T2ZDb250ZW50IiwiYXRTdGFydE9mQ29udGVudCIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJ0b2tlbiIsInRva2VuU2lnbmlmaWNhbnQiLCJpc1NpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJiYWNrdHJhY2siLCJyZXNldFByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUiLCJydWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsIk9iamVjdCIsImhhc093biIsImZyb21Ub2tlbnNSdWxlTWFwU3RhcnRPZkNvbnRlbnROb25UZXJtaW5hbE5vZGVNYXBBbmREZWZhdWx0Tm9uVGVybWluYWxOb2RlIiwic3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBcUJBOzs7QUFBTixNQUFNQTtJQUNuQixZQUFZQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsa0JBQWtCLEVBQUVD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