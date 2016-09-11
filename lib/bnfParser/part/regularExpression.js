'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegularExpressionPart = function () {
  function RegularExpressionPart(pattern) {
    _classCallCheck(this, RegularExpressionPart);

    this.pattern = pattern;
  }

  _createClass(RegularExpressionPart, null, [{
    key: 'fromSymbols',
    value: function fromSymbols(symbols, Parts) {
      var terminalPart = null,
          firstSymbol = first(symbols),
          symbol = firstSymbol,
          ///
      terminalRegExp = /(\/[^']+\/)/,
          matches = symbol.match(terminalRegExp);

      if (matches !== null) {
        var pattern = matches[1],
            regExp = new RegExp(pattern);

        symbols.shift();

        terminalPart = new RegularExpressionPart(pattern);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJwYXR0ZXJuIiwic3ltYm9scyIsIlBhcnRzIiwidGVybWluYWxQYXJ0IiwiZmlyc3RTeW1ib2wiLCJmaXJzdCIsInN5bWJvbCIsInRlcm1pbmFsUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwicmVnRXhwIiwiUmVnRXhwIiwic2hpZnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEscUI7QUFDSixpQ0FBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OztnQ0FFa0JDLE8sRUFBU0MsSyxFQUFPO0FBQ2pDLFVBQUlDLGVBQWUsSUFBbkI7QUFBQSxVQUNJQyxjQUFjQyxNQUFNSixPQUFOLENBRGxCO0FBQUEsVUFFSUssU0FBU0YsV0FGYjtBQUFBLFVBRTBCO0FBQ3RCRyx1QkFBaUIsYUFIckI7QUFBQSxVQUlJQyxVQUFVRixPQUFPRyxLQUFQLENBQWFGLGNBQWIsQ0FKZDs7QUFNQSxVQUFJQyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlSLFVBQVVRLFFBQVEsQ0FBUixDQUFkO0FBQUEsWUFDSUUsU0FBUyxJQUFJQyxNQUFKLENBQVdYLE9BQVgsQ0FEYjs7QUFHQUMsZ0JBQVFXLEtBQVI7O0FBRUFULHVCQUFlLElBQUlKLHFCQUFKLENBQTBCQyxPQUExQixDQUFmO0FBQ0Q7O0FBRUQsYUFBT0csWUFBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQmYscUJBQWpCOztBQUVBLFNBQVNNLEtBQVQsQ0FBZVUsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9scyhzeW1ib2xzLCBQYXJ0cykge1xuICAgIHZhciB0ZXJtaW5hbFBhcnQgPSBudWxsLFxuICAgICAgICBmaXJzdFN5bWJvbCA9IGZpcnN0KHN5bWJvbHMpLFxuICAgICAgICBzeW1ib2wgPSBmaXJzdFN5bWJvbCwgLy8vXG4gICAgICAgIHRlcm1pbmFsUmVnRXhwID0gLyhcXC9bXiddK1xcLykvLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHRlcm1pbmFsUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgcGF0dGVybiA9IG1hdGNoZXNbMV0sXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcblxuICAgICAgc3ltYm9scy5zaGlmdCgpO1xuXG4gICAgICB0ZXJtaW5hbFBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHBhdHRlcm4pO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19