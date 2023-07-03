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
    function State(index, tokens, ruleMap) {
        _class_call_check(this, State);
        this.index = index;
        this.tokens = tokens;
        this.ruleMap = ruleMap;
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
                var index = 0, state = new State(index, tokens, ruleMap);
                return state;
            }
        }
    ]);
    return State;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgdG9rZW5zLCBydWxlTWFwKSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIHNldFJ1bGVNYXAocnVsZU1hcCkge1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRTYXZlZEluZGV4KCkge1xuICAgIGNvbnN0IHNhdmVkSW5kZXggPSB0aGlzLmluZGV4OyAvLy9cbiAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBnZXROZXh0VG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG5cdFx0bGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICBcdGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICBcdHdoaWxlICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gIFx0XHRjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10sXG5cdFx0XHRcdFx0XHR0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gIFx0XHRpZiAodG9rZW5TaWduaWZpY2FudCkge1xuICBcdFx0ICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdG9rZW47IC8vL1xuXG5cdFx0XHRcdG5leHRTaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcdC8vL1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuICBcdH1cblxuXHRcdHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblxuICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG5cdGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cblx0fVxuXG4gIHN0YXRpYyBmcm9tVG9rZW5zQW5kUnVsZU1hcCh0b2tlbnMsIHJ1bGVNYXApIHtcbiAgICBjb25zdCBpbmRleCA9IDAsXG5cdFx0XHRcdFx0c3RhdGUgPSBuZXcgU3RhdGUoaW5kZXgsIHRva2VucywgcnVsZU1hcCk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU3RhdGUiLCJpbmRleCIsInRva2VucyIsInJ1bGVNYXAiLCJnZXRJbmRleCIsImdldFRva2VucyIsImdldFJ1bGVNYXAiLCJzZXRJbmRleCIsInNldFRva2VucyIsInNldFJ1bGVNYXAiLCJnZXRTYXZlZEluZGV4Iiwic2F2ZWRJbmRleCIsImdldE5leHRUb2tlbiIsIm5leHRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJ0b2tlbiIsInRva2VuU2lnbmlmaWNhbnQiLCJpc1NpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJiYWNrdHJhY2siLCJmcm9tVG9rZW5zQW5kUnVsZU1hcCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dDQURmSDtRQUVuQixJQUFJLENBQUNDLFFBQVFBO1FBQ1gsSUFBSSxDQUFDQyxTQUFTQTtRQUNkLElBQUksQ0FBQ0MsVUFBVUE7O2tCQUpFSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0g7WUFDZDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0g7WUFDZDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0g7WUFDZDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTTixLQUFLO2dCQUNaLElBQUksQ0FBQ0EsUUFBUUE7WUFDZjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVTixNQUFNO2dCQUNkLElBQUksQ0FBQ0EsU0FBU0E7WUFDaEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV04sT0FBTztnQkFDaEIsSUFBSSxDQUFDQSxVQUFVQTtZQUNqQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ1YsT0FBTyxHQUFHO2dCQUVsQyxPQUFPVTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFlBQVk7Z0JBRWhCLElBQU1DLGVBQWUsSUFBSSxDQUFDWixPQUFPYTtnQkFFakMsSUFBSSxJQUFJLENBQUNkLFFBQVFhLGNBQWM7b0JBQzdCRCxZQUFZLElBQUksQ0FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQ0QsUUFBUTtnQkFDdkM7Z0JBRUEsT0FBT1k7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDQSxJQUFJQyx1QkFBdUI7Z0JBRTFCLElBQU1ILGVBQWUsSUFBSSxDQUFDWixPQUFPYTtnQkFFakMsTUFBTyxJQUFJLENBQUNkLFFBQVFhLGFBQWM7b0JBQ2pDLElBQU1JLFFBQVEsSUFBSSxDQUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQ0QsUUFBUSxFQUNyQ2tCLG1CQUFtQkQsTUFBTUU7b0JBRTNCLElBQUlELGtCQUFrQjt3QkFDcEIsSUFBTUUsbUJBQW1CSCxPQUFPLEdBQUc7d0JBRXJDRCx1QkFBdUJJLGtCQUFrQixHQUFHO3dCQUU1QztvQkFDRDtnQkFDQTtnQkFFRCxPQUFPSjtZQUNQOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLDJCQUEyQjtnQkFFL0IsSUFBTVQsZUFBZSxJQUFJLENBQUNaLE9BQU9hO2dCQUVqQyxJQUFJLElBQUksQ0FBQ2QsUUFBUWEsY0FBYztvQkFDN0IsSUFBTUQsWUFBWSxJQUFJLENBQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUNELE1BQU07b0JBRXpDc0IsMkJBQTJCVixVQUFVVztnQkFDdkM7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRURFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVZCxVQUFVO2dCQUNuQixJQUFJLENBQUNWLFFBQVFVLFlBQWEsR0FBRztZQUM5Qjs7OztZQUVRZSxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJ4QixNQUFNLEVBQUVDLE9BQU87Z0JBQ3pDLElBQU1GLFFBQVEsR0FDYjBCLFFBQVEsSUExRlEzQixNQTBGRUMsT0FBT0MsUUFBUUM7Z0JBRWxDLE9BQU93QjtZQUNUOzs7V0E3Rm1CM0IifQ==