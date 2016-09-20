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
          index = context.getIndex(),
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubstring = input.substr(index),
            matches = this.regExp.exec(inputSubstring);

        if (matches && matches.index === 0) {
          var firstMatch = first(matches),
              amount = firstMatch.length; ///

          context.advance(amount);

          parsed = true;
        }
      }

      return parsed;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, specialSymbolsRegExp) {
      var regularExpressionPart = null,
          regularExpressionRegExp = /\/([^/]+)\//,
          matches = symbol.match(regularExpressionRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            pattern = secondMatch,
            ///
        regExp = new RegExp(pattern);

        regularExpressionPart = new RegularExpressionPart(regExp);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiZ2V0SW5kZXgiLCJpbnB1dExlbmd0aCIsImxlbmd0aCIsImlucHV0U3Vic3RyaW5nIiwic3Vic3RyIiwibWF0Y2hlcyIsImV4ZWMiLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJhbW91bnQiLCJhZHZhbmNlIiwic3ltYm9sIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWd1bGFyRXhwcmVzc2lvblJlZ0V4cCIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJwYXR0ZXJuIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLHFCO0FBQ0osaUNBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsU0FBUyxLQUFiO0FBQUEsVUFDSUMsUUFBUUgsUUFBUUksUUFBUixFQURaO0FBQUEsVUFFSUMsY0FBY04sTUFBTU8sTUFGeEI7O0FBSUEsVUFBSUgsUUFBUUUsV0FBWixFQUF5QjtBQUN2QixZQUFJRSxpQkFBaUJSLE1BQU1TLE1BQU4sQ0FBYUwsS0FBYixDQUFyQjtBQUFBLFlBQ0lNLFVBQVUsS0FBS1gsTUFBTCxDQUFZWSxJQUFaLENBQWlCSCxjQUFqQixDQURkOztBQUdBLFlBQUlFLFdBQVdBLFFBQVFOLEtBQVIsS0FBa0IsQ0FBakMsRUFBb0M7QUFDbEMsY0FBSVEsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLGNBQ0lJLFNBQVNGLFdBQVdMLE1BRHhCLENBRGtDLENBRUQ7O0FBRWpDTixrQkFBUWMsT0FBUixDQUFnQkQsTUFBaEI7O0FBRUFYLG1CQUFTLElBQVQ7QUFDRDtBQUNGOztBQUVELGFBQU9BLE1BQVA7QUFDRDs7OytCQUVpQmEsTSxFQUFRQyxvQixFQUFzQjtBQUM5QyxVQUFJQyx3QkFBd0IsSUFBNUI7QUFBQSxVQUNJQywwQkFBMEIsYUFEOUI7QUFBQSxVQUVJVCxVQUFVTSxPQUFPSSxLQUFQLENBQWFELHVCQUFiLENBRmQ7O0FBSUEsVUFBSVQsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJVyxjQUFjQyxPQUFPWixPQUFQLENBQWxCO0FBQUEsWUFDSWEsVUFBVUYsV0FEZDtBQUFBLFlBQzRCO0FBQ3hCdEIsaUJBQVMsSUFBSXlCLE1BQUosQ0FBV0QsT0FBWCxDQUZiOztBQUlBTCxnQ0FBd0IsSUFBSXBCLHFCQUFKLENBQTBCQyxNQUExQixDQUF4QjtBQUNEOztBQUVELGFBQU9tQixxQkFBUDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQjVCLHFCQUFqQjs7QUFFQSxTQUFTZSxLQUFULENBQWVjLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTTCxNQUFULENBQWdCSyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWdFeHApIHtcbiAgICB0aGlzLnJlZ0V4cCA9IHJlZ0V4cDtcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgaW5kZXggPSBjb250ZXh0LmdldEluZGV4KCksXG4gICAgICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4IDwgaW5wdXRMZW5ndGgpIHtcbiAgICAgIHZhciBpbnB1dFN1YnN0cmluZyA9IGlucHV0LnN1YnN0cihpbmRleCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMucmVnRXhwLmV4ZWMoaW5wdXRTdWJzdHJpbmcpO1xuXG4gICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmluZGV4ID09PSAwKSB7XG4gICAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICBhbW91bnQgPSBmaXJzdE1hdGNoLmxlbmd0aDsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWR2YW5jZShhbW91bnQpO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc3BlY2lhbFN5bWJvbHNSZWdFeHApIHtcbiAgICB2YXIgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbnVsbCxcbiAgICAgICAgcmVndWxhckV4cHJlc3Npb25SZWdFeHAgPSAvXFwvKFteL10rKVxcLy8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2gocmVndWxhckV4cHJlc3Npb25SZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBwYXR0ZXJuID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uUGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=