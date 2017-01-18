'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = function () {
  function Spread(startIndex, endIndex) {
    _classCallCheck(this, Spread);

    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }

  _createClass(Spread, [{
    key: 'containsIndex',
    value: function containsIndex(index) {
      return index >= this.startIndex && index <= this.endIndex; ///
    }
  }], [{
    key: 'fromExpression',
    value: function fromExpression(expression) {
      var startIndex = -1,
          endIndex = Number.POSITIVE_INFINITY;

      if (expression !== undefined) {
        var matches = expression.match(/\[(\d+)?(\.\.\.)?(\d+)?\]/),
            secondMatch = second(matches),
            fourthMatch = fourth(matches);

        if (secondMatch !== undefined) {
          startIndex = parseInt(secondMatch);
        }

        if (fourthMatch !== undefined) {
          endIndex = parseInt(fourthMatch);
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
function fourth(array) {
  return array[3];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vc3ByZWFkLmpzIl0sIm5hbWVzIjpbIlNwcmVhZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImluZGV4IiwiZXhwcmVzc2lvbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwidW5kZWZpbmVkIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsInBhcnNlSW50Iiwic3ByZWFkIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhQyxLLEVBQU87QUFDbkIsYUFBU0EsU0FBUyxLQUFLRixVQUFmLElBQStCRSxTQUFTLEtBQUtELFFBQXJELENBRG1CLENBQytDO0FBQ25FOzs7bUNBRXFCRSxVLEVBQVk7QUFDaEMsVUFBSUgsYUFBYSxDQUFDLENBQWxCO0FBQUEsVUFDSUMsV0FBV0csT0FBT0MsaUJBRHRCOztBQUdBLFVBQUlGLGVBQWVHLFNBQW5CLEVBQThCO0FBQzVCLFlBQUlDLFVBQVVKLFdBQVdLLEtBQVgsQ0FBaUIsMkJBQWpCLENBQWQ7QUFBQSxZQUNJQyxjQUFjQyxPQUFPSCxPQUFQLENBRGxCO0FBQUEsWUFFSUksY0FBY0MsT0FBT0wsT0FBUCxDQUZsQjs7QUFJQSxZQUFJRSxnQkFBZ0JILFNBQXBCLEVBQStCO0FBQzdCTix1QkFBYWEsU0FBU0osV0FBVCxDQUFiO0FBQ0Q7O0FBRUQsWUFBSUUsZ0JBQWdCTCxTQUFwQixFQUErQjtBQUM3QkwscUJBQVdZLFNBQVNGLFdBQVQsQ0FBWDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUcsU0FBUyxJQUFJZixNQUFKLENBQVdDLFVBQVgsRUFBdUJDLFFBQXZCLENBQWI7O0FBRUEsYUFBT2EsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmpCLE1BQWpCOztBQUVBLFNBQVNXLE1BQVQsQ0FBZ0JPLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU0wsTUFBVCxDQUFnQkssS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzcHJlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNwcmVhZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gIH1cblxuICBjb250YWluc0luZGV4KGluZGV4KSB7XG4gICAgcmV0dXJuICgoaW5kZXggPj0gdGhpcy5zdGFydEluZGV4KSAmJiAoaW5kZXggPD0gdGhpcy5lbmRJbmRleCkpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHZhciBzdGFydEluZGV4ID0gLTEsXG4gICAgICAgIGVuZEluZGV4ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgaWYgKGV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKC9cXFsoXFxkKyk/KFxcLlxcLlxcLik/KFxcZCspP1xcXS8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpO1xuXG4gICAgICBpZiAoc2Vjb25kTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91cnRoTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbmRJbmRleCA9IHBhcnNlSW50KGZvdXJ0aE1hdGNoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3ByZWFkO1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG4iXX0=