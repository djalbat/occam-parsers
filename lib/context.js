'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    SignificantToken = lexers.SignificantToken;

var Context = function () {
  function Context(tokens) {
    _classCallCheck(this, Context);

    this.tokens = tokens;

    this.index = 0;
  }

  _createClass(Context, [{
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
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
      var nextNonWhitespaceToken = this.getNextToken();

      if (nextNonWhitespaceToken !== null) {
        var type;

        if (noWhitespace) {
          type = nextNonWhitespaceToken.getType();

          if (type === SignificantToken.types.WHITESPACE) {
            nextNonWhitespaceToken = null;
          }
        } else {
          while (nextNonWhitespaceToken !== null) {
            type = nextNonWhitespaceToken.getType();

            if (type === SignificantToken.types.WHITESPACE) {
              nextNonWhitespaceToken = this.getNextToken();
            } else {
              break;
            }
          }
        }
      }

      return nextNonWhitespaceToken;
    }
  }, {
    key: 'advanceJustPastToken',
    value: function advanceJustPastToken(token) {
      var tokenIndex = indexOf(token, this.tokens);

      this.index = tokenIndex + 1;
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

function indexOf(element, array) {
  var foundIndex = -1;

  array.some(function (arrayElement, index) {
    if (element === arrayElement) {
      foundIndex = index;

      return true;
    } else {
      return false;
    }
  });

  var index = foundIndex;

  return index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiQ29udGV4dCIsInRva2VucyIsImluZGV4IiwibmV4dFRva2VuIiwibm9XaGl0ZXNwYWNlIiwibmV4dE5vbldoaXRlc3BhY2VUb2tlbiIsImdldE5leHRUb2tlbiIsInR5cGUiLCJnZXRUeXBlIiwidHlwZXMiLCJXSElURVNQQUNFIiwidG9rZW4iLCJ0b2tlbkluZGV4IiwiaW5kZXhPZiIsImdldEluZGV4Iiwic2F2ZWRJbmRleCIsInNldEluZGV4IiwibW9kdWxlIiwiZXhwb3J0cyIsImVsZW1lbnQiLCJhcnJheSIsImZvdW5kSW5kZXgiLCJzb21lIiwiYXJyYXlFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxtQkFBbUJGLE9BQU9FLGdCQUQ5Qjs7SUFHTUMsTztBQUNKLG1CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLFlBQVksS0FBS0YsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixLQUE2QixJQUE3Qzs7QUFFQSxhQUFPQyxTQUFQO0FBQ0Q7Ozs4Q0FFeUJDLFksRUFBYztBQUN0QyxVQUFJQyx5QkFBeUIsS0FBS0MsWUFBTCxFQUE3Qjs7QUFFQSxVQUFJRCwyQkFBMkIsSUFBL0IsRUFBcUM7QUFDbkMsWUFBSUUsSUFBSjs7QUFFQSxZQUFJSCxZQUFKLEVBQWtCO0FBQ2hCRyxpQkFBT0YsdUJBQXVCRyxPQUF2QixFQUFQOztBQUVBLGNBQUlELFNBQVNSLGlCQUFpQlUsS0FBakIsQ0FBdUJDLFVBQXBDLEVBQWdEO0FBQzlDTCxxQ0FBeUIsSUFBekI7QUFDRDtBQUNGLFNBTkQsTUFNTztBQUNMLGlCQUFPQSwyQkFBMkIsSUFBbEMsRUFBd0M7QUFDdENFLG1CQUFPRix1QkFBdUJHLE9BQXZCLEVBQVA7O0FBRUEsZ0JBQUlELFNBQVNSLGlCQUFpQlUsS0FBakIsQ0FBdUJDLFVBQXBDLEVBQWdEO0FBQzlDTCx1Q0FBeUIsS0FBS0MsWUFBTCxFQUF6QjtBQUNELGFBRkQsTUFFTztBQUNMO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0Qsc0JBQVA7QUFDRDs7O3lDQUVvQk0sSyxFQUFPO0FBQzFCLFVBQUlDLGFBQWFDLFFBQVFGLEtBQVIsRUFBZSxLQUFLVixNQUFwQixDQUFqQjs7QUFFQSxXQUFLQyxLQUFMLEdBQWFVLGFBQWEsQ0FBMUI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSVYsUUFBUSxLQUFLWSxRQUFMLEVBQVo7QUFBQSxVQUNJQyxhQUFhYixLQURqQixDQURXLENBRWE7O0FBRXhCLGFBQU9hLFVBQVA7QUFDRDs7OzhCQUVTQSxVLEVBQVk7QUFDcEIsVUFBSWIsUUFBUWEsVUFBWixDQURvQixDQUNJOztBQUV4QixXQUFLQyxRQUFMLENBQWNkLEtBQWQ7QUFDRDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJsQixPQUFqQjs7QUFFQSxTQUFTYSxPQUFULENBQWlCTSxPQUFqQixFQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsTUFBSUMsYUFBYSxDQUFDLENBQWxCOztBQUVBRCxRQUFNRSxJQUFOLENBQVcsVUFBU0MsWUFBVCxFQUF1QnJCLEtBQXZCLEVBQThCO0FBQ3ZDLFFBQUlpQixZQUFZSSxZQUFoQixFQUE4QjtBQUM1QkYsbUJBQWFuQixLQUFiOztBQUVBLGFBQU8sSUFBUDtBQUNELEtBSkQsTUFJTztBQUNMLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxNQUFJQSxRQUFRbUIsVUFBWjs7QUFFQSxTQUFPbkIsS0FBUDtBQUNEIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBTaWduaWZpY2FudFRva2VuID0gbGV4ZXJzLlNpZ25pZmljYW50VG9rZW47XG5cbmNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcih0b2tlbnMpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICBcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXROZXh0VG9rZW4oKSB7XG4gICAgdmFyIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10gfHwgbnVsbDtcblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuKG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcblxuICAgIGlmIChuZXh0Tm9uV2hpdGVzcGFjZVRva2VuICE9PSBudWxsKSB7XG4gICAgICB2YXIgdHlwZTtcblxuICAgICAgaWYgKG5vV2hpdGVzcGFjZSkge1xuICAgICAgICB0eXBlID0gbmV4dE5vbldoaXRlc3BhY2VUb2tlbi5nZXRUeXBlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZSA9PT0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5XSElURVNQQUNFKSB7XG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VUb2tlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChuZXh0Tm9uV2hpdGVzcGFjZVRva2VuICE9PSBudWxsKSB7XG4gICAgICAgICAgdHlwZSA9IG5leHROb25XaGl0ZXNwYWNlVG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgaWYgKHR5cGUgPT09IFNpZ25pZmljYW50VG9rZW4udHlwZXMuV0hJVEVTUEFDRSkge1xuICAgICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VUb2tlbiA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgYWR2YW5jZUp1c3RQYXN0VG9rZW4odG9rZW4pIHtcbiAgICB2YXIgdG9rZW5JbmRleCA9IGluZGV4T2YodG9rZW4sIHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMuaW5kZXggPSB0b2tlbkluZGV4ICsgMTtcbiAgfVxuICBcbiAgc2F2ZWRJbmRleCgpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4KCksXG4gICAgICAgIHNhdmVkSW5kZXggPSBpbmRleDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuICAgIHZhciBpbmRleCA9IHNhdmVkSW5kZXg7IC8vL1xuICAgIFxuICAgIHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dDtcblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICB2YXIgZm91bmRJbmRleCA9IC0xO1xuICBcbiAgYXJyYXkuc29tZShmdW5jdGlvbihhcnJheUVsZW1lbnQsIGluZGV4KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IGFycmF5RWxlbWVudCkge1xuICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIFxuICB2YXIgaW5kZXggPSBmb3VuZEluZGV4O1xuICBcbiAgcmV0dXJuIGluZGV4O1xufVxuIl19