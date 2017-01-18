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
        var matches = expression.match(/\[(\d+)?(\.\.\.)?(\d+)?\]/),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vc3ByZWFkLmpzIl0sIm5hbWVzIjpbIlNwcmVhZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImluZGV4IiwiZXhwcmVzc2lvbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwidW5kZWZpbmVkIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsInBhcnNlSW50Iiwic3ByZWFkIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBUyxLQUFLQSxLQUFMLElBQWMsS0FBS0YsVUFBcEIsSUFBb0MsS0FBS0UsS0FBTCxJQUFjLEtBQUtELFFBQS9EO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLQyxLQUFMLElBQWMsQ0FBZDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBSUgsYUFBYSxDQUFDLENBQWxCO0FBQUEsVUFDSUMsV0FBV0csT0FBT0MsaUJBRHRCOztBQUdBLFVBQUlGLGVBQWVHLFNBQW5CLEVBQThCO0FBQzVCLFlBQUlDLFVBQVVKLFdBQVdLLEtBQVgsQ0FBaUIsMkJBQWpCLENBQWQ7QUFBQSxZQUNJQyxjQUFjQyxPQUFPSCxPQUFQLENBRGxCO0FBQUEsWUFFSUksYUFBYUMsTUFBTUwsT0FBTixDQUZqQjtBQUFBLFlBR0lNLGNBQWNDLE9BQU9QLE9BQVAsQ0FIbEI7O0FBS0EsWUFBSUUsZ0JBQWdCSCxTQUFwQixFQUErQjtBQUM3Qk4sdUJBQWFlLFNBQVNOLFdBQVQsQ0FBYjs7QUFFQSxjQUFJRSxlQUFlTCxTQUFuQixFQUE4QjtBQUM1QkwsdUJBQVdELFVBQVg7QUFDRDtBQUNGOztBQUVELFlBQUlhLGdCQUFnQlAsU0FBcEIsRUFBK0I7QUFDN0JMLHFCQUFXYyxTQUFTRixXQUFULENBQVg7O0FBRUEsY0FBSUYsZUFBZUwsU0FBbkIsRUFBOEI7QUFDNUJOLHlCQUFhQyxRQUFiO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQUllLFNBQVMsSUFBSWpCLE1BQUosQ0FBV0MsVUFBWCxFQUF1QkMsUUFBdkIsQ0FBYjs7QUFFQSxhQUFPZSxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkIsTUFBakI7O0FBRUEsU0FBU1csTUFBVCxDQUFnQlMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTUCxLQUFULENBQWVPLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTTCxNQUFULENBQWdCSyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InNwcmVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgIHRoaXMuZW5kSW5kZXggPSBlbmRJbmRleDtcblxuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgaXNCZXR3ZWVuKCkge1xuICAgIHJldHVybiAoKHRoaXMuaW5kZXggPj0gdGhpcy5zdGFydEluZGV4KSAmJiAodGhpcy5pbmRleCA8PSB0aGlzLmVuZEluZGV4KSk7XG4gIH1cblxuICBpbmNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ICs9IDE7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHZhciBzdGFydEluZGV4ID0gLTEsXG4gICAgICAgIGVuZEluZGV4ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgaWYgKGV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKC9cXFsoXFxkKyk/KFxcLlxcLlxcLik/KFxcZCspP1xcXS8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKTtcblxuICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IHBhcnNlSW50KHNlY29uZE1hdGNoKTtcblxuICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVuZEluZGV4ID0gcGFyc2VJbnQoZm91cnRoTWF0Y2gpO1xuXG4gICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3ByZWFkO1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cbiJdfQ==