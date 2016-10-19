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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJub1doaXRlc3BhY2UiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJuZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VUb2tlbiIsInRva2VuIiwic3RyIiwiZ2V0U3RyaW5nIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwicGFyc2VkIiwidHlwZSIsInRlcm1pbmFsTm9kZSIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsVHlwZXMiLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHAiLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInBhdHRlcm4iLCJSZWdFeHAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGtCQUFSLENBQW5COztJQUVNQyxxQjtBQUNKLGlDQUFZQyxNQUFaLEVBQW9CQyxZQUFwQixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUYsWSxFQUFjO0FBQ3hDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRHdDLENBQ1U7O0FBRWxELFVBQUlHLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLGFBQWFILFFBQVFHLFVBQVIsRUFEakI7QUFBQSxVQUVJQyx5QkFBeUJKLFFBQVFLLHlCQUFSLENBQWtDTixZQUFsQyxDQUY3QjtBQUFBLFVBR0lPLFFBQVFGLHNCQUhaLENBSHdDLENBTUo7O0FBRXBDLFVBQUlFLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixZQUFJQyxNQUFNRCxNQUFNRSxTQUFOLEVBQVY7QUFBQSxZQUNJQyxVQUFVRixJQUFJRyxLQUFKLENBQVUsS0FBS1osTUFBZixDQURkOztBQUdBLFlBQUlXLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsY0FBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLGNBQ0lJLFNBQVVGLGVBQWVKLEdBRDdCOztBQUdBLGNBQUlNLE1BQUosRUFBWTtBQUNWLGdCQUFJQyxPQUFPakIsc0JBQXNCaUIsSUFBakM7QUFBQSxnQkFDSUMsZUFBZSxJQUFJcEIsWUFBSixDQUFpQlksR0FBakIsRUFBc0JPLElBQXRCLENBRG5COztBQUdBWixvQkFBUSxDQUFDYSxZQUFELENBQVI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBSWIsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCRixnQkFBUWdCLFNBQVIsQ0FBa0JiLFVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7K0JBRWlCZSxNLEVBQVFDLHFCLEVBQXVCQyxhLEVBQWVwQixZLEVBQWM7QUFDNUUsVUFBSXFCLHdCQUF3QixJQUE1QjtBQUFBLFVBQ0lDLDhCQUE4QixhQURsQztBQUFBLFVBRUlaLFVBQVVRLE9BQU9QLEtBQVAsQ0FBYVcsMkJBQWIsQ0FGZDs7QUFJQSxVQUFJWixZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlhLGNBQWNDLE9BQU9kLE9BQVAsQ0FBbEI7QUFBQSxZQUNJZSxVQUFVRixXQURkO0FBQUEsWUFDNEI7QUFDeEJ4QixpQkFBUyxJQUFJMkIsTUFBSixDQUFXRCxPQUFYLENBRmI7O0FBSUFKLGdDQUF3QixJQUFJdkIscUJBQUosQ0FBMEJDLE1BQTFCLEVBQWtDQyxZQUFsQyxDQUF4QjtBQUNEOztBQUVELGFBQU9xQixxQkFBUDtBQUNEOzs7Ozs7QUFHSHZCLHNCQUFzQmlCLElBQXRCLEdBQTZCLFFBQTdCLEMsQ0FBdUM7O0FBRXZDWSxPQUFPQyxPQUFQLEdBQWlCOUIscUJBQWpCOztBQUVBLFNBQVNlLEtBQVQsQ0FBZWdCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTTCxNQUFULENBQWdCSyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWdFeHAsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgdG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHN0ciA9IHRva2VuLmdldFN0cmluZygpLFxuICAgICAgICAgIG1hdGNoZXMgPSBzdHIubWF0Y2godGhpcy5yZWdFeHApO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgcGFyc2VkID0gKGZpcnN0TWF0Y2ggPT09IHN0cik7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHZhciB0eXBlID0gUmVndWxhckV4cHJlc3Npb25QYXJ0LnR5cGUsXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyLCB0eXBlKTtcblxuICAgICAgICAgIG5vZGVzID0gW3Rlcm1pbmFsTm9kZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgdGVybWluYWxUeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG51bGwsXG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydFJlZ0V4cCA9IC9cXC8oW14vXSspXFwvLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBwYXR0ZXJuID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ0V4cCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG59XG5cblJlZ3VsYXJFeHByZXNzaW9uUGFydC50eXBlID0gJ3JlZ2V4cCc7IC8vL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uUGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=