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
    value: function fromSymbol(symbol) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiaW5wdXRMZW5ndGgiLCJsZW5ndGgiLCJpbnB1dFN1YnN0cmluZyIsInN1YnN0ciIsIm1hdGNoZXMiLCJleGVjIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiZmlyc3RNYXRjaExlbmd0aCIsInN5bWJvbCIsInRlcm1pbmFsUGFydCIsInRlcm1pbmFsUmVnRXhwIiwibWF0Y2giLCJwYXR0ZXJuIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLHFCO0FBQ0osaUNBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsU0FBUyxLQUFiO0FBQUEsVUFDSUMsUUFBUUgsUUFBUUcsS0FEcEI7QUFBQSxVQUVJQyxjQUFjTCxNQUFNTSxNQUZ4Qjs7QUFJQSxVQUFJRixRQUFRQyxXQUFaLEVBQXlCO0FBQ3ZCLFlBQUlFLGlCQUFpQlAsTUFBTVEsTUFBTixDQUFhSixLQUFiLENBQXJCO0FBQUEsWUFDSUssVUFBVSxLQUFLVixNQUFMLENBQVlXLElBQVosQ0FBaUJILGNBQWpCLENBRGQ7O0FBR0EsWUFBSUUsV0FBV0EsUUFBUUwsS0FBUixLQUFrQixDQUFqQyxFQUFvQztBQUNsQyxjQUFJTyxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsY0FDSUksbUJBQW1CRixXQUFXTCxNQURsQzs7QUFHQUwsa0JBQVFHLEtBQVIsSUFBaUJTLGdCQUFqQjs7QUFFQVYsbUJBQVMsSUFBVDtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0EsTUFBUDtBQUNEOzs7K0JBRWlCVyxNLEVBQVE7QUFDeEIsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQ0lDLGlCQUFpQixhQURyQjtBQUFBLFVBRUlQLFVBQVVLLE9BQU9HLEtBQVAsQ0FBYUQsY0FBYixDQUZkOztBQUlBLFVBQUlQLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSVMsVUFBVVQsUUFBUSxDQUFSLENBQWQ7QUFBQSxZQUNJVixTQUFTLElBQUlvQixNQUFKLENBQVdELE9BQVgsQ0FEYjs7QUFHQUgsdUJBQWUsSUFBSWpCLHFCQUFKLENBQTBCQyxNQUExQixDQUFmO0FBQ0Q7O0FBRUQsYUFBT2dCLFlBQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJ2QixxQkFBakI7O0FBRUEsU0FBU2MsS0FBVCxDQUFlVSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicmVndWxhckV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJlZ0V4cCkge1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICB9XG5cbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHBhcnNlZCA9IGZhbHNlLFxuICAgICAgICBpbmRleCA9IGNvbnRleHQuaW5kZXgsXG4gICAgICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4IDwgaW5wdXRMZW5ndGgpIHtcbiAgICAgIHZhciBpbnB1dFN1YnN0cmluZyA9IGlucHV0LnN1YnN0cihpbmRleCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMucmVnRXhwLmV4ZWMoaW5wdXRTdWJzdHJpbmcpO1xuXG4gICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmluZGV4ID09PSAwKSB7XG4gICAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICBmaXJzdE1hdGNoTGVuZ3RoID0gZmlyc3RNYXRjaC5sZW5ndGg7XG5cbiAgICAgICAgY29udGV4dC5pbmRleCArPSBmaXJzdE1hdGNoTGVuZ3RoO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCkge1xuICAgIHZhciB0ZXJtaW5hbFBhcnQgPSBudWxsLFxuICAgICAgICB0ZXJtaW5hbFJlZ0V4cCA9IC9cXC8oW14vXSspXFwvLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh0ZXJtaW5hbFJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHBhdHRlcm4gPSBtYXRjaGVzWzFdLFxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG5cbiAgICAgIHRlcm1pbmFsUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVnRXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25QYXJ0O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==