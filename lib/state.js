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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var State = /*#__PURE__*/ function() {
    function State(index, tokens, ruleMap, precedence, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode) {
        _class_call_check(this, State);
        this.index = index;
        this.tokens = tokens;
        this.ruleMap = ruleMap;
        this.precedence = precedence;
        this.startOfContent = startOfContent;
        this.NonTerminalNodeMap = NonTerminalNodeMap;
        this.defaultNonTerminalNode = defaultNonTerminalNode;
    }
    _create_class(State, [
        {
            key: "getIndex",
            value: function getIndex() {
                return this.index;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getRuleMap",
            value: function getRuleMap() {
                return this.ruleMap;
            }
        },
        {
            key: "getPrecedence",
            value: function getPrecedence() {
                return this.precedence;
            }
        },
        {
            key: "getStartOfContent",
            value: function getStartOfContent() {
                return this.startOfContent;
            }
        },
        {
            key: "getNonTerminalNode",
            value: function getNonTerminalNode() {
                return this.NonTerminalNodeMap;
            }
        },
        {
            key: "getDefaultNonTerminalNode",
            value: function getDefaultNonTerminalNode() {
                return this.defaultNonTerminalNode;
            }
        },
        {
            key: "setIndex",
            value: function setIndex(index) {
                this.index = index;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.tokens = tokens;
            }
        },
        {
            key: "setRuleMap",
            value: function setRuleMap(ruleMap) {
                this.ruleMap = ruleMap;
            }
        },
        {
            key: "setPrecedence",
            value: function setPrecedence(precedence) {
                this.precedence = precedence;
            }
        },
        {
            key: "setStartOfContent",
            value: function setStartOfContent(startOfContent) {
                this.startOfContent = startOfContent;
            }
        },
        {
            key: "getSavedPrecedence",
            value: function getSavedPrecedence() {
                var savedPrecedence = this.precedence;
                return savedPrecedence;
            }
        },
        {
            key: "getSavedIndex",
            value: function getSavedIndex() {
                var savedIndex = this.index; ///
                return savedIndex;
            }
        },
        {
            key: "getNextToken",
            value: function getNextToken() {
                var nextToken = null;
                var tokensLength = this.tokens.length;
                if (this.index < tokensLength) {
                    nextToken = this.tokens[this.index++];
                }
                return nextToken;
            }
        },
        {
            key: "isAtStartOfContent",
            value: function isAtStartOfContent() {
                var atStartOfContent = this.startOfContent ? this.index === 0 : false;
                return atStartOfContent;
            }
        },
        {
            key: "getNextSignificantToken",
            value: function getNextSignificantToken() {
                var nextSignificantToken = null;
                var tokensLength = this.tokens.length;
                while(this.index < tokensLength){
                    var token = this.tokens[this.index++], tokenSignificant = token.isSignificant();
                    if (tokenSignificant) {
                        var significantToken = token; ///
                        nextSignificantToken = significantToken; ///
                        break;
                    }
                }
                return nextSignificantToken;
            }
        },
        {
            key: "isNextTokenWhitespaceToken",
            value: function isNextTokenWhitespaceToken() {
                var nextTokenWhitespaceToken = false;
                var tokensLength = this.tokens.length;
                if (this.index < tokensLength) {
                    var nextToken = this.tokens[this.index];
                    nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
                }
                return nextTokenWhitespaceToken;
            }
        },
        {
            key: "backtrack",
            value: function backtrack(savedIndex) {
                this.index = savedIndex; ///
            }
        },
        {
            key: "resetPrecedence",
            value: function resetPrecedence(savedPrecedence) {
                this.precedence = savedPrecedence; ///
            }
        },
        {
            key: "NonTerminalNodeFromRuleName",
            value: function NonTerminalNodeFromRuleName(ruleName) {
                var NonTerminalNode = this.NonTerminalNodeMap[ruleName] || this.defaultNonTerminalNode;
                return NonTerminalNode;
            }
        }
    ], [
        {
            key: "fromTokensRuleMapStartOfContentNonTerminalNodeMapAndDefaultNonTerminalNode",
            value: function fromTokensRuleMapStartOfContentNonTerminalNodeMapAndDefaultNonTerminalNode(tokens, ruleMap, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode) {
                var index = 0, precedence = null, state = new State(index, tokens, ruleMap, precedence, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode);
                return state;
            }
        }
    ]);
    return State;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgdG9rZW5zLCBydWxlTWFwLCBwcmVjZWRlbmNlLCBzdGFydE9mQ29udGVudCwgTm9uVGVybWluYWxOb2RlTWFwLCBkZWZhdWx0Tm9uVGVybWluYWxOb2RlKSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgICB0aGlzLnN0YXJ0T2ZDb250ZW50ID0gc3RhcnRPZkNvbnRlbnQ7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGVNYXAgPSBOb25UZXJtaW5hbE5vZGVNYXA7XG4gICAgdGhpcy5kZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gZGVmYXVsdE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFN0YXJ0T2ZDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0T2ZDb250ZW50O1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZU1hcDtcbiAgfVxuXG4gIGdldERlZmF1bHROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgc2V0UnVsZU1hcChydWxlTWFwKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBzZXRTdGFydE9mQ29udGVudChzdGFydE9mQ29udGVudCkge1xuICAgIHRoaXMuc3RhcnRPZkNvbnRlbnQgPSBzdGFydE9mQ29udGVudDtcbiAgfVxuXG4gIGdldFNhdmVkUHJlY2VkZW5jZSgpIHtcbiAgICBjb25zdCBzYXZlZFByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2U7XG5cbiAgICByZXR1cm4gc2F2ZWRQcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGlzQXRTdGFydE9mQ29udGVudCgpIHtcbiAgICBjb25zdCBhdFN0YXJ0T2ZDb250ZW50ID0gdGhpcy5zdGFydE9mQ29udGVudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pbmRleCA9PT0gMCk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xuXG4gICAgcmV0dXJuIGF0U3RhcnRPZkNvbnRlbnQ7XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcblx0XHRsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gIFx0Y29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gIFx0d2hpbGUgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcblx0XHRcdFx0XHRcdHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgXHRcdGlmICh0b2tlblNpZ25pZmljYW50KSB7XG4gIFx0XHQgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgLy8vXG5cblx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1x0Ly8vXG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG4gIFx0fVxuXG5cdFx0cmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXG4gICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuO1xuICB9XG5cblx0YmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuXHR9XG5cbiAgcmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHNhdmVkUHJlY2VkZW5jZTsgIC8vL1xuICB9XG5cbiAgTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGVNYXBbcnVsZU5hbWVdIHx8IHRoaXMuZGVmYXVsdE5vblRlcm1pbmFsTm9kZTtcblxuICAgIHJldHVybiBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc1J1bGVNYXBTdGFydE9mQ29udGVudE5vblRlcm1pbmFsTm9kZU1hcEFuZERlZmF1bHROb25UZXJtaW5hbE5vZGUodG9rZW5zLCBydWxlTWFwLCBzdGFydE9mQ29udGVudCwgTm9uVGVybWluYWxOb2RlTWFwLCBkZWZhdWx0Tm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuXHRcdFx0XHRcdHN0YXRlID0gbmV3IFN0YXRlKGluZGV4LCB0b2tlbnMsIHJ1bGVNYXAsIHByZWNlZGVuY2UsIHN0YXJ0T2ZDb250ZW50LCBOb25UZXJtaW5hbE5vZGVNYXAsIGRlZmF1bHROb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGUiLCJpbmRleCIsInRva2VucyIsInJ1bGVNYXAiLCJwcmVjZWRlbmNlIiwic3RhcnRPZkNvbnRlbnQiLCJOb25UZXJtaW5hbE5vZGVNYXAiLCJkZWZhdWx0Tm9uVGVybWluYWxOb2RlIiwiZ2V0SW5kZXgiLCJnZXRUb2tlbnMiLCJnZXRSdWxlTWFwIiwiZ2V0UHJlY2VkZW5jZSIsImdldFN0YXJ0T2ZDb250ZW50IiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwiZ2V0RGVmYXVsdE5vblRlcm1pbmFsTm9kZSIsInNldEluZGV4Iiwic2V0VG9rZW5zIiwic2V0UnVsZU1hcCIsInNldFByZWNlZGVuY2UiLCJzZXRTdGFydE9mQ29udGVudCIsImdldFNhdmVkUHJlY2VkZW5jZSIsInNhdmVkUHJlY2VkZW5jZSIsImdldFNhdmVkSW5kZXgiLCJzYXZlZEluZGV4IiwiZ2V0TmV4dFRva2VuIiwibmV4dFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwiaXNBdFN0YXJ0T2ZDb250ZW50IiwiYXRTdGFydE9mQ29udGVudCIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJ0b2tlbiIsInRva2VuU2lnbmlmaWNhbnQiLCJpc1NpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJiYWNrdHJhY2siLCJyZXNldFByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUiLCJydWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21Ub2tlbnNSdWxlTWFwU3RhcnRPZkNvbnRlbnROb25UZXJtaW5hbE5vZGVNYXBBbmREZWZhdWx0Tm9uVGVybWluYWxOb2RlIiwic3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0I7Z0NBRHZGUDtRQUVuQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDWCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJ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