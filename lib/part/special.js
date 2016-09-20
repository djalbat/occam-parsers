'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var SpecialPart = function () {
  function SpecialPart(symbol) {
    _classCallCheck(this, SpecialPart);

    this.symbol = symbol;
  }

  _createClass(SpecialPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var nodes = null,
          index = context.getIndex(),
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubstring = input.substr(index),
            symbolIndex = inputSubstring.indexOf(this.symbol),
            parsed = symbolIndex === 0;

        if (parsed) {
          var symbolLength = this.symbol.length,
              str = inputSubstring.substr(0, symbolLength),
              terminalNode = new TerminalNode(str),
              amount = symbolLength; ///

          nodes = [terminalNode];

          context.advance(amount);
        }
      }

      return nodes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NwZWNpYWwuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIlNwZWNpYWxQYXJ0Iiwic3ltYm9sIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsImluZGV4IiwiZ2V0SW5kZXgiLCJpbnB1dExlbmd0aCIsImxlbmd0aCIsImlucHV0U3Vic3RyaW5nIiwic3Vic3RyIiwic3ltYm9sSW5kZXgiLCJpbmRleE9mIiwicGFyc2VkIiwic3ltYm9sTGVuZ3RoIiwic3RyIiwidGVybWluYWxOb2RlIiwiYW1vdW50IiwiYWR2YW5jZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwic3BlY2lhbFBhcnQiLCJtYXRjaGVzIiwibWF0Y2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUMsVztBQUNKLHVCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLFFBQVFILFFBQVFJLFFBQVIsRUFEWjtBQUFBLFVBRUlDLGNBQWNOLE1BQU1PLE1BRnhCOztBQUlBLFVBQUlILFFBQVFFLFdBQVosRUFBeUI7QUFDdkIsWUFBSUUsaUJBQWlCUixNQUFNUyxNQUFOLENBQWFMLEtBQWIsQ0FBckI7QUFBQSxZQUNJTSxjQUFjRixlQUFlRyxPQUFmLENBQXVCLEtBQUtaLE1BQTVCLENBRGxCO0FBQUEsWUFFSWEsU0FBVUYsZ0JBQWdCLENBRjlCOztBQUlBLFlBQUlFLE1BQUosRUFBWTtBQUNWLGNBQUlDLGVBQWUsS0FBS2QsTUFBTCxDQUFZUSxNQUEvQjtBQUFBLGNBQ0lPLE1BQU1OLGVBQWVDLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUJJLFlBQXpCLENBRFY7QUFBQSxjQUVJRSxlQUFlLElBQUluQixZQUFKLENBQWlCa0IsR0FBakIsQ0FGbkI7QUFBQSxjQUdJRSxTQUFTSCxZQUhiLENBRFUsQ0FJa0I7O0FBRTVCVixrQkFBUSxDQUFDWSxZQUFELENBQVI7O0FBRUFkLGtCQUFRZ0IsT0FBUixDQUFnQkQsTUFBaEI7QUFDRDtBQUNGOztBQUVELGFBQU9iLEtBQVA7QUFDRDs7OytCQUVpQkosTSxFQUFRbUIsb0IsRUFBc0I7QUFDOUMsVUFBSUMsY0FBYyxJQUFsQjtBQUFBLFVBQ0lDLFVBQVVyQixPQUFPc0IsS0FBUCxDQUFhSCxvQkFBYixDQURkOztBQUdBLFVBQUlFLFlBQVksSUFBaEIsRUFBc0I7QUFDcEJELHNCQUFjLElBQUlyQixXQUFKLENBQWdCQyxNQUFoQixDQUFkO0FBQ0Q7O0FBRUQsYUFBT29CLFdBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJ6QixXQUFqQiIsImZpbGUiOiJzcGVjaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBTcGVjaWFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHN5bWJvbCkge1xuICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICB9XG5cbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgaW5kZXggPSBjb250ZXh0LmdldEluZGV4KCksXG4gICAgICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4IDwgaW5wdXRMZW5ndGgpIHtcbiAgICAgIHZhciBpbnB1dFN1YnN0cmluZyA9IGlucHV0LnN1YnN0cihpbmRleCksXG4gICAgICAgICAgc3ltYm9sSW5kZXggPSBpbnB1dFN1YnN0cmluZy5pbmRleE9mKHRoaXMuc3ltYm9sKSxcbiAgICAgICAgICBwYXJzZWQgPSAoc3ltYm9sSW5kZXggPT09IDApO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHZhciBzeW1ib2xMZW5ndGggPSB0aGlzLnN5bWJvbC5sZW5ndGgsXG4gICAgICAgICAgICBzdHIgPSBpbnB1dFN1YnN0cmluZy5zdWJzdHIoMCwgc3ltYm9sTGVuZ3RoKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyKSxcbiAgICAgICAgICAgIGFtb3VudCA9IHN5bWJvbExlbmd0aDsgIC8vL1xuXG4gICAgICAgIG5vZGVzID0gW3Rlcm1pbmFsTm9kZV07XG5cbiAgICAgICAgY29udGV4dC5hZHZhbmNlKGFtb3VudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cCkge1xuICAgIHZhciBzcGVjaWFsUGFydCA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goc3BlY2lhbFN5bWJvbHNSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHNwZWNpYWxQYXJ0ID0gbmV3IFNwZWNpYWxQYXJ0KHN5bWJvbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwZWNpYWxQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3BlY2lhbFBhcnQ7XG4iXX0=