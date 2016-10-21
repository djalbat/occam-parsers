'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('./occam-lexers'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiQ29udGV4dCIsInRva2VucyIsImluZGV4IiwibmV4dFRva2VuIiwibm9XaGl0ZXNwYWNlIiwibmV4dE5vbldoaXRlc3BhY2VUb2tlbiIsImdldE5leHRUb2tlbiIsIm5leHRUb2tlbklzV2hpdGVzcGFjZVRva2VuIiwidG9rZW5Jc1doaXRlc3BhY2VUb2tlbiIsImdldEluZGV4Iiwic2F2ZWRJbmRleCIsInNldEluZGV4IiwibW9kdWxlIiwiZXhwb3J0cyIsInRva2VuIiwidHlwZSIsImdldFR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJ0eXBlcyIsIldISVRFU1BBQ0UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGdCQUFSLENBQWI7QUFBQSxJQUNJQyxtQkFBbUJGLE9BQU9FLGdCQUQ5Qjs7SUFHTUMsTztBQUNKLG1CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLFlBQVksS0FBS0YsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixLQUE2QixJQUE3Qzs7QUFFQSxhQUFPQyxTQUFQO0FBQ0Q7Ozs4Q0FFeUJDLFksRUFBYztBQUN0QyxVQUFJQyx5QkFBeUIsSUFBN0I7QUFBQSxVQUNJRixZQUFZLEtBQUtHLFlBQUwsRUFEaEI7O0FBR0EsVUFBSUgsY0FBYyxJQUFsQixFQUF3QjtBQUN0QixZQUFJSSwwQkFBSjs7QUFFQSxZQUFJSCxZQUFKLEVBQWtCO0FBQ2hCRyx1Q0FBNkJDLHVCQUF1QkwsU0FBdkIsQ0FBN0I7O0FBRUEsY0FBSSxDQUFDSSwwQkFBTCxFQUFpQztBQUMvQkYscUNBQXlCRixTQUF6QjtBQUNEO0FBQ0YsU0FORCxNQU1PO0FBQ0wsaUJBQU9BLGNBQWMsSUFBckIsRUFBMkI7QUFDekJJLHlDQUE2QkMsdUJBQXVCTCxTQUF2QixDQUE3Qjs7QUFFQSxnQkFBSUksMEJBQUosRUFBZ0M7QUFDOUJKLDBCQUFZLEtBQUtHLFlBQUwsRUFBWjtBQUNELGFBRkQsTUFFTztBQUNMRCx1Q0FBeUJGLFNBQXpCOztBQUVBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0Usc0JBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSUgsUUFBUSxLQUFLTyxRQUFMLEVBQVo7QUFBQSxVQUNJQyxhQUFhUixLQURqQixDQURXLENBRWE7O0FBRXhCLGFBQU9RLFVBQVA7QUFDRDs7OzhCQUVTQSxVLEVBQVk7QUFDcEIsVUFBSVIsUUFBUVEsVUFBWixDQURvQixDQUNJOztBQUV4QixXQUFLQyxRQUFMLENBQWNULEtBQWQ7QUFDRDs7Ozs7O0FBR0hVLE9BQU9DLE9BQVAsR0FBaUJiLE9BQWpCOztBQUVBLFNBQVNRLHNCQUFULENBQWdDTSxLQUFoQyxFQUF1QztBQUNyQyxNQUFJQyxPQUFPRCxNQUFNRSxPQUFOLEVBQVg7QUFBQSxNQUNJQyxrQkFBbUJGLFNBQVNoQixpQkFBaUJtQixLQUFqQixDQUF1QkMsVUFEdkQ7O0FBR0EsU0FBT0YsZUFBUDtBQUNEIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuL29jY2FtLWxleGVycycpLFxuICAgIFNpZ25pZmljYW50VG9rZW4gPSBsZXhlcnMuU2lnbmlmaWNhbnRUb2tlbjtcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIFxuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICB2YXIgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4obm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBudWxsLFxuICAgICAgICBuZXh0VG9rZW4gPSB0aGlzLmdldE5leHRUb2tlbigpO1xuXG4gICAgaWYgKG5leHRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIG5leHRUb2tlbklzV2hpdGVzcGFjZVRva2VuO1xuXG4gICAgICBpZiAobm9XaGl0ZXNwYWNlKSB7XG4gICAgICAgIG5leHRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gdG9rZW5Jc1doaXRlc3BhY2VUb2tlbihuZXh0VG9rZW4pO1xuXG4gICAgICAgIGlmICghbmV4dFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAobmV4dFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgICAgbmV4dFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4gPSB0b2tlbklzV2hpdGVzcGFjZVRva2VuKG5leHRUb2tlbik7XG5cbiAgICAgICAgICBpZiAobmV4dFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICAgIG5leHRUb2tlbiA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW47XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgc2F2ZWRJbmRleCgpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4KCksXG4gICAgICAgIHNhdmVkSW5kZXggPSBpbmRleDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuICAgIHZhciBpbmRleCA9IHNhdmVkSW5kZXg7IC8vL1xuICAgIFxuICAgIHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dDtcblxuZnVuY3Rpb24gdG9rZW5Jc1doaXRlc3BhY2VUb2tlbih0b2tlbikge1xuICB2YXIgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgIHdoaXRlc3BhY2VUb2tlbiA9ICh0eXBlID09PSBTaWduaWZpY2FudFRva2VuLnR5cGVzLldISVRFU1BBQ0UpO1xuICBcbiAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbn1cbiJdfQ==