"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
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
var Context = function() {
    function Context(ruleMap, tokens, index, depth, maximumDepth) {
        _classCallCheck(this, Context);
        this.ruleMap = ruleMap;
        this.tokens = tokens;
        this.index = index;
        this.depth = depth;
        this.maximumDepth = maximumDepth;
    }
    _createClass(Context, [
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
                var index = 0, depth = 0, maximumDepth = _constants.DEFAULT_MAXIMUM_DEPTH, context = new Context(ruleMap, tokens, index, depth, maximumDepth);
                return context;
            }
        }
    ]);
    return Context;
}();
exports.default = Context;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX0RFUFRIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocnVsZU1hcCwgdG9rZW5zLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuXHRnZXRJbmRleCgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG4gIGdldERlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICB9XG5cblx0Z2V0TWF4aW11bURlcHRoKCkge1xuXHRcdHJldHVybiB0aGlzLm1heGltdW1EZXB0aDtcblx0fVxuXG5cdGdldFNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcblx0XHRsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gIFx0Y29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gIFx0d2hpbGUgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcblx0XHRcdFx0XHRcdHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgXHRcdGlmICh0b2tlblNpZ25pZmljYW50KSB7XG4gIFx0XHQgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgLy8vXG5cblx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1x0Ly8vXG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG4gIFx0fVxuXG5cdFx0cmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXG4gICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNUb29EZWVwKCkge1xuICAgIGNvbnN0IHRvb0RlZXAgPSAodGhpcy5kZXB0aCA+IHRoaXMubWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiB0b29EZWVwO1xuICB9XG5cblx0YmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuXHR9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBpbmNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgfVxuXG4gIGRlY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgcnVsZU1hcCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcblx0XHRcdFx0XHRkZXB0aCA9IDAsXG5cdFx0XHRcdFx0bWF4aW11bURlcHRoID0gREVGQVVMVF9NQVhJTVVNX0RFUFRILFxuXHRcdFx0XHRcdGNvbnRleHQgPSBuZXcgQ29udGV4dChydWxlTWFwLCB0b2tlbnMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLE9BQUE7YUFBQSxPQUFBLENBQ0EsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFlBQUE7OEJBREEsT0FBQTthQUVBLE9BQUEsR0FBQSxPQUFBO2FBQ0EsTUFBQSxHQUFBLE1BQUE7YUFDQSxLQUFBLEdBQUEsS0FBQTthQUNBLEtBQUEsR0FBQSxLQUFBO2FBQ0EsWUFBQSxHQUFBLFlBQUE7O2lCQU5BLE9BQUE7O0FBU0EsZUFBQSxHQUFBLFVBQUE7NEJBQUEsVUFBQTs0QkFDQSxPQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFNBQUE7NEJBQUEsU0FBQTs0QkFDQSxNQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQTs0QkFDQSxLQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQTs0QkFDQSxLQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGVBQUE7NEJBQUEsZUFBQTs0QkFDQSxZQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGFBQUE7NEJBQUEsYUFBQTtvQkFDQSxVQUFBLFFBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO3VCQUVBLFVBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsWUFBQTs0QkFBQSxZQUFBO29CQUNBLFNBQUEsR0FBQSxJQUFBO29CQUVBLFlBQUEsUUFBQSxNQUFBLENBQUEsTUFBQTt5QkFFQSxLQUFBLEdBQUEsWUFBQTtBQUNBLDZCQUFBLFFBQUEsTUFBQSxNQUFBLEtBQUE7O3VCQUdBLFNBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsdUJBQUE7NEJBQUEsdUJBQUE7b0JBQ0Esb0JBQUEsR0FBQSxJQUFBO29CQUVBLFlBQUEsUUFBQSxNQUFBLENBQUEsTUFBQTsyQkFFQSxLQUFBLEdBQUEsWUFBQTt3QkFDQSxLQUFBLFFBQUEsTUFBQSxNQUFBLEtBQUEsS0FDQSxnQkFBQSxHQUFBLEtBQUEsQ0FBQSxhQUFBO3dCQUVBLGdCQUFBOzRCQUNBLGdCQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsNENBQUEsR0FBQSxnQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBOzs7O3VCQU1BLG9CQUFBOzs7O0FBR0EsZUFBQSxHQUFBLDBCQUFBOzRCQUFBLDBCQUFBO29CQUNBLHdCQUFBLEdBQUEsS0FBQTtvQkFFQSxZQUFBLFFBQUEsTUFBQSxDQUFBLE1BQUE7eUJBRUEsS0FBQSxHQUFBLFlBQUE7d0JBQ0EsU0FBQSxRQUFBLE1BQUEsTUFBQSxLQUFBO0FBRUEsNENBQUEsR0FBQSxTQUFBLENBQUEsaUJBQUE7O3VCQUdBLHdCQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFNBQUE7NEJBQUEsU0FBQTtvQkFDQSxPQUFBLFFBQUEsS0FBQSxRQUFBLFlBQUE7dUJBRUEsT0FBQTs7OztBQUdBLGVBQUEsR0FBQSxTQUFBOzRCQUFBLFNBQUEsQ0FBQSxVQUFBO3FCQUNBLEtBQUEsR0FBQSxVQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsUUFBQTs0QkFBQSxRQUFBLENBQUEsS0FBQTtxQkFDQSxLQUFBLEdBQUEsS0FBQTs7OztBQUdBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUE7cUJBQ0EsS0FBQTs7OztBQUdBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUE7cUJBQ0EsS0FBQTs7Ozs7QUFHQSxlQUFBLEdBQUEsb0JBQUE7NEJBQUEsb0JBQUEsQ0FBQSxNQUFBLEVBQUEsT0FBQTtvQkFDQSxLQUFBLEdBQUEsQ0FBQSxFQUNBLEtBQUEsR0FBQSxDQUFBLEVBQ0EsWUFBQSxHQTdHQSxVQUFBLHdCQThHQSxPQUFBLE9BQUEsT0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxZQUFBO3VCQUVBLE9BQUE7Ozs7V0E5R0EsT0FBQTs7a0JBQUEsT0FBQSJ9