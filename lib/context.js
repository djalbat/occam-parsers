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
                var index = 0, depth = 0, maximumDepth = _defaults.DEFAULT_MAXIMUM_DEPTH, context = new Context(ruleMap, tokens, index, depth, maximumDepth);
                return context;
            }
        }
    ]);
    return Context;
}();
exports.default = Context;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01BWElNVU1fREVQVEggfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocnVsZU1hcCwgdG9rZW5zLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuXHRnZXRJbmRleCgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG4gIGdldERlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICB9XG5cblx0Z2V0TWF4aW11bURlcHRoKCkge1xuXHRcdHJldHVybiB0aGlzLm1heGltdW1EZXB0aDtcblx0fVxuXG5cdGdldFNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcblx0XHRsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gIFx0Y29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gIFx0d2hpbGUgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcblx0XHRcdFx0XHRcdHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgXHRcdGlmICh0b2tlblNpZ25pZmljYW50KSB7XG4gIFx0XHQgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgLy8vXG5cblx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1x0Ly8vXG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG4gIFx0fVxuXG5cdFx0cmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXG4gICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNUb29EZWVwKCkge1xuICAgIGNvbnN0IHRvb0RlZXAgPSAodGhpcy5kZXB0aCA+IHRoaXMubWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiB0b29EZWVwO1xuICB9XG5cblx0YmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuXHR9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBpbmNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgfVxuXG4gIGRlY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgcnVsZU1hcCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcblx0XHRcdFx0XHRkZXB0aCA9IDAsXG5cdFx0XHRcdFx0bWF4aW11bURlcHRoID0gREVGQVVMVF9NQVhJTVVNX0RFUFRILFxuXHRcdFx0XHRcdGNvbnRleHQgPSBuZXcgQ29udGV4dChydWxlTWFwLCB0b2tlbnMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsInJ1bGVNYXAiLCJ0b2tlbnMiLCJpbmRleCIsImRlcHRoIiwibWF4aW11bURlcHRoIiwiZ2V0UnVsZU1hcCIsImdldFRva2VucyIsImdldEluZGV4IiwiZ2V0RGVwdGgiLCJnZXRNYXhpbXVtRGVwdGgiLCJnZXRTYXZlZEluZGV4Iiwic2F2ZWRJbmRleCIsImdldE5leHRUb2tlbiIsIm5leHRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJ0b2tlbiIsInRva2VuU2lnbmlmaWNhbnQiLCJpc1NpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJpc1Rvb0RlZXAiLCJ0b29EZWVwIiwiYmFja3RyYWNrIiwic2V0SW5kZXgiLCJpbmNyZWFzZURlcHRoIiwiZGVjcmVhc2VEZXB0aCIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFMEIsR0FBWSxDQUFaLFNBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdCQSxPQUFPLGlCQUFiLFFBQVE7YUFBRkEsT0FBTyxDQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFlBQVk7OEJBRHBDTCxPQUFPO1FBRXhCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO1FBQ3RCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO1FBQ3RCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO1FBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO1FBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZOztpQkFOZkwsT0FBTzs7WUFTMUJNLEdBQVUsRUFBVkEsQ0FBVTttQkFBVkEsUUFBUSxDQUFSQSxVQUFVLEdBQUcsQ0FBQztnQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDTCxPQUFPO1lBQ3JCLENBQUM7OztZQUVETSxHQUFTLEVBQVRBLENBQVM7bUJBQVRBLFFBQVEsQ0FBUkEsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQ0wsTUFBTTtZQUNwQixDQUFDOzs7WUFFRk0sR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUNMLEtBQUs7WUFDbEIsQ0FBQzs7O1lBRUFNLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDTCxLQUFLO1lBQ25CLENBQUM7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