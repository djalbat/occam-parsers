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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX0RFUFRIIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihydWxlTWFwLCB0b2tlbnMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgICB0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG5cdGdldEluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuXHRnZXRNYXhpbXVtRGVwdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuXHR9XG5cblx0Z2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuXHRcdGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgXHRjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgXHR3aGlsZSAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICBcdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdLFxuXHRcdFx0XHRcdFx0dG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcblxuICBcdFx0aWYgKHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgXHRcdCAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAvLy9cblxuXHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XHQvLy9cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cbiAgXHR9XG5cblx0XHRyZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgY29uc3QgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cbiAgICAgIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IG5leHRUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9ICh0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuXHRiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG5cdH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCBydWxlTWFwKSB7XG4gICAgY29uc3QgaW5kZXggPSAwLFxuXHRcdFx0XHRcdGRlcHRoID0gMCxcblx0XHRcdFx0XHRtYXhpbXVtRGVwdGggPSBERUZBVUxUX01BWElNVU1fREVQVEgsXG5cdFx0XHRcdFx0c3RhdGUgPSBuZXcgU3RhdGUocnVsZU1hcCwgdG9rZW5zLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZSIsInJ1bGVNYXAiLCJ0b2tlbnMiLCJpbmRleCIsImRlcHRoIiwibWF4aW11bURlcHRoIiwiZ2V0UnVsZU1hcCIsImdldFRva2VucyIsImdldEluZGV4IiwiZ2V0RGVwdGgiLCJnZXRNYXhpbXVtRGVwdGgiLCJnZXRTYXZlZEluZGV4Iiwic2F2ZWRJbmRleCIsImdldE5leHRUb2tlbiIsIm5leHRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJ0b2tlbiIsInRva2VuU2lnbmlmaWNhbnQiLCJpc1NpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJpc1Rvb0RlZXAiLCJ0b29EZWVwIiwiYmFja3RyYWNrIiwic2V0SW5kZXgiLCJpbmNyZWFzZURlcHRoIiwiZGVjcmVhc2VEZXB0aCIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwiREVGQVVMVF9NQVhJTVVNX0RFUFRIIiwic3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFc0MsSUFBQSxTQUFZLFdBQVosWUFBWSxDQUFBOzs7Ozs7Ozs7OERBRmxEO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7QUFJZSxJQUFBLEFBQU1BLEtBQUssaUJDSnZCLEFESVk7YUFBTUEsS0FBSyxDQUNaQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFlBQVk7b0NBTHpEO1FBTUksSUFBSSxDQUFDSixPQUFPLEdBQUdBLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWSxDQUFDOzs7O1lBR25DQyxHQUFVLEVBQVZBLFlBQVU7WUViWixPRmFFQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsT0FBTyxJQUFJLENBQUNMLE9BQU8sQ0FBQzthQUNyQjs7O1lBRURNLEdBQVMsRUFBVEEsV0FBUztZRWpCWCxPRmlCRUEsU0FBQUEsU0FBUyxHQUFHO2dCQUNWLE9BQU8sSUFBSSxDQUFDTCxNQUFNLENBQUM7YUFDcEI7OztZQUVGTSxHQUFRLEVBQVJBLFVBQVE7WUVyQlQsT0ZxQkNBLFNBQUFBLFFBQVEsR0FBRztnQkFDVixPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDO2FBQ2xCOzs7WUFFQU0sR0FBUSxFQUFSQSxVQUFRO1lFekJWLE9GeUJFQSxTQUFBQSxRQUFR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