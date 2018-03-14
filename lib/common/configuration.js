'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_MAXIMUM_DEPTH = 99;

var Configuration = function () {
  function Configuration(significantTokens, maximumDepth, rules, depth, index) {
    _classCallCheck(this, Configuration);

    this.significantTokens = significantTokens;
    this.maximumDepth = maximumDepth;
    this.rules = rules;
    this.depth = depth;
    this.index = index;
  }

  _createClass(Configuration, [{
    key: 'getSignificantTokens',
    value: function getSignificantTokens() {
      return this.significantTokens;
    }
  }, {
    key: 'getMaximumDepth',
    value: function getMaximumDepth() {
      return this.maximumDepth;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'getSavedIndex',
    value: function getSavedIndex() {
      var savedIndex = this.index; ///

      return savedIndex;
    }
  }, {
    key: 'getNextSignificantToken',
    value: function getNextSignificantToken() {
      var significantTokensLength = this.significantTokens.length,
          lastIndex = significantTokensLength - 1,
          nextSignificantToken = this.index <= lastIndex ? this.significantTokens[this.index++] : null;

      return nextSignificantToken;
    }
  }, {
    key: 'getNextNonWhitespaceSignificantToken',
    value: function getNextNonWhitespaceSignificantToken(noWhitespace) {
      var nextNonWhitespaceSignificantToken = null;

      var nextSignificantToken = this.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        var nextSignificantTokenIsWhitespaceToken = nextSignificantToken.isWhitespaceToken(),
            nextSignificantTokenIsNonWhitespaceToken = !nextSignificantTokenIsWhitespaceToken;

        if (nextSignificantTokenIsNonWhitespaceToken) {
          nextNonWhitespaceSignificantToken = nextSignificantToken;
        } else {
          if (noWhitespace) {
            nextNonWhitespaceSignificantToken = null;
          } else {
            nextNonWhitespaceSignificantToken = this.getNextNonWhitespaceSignificantToken(noWhitespace);
          }
        }
      }

      return nextNonWhitespaceSignificantToken;
    }
  }, {
    key: 'isTooDeep',
    value: function isTooDeep() {
      var tooDeep = this.depth > this.maximumDepth;

      return tooDeep;
    }
  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'increaseDepth',
    value: function increaseDepth() {
      this.depth++;
    }
  }, {
    key: 'decreaseDepth',
    value: function decreaseDepth() {
      this.depth--;
    }
  }, {
    key: 'backtrack',
    value: function backtrack(savedIndex) {
      this.index = savedIndex; ///
    }
  }], [{
    key: 'fromSignificantTokensAndRules',
    value: function fromSignificantTokensAndRules(significantTokens, rules) {
      var maximumDepth = DEFAULT_MAXIMUM_DEPTH,
          depth = 0,
          index = 0,
          configuration = new Configuration(significantTokens, maximumDepth, rules, depth, index);

      return configuration;
    }
  }]);

  return Configuration;
}();

module.exports = Configuration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX01BWElNVU1fREVQVEgiLCJDb25maWd1cmF0aW9uIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJtYXhpbXVtRGVwdGgiLCJydWxlcyIsImRlcHRoIiwiaW5kZXgiLCJzYXZlZEluZGV4Iiwic2lnbmlmaWNhbnRUb2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsIm5vV2hpdGVzcGFjZSIsIm5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW5Jc05vbldoaXRlc3BhY2VUb2tlbiIsImdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsInRvb0RlZXAiLCJjb25maWd1cmF0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLHdCQUF3QixFQUE5Qjs7SUFFTUMsYTtBQUNKLHlCQUFZQyxpQkFBWixFQUErQkMsWUFBL0IsRUFBNkNDLEtBQTdDLEVBQW9EQyxLQUFwRCxFQUEyREMsS0FBM0QsRUFBa0U7QUFBQTs7QUFDaEUsU0FBS0osaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MkNBRXNCO0FBQ3JCLGFBQU8sS0FBS0osaUJBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtDLFlBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsYUFBYSxLQUFLRCxLQUF4QixDQURjLENBQ2lCOztBQUUvQixhQUFPQyxVQUFQO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBTUMsMEJBQTBCLEtBQUtOLGlCQUFMLENBQXVCTyxNQUF2RDtBQUFBLFVBQ01DLFlBQVlGLDBCQUEwQixDQUQ1QztBQUFBLFVBRU1HLHVCQUF3QixLQUFLTCxLQUFMLElBQWNJLFNBQWYsR0FDRyxLQUFLUixpQkFBTCxDQUF1QixLQUFLSSxLQUFMLEVBQXZCLENBREgsR0FFSyxJQUpsQzs7QUFNQSxhQUFPSyxvQkFBUDtBQUNEOzs7eURBRW9DQyxZLEVBQWM7QUFDakQsVUFBSUMsb0NBQW9DLElBQXhDOztBQUVBLFVBQU1GLHVCQUF1QixLQUFLRyx1QkFBTCxFQUE3Qjs7QUFFQSxVQUFJSCx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakMsWUFBTUksd0NBQXdDSixxQkFBcUJLLGlCQUFyQixFQUE5QztBQUFBLFlBQ01DLDJDQUEyQyxDQUFDRixxQ0FEbEQ7O0FBR0EsWUFBSUUsd0NBQUosRUFBOEM7QUFDNUNKLDhDQUFvQ0Ysb0JBQXBDO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSUMsWUFBSixFQUFrQjtBQUNoQkMsZ0RBQW9DLElBQXBDO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLGdEQUFvQyxLQUFLSyxvQ0FBTCxDQUEwQ04sWUFBMUMsQ0FBcEM7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0MsaUNBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTU0sVUFBVyxLQUFLZCxLQUFMLEdBQWEsS0FBS0YsWUFBbkM7O0FBRUEsYUFBT2dCLE9BQVA7QUFDRDs7OzZCQUVRYixLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0QsS0FBTDtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxLQUFMO0FBQ0Q7Ozs4QkFFU0UsVSxFQUFZO0FBQ3BCLFdBQUtELEtBQUwsR0FBYUMsVUFBYixDQURvQixDQUNNO0FBQzNCOzs7a0RBRW9DTCxpQixFQUFtQkUsSyxFQUFPO0FBQzdELFVBQU1ELGVBQWVILHFCQUFyQjtBQUFBLFVBQ01LLFFBQVEsQ0FEZDtBQUFBLFVBRU1DLFFBQVEsQ0FGZDtBQUFBLFVBR01jLGdCQUFnQixJQUFJbkIsYUFBSixDQUFrQkMsaUJBQWxCLEVBQXFDQyxZQUFyQyxFQUFtREMsS0FBbkQsRUFBMERDLEtBQTFELEVBQWlFQyxLQUFqRSxDQUh0Qjs7QUFLQSxhQUFPYyxhQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCckIsYUFBakIiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgREVGQVVMVF9NQVhJTVVNX0RFUFRIID0gOTk7XG5cbmNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VucywgbWF4aW11bURlcHRoLCBydWxlcywgZGVwdGgsIGluZGV4KSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG4gIFxuICBnZXRTaWduaWZpY2FudFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VucztcbiAgfVxuXG4gIGdldE1heGltdW1EZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhpbXVtRGVwdGg7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBnZXRTYXZlZEluZGV4KCkge1xuICAgIGNvbnN0IHNhdmVkSW5kZXggPSB0aGlzLmluZGV4OyAvLy9cbiAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2Vuc0xlbmd0aCA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbnMubGVuZ3RoLFxuICAgICAgICAgIGxhc3RJbmRleCA9IHNpZ25pZmljYW50VG9rZW5zTGVuZ3RoIC0gMSxcbiAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9ICh0aGlzLmluZGV4IDw9IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduaWZpY2FudFRva2Vuc1t0aGlzLmluZGV4KytdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IG5leHRTaWduaWZpY2FudFRva2VuID0gdGhpcy5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKSxcbiAgICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuSXNOb25XaGl0ZXNwYWNlVG9rZW4gPSAhbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbjtcblxuICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuSXNOb25XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobm9XaGl0ZXNwYWNlKSB7XG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSB0aGlzLmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzVG9vRGVlcCgpIHtcbiAgICBjb25zdCB0b29EZWVwID0gKHRoaXMuZGVwdGggPiB0aGlzLm1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gdG9vRGVlcDtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgaW5jcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoKys7XG4gIH1cblxuICBkZWNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbnNBbmRSdWxlcyhzaWduaWZpY2FudFRva2VucywgcnVsZXMpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSBERUZBVUxUX01BWElNVU1fREVQVEgsXG4gICAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oc2lnbmlmaWNhbnRUb2tlbnMsIG1heGltdW1EZXB0aCwgcnVsZXMsIGRlcHRoLCBpbmRleCk7XG5cbiAgICByZXR1cm4gY29uZmlndXJhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZ3VyYXRpb247XG4iXX0=