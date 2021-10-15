"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _defaults = require("../defaults");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29udGV4dC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX01BWElNVU1fREVQVEgiLCJDb250ZXh0IiwiY29uc3RydWN0b3IiLCJydWxlTWFwIiwidG9rZW5zIiwiaW5kZXgiLCJkZXB0aCIsIm1heGltdW1EZXB0aCIsImdldFJ1bGVNYXAiLCJnZXRUb2tlbnMiLCJnZXRJbmRleCIsImdldERlcHRoIiwiZ2V0TWF4aW11bURlcHRoIiwiZ2V0U2F2ZWRJbmRleCIsInNhdmVkSW5kZXgiLCJnZXROZXh0VG9rZW4iLCJuZXh0VG9rZW4iLCJ0b2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsIm5leHRTaWduaWZpY2FudFRva2VuIiwidG9rZW4iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInNpZ25pZmljYW50VG9rZW4iLCJpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsIm5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwiaXNUb29EZWVwIiwidG9vRGVlcCIsImJhY2t0cmFjayIsInNldEluZGV4IiwiaW5jcmVhc2VEZXB0aCIsImRlY3JlYXNlRGVwdGgiLCJmcm9tVG9rZW5zQW5kUnVsZU1hcCIsImNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRTBCLEdBQWEsQ0FBYixTQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU5QixPQUFPLGlCQUFiLFFBQVE7YUFBRixPQUFPLENBQ2QsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVk7OEJBRHBDLE9BQU87UUFFeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2hCLElBQUks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VF9NQVhJTVVNX0RFUFRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3RvcihydWxlTWFwLCB0b2tlbnMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgICB0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG5cdGdldEluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuXHRnZXRNYXhpbXVtRGVwdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuXHR9XG5cblx0Z2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuXHRcdGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgXHRjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgXHR3aGlsZSAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICBcdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdLFxuXHRcdFx0XHRcdFx0dG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcblxuICBcdFx0aWYgKHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgXHRcdCAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAvLy9cblxuXHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XHQvLy9cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cbiAgXHR9XG5cblx0XHRyZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgY29uc3QgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cbiAgICAgIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IG5leHRUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9ICh0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuXHRiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG5cdH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCBydWxlTWFwKSB7XG4gICAgY29uc3QgaW5kZXggPSAwLFxuXHRcdFx0XHRcdGRlcHRoID0gMCxcblx0XHRcdFx0XHRtYXhpbXVtRGVwdGggPSBERUZBVUxUX01BWElNVU1fREVQVEgsXG5cdFx0XHRcdFx0Y29udGV4dCA9IG5ldyBDb250ZXh0KHJ1bGVNYXAsIHRva2VucywgaW5kZXgsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbn1cbiJdfQ==