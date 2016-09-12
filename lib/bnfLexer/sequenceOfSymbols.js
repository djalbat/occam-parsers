'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequenceOfSymbols = function () {
  function SequenceOfSymbols(symbols) {
    _classCallCheck(this, SequenceOfSymbols);

    this.symbols = symbols;
  }

  _createClass(SequenceOfSymbols, [{
    key: 'mapSymbols',
    value: function mapSymbols(cb) {
      return this.symbols.map(cb);
    }
  }], [{
    key: 'fromChoice',
    value: function fromChoice(choice, specialSymbols) {
      var symbols = choice.split(/\s+/),
          expression = new SequenceOfSymbols(symbols);

      return expression;
    }
  }]);

  return SequenceOfSymbols;
}();

module.exports = SequenceOfSymbols;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9zZXF1ZW5jZU9mU3ltYm9scy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mU3ltYm9scyIsInN5bWJvbHMiLCJjYiIsIm1hcCIsImNob2ljZSIsInNwZWNpYWxTeW1ib2xzIiwic3BsaXQiLCJleHByZXNzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxpQjtBQUNKLDZCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OytCQUVVQyxFLEVBQUk7QUFDYixhQUFPLEtBQUtELE9BQUwsQ0FBYUUsR0FBYixDQUFpQkQsRUFBakIsQ0FBUDtBQUNEOzs7K0JBRWlCRSxNLEVBQVFDLGMsRUFBZ0I7QUFDeEMsVUFBSUosVUFBVUcsT0FBT0UsS0FBUCxDQUFhLEtBQWIsQ0FBZDtBQUFBLFVBQ0lDLGFBQWEsSUFBSVAsaUJBQUosQ0FBc0JDLE9BQXRCLENBRGpCOztBQUdBLGFBQU9NLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJULGlCQUFqQiIsImZpbGUiOiJzZXF1ZW5jZU9mU3ltYm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2VxdWVuY2VPZlN5bWJvbHMge1xuICBjb25zdHJ1Y3RvcihzeW1ib2xzKSB7XG4gICAgdGhpcy5zeW1ib2xzID0gc3ltYm9scztcbiAgfVxuXG4gIG1hcFN5bWJvbHMoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLm1hcChjYik7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ2hvaWNlKGNob2ljZSwgc3BlY2lhbFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGNob2ljZS5zcGxpdCgvXFxzKy8pLFxuICAgICAgICBleHByZXNzaW9uID0gbmV3IFNlcXVlbmNlT2ZTeW1ib2xzKHN5bWJvbHMpO1xuICAgIFxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2VPZlN5bWJvbHM7XG4iXX0=