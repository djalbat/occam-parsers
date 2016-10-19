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
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
          token = nextNonWhitespaceToken; ///

      if (token !== null) {
        var str = token.getString(),
            matches = str.match(this.regExp);

        if (matches !== null) {
          var firstMatch = first(matches),
              parsed = firstMatch === str;

          if (parsed) {
            var type = RegularExpressionPart.type,
                terminalNode = new TerminalNode(str, type);

            nodes = [terminalNode];

            context.advanceJustPastToken(token);
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
      var regularExpressionPart = null,
          regularExpressionPartRegExp = /\/([^/]+)\//,
          matches = symbol.match(regularExpressionPartRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            pattern = secondMatch,
            ///
        regExp = new RegExp(pattern);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsIm5leHROb25XaGl0ZXNwYWNlVG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJzdHIiLCJnZXRTdHJpbmciLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJwYXJzZWQiLCJ0eXBlIiwidGVybWluYWxOb2RlIiwiYWR2YW5jZUp1c3RQYXN0VG9rZW4iLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ0ZXJtaW5hbFR5cGVzIiwicmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVndWxhckV4cHJlc3Npb25QYXJ0UmVnRXhwIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJwYXR0ZXJuIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUMscUI7QUFDSixpQ0FBWUMsTUFBWixFQUFvQkMsWUFBcEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFGLFksRUFBYztBQUN4Q0EscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUR3QyxDQUNVOztBQUVsRCxVQUFJRyxRQUFRLElBQVo7QUFBQSxVQUNJQyx5QkFBeUJILFFBQVFJLHlCQUFSLENBQWtDTCxZQUFsQyxDQUQ3QjtBQUFBLFVBRUlNLFFBQVFGLHNCQUZaLENBSHdDLENBS0o7O0FBRXBDLFVBQUlFLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixZQUFJQyxNQUFNRCxNQUFNRSxTQUFOLEVBQVY7QUFBQSxZQUNJQyxVQUFVRixJQUFJRyxLQUFKLENBQVUsS0FBS1gsTUFBZixDQURkOztBQUdBLFlBQUlVLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsY0FBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLGNBQ0lJLFNBQVVGLGVBQWVKLEdBRDdCOztBQUdBLGNBQUlNLE1BQUosRUFBWTtBQUNWLGdCQUFJQyxPQUFPaEIsc0JBQXNCZ0IsSUFBakM7QUFBQSxnQkFDSUMsZUFBZSxJQUFJbkIsWUFBSixDQUFpQlcsR0FBakIsRUFBc0JPLElBQXRCLENBRG5COztBQUdBWCxvQkFBUSxDQUFDWSxZQUFELENBQVI7O0FBRUFkLG9CQUFRZSxvQkFBUixDQUE2QlYsS0FBN0I7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRWlCYyxNLEVBQVFDLHFCLEVBQXVCQyxhLEVBQWVuQixZLEVBQWM7QUFDNUUsVUFBSW9CLHdCQUF3QixJQUE1QjtBQUFBLFVBQ0lDLDhCQUE4QixhQURsQztBQUFBLFVBRUlaLFVBQVVRLE9BQU9QLEtBQVAsQ0FBYVcsMkJBQWIsQ0FGZDs7QUFJQSxVQUFJWixZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlhLGNBQWNDLE9BQU9kLE9BQVAsQ0FBbEI7QUFBQSxZQUNJZSxVQUFVRixXQURkO0FBQUEsWUFDNEI7QUFDeEJ2QixpQkFBUyxJQUFJMEIsTUFBSixDQUFXRCxPQUFYLENBRmI7O0FBSUFKLGdDQUF3QixJQUFJdEIscUJBQUosQ0FBMEJDLE1BQTFCLEVBQWtDQyxZQUFsQyxDQUF4QjtBQUNEOztBQUVELGFBQU9vQixxQkFBUDtBQUNEOzs7Ozs7QUFHSHRCLHNCQUFzQmdCLElBQXRCLEdBQTZCLFFBQTdCLEMsQ0FBdUM7O0FBRXZDWSxPQUFPQyxPQUFQLEdBQWlCN0IscUJBQWpCOztBQUVBLFNBQVNjLEtBQVQsQ0FBZWdCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTTCxNQUFULENBQWdCSyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWdFeHAsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VUb2tlbjsgLy8vXG5cbiAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHZhciBzdHIgPSB0b2tlbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtYXRjaGVzID0gc3RyLm1hdGNoKHRoaXMucmVnRXhwKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChmaXJzdE1hdGNoID09PSBzdHIpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IFJlZ3VsYXJFeHByZXNzaW9uUGFydC50eXBlLFxuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0ciwgdHlwZSk7XG5cbiAgICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuXG4gICAgICAgICAgY29udGV4dC5hZHZhbmNlSnVzdFBhc3RUb2tlbih0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgdGVybWluYWxUeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG51bGwsXG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydFJlZ0V4cCA9IC9cXC8oW14vXSspXFwvLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBwYXR0ZXJuID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ0V4cCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG59XG5cblJlZ3VsYXJFeHByZXNzaW9uUGFydC50eXBlID0gJ3JlZ2V4cCc7IC8vL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uUGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=