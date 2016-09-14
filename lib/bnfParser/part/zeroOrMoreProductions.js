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
          var index = context.index;

          if (!production.parse(input, context, productions)) {
            context.index = index;

            return parsed;
          }
        }
      }

      return parsed;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol) {
      var zeroOrMoreProductionsPart = null,
          zeroOrMoreProductionsRegExp = /([^*]+)\*$/,
          matches = symbol.match(zeroOrMoreProductionsRegExp);

      if (matches !== null) {
        var name = matches[1];

        zeroOrMoreProductionsPart = new ZeroOrMoreProductionsPart(name);
      }

      return zeroOrMoreProductionsPart;
    }
  }]);

  return ZeroOrMoreProductionsPart;
}();

module.exports = ZeroOrMoreProductionsPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbnMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvblBhcnQiLCJyZXF1aXJlIiwiWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCIsIm5hbWUiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsImluZGV4IiwicGFyc2UiLCJzeW1ib2wiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwiemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxjQUFSLENBQXJCOztJQUVNQyx5QjtBQUNKLHFDQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBYjtBQUFBLFVBQ0lDLGFBQWFSLGVBQWVTLGNBQWYsQ0FBOEIsS0FBS04sSUFBbkMsRUFBeUNHLFdBQXpDLENBRGpCOztBQUdBLFVBQUlFLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJELGlCQUFTLElBQVQ7O0FBRUEsaUJBQVE7QUFDTixjQUFJRyxRQUFRTCxRQUFRSyxLQUFwQjs7QUFFQSxjQUFJLENBQUNGLFdBQVdHLEtBQVgsQ0FBaUJQLEtBQWpCLEVBQXdCQyxPQUF4QixFQUFpQ0MsV0FBakMsQ0FBTCxFQUFvRDtBQUNsREQsb0JBQVFLLEtBQVIsR0FBZ0JBLEtBQWhCOztBQUVBLG1CQUFPSCxNQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9BLE1BQVA7QUFDRDs7OytCQUVpQkssTSxFQUFRO0FBQ3hCLFVBQUlDLDRCQUE0QixJQUFoQztBQUFBLFVBQ0lDLDhCQUE4QixZQURsQztBQUFBLFVBRUlDLFVBQVVILE9BQU9JLEtBQVAsQ0FBYUYsMkJBQWIsQ0FGZDs7QUFJQSxVQUFJQyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlaLE9BQU9ZLFFBQVEsQ0FBUixDQUFYOztBQUVBRixvQ0FBNEIsSUFBSVgseUJBQUosQ0FBOEJDLElBQTlCLENBQTVCO0FBQ0Q7O0FBRUQsYUFBT1UseUJBQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJoQix5QkFBakIiLCJmaWxlIjoiemVyb09yTW9yZVByb2R1Y3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvZHVjdGlvblBhcnQgPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgWmVyb09yTW9yZVByb2R1Y3Rpb25zUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHBhcnNlZCA9IGZhbHNlLFxuICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvblBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5uYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvbnRleHQuaW5kZXg7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykpIHtcbiAgICAgICAgICBjb250ZXh0LmluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sKSB7XG4gICAgdmFyIHplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQgPSBudWxsLFxuICAgICAgICB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNSZWdFeHAgPSAvKFteKl0rKVxcKiQvLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHplcm9Pck1vcmVQcm9kdWN0aW9uc1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIG5hbWUgPSBtYXRjaGVzWzFdO1xuXG4gICAgICB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0O1xuIl19