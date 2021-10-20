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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX0RFUFRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3RvcihydWxlTWFwLCB0b2tlbnMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgICB0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG5cdGdldEluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuXHRnZXRNYXhpbXVtRGVwdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuXHR9XG5cblx0Z2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuXHRcdGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgXHRjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgXHR3aGlsZSAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICBcdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdLFxuXHRcdFx0XHRcdFx0dG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcblxuICBcdFx0aWYgKHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgXHRcdCAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAvLy9cblxuXHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XHQvLy9cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cbiAgXHR9XG5cblx0XHRyZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgY29uc3QgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cbiAgICAgIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IG5leHRUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9ICh0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuXHRiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG5cdH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCBydWxlTWFwKSB7XG4gICAgY29uc3QgaW5kZXggPSAwLFxuXHRcdFx0XHRcdGRlcHRoID0gMCxcblx0XHRcdFx0XHRtYXhpbXVtRGVwdGggPSBERUZBVUxUX01BWElNVU1fREVQVEgsXG5cdFx0XHRcdFx0Y29udGV4dCA9IG5ldyBDb250ZXh0KHJ1bGVNYXAsIHRva2VucywgaW5kZXgsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwicnVsZU1hcCIsInRva2VucyIsImluZGV4IiwiZGVwdGgiLCJtYXhpbXVtRGVwdGgiLCJnZXRSdWxlTWFwIiwiZ2V0VG9rZW5zIiwiZ2V0SW5kZXgiLCJnZXREZXB0aCIsImdldE1heGltdW1EZXB0aCIsImdldFNhdmVkSW5kZXgiLCJzYXZlZEluZGV4IiwiZ2V0TmV4dFRva2VuIiwibmV4dFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwidG9rZW5TaWduaWZpY2FudCIsImlzU2lnbmlmaWNhbnQiLCJzaWduaWZpY2FudFRva2VuIiwiaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsImlzVG9vRGVlcCIsInRvb0RlZXAiLCJiYWNrdHJhY2siLCJzZXRJbmRleCIsImluY3JlYXNlRGVwdGgiLCJkZWNyZWFzZURlcHRoIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUUwQixHQUFhLENBQWIsU0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUJBLE9BQU8saUJBQWIsUUFBUTthQUFGQSxPQUFPLENBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsWUFBWTs4QkFEcENMLE9BQU87UUFFeEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87UUFDdEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07UUFDdEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7UUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBLFlBQVk7O2lCQU5mTCxPQUFPOztZQVMxQk0sR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsR0FBRyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUNMLE9BQU87WUFDckIsQ0FBQzs7O1lBRURNLEdBQVMsRUFBVEEsQ0FBUzttQkFBVEEsUUFBUSxDQUFSQSxTQUFTLEdBQUcsQ0FBQztnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDTCxNQUFNO1lBQ3BCLENBQUM7OztZQUVGTSxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQ0wsS0FBSztZQUNsQixDQUFDOzs7WUFFQU0sR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUNMLEtBQUs7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