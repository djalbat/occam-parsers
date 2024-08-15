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
    function State(index, tokens, ruleMap, precedence, startOfContent) {
        _class_call_check(this, State);
        this.index = index;
        this.tokens = tokens;
        this.ruleMap = ruleMap;
        this.precedence = precedence;
        this.startOfContent = startOfContent;
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
        }
    ], [
        {
            key: "fromTokensRuleMapAndStartOfContent",
            value: function fromTokensRuleMapAndStartOfContent(tokens, ruleMap, startOfContent) {
                var index = 0, precedence = null, state = new State(index, tokens, ruleMap, precedence, startOfContent);
                return state;
            }
        }
    ]);
    return State;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgdG9rZW5zLCBydWxlTWFwLCBwcmVjZWRlbmNlLCBzdGFydE9mQ29udGVudCkge1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gICAgdGhpcy5zdGFydE9mQ29udGVudCA9IHN0YXJ0T2ZDb250ZW50O1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgZ2V0UHJlY2VkZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0U3RhcnRPZkNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRPZkNvbnRlbnQ7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIHNldFJ1bGVNYXAocnVsZU1hcCkge1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBzZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpIHtcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG5cbiAgc2V0U3RhcnRPZkNvbnRlbnQoc3RhcnRPZkNvbnRlbnQpIHtcbiAgICB0aGlzLnN0YXJ0T2ZDb250ZW50ID0gc3RhcnRPZkNvbnRlbnQ7XG4gIH1cblxuICBnZXRTYXZlZFByZWNlZGVuY2UoKSB7XG4gICAgY29uc3Qgc2F2ZWRQcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlO1xuXG4gICAgcmV0dXJuIHNhdmVkUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBpc0F0U3RhcnRPZkNvbnRlbnQoKSB7XG4gICAgY29uc3QgYXRTdGFydE9mQ29udGVudCA9IHRoaXMuc3RhcnRPZkNvbnRlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaW5kZXggPT09IDApOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcblxuICAgIHJldHVybiBhdFN0YXJ0T2ZDb250ZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG5cdFx0bGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICBcdGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICBcdHdoaWxlICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gIFx0XHRjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10sXG5cdFx0XHRcdFx0XHR0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gIFx0XHRpZiAodG9rZW5TaWduaWZpY2FudCkge1xuICBcdFx0ICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdG9rZW47IC8vL1xuXG5cdFx0XHRcdG5leHRTaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcdC8vL1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuICBcdH1cblxuXHRcdHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblxuICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG5cdGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cblx0fVxuXG4gIHJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpIHtcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBzYXZlZFByZWNlZGVuY2U7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW5zUnVsZU1hcEFuZFN0YXJ0T2ZDb250ZW50KHRva2VucywgcnVsZU1hcCwgc3RhcnRPZkNvbnRlbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG5cdFx0XHRcdFx0c3RhdGUgPSBuZXcgU3RhdGUoaW5kZXgsIHRva2VucywgcnVsZU1hcCwgcHJlY2VkZW5jZSwgc3RhcnRPZkNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGUiLCJpbmRleCIsInRva2VucyIsInJ1bGVNYXAiLCJwcmVjZWRlbmNlIiwic3RhcnRPZkNvbnRlbnQiLCJnZXRJbmRleCIsImdldFRva2VucyIsImdldFJ1bGVNYXAiLCJnZXRQcmVjZWRlbmNlIiwiZ2V0U3RhcnRPZkNvbnRlbnQiLCJzZXRJbmRleCIsInNldFRva2VucyIsInNldFJ1bGVNYXAiLCJzZXRQcmVjZWRlbmNlIiwic2V0U3RhcnRPZkNvbnRlbnQiLCJnZXRTYXZlZFByZWNlZGVuY2UiLCJzYXZlZFByZWNlZGVuY2UiLCJnZXRTYXZlZEluZGV4Iiwic2F2ZWRJbmRleCIsImdldE5leHRUb2tlbiIsIm5leHRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsImlzQXRTdGFydE9mQ29udGVudCIsImF0U3RhcnRPZkNvbnRlbnQiLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsIm5leHRTaWduaWZpY2FudFRva2VuIiwidG9rZW4iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInNpZ25pZmljYW50VG9rZW4iLCJpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsIm5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwiYmFja3RyYWNrIiwicmVzZXRQcmVjZWRlbmNlIiwiZnJvbVRva2Vuc1J1bGVNYXBBbmRTdGFydE9mQ29udGVudCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHNCQUFELEFBQUw7YUFBTUEsTUFDUEMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxjQUFjO2dDQUQzQ0w7UUFFbkIsSUFBSSxDQUFD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