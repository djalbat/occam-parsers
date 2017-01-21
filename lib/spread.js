'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = function () {
  function Spread(startIndex, endIndex) {
    _classCallCheck(this, Spread);

    this.startIndex = startIndex;
    this.endIndex = endIndex;

    this.index = 0;
  }

  _createClass(Spread, [{
    key: 'isBetween',
    value: function isBetween() {
      return this.index >= this.startIndex && this.index <= this.endIndex;
    }
  }, {
    key: 'incrementIndex',
    value: function incrementIndex() {
      this.index += 1;
    }
  }], [{
    key: 'fromExpression',
    value: function fromExpression(expression) {
      var startIndex = -1,
          endIndex = Number.POSITIVE_INFINITY;

      if (expression !== undefined) {
        var regExp = /\[(\d+)?(\.\.\.)?(\d+)?\]/,
            matches = expression.match(regExp),
            secondMatch = second(matches),
            thirdMatch = third(matches),
            fourthMatch = fourth(matches);

        if (secondMatch !== undefined) {
          startIndex = parseInt(secondMatch);

          if (thirdMatch === undefined) {
            endIndex = startIndex;
          }
        }

        if (fourthMatch !== undefined) {
          endIndex = parseInt(fourthMatch);

          if (thirdMatch === undefined) {
            startIndex = endIndex;
          }
        }
      }

      var spread = new Spread(startIndex, endIndex);

      return spread;
    }
  }]);

  return Spread;
}();

module.exports = Spread;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
function fourth(array) {
  return array[3];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcHJlYWQuanMiXSwibmFtZXMiOlsiU3ByZWFkIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiaW5kZXgiLCJleHByZXNzaW9uIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJ1bmRlZmluZWQiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImZvdXJ0aE1hdGNoIiwiZm91cnRoIiwicGFyc2VJbnQiLCJzcHJlYWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxVQUFaLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFTLEtBQUtBLEtBQUwsSUFBYyxLQUFLRixVQUFwQixJQUFvQyxLQUFLRSxLQUFMLElBQWMsS0FBS0QsUUFBL0Q7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUtDLEtBQUwsSUFBYyxDQUFkO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUNoQyxVQUFJSCxhQUFhLENBQUMsQ0FBbEI7QUFBQSxVQUNJQyxXQUFXRyxPQUFPQyxpQkFEdEI7O0FBR0EsVUFBSUYsZUFBZUcsU0FBbkIsRUFBOEI7QUFDNUIsWUFBSUMsU0FBUywyQkFBYjtBQUFBLFlBQ0lDLFVBQVVMLFdBQVdNLEtBQVgsQ0FBaUJGLE1BQWpCLENBRGQ7QUFBQSxZQUVJRyxjQUFjQyxPQUFPSCxPQUFQLENBRmxCO0FBQUEsWUFHSUksYUFBYUMsTUFBTUwsT0FBTixDQUhqQjtBQUFBLFlBSUlNLGNBQWNDLE9BQU9QLE9BQVAsQ0FKbEI7O0FBTUEsWUFBSUUsZ0JBQWdCSixTQUFwQixFQUErQjtBQUM3Qk4sdUJBQWFnQixTQUFTTixXQUFULENBQWI7O0FBRUEsY0FBSUUsZUFBZU4sU0FBbkIsRUFBOEI7QUFDNUJMLHVCQUFXRCxVQUFYO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJYyxnQkFBZ0JSLFNBQXBCLEVBQStCO0FBQzdCTCxxQkFBV2UsU0FBU0YsV0FBVCxDQUFYOztBQUVBLGNBQUlGLGVBQWVOLFNBQW5CLEVBQThCO0FBQzVCTix5QkFBYUMsUUFBYjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFJZ0IsU0FBUyxJQUFJbEIsTUFBSixDQUFXQyxVQUFYLEVBQXVCQyxRQUF2QixDQUFiOztBQUVBLGFBQU9nQixNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCcEIsTUFBakI7O0FBRUEsU0FBU1ksTUFBVCxDQUFnQlMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTUCxLQUFULENBQWVPLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTTCxNQUFULENBQWdCSyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InNwcmVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgIHRoaXMuZW5kSW5kZXggPSBlbmRJbmRleDtcblxuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgaXNCZXR3ZWVuKCkge1xuICAgIHJldHVybiAoKHRoaXMuaW5kZXggPj0gdGhpcy5zdGFydEluZGV4KSAmJiAodGhpcy5pbmRleCA8PSB0aGlzLmVuZEluZGV4KSk7XG4gIH1cblxuICBpbmNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ICs9IDE7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHZhciBzdGFydEluZGV4ID0gLTEsXG4gICAgICAgIGVuZEluZGV4ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgaWYgKGV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlZ0V4cCA9IC9cXFsoXFxkKyk/KFxcLlxcLlxcLik/KFxcZCspP1xcXS8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgIGlmIChzZWNvbmRNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVuZEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZm91cnRoTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbmRJbmRleCA9IHBhcnNlSW50KGZvdXJ0aE1hdGNoKTtcblxuICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNwcmVhZCA9IG5ldyBTcHJlYWQoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuXG4gICAgcmV0dXJuIHNwcmVhZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwcmVhZDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG4iXX0=