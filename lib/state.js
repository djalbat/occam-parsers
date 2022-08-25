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
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var State = /*#__PURE__*/ function() {
    function State(ruleMap, tokens, index) {
        _classCallCheck(this, State);
        this.ruleMap = ruleMap;
        this.tokens = tokens;
        this.index = index;
    }
    _createClass(State, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihydWxlTWFwLCB0b2tlbnMsIGluZGV4KSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgICB0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cblx0Z2V0SW5kZXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXg7XG5cdH1cblxuXHRnZXRTYXZlZEluZGV4KCkge1xuICAgIGNvbnN0IHNhdmVkSW5kZXggPSB0aGlzLmluZGV4OyAvLy9cbiAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBnZXROZXh0VG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG5cdFx0bGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICBcdGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICBcdHdoaWxlICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gIFx0XHRjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10sXG5cdFx0XHRcdFx0XHR0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gIFx0XHRpZiAodG9rZW5TaWduaWZpY2FudCkge1xuICBcdFx0ICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdG9rZW47IC8vL1xuXG5cdFx0XHRcdG5leHRTaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcdC8vL1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuICBcdH1cblxuXHRcdHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblxuICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG5cdGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cblx0fVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgcnVsZU1hcCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcblx0XHRcdFx0XHRzdGF0ZSA9IG5ldyBTdGF0ZShydWxlTWFwLCB0b2tlbnMsIGluZGV4KTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdGF0ZSIsInJ1bGVNYXAiLCJ0b2tlbnMiLCJpbmRleCIsImdldFJ1bGVNYXAiLCJnZXRUb2tlbnMiLCJnZXRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJzYXZlZEluZGV4IiwiZ2V0TmV4dFRva2VuIiwibmV4dFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwidG9rZW5TaWduaWZpY2FudCIsImlzU2lnbmlmaWNhbnQiLCJzaWduaWZpY2FudFRva2VuIiwiaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsImJhY2t0cmFjayIsInNldEluZGV4IiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBRVFBLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBWCxJQUFBLEFBQU1BLEtBQUssaUJBQVg7YUFBTUEsS0FBSyxDQUNaQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSzs4QkFEZkgsS0FBSztRQUV0QixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7aUJBSkFILEtBQUs7O1lBT3hCSSxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxPQUFPLElBQUksQ0FBQ0gsT0FBTyxDQUFDO1lBQ3RCLENBQUM7OztZQUVESSxHQUFTLEVBQVRBLFdBQVM7bUJBQVRBLFNBQUFBLFNBQVMsR0FBRztnQkFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTSxDQUFDO1lBQ3JCLENBQUM7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