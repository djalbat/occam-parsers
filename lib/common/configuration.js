'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_MAXIMUM_DEPTH = 99;

var Configuration = /*#__PURE__*/function () {
  function Configuration(tokens, rules, index, depth, maximumDepth) {
    _classCallCheck(this, Configuration);

    this.tokens = tokens;
    this.rules = rules;
    this.index = index;
    this.depth = depth;
    this.maximumDepth = maximumDepth;
  }

  _createClass(Configuration, [{
    key: "getTokens",
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: "getRules",
    value: function getRules() {
      return this.rules;
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
    key: "fromTokensAndRules",
    value: function fromTokensAndRules(tokens, rules) {
      var index = 0,
          depth = 0,
          maximumDepth = DEFAULT_MAXIMUM_DEPTH,
          configuration = new Configuration(tokens, rules, index, depth, maximumDepth);
      return configuration;
    }
  }]);

  return Configuration;
}();

module.exports = Configuration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOlsiREVGQVVMVF9NQVhJTVVNX0RFUFRIIiwiQ29uZmlndXJhdGlvbiIsInRva2VucyIsInJ1bGVzIiwiaW5kZXgiLCJkZXB0aCIsIm1heGltdW1EZXB0aCIsInNhdmVkSW5kZXgiLCJuZXh0VG9rZW4iLCJ0b2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwidG9rZW5TaWduaWZpY2FudCIsImlzU2lnbmlmaWNhbnQiLCJzaWduaWZpY2FudFRva2VuIiwidG9vRGVlcCIsImNvbmZpZ3VyYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxFQUE5Qjs7SUFFTUMsYTtBQUNKLHlCQUFZQyxNQUFaLEVBQW9CQyxLQUFwQixFQUEyQkMsS0FBM0IsRUFBa0NDLEtBQWxDLEVBQXlDQyxZQUF6QyxFQUF1RDtBQUFBOztBQUNyRCxTQUFLSixNQUFMLEdBQWNBLE1BQWQ7QUFDRixTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLSixNQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7K0JBRVM7QUFDVixhQUFPLEtBQUtDLEtBQVo7QUFDQTs7OytCQUVXO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OztzQ0FFZ0I7QUFDakIsYUFBTyxLQUFLQyxZQUFaO0FBQ0E7OztvQ0FFZTtBQUNiLFVBQU1DLFVBQVUsR0FBRyxLQUFLSCxLQUF4QixDQURhLENBQ2tCOztBQUUvQixhQUFPRyxVQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUVBLFVBQU1DLFlBQVksR0FBRyxLQUFLUCxNQUFMLENBQVlRLE1BQWpDOztBQUVBLFVBQUksS0FBS04sS0FBTCxHQUFhSyxZQUFqQixFQUErQjtBQUM3QkQsUUFBQUEsU0FBUyxHQUFHLEtBQUtOLE1BQUwsQ0FBWSxLQUFLRSxLQUFMLEVBQVosQ0FBWjtBQUNEOztBQUVELGFBQU9JLFNBQVA7QUFDRDs7OzhDQUV5QjtBQUMxQixVQUFJRyxvQkFBb0IsR0FBRyxJQUEzQjtBQUVDLFVBQU1GLFlBQVksR0FBRyxLQUFLUCxNQUFMLENBQVlRLE1BQWpDOztBQUVBLGFBQU8sS0FBS04sS0FBTCxHQUFhSyxZQUFwQixFQUFrQztBQUNqQyxZQUFNRyxLQUFLLEdBQUcsS0FBS1YsTUFBTCxDQUFZLEtBQUtFLEtBQUwsRUFBWixDQUFkO0FBQUEsWUFDRVMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsYUFBTixFQURyQjs7QUFHQSxZQUFJRCxnQkFBSixFQUFzQjtBQUNwQixjQUFNRSxnQkFBZ0IsR0FBR0gsS0FBekIsQ0FEb0IsQ0FDWTs7QUFFbENELFVBQUFBLG9CQUFvQixHQUFHSSxnQkFBdkIsQ0FIc0IsQ0FHbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFRixhQUFPSixvQkFBUDtBQUNDOzs7Z0NBRVc7QUFDVixVQUFNSyxPQUFPLEdBQUksS0FBS1gsS0FBTCxHQUFhLEtBQUtDLFlBQW5DO0FBRUEsYUFBT1UsT0FBUDtBQUNEOzs7OEJBRVFULFUsRUFBWTtBQUNyQixXQUFLSCxLQUFMLEdBQWFHLFVBQWIsQ0FEcUIsQ0FDSztBQUMxQjs7OzZCQUVTSCxLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0MsS0FBTDtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxLQUFMO0FBQ0Q7Ozt1Q0FFeUJILE0sRUFBUUMsSyxFQUFPO0FBQ3ZDLFVBQU1DLEtBQUssR0FBRyxDQUFkO0FBQUEsVUFDQ0MsS0FBSyxHQUFHLENBRFQ7QUFBQSxVQUVDQyxZQUFZLEdBQUdOLHFCQUZoQjtBQUFBLFVBR0NpQixhQUFhLEdBQUcsSUFBSWhCLGFBQUosQ0FBa0JDLE1BQWxCLEVBQTBCQyxLQUExQixFQUFpQ0MsS0FBakMsRUFBd0NDLEtBQXhDLEVBQStDQyxZQUEvQyxDQUhqQjtBQUtBLGFBQU9XLGFBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxCLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBERUZBVUxUX01BWElNVU1fREVQVEggPSA5OTtcblxuY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRva2VucywgcnVsZXMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdFx0dGhpcy5ydWxlcyA9IHJ1bGVzO1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcblx0XHR0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG4gIH1cbiAgXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG5cdGdldEluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuXHRnZXRNYXhpbXVtRGVwdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuXHR9XG5cblx0Z2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuXHRcdGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgXHRjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgXHR3aGlsZSAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICBcdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdLFxuXHRcdFx0XHRcdFx0dG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcblxuICBcdFx0aWYgKHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgXHRcdCAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAvLy9cblxuXHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XHQvLy9cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cbiAgXHR9XG5cblx0XHRyZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9ICh0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuXHRiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG5cdH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFJ1bGVzKHRva2VucywgcnVsZXMpIHtcbiAgICBjb25zdCBpbmRleCA9IDAsXG5cdFx0XHRcdFx0ZGVwdGggPSAwLFxuXHRcdFx0XHRcdG1heGltdW1EZXB0aCA9IERFRkFVTFRfTUFYSU1VTV9ERVBUSCxcblx0XHRcdFx0XHRjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24odG9rZW5zLCBydWxlcywgaW5kZXgsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb25maWd1cmF0aW9uO1xuIl19