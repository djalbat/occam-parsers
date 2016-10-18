'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts');

var OptionalPart = function (_SequenceOfPartsPart) {
  _inherits(OptionalPart, _SequenceOfPartsPart);

  function OptionalPart() {
    _classCallCheck(this, OptionalPart);

    return _possibleConstructorReturn(this, (OptionalPart.__proto__ || Object.getPrototypeOf(OptionalPart)).apply(this, arguments));
  }

  _createClass(OptionalPart, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = null,
          terminalPartOrProduction = this.terminalPartOrProduction();

      if (terminalPartOrProduction !== null) {
        nodes = [];

        context.saveIndex();

        var productionNodes = terminalPartOrProduction.parse(context, productions),
            parsed = productionNodes !== null;

        if (parsed) {
          nodes = nodes.concat(productionNodes);
        } else {
          context.backtrack();

          return nodes;
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
      var regExp = /([^*]+)\?$/,
          Class = OptionalPart,
          optionalPart = _get(OptionalPart.__proto__ || Object.getPrototypeOf(OptionalPart), 'fromSymbol', this).call(this, symbol, terminalSymbolsRegExp, terminalTypes, regExp, Class);

      return optionalPart;
    }
  }]);

  return OptionalPart;
}(SequenceOfPartsPart);

module.exports = OptionalPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L29wdGlvbmFsLmpzIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJyZXF1aXJlIiwiT3B0aW9uYWxQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJzYXZlSW5kZXgiLCJwcm9kdWN0aW9uTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsImNvbmNhdCIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsIm9wdGlvbmFsUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBMUI7O0lBRU1DLFk7Ozs7Ozs7Ozs7OzBCQUNFQyxPLEVBQVNDLFcsRUFBYTtBQUMxQixVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQywyQkFBMkIsS0FBS0Esd0JBQUwsRUFEL0I7O0FBR0EsVUFBSUEsNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDRCxnQkFBUSxFQUFSOztBQUVBRixnQkFBUUksU0FBUjs7QUFFQSxZQUFJQyxrQkFBa0JGLHlCQUF5QkcsS0FBekIsQ0FBK0JOLE9BQS9CLEVBQXdDQyxXQUF4QyxDQUF0QjtBQUFBLFlBQ0lNLFNBQVVGLG9CQUFvQixJQURsQzs7QUFHQSxZQUFJRSxNQUFKLEVBQVk7QUFDVkwsa0JBQVFBLE1BQU1NLE1BQU4sQ0FBYUgsZUFBYixDQUFSO0FBQ0QsU0FGRCxNQUVPO0FBQ0xMLGtCQUFRUyxTQUFSOztBQUVBLGlCQUFPUCxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFaUJRLE0sRUFBUUMscUIsRUFBdUJDLGEsRUFBZTtBQUM5RCxVQUFJQyxTQUFTLFlBQWI7QUFBQSxVQUNJQyxRQUFRZixZQURaO0FBQUEsVUFFSWdCLGtIQUFnQ0wsTUFBaEMsRUFBd0NDLHFCQUF4QyxFQUErREMsYUFBL0QsRUFBOEVDLE1BQTlFLEVBQXNGQyxLQUF0RixDQUZKOztBQUlBLGFBQU9DLFlBQVA7QUFDRDs7OztFQS9Cd0JsQixtQjs7QUFrQzNCbUIsT0FBT0MsT0FBUCxHQUFpQmxCLFlBQWpCIiwiZmlsZSI6Im9wdGlvbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNsYXNzIE9wdGlvbmFsUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9IHRoaXMudGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKCk7XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgY29udGV4dC5zYXZlSW5kZXgoKTtcblxuICAgICAgdmFyIHByb2R1Y3Rpb25Ob2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucyksXG4gICAgICAgICAgcGFyc2VkID0gKHByb2R1Y3Rpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocHJvZHVjdGlvbk5vZGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuYmFja3RyYWNrKCk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMpIHtcbiAgICB2YXIgcmVnRXhwID0gLyhbXipdKylcXD8kLyxcbiAgICAgICAgQ2xhc3MgPSBPcHRpb25hbFBhcnQsXG4gICAgICAgIG9wdGlvbmFsUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIG9wdGlvbmFsUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbmFsUGFydDtcbiJdfQ==