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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX0RFUFRIIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihydWxlTWFwLCB0b2tlbnMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgICB0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG5cdGdldEluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuXHRnZXRNYXhpbXVtRGVwdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuXHR9XG5cblx0Z2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuXHRcdGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgXHRjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgXHR3aGlsZSAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICBcdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdLFxuXHRcdFx0XHRcdFx0dG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcblxuICBcdFx0aWYgKHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgXHRcdCAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAvLy9cblxuXHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XHQvLy9cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cbiAgXHR9XG5cblx0XHRyZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgY29uc3QgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cbiAgICAgIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IG5leHRUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9ICh0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuXHRiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG5cdH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCBydWxlTWFwKSB7XG4gICAgY29uc3QgaW5kZXggPSAwLFxuXHRcdFx0XHRcdGRlcHRoID0gMCxcblx0XHRcdFx0XHRtYXhpbXVtRGVwdGggPSBERUZBVUxUX01BWElNVU1fREVQVEgsXG5cdFx0XHRcdFx0c3RhdGUgPSBuZXcgU3RhdGUocnVsZU1hcCwgdG9rZW5zLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU3RhdGUiLCJydWxlTWFwIiwidG9rZW5zIiwiaW5kZXgiLCJkZXB0aCIsIm1heGltdW1EZXB0aCIsImdldFJ1bGVNYXAiLCJnZXRUb2tlbnMiLCJnZXRJbmRleCIsImdldERlcHRoIiwiZ2V0TWF4aW11bURlcHRoIiwiZ2V0U2F2ZWRJbmRleCIsInNhdmVkSW5kZXgiLCJnZXROZXh0VG9rZW4iLCJuZXh0VG9rZW4iLCJ0b2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsIm5leHRTaWduaWZpY2FudFRva2VuIiwidG9rZW4iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInNpZ25pZmljYW50VG9rZW4iLCJpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsIm5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwiaXNUb29EZWVwIiwidG9vRGVlcCIsImJhY2t0cmFjayIsInNldEluZGV4IiwiaW5jcmVhc2VEZXB0aCIsImRlY3JlYXNlRGVwdGgiLCJmcm9tVG9rZW5zQW5kUnVsZU1hcCIsIkRFRkFVTFRfTUFYSU1VTV9ERVBUSCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRXlCLElBQUEsU0FBWSxXQUFaLFlBQVksQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBQSxBQUFNQSxLQUFLLGlCQ0p2QixBRElZO2FBQU1BLEtBQUssQ0FDWkMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxZQUFZOztRQUNyRCxJQUFJLENBQUNKLE9BQU8sR0FBR0EsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSyxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZLENBQUM7Ozs7WUFHbkNDLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHO2dCQUNYLE9BQU8sSUFBSSxDQUFDTCxPQUFPLENBQUM7YUFDckI7OztZQUVETSxHQUFTLEVBQVRBLFdBQVM7bUJBQVRBLFNBQUFBLFNBQVMsR0FBRztnQkFDVixPQUFPLElBQUksQ0FBQ0wsTUFBTSxDQUFDO2FBQ3BCOzs7WUFFRk0sR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1YsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQzthQUNsQjs7O1lBRUFNLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULE9BQU8s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