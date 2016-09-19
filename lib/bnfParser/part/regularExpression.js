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
    value: function fromSymbol(symbol, terminalSymbolsRegExp) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiaW5wdXRMZW5ndGgiLCJsZW5ndGgiLCJpbnB1dFN1YnN0cmluZyIsInN1YnN0ciIsIm1hdGNoZXMiLCJleGVjIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiZmlyc3RNYXRjaExlbmd0aCIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsUGFydCIsInRlcm1pbmFsUmVnRXhwIiwibWF0Y2giLCJwYXR0ZXJuIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLHFCO0FBQ0osaUNBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsU0FBUyxLQUFiO0FBQUEsVUFDSUMsUUFBUUgsUUFBUUcsS0FEcEI7QUFBQSxVQUVJQyxjQUFjTCxNQUFNTSxNQUZ4Qjs7QUFJQSxVQUFJRixRQUFRQyxXQUFaLEVBQXlCO0FBQ3ZCLFlBQUlFLGlCQUFpQlAsTUFBTVEsTUFBTixDQUFhSixLQUFiLENBQXJCO0FBQUEsWUFDSUssVUFBVSxLQUFLVixNQUFMLENBQVlXLElBQVosQ0FBaUJILGNBQWpCLENBRGQ7O0FBR0EsWUFBSUUsV0FBV0EsUUFBUUwsS0FBUixLQUFrQixDQUFqQyxFQUFvQztBQUNsQyxjQUFJTyxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsY0FDSUksbUJBQW1CRixXQUFXTCxNQURsQzs7QUFHQUwsa0JBQVFHLEtBQVIsSUFBaUJTLGdCQUFqQjs7QUFFQVYsbUJBQVMsSUFBVDtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0EsTUFBUDtBQUNEOzs7K0JBRWlCVyxNLEVBQVFDLHFCLEVBQXVCO0FBQy9DLFVBQUlDLGVBQWUsSUFBbkI7QUFBQSxVQUNJQyxpQkFBaUIsYUFEckI7QUFBQSxVQUVJUixVQUFVSyxPQUFPSSxLQUFQLENBQWFELGNBQWIsQ0FGZDs7QUFJQSxVQUFJUixZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlVLFVBQVVWLFFBQVEsQ0FBUixDQUFkO0FBQUEsWUFDSVYsU0FBUyxJQUFJcUIsTUFBSixDQUFXRCxPQUFYLENBRGI7O0FBR0FILHVCQUFlLElBQUlsQixxQkFBSixDQUEwQkMsTUFBMUIsQ0FBZjtBQUNEOztBQUVELGFBQU9pQixZQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCeEIscUJBQWpCOztBQUVBLFNBQVNjLEtBQVQsQ0FBZVcsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWdFeHApIHtcbiAgICB0aGlzLnJlZ0V4cCA9IHJlZ0V4cDtcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgaW5kZXggPSBjb250ZXh0LmluZGV4LFxuICAgICAgICBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA8IGlucHV0TGVuZ3RoKSB7XG4gICAgICB2YXIgaW5wdXRTdWJzdHJpbmcgPSBpbnB1dC5zdWJzdHIoaW5kZXgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLnJlZ0V4cC5leGVjKGlucHV0U3Vic3RyaW5nKTtcblxuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5pbmRleCA9PT0gMCkge1xuICAgICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgZmlyc3RNYXRjaExlbmd0aCA9IGZpcnN0TWF0Y2gubGVuZ3RoO1xuXG4gICAgICAgIGNvbnRleHQuaW5kZXggKz0gZmlyc3RNYXRjaExlbmd0aDtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCkge1xuICAgIHZhciB0ZXJtaW5hbFBhcnQgPSBudWxsLFxuICAgICAgICB0ZXJtaW5hbFJlZ0V4cCA9IC9cXC8oW14vXSspXFwvLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh0ZXJtaW5hbFJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHBhdHRlcm4gPSBtYXRjaGVzWzFdLFxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG5cbiAgICAgIHRlcm1pbmFsUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVnRXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25QYXJ0O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==