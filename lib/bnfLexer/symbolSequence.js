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
    value: function fromChoice(choice) {
      var symbols = choice.split(/\s+/),
          expression = new SymbolSequence(symbols);

      return expression;
    }
  }]);

  return SymbolSequence;
}();

module.exports = SymbolSequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9zeW1ib2xTZXF1ZW5jZS5qcyJdLCJuYW1lcyI6WyJTeW1ib2xTZXF1ZW5jZSIsInN5bWJvbHMiLCJjYiIsIm1hcCIsImNob2ljZSIsInNwbGl0IiwiZXhwcmVzc2lvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsYztBQUNKLDBCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OytCQUVVQyxFLEVBQUk7QUFDYixhQUFPLEtBQUtELE9BQUwsQ0FBYUUsR0FBYixDQUFpQkQsRUFBakIsQ0FBUDtBQUNEOzs7K0JBRWlCRSxNLEVBQVE7QUFDeEIsVUFBSUgsVUFBVUcsT0FBT0MsS0FBUCxDQUFhLEtBQWIsQ0FBZDtBQUFBLFVBQ0lDLGFBQWEsSUFBSU4sY0FBSixDQUFtQkMsT0FBbkIsQ0FEakI7O0FBR0EsYUFBT0ssVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlIsY0FBakIiLCJmaWxlIjoic3ltYm9sU2VxdWVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFN5bWJvbFNlcXVlbmNlIHtcbiAgY29uc3RydWN0b3Ioc3ltYm9scykge1xuICAgIHRoaXMuc3ltYm9scyA9IHN5bWJvbHM7XG4gIH1cblxuICBtYXBTeW1ib2xzKGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9scy5tYXAoY2IpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNob2ljZShjaG9pY2UpIHtcbiAgICB2YXIgc3ltYm9scyA9IGNob2ljZS5zcGxpdCgvXFxzKy8pLFxuICAgICAgICBleHByZXNzaW9uID0gbmV3IFN5bWJvbFNlcXVlbmNlKHN5bWJvbHMpO1xuICAgIFxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sU2VxdWVuY2U7XG4iXX0=