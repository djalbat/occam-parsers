'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var RegularExpressionPart = function () {
  function RegularExpressionPart(regExp, noWhitespace) {
    _classCallCheck(this, RegularExpressionPart);

    this.regExp = regExp;
    this.noWhitespace = noWhitespace;
  }

  _createClass(RegularExpressionPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodes = null,
          savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            matches = content.match(this.regExp);

        if (matches !== null) {
          var firstMatch = first(matches),
              parsed = firstMatch === content;

          if (parsed) {
            var terminalNode = new TerminalNode(significantToken);

            nodes = [terminalNode];
          }
        }
      }

      if (nodes === null) {
        context.backtrack(savedIndex);
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var regularExpressionPart = null,
          regularExpressionPartRegExp = /\/([^/]+)\//,
          matches = symbol.match(regularExpressionPartRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            regExpPattern = secondMatch,
            ///
        regExp = new RegExp('^' + regExpPattern + '$'); ///

        regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);
      }

      return regularExpressionPart;
    }
  }]);

  return RegularExpressionPart;
}();

module.exports = RegularExpressionPart;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVnRXhwIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwicGFyc2VkIiwidGVybWluYWxOb2RlIiwiYmFja3RyYWNrIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVndWxhckV4cHJlc3Npb25QYXJ0UmVnRXhwIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJyZWdFeHBQYXR0ZXJuIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUMscUI7QUFDSixpQ0FBWUMsTUFBWixFQUFvQkMsWUFBcEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFGLFksRUFBYztBQUN4Q0EscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUR3QyxDQUNVOztBQUVsRCxVQUFJRyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhSCxRQUFRRyxVQUFSLEVBRGpCO0FBQUEsVUFFSUMsb0NBQW9DSixRQUFRSyxvQ0FBUixDQUE2Q04sWUFBN0MsQ0FGeEM7QUFBQSxVQUdJTyxtQkFBbUJGLGlDQUh2QixDQUh3QyxDQU1rQjs7QUFFMUQsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQUlDLFVBQVVELGlCQUFpQkUsVUFBakIsRUFBZDtBQUFBLFlBQ0lDLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLWixNQUFuQixDQURkOztBQUdBLFlBQUlXLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsY0FBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLGNBQ0lJLFNBQVVGLGVBQWVKLE9BRDdCOztBQUdBLGNBQUlNLE1BQUosRUFBWTtBQUNWLGdCQUFJQyxlQUFlLElBQUluQixZQUFKLENBQWlCVyxnQkFBakIsQ0FBbkI7O0FBRUFKLG9CQUFRLENBQUNZLFlBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFJWixVQUFVLElBQWQsRUFBb0I7QUFDbEJGLGdCQUFRZSxTQUFSLENBQWtCWixVQUFsQjtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7OytCQUVpQmMsTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJuQixZLEVBQWM7QUFDcEYsVUFBSW9CLHdCQUF3QixJQUE1QjtBQUFBLFVBQ0lDLDhCQUE4QixhQURsQztBQUFBLFVBRUlYLFVBQVVPLE9BQU9OLEtBQVAsQ0FBYVUsMkJBQWIsQ0FGZDs7QUFJQSxVQUFJWCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlZLGNBQWNDLE9BQU9iLE9BQVAsQ0FBbEI7QUFBQSxZQUNJYyxnQkFBZ0JGLFdBRHBCO0FBQUEsWUFDa0M7QUFDOUJ2QixpQkFBUyxJQUFJMEIsTUFBSixPQUFlRCxhQUFmLE9BRmIsQ0FEb0IsQ0FHMkI7O0FBRS9DSixnQ0FBd0IsSUFBSXRCLHFCQUFKLENBQTBCQyxNQUExQixFQUFrQ0MsWUFBbEMsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPb0IscUJBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUI3QixxQkFBakI7O0FBRUEsU0FBU2UsS0FBVCxDQUFlZSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0wsTUFBVCxDQUFnQkssS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IHtcbiAgY29uc3RydWN0b3IocmVnRXhwLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnJlZ0V4cCA9IHJlZ0V4cDtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICB2YXIgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVnRXhwKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChmaXJzdE1hdGNoID09PSBjb250ZW50KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdmFyIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG51bGwsXG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydFJlZ0V4cCA9IC9cXC8oW14vXSspXFwvLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICByZWdFeHBQYXR0ZXJuID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHtyZWdFeHBQYXR0ZXJufSRgKTsgLy8vXG5cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVnRXhwLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19