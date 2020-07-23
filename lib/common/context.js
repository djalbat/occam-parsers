"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Context = /*#__PURE__*/function () {
  function Context(ruleMap, tokens, index, depth, maximumDepth) {
    _classCallCheck(this, Context);

    this.ruleMap = ruleMap;
    this.tokens = tokens;
    this.index = index;
    this.depth = depth;
    this.maximumDepth = maximumDepth;
  }

  _createClass(Context, [{
    key: "getRuleMap",
    value: function getRuleMap() {
      return this.ruleMap;
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: "getMaximumDepth",
    value: function getMaximumDepth() {
      return this.maximumDepth;
    }
  }, {
    key: "getSavedIndex",
    value: function getSavedIndex() {
      var savedIndex = this.index; ///

      return savedIndex;
    }
  }, {
    key: "getNextToken",
    value: function getNextToken() {
      var nextToken = null;
      var tokensLength = this.tokens.length;

      if (this.index < tokensLength) {
        nextToken = this.tokens[this.index++];
      }

      return nextToken;
    }
  }, {
    key: "getNextSignificantToken",
    value: function getNextSignificantToken() {
      var nextSignificantToken = null;
      var tokensLength = this.tokens.length;

      while (this.index < tokensLength) {
        var token = this.tokens[this.index++],
            tokenSignificant = token.isSignificant();

        if (tokenSignificant) {
          var significantToken = token; ///

          nextSignificantToken = significantToken; ///

          break;
        }
      }

      return nextSignificantToken;
    }
  }, {
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
  }, {
    key: "isTooDeep",
    value: function isTooDeep() {
      var tooDeep = this.depth > this.maximumDepth;
      return tooDeep;
    }
  }, {
    key: "backtrack",
    value: function backtrack(savedIndex) {
      this.index = savedIndex; ///
    }
  }, {
    key: "setIndex",
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: "increaseDepth",
    value: function increaseDepth() {
      this.depth++;
    }
  }, {
    key: "decreaseDepth",
    value: function decreaseDepth() {
      this.depth--;
    }
  }], [{
    key: "fromTokensAndRuleMap",
    value: function fromTokensAndRuleMap(tokens, ruleMap) {
      var index = 0,
          depth = 0,
          maximumDepth = _constants.DEFAULT_MAXIMUM_DEPTH,
          context = new Context(ruleMap, tokens, index, depth, maximumDepth);
      return context;
    }
  }]);

  return Context;
}();

exports["default"] = Context;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRleHQuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsInJ1bGVNYXAiLCJ0b2tlbnMiLCJpbmRleCIsImRlcHRoIiwibWF4aW11bURlcHRoIiwic2F2ZWRJbmRleCIsIm5leHRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwidG9rZW4iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInNpZ25pZmljYW50VG9rZW4iLCJuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsInRvb0RlZXAiLCJERUZBVUxUX01BWElNVU1fREVQVEgiLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVxQkEsTztBQUNuQixtQkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkJDLEtBQTdCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsWUFBM0MsRUFBeUQ7QUFBQTs7QUFDdkQsU0FBS0osT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0YsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0UsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0osT0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OytCQUVTO0FBQ1YsYUFBTyxLQUFLQyxLQUFaO0FBQ0E7OzsrQkFFVztBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7c0NBRWdCO0FBQ2pCLGFBQU8sS0FBS0MsWUFBWjtBQUNBOzs7b0NBRWU7QUFDYixVQUFNQyxVQUFVLEdBQUcsS0FBS0gsS0FBeEIsQ0FEYSxDQUNrQjs7QUFFL0IsYUFBT0csVUFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQSxVQUFNQyxZQUFZLEdBQUcsS0FBS04sTUFBTCxDQUFZTyxNQUFqQzs7QUFFQSxVQUFJLEtBQUtOLEtBQUwsR0FBYUssWUFBakIsRUFBK0I7QUFDN0JELFFBQUFBLFNBQVMsR0FBRyxLQUFLTCxNQUFMLENBQVksS0FBS0MsS0FBTCxFQUFaLENBQVo7QUFDRDs7QUFFRCxhQUFPSSxTQUFQO0FBQ0Q7Ozs4Q0FFeUI7QUFDMUIsVUFBSUcsb0JBQW9CLEdBQUcsSUFBM0I7QUFFQyxVQUFNRixZQUFZLEdBQUcsS0FBS04sTUFBTCxDQUFZTyxNQUFqQzs7QUFFQSxhQUFPLEtBQUtOLEtBQUwsR0FBYUssWUFBcEIsRUFBa0M7QUFDakMsWUFBTUcsS0FBSyxHQUFHLEtBQUtULE1BQUwsQ0FBWSxLQUFLQyxLQUFMLEVBQVosQ0FBZDtBQUFBLFlBQ0VTLGdCQUFnQixHQUFHRCxLQUFLLENBQUNFLGFBQU4sRUFEckI7O0FBR0EsWUFBSUQsZ0JBQUosRUFBc0I7QUFDcEIsY0FBTUUsZ0JBQWdCLEdBQUdILEtBQXpCLENBRG9CLENBQ1k7O0FBRWxDRCxVQUFBQSxvQkFBb0IsR0FBR0ksZ0JBQXZCLENBSHNCLENBR21COztBQUV6QztBQUNBO0FBQ0E7O0FBRUYsYUFBT0osb0JBQVA7QUFDQzs7O2lEQUU0QjtBQUMzQixVQUFJSyx3QkFBd0IsR0FBRyxLQUEvQjtBQUVBLFVBQU1QLFlBQVksR0FBRyxLQUFLTixNQUFMLENBQVlPLE1BQWpDOztBQUVBLFVBQUksS0FBS04sS0FBTCxHQUFhSyxZQUFqQixFQUErQjtBQUM3QixZQUFNRCxTQUFTLEdBQUcsS0FBS0wsTUFBTCxDQUFZLEtBQUtDLEtBQWpCLENBQWxCO0FBRUFZLFFBQUFBLHdCQUF3QixHQUFHUixTQUFTLENBQUNTLGlCQUFWLEVBQTNCO0FBQ0Q7O0FBRUQsYUFBT0Qsd0JBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUUsT0FBTyxHQUFJLEtBQUtiLEtBQUwsR0FBYSxLQUFLQyxZQUFuQztBQUVBLGFBQU9ZLE9BQVA7QUFDRDs7OzhCQUVRWCxVLEVBQVk7QUFDckIsV0FBS0gsS0FBTCxHQUFhRyxVQUFiLENBRHFCLENBQ0s7QUFDMUI7Ozs2QkFFU0gsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtDLEtBQUw7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0EsS0FBTDtBQUNEOzs7eUNBRTJCRixNLEVBQVFELE8sRUFBUztBQUMzQyxVQUFNRSxLQUFLLEdBQUcsQ0FBZDtBQUFBLFVBQ0NDLEtBQUssR0FBRyxDQURUO0FBQUEsVUFFQ0MsWUFBWSxHQUFHYSxnQ0FGaEI7QUFBQSxVQUdDQyxPQUFPLEdBQUcsSUFBSW5CLE9BQUosQ0FBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkJDLEtBQTdCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsWUFBM0MsQ0FIWDtBQUtBLGFBQU9jLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01BWElNVU1fREVQVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3RvcihydWxlTWFwLCB0b2tlbnMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgICB0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG5cdGdldEluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuXHRnZXRNYXhpbXVtRGVwdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuXHR9XG5cblx0Z2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuXHRcdGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgXHRjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgXHR3aGlsZSAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICBcdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdLFxuXHRcdFx0XHRcdFx0dG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcblxuICBcdFx0aWYgKHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgXHRcdCAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAvLy9cblxuXHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XHQvLy9cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cbiAgXHR9XG5cblx0XHRyZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgY29uc3QgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cbiAgICAgIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IG5leHRUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9ICh0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuXHRiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG5cdH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCBydWxlTWFwKSB7XG4gICAgY29uc3QgaW5kZXggPSAwLFxuXHRcdFx0XHRcdGRlcHRoID0gMCxcblx0XHRcdFx0XHRtYXhpbXVtRGVwdGggPSBERUZBVUxUX01BWElNVU1fREVQVEgsXG5cdFx0XHRcdFx0Y29udGV4dCA9IG5ldyBDb250ZXh0KHJ1bGVNYXAsIHRva2VucywgaW5kZXgsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbn1cbiJdfQ==