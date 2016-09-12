'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = function () {
  function TerminalPart(string) {
    _classCallCheck(this, TerminalPart);

    this.string = string;
  }

  _createClass(TerminalPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = false,
          index = context.index,
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubstring = input.substr(index),
            string = this.string,
            stringIndex = inputSubstring.indexOf(string);

        if (stringIndex === 0) {
          var stringLength = string.length;

          context.index += stringLength;

          parsed = true;
        }
      }

      return parsed;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol) {
      var terminalPart = null,
          terminalRegExp = /'([^']+)'/,
          matches = symbol.match(terminalRegExp);

      if (matches !== null) {
        var string = matches[1];

        terminalPart = new TerminalPart(string);
      }

      return terminalPart;
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJzdHJpbmciLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiaW5wdXRMZW5ndGgiLCJsZW5ndGgiLCJpbnB1dFN1YnN0cmluZyIsInN1YnN0ciIsInN0cmluZ0luZGV4IiwiaW5kZXhPZiIsInN0cmluZ0xlbmd0aCIsInN5bWJvbCIsInRlcm1pbmFsUGFydCIsInRlcm1pbmFsUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxZO0FBQ0osd0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsU0FBUyxLQUFiO0FBQUEsVUFDSUMsUUFBUUgsUUFBUUcsS0FEcEI7QUFBQSxVQUVJQyxjQUFjTCxNQUFNTSxNQUZ4Qjs7QUFJQSxVQUFJRixRQUFRQyxXQUFaLEVBQXlCO0FBQ3ZCLFlBQUlFLGlCQUFpQlAsTUFBTVEsTUFBTixDQUFhSixLQUFiLENBQXJCO0FBQUEsWUFDSUwsU0FBUyxLQUFLQSxNQURsQjtBQUFBLFlBRUlVLGNBQWNGLGVBQWVHLE9BQWYsQ0FBdUJYLE1BQXZCLENBRmxCOztBQUlBLFlBQUlVLGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixjQUFJRSxlQUFlWixPQUFPTyxNQUExQjs7QUFFQUwsa0JBQVFHLEtBQVIsSUFBaUJPLFlBQWpCOztBQUVBUixtQkFBUyxJQUFUO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxNQUFQO0FBQ0Q7OzsrQkFFaUJTLE0sRUFBUTtBQUN4QixVQUFJQyxlQUFlLElBQW5CO0FBQUEsVUFDSUMsaUJBQWlCLFdBRHJCO0FBQUEsVUFFSUMsVUFBVUgsT0FBT0ksS0FBUCxDQUFhRixjQUFiLENBRmQ7O0FBSUEsVUFBSUMsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJaEIsU0FBU2dCLFFBQVEsQ0FBUixDQUFiOztBQUVBRix1QkFBZSxJQUFJZixZQUFKLENBQWlCQyxNQUFqQixDQUFmO0FBQ0Q7O0FBRUQsYUFBT2MsWUFBUDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQnBCLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgaW5kZXggPSBjb250ZXh0LmluZGV4LFxuICAgICAgICBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA8IGlucHV0TGVuZ3RoKSB7XG4gICAgICB2YXIgaW5wdXRTdWJzdHJpbmcgPSBpbnB1dC5zdWJzdHIoaW5kZXgpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHN0cmluZ0luZGV4ID0gaW5wdXRTdWJzdHJpbmcuaW5kZXhPZihzdHJpbmcpO1xuXG4gICAgICBpZiAoc3RyaW5nSW5kZXggPT09IDApIHtcbiAgICAgICAgdmFyIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgICAgICAgY29udGV4dC5pbmRleCArPSBzdHJpbmdMZW5ndGg7XG5cbiAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sKSB7XG4gICAgdmFyIHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgIHRlcm1pbmFsUmVnRXhwID0gLycoW14nXSspJy8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2godGVybWluYWxSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBtYXRjaGVzWzFdO1xuXG4gICAgICB0ZXJtaW5hbFBhcnQgPSBuZXcgVGVybWluYWxQYXJ0KHN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsUGFydDtcbiJdfQ==