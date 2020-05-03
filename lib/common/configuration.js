"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOlsiREVGQVVMVF9NQVhJTVVNX0RFUFRIIiwiQ29uZmlndXJhdGlvbiIsInRva2VucyIsInJ1bGVzIiwiaW5kZXgiLCJkZXB0aCIsIm1heGltdW1EZXB0aCIsInNhdmVkSW5kZXgiLCJuZXh0VG9rZW4iLCJ0b2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwidG9rZW5TaWduaWZpY2FudCIsImlzU2lnbmlmaWNhbnQiLCJzaWduaWZpY2FudFRva2VuIiwidG9vRGVlcCIsImNvbmZpZ3VyYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxFQUE5Qjs7SUFFTUMsYTtBQUNKLHlCQUFZQyxNQUFaLEVBQW9CQyxLQUFwQixFQUEyQkMsS0FBM0IsRUFBa0NDLEtBQWxDLEVBQXlDQyxZQUF6QyxFQUF1RDtBQUFBOztBQUNyRCxTQUFLSixNQUFMLEdBQWNBLE1BQWQ7QUFDRixTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLSixNQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7K0JBRVM7QUFDVixhQUFPLEtBQUtDLEtBQVo7QUFDQTs7OytCQUVXO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OztzQ0FFZ0I7QUFDakIsYUFBTyxLQUFLQyxZQUFaO0FBQ0E7OztvQ0FFZTtBQUNiLFVBQU1DLFVBQVUsR0FBRyxLQUFLSCxLQUF4QixDQURhLENBQ2tCOztBQUUvQixhQUFPRyxVQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUVBLFVBQU1DLFlBQVksR0FBRyxLQUFLUCxNQUFMLENBQVlRLE1BQWpDOztBQUVBLFVBQUksS0FBS04sS0FBTCxHQUFhSyxZQUFqQixFQUErQjtBQUM3QkQsUUFBQUEsU0FBUyxHQUFHLEtBQUtOLE1BQUwsQ0FBWSxLQUFLRSxLQUFMLEVBQVosQ0FBWjtBQUNEOztBQUVELGFBQU9JLFNBQVA7QUFDRDs7OzhDQUV5QjtBQUMxQixVQUFJRyxvQkFBb0IsR0FBRyxJQUEzQjtBQUVDLFVBQU1GLFlBQVksR0FBRyxLQUFLUCxNQUFMLENBQVlRLE1BQWpDOztBQUVBLGFBQU8sS0FBS04sS0FBTCxHQUFhSyxZQUFwQixFQUFrQztBQUNqQyxZQUFNRyxLQUFLLEdBQUcsS0FBS1YsTUFBTCxDQUFZLEtBQUtFLEtBQUwsRUFBWixDQUFkO0FBQUEsWUFDRVMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsYUFBTixFQURyQjs7QUFHQSxZQUFJRCxnQkFBSixFQUFzQjtBQUNwQixjQUFNRSxnQkFBZ0IsR0FBR0gsS0FBekIsQ0FEb0IsQ0FDWTs7QUFFbENELFVBQUFBLG9CQUFvQixHQUFHSSxnQkFBdkIsQ0FIc0IsQ0FHbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFRixhQUFPSixvQkFBUDtBQUNDOzs7Z0NBRVc7QUFDVixVQUFNSyxPQUFPLEdBQUksS0FBS1gsS0FBTCxHQUFhLEtBQUtDLFlBQW5DO0FBRUEsYUFBT1UsT0FBUDtBQUNEOzs7OEJBRVFULFUsRUFBWTtBQUNyQixXQUFLSCxLQUFMLEdBQWFHLFVBQWIsQ0FEcUIsQ0FDSztBQUMxQjs7OzZCQUVTSCxLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0MsS0FBTDtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxLQUFMO0FBQ0Q7Ozt1Q0FFeUJILE0sRUFBUUMsSyxFQUFPO0FBQ3ZDLFVBQU1DLEtBQUssR0FBRyxDQUFkO0FBQUEsVUFDQ0MsS0FBSyxHQUFHLENBRFQ7QUFBQSxVQUVDQyxZQUFZLEdBQUdOLHFCQUZoQjtBQUFBLFVBR0NpQixhQUFhLEdBQUcsSUFBSWhCLGFBQUosQ0FBa0JDLE1BQWxCLEVBQTBCQyxLQUExQixFQUFpQ0MsS0FBakMsRUFBd0NDLEtBQXhDLEVBQStDQyxZQUEvQyxDQUhqQjtBQUtBLGFBQU9XLGFBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxCLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IERFRkFVTFRfTUFYSU1VTV9ERVBUSCA9IDk5O1xuXG5jbGFzcyBDb25maWd1cmF0aW9uIHtcbiAgY29uc3RydWN0b3IodG9rZW5zLCBydWxlcywgaW5kZXgsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLnJ1bGVzID0gcnVsZXM7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgfVxuICBcbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG5cblx0Z2V0SW5kZXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXg7XG5cdH1cblxuICBnZXREZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXB0aDtcbiAgfVxuXG5cdGdldE1heGltdW1EZXB0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXhpbXVtRGVwdGg7XG5cdH1cblxuXHRnZXRTYXZlZEluZGV4KCkge1xuICAgIGNvbnN0IHNhdmVkSW5kZXggPSB0aGlzLmluZGV4OyAvLy9cbiAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBnZXROZXh0VG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG5cdFx0bGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICBcdGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICBcdHdoaWxlICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gIFx0XHRjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10sXG5cdFx0XHRcdFx0XHR0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gIFx0XHRpZiAodG9rZW5TaWduaWZpY2FudCkge1xuICBcdFx0ICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdG9rZW47IC8vL1xuXG5cdFx0XHRcdG5leHRTaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcdC8vL1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuICBcdH1cblxuXHRcdHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzVG9vRGVlcCgpIHtcbiAgICBjb25zdCB0b29EZWVwID0gKHRoaXMuZGVwdGggPiB0aGlzLm1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gdG9vRGVlcDtcbiAgfVxuXG5cdGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cblx0fVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgaW5jcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoKys7XG4gIH1cblxuICBkZWNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW5zQW5kUnVsZXModG9rZW5zLCBydWxlcykge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcblx0XHRcdFx0XHRkZXB0aCA9IDAsXG5cdFx0XHRcdFx0bWF4aW11bURlcHRoID0gREVGQVVMVF9NQVhJTVVNX0RFUFRILFxuXHRcdFx0XHRcdGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih0b2tlbnMsIHJ1bGVzLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gY29uZmlndXJhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZ3VyYXRpb247XG4iXX0=