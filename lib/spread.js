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
      var between = this.index >= this.startIndex && this.index <= this.endIndex;

      return between;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcHJlYWQuanMiXSwibmFtZXMiOlsiU3ByZWFkIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiaW5kZXgiLCJiZXR3ZWVuIiwiZXhwcmVzc2lvbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwidW5kZWZpbmVkIiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsInBhcnNlSW50Iiwic3ByZWFkIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7O2dDQUVXO0FBQ1YsVUFBTUMsVUFBWSxLQUFLRCxLQUFMLElBQWMsS0FBS0YsVUFBcEIsSUFBb0MsS0FBS0UsS0FBTCxJQUFjLEtBQUtELFFBQXhFOztBQUVBLGFBQU9FLE9BQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUtELEtBQUwsSUFBYyxDQUFkO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUNoQyxVQUFJSixhQUFhLENBQUMsQ0FBbEI7QUFBQSxVQUNJQyxXQUFXSSxPQUFPQyxpQkFEdEI7O0FBR0EsVUFBSUYsZUFBZUcsU0FBbkIsRUFBOEI7QUFDNUIsWUFBTUMsU0FBUywyQkFBZjtBQUFBLFlBQ0lDLFVBQVVMLFdBQVdNLEtBQVgsQ0FBaUJGLE1BQWpCLENBRGQ7QUFBQSxZQUVJRyxjQUFjQyxPQUFPSCxPQUFQLENBRmxCO0FBQUEsWUFHSUksYUFBYUMsTUFBTUwsT0FBTixDQUhqQjtBQUFBLFlBSUlNLGNBQWNDLE9BQU9QLE9BQVAsQ0FKbEI7O0FBTUEsWUFBSUUsZ0JBQWdCSixTQUFwQixFQUErQjtBQUM3QlAsdUJBQWFpQixTQUFTTixXQUFULENBQWI7O0FBRUEsY0FBSUUsZUFBZU4sU0FBbkIsRUFBOEI7QUFDNUJOLHVCQUFXRCxVQUFYO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJZSxnQkFBZ0JSLFNBQXBCLEVBQStCO0FBQzdCTixxQkFBV2dCLFNBQVNGLFdBQVQsQ0FBWDs7QUFFQSxjQUFJRixlQUFlTixTQUFuQixFQUE4QjtBQUM1QlAseUJBQWFDLFFBQWI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBTWlCLFNBQVMsSUFBSW5CLE1BQUosQ0FBV0MsVUFBWCxFQUF1QkMsUUFBdkIsQ0FBZjs7QUFFQSxhQUFPaUIsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJCLE1BQWpCOztBQUVBLFNBQVNhLE1BQVQsQ0FBZ0JTLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU1AsS0FBVCxDQUFlTyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0wsTUFBVCxDQUFnQkssS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzcHJlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNwcmVhZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG5cbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIGlzQmV0d2VlbigpIHtcbiAgICBjb25zdCBiZXR3ZWVuID0gKCh0aGlzLmluZGV4ID49IHRoaXMuc3RhcnRJbmRleCkgJiYgKHRoaXMuaW5kZXggPD0gdGhpcy5lbmRJbmRleCkpO1xuXG4gICAgcmV0dXJuIGJldHdlZW47XG4gIH1cblxuICBpbmNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ICs9IDE7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gLTEsXG4gICAgICAgIGVuZEluZGV4ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgaWYgKGV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcmVnRXhwID0gL1xcWyhcXGQrKT8oXFwuXFwuXFwuKT8oXFxkKyk/XFxdLyxcbiAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKTtcblxuICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IHBhcnNlSW50KHNlY29uZE1hdGNoKTtcblxuICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVuZEluZGV4ID0gcGFyc2VJbnQoZm91cnRoTWF0Y2gpO1xuXG4gICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzcHJlYWQgPSBuZXcgU3ByZWFkKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcHJlYWQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuIl19