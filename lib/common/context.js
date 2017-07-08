'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var WhitespaceToken = lexers.WhitespaceToken;


var DEFAULT_MAXIMUM_DEPTH = 99;

var Context = function () {
  function Context(tokens, rules) {
    var maximumDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_MAXIMUM_DEPTH;

    _classCallCheck(this, Context);

    this.tokens = tokens;

    this.rules = rules;

    this.maximumDepth = maximumDepth;

    this.depth = 0;

    this.index = 0;
  }

  _createClass(Context, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getMaximumDepth',
    value: function getMaximumDepth() {
      return this.maximumDepth;
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
    key: 'isTooDeep',
    value: function isTooDeep() {
      var tooDeep = this.depth > this.maximumDepth;

      return tooDeep;
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
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'getNextSignificantToken',
    value: function getNextSignificantToken() {
      var nextSignificantToken = null;

      for (;;) {
        var nextToken = this.tokens[this.index++];

        if (nextToken === undefined) {
          break;
        }

        var nextTokenSignificant = nextToken.isSignificant();

        if (nextTokenSignificant) {
          nextSignificantToken = nextToken;

          break;
        }
      }

      return nextSignificantToken;
    }
  }, {
    key: 'getNextNonWhitespaceSignificantToken',
    value: function getNextNonWhitespaceSignificantToken(noWhitespace) {
      var nextNonWhitespaceSignificantToken = null,
          nextSignificantToken = this.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        var nextSignificantTokenIsWhitespaceToken = void 0;

        if (noWhitespace) {
          nextSignificantTokenIsWhitespaceToken = significantTokenIsWhitespaceToken(nextSignificantToken);

          if (nextSignificantTokenIsWhitespaceToken) {
            nextNonWhitespaceSignificantToken = null;
          } else {
            nextNonWhitespaceSignificantToken = nextSignificantToken;
          }
        } else {
          for (;;) {
            nextSignificantTokenIsWhitespaceToken = significantTokenIsWhitespaceToken(nextSignificantToken);

            if (nextSignificantTokenIsWhitespaceToken) {
              nextSignificantToken = this.getNextSignificantToken();
            } else {
              nextNonWhitespaceSignificantToken = nextSignificantToken;

              break;
            }

            if (nextSignificantToken === null) {
              nextNonWhitespaceSignificantToken = null;

              break;
            }
          }
        }
      }

      return nextNonWhitespaceSignificantToken;
    }
  }, {
    key: 'savedIndex',
    value: function savedIndex() {
      var index = this.getIndex(),
          savedIndex = index; ///

      return savedIndex;
    }
  }, {
    key: 'backtrack',
    value: function backtrack(savedIndex) {
      this.index = savedIndex; ///
    }
  }]);

  return Context;
}();

module.exports = Context;

function significantTokenIsWhitespaceToken(significantToken) {
  var type = significantToken.getType(),
      whitespaceToken = type === WhitespaceToken.type;

  return whitespaceToken;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29udGV4dC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiV2hpdGVzcGFjZVRva2VuIiwiREVGQVVMVF9NQVhJTVVNX0RFUFRIIiwiQ29udGV4dCIsInRva2VucyIsInJ1bGVzIiwibWF4aW11bURlcHRoIiwiZGVwdGgiLCJpbmRleCIsInRvb0RlZXAiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsIm5leHRUb2tlbiIsInVuZGVmaW5lZCIsIm5leHRUb2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsIm5vV2hpdGVzcGFjZSIsIm5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiIsInNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiIsImdldEluZGV4Iiwic2F2ZWRJbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzaWduaWZpY2FudFRva2VuIiwidHlwZSIsImdldFR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7SUFFUUMsZSxHQUFvQkYsTSxDQUFwQkUsZTs7O0FBRVIsSUFBTUMsd0JBQXdCLEVBQTlCOztJQUVNQyxPO0FBQ0osbUJBQVlDLE1BQVosRUFBb0JDLEtBQXBCLEVBQWlFO0FBQUEsUUFBdENDLFlBQXNDLHVFQUF2QkoscUJBQXVCOztBQUFBOztBQUMvRCxTQUFLRSxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS0MsS0FBTCxHQUFhQSxLQUFiOztBQUVBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtILEtBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtDLFlBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxVQUFVLEtBQUtGLEtBQUwsR0FBYSxLQUFLRCxZQUFsQzs7QUFFQSxhQUFPRyxPQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtGLEtBQUw7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0EsS0FBTDtBQUNEOzs7NkJBRVFDLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQUlFLHVCQUF1QixJQUEzQjs7QUFFQSxlQUFTO0FBQ1AsWUFBTUMsWUFBWSxLQUFLUCxNQUFMLENBQVksS0FBS0ksS0FBTCxFQUFaLENBQWxCOztBQUVBLFlBQUlHLGNBQWNDLFNBQWxCLEVBQTZCO0FBQzNCO0FBQ0Q7O0FBRUQsWUFBTUMsdUJBQXVCRixVQUFVRyxhQUFWLEVBQTdCOztBQUVBLFlBQUlELG9CQUFKLEVBQTBCO0FBQ3hCSCxpQ0FBdUJDLFNBQXZCOztBQUVBO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRCxvQkFBUDtBQUNEOzs7eURBRW9DSyxZLEVBQWM7QUFDakQsVUFBSUMsb0NBQW9DLElBQXhDO0FBQUEsVUFDSU4sdUJBQXVCLEtBQUtPLHVCQUFMLEVBRDNCOztBQUdBLFVBQUlQLHlCQUF5QixJQUE3QixFQUFtQztBQUNqQyxZQUFJUSw4Q0FBSjs7QUFFQSxZQUFJSCxZQUFKLEVBQWtCO0FBQ2hCRyxrREFBd0NDLGtDQUFrQ1Qsb0JBQWxDLENBQXhDOztBQUVBLGNBQUlRLHFDQUFKLEVBQTJDO0FBQ3pDRixnREFBb0MsSUFBcEM7QUFDRCxXQUZELE1BRU87QUFDTEEsZ0RBQW9DTixvQkFBcEM7QUFDRDtBQUNGLFNBUkQsTUFRTztBQUNMLG1CQUFTO0FBQ1BRLG9EQUF3Q0Msa0NBQWtDVCxvQkFBbEMsQ0FBeEM7O0FBRUEsZ0JBQUlRLHFDQUFKLEVBQTJDO0FBQ3pDUixxQ0FBdUIsS0FBS08sdUJBQUwsRUFBdkI7QUFDRCxhQUZELE1BRU87QUFDTEQsa0RBQW9DTixvQkFBcEM7O0FBRUE7QUFDRDs7QUFFRCxnQkFBSUEseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDTSxrREFBb0MsSUFBcEM7O0FBRUE7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPQSxpQ0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNUixRQUFRLEtBQUtZLFFBQUwsRUFBZDtBQUFBLFVBQ01DLGFBQWFiLEtBRG5CLENBRFcsQ0FFZTs7QUFFMUIsYUFBT2EsVUFBUDtBQUNEOzs7OEJBRVNBLFUsRUFBWTtBQUNwQixXQUFLYixLQUFMLEdBQWFhLFVBQWIsQ0FEb0IsQ0FDTTtBQUMzQjs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJwQixPQUFqQjs7QUFFQSxTQUFTZ0IsaUNBQVQsQ0FBMkNLLGdCQUEzQyxFQUE2RDtBQUMzRCxNQUFNQyxPQUFPRCxpQkFBaUJFLE9BQWpCLEVBQWI7QUFBQSxNQUNNQyxrQkFBbUJGLFNBQVN4QixnQkFBZ0J3QixJQURsRDs7QUFHQSxTQUFPRSxlQUFQO0FBQ0QiLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHsgV2hpdGVzcGFjZVRva2VuIH0gPSBsZXhlcnM7XG5cbmNvbnN0IERFRkFVTFRfTUFYSU1VTV9ERVBUSCA9IDk5O1xuXG5jbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IodG9rZW5zLCBydWxlcywgbWF4aW11bURlcHRoID0gREVGQVVMVF9NQVhJTVVNX0RFUFRIKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG5cbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcblxuICAgIHRoaXMuZGVwdGggPSAwO1xuXG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldE1heGltdW1EZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhpbXVtRGVwdGg7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXB0aDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgaXNUb29EZWVwKCkge1xuICAgIGNvbnN0IHRvb0RlZXAgPSB0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGg7XG4gICAgXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuICBpbmNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgfVxuXG4gIGRlY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXTtcblxuICAgICAgaWYgKG5leHRUb2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBuZXh0VG9rZW5TaWduaWZpY2FudCA9IG5leHRUb2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgICAgIGlmIChuZXh0VG9rZW5TaWduaWZpY2FudCkge1xuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG5leHRUb2tlbjtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gdGhpcy5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBsZXQgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbjtcblxuICAgICAgaWYgKG5vV2hpdGVzcGFjZSkge1xuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKG5leHRTaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbikge1xuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4gPSBzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4obmV4dFNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gdGhpcy5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzYXZlZEluZGV4ID0gaW5kZXg7IC8vL1xuICAgIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgYmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dDtcblxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgY29uc3QgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICB3aGl0ZXNwYWNlVG9rZW4gPSAodHlwZSA9PT0gV2hpdGVzcGFjZVRva2VuLnR5cGUpO1xuICBcbiAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbn1cbiJdfQ==