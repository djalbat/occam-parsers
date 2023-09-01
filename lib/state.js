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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgdG9rZW5zLCBydWxlTWFwLCBwcmVjZWRlbmNlKSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgc2V0UnVsZU1hcChydWxlTWFwKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRTYXZlZFByZWNlZGVuY2UoKSB7XG4gICAgY29uc3Qgc2F2ZWRQcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlO1xuXG4gICAgcmV0dXJuIHNhdmVkUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcblx0XHRsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gIFx0Y29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gIFx0d2hpbGUgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcblx0XHRcdFx0XHRcdHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgXHRcdGlmICh0b2tlblNpZ25pZmljYW50KSB7XG4gIFx0XHQgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgLy8vXG5cblx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1x0Ly8vXG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG4gIFx0fVxuXG5cdFx0cmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXG4gICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuO1xuICB9XG5cblx0YmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuXHR9XG5cbiAgcmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHNhdmVkUHJlY2VkZW5jZTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgcnVsZU1hcCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcblx0XHRcdFx0XHRzdGF0ZSA9IG5ldyBTdGF0ZShpbmRleCwgdG9rZW5zLCBydWxlTWFwLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlIiwiaW5kZXgiLCJ0b2tlbnMiLCJydWxlTWFwIiwicHJlY2VkZW5jZSIsImdldEluZGV4IiwiZ2V0VG9rZW5zIiwiZ2V0UnVsZU1hcCIsImdldFByZWNlZGVuY2UiLCJzZXRJbmRleCIsInNldFRva2VucyIsInNldFJ1bGVNYXAiLCJzZXRQcmVjZWRlbmNlIiwiZ2V0U2F2ZWRQcmVjZWRlbmNlIiwic2F2ZWRQcmVjZWRlbmNlIiwiZ2V0U2F2ZWRJbmRleCIsInNhdmVkSW5kZXgiLCJnZXROZXh0VG9rZW4iLCJuZXh0VG9rZW4iLCJ0b2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsIm5leHRTaWduaWZpY2FudFRva2VuIiwidG9rZW4iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInNpZ25pZmljYW50VG9rZW4iLCJpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsIm5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwiYmFja3RyYWNrIiwicmVzZXRQcmVjZWRlbmNlIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dDQUQzQko7UUFFbkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFMREo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLEtBQUs7WUFDbkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1IsS0FBSztnQkFDWixJQUFJLENBQUNBLEtBQUssR0FBR0E7WUFDZjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUixNQUFNO2dCQUNkLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtZQUNoQjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXUixPQUFPO2dCQUNoQixJQUFJLENBQUNBLE9BQU8sR0FBR0E7WUFDakI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY1IsVUFBVTtnQkFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQixJQUFJLENBQUNWLFVBQVU7Z0JBRXZDLE9BQU9VO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNmLEtBQUssRUFBRSxHQUFHO2dCQUVsQyxPQUFPZTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFlBQVk7Z0JBRWhCLElBQU1DLGVBQWUsSUFBSSxDQUFDakIsTUFBTSxDQUFDa0IsTUFBTTtnQkFFdkMsSUFBSSxJQUFJLENBQUNuQixLQUFLLEdBQUdrQixjQUFjO29CQUM3QkQsWUFBWSxJQUFJLENBQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDRCxLQUFLLEdBQUc7Z0JBQ3ZDO2dCQUVBLE9BQU9pQjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNBLElBQUlDLHVCQUF1QjtnQkFFMUIsSUFBTUgsZUFBZSxJQUFJLENBQUNqQixNQUFNLENBQUNrQixNQUFNO2dCQUV2QyxNQUFPLElBQUksQ0FBQ25CLEtBQUssR0FBR2tCLGFBQWM7b0JBQ2pDLElBQU1JLFFBQVEsSUFBSSxDQUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQ0QsS0FBSyxHQUFHLEVBQ3JDdUIsbUJBQW1CRCxNQUFNRSxhQUFhO29CQUV4QyxJQUFJRCxrQkFBa0I7d0JBQ3BCLElBQU1FLG1CQUFtQkgsT0FBTyxHQUFHO3dCQUVyQ0QsdUJBQXVCSSxrQkFBa0IsR0FBRzt3QkFFNUM7b0JBQ0Q7Z0JBQ0E7Z0JBRUQsT0FBT0o7WUFDUDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQywyQkFBMkI7Z0JBRS9CLElBQU1ULGVBQWUsSUFBSSxDQUFDakIsTUFBTSxDQUFDa0IsTUFBTTtnQkFFdkMsSUFBSSxJQUFJLENBQUNuQixLQUFLLEdBQUdrQixjQUFjO29CQUM3QixJQUFNRCxZQUFZLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUNELEtBQUssQ0FBQztvQkFFekMyQiwyQkFBMkJWLFVBQVVXLGlCQUFpQjtnQkFDeEQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRURFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVZCxVQUFVO2dCQUNuQixJQUFJLENBQUNmLEtBQUssR0FBR2UsWUFBYSxHQUFHO1lBQzlCOzs7WUFFQ2UsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQmpCLGVBQWU7Z0JBQzdCLElBQUksQ0FBQ1YsVUFBVSxHQUFHVSxpQkFBa0IsR0FBRztZQUN6Qzs7OztZQUVPa0IsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCOUIsTUFBTSxFQUFFQyxPQUFPO2dCQUN6QyxJQUFNRixRQUFRLEdBQ1JHLGFBQWEsTUFDbEI2QixRQUFRLElBOUdRakMsTUE4R0VDLE9BQU9DLFFBQVFDLFNBQVNDO2dCQUUzQyxPQUFPNkI7WUFDVDs7O1dBakhtQmpDIn0=