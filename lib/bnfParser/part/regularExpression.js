'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegularExpressionPart = function () {
  function RegularExpressionPart(regExp) {
    _classCallCheck(this, RegularExpressionPart);

    this.regExp = regExp;
  }

  _createClass(RegularExpressionPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = false,
          index = context.index,
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubstring = input.substr(index),
            matches = this.regExp.exec(inputSubstring);

        if (matches && matches.index === 0) {
          var firstMatch = first(matches),
              firstMatchLength = firstMatch.length;

          context.index += firstMatchLength;

          parsed = true;
        }
      }

      return parsed;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, Parts) {
      var terminalPart = null,
          terminalRegExp = /\/([^/]+)\//,
          matches = symbol.match(terminalRegExp);

      if (matches !== null) {
        var pattern = matches[1],
            regExp = new RegExp(pattern);

        terminalPart = new RegularExpressionPart(regExp);
      }

      return terminalPart;
    }
  }]);

  return RegularExpressionPart;
}();

module.exports = RegularExpressionPart;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiaW5wdXRMZW5ndGgiLCJsZW5ndGgiLCJpbnB1dFN1YnN0cmluZyIsInN1YnN0ciIsIm1hdGNoZXMiLCJleGVjIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiZmlyc3RNYXRjaExlbmd0aCIsInN5bWJvbCIsIlBhcnRzIiwidGVybWluYWxQYXJ0IiwidGVybWluYWxSZWdFeHAiLCJtYXRjaCIsInBhdHRlcm4iLCJSZWdFeHAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEscUI7QUFDSixpQ0FBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQWI7QUFBQSxVQUNJQyxRQUFRSCxRQUFRRyxLQURwQjtBQUFBLFVBRUlDLGNBQWNMLE1BQU1NLE1BRnhCOztBQUlBLFVBQUlGLFFBQVFDLFdBQVosRUFBeUI7QUFDdkIsWUFBSUUsaUJBQWlCUCxNQUFNUSxNQUFOLENBQWFKLEtBQWIsQ0FBckI7QUFBQSxZQUNJSyxVQUFVLEtBQUtWLE1BQUwsQ0FBWVcsSUFBWixDQUFpQkgsY0FBakIsQ0FEZDs7QUFHQSxZQUFJRSxXQUFXQSxRQUFRTCxLQUFSLEtBQWtCLENBQWpDLEVBQW9DO0FBQ2xDLGNBQUlPLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxjQUNJSSxtQkFBbUJGLFdBQVdMLE1BRGxDOztBQUdBTCxrQkFBUUcsS0FBUixJQUFpQlMsZ0JBQWpCOztBQUVBVixtQkFBUyxJQUFUO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxNQUFQO0FBQ0Q7OzsrQkFFaUJXLE0sRUFBUUMsSyxFQUFPO0FBQy9CLFVBQUlDLGVBQWUsSUFBbkI7QUFBQSxVQUNJQyxpQkFBaUIsYUFEckI7QUFBQSxVQUVJUixVQUFVSyxPQUFPSSxLQUFQLENBQWFELGNBQWIsQ0FGZDs7QUFJQSxVQUFJUixZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlVLFVBQVVWLFFBQVEsQ0FBUixDQUFkO0FBQUEsWUFDSVYsU0FBUyxJQUFJcUIsTUFBSixDQUFXRCxPQUFYLENBRGI7O0FBR0FILHVCQUFlLElBQUlsQixxQkFBSixDQUEwQkMsTUFBMUIsQ0FBZjtBQUNEOztBQUVELGFBQU9pQixZQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCeEIscUJBQWpCOztBQUVBLFNBQVNjLEtBQVQsQ0FBZVcsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWdFeHApIHtcbiAgICB0aGlzLnJlZ0V4cCA9IHJlZ0V4cDtcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgaW5kZXggPSBjb250ZXh0LmluZGV4LFxuICAgICAgICBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA8IGlucHV0TGVuZ3RoKSB7XG4gICAgICB2YXIgaW5wdXRTdWJzdHJpbmcgPSBpbnB1dC5zdWJzdHIoaW5kZXgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLnJlZ0V4cC5leGVjKGlucHV0U3Vic3RyaW5nKTtcblxuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5pbmRleCA9PT0gMCkge1xuICAgICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgZmlyc3RNYXRjaExlbmd0aCA9IGZpcnN0TWF0Y2gubGVuZ3RoO1xuXG4gICAgICAgIGNvbnRleHQuaW5kZXggKz0gZmlyc3RNYXRjaExlbmd0aDtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIFBhcnRzKSB7XG4gICAgdmFyIHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgIHRlcm1pbmFsUmVnRXhwID0gL1xcLyhbXi9dKylcXC8vLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHRlcm1pbmFsUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgcGF0dGVybiA9IG1hdGNoZXNbMV0sXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcblxuICAgICAgdGVybWluYWxQYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19