'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../../common/node/terminal');

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
            var productionName = null,
                terminalNode = TerminalNode.fromProductionNameAndSignificantToken(productionName, significantToken);

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
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var regularExpressionPart = null,
          regularExpressionPartRegExp = /^\/([^/]+)\/$/,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVnRXhwIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwicGFyc2VkIiwicHJvZHVjdGlvbk5hbWUiLCJ0ZXJtaW5hbE5vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRTaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwic3ltYm9sIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVndWxhckV4cHJlc3Npb25QYXJ0UmVnRXhwIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJyZWdFeHBQYXR0ZXJuIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSw0QkFBUixDQUFuQjs7SUFFTUMscUI7QUFDSixpQ0FBWUMsTUFBWixFQUFvQkMsWUFBcEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFGLFksRUFBYztBQUN4Q0EscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUR3QyxDQUNVOztBQUVsRCxVQUFJRyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhSCxRQUFRRyxVQUFSLEVBRGpCO0FBQUEsVUFFSUMsb0NBQW9DSixRQUFRSyxvQ0FBUixDQUE2Q04sWUFBN0MsQ0FGeEM7QUFBQSxVQUdJTyxtQkFBbUJGLGlDQUh2QixDQUh3QyxDQU1rQjs7QUFFMUQsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQUlDLFVBQVVELGlCQUFpQkUsVUFBakIsRUFBZDtBQUFBLFlBQ0lDLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLWixNQUFuQixDQURkOztBQUdBLFlBQUlXLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsY0FBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLGNBQ0lJLFNBQVVGLGVBQWVKLE9BRDdCOztBQUdBLGNBQUlNLE1BQUosRUFBWTtBQUNWLGdCQUFJQyxpQkFBaUIsSUFBckI7QUFBQSxnQkFDSUMsZUFBZXBCLGFBQWFxQixxQ0FBYixDQUFtREYsY0FBbkQsRUFBbUVSLGdCQUFuRSxDQURuQjs7QUFHQUosb0JBQVEsQ0FBQ2EsWUFBRCxDQUFSO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQUliLFVBQVUsSUFBZCxFQUFvQjtBQUNsQkYsZ0JBQVFpQixTQUFSLENBQWtCZCxVQUFsQjtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7OytCQUVpQmdCLE0sRUFBUUMscUIsRUFBdUJwQixZLEVBQWM7QUFDN0QsVUFBSXFCLHdCQUF3QixJQUE1QjtBQUFBLFVBQ0lDLDhCQUE4QixlQURsQztBQUFBLFVBRUlaLFVBQVVTLE9BQU9SLEtBQVAsQ0FBYVcsMkJBQWIsQ0FGZDs7QUFJQSxVQUFJWixZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlhLGNBQWNDLE9BQU9kLE9BQVAsQ0FBbEI7QUFBQSxZQUNJZSxnQkFBZ0JGLFdBRHBCO0FBQUEsWUFDa0M7QUFDOUJ4QixpQkFBUyxJQUFJMkIsTUFBSixPQUFlRCxhQUFmLE9BRmIsQ0FEb0IsQ0FHMkI7O0FBRS9DSixnQ0FBd0IsSUFBSXZCLHFCQUFKLENBQTBCQyxNQUExQixFQUFrQ0MsWUFBbEMsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPcUIscUJBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUI5QixxQkFBakI7O0FBRUEsU0FBU2UsS0FBVCxDQUFlZ0IsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNMLE1BQVQsQ0FBZ0JLLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicmVndWxhckV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWdFeHAsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWdFeHApO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgcGFyc2VkID0gKGZpcnN0TWF0Y2ggPT09IGNvbnRlbnQpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICB2YXIgcHJvZHVjdGlvbk5hbWUgPSBudWxsLFxuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kU2lnbmlmaWNhbnRUb2tlbihwcm9kdWN0aW9uTmFtZSwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBudWxsLFxuICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHAgPSAvXlxcLyhbXi9dKylcXC8kLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICByZWdFeHBQYXR0ZXJuID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHtyZWdFeHBQYXR0ZXJufSRgKTsgLy8vXG5cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVnRXhwLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19