"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Configuration = /*#__PURE__*/function () {
  function Configuration(ruleMap, tokens, index, depth, maximumDepth) {
    _classCallCheck(this, Configuration);

    this.ruleMap = ruleMap;
    this.tokens = tokens;
    this.index = index;
    this.depth = depth;
    this.maximumDepth = maximumDepth;
  }

  _createClass(Configuration, [{
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
          configuration = new Configuration(ruleMap, tokens, index, depth, maximumDepth);
      return configuration;
    }
  }]);

  return Configuration;
}();

exports["default"] = Configuration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsInJ1bGVNYXAiLCJ0b2tlbnMiLCJpbmRleCIsImRlcHRoIiwibWF4aW11bURlcHRoIiwic2F2ZWRJbmRleCIsIm5leHRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwidG9rZW4iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInNpZ25pZmljYW50VG9rZW4iLCJ0b29EZWVwIiwiREVGQVVMVF9NQVhJTVVNX0RFUFRIIiwiY29uZmlndXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFcUJBLGE7QUFDbkIseUJBQVlDLE9BQVosRUFBcUJDLE1BQXJCLEVBQTZCQyxLQUE3QixFQUFvQ0MsS0FBcEMsRUFBMkNDLFlBQTNDLEVBQXlEO0FBQUE7O0FBQ3ZELFNBQUtKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNGLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNFLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtKLE9BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OzsrQkFFUztBQUNWLGFBQU8sS0FBS0MsS0FBWjtBQUNBOzs7K0JBRVc7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7O3NDQUVnQjtBQUNqQixhQUFPLEtBQUtDLFlBQVo7QUFDQTs7O29DQUVlO0FBQ2IsVUFBTUMsVUFBVSxHQUFHLEtBQUtILEtBQXhCLENBRGEsQ0FDa0I7O0FBRS9CLGFBQU9HLFVBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsU0FBUyxHQUFHLElBQWhCO0FBRUEsVUFBTUMsWUFBWSxHQUFHLEtBQUtOLE1BQUwsQ0FBWU8sTUFBakM7O0FBRUEsVUFBSSxLQUFLTixLQUFMLEdBQWFLLFlBQWpCLEVBQStCO0FBQzdCRCxRQUFBQSxTQUFTLEdBQUcsS0FBS0wsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixDQUFaO0FBQ0Q7O0FBRUQsYUFBT0ksU0FBUDtBQUNEOzs7OENBRXlCO0FBQzFCLFVBQUlHLG9CQUFvQixHQUFHLElBQTNCO0FBRUMsVUFBTUYsWUFBWSxHQUFHLEtBQUtOLE1BQUwsQ0FBWU8sTUFBakM7O0FBRUEsYUFBTyxLQUFLTixLQUFMLEdBQWFLLFlBQXBCLEVBQWtDO0FBQ2pDLFlBQU1HLEtBQUssR0FBRyxLQUFLVCxNQUFMLENBQVksS0FBS0MsS0FBTCxFQUFaLENBQWQ7QUFBQSxZQUNFUyxnQkFBZ0IsR0FBR0QsS0FBSyxDQUFDRSxhQUFOLEVBRHJCOztBQUdBLFlBQUlELGdCQUFKLEVBQXNCO0FBQ3BCLGNBQU1FLGdCQUFnQixHQUFHSCxLQUF6QixDQURvQixDQUNZOztBQUVsQ0QsVUFBQUEsb0JBQW9CLEdBQUdJLGdCQUF2QixDQUhzQixDQUdtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVGLGFBQU9KLG9CQUFQO0FBQ0M7OztnQ0FFVztBQUNWLFVBQU1LLE9BQU8sR0FBSSxLQUFLWCxLQUFMLEdBQWEsS0FBS0MsWUFBbkM7QUFFQSxhQUFPVSxPQUFQO0FBQ0Q7Ozs4QkFFUVQsVSxFQUFZO0FBQ3JCLFdBQUtILEtBQUwsR0FBYUcsVUFBYixDQURxQixDQUNLO0FBQzFCOzs7NkJBRVNILEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQyxLQUFMO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtBLEtBQUw7QUFDRDs7O3lDQUUyQkYsTSxFQUFRRCxPLEVBQVM7QUFDM0MsVUFBTUUsS0FBSyxHQUFHLENBQWQ7QUFBQSxVQUNDQyxLQUFLLEdBQUcsQ0FEVDtBQUFBLFVBRUNDLFlBQVksR0FBR1csZ0NBRmhCO0FBQUEsVUFHQ0MsYUFBYSxHQUFHLElBQUlqQixhQUFKLENBQWtCQyxPQUFsQixFQUEyQkMsTUFBM0IsRUFBbUNDLEtBQW5DLEVBQTBDQyxLQUExQyxFQUFpREMsWUFBakQsQ0FIakI7QUFLQSxhQUFPWSxhQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX0RFUFRIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWd1cmF0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZU1hcCwgdG9rZW5zLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuXHRnZXRJbmRleCgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG4gIGdldERlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICB9XG5cblx0Z2V0TWF4aW11bURlcHRoKCkge1xuXHRcdHJldHVybiB0aGlzLm1heGltdW1EZXB0aDtcblx0fVxuXG5cdGdldFNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcblx0XHRsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gIFx0Y29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gIFx0d2hpbGUgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcblx0XHRcdFx0XHRcdHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgXHRcdGlmICh0b2tlblNpZ25pZmljYW50KSB7XG4gIFx0XHQgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgLy8vXG5cblx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1x0Ly8vXG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG4gIFx0fVxuXG5cdFx0cmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNUb29EZWVwKCkge1xuICAgIGNvbnN0IHRvb0RlZXAgPSAodGhpcy5kZXB0aCA+IHRoaXMubWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiB0b29EZWVwO1xuICB9XG5cblx0YmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuXHR9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBpbmNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgfVxuXG4gIGRlY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgcnVsZU1hcCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcblx0XHRcdFx0XHRkZXB0aCA9IDAsXG5cdFx0XHRcdFx0bWF4aW11bURlcHRoID0gREVGQVVMVF9NQVhJTVVNX0RFUFRILFxuXHRcdFx0XHRcdGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbihydWxlTWFwLCB0b2tlbnMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiBjb25maWd1cmF0aW9uO1xuICB9XG59XG4iXX0=