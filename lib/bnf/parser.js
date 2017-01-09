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
    value: function parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings) {
      var productions;

      try {
        var terminalSymbolsRegExp = new RegExp('^(?:' + terminalSymbolsRegExpPattern + ')$');

        productions = lines.map(function (line) {
          var production = Production.fromLine(line, terminalSymbolsRegExp, significantTokenTypes, mappings);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiQk5GUGFyc2VyIiwibGluZXMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwibWFwcGluZ3MiLCJwcm9kdWN0aW9ucyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsIm1hcCIsImxpbmUiLCJwcm9kdWN0aW9uIiwiZnJvbUxpbmUiLCJleGNlcHRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSxjQUFSLENBQWpCOztJQUVNQyxTOzs7Ozs7OzBCQUNTQyxLLEVBQU9DLDRCLEVBQThCQyxxQixFQUF1QkMsUSxFQUFVO0FBQ2pGLFVBQUlDLFdBQUo7O0FBRUEsVUFBSTtBQUNGLFlBQUlDLHdCQUF3QixJQUFJQyxNQUFKLFVBQWtCTCw0QkFBbEIsUUFBNUI7O0FBRUFHLHNCQUFjSixNQUFNTyxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQ3JDLGNBQUlDLGFBQWFaLFdBQVdhLFFBQVgsQ0FBb0JGLElBQXBCLEVBQTBCSCxxQkFBMUIsRUFBaURILHFCQUFqRCxFQUF3RUMsUUFBeEUsQ0FBakI7O0FBRUEsaUJBQU9NLFVBQVA7QUFDRCxTQUphLENBQWQ7QUFLRCxPQVJELENBUUUsT0FBTUUsU0FBTixFQUFpQjtBQUNqQlAsc0JBQWMsRUFBZDtBQUNEOztBQUVELGFBQU9BLFdBQVA7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJkLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgQk5GUGFyc2VyIHtcbiAgc3RhdGljIHBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgdmFyIHByb2R1Y3Rpb25zO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgPSBuZXcgUmVnRXhwKGBeKD86JHt0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJufSkkYCk7XG5cbiAgICAgIHByb2R1Y3Rpb25zID0gbGluZXMubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgdmFyIHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uLmZyb21MaW5lKGxpbmUsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyk7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGV4Y2VwdGlvbikge1xuICAgICAgcHJvZHVjdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG5cbiJdfQ==