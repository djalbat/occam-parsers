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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiQ29udGV4dCIsInRva2VucyIsImluZGV4IiwibmV4dFRva2VuIiwibm9XaGl0ZXNwYWNlIiwibmV4dE5vbldoaXRlc3BhY2VUb2tlbiIsImdldE5leHRUb2tlbiIsInR5cGUiLCJnZXRUeXBlIiwidHlwZXMiLCJXSElURVNQQUNFIiwiZ2V0SW5kZXgiLCJzYXZlZEluZGV4Iiwic2V0SW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5kZXhPZiIsImVsZW1lbnQiLCJhcnJheSIsImZvdW5kSW5kZXgiLCJzb21lIiwiYXJyYXlFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxtQkFBbUJGLE9BQU9FLGdCQUQ5Qjs7SUFHTUMsTztBQUNKLG1CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLFlBQVksS0FBS0YsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixLQUE2QixJQUE3Qzs7QUFFQSxhQUFPQyxTQUFQO0FBQ0Q7Ozs4Q0FFeUJDLFksRUFBYztBQUN0QyxVQUFJQyx5QkFBeUIsS0FBS0MsWUFBTCxFQUE3Qjs7QUFFQSxVQUFJRCwyQkFBMkIsSUFBL0IsRUFBcUM7QUFDbkMsWUFBSUUsSUFBSjs7QUFFQSxZQUFJSCxZQUFKLEVBQWtCO0FBQ2hCRyxpQkFBT0YsdUJBQXVCRyxPQUF2QixFQUFQOztBQUVBLGNBQUlELFNBQVNSLGlCQUFpQlUsS0FBakIsQ0FBdUJDLFVBQXBDLEVBQWdEO0FBQzlDTCxxQ0FBeUIsSUFBekI7QUFDRDtBQUNGLFNBTkQsTUFNTztBQUNMLGlCQUFPQSwyQkFBMkIsSUFBbEMsRUFBd0M7QUFDdENFLG1CQUFPRix1QkFBdUJHLE9BQXZCLEVBQVA7O0FBRUEsZ0JBQUlELFNBQVNSLGlCQUFpQlUsS0FBakIsQ0FBdUJDLFVBQXBDLEVBQWdEO0FBQzlDTCx1Q0FBeUIsS0FBS0MsWUFBTCxFQUF6QjtBQUNELGFBRkQsTUFFTztBQUNMO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0Qsc0JBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSUgsUUFBUSxLQUFLUyxRQUFMLEVBQVo7QUFBQSxVQUNJQyxhQUFhVixLQURqQixDQURXLENBRWE7O0FBRXhCLGFBQU9VLFVBQVA7QUFDRDs7OzhCQUVTQSxVLEVBQVk7QUFDcEIsVUFBSVYsUUFBUVUsVUFBWixDQURvQixDQUNJOztBQUV4QixXQUFLQyxRQUFMLENBQWNYLEtBQWQ7QUFDRDs7Ozs7O0FBR0hZLE9BQU9DLE9BQVAsR0FBaUJmLE9BQWpCOztBQUVBLFNBQVNnQixPQUFULENBQWlCQyxPQUFqQixFQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsTUFBSUMsYUFBYSxDQUFDLENBQWxCOztBQUVBRCxRQUFNRSxJQUFOLENBQVcsVUFBU0MsWUFBVCxFQUF1Qm5CLEtBQXZCLEVBQThCO0FBQ3ZDLFFBQUllLFlBQVlJLFlBQWhCLEVBQThCO0FBQzVCRixtQkFBYWpCLEtBQWI7O0FBRUEsYUFBTyxJQUFQO0FBQ0QsS0FKRCxNQUlPO0FBQ0wsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQVJEOztBQVVBLE1BQUlBLFFBQVFpQixVQUFaOztBQUVBLFNBQU9qQixLQUFQO0FBQ0QiLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIFNpZ25pZmljYW50VG9rZW4gPSBsZXhlcnMuU2lnbmlmaWNhbnRUb2tlbjtcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIFxuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICB2YXIgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4obm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSB0aGlzLmdldE5leHRUb2tlbigpO1xuXG4gICAgaWYgKG5leHROb25XaGl0ZXNwYWNlVG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciB0eXBlO1xuXG4gICAgICBpZiAobm9XaGl0ZXNwYWNlKSB7XG4gICAgICAgIHR5cGUgPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuLmdldFR5cGUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlID09PSBTaWduaWZpY2FudFRva2VuLnR5cGVzLldISVRFU1BBQ0UpIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKG5leHROb25XaGl0ZXNwYWNlVG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgICB0eXBlID0gbmV4dE5vbldoaXRlc3BhY2VUb2tlbi5nZXRUeXBlKCk7XG5cbiAgICAgICAgICBpZiAodHlwZSA9PT0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5XSElURVNQQUNFKSB7XG4gICAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHROb25XaGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBzYXZlZEluZGV4KCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXgoKSxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGluZGV4OyAvLy9cbiAgICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG4gICAgdmFyIGluZGV4ID0gc2F2ZWRJbmRleDsgLy8vXG4gICAgXG4gICAgdGhpcy5zZXRJbmRleChpbmRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0O1xuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIHZhciBmb3VuZEluZGV4ID0gLTE7XG4gIFxuICBhcnJheS5zb21lKGZ1bmN0aW9uKGFycmF5RWxlbWVudCwgaW5kZXgpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gYXJyYXlFbGVtZW50KSB7XG4gICAgICBmb3VuZEluZGV4ID0gaW5kZXg7XG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgXG4gIHZhciBpbmRleCA9IGZvdW5kSW5kZXg7XG4gIFxuICByZXR1cm4gaW5kZXg7XG59XG4iXX0=