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

    this.savedIndex = undefined; ///
  }

  _createClass(Context, [{
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
    key: 'saveIndex',
    value: function saveIndex() {
      this.savedIndex = this.index;
    }
  }, {
    key: 'backtrack',
    value: function backtrack() {
      this.index = this.savedIndex;
    }
  }]);

  return Context;
}();

module.exports = Context;

function indexOf(element, array) {
  var index = array.reduce(function (index, arrayElement, arrayIndex) {
    if (index === -1) {
      if (element === arrayElement) {
        index = arrayIndex;
      }
    }

    return index;
  }, -1);

  return index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJXaGl0ZXNwYWNlVG9rZW4iLCJDb250ZXh0IiwidG9rZW5zIiwiaW5kZXgiLCJzYXZlZEluZGV4IiwidW5kZWZpbmVkIiwibm9XaGl0ZXNwYWNlIiwidG9rZW4iLCJ0eXBlIiwiZ2V0VHlwZSIsInRva2VuSW5kZXgiLCJpbmRleE9mIiwibW9kdWxlIiwiZXhwb3J0cyIsImVsZW1lbnQiLCJhcnJheSIsInJlZHVjZSIsImFycmF5RWxlbWVudCIsImFycmF5SW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGtCQUFrQkYsT0FBT0UsZUFEN0I7O0lBR01DLE87QUFDSixtQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS0MsS0FBTCxHQUFhLENBQWI7O0FBRUEsU0FBS0MsVUFBTCxHQUFrQkMsU0FBbEIsQ0FMa0IsQ0FLWTtBQUMvQjs7OztpQ0FFWUMsWSxFQUFjO0FBQ3pCLFVBQUlDLFFBQVEsS0FBS0wsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixDQUFaO0FBQUEsVUFDSUssSUFESjs7QUFHQSxVQUFJRixZQUFKLEVBQWtCO0FBQ2hCLFlBQUlDLFVBQVVGLFNBQWQsRUFBeUI7QUFDdkJHLGlCQUFPRCxNQUFNRSxPQUFOLEVBQVA7O0FBRUEsY0FBSUQsU0FBU1IsZ0JBQWdCUSxJQUE3QixFQUFtQztBQUNqQ0Qsb0JBQVFGLFNBQVI7QUFDRDtBQUNGO0FBQ0YsT0FSRCxNQVFPO0FBQ0wsZUFBT0UsVUFBVUYsU0FBakIsRUFBNEI7QUFDMUJHLGlCQUFPRCxNQUFNRSxPQUFOLEVBQVA7O0FBRUEsY0FBSUQsU0FBU1IsZ0JBQWdCUSxJQUE3QixFQUFtQztBQUNqQ0Qsb0JBQVEsS0FBS0wsTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixDQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0w7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0ksS0FBUDtBQUNEOzs7eUNBRW9CQSxLLEVBQU87QUFDMUIsVUFBSUcsYUFBYUMsUUFBUUosS0FBUixFQUFlLEtBQUtMLE1BQXBCLENBQWpCOztBQUVBLFdBQUtDLEtBQUwsR0FBYU8sYUFBYSxDQUExQjtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLTixVQUFMLEdBQWtCLEtBQUtELEtBQXZCO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtBLEtBQUwsR0FBYSxLQUFLQyxVQUFsQjtBQUNEOzs7Ozs7QUFHSFEsT0FBT0MsT0FBUCxHQUFpQlosT0FBakI7O0FBRUEsU0FBU1UsT0FBVCxDQUFpQkcsT0FBakIsRUFBMEJDLEtBQTFCLEVBQWlDO0FBQy9CLE1BQUlaLFFBQVFZLE1BQU1DLE1BQU4sQ0FBYSxVQUFTYixLQUFULEVBQWdCYyxZQUFoQixFQUE4QkMsVUFBOUIsRUFBMEM7QUFDakUsUUFBSWYsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEIsVUFBSVcsWUFBWUcsWUFBaEIsRUFBOEI7QUFDNUJkLGdCQUFRZSxVQUFSO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPZixLQUFQO0FBQ0QsR0FSVyxFQVFULENBQUMsQ0FSUSxDQUFaOztBQVVBLFNBQU9BLEtBQVA7QUFDRCIsImZpbGUiOiJjb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgV2hpdGVzcGFjZVRva2VuID0gbGV4ZXJzLldoaXRlc3BhY2VUb2tlbjtcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIFxuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIFxuICAgIHRoaXMuc2F2ZWRJbmRleCA9IHVuZGVmaW5lZDsgIC8vL1xuICB9XG4gIFxuICBnZXROZXh0VG9rZW4obm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcbiAgICAgICAgdHlwZTtcblxuICAgIGlmIChub1doaXRlc3BhY2UpIHtcbiAgICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCk7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFdoaXRlc3BhY2VUb2tlbi50eXBlKSB7XG4gICAgICAgICAgdG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdHlwZSA9IHRva2VuLmdldFR5cGUoKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gV2hpdGVzcGFjZVRva2VuLnR5cGUpIHtcbiAgICAgICAgICB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBhZHZhbmNlSnVzdFBhc3RUb2tlbih0b2tlbikge1xuICAgIHZhciB0b2tlbkluZGV4ID0gaW5kZXhPZih0b2tlbiwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5pbmRleCA9IHRva2VuSW5kZXggKyAxO1xuICB9XG4gIFxuICBzYXZlSW5kZXgoKSB7XG4gICAgdGhpcy5zYXZlZEluZGV4ID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGJhY2t0cmFjaygpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5zYXZlZEluZGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dDtcblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5yZWR1Y2UoZnVuY3Rpb24oaW5kZXgsIGFycmF5RWxlbWVudCwgYXJyYXlJbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBhcnJheUVsZW1lbnQpIHtcbiAgICAgICAgaW5kZXggPSBhcnJheUluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfSwgLTEpO1xuXG4gIHJldHVybiBpbmRleDtcbn1cbiJdfQ==