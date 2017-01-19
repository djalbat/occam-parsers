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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vc3ByZWFkLmpzIl0sIm5hbWVzIjpbIlNwcmVhZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImluZGV4IiwiZXhwcmVzc2lvbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwidW5kZWZpbmVkIiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsInBhcnNlSW50Iiwic3ByZWFkIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBUyxLQUFLQSxLQUFMLElBQWMsS0FBS0YsVUFBcEIsSUFBb0MsS0FBS0UsS0FBTCxJQUFjLEtBQUtELFFBQS9EO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLQyxLQUFMLElBQWMsQ0FBZDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBSUgsYUFBYSxDQUFDLENBQWxCO0FBQUEsVUFDSUMsV0FBV0csT0FBT0MsaUJBRHRCOztBQUdBLFVBQUlGLGVBQWVHLFNBQW5CLEVBQThCO0FBQzVCLFlBQUlDLFNBQVMsMkJBQWI7QUFBQSxZQUNJQyxVQUFVTCxXQUFXTSxLQUFYLENBQWlCRixNQUFqQixDQURkO0FBQUEsWUFFSUcsY0FBY0MsT0FBT0gsT0FBUCxDQUZsQjtBQUFBLFlBR0lJLGFBQWFDLE1BQU1MLE9BQU4sQ0FIakI7QUFBQSxZQUlJTSxjQUFjQyxPQUFPUCxPQUFQLENBSmxCOztBQU1BLFlBQUlFLGdCQUFnQkosU0FBcEIsRUFBK0I7QUFDN0JOLHVCQUFhZ0IsU0FBU04sV0FBVCxDQUFiOztBQUVBLGNBQUlFLGVBQWVOLFNBQW5CLEVBQThCO0FBQzVCTCx1QkFBV0QsVUFBWDtBQUNEO0FBQ0Y7O0FBRUQsWUFBSWMsZ0JBQWdCUixTQUFwQixFQUErQjtBQUM3QkwscUJBQVdlLFNBQVNGLFdBQVQsQ0FBWDs7QUFFQSxjQUFJRixlQUFlTixTQUFuQixFQUE4QjtBQUM1Qk4seUJBQWFDLFFBQWI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBSWdCLFNBQVMsSUFBSWxCLE1BQUosQ0FBV0MsVUFBWCxFQUF1QkMsUUFBdkIsQ0FBYjs7QUFFQSxhQUFPZ0IsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnBCLE1BQWpCOztBQUVBLFNBQVNZLE1BQVQsQ0FBZ0JTLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU1AsS0FBVCxDQUFlTyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0wsTUFBVCxDQUFnQkssS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzcHJlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNwcmVhZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG5cbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIGlzQmV0d2VlbigpIHtcbiAgICByZXR1cm4gKCh0aGlzLmluZGV4ID49IHRoaXMuc3RhcnRJbmRleCkgJiYgKHRoaXMuaW5kZXggPD0gdGhpcy5lbmRJbmRleCkpO1xuICB9XG5cbiAgaW5jcmVtZW50SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleCArPSAxO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICB2YXIgc3RhcnRJbmRleCA9IC0xLFxuICAgICAgICBlbmRJbmRleCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblxuICAgIGlmIChleHByZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9cXF0vLFxuICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpO1xuXG4gICAgICBpZiAoc2Vjb25kTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzcHJlYWQgPSBuZXcgU3ByZWFkKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcHJlYWQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuIl19