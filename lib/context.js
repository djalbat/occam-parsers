'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('./occam-lexers'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiTUFYSU1VTV9ERVBUSCIsIkNvbnRleHQiLCJ0b2tlbnMiLCJpbmRleCIsImRlcHRoIiwidG9vRGVlcCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFRva2VuIiwidW5kZWZpbmVkIiwibm9XaGl0ZXNwYWNlIiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuIiwic2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuIiwiZ2V0SW5kZXgiLCJzYXZlZEluZGV4Iiwic2V0SW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwic2lnbmlmaWNhbnRUb2tlbiIsInR5cGUiLCJnZXRUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwidHlwZXMiLCJXSElURVNQQUNFIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxnQkFBUixDQUFiO0FBQUEsSUFDSUMsbUJBQW1CRixPQUFPRSxnQkFEOUI7O0FBR0EsSUFBTUMsZ0JBQWdCLEdBQXRCOztJQUVNQyxPO0FBQ0osbUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtELEtBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBSUUsVUFBVSxLQUFLRCxLQUFMLEdBQWFKLGFBQTNCOztBQUVBLGFBQU9LLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0QsS0FBTDtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxLQUFMO0FBQ0Q7Ozs2QkFFUUQsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBSUcsb0JBQUo7O0FBRUEsZUFBUztBQUNQLFlBQUlDLFlBQVksS0FBS0wsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixDQUFoQjs7QUFFQSxZQUFJSSxjQUFjQyxTQUFsQixFQUE2QjtBQUMzQkYsaUNBQXVCLElBQXZCOztBQUVBO0FBQ0Q7O0FBRUQsWUFBSUMscUJBQXFCUixnQkFBekIsRUFBMkM7QUFDekNPLGlDQUF1QkMsU0FBdkI7O0FBRUE7QUFDRDtBQUNGOztBQUVELGFBQU9ELG9CQUFQO0FBQ0Q7Ozt5REFFb0NHLFksRUFBYztBQUNqRCxVQUFJQyxvQ0FBb0MsSUFBeEM7QUFBQSxVQUNJSix1QkFBdUIsS0FBS0ssdUJBQUwsRUFEM0I7O0FBR0EsVUFBSUwseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLFlBQUlNLHFDQUFKOztBQUVBLFlBQUlILFlBQUosRUFBa0I7QUFDaEJHLGtEQUF3Q0Msa0NBQWtDUCxvQkFBbEMsQ0FBeEM7O0FBRUEsY0FBSU0scUNBQUosRUFBMkM7QUFDekNGLGdEQUFvQyxJQUFwQztBQUNELFdBRkQsTUFFTztBQUNMQSxnREFBb0NKLG9CQUFwQztBQUNEO0FBQ0YsU0FSRCxNQVFPO0FBQ0wsbUJBQVM7QUFDUE0sb0RBQXdDQyxrQ0FBa0NQLG9CQUFsQyxDQUF4Qzs7QUFFQSxnQkFBSU0scUNBQUosRUFBMkM7QUFDekNOLHFDQUF1QixLQUFLSyx1QkFBTCxFQUF2QjtBQUNELGFBRkQsTUFFTztBQUNMRCxrREFBb0NKLG9CQUFwQzs7QUFFQTtBQUNEOztBQUVELGdCQUFJQSx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakNJLGtEQUFvQyxJQUFwQzs7QUFFQTtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELGFBQU9BLGlDQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlQLFFBQVEsS0FBS1csUUFBTCxFQUFaO0FBQUEsVUFDSUMsYUFBYVosS0FEakIsQ0FEVyxDQUVhOztBQUV4QixhQUFPWSxVQUFQO0FBQ0Q7Ozs4QkFFU0EsVSxFQUFZO0FBQ3BCLFVBQUlaLFFBQVFZLFVBQVosQ0FEb0IsQ0FDSTs7QUFFeEIsV0FBS0MsUUFBTCxDQUFjYixLQUFkO0FBQ0Q7Ozs7OztBQUdIYyxPQUFPQyxPQUFQLEdBQWlCakIsT0FBakI7O0FBRUEsU0FBU1ksaUNBQVQsQ0FBMkNNLGdCQUEzQyxFQUE2RDtBQUMzRCxNQUFJQyxPQUFPRCxpQkFBaUJFLE9BQWpCLEVBQVg7QUFBQSxNQUNJQyxrQkFBbUJGLFNBQVNyQixpQkFBaUJ3QixLQUFqQixDQUF1QkMsVUFEdkQ7O0FBR0EsU0FBT0YsZUFBUDtBQUNEIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuL29jY2FtLWxleGVycycpLFxuICAgIFNpZ25pZmljYW50VG9rZW4gPSBsZXhlcnMuU2lnbmlmaWNhbnRUb2tlbjtcblxuY29uc3QgTUFYSU1VTV9ERVBUSCA9IDEwMDtcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIFxuICAgIHRoaXMuaW5kZXggPSAwO1xuXG4gICAgdGhpcy5kZXB0aCA9IDA7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuICBcbiAgaXNUb29EZWVwKCkge1xuICAgIHZhciB0b29EZWVwID0gdGhpcy5kZXB0aCA+IE1BWElNVU1fREVQVEg7XG4gICAgXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuICBpbmNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgfVxuXG4gIGRlY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICB2YXIgbmV4dFNpZ25pZmljYW50VG9rZW47XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICB2YXIgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXTtcblxuICAgICAgaWYgKG5leHRUb2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRUb2tlbiBpbnN0YW5jZW9mIFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBuZXh0VG9rZW47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW47XG5cbiAgICAgIGlmIChub1doaXRlc3BhY2UpIHtcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiA9IHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihuZXh0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKG5leHRTaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHNhdmVkSW5kZXgoKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleCgpLFxuICAgICAgICBzYXZlZEluZGV4ID0gaW5kZXg7IC8vL1xuICAgIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgYmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcbiAgICB2YXIgaW5kZXggPSBzYXZlZEluZGV4OyAvLy9cbiAgICBcbiAgICB0aGlzLnNldEluZGV4KGluZGV4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gIHZhciB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICB3aGl0ZXNwYWNlVG9rZW4gPSAodHlwZSA9PT0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5XSElURVNQQUNFKTtcbiAgXG4gIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG59XG4iXX0=