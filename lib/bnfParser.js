'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Production = require('./production');

var BNFParser = function () {
  function BNFParser() {
    _classCallCheck(this, BNFParser);
  }

  _createClass(BNFParser, null, [{
    key: 'parse',
    value: function parse(lines, terminalSymbolsRegExpPattern, terminalTypes, mappings) {
      var productions;

      try {
        var terminalSymbolsRegExp = new RegExp('^(?:' + terminalSymbolsRegExpPattern + ')$');

        productions = lines.map(function (line) {
          var production = Production.fromLine(line, terminalSymbolsRegExp, terminalTypes, mappings);

          return production;
        });
      } catch (exception) {
        productions = [];
      }

      return productions;
    }
  }]);

  return BNFParser;
}();

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZQYXJzZXIuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJsaW5lcyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJ0ZXJtaW5hbFR5cGVzIiwibWFwcGluZ3MiLCJwcm9kdWN0aW9ucyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsIm1hcCIsImxpbmUiLCJwcm9kdWN0aW9uIiwiZnJvbUxpbmUiLCJleGNlcHRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSxjQUFSLENBQWpCOztJQUVNQyxTOzs7Ozs7OzBCQUNTQyxLLEVBQU9DLDRCLEVBQThCQyxhLEVBQWVDLFEsRUFBVTtBQUN6RSxVQUFJQyxXQUFKOztBQUVBLFVBQUk7QUFDRixZQUFJQyx3QkFBd0IsSUFBSUMsTUFBSixVQUFrQkwsNEJBQWxCLFFBQTVCOztBQUVBRyxzQkFBY0osTUFBTU8sR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUNyQyxjQUFJQyxhQUFhWixXQUFXYSxRQUFYLENBQW9CRixJQUFwQixFQUEwQkgscUJBQTFCLEVBQWlESCxhQUFqRCxFQUFnRUMsUUFBaEUsQ0FBakI7O0FBRUEsaUJBQU9NLFVBQVA7QUFDRCxTQUphLENBQWQ7QUFLRCxPQVJELENBUUUsT0FBTUUsU0FBTixFQUFpQjtBQUNqQlAsc0JBQWMsRUFBZDtBQUNEOztBQUVELGFBQU9BLFdBQVA7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJkLFNBQWpCIiwiZmlsZSI6ImJuZlBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgQk5GUGFyc2VyIHtcbiAgc3RhdGljIHBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCB0ZXJtaW5hbFR5cGVzLCBtYXBwaW5ncykge1xuICAgIHZhciBwcm9kdWN0aW9ucztcblxuICAgIHRyeSB7XG4gICAgICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cChgXig/OiR7dGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybn0pJGApO1xuXG4gICAgICBwcm9kdWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIHZhciBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbi5mcm9tTGluZShsaW5lLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIG1hcHBpbmdzKTtcblxuICAgICAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2goZXhjZXB0aW9uKSB7XG4gICAgICBwcm9kdWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcblxuIl19