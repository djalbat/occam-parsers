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
    function State(ruleMap, tokens, index) {
        _class_call_check(this, State);
        this.ruleMap = ruleMap;
        this.tokens = tokens;
        this.index = index;
    }
    _create_class(State, [
        {
            key: "getRuleMap",
            value: function getRuleMap() {
                return this.ruleMap;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getIndex",
            value: function getIndex() {
                return this.index;
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
        },
        {
            key: "setIndex",
            value: function setIndex(index) {
                this.index = index;
            }
        }
    ], [
        {
            key: "fromTokensAndRuleMap",
            value: function fromTokensAndRuleMap(tokens, ruleMap) {
                var index = 0, state = new State(ruleMap, tokens, index);
                return state;
            }
        }
    ]);
    return State;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihydWxlTWFwLCB0b2tlbnMsIGluZGV4KSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgICB0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cblx0Z2V0SW5kZXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXg7XG5cdH1cblxuXHRnZXRTYXZlZEluZGV4KCkge1xuICAgIGNvbnN0IHNhdmVkSW5kZXggPSB0aGlzLmluZGV4OyAvLy9cbiAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBnZXROZXh0VG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG5cdFx0bGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICBcdGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICBcdHdoaWxlICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gIFx0XHRjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10sXG5cdFx0XHRcdFx0XHR0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gIFx0XHRpZiAodG9rZW5TaWduaWZpY2FudCkge1xuICBcdFx0ICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdG9rZW47IC8vL1xuXG5cdFx0XHRcdG5leHRTaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcdC8vL1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuICBcdH1cblxuXHRcdHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblxuICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG5cdGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cblx0fVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgcnVsZU1hcCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcblx0XHRcdFx0XHRzdGF0ZSA9IG5ldyBTdGF0ZShydWxlTWFwLCB0b2tlbnMsIGluZGV4KTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdGF0ZSIsInJ1bGVNYXAiLCJ0b2tlbnMiLCJpbmRleCIsImdldFJ1bGVNYXAiLCJnZXRUb2tlbnMiLCJnZXRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJzYXZlZEluZGV4IiwiZ2V0TmV4dFRva2VuIiwibmV4dFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwidG9rZW5TaWduaWZpY2FudCIsImlzU2lnbmlmaWNhbnQiLCJzaWduaWZpY2FudFRva2VuIiwiaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsImJhY2t0cmFjayIsInNldEluZGV4IiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSztnQ0FEZkg7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7a0JBSk1IOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRURJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNWLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDYixJQUFNQyxhQUFhLElBQUksQ0FBQ0wsS0FBSyxFQUFFLEdBQUc7Z0JBRWxDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTtnQkFDYixJQUFJQyxZQUFZLElBQUk7Z0JBRXBCLElBQU1DLGVBQWUsSUFBSSxDQUFDVCxNQUFNLENBQUNVLE1BQU07Z0JBRXZDLElBQUksSUFBSSxDQUFDVCxLQUFLLEdBQUdRLGNBQWM7b0JBQzdCRCxZQUFZLElBQUksQ0FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQ0MsS0FBSyxHQUFHO2dCQUN2QyxDQUFDO2dCQUVELE9BQU9PO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCO2dCQUMxQixJQUFJQyx1QkFBdUIsSUFBSTtnQkFFOUIsSUFBTUgsZUFBZSxJQUFJLENBQUNULE1BQU0sQ0FBQ1UsTUFBTTtnQkFFdkMsTUFBTyxJQUFJLENBQUNULEtBQUssR0FBR1EsYUFBYztvQkFDakMsSUFBTUksUUFBUSxJQUFJLENBQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUNDLEtBQUssR0FBRyxFQUNyQ2EsbUJBQW1CRCxNQUFNRSxhQUFhO29CQUV4QyxJQUFJRCxrQkFBa0I7d0JBQ3BCLElBQU1FLG1CQUFtQkgsT0FBTyxHQUFHO3dCQUVyQ0QsdUJBQXVCSSxrQkFBa0IsR0FBRzt3QkFFNUMsS0FBTTtvQkFDUCxDQUFDO2dCQUNEO2dCQUVELE9BQU9KO1lBQ1A7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCO2dCQUMzQixJQUFJQywyQkFBMkIsS0FBSztnQkFFcEMsSUFBTVQsZUFBZSxJQUFJLENBQUNULE1BQU0sQ0FBQ1UsTUFBTTtnQkFFdkMsSUFBSSxJQUFJLENBQUNULEtBQUssR0FBR1EsY0FBYztvQkFDN0IsSUFBTUQsWUFBWSxJQUFJLENBQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUNDLEtBQUssQ0FBQztvQkFFekNpQiwyQkFBMkJWLFVBQVVXLGlCQUFpQjtnQkFDeEQsQ0FBQztnQkFFRCxPQUFPRDtZQUNUOzs7WUFFREUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVkLFVBQVUsRUFBRTtnQkFDckIsSUFBSSxDQUFDTCxLQUFLLEdBQUdLLFlBQWEsR0FBRztZQUM5Qjs7O1lBRUNlLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTcEIsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtZQUNmOzs7O1lBRU9xQixLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJ0QixNQUFNLEVBQUVELE9BQU8sRUFBRTtnQkFDM0MsSUFBTUUsUUFBUSxHQUNic0IsUUFBUSxJQWxGUXpCLE1Ba0ZFQyxTQUFTQyxRQUFRQztnQkFFcEMsT0FBT3NCO1lBQ1Q7OztXQXJGbUJ6QiJ9