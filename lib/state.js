"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _defaults = require("./defaults");
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
    function State(ruleMap, tokens, index, depth, maximumDepth) {
        _classCallCheck(this, State);
        this.ruleMap = ruleMap;
        this.tokens = tokens;
        this.index = index;
        this.depth = depth;
        this.maximumDepth = maximumDepth;
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
            key: "getDepth",
            value: function getDepth() {
                return this.depth;
            }
        },
        {
            key: "getMaximumDepth",
            value: function getMaximumDepth() {
                return this.maximumDepth;
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
            key: "isTooDeep",
            value: function isTooDeep() {
                var tooDeep = this.depth > this.maximumDepth;
                return tooDeep;
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
        },
        {
            key: "increaseDepth",
            value: function increaseDepth() {
                this.depth++;
            }
        },
        {
            key: "decreaseDepth",
            value: function decreaseDepth() {
                this.depth--;
            }
        }
    ], [
        {
            key: "fromTokensAndRuleMap",
            value: function fromTokensAndRuleMap(tokens, ruleMap) {
                var index = 0, depth = 0, maximumDepth = _defaults.DEFAULT_MAXIMUM_DEPTH, state = new State(ruleMap, tokens, index, depth, maximumDepth);
                return state;
            }
        }
    ]);
    return State;
}();
exports.default = State;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsImxpYi9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfTUFYSU1VTV9ERVBUSCB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIHtcbiAgY29uc3RydWN0b3IocnVsZU1hcCwgdG9rZW5zLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuXHRnZXRJbmRleCgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG4gIGdldERlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICB9XG5cblx0Z2V0TWF4aW11bURlcHRoKCkge1xuXHRcdHJldHVybiB0aGlzLm1heGltdW1EZXB0aDtcblx0fVxuXG5cdGdldFNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcblx0XHRsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gIFx0Y29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gIFx0d2hpbGUgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcblx0XHRcdFx0XHRcdHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgXHRcdGlmICh0b2tlblNpZ25pZmljYW50KSB7XG4gIFx0XHQgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgLy8vXG5cblx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1x0Ly8vXG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG4gIFx0fVxuXG5cdFx0cmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXG4gICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNUb29EZWVwKCkge1xuICAgIGNvbnN0IHRvb0RlZXAgPSAodGhpcy5kZXB0aCA+IHRoaXMubWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiB0b29EZWVwO1xuICB9XG5cblx0YmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuXHR9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBpbmNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgfVxuXG4gIGRlY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgcnVsZU1hcCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcblx0XHRcdFx0XHRkZXB0aCA9IDAsXG5cdFx0XHRcdFx0bWF4aW11bURlcHRoID0gREVGQVVMVF9NQVhJTVVNX0RFUFRILFxuXHRcdFx0XHRcdHN0YXRlID0gbmV3IFN0YXRlKHJ1bGVNYXAsIHRva2VucywgaW5kZXgsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIlN0YXRlIiwicnVsZU1hcCIsInRva2VucyIsImluZGV4IiwiZGVwdGgiLCJtYXhpbXVtRGVwdGgiLCJnZXRSdWxlTWFwIiwiZ2V0VG9rZW5zIiwiZ2V0SW5kZXgiLCJnZXREZXB0aCIsImdldE1heGltdW1EZXB0aCIsImdldFNhdmVkSW5kZXgiLCJzYXZlZEluZGV4IiwiZ2V0TmV4dFRva2VuIiwibmV4dFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwidG9rZW5TaWduaWZpY2FudCIsImlzU2lnbmlmaWNhbnQiLCJzaWduaWZpY2FudFRva2VuIiwiaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsImlzVG9vRGVlcCIsInRvb0RlZXAiLCJiYWNrdHJhY2siLCJzZXRJbmRleCIsImluY3JlYXNlRGVwdGgiLCJkZWNyZWFzZURlcHRoIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJERUZBVUxUX01BWElNVU1fREVQVEgiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVzQyxJQUFBLFNBQVksV0FBWixZQUFZLENBQUE7Ozs7Ozs7Ozs4REFGbEQ7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7OztBQUllLElBQUEsQUFBTUEsS0FBSyxpQkNKdkIsQURJWTthQUFNQSxLQUFLLENBQ1pDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsWUFBWTtvQ0FMekQ7UUFNSSxJQUFJLENBQUNKLE9BQU8sR0FBR0EsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSyxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZLENBQUM7Ozs7WUFHbkNDLEdBQVUsRUFBVkEsWUFBVTtZRWJaLE9GYUVBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxPQUFPLElBQUksQ0FBQ0wsT0FBTyxDQUFDO2FBQ3JCOzs7WUFFRE0sR0FBUyxFQUFUQSxXQUFTO1lFakJYLE9GaUJFQSxTQUFBQSxTQUFTLEdBQUc7Z0JBQ1YsT0FBTyxJQUFJLENBQUNMLE1BQU0sQ0FBQzthQUNwQjs7O1lBRUZNLEdBQVEs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