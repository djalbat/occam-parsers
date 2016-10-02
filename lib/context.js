'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WhitespaceToken = require('../../Lexers/es6/common/token/whitespace');

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
        if (token instanceof WhitespaceToken) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbIldoaXRlc3BhY2VUb2tlbiIsInJlcXVpcmUiLCJDb250ZXh0IiwidG9rZW5zIiwiaW5kZXgiLCJzYXZlZEluZGV4IiwidW5kZWZpbmVkIiwidG9rZW4iLCJ0b2tlbkluZGV4IiwiaW5kZXhPZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbGVtZW50IiwiYXJyYXkiLCJyZWR1Y2UiLCJhcnJheUVsZW1lbnQiLCJhcnJheUluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsa0JBQWtCQyxRQUFRLDBDQUFSLENBQXRCOztJQUVNQyxPO0FBQ0osbUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiOztBQUVBLFNBQUtDLFVBQUwsR0FBa0JDLFNBQWxCLENBTGtCLENBS1k7QUFDL0I7Ozs7Z0RBRTJCO0FBQzFCLFVBQUlDLFFBQVEsS0FBS0osTUFBTCxDQUFZLEtBQUtDLEtBQUwsRUFBWixDQUFaOztBQUVBLGFBQU9HLFVBQVVELFNBQWpCLEVBQTRCO0FBQzFCLFlBQUlDLGlCQUFpQlAsZUFBckIsRUFBc0M7QUFDcENPLGtCQUFRLEtBQUtKLE1BQUwsQ0FBWSxLQUFLQyxLQUFMLEVBQVosQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRyxLQUFQO0FBQ0Q7Ozt5Q0FFb0JBLEssRUFBTztBQUMxQixVQUFJQyxhQUFhQyxRQUFRRixLQUFSLEVBQWUsS0FBS0osTUFBcEIsQ0FBakI7O0FBRUEsV0FBS0MsS0FBTCxHQUFhSSxhQUFhLENBQTFCO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtILFVBQUwsR0FBa0IsS0FBS0QsS0FBdkI7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS0EsS0FBTCxHQUFhLEtBQUtDLFVBQWxCO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCVCxPQUFqQjs7QUFFQSxTQUFTTyxPQUFULENBQWlCRyxPQUFqQixFQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsTUFBSVQsUUFBUVMsTUFBTUMsTUFBTixDQUFhLFVBQVNWLEtBQVQsRUFBZ0JXLFlBQWhCLEVBQThCQyxVQUE5QixFQUEwQztBQUNqRSxRQUFJWixVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNoQixVQUFJUSxZQUFZRyxZQUFoQixFQUE4QjtBQUM1QlgsZ0JBQVFZLFVBQVI7QUFDRDtBQUNGOztBQUVELFdBQU9aLEtBQVA7QUFDRCxHQVJXLEVBUVQsQ0FBQyxDQVJRLENBQVo7O0FBVUEsU0FBT0EsS0FBUDtBQUNEIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi8uLi9MZXhlcnMvZXM2L2NvbW1vbi90b2tlbi93aGl0ZXNwYWNlJyk7XG5cbmNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcih0b2tlbnMpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICBcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICBcbiAgICB0aGlzLnNhdmVkSW5kZXggPSB1bmRlZmluZWQ7ICAvLy9cbiAgfVxuXG4gIGdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXTtcblxuICAgIHdoaWxlICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgYWR2YW5jZUp1c3RQYXN0VG9rZW4odG9rZW4pIHtcbiAgICB2YXIgdG9rZW5JbmRleCA9IGluZGV4T2YodG9rZW4sIHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMuaW5kZXggPSB0b2tlbkluZGV4ICsgMTtcbiAgfVxuICBcbiAgc2F2ZUluZGV4KCkge1xuICAgIHRoaXMuc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7XG4gIH1cblxuICBiYWNrdHJhY2soKSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuc2F2ZWRJbmRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XG5cbmZ1bmN0aW9uIGluZGV4T2YoZWxlbWVudCwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKGluZGV4LCBhcnJheUVsZW1lbnQsIGFycmF5SW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gYXJyYXlFbGVtZW50KSB7XG4gICAgICAgIGluZGV4ID0gYXJyYXlJbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sIC0xKTtcblxuICByZXR1cm4gaW5kZXg7XG59XG4iXX0=