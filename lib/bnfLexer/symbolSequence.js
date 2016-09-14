'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SymbolSequence = function () {
  function SymbolSequence(symbols) {
    _classCallCheck(this, SymbolSequence);

    this.symbols = symbols;
  }

  _createClass(SymbolSequence, [{
    key: 'mapSymbols',
    value: function mapSymbols(cb) {
      return this.symbols.map(cb);
    }
  }], [{
    key: 'fromChoice',
    value: function fromChoice(choice, specialSymbols) {
      var symbols = choice.split(/\s+/),
          expression = new SymbolSequence(symbols);

      return expression;
    }
  }]);

  return SymbolSequence;
}();

module.exports = SymbolSequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9zeW1ib2xTZXF1ZW5jZS5qcyJdLCJuYW1lcyI6WyJTeW1ib2xTZXF1ZW5jZSIsInN5bWJvbHMiLCJjYiIsIm1hcCIsImNob2ljZSIsInNwZWNpYWxTeW1ib2xzIiwic3BsaXQiLCJleHByZXNzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxjO0FBQ0osMEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7K0JBRVVDLEUsRUFBSTtBQUNiLGFBQU8sS0FBS0QsT0FBTCxDQUFhRSxHQUFiLENBQWlCRCxFQUFqQixDQUFQO0FBQ0Q7OzsrQkFFaUJFLE0sRUFBUUMsYyxFQUFnQjtBQUN4QyxVQUFJSixVQUFVRyxPQUFPRSxLQUFQLENBQWEsS0FBYixDQUFkO0FBQUEsVUFDSUMsYUFBYSxJQUFJUCxjQUFKLENBQW1CQyxPQUFuQixDQURqQjs7QUFHQSxhQUFPTSxVQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCVCxjQUFqQiIsImZpbGUiOiJzeW1ib2xTZXF1ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU3ltYm9sU2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcihzeW1ib2xzKSB7XG4gICAgdGhpcy5zeW1ib2xzID0gc3ltYm9scztcbiAgfVxuXG4gIG1hcFN5bWJvbHMoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLm1hcChjYik7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ2hvaWNlKGNob2ljZSwgc3BlY2lhbFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGNob2ljZS5zcGxpdCgvXFxzKy8pLFxuICAgICAgICBleHByZXNzaW9uID0gbmV3IFN5bWJvbFNlcXVlbmNlKHN5bWJvbHMpO1xuICAgIFxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sU2VxdWVuY2U7XG4iXX0=