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
      var index = this.getIndex(),
          savedIndex = index; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX01BWElNVU1fREVQVEgiLCJDb25maWd1cmF0aW9uIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJtYXhpbXVtRGVwdGgiLCJydWxlcyIsImRlcHRoIiwiaW5kZXgiLCJnZXRJbmRleCIsInNhdmVkSW5kZXgiLCJzaWduaWZpY2FudFRva2Vuc0xlbmd0aCIsImxlbmd0aCIsImxhc3RJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwibm9XaGl0ZXNwYWNlIiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJuZXh0U2lnbmlmaWNhbnRUb2tlbklzTm9uV2hpdGVzcGFjZVRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwidG9vRGVlcCIsImNvbmZpZ3VyYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCLEVBQTlCOztJQUVNQyxhO0FBQ0oseUJBQVlDLGlCQUFaLEVBQStCQyxZQUEvQixFQUE2Q0MsS0FBN0MsRUFBb0RDLEtBQXBELEVBQTJEQyxLQUEzRCxFQUFrRTtBQUFBOztBQUNoRSxTQUFLSixpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLSixpQkFBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0MsWUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQSxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLGFBQWFGLEtBRG5CLENBRGMsQ0FFWTs7QUFFMUIsYUFBT0UsVUFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQU1DLDBCQUEwQixLQUFLUCxpQkFBTCxDQUF1QlEsTUFBdkQ7QUFBQSxVQUNNQyxZQUFZRiwwQkFBMEIsQ0FENUM7QUFBQSxVQUVNRyx1QkFBd0IsS0FBS04sS0FBTCxJQUFjSyxTQUFmLEdBQ0csS0FBS1QsaUJBQUwsQ0FBdUIsS0FBS0ksS0FBTCxFQUF2QixDQURILEdBRUssSUFKbEM7O0FBTUEsYUFBT00sb0JBQVA7QUFDRDs7O3lEQUVvQ0MsWSxFQUFjO0FBQ2pELFVBQUlDLG9DQUFvQyxJQUF4Qzs7QUFFQSxVQUFNRix1QkFBdUIsS0FBS0csdUJBQUwsRUFBN0I7O0FBRUEsVUFBSUgseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLFlBQU1JLHdDQUF3Q0oscUJBQXFCSyxpQkFBckIsRUFBOUM7QUFBQSxZQUNNQywyQ0FBMkMsQ0FBQ0YscUNBRGxEOztBQUdBLFlBQUlFLHdDQUFKLEVBQThDO0FBQzVDSiw4Q0FBb0NGLG9CQUFwQztBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlDLFlBQUosRUFBa0I7QUFDaEJDLGdEQUFvQyxJQUFwQztBQUNELFdBRkQsTUFFTztBQUNMQSxnREFBb0MsS0FBS0ssb0NBQUwsQ0FBMENOLFlBQTFDLENBQXBDO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9DLGlDQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1NLFVBQVcsS0FBS2YsS0FBTCxHQUFhLEtBQUtGLFlBQW5DOztBQUVBLGFBQU9pQixPQUFQO0FBQ0Q7Ozs2QkFFUWQsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtELEtBQUw7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0EsS0FBTDtBQUNEOzs7OEJBRVNHLFUsRUFBWTtBQUNwQixXQUFLRixLQUFMLEdBQWFFLFVBQWIsQ0FEb0IsQ0FDTTtBQUMzQjs7O2tEQUVvQ04saUIsRUFBbUJFLEssRUFBTztBQUM3RCxVQUFNRCxlQUFlSCxxQkFBckI7QUFBQSxVQUNNSyxRQUFRLENBRGQ7QUFBQSxVQUVNQyxRQUFRLENBRmQ7QUFBQSxVQUdNZSxnQkFBZ0IsSUFBSXBCLGFBQUosQ0FBa0JDLGlCQUFsQixFQUFxQ0MsWUFBckMsRUFBbURDLEtBQW5ELEVBQTBEQyxLQUExRCxFQUFpRUMsS0FBakUsQ0FIdEI7O0FBS0EsYUFBT2UsYUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnRCLGFBQWpCIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERFRkFVTFRfTUFYSU1VTV9ERVBUSCA9IDk5O1xuXG5jbGFzcyBDb25maWd1cmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlbnMsIG1heGltdW1EZXB0aCwgcnVsZXMsIGRlcHRoLCBpbmRleCkge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2VucztcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuICBcbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbnM7XG4gIH1cblxuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXB0aDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgZ2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzYXZlZEluZGV4ID0gaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5zTGVuZ3RoID0gdGhpcy5zaWduaWZpY2FudFRva2Vucy5sZW5ndGgsXG4gICAgICAgICAgbGFzdEluZGV4ID0gc2lnbmlmaWNhbnRUb2tlbnNMZW5ndGggLSAxLFxuICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gKHRoaXMuaW5kZXggPD0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25pZmljYW50VG9rZW5zW3RoaXMuaW5kZXgrK10gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbmV4dFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLmdldE5leHRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpLFxuICAgICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW5Jc05vbldoaXRlc3BhY2VUb2tlbiA9ICFuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuO1xuXG4gICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW5Jc05vbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChub1doaXRlc3BhY2UpIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNUb29EZWVwKCkge1xuICAgIGNvbnN0IHRvb0RlZXAgPSAodGhpcy5kZXB0aCA+IHRoaXMubWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiB0b29EZWVwO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBpbmNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgfVxuXG4gIGRlY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgYmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2Vuc0FuZFJ1bGVzKHNpZ25pZmljYW50VG9rZW5zLCBydWxlcykge1xuICAgIGNvbnN0IG1heGltdW1EZXB0aCA9IERFRkFVTFRfTUFYSU1VTV9ERVBUSCxcbiAgICAgICAgICBkZXB0aCA9IDAsXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbihzaWduaWZpY2FudFRva2VucywgbWF4aW11bURlcHRoLCBydWxlcywgZGVwdGgsIGluZGV4KTtcblxuICAgIHJldHVybiBjb25maWd1cmF0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uZmlndXJhdGlvbjtcbiJdfQ==