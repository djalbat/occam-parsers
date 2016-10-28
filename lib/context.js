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
    key: 'getNextToken',
    value: function getNextToken() {
      var nextToken = this.tokens[this.index++] || null;

      return nextToken;
    }
  }, {
    key: 'getNextNonWhitespaceToken',
    value: function getNextNonWhitespaceToken(noWhitespace) {
      var nextNonWhitespaceToken = null,
          nextToken = this.getNextToken();

      if (nextToken !== null) {
        var nextTokenIsWhitespaceToken;

        if (noWhitespace) {
          nextTokenIsWhitespaceToken = tokenIsWhitespaceToken(nextToken);

          if (!nextTokenIsWhitespaceToken) {
            nextNonWhitespaceToken = nextToken;
          }
        } else {
          while (nextToken !== null) {
            nextTokenIsWhitespaceToken = tokenIsWhitespaceToken(nextToken);

            if (nextTokenIsWhitespaceToken) {
              nextToken = this.getNextToken();
            } else {
              nextNonWhitespaceToken = nextToken;

              break;
            }
          }
        }
      }

      return nextNonWhitespaceToken;
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

function tokenIsWhitespaceToken(token) {
  var type = token.getType(),
      whitespaceToken = type === SignificantToken.types.WHITESPACE;

  return whitespaceToken;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiTUFYSU1VTV9ERVBUSCIsIkNvbnRleHQiLCJ0b2tlbnMiLCJpbmRleCIsImRlcHRoIiwidG9vRGVlcCIsIm5leHRUb2tlbiIsIm5vV2hpdGVzcGFjZSIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0VG9rZW4iLCJuZXh0VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiIsInRva2VuSXNXaGl0ZXNwYWNlVG9rZW4iLCJnZXRJbmRleCIsInNhdmVkSW5kZXgiLCJzZXRJbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0b2tlbiIsInR5cGUiLCJnZXRUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwidHlwZXMiLCJXSElURVNQQUNFIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxnQkFBUixDQUFiO0FBQUEsSUFDSUMsbUJBQW1CRixPQUFPRSxnQkFEOUI7O0FBR0EsSUFBTUMsZ0JBQWdCLEdBQXRCOztJQUVNQyxPO0FBQ0osbUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtELEtBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBSUUsVUFBVSxLQUFLRCxLQUFMLEdBQWFKLGFBQTNCOztBQUVBLGFBQU9LLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0QsS0FBTDtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxLQUFMO0FBQ0Q7Ozs2QkFFUUQsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlHLFlBQVksS0FBS0osTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixLQUE2QixJQUE3Qzs7QUFFQSxhQUFPRyxTQUFQO0FBQ0Q7Ozs4Q0FFeUJDLFksRUFBYztBQUN0QyxVQUFJQyx5QkFBeUIsSUFBN0I7QUFBQSxVQUNJRixZQUFZLEtBQUtHLFlBQUwsRUFEaEI7O0FBR0EsVUFBSUgsY0FBYyxJQUFsQixFQUF3QjtBQUN0QixZQUFJSSwwQkFBSjs7QUFFQSxZQUFJSCxZQUFKLEVBQWtCO0FBQ2hCRyx1Q0FBNkJDLHVCQUF1QkwsU0FBdkIsQ0FBN0I7O0FBRUEsY0FBSSxDQUFDSSwwQkFBTCxFQUFpQztBQUMvQkYscUNBQXlCRixTQUF6QjtBQUNEO0FBQ0YsU0FORCxNQU1PO0FBQ0wsaUJBQU9BLGNBQWMsSUFBckIsRUFBMkI7QUFDekJJLHlDQUE2QkMsdUJBQXVCTCxTQUF2QixDQUE3Qjs7QUFFQSxnQkFBSUksMEJBQUosRUFBZ0M7QUFDOUJKLDBCQUFZLEtBQUtHLFlBQUwsRUFBWjtBQUNELGFBRkQsTUFFTztBQUNMRCx1Q0FBeUJGLFNBQXpCOztBQUVBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0Usc0JBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSUwsUUFBUSxLQUFLUyxRQUFMLEVBQVo7QUFBQSxVQUNJQyxhQUFhVixLQURqQixDQURXLENBRWE7O0FBRXhCLGFBQU9VLFVBQVA7QUFDRDs7OzhCQUVTQSxVLEVBQVk7QUFDcEIsVUFBSVYsUUFBUVUsVUFBWixDQURvQixDQUNJOztBQUV4QixXQUFLQyxRQUFMLENBQWNYLEtBQWQ7QUFDRDs7Ozs7O0FBR0hZLE9BQU9DLE9BQVAsR0FBaUJmLE9BQWpCOztBQUVBLFNBQVNVLHNCQUFULENBQWdDTSxLQUFoQyxFQUF1QztBQUNyQyxNQUFJQyxPQUFPRCxNQUFNRSxPQUFOLEVBQVg7QUFBQSxNQUNJQyxrQkFBbUJGLFNBQVNuQixpQkFBaUJzQixLQUFqQixDQUF1QkMsVUFEdkQ7O0FBR0EsU0FBT0YsZUFBUDtBQUNEIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuL29jY2FtLWxleGVycycpLFxuICAgIFNpZ25pZmljYW50VG9rZW4gPSBsZXhlcnMuU2lnbmlmaWNhbnRUb2tlbjtcblxuY29uc3QgTUFYSU1VTV9ERVBUSCA9IDEwMDtcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIFxuICAgIHRoaXMuaW5kZXggPSAwO1xuXG4gICAgdGhpcy5kZXB0aCA9IDA7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuICBcbiAgaXNUb29EZWVwKCkge1xuICAgIHZhciB0b29EZWVwID0gdGhpcy5kZXB0aCA+IE1BWElNVU1fREVQVEg7XG4gICAgXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuICBpbmNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgfVxuXG4gIGRlY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXROZXh0VG9rZW4oKSB7XG4gICAgdmFyIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10gfHwgbnVsbDtcblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuKG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gbnVsbCxcbiAgICAgICAgbmV4dFRva2VuID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcblxuICAgIGlmIChuZXh0VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciBuZXh0VG9rZW5Jc1doaXRlc3BhY2VUb2tlbjtcblxuICAgICAgaWYgKG5vV2hpdGVzcGFjZSkge1xuICAgICAgICBuZXh0VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiA9IHRva2VuSXNXaGl0ZXNwYWNlVG9rZW4obmV4dFRva2VuKTtcblxuICAgICAgICBpZiAoIW5leHRUb2tlbklzV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VUb2tlbiA9IG5leHRUb2tlbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKG5leHRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICAgIG5leHRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gdG9rZW5Jc1doaXRlc3BhY2VUb2tlbihuZXh0VG9rZW4pO1xuXG4gICAgICAgICAgaWYgKG5leHRUb2tlbklzV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgICBuZXh0VG9rZW4gPSB0aGlzLmdldE5leHRUb2tlbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dE5vbldoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIHNhdmVkSW5kZXgoKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleCgpLFxuICAgICAgICBzYXZlZEluZGV4ID0gaW5kZXg7IC8vL1xuICAgIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgYmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcbiAgICB2YXIgaW5kZXggPSBzYXZlZEluZGV4OyAvLy9cbiAgICBcbiAgICB0aGlzLnNldEluZGV4KGluZGV4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XG5cbmZ1bmN0aW9uIHRva2VuSXNXaGl0ZXNwYWNlVG9rZW4odG9rZW4pIHtcbiAgdmFyIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICB3aGl0ZXNwYWNlVG9rZW4gPSAodHlwZSA9PT0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5XSElURVNQQUNFKTtcbiAgXG4gIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG59XG4iXX0=