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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiZ2V0SW5kZXgiLCJpbnB1dExlbmd0aCIsImxlbmd0aCIsImlucHV0U3Vic3RyaW5nIiwic3Vic3RyIiwibWF0Y2hlcyIsImV4ZWMiLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJhbW91bnQiLCJhZHZhbmNlIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwidGVybWluYWxQYXJ0IiwidGVybWluYWxSZWdFeHAiLCJtYXRjaCIsInBhdHRlcm4iLCJSZWdFeHAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEscUI7QUFDSixpQ0FBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQWI7QUFBQSxVQUNJQyxRQUFRSCxRQUFRSSxRQUFSLEVBRFo7QUFBQSxVQUVJQyxjQUFjTixNQUFNTyxNQUZ4Qjs7QUFJQSxVQUFJSCxRQUFRRSxXQUFaLEVBQXlCO0FBQ3ZCLFlBQUlFLGlCQUFpQlIsTUFBTVMsTUFBTixDQUFhTCxLQUFiLENBQXJCO0FBQUEsWUFDSU0sVUFBVSxLQUFLWCxNQUFMLENBQVlZLElBQVosQ0FBaUJILGNBQWpCLENBRGQ7O0FBR0EsWUFBSUUsV0FBV0EsUUFBUU4sS0FBUixLQUFrQixDQUFqQyxFQUFvQztBQUNsQyxjQUFJUSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsY0FDSUksU0FBU0YsV0FBV0wsTUFEeEIsQ0FEa0MsQ0FFRDs7QUFFakNOLGtCQUFRYyxPQUFSLENBQWdCRCxNQUFoQjs7QUFFQVgsbUJBQVMsSUFBVDtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0EsTUFBUDtBQUNEOzs7K0JBRWlCYSxNLEVBQVFDLHFCLEVBQXVCO0FBQy9DLFVBQUlDLGVBQWUsSUFBbkI7QUFBQSxVQUNJQyxpQkFBaUIsYUFEckI7QUFBQSxVQUVJVCxVQUFVTSxPQUFPSSxLQUFQLENBQWFELGNBQWIsQ0FGZDs7QUFJQSxVQUFJVCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlXLFVBQVVYLFFBQVEsQ0FBUixDQUFkO0FBQUEsWUFDSVgsU0FBUyxJQUFJdUIsTUFBSixDQUFXRCxPQUFYLENBRGI7O0FBR0FILHVCQUFlLElBQUlwQixxQkFBSixDQUEwQkMsTUFBMUIsQ0FBZjtBQUNEOztBQUVELGFBQU9tQixZQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCMUIscUJBQWpCOztBQUVBLFNBQVNlLEtBQVQsQ0FBZVksS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWdFeHApIHtcbiAgICB0aGlzLnJlZ0V4cCA9IHJlZ0V4cDtcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgaW5kZXggPSBjb250ZXh0LmdldEluZGV4KCksXG4gICAgICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4IDwgaW5wdXRMZW5ndGgpIHtcbiAgICAgIHZhciBpbnB1dFN1YnN0cmluZyA9IGlucHV0LnN1YnN0cihpbmRleCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMucmVnRXhwLmV4ZWMoaW5wdXRTdWJzdHJpbmcpO1xuXG4gICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmluZGV4ID09PSAwKSB7XG4gICAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICBhbW91bnQgPSBmaXJzdE1hdGNoLmxlbmd0aDsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWR2YW5jZShhbW91bnQpO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgIHRlcm1pbmFsUmVnRXhwID0gL1xcLyhbXi9dKylcXC8vLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHRlcm1pbmFsUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgcGF0dGVybiA9IG1hdGNoZXNbMV0sXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcblxuICAgICAgdGVybWluYWxQYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19