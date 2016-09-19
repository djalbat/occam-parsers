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
    value: function fromSymbol(symbol, terminalSymbolsRegExp) {
      var terminalPart = null,
          matches = symbol.match(terminalSymbolsRegExp);

      if (matches !== null) {
        var firstMatch = first(matches),
            string = firstMatch; ///

        terminalPart = new TerminalPart(string);
      }

      return terminalPart;
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJzdHJpbmciLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiaW5wdXRMZW5ndGgiLCJsZW5ndGgiLCJpbnB1dFN1YnN0cmluZyIsInN1YnN0ciIsInN0cmluZ0luZGV4IiwiaW5kZXhPZiIsInN0cmluZ0xlbmd0aCIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsUGFydCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxZO0FBQ0osd0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsU0FBUyxLQUFiO0FBQUEsVUFDSUMsUUFBUUgsUUFBUUcsS0FEcEI7QUFBQSxVQUVJQyxjQUFjTCxNQUFNTSxNQUZ4Qjs7QUFJQSxVQUFJRixRQUFRQyxXQUFaLEVBQXlCO0FBQ3ZCLFlBQUlFLGlCQUFpQlAsTUFBTVEsTUFBTixDQUFhSixLQUFiLENBQXJCO0FBQUEsWUFDSUwsU0FBUyxLQUFLQSxNQURsQjtBQUFBLFlBRUlVLGNBQWNGLGVBQWVHLE9BQWYsQ0FBdUJYLE1BQXZCLENBRmxCOztBQUlBLFlBQUlVLGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixjQUFJRSxlQUFlWixPQUFPTyxNQUExQjs7QUFFQUwsa0JBQVFHLEtBQVIsSUFBaUJPLFlBQWpCOztBQUVBUixtQkFBUyxJQUFUO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxNQUFQO0FBQ0Q7OzsrQkFFaUJTLE0sRUFBUUMscUIsRUFBdUI7QUFDL0MsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQ0lDLFVBQVVILE9BQU9JLEtBQVAsQ0FBYUgscUJBQWIsQ0FEZDs7QUFHQSxVQUFJRSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxZQUNJaEIsU0FBU2tCLFVBRGIsQ0FEb0IsQ0FFTTs7QUFFMUJILHVCQUFlLElBQUloQixZQUFKLENBQWlCQyxNQUFqQixDQUFmO0FBQ0Q7O0FBRUQsYUFBT2UsWUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnRCLFlBQWpCOztBQUVBLFNBQVNvQixLQUFULENBQWVHLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VkID0gZmFsc2UsXG4gICAgICAgIGluZGV4ID0gY29udGV4dC5pbmRleCxcbiAgICAgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPCBpbnB1dExlbmd0aCkge1xuICAgICAgdmFyIGlucHV0U3Vic3RyaW5nID0gaW5wdXQuc3Vic3RyKGluZGV4KSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBzdHJpbmdJbmRleCA9IGlucHV0U3Vic3RyaW5nLmluZGV4T2Yoc3RyaW5nKTtcblxuICAgICAgaWYgKHN0cmluZ0luZGV4ID09PSAwKSB7XG4gICAgICAgIHZhciBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgICAgIGNvbnRleHQuaW5kZXggKz0gc3RyaW5nTGVuZ3RoO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2godGVybWluYWxTeW1ib2xzUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHN0cmluZyA9IGZpcnN0TWF0Y2g7ICAvLy9cblxuICAgICAgdGVybWluYWxQYXJ0ID0gbmV3IFRlcm1pbmFsUGFydChzdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFBhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfSJdfQ==