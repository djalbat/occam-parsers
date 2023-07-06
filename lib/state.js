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
            key: "fromTokensAndRuleMap",
            value: function fromTokensAndRuleMap(tokens, ruleMap) {
                var index = 0, precedence = null, state = new State(index, tokens, ruleMap, precedence);
                return state;
            }
        }
    ]);
    return State;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgdG9rZW5zLCBydWxlTWFwLCBwcmVjZWRlbmNlKSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgc2V0UnVsZU1hcChydWxlTWFwKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRTYXZlZFByZWNlZGVuY2UoKSB7XG4gICAgY29uc3Qgc2F2ZWRQcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlO1xuXG4gICAgcmV0dXJuIHNhdmVkUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcblx0XHRsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gIFx0Y29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gIFx0d2hpbGUgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcblx0XHRcdFx0XHRcdHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgXHRcdGlmICh0b2tlblNpZ25pZmljYW50KSB7XG4gIFx0XHQgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgLy8vXG5cblx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1x0Ly8vXG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG4gIFx0fVxuXG5cdFx0cmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXG4gICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuO1xuICB9XG5cblx0YmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuXHR9XG5cbiAgcmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHNhdmVkUHJlY2VkZW5jZTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgcnVsZU1hcCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcblx0XHRcdFx0XHRzdGF0ZSA9IG5ldyBTdGF0ZShpbmRleCwgdG9rZW5zLCBydWxlTWFwLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdGF0ZSIsImluZGV4IiwidG9rZW5zIiwicnVsZU1hcCIsInByZWNlZGVuY2UiLCJnZXRJbmRleCIsImdldFRva2VucyIsImdldFJ1bGVNYXAiLCJnZXRQcmVjZWRlbmNlIiwic2V0SW5kZXgiLCJzZXRUb2tlbnMiLCJzZXRSdWxlTWFwIiwic2V0UHJlY2VkZW5jZSIsImdldFNhdmVkUHJlY2VkZW5jZSIsInNhdmVkUHJlY2VkZW5jZSIsImdldFNhdmVkSW5kZXgiLCJzYXZlZEluZGV4IiwiZ2V0TmV4dFRva2VuIiwibmV4dFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwidG9rZW5TaWduaWZpY2FudCIsImlzU2lnbmlmaWNhbnQiLCJzaWduaWZpY2FudFRva2VuIiwiaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsImJhY2t0cmFjayIsInJlc2V0UHJlY2VkZW5jZSIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwic3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQ0FEM0JKO1FBRW5CLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBTERKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixLQUFLO1lBQ25COzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixVQUFVO1lBQ3hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNSLEtBQUs7Z0JBQ1osSUFBSSxDQUFDQSxLQUFLLEdBQUdBO1lBQ2Y7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVIsTUFBTTtnQkFDZCxJQUFJLENBQUNBLE1BQU0sR0FBR0E7WUFDaEI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV1IsT0FBTztnQkFDaEIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO1lBQ2pCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNSLFVBQVU7Z0JBQ3RCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtZQUNwQjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0IsSUFBSSxDQUFDVixVQUFVO2dCQUV2QyxPQUFPVTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDZixLQUFLLEVBQUUsR0FBRztnQkFFbEMsT0FBT2U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxZQUFZO2dCQUVoQixJQUFNQyxlQUFlLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2tCLE1BQU07Z0JBRXZDLElBQUksSUFBSSxDQUFDbkIsS0FBSyxHQUFHa0IsY0FBYztvQkFDN0JELFlBQVksSUFBSSxDQUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQ0QsS0FBSyxHQUFHO2dCQUN2QztnQkFFQSxPQUFPaUI7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDQSxJQUFJQyx1QkFBdUI7Z0JBRTFCLElBQU1ILGVBQWUsSUFBSSxDQUFDakIsTUFBTSxDQUFDa0IsTUFBTTtnQkFFdkMsTUFBTyxJQUFJLENBQUNuQixLQUFLLEdBQUdrQixhQUFjO29CQUNqQyxJQUFNSSxRQUFRLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUNELEtBQUssR0FBRyxFQUNyQ3VCLG1CQUFtQkQsTUFBTUUsYUFBYTtvQkFFeEMsSUFBSUQsa0JBQWtCO3dCQUNwQixJQUFNRSxtQkFBbUJILE9BQU8sR0FBRzt3QkFFckNELHVCQUF1Qkksa0JBQWtCLEdBQUc7d0JBRTVDO29CQUNEO2dCQUNBO2dCQUVELE9BQU9KO1lBQ1A7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsMkJBQTJCO2dCQUUvQixJQUFNVCxlQUFlLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2tCLE1BQU07Z0JBRXZDLElBQUksSUFBSSxDQUFDbkIsS0FBSyxHQUFHa0IsY0FBYztvQkFDN0IsSUFBTUQsWUFBWSxJQUFJLENBQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDRCxLQUFLLENBQUM7b0JBRXpDMkIsMkJBQTJCVixVQUFVVyxpQkFBaUI7Z0JBQ3hEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVERSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVWQsVUFBVTtnQkFDbkIsSUFBSSxDQUFDZixLQUFLLEdBQUdlLFlBQWEsR0FBRztZQUM5Qjs7O1lBRUNlLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JqQixlQUFlO2dCQUM3QixJQUFJLENBQUNWLFVBQVUsR0FBR1UsaUJBQWtCLEdBQUc7WUFDekM7Ozs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQjlCLE1BQU0sRUFBRUMsT0FBTztnQkFDekMsSUFBTUYsUUFBUSxHQUNSRyxhQUFhLE1BQ2xCNkIsUUFBUSxJQTlHUWpDLE1BOEdFQyxPQUFPQyxRQUFRQyxTQUFTQztnQkFFM0MsT0FBTzZCO1lBQ1Q7OztXQWpIbUJqQyJ9