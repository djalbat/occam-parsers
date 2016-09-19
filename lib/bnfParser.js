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
    value: function parse(lines, Parts, terminalSymbolsRegExpPattern, mappings) {
      var productions;

      try {
        var terminalSymbolsRegExp = new RegExp('^(?:' + terminalSymbolsRegExpPattern + ')$');

        productions = lines.map(function (line) {
          var production = Production.fromLine(line, Parts, terminalSymbolsRegExp, mappings);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZQYXJzZXIuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJsaW5lcyIsIlBhcnRzIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJSZWdFeHAiLCJtYXAiLCJsaW5lIiwicHJvZHVjdGlvbiIsImZyb21MaW5lIiwiZXhjZXB0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGFBQWFDLFFBQVEsd0JBQVIsQ0FBakI7O0lBRU1DLFM7Ozs7Ozs7MEJBQ1NDLEssRUFBT0MsSyxFQUFPQyw0QixFQUE4QkMsUSxFQUFVO0FBQ2pFLFVBQUlDLFdBQUo7O0FBRUEsVUFBSTtBQUNGLFlBQUlDLHdCQUF3QixJQUFJQyxNQUFKLENBQVcsU0FBU0osNEJBQVQsR0FBd0MsSUFBbkQsQ0FBNUI7O0FBRUFFLHNCQUFjSixNQUFNTyxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQ3JDLGNBQUlDLGFBQWFaLFdBQVdhLFFBQVgsQ0FBb0JGLElBQXBCLEVBQTBCUCxLQUExQixFQUFpQ0kscUJBQWpDLEVBQXdERixRQUF4RCxDQUFqQjs7QUFFQSxpQkFBT00sVUFBUDtBQUNELFNBSmEsQ0FBZDtBQUtELE9BUkQsQ0FRRSxPQUFNRSxTQUFOLEVBQWlCO0FBQ2pCUCxzQkFBYyxFQUFkO0FBQ0Q7O0FBRUQsYUFBT0EsV0FBUDtBQUNEOzs7Ozs7QUFHSFEsT0FBT0MsT0FBUCxHQUFpQmQsU0FBakIiLCJmaWxlIjoiYm5mUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vYm5mUGFyc2VyL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgQk5GUGFyc2VyIHtcbiAgc3RhdGljIHBhcnNlKGxpbmVzLCBQYXJ0cywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgbWFwcGluZ3MpIHtcbiAgICB2YXIgcHJvZHVjdGlvbnM7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAoJ14oPzonICsgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiArICcpJCcpO1xuXG4gICAgICBwcm9kdWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIHZhciBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbi5mcm9tTGluZShsaW5lLCBQYXJ0cywgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBtYXBwaW5ncyk7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGV4Y2VwdGlvbikge1xuICAgICAgcHJvZHVjdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG5cbiJdfQ==