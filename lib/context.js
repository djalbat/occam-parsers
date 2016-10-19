'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    WhitespaceToken = lexers.WhitespaceToken;

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
    value: function getNextToken(noWhitespace) {
      var token = this.tokens[this.index++],
          type;

      if (noWhitespace) {
        if (token !== undefined) {
          type = token.getType();

          if (type === WhitespaceToken.type) {
            token = undefined;
          }
        }
      } else {
        while (token !== undefined) {
          type = token.getType();

          if (type === WhitespaceToken.type) {
            token = this.tokens[this.index++];
          } else {
            break;
          }
        }
      }

      return token;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJXaGl0ZXNwYWNlVG9rZW4iLCJDb250ZXh0IiwidG9rZW5zIiwiaW5kZXgiLCJub1doaXRlc3BhY2UiLCJ0b2tlbiIsInR5cGUiLCJ1bmRlZmluZWQiLCJnZXRUeXBlIiwidG9rZW5JbmRleCIsImluZGV4T2YiLCJnZXRJbmRleCIsInNhdmVkSW5kZXgiLCJzZXRJbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbGVtZW50IiwiYXJyYXkiLCJmb3VuZEluZGV4Iiwic29tZSIsImFycmF5RWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsa0JBQWtCRixPQUFPRSxlQUQ3Qjs7SUFHTUMsTztBQUNKLG1CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OztpQ0FFWUMsWSxFQUFjO0FBQ3pCLFVBQUlDLFFBQVEsS0FBS0gsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixDQUFaO0FBQUEsVUFDSUcsSUFESjs7QUFHQSxVQUFJRixZQUFKLEVBQWtCO0FBQ2hCLFlBQUlDLFVBQVVFLFNBQWQsRUFBeUI7QUFDdkJELGlCQUFPRCxNQUFNRyxPQUFOLEVBQVA7O0FBRUEsY0FBSUYsU0FBU04sZ0JBQWdCTSxJQUE3QixFQUFtQztBQUNqQ0Qsb0JBQVFFLFNBQVI7QUFDRDtBQUNGO0FBQ0YsT0FSRCxNQVFPO0FBQ0wsZUFBT0YsVUFBVUUsU0FBakIsRUFBNEI7QUFDMUJELGlCQUFPRCxNQUFNRyxPQUFOLEVBQVA7O0FBRUEsY0FBSUYsU0FBU04sZ0JBQWdCTSxJQUE3QixFQUFtQztBQUNqQ0Qsb0JBQVEsS0FBS0gsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixDQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0w7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0UsS0FBUDtBQUNEOzs7eUNBRW9CQSxLLEVBQU87QUFDMUIsVUFBSUksYUFBYUMsUUFBUUwsS0FBUixFQUFlLEtBQUtILE1BQXBCLENBQWpCOztBQUVBLFdBQUtDLEtBQUwsR0FBYU0sYUFBYSxDQUExQjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJTixRQUFRLEtBQUtRLFFBQUwsRUFBWjtBQUFBLFVBQ0lDLGFBQWFULEtBRGpCLENBRFcsQ0FFYTs7QUFFeEIsYUFBT1MsVUFBUDtBQUNEOzs7OEJBRVNBLFUsRUFBWTtBQUNwQixVQUFJVCxRQUFRUyxVQUFaLENBRG9CLENBQ0k7O0FBRXhCLFdBQUtDLFFBQUwsQ0FBY1YsS0FBZDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQmQsT0FBakI7O0FBRUEsU0FBU1MsT0FBVCxDQUFpQk0sT0FBakIsRUFBMEJDLEtBQTFCLEVBQWlDO0FBQy9CLE1BQUlDLGFBQWEsQ0FBQyxDQUFsQjs7QUFFQUQsUUFBTUUsSUFBTixDQUFXLFVBQVNDLFlBQVQsRUFBdUJqQixLQUF2QixFQUE4QjtBQUN2QyxRQUFJYSxZQUFZSSxZQUFoQixFQUE4QjtBQUM1QkYsbUJBQWFmLEtBQWI7O0FBRUEsYUFBTyxJQUFQO0FBQ0QsS0FKRCxNQUlPO0FBQ0wsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQVJEOztBQVVBLE1BQUlBLFFBQVFlLFVBQVo7O0FBRUEsU0FBT2YsS0FBUDtBQUNEIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBXaGl0ZXNwYWNlVG9rZW4gPSBsZXhlcnMuV2hpdGVzcGFjZVRva2VuO1xuXG5jbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IodG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgXG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10sXG4gICAgICAgIHR5cGU7XG5cbiAgICBpZiAobm9XaGl0ZXNwYWNlKSB7XG4gICAgICBpZiAodG9rZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBXaGl0ZXNwYWNlVG9rZW4udHlwZSkge1xuICAgICAgICAgIHRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9ICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCk7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFdoaXRlc3BhY2VUb2tlbi50eXBlKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgYWR2YW5jZUp1c3RQYXN0VG9rZW4odG9rZW4pIHtcbiAgICB2YXIgdG9rZW5JbmRleCA9IGluZGV4T2YodG9rZW4sIHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMuaW5kZXggPSB0b2tlbkluZGV4ICsgMTtcbiAgfVxuICBcbiAgc2F2ZWRJbmRleCgpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4KCksXG4gICAgICAgIHNhdmVkSW5kZXggPSBpbmRleDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuICAgIHZhciBpbmRleCA9IHNhdmVkSW5kZXg7IC8vL1xuICAgIFxuICAgIHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dDtcblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICB2YXIgZm91bmRJbmRleCA9IC0xO1xuICBcbiAgYXJyYXkuc29tZShmdW5jdGlvbihhcnJheUVsZW1lbnQsIGluZGV4KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IGFycmF5RWxlbWVudCkge1xuICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIFxuICB2YXIgaW5kZXggPSBmb3VuZEluZGV4O1xuICBcbiAgcmV0dXJuIGluZGV4O1xufVxuIl19