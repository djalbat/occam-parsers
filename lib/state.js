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
    function State(index, tokens, ruleMap, precedence) {
        _class_call_check(this, State);
        this.index = index;
        this.tokens = tokens;
        this.ruleMap = ruleMap;
        this.precedence = precedence;
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
        }
    ], [
        {
            key: "fromTokensAndRuleMap",
            value: function fromTokensAndRuleMap(tokens, ruleMap) {
                var index = 0, precedence = null, state = new State(index, tokens, ruleMap, precedence);
                return state;
            }
        }
    ]);
    return State;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgdG9rZW5zLCBydWxlTWFwLCBwcmVjZWRlbmNlKSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgc2V0UnVsZU1hcChydWxlTWFwKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRTYXZlZEluZGV4KCkge1xuICAgIGNvbnN0IHNhdmVkSW5kZXggPSB0aGlzLmluZGV4OyAvLy9cbiAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBnZXROZXh0VG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG5cdFx0bGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICBcdGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICBcdHdoaWxlICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gIFx0XHRjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10sXG5cdFx0XHRcdFx0XHR0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gIFx0XHRpZiAodG9rZW5TaWduaWZpY2FudCkge1xuICBcdFx0ICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdG9rZW47IC8vL1xuXG5cdFx0XHRcdG5leHRTaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcdC8vL1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuICBcdH1cblxuXHRcdHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblxuICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG5cdGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cblx0fVxuXG4gIHN0YXRpYyBmcm9tVG9rZW5zQW5kUnVsZU1hcCh0b2tlbnMsIHJ1bGVNYXApIHtcbiAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG5cdFx0XHRcdFx0c3RhdGUgPSBuZXcgU3RhdGUoaW5kZXgsIHRva2VucywgcnVsZU1hcCwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU3RhdGUiLCJpbmRleCIsInRva2VucyIsInJ1bGVNYXAiLCJwcmVjZWRlbmNlIiwiZ2V0SW5kZXgiLCJnZXRUb2tlbnMiLCJnZXRSdWxlTWFwIiwiZ2V0UHJlY2VkZW5jZSIsInNldEluZGV4Iiwic2V0VG9rZW5zIiwic2V0UnVsZU1hcCIsInNldFByZWNlZGVuY2UiLCJnZXRTYXZlZEluZGV4Iiwic2F2ZWRJbmRleCIsImdldE5leHRUb2tlbiIsIm5leHRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJ0b2tlbiIsInRva2VuU2lnbmlmaWNhbnQiLCJpc1NpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJiYWNrdHJhY2siLCJmcm9tVG9rZW5zQW5kUnVsZU1hcCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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