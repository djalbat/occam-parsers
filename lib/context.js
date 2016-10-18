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
    key: 'getNextNonWhitespaceToken',
    value: function getNextNonWhitespaceToken() {
      var token = this.tokens[this.index++];

      while (token !== undefined) {
        var type = token.getType();

        if (type === WhitespaceToken.type) {
          token = this.tokens[this.index++];
        } else {
          break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJXaGl0ZXNwYWNlVG9rZW4iLCJDb250ZXh0IiwidG9rZW5zIiwiaW5kZXgiLCJzYXZlZEluZGV4IiwidW5kZWZpbmVkIiwidG9rZW4iLCJ0eXBlIiwiZ2V0VHlwZSIsInRva2VuSW5kZXgiLCJpbmRleE9mIiwibW9kdWxlIiwiZXhwb3J0cyIsImVsZW1lbnQiLCJhcnJheSIsInJlZHVjZSIsImFycmF5RWxlbWVudCIsImFycmF5SW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGtCQUFrQkYsT0FBT0UsZUFEN0I7O0lBR01DLE87QUFDSixtQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS0MsS0FBTCxHQUFhLENBQWI7O0FBRUEsU0FBS0MsVUFBTCxHQUFrQkMsU0FBbEIsQ0FMa0IsQ0FLWTtBQUMvQjs7OztnREFFMkI7QUFDMUIsVUFBSUMsUUFBUSxLQUFLSixNQUFMLENBQVksS0FBS0MsS0FBTCxFQUFaLENBQVo7O0FBRUEsYUFBT0csVUFBVUQsU0FBakIsRUFBNEI7QUFDMUIsWUFBSUUsT0FBT0QsTUFBTUUsT0FBTixFQUFYOztBQUVBLFlBQUlELFNBQVNQLGdCQUFnQk8sSUFBN0IsRUFBbUM7QUFDakNELGtCQUFRLEtBQUtKLE1BQUwsQ0FBWSxLQUFLQyxLQUFMLEVBQVosQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRyxLQUFQO0FBQ0Q7Ozt5Q0FFb0JBLEssRUFBTztBQUMxQixVQUFJRyxhQUFhQyxRQUFRSixLQUFSLEVBQWUsS0FBS0osTUFBcEIsQ0FBakI7O0FBRUEsV0FBS0MsS0FBTCxHQUFhTSxhQUFhLENBQTFCO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtMLFVBQUwsR0FBa0IsS0FBS0QsS0FBdkI7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS0EsS0FBTCxHQUFhLEtBQUtDLFVBQWxCO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCWCxPQUFqQjs7QUFFQSxTQUFTUyxPQUFULENBQWlCRyxPQUFqQixFQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsTUFBSVgsUUFBUVcsTUFBTUMsTUFBTixDQUFhLFVBQVNaLEtBQVQsRUFBZ0JhLFlBQWhCLEVBQThCQyxVQUE5QixFQUEwQztBQUNqRSxRQUFJZCxVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNoQixVQUFJVSxZQUFZRyxZQUFoQixFQUE4QjtBQUM1QmIsZ0JBQVFjLFVBQVI7QUFDRDtBQUNGOztBQUVELFdBQU9kLEtBQVA7QUFDRCxHQVJXLEVBUVQsQ0FBQyxDQVJRLENBQVo7O0FBVUEsU0FBT0EsS0FBUDtBQUNEIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBXaGl0ZXNwYWNlVG9rZW4gPSBsZXhlcnMuV2hpdGVzcGFjZVRva2VuO1xuXG5jbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IodG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgXG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgXG4gICAgdGhpcy5zYXZlZEluZGV4ID0gdW5kZWZpbmVkOyAgLy8vXG4gIH1cblxuICBnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG5cbiAgICB3aGlsZSAodG9rZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlID09PSBXaGl0ZXNwYWNlVG9rZW4udHlwZSkge1xuICAgICAgICB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBhZHZhbmNlSnVzdFBhc3RUb2tlbih0b2tlbikge1xuICAgIHZhciB0b2tlbkluZGV4ID0gaW5kZXhPZih0b2tlbiwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5pbmRleCA9IHRva2VuSW5kZXggKyAxO1xuICB9XG4gIFxuICBzYXZlSW5kZXgoKSB7XG4gICAgdGhpcy5zYXZlZEluZGV4ID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGJhY2t0cmFjaygpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5zYXZlZEluZGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dDtcblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5yZWR1Y2UoZnVuY3Rpb24oaW5kZXgsIGFycmF5RWxlbWVudCwgYXJyYXlJbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBhcnJheUVsZW1lbnQpIHtcbiAgICAgICAgaW5kZXggPSBhcnJheUluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfSwgLTEpO1xuXG4gIHJldHVybiBpbmRleDtcbn1cbiJdfQ==