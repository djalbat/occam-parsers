'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Production = require('./bnfParser/production');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZQYXJzZXIuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJsaW5lcyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwibWFwIiwibGluZSIsInByb2R1Y3Rpb24iLCJmcm9tTGluZSIsImV4Y2VwdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLHdCQUFSLENBQWpCOztJQUVNQyxTOzs7Ozs7OzBCQUNTQyxLLEVBQU9DLDRCLEVBQThCQyxRLEVBQVU7QUFDMUQsVUFBSUMsV0FBSjs7QUFFQSxVQUFJO0FBQ0YsWUFBSUMsd0JBQXdCLElBQUlDLE1BQUosQ0FBVyxTQUFTSiw0QkFBVCxHQUF3QyxJQUFuRCxDQUE1Qjs7QUFFQUUsc0JBQWNILE1BQU1NLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDckMsY0FBSUMsYUFBYVgsV0FBV1ksUUFBWCxDQUFvQkYsSUFBcEIsRUFBMEJILHFCQUExQixFQUFpREYsUUFBakQsQ0FBakI7O0FBRUEsaUJBQU9NLFVBQVA7QUFDRCxTQUphLENBQWQ7QUFLRCxPQVJELENBUUUsT0FBTUUsU0FBTixFQUFpQjtBQUNqQlAsc0JBQWMsRUFBZDtBQUNEOztBQUVELGFBQU9BLFdBQVA7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJiLFNBQWpCIiwiZmlsZSI6ImJuZlBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL2JuZlBhcnNlci9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIEJORlBhcnNlciB7XG4gIHN0YXRpYyBwYXJzZShsaW5lcywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgbWFwcGluZ3MpIHtcbiAgICB2YXIgcHJvZHVjdGlvbnM7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAoJ14oPzonICsgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiArICcpJCcpO1xuXG4gICAgICBwcm9kdWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIHZhciBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbi5mcm9tTGluZShsaW5lLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIG1hcHBpbmdzKTtcblxuICAgICAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2goZXhjZXB0aW9uKSB7XG4gICAgICBwcm9kdWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcblxuIl19