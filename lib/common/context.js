'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    SignificantToken = lexers.SignificantToken;

var MAXIMUM_DEPTH = 1;

var Context = function () {
  function Context(tokens) {
    _classCallCheck(this, Context);

    this.tokens = tokens;

    this.index = 0;

    this.depth = 0;
  }

  _createClass(Context, [{
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'isTooDeep',
    value: function isTooDeep() {
      var tooDeep = this.depth > MAXIMUM_DEPTH;

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
  }]);

  return Context;
}();

module.exports = Context;

function significantTokenIsWhitespaceToken(significantToken) {
  var type = significantToken.getType(),
      whitespaceToken = type === SignificantToken.types.whitespace;

  return whitespaceToken;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29udGV4dC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsIk1BWElNVU1fREVQVEgiLCJDb250ZXh0IiwidG9rZW5zIiwiaW5kZXgiLCJkZXB0aCIsInRvb0RlZXAiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsIm5leHRUb2tlbiIsInVuZGVmaW5lZCIsIm5vV2hpdGVzcGFjZSIsIm5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiIsInNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiIsImdldEluZGV4Iiwic2F2ZWRJbmRleCIsInNldEluZGV4IiwibW9kdWxlIiwiZXhwb3J0cyIsInNpZ25pZmljYW50VG9rZW4iLCJ0eXBlIiwiZ2V0VHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsInR5cGVzIiwid2hpdGVzcGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsbUJBQW1CRixPQUFPRSxnQkFEOUI7O0FBR0EsSUFBTUMsZ0JBQWdCLENBQXRCOztJQUVNQyxPO0FBQ0osbUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtELEtBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBSUUsVUFBVSxLQUFLRCxLQUFMLEdBQWFKLGFBQTNCOztBQUVBLGFBQU9LLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0QsS0FBTDtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxLQUFMO0FBQ0Q7Ozs2QkFFUUQsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBSUcsb0JBQUo7O0FBRUEsZUFBUztBQUNQLFlBQUlDLFlBQVksS0FBS0wsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixDQUFoQjs7QUFFQSxZQUFJSSxjQUFjQyxTQUFsQixFQUE2QjtBQUMzQkYsaUNBQXVCLElBQXZCOztBQUVBO0FBQ0Q7O0FBRUQsWUFBSUMscUJBQXFCUixnQkFBekIsRUFBMkM7QUFDekNPLGlDQUF1QkMsU0FBdkI7O0FBRUE7QUFDRDtBQUNGOztBQUVELGFBQU9ELG9CQUFQO0FBQ0Q7Ozt5REFFb0NHLFksRUFBYztBQUNqRCxVQUFJQyxvQ0FBb0MsSUFBeEM7QUFBQSxVQUNJSix1QkFBdUIsS0FBS0ssdUJBQUwsRUFEM0I7O0FBR0EsVUFBSUwseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLFlBQUlNLHFDQUFKOztBQUVBLFlBQUlILFlBQUosRUFBa0I7QUFDaEJHLGtEQUF3Q0Msa0NBQWtDUCxvQkFBbEMsQ0FBeEM7O0FBRUEsY0FBSU0scUNBQUosRUFBMkM7QUFDekNGLGdEQUFvQyxJQUFwQztBQUNELFdBRkQsTUFFTztBQUNMQSxnREFBb0NKLG9CQUFwQztBQUNEO0FBQ0YsU0FSRCxNQVFPO0FBQ0wsbUJBQVM7QUFDUE0sb0RBQXdDQyxrQ0FBa0NQLG9CQUFsQyxDQUF4Qzs7QUFFQSxnQkFBSU0scUNBQUosRUFBMkM7QUFDekNOLHFDQUF1QixLQUFLSyx1QkFBTCxFQUF2QjtBQUNELGFBRkQsTUFFTztBQUNMRCxrREFBb0NKLG9CQUFwQzs7QUFFQTtBQUNEOztBQUVELGdCQUFJQSx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakNJLGtEQUFvQyxJQUFwQzs7QUFFQTtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELGFBQU9BLGlDQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlQLFFBQVEsS0FBS1csUUFBTCxFQUFaO0FBQUEsVUFDSUMsYUFBYVosS0FEakIsQ0FEVyxDQUVhOztBQUV4QixhQUFPWSxVQUFQO0FBQ0Q7Ozs4QkFFU0EsVSxFQUFZO0FBQ3BCLFVBQUlaLFFBQVFZLFVBQVosQ0FEb0IsQ0FDSTs7QUFFeEIsV0FBS0MsUUFBTCxDQUFjYixLQUFkO0FBQ0Q7Ozs7OztBQUdIYyxPQUFPQyxPQUFQLEdBQWlCakIsT0FBakI7O0FBRUEsU0FBU1ksaUNBQVQsQ0FBMkNNLGdCQUEzQyxFQUE2RDtBQUMzRCxNQUFJQyxPQUFPRCxpQkFBaUJFLE9BQWpCLEVBQVg7QUFBQSxNQUNJQyxrQkFBbUJGLFNBQVNyQixpQkFBaUJ3QixLQUFqQixDQUF1QkMsVUFEdkQ7O0FBR0EsU0FBT0YsZUFBUDtBQUNEIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBTaWduaWZpY2FudFRva2VuID0gbGV4ZXJzLlNpZ25pZmljYW50VG9rZW47XG5cbmNvbnN0IE1BWElNVU1fREVQVEggPSAxO1xuXG5jbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IodG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgXG4gICAgdGhpcy5pbmRleCA9IDA7XG5cbiAgICB0aGlzLmRlcHRoID0gMDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG4gIFxuICBpc1Rvb0RlZXAoKSB7XG4gICAgdmFyIHRvb0RlZXAgPSB0aGlzLmRlcHRoID4gTUFYSU1VTV9ERVBUSDtcbiAgICBcbiAgICByZXR1cm4gdG9vRGVlcDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHZhciBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIHZhciBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuXG4gICAgICBpZiAobmV4dFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFRva2VuIGluc3RhbmNlb2YgU2lnbmlmaWNhbnRUb2tlbikge1xuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG5leHRUb2tlbjtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gdGhpcy5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICB2YXIgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbjtcblxuICAgICAgaWYgKG5vV2hpdGVzcGFjZSkge1xuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKG5leHRTaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbikge1xuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4gPSBzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4obmV4dFNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gdGhpcy5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc2F2ZWRJbmRleCgpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4KCksXG4gICAgICAgIHNhdmVkSW5kZXggPSBpbmRleDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuICAgIHZhciBpbmRleCA9IHNhdmVkSW5kZXg7IC8vL1xuICAgIFxuICAgIHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dDtcblxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgdmFyIHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgIHdoaXRlc3BhY2VUb2tlbiA9ICh0eXBlID09PSBTaWduaWZpY2FudFRva2VuLnR5cGVzLndoaXRlc3BhY2UpO1xuICBcbiAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbn1cbiJdfQ==