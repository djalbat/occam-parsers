'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionPart = require('./production');

var ZeroOrMoreProductionsPart = function () {
  function ZeroOrMoreProductionsPart(name) {
    _classCallCheck(this, ZeroOrMoreProductionsPart);

    this.name = name;
  }

  _createClass(ZeroOrMoreProductionsPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = false,
          production = ProductionPart.findProduction(this.name, productions);

      if (production !== null) {
        parsed = true;

        for (;;) {
          var index = context.getIndex(),
              savedIndex = index; ///

          if (!production.parse(input, context, productions)) {
            context.backtrack(savedIndex);

            return parsed;
          }
        }
      }

      return parsed;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, specialSymbolsRegExp) {
      var zeroOrMoreProductionsPart = null,
          zeroOrMoreProductionsRegExp = /([^*]+)\*$/,
          matches = symbol.match(zeroOrMoreProductionsRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            name = secondMatch; ///

        zeroOrMoreProductionsPart = new ZeroOrMoreProductionsPart(name);
      }

      return zeroOrMoreProductionsPart;
    }
  }]);

  return ZeroOrMoreProductionsPart;
}();

module.exports = ZeroOrMoreProductionsPart;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbnMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvblBhcnQiLCJyZXF1aXJlIiwiWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCIsIm5hbWUiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsImluZGV4IiwiZ2V0SW5kZXgiLCJzYXZlZEluZGV4IiwicGFyc2UiLCJiYWNrdHJhY2siLCJzeW1ib2wiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cCIsInplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbnNSZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxjQUFSLENBQXJCOztJQUVNQyx5QjtBQUNKLHFDQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBYjtBQUFBLFVBQ0lDLGFBQWFSLGVBQWVTLGNBQWYsQ0FBOEIsS0FBS04sSUFBbkMsRUFBeUNHLFdBQXpDLENBRGpCOztBQUdBLFVBQUlFLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJELGlCQUFTLElBQVQ7O0FBRUEsaUJBQVE7QUFDTixjQUFJRyxRQUFRTCxRQUFRTSxRQUFSLEVBQVo7QUFBQSxjQUNJQyxhQUFhRixLQURqQixDQURNLENBRWtCOztBQUV4QixjQUFJLENBQUNGLFdBQVdLLEtBQVgsQ0FBaUJULEtBQWpCLEVBQXdCQyxPQUF4QixFQUFpQ0MsV0FBakMsQ0FBTCxFQUFvRDtBQUNsREQsb0JBQVFTLFNBQVIsQ0FBa0JGLFVBQWxCOztBQUVBLG1CQUFPTCxNQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9BLE1BQVA7QUFDRDs7OytCQUVpQlEsTSxFQUFRQyxvQixFQUFzQjtBQUM5QyxVQUFJQyw0QkFBNEIsSUFBaEM7QUFBQSxVQUNJQyw4QkFBOEIsWUFEbEM7QUFBQSxVQUVJQyxVQUFVSixPQUFPSyxLQUFQLENBQWFGLDJCQUFiLENBRmQ7O0FBSUEsVUFBSUMsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJRSxjQUFjQyxPQUFPSCxPQUFQLENBQWxCO0FBQUEsWUFDSWhCLE9BQU9rQixXQURYLENBRG9CLENBRUk7O0FBRXhCSixvQ0FBNEIsSUFBSWYseUJBQUosQ0FBOEJDLElBQTlCLENBQTVCO0FBQ0Q7O0FBRUQsYUFBT2MseUJBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJ0Qix5QkFBakI7O0FBRUEsU0FBU29CLE1BQVQsQ0FBZ0JHLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiemVyb09yTW9yZVByb2R1Y3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvZHVjdGlvblBhcnQgPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHBhcnNlZCA9IGZhbHNlLFxuICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvblBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5uYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvbnRleHQuZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgIHNhdmVkSW5kZXggPSBpbmRleDsgLy8vXG5cbiAgICAgICAgaWYgKCFwcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykpIHtcbiAgICAgICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNwZWNpYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIHplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQgPSBudWxsLFxuICAgICAgICB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNSZWdFeHAgPSAvKFteKl0rKVxcKiQvLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHplcm9Pck1vcmVQcm9kdWN0aW9uc1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIG5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIHplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQgPSBuZXcgWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydChuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gemVyb09yTW9yZVByb2R1Y3Rpb25zUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==