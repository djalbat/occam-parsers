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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZQYXJzZXIuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJsaW5lcyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwibWFwIiwibGluZSIsInByb2R1Y3Rpb24iLCJmcm9tTGluZSIsImV4Y2VwdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLGNBQVIsQ0FBakI7O0lBRU1DLFM7Ozs7Ozs7MEJBQ1NDLEssRUFBT0MsNEIsRUFBOEJDLHFCLEVBQXVCQyxRLEVBQVU7QUFDakYsVUFBSUMsV0FBSjs7QUFFQSxVQUFJO0FBQ0YsWUFBSUMsd0JBQXdCLElBQUlDLE1BQUosVUFBa0JMLDRCQUFsQixRQUE1Qjs7QUFFQUcsc0JBQWNKLE1BQU1PLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDckMsY0FBSUMsYUFBYVosV0FBV2EsUUFBWCxDQUFvQkYsSUFBcEIsRUFBMEJILHFCQUExQixFQUFpREgscUJBQWpELEVBQXdFQyxRQUF4RSxDQUFqQjs7QUFFQSxpQkFBT00sVUFBUDtBQUNELFNBSmEsQ0FBZDtBQUtELE9BUkQsQ0FRRSxPQUFNRSxTQUFOLEVBQWlCO0FBQ2pCUCxzQkFBYyxFQUFkO0FBQ0Q7O0FBRUQsYUFBT0EsV0FBUDtBQUNEOzs7Ozs7QUFHSFEsT0FBT0MsT0FBUCxHQUFpQmQsU0FBakIiLCJmaWxlIjoiYm5mUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBCTkZQYXJzZXIge1xuICBzdGF0aWMgcGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICB2YXIgcHJvZHVjdGlvbnM7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAoYF4oPzoke3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm59KSRgKTtcblxuICAgICAgcHJvZHVjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICB2YXIgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb24uZnJvbUxpbmUobGluZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKTtcblxuICAgICAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2goZXhjZXB0aW9uKSB7XG4gICAgICBwcm9kdWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcblxuIl19