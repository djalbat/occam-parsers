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
    value: function parse(lines, terminalSymbolsRegExpPattern, mappings) {
      var productions;

      try {
        var terminalSymbolsRegExp = new RegExp('^(?:' + terminalSymbolsRegExpPattern + ')$');

        productions = lines.map(function (line) {
          var production = Production.fromLine(line, terminalSymbolsRegExp, mappings);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZQYXJzZXIuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJsaW5lcyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwibWFwIiwibGluZSIsInByb2R1Y3Rpb24iLCJmcm9tTGluZSIsImV4Y2VwdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLGNBQVIsQ0FBakI7O0lBRU1DLFM7Ozs7Ozs7MEJBQ1NDLEssRUFBT0MsNEIsRUFBOEJDLFEsRUFBVTtBQUMxRCxVQUFJQyxXQUFKOztBQUVBLFVBQUk7QUFDRixZQUFJQyx3QkFBd0IsSUFBSUMsTUFBSixDQUFXLFNBQVNKLDRCQUFULEdBQXdDLElBQW5ELENBQTVCOztBQUVBRSxzQkFBY0gsTUFBTU0sR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUNyQyxjQUFJQyxhQUFhWCxXQUFXWSxRQUFYLENBQW9CRixJQUFwQixFQUEwQkgscUJBQTFCLEVBQWlERixRQUFqRCxDQUFqQjs7QUFFQSxpQkFBT00sVUFBUDtBQUNELFNBSmEsQ0FBZDtBQUtELE9BUkQsQ0FRRSxPQUFNRSxTQUFOLEVBQWlCO0FBQ2pCUCxzQkFBYyxFQUFkO0FBQ0Q7O0FBRUQsYUFBT0EsV0FBUDtBQUNEOzs7Ozs7QUFHSFEsT0FBT0MsT0FBUCxHQUFpQmIsU0FBakIiLCJmaWxlIjoiYm5mUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBCTkZQYXJzZXIge1xuICBzdGF0aWMgcGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIG1hcHBpbmdzKSB7XG4gICAgdmFyIHByb2R1Y3Rpb25zO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgPSBuZXcgUmVnRXhwKCdeKD86JyArIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gKyAnKSQnKTtcblxuICAgICAgcHJvZHVjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICB2YXIgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb24uZnJvbUxpbmUobGluZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBtYXBwaW5ncyk7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGV4Y2VwdGlvbikge1xuICAgICAgcHJvZHVjdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG5cbiJdfQ==