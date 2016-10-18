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
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L29wdGlvbmFsLmpzIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJyZXF1aXJlIiwiT3B0aW9uYWxQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJzYXZlSW5kZXgiLCJwcm9kdWN0aW9uTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsImNvbmNhdCIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsIm9wdGlvbmFsUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBMUI7O0lBRU1DLFk7Ozs7Ozs7Ozs7OzBCQUNFQyxPLEVBQVNDLFcsRUFBYTtBQUMxQixVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQywyQkFBMkIsS0FBS0Esd0JBQUwsQ0FBOEJGLFdBQTlCLENBRC9COztBQUdBLFVBQUlFLDZCQUE2QixJQUFqQyxFQUF1QztBQUNyQ0QsZ0JBQVEsRUFBUjs7QUFFQUYsZ0JBQVFJLFNBQVI7O0FBRUEsWUFBSUMsa0JBQWtCRix5QkFBeUJHLEtBQXpCLENBQStCTixPQUEvQixFQUF3Q0MsV0FBeEMsQ0FBdEI7QUFBQSxZQUNJTSxTQUFVRixvQkFBb0IsSUFEbEM7O0FBR0EsWUFBSUUsTUFBSixFQUFZO0FBQ1ZMLGtCQUFRQSxNQUFNTSxNQUFOLENBQWFILGVBQWIsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMTCxrQkFBUVMsU0FBUjs7QUFFQSxpQkFBT1AsS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRWlCUSxNLEVBQVFDLHFCLEVBQXVCQyxhLEVBQWU7QUFDOUQsVUFBSUMsU0FBUyxZQUFiO0FBQUEsVUFDSUMsUUFBUWYsWUFEWjtBQUFBLFVBRUlnQixrSEFBZ0NMLE1BQWhDLEVBQXdDQyxxQkFBeEMsRUFBK0RDLGFBQS9ELEVBQThFQyxNQUE5RSxFQUFzRkMsS0FBdEYsQ0FGSjs7QUFJQSxhQUFPQyxZQUFQO0FBQ0Q7Ozs7RUEvQndCbEIsbUI7O0FBa0MzQm1CLE9BQU9DLE9BQVAsR0FBaUJsQixZQUFqQiIsImZpbGUiOiJvcHRpb25hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBPcHRpb25hbFBhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLnRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgY29udGV4dC5zYXZlSW5kZXgoKTtcblxuICAgICAgdmFyIHByb2R1Y3Rpb25Ob2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucyksXG4gICAgICAgICAgcGFyc2VkID0gKHByb2R1Y3Rpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocHJvZHVjdGlvbk5vZGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuYmFja3RyYWNrKCk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMpIHtcbiAgICB2YXIgcmVnRXhwID0gLyhbXipdKylcXD8kLyxcbiAgICAgICAgQ2xhc3MgPSBPcHRpb25hbFBhcnQsXG4gICAgICAgIG9wdGlvbmFsUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIG9wdGlvbmFsUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbmFsUGFydDtcbiJdfQ==