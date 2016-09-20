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
    value: function parse(lines, specialSymbolsRegExpPattern, mappings) {
      var productions;

      try {
        var specialSymbolsRegExp = new RegExp('^(?:' + specialSymbolsRegExpPattern + ')$');

        productions = lines.map(function (line) {
          var production = Production.fromLine(line, specialSymbolsRegExp, mappings);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZQYXJzZXIuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJsaW5lcyIsInNwZWNpYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsIm1hcCIsImxpbmUiLCJwcm9kdWN0aW9uIiwiZnJvbUxpbmUiLCJleGNlcHRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSxjQUFSLENBQWpCOztJQUVNQyxTOzs7Ozs7OzBCQUNTQyxLLEVBQU9DLDJCLEVBQTZCQyxRLEVBQVU7QUFDekQsVUFBSUMsV0FBSjs7QUFFQSxVQUFJO0FBQ0YsWUFBSUMsdUJBQXVCLElBQUlDLE1BQUosQ0FBVyxTQUFTSiwyQkFBVCxHQUF1QyxJQUFsRCxDQUEzQjs7QUFFQUUsc0JBQWNILE1BQU1NLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDckMsY0FBSUMsYUFBYVgsV0FBV1ksUUFBWCxDQUFvQkYsSUFBcEIsRUFBMEJILG9CQUExQixFQUFnREYsUUFBaEQsQ0FBakI7O0FBRUEsaUJBQU9NLFVBQVA7QUFDRCxTQUphLENBQWQ7QUFLRCxPQVJELENBUUUsT0FBTUUsU0FBTixFQUFpQjtBQUNqQlAsc0JBQWMsRUFBZDtBQUNEOztBQUVELGFBQU9BLFdBQVA7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJiLFNBQWpCIiwiZmlsZSI6ImJuZlBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgQk5GUGFyc2VyIHtcbiAgc3RhdGljIHBhcnNlKGxpbmVzLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIG1hcHBpbmdzKSB7XG4gICAgdmFyIHByb2R1Y3Rpb25zO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBzcGVjaWFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAoJ14oPzonICsgc3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuICsgJykkJyk7XG5cbiAgICAgIHByb2R1Y3Rpb25zID0gbGluZXMubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgdmFyIHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uLmZyb21MaW5lKGxpbmUsIHNwZWNpYWxTeW1ib2xzUmVnRXhwLCBtYXBwaW5ncyk7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGV4Y2VwdGlvbikge1xuICAgICAgcHJvZHVjdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG5cbiJdfQ==