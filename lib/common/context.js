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
var Context = /*#__PURE__*/ function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX0RFUFRIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocnVsZU1hcCwgdG9rZW5zLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuXHRnZXRJbmRleCgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG4gIGdldERlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICB9XG5cblx0Z2V0TWF4aW11bURlcHRoKCkge1xuXHRcdHJldHVybiB0aGlzLm1heGltdW1EZXB0aDtcblx0fVxuXG5cdGdldFNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcblx0XHRsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gIFx0Y29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gIFx0d2hpbGUgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcblx0XHRcdFx0XHRcdHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgXHRcdGlmICh0b2tlblNpZ25pZmljYW50KSB7XG4gIFx0XHQgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgLy8vXG5cblx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1x0Ly8vXG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG4gIFx0fVxuXG5cdFx0cmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXG4gICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNUb29EZWVwKCkge1xuICAgIGNvbnN0IHRvb0RlZXAgPSAodGhpcy5kZXB0aCA+IHRoaXMubWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiB0b29EZWVwO1xuICB9XG5cblx0YmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuXHR9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBpbmNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgfVxuXG4gIGRlY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgcnVsZU1hcCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcblx0XHRcdFx0XHRkZXB0aCA9IDAsXG5cdFx0XHRcdFx0bWF4aW11bURlcHRoID0gREVGQVVMVF9NQVhJTVVNX0RFUFRILFxuXHRcdFx0XHRcdGNvbnRleHQgPSBuZXcgQ29udGV4dChydWxlTWFwLCB0b2tlbnMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFMEIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9CLE9BQU87YUFBUCxPQUFPLENBQ2QsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVk7OEJBRHBDLE9BQU87YUFFbkIsT0FBTyxHQUFHLE9BQU87YUFDakIsTUFBTSxHQUFHLE1BQU07YUFDakIsS0FBSyxHQUFHLEtBQUs7YUFDYixLQUFLLEdBQUcsS0FBSzthQUNYLFlBQVksR0FBRyxZQUFZOztpQkFOZixPQUFPOztZQVMxQixHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVLEdBQUcsQ0FBQzs0QkFDQSxPQUFPO1lBQ3JCLENBQUM7OztZQUVE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