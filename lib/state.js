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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX0RFUFRIIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihydWxlTWFwLCB0b2tlbnMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgICB0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG5cdGdldEluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuXHRnZXRNYXhpbXVtRGVwdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuXHR9XG5cblx0Z2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuXHRcdGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgXHRjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgXHR3aGlsZSAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICBcdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdLFxuXHRcdFx0XHRcdFx0dG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcblxuICBcdFx0aWYgKHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgXHRcdCAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAvLy9cblxuXHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XHQvLy9cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cbiAgXHR9XG5cblx0XHRyZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgY29uc3QgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cbiAgICAgIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IG5leHRUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9ICh0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuXHRiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG5cdH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCBydWxlTWFwKSB7XG4gICAgY29uc3QgaW5kZXggPSAwLFxuXHRcdFx0XHRcdGRlcHRoID0gMCxcblx0XHRcdFx0XHRtYXhpbXVtRGVwdGggPSBERUZBVUxUX01BWElNVU1fREVQVEgsXG5cdFx0XHRcdFx0c3RhdGUgPSBuZXcgU3RhdGUocnVsZU1hcCwgdG9rZW5zLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZSIsInJ1bGVNYXAiLCJ0b2tlbnMiLCJpbmRleCIsImRlcHRoIiwibWF4aW11bURlcHRoIiwiZ2V0UnVsZU1hcCIsImdldFRva2VucyIsImdldEluZGV4IiwiZ2V0RGVwdGgiLCJnZXRNYXhpbXVtRGVwdGgiLCJnZXRTYXZlZEluZGV4Iiwic2F2ZWRJbmRleCIsImdldE5leHRUb2tlbiIsIm5leHRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJ0b2tlbiIsInRva2VuU2lnbmlmaWNhbnQiLCJpc1NpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJpc1Rvb0RlZXAiLCJ0b29EZWVwIiwiYmFja3RyYWNrIiwic2V0SW5kZXgiLCJpbmNyZWFzZURlcHRoIiwiZGVjcmVhc2VEZXB0aCIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwiREVGQVVMVF9NQVhJTVVNX0RFUFRIIiwic3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVzQyxHQUFZLENBQVosU0FBWTs7Ozs7Ozs7OzhEQUZsRDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7O0FBSWUsR0FBSyxDQUFDQSxLQUFLLGlCQUFYLFFBQVE7YUFBRkEsS0FBSyxDQUNaQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFlBQVk7b0NBTHpEO1FBTUksSUFBSSxDQUFDSixPQUFPLEdBQUdBLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWSxDQUFDOzs7O1lBR25DQyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQ0wsT0FBTztZQUNyQixDQUFDOzs7WUFFRE0sR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsR0FBRyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUNMLE1BQU07WUFDcEIsQ0FBQzs7O1lBRUZNLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDTCxLQUFLO1lBQ2xCLENBQUM7OztZQUVBTSxHQUFRLEVBQVJBLENBQVE7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