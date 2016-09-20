'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecialPart = function () {
  function SpecialPart(symbol) {
    _classCallCheck(this, SpecialPart);

    this.symbol = symbol;
  }

  _createClass(SpecialPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = false,
          index = context.getIndex(),
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubtring = input.substr(index),
            symbolIndex = inputSubtring.indexOf(this.symbol);

        if (symbolIndex === 0) {
          var amount = this.symbol.length; ///

          context.advance(amount);

          parsed = true;
        }
      }

      return parsed;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, specialSymbolsRegExp) {
      var specialPart = null,
          matches = symbol.match(specialSymbolsRegExp);

      if (matches !== null) {
        specialPart = new SpecialPart(symbol);
      }

      return specialPart;
    }
  }]);

  return SpecialPart;
}();

module.exports = SpecialPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9zcGVjaWFsLmpzIl0sIm5hbWVzIjpbIlNwZWNpYWxQYXJ0Iiwic3ltYm9sIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJwYXJzZWQiLCJpbmRleCIsImdldEluZGV4IiwiaW5wdXRMZW5ndGgiLCJsZW5ndGgiLCJpbnB1dFN1YnRyaW5nIiwic3Vic3RyIiwic3ltYm9sSW5kZXgiLCJpbmRleE9mIiwiYW1vdW50IiwiYWR2YW5jZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwic3BlY2lhbFBhcnQiLCJtYXRjaGVzIiwibWF0Y2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFc7QUFDSix1QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQWI7QUFBQSxVQUNJQyxRQUFRSCxRQUFRSSxRQUFSLEVBRFo7QUFBQSxVQUVJQyxjQUFjTixNQUFNTyxNQUZ4Qjs7QUFJQSxVQUFJSCxRQUFRRSxXQUFaLEVBQXlCO0FBQ3ZCLFlBQUlFLGdCQUFnQlIsTUFBTVMsTUFBTixDQUFhTCxLQUFiLENBQXBCO0FBQUEsWUFDSU0sY0FBY0YsY0FBY0csT0FBZCxDQUFzQixLQUFLWixNQUEzQixDQURsQjs7QUFHQSxZQUFJVyxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsY0FBSUUsU0FBUyxLQUFLYixNQUFMLENBQVlRLE1BQXpCLENBRHFCLENBQ1k7O0FBRWpDTixrQkFBUVksT0FBUixDQUFnQkQsTUFBaEI7O0FBRUFULG1CQUFTLElBQVQ7QUFDRDtBQUNGOztBQUVELGFBQU9BLE1BQVA7QUFDRDs7OytCQUVpQkosTSxFQUFRZSxvQixFQUFzQjtBQUM5QyxVQUFJQyxjQUFjLElBQWxCO0FBQUEsVUFDSUMsVUFBVWpCLE9BQU9rQixLQUFQLENBQWFILG9CQUFiLENBRGQ7O0FBR0EsVUFBSUUsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkQsc0JBQWMsSUFBSWpCLFdBQUosQ0FBZ0JDLE1BQWhCLENBQWQ7QUFDRDs7QUFFRCxhQUFPZ0IsV0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwiZmlsZSI6InNwZWNpYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNwZWNpYWxQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3ltYm9sKSB7XG4gICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gIH1cblxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VkID0gZmFsc2UsXG4gICAgICAgIGluZGV4ID0gY29udGV4dC5nZXRJbmRleCgpLFxuICAgICAgICBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA8IGlucHV0TGVuZ3RoKSB7XG4gICAgICB2YXIgaW5wdXRTdWJ0cmluZyA9IGlucHV0LnN1YnN0cihpbmRleCksXG4gICAgICAgICAgc3ltYm9sSW5kZXggPSBpbnB1dFN1YnRyaW5nLmluZGV4T2YodGhpcy5zeW1ib2wpO1xuXG4gICAgICBpZiAoc3ltYm9sSW5kZXggPT09IDApIHtcbiAgICAgICAgdmFyIGFtb3VudCA9IHRoaXMuc3ltYm9sLmxlbmd0aDsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZHZhbmNlKGFtb3VudCk7XG5cbiAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cCkge1xuICAgIHZhciBzcGVjaWFsUGFydCA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goc3BlY2lhbFN5bWJvbHNSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHNwZWNpYWxQYXJ0ID0gbmV3IFNwZWNpYWxQYXJ0KHN5bWJvbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwZWNpYWxQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3BlY2lhbFBhcnQ7XG4iXX0=