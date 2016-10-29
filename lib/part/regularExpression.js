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
        var string = significantToken.getString(),
            matches = string.match(this.regExp);

        if (matches !== null) {
          var firstMatch = first(matches),
              parsed = firstMatch === string;

          if (parsed) {
            var type = RegularExpressionPart.type,
                terminalNode = new TerminalNode(string, type);

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

RegularExpressionPart.type = 'regexp'; ///

module.exports = RegularExpressionPart;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwicGFyc2VkIiwidHlwZSIsInRlcm1pbmFsTm9kZSIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCIsInJlZ3VsYXJFeHByZXNzaW9uUGFydFJlZ0V4cCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwicmVnRXhwUGF0dGVybiIsIlJlZ0V4cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1DLHFCO0FBQ0osaUNBQVlDLE1BQVosRUFBb0JDLFlBQXBCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhRixZLEVBQWM7QUFDeENBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEd0MsQ0FDVTs7QUFFbEQsVUFBSUcsUUFBUSxJQUFaO0FBQUEsVUFDSUMsYUFBYUgsUUFBUUcsVUFBUixFQURqQjtBQUFBLFVBRUlDLG9DQUFvQ0osUUFBUUssb0NBQVIsQ0FBNkNOLFlBQTdDLENBRnhDO0FBQUEsVUFHSU8sbUJBQW1CRixpQ0FIdkIsQ0FId0MsQ0FNa0I7O0FBRTFELFVBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFJQyxTQUFTRCxpQkFBaUJFLFNBQWpCLEVBQWI7QUFBQSxZQUNJQyxVQUFVRixPQUFPRyxLQUFQLENBQWEsS0FBS1osTUFBbEIsQ0FEZDs7QUFHQSxZQUFJVyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLGNBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxjQUNJSSxTQUFVRixlQUFlSixNQUQ3Qjs7QUFHQSxjQUFJTSxNQUFKLEVBQVk7QUFDVixnQkFBSUMsT0FBT2pCLHNCQUFzQmlCLElBQWpDO0FBQUEsZ0JBQ0lDLGVBQWUsSUFBSXBCLFlBQUosQ0FBaUJZLE1BQWpCLEVBQXlCTyxJQUF6QixDQURuQjs7QUFHQVosb0JBQVEsQ0FBQ2EsWUFBRCxDQUFSO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQUliLFVBQVUsSUFBZCxFQUFvQjtBQUNsQkYsZ0JBQVFnQixTQUFSLENBQWtCYixVQUFsQjtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7OytCQUVpQmUsTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJwQixZLEVBQWM7QUFDcEYsVUFBSXFCLHdCQUF3QixJQUE1QjtBQUFBLFVBQ0lDLDhCQUE4QixhQURsQztBQUFBLFVBRUlaLFVBQVVRLE9BQU9QLEtBQVAsQ0FBYVcsMkJBQWIsQ0FGZDs7QUFJQSxVQUFJWixZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlhLGNBQWNDLE9BQU9kLE9BQVAsQ0FBbEI7QUFBQSxZQUNJZSxnQkFBZ0JGLFdBRHBCO0FBQUEsWUFDa0M7QUFDOUJ4QixpQkFBUyxJQUFJMkIsTUFBSixPQUFlRCxhQUFmLE9BRmIsQ0FEb0IsQ0FHMkI7O0FBRS9DSixnQ0FBd0IsSUFBSXZCLHFCQUFKLENBQTBCQyxNQUExQixFQUFrQ0MsWUFBbEMsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPcUIscUJBQVA7QUFDRDs7Ozs7O0FBR0h2QixzQkFBc0JpQixJQUF0QixHQUE2QixRQUE3QixDLENBQXVDOztBQUV2Q1ksT0FBT0MsT0FBUCxHQUFpQjlCLHFCQUFqQjs7QUFFQSxTQUFTZSxLQUFULENBQWVnQixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0wsTUFBVCxDQUFnQkssS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IHtcbiAgY29uc3RydWN0b3IocmVnRXhwLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnJlZ0V4cCA9IHJlZ0V4cDtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICB2YXIgc3RyaW5nID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKHRoaXMucmVnRXhwKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChmaXJzdE1hdGNoID09PSBzdHJpbmcpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IFJlZ3VsYXJFeHByZXNzaW9uUGFydC50eXBlLFxuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0cmluZywgdHlwZSk7XG5cbiAgICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG51bGwsXG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydFJlZ0V4cCA9IC9cXC8oW14vXSspXFwvLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICByZWdFeHBQYXR0ZXJuID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHtyZWdFeHBQYXR0ZXJufSRgKTsgLy8vXG5cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVnRXhwLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cbn1cblxuUmVndWxhckV4cHJlc3Npb25QYXJ0LnR5cGUgPSAncmVnZXhwJzsgLy8vXG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25QYXJ0O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==