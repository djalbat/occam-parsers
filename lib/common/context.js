'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    SignificantToken = lexers.SignificantToken;

var DEFAULT_MAXIMUM_DEPTH = 5;

var Context = function () {
  function Context(tokens) {
    var maximumDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_MAXIMUM_DEPTH;

    _classCallCheck(this, Context);

    this.tokens = tokens;

    this.maximumDepth = maximumDepth;

    this.depth = 0;

    this.index = 0;
  }

  _createClass(Context, [{
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
      var nextSignificantToken;

      for (;;) {
        var nextToken = this.tokens[this.index++];

        if (nextToken === undefined) {
          nextSignificantToken = null;

          break;
        }

        if (nextToken instanceof SignificantToken) {
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
        var nextSignificantTokenIsWhitespaceToken;

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
      var index = savedIndex; ///

      this.setIndex(index);
    }
  }, {
    key: 'fastForward',
    value: function fastForward() {
      var tokensLength = this.tokens.length,
          index = tokensLength;

      this.setIndex(index);
    }
  }]);

  return Context;
}();

module.exports = Context;

function significantTokenIsWhitespaceToken(significantToken) {
  var type = significantToken.getType(),
      whitespaceToken = type === SignificantToken.types.whitespace;

  return whitespaceToken;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29udGV4dC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsIkRFRkFVTFRfTUFYSU1VTV9ERVBUSCIsIkNvbnRleHQiLCJ0b2tlbnMiLCJtYXhpbXVtRGVwdGgiLCJkZXB0aCIsImluZGV4IiwidG9vRGVlcCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFRva2VuIiwidW5kZWZpbmVkIiwibm9XaGl0ZXNwYWNlIiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuIiwic2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuIiwiZ2V0SW5kZXgiLCJzYXZlZEluZGV4Iiwic2V0SW5kZXgiLCJ0b2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIiwic2lnbmlmaWNhbnRUb2tlbiIsInR5cGUiLCJnZXRUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwidHlwZXMiLCJ3aGl0ZXNwYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxtQkFBbUJGLE9BQU9FLGdCQUQ5Qjs7QUFHQSxJQUFNQyx3QkFBd0IsQ0FBOUI7O0lBRU1DLE87QUFDSixtQkFBWUMsTUFBWixFQUEwRDtBQUFBLFFBQXRDQyxZQUFzQyx1RUFBdkJILHFCQUF1Qjs7QUFBQTs7QUFDeEQsU0FBS0UsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0YsWUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQUlDLFVBQVUsS0FBS0YsS0FBTCxHQUFhLEtBQUtELFlBQWhDOztBQUVBLGFBQU9HLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0YsS0FBTDtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxLQUFMO0FBQ0Q7Ozs2QkFFUUMsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBSUUsb0JBQUo7O0FBRUEsZUFBUztBQUNQLFlBQUlDLFlBQVksS0FBS04sTUFBTCxDQUFZLEtBQUtHLEtBQUwsRUFBWixDQUFoQjs7QUFFQSxZQUFJRyxjQUFjQyxTQUFsQixFQUE2QjtBQUMzQkYsaUNBQXVCLElBQXZCOztBQUVBO0FBQ0Q7O0FBRUQsWUFBSUMscUJBQXFCVCxnQkFBekIsRUFBMkM7QUFDekNRLGlDQUF1QkMsU0FBdkI7O0FBRUE7QUFDRDtBQUNGOztBQUVELGFBQU9ELG9CQUFQO0FBQ0Q7Ozt5REFFb0NHLFksRUFBYztBQUNqRCxVQUFJQyxvQ0FBb0MsSUFBeEM7QUFBQSxVQUNJSix1QkFBdUIsS0FBS0ssdUJBQUwsRUFEM0I7O0FBR0EsVUFBSUwseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLFlBQUlNLHFDQUFKOztBQUVBLFlBQUlILFlBQUosRUFBa0I7QUFDaEJHLGtEQUF3Q0Msa0NBQWtDUCxvQkFBbEMsQ0FBeEM7O0FBRUEsY0FBSU0scUNBQUosRUFBMkM7QUFDekNGLGdEQUFvQyxJQUFwQztBQUNELFdBRkQsTUFFTztBQUNMQSxnREFBb0NKLG9CQUFwQztBQUNEO0FBQ0YsU0FSRCxNQVFPO0FBQ0wsbUJBQVM7QUFDUE0sb0RBQXdDQyxrQ0FBa0NQLG9CQUFsQyxDQUF4Qzs7QUFFQSxnQkFBSU0scUNBQUosRUFBMkM7QUFDekNOLHFDQUF1QixLQUFLSyx1QkFBTCxFQUF2QjtBQUNELGFBRkQsTUFFTztBQUNMRCxrREFBb0NKLG9CQUFwQzs7QUFFQTtBQUNEOztBQUVELGdCQUFJQSx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakNJLGtEQUFvQyxJQUFwQzs7QUFFQTtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELGFBQU9BLGlDQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlOLFFBQVEsS0FBS1UsUUFBTCxFQUFaO0FBQUEsVUFDSUMsYUFBYVgsS0FEakIsQ0FEVyxDQUVhOztBQUV4QixhQUFPVyxVQUFQO0FBQ0Q7Ozs4QkFFU0EsVSxFQUFZO0FBQ3BCLFVBQUlYLFFBQVFXLFVBQVosQ0FEb0IsQ0FDSTs7QUFFeEIsV0FBS0MsUUFBTCxDQUFjWixLQUFkO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQUlhLGVBQWUsS0FBS2hCLE1BQUwsQ0FBWWlCLE1BQS9CO0FBQUEsVUFDSWQsUUFBUWEsWUFEWjs7QUFHQSxXQUFLRCxRQUFMLENBQWNaLEtBQWQ7QUFDRDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJwQixPQUFqQjs7QUFFQSxTQUFTYSxpQ0FBVCxDQUEyQ1EsZ0JBQTNDLEVBQTZEO0FBQzNELE1BQUlDLE9BQU9ELGlCQUFpQkUsT0FBakIsRUFBWDtBQUFBLE1BQ0lDLGtCQUFtQkYsU0FBU3hCLGlCQUFpQjJCLEtBQWpCLENBQXVCQyxVQUR2RDs7QUFHQSxTQUFPRixlQUFQO0FBQ0QiLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIFNpZ25pZmljYW50VG9rZW4gPSBsZXhlcnMuU2lnbmlmaWNhbnRUb2tlbjtcblxuY29uc3QgREVGQVVMVF9NQVhJTVVNX0RFUFRIID0gNTtcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2VucywgbWF4aW11bURlcHRoID0gREVGQVVMVF9NQVhJTVVNX0RFUFRIKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcblxuICAgIHRoaXMuZGVwdGggPSAwO1xuXG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGlzVG9vRGVlcCgpIHtcbiAgICB2YXIgdG9vRGVlcCA9IHRoaXMuZGVwdGggPiB0aGlzLm1heGltdW1EZXB0aDtcbiAgICBcbiAgICByZXR1cm4gdG9vRGVlcDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHZhciBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIHZhciBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuXG4gICAgICBpZiAobmV4dFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFRva2VuIGluc3RhbmNlb2YgU2lnbmlmaWNhbnRUb2tlbikge1xuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG5leHRUb2tlbjtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gdGhpcy5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICB2YXIgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbjtcblxuICAgICAgaWYgKG5vV2hpdGVzcGFjZSkge1xuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKG5leHRTaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbikge1xuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4gPSBzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4obmV4dFNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gdGhpcy5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc2F2ZWRJbmRleCgpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4KCksXG4gICAgICAgIHNhdmVkSW5kZXggPSBpbmRleDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuICAgIHZhciBpbmRleCA9IHNhdmVkSW5kZXg7IC8vL1xuICAgIFxuICAgIHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuICB9XG5cbiAgZmFzdEZvcndhcmQoKSB7XG4gICAgdmFyIHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSB0b2tlbnNMZW5ndGg7XG5cbiAgICB0aGlzLnNldEluZGV4KGluZGV4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gIHZhciB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICB3aGl0ZXNwYWNlVG9rZW4gPSAodHlwZSA9PT0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy53aGl0ZXNwYWNlKTtcbiAgXG4gIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG59XG4iXX0=