'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    SignificantToken = lexers.SignificantToken;

var MAXIMUM_DEPTH = 100;

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
      whitespaceToken = type === SignificantToken.types.WHITESPACE;

  return whitespaceToken;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29udGV4dC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsIk1BWElNVU1fREVQVEgiLCJDb250ZXh0IiwidG9rZW5zIiwiaW5kZXgiLCJkZXB0aCIsInRvb0RlZXAiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsIm5leHRUb2tlbiIsInVuZGVmaW5lZCIsIm5vV2hpdGVzcGFjZSIsIm5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiIsInNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiIsImdldEluZGV4Iiwic2F2ZWRJbmRleCIsInNldEluZGV4IiwibW9kdWxlIiwiZXhwb3J0cyIsInNpZ25pZmljYW50VG9rZW4iLCJ0eXBlIiwiZ2V0VHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsInR5cGVzIiwiV0hJVEVTUEFDRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsbUJBQW1CRixPQUFPRSxnQkFEOUI7O0FBR0EsSUFBTUMsZ0JBQWdCLEdBQXRCOztJQUVNQyxPO0FBQ0osbUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtELEtBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBSUUsVUFBVSxLQUFLRCxLQUFMLEdBQWFKLGFBQTNCOztBQUVBLGFBQU9LLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0QsS0FBTDtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxLQUFMO0FBQ0Q7Ozs2QkFFUUQsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBSUcsb0JBQUo7O0FBRUEsZUFBUztBQUNQLFlBQUlDLFlBQVksS0FBS0wsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixDQUFoQjs7QUFFQSxZQUFJSSxjQUFjQyxTQUFsQixFQUE2QjtBQUMzQkYsaUNBQXVCLElBQXZCOztBQUVBO0FBQ0Q7O0FBRUQsWUFBSUMscUJBQXFCUixnQkFBekIsRUFBMkM7QUFDekNPLGlDQUF1QkMsU0FBdkI7O0FBRUE7QUFDRDtBQUNGOztBQUVELGFBQU9ELG9CQUFQO0FBQ0Q7Ozt5REFFb0NHLFksRUFBYztBQUNqRCxVQUFJQyxvQ0FBb0MsSUFBeEM7QUFBQSxVQUNJSix1QkFBdUIsS0FBS0ssdUJBQUwsRUFEM0I7O0FBR0EsVUFBSUwseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLFlBQUlNLHFDQUFKOztBQUVBLFlBQUlILFlBQUosRUFBa0I7QUFDaEJHLGtEQUF3Q0Msa0NBQWtDUCxvQkFBbEMsQ0FBeEM7O0FBRUEsY0FBSU0scUNBQUosRUFBMkM7QUFDekNGLGdEQUFvQyxJQUFwQztBQUNELFdBRkQsTUFFTztBQUNMQSxnREFBb0NKLG9CQUFwQztBQUNEO0FBQ0YsU0FSRCxNQVFPO0FBQ0wsbUJBQVM7QUFDUE0sb0RBQXdDQyxrQ0FBa0NQLG9CQUFsQyxDQUF4Qzs7QUFFQSxnQkFBSU0scUNBQUosRUFBMkM7QUFDekNOLHFDQUF1QixLQUFLSyx1QkFBTCxFQUF2QjtBQUNELGFBRkQsTUFFTztBQUNMRCxrREFBb0NKLG9CQUFwQzs7QUFFQTtBQUNEOztBQUVELGdCQUFJQSx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakNJLGtEQUFvQyxJQUFwQzs7QUFFQTtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELGFBQU9BLGlDQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlQLFFBQVEsS0FBS1csUUFBTCxFQUFaO0FBQUEsVUFDSUMsYUFBYVosS0FEakIsQ0FEVyxDQUVhOztBQUV4QixhQUFPWSxVQUFQO0FBQ0Q7Ozs4QkFFU0EsVSxFQUFZO0FBQ3BCLFVBQUlaLFFBQVFZLFVBQVosQ0FEb0IsQ0FDSTs7QUFFeEIsV0FBS0MsUUFBTCxDQUFjYixLQUFkO0FBQ0Q7Ozs7OztBQUdIYyxPQUFPQyxPQUFQLEdBQWlCakIsT0FBakI7O0FBRUEsU0FBU1ksaUNBQVQsQ0FBMkNNLGdCQUEzQyxFQUE2RDtBQUMzRCxNQUFJQyxPQUFPRCxpQkFBaUJFLE9BQWpCLEVBQVg7QUFBQSxNQUNJQyxrQkFBbUJGLFNBQVNyQixpQkFBaUJ3QixLQUFqQixDQUF1QkMsVUFEdkQ7O0FBR0EsU0FBT0YsZUFBUDtBQUNEIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBTaWduaWZpY2FudFRva2VuID0gbGV4ZXJzLlNpZ25pZmljYW50VG9rZW47XG5cbmNvbnN0IE1BWElNVU1fREVQVEggPSAxMDA7XG5cbmNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcih0b2tlbnMpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICBcbiAgICB0aGlzLmluZGV4ID0gMDtcblxuICAgIHRoaXMuZGVwdGggPSAwO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cbiAgXG4gIGlzVG9vRGVlcCgpIHtcbiAgICB2YXIgdG9vRGVlcCA9IHRoaXMuZGVwdGggPiBNQVhJTVVNX0RFUFRIO1xuICAgIFxuICAgIHJldHVybiB0b29EZWVwO1xuICB9XG5cbiAgaW5jcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoKys7XG4gIH1cblxuICBkZWNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgdmFyIG5leHRTaWduaWZpY2FudFRva2VuO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgdmFyIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG5cbiAgICAgIGlmIChuZXh0VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0VG9rZW4gaW5zdGFuY2VvZiBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gbmV4dFRva2VuO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLmdldE5leHRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuO1xuXG4gICAgICBpZiAobm9XaGl0ZXNwYWNlKSB7XG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4gPSBzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4obmV4dFNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiA9IHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihuZXh0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICAgICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbikge1xuICAgICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLmdldE5leHRTaWduaWZpY2FudFRva2VuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzYXZlZEluZGV4KCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXgoKSxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGluZGV4OyAvLy9cbiAgICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG4gICAgdmFyIGluZGV4ID0gc2F2ZWRJbmRleDsgLy8vXG4gICAgXG4gICAgdGhpcy5zZXRJbmRleChpbmRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0O1xuXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4oc2lnbmlmaWNhbnRUb2tlbikge1xuICB2YXIgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgd2hpdGVzcGFjZVRva2VuID0gKHR5cGUgPT09IFNpZ25pZmljYW50VG9rZW4udHlwZXMuV0hJVEVTUEFDRSk7XG4gIFxuICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xufVxuIl19