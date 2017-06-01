'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonParser = require('../common/parser'),
    PartProduction = require('./production/part'),
    RuleProduction = require('./production/rule'),
    RulesProduction = require('./production/rules'),
    EndOfLineProduction = require('./production/endOfLine'),
    ProductionProduction = require('./production/production'),
    ProductionsProduction = require('./production/productions'),
    NoWhitespaceProduction = require('./production/noWhitespace'),
    ProductionNameProduction = require('./production/productionName'),
    TerminalSymbolProduction = require('./production/terminalSymbol'),
    RegularExpressionProduction = require('./production/regularExpression'),
    SignificantTokenTypeProduction = require('./production/significantTokenType');

var BNFParser = function (_CommonParser) {
  _inherits(BNFParser, _CommonParser);

  function BNFParser() {
    _classCallCheck(this, BNFParser);

    return _possibleConstructorReturn(this, (BNFParser.__proto__ || Object.getPrototypeOf(BNFParser)).apply(this, arguments));
  }

  _createClass(BNFParser, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var partProduction = new PartProduction(),
          ruleProduction = new RuleProduction(),
          rulesProduction = new RulesProduction(),
          endOfLineProduction = new EndOfLineProduction(),
          productionProduction = new ProductionProduction(),
          productionsProduction = new ProductionsProduction(),
          noWhitespaceProduction = new NoWhitespaceProduction(),
          productionNameProduction = new ProductionNameProduction(),
          terminalSymbolProduction = new TerminalSymbolProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          significantTokenTypeProduction = new SignificantTokenTypeProduction(),
          productions = [productionsProduction, productionProduction, rulesProduction, ruleProduction, partProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, noWhitespaceProduction, endOfLineProduction],
          bnfParser = new BNFParser(productions);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInJlcXVpcmUiLCJQYXJ0UHJvZHVjdGlvbiIsIlJ1bGVQcm9kdWN0aW9uIiwiUnVsZXNQcm9kdWN0aW9uIiwiRW5kT2ZMaW5lUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwiTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsIlJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiIsIlNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiIsIkJORlBhcnNlciIsInBhcnRQcm9kdWN0aW9uIiwicnVsZVByb2R1Y3Rpb24iLCJydWxlc1Byb2R1Y3Rpb24iLCJlbmRPZkxpbmVQcm9kdWN0aW9uIiwicHJvZHVjdGlvblByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJub1doaXRlc3BhY2VQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIiwicmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbnMiLCJibmZQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsa0JBQVIsQ0FBckI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsbUJBQVIsQ0FEdkI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsbUJBQVIsQ0FGdkI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FIeEI7QUFBQSxJQUlNSSxzQkFBc0JKLFFBQVEsd0JBQVIsQ0FKNUI7QUFBQSxJQUtNSyx1QkFBdUJMLFFBQVEseUJBQVIsQ0FMN0I7QUFBQSxJQU1NTSx3QkFBd0JOLFFBQVEsMEJBQVIsQ0FOOUI7QUFBQSxJQU9NTyx5QkFBeUJQLFFBQVEsMkJBQVIsQ0FQL0I7QUFBQSxJQVFNUSwyQkFBMkJSLFFBQVEsNkJBQVIsQ0FSakM7QUFBQSxJQVNNUywyQkFBMkJULFFBQVEsNkJBQVIsQ0FUakM7QUFBQSxJQVVNVSw4QkFBOEJWLFFBQVEsZ0NBQVIsQ0FWcEM7QUFBQSxJQVdNVyxpQ0FBaUNYLFFBQVEsbUNBQVIsQ0FYdkM7O0lBYU1ZLFM7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyxpQkFBaUIsSUFBSVosY0FBSixFQUF2QjtBQUFBLFVBQ01hLGlCQUFpQixJQUFJWixjQUFKLEVBRHZCO0FBQUEsVUFFTWEsa0JBQWtCLElBQUlaLGVBQUosRUFGeEI7QUFBQSxVQUdNYSxzQkFBc0IsSUFBSVosbUJBQUosRUFINUI7QUFBQSxVQUlNYSx1QkFBdUIsSUFBSVosb0JBQUosRUFKN0I7QUFBQSxVQUtNYSx3QkFBd0IsSUFBSVoscUJBQUosRUFMOUI7QUFBQSxVQU1NYSx5QkFBeUIsSUFBSVosc0JBQUosRUFOL0I7QUFBQSxVQU9NYSwyQkFBMkIsSUFBSVosd0JBQUosRUFQakM7QUFBQSxVQVFNYSwyQkFBMkIsSUFBSVosd0JBQUosRUFSakM7QUFBQSxVQVNNYSw4QkFBOEIsSUFBSVosMkJBQUosRUFUcEM7QUFBQSxVQVVNYSxpQ0FBaUMsSUFBSVosOEJBQUosRUFWdkM7QUFBQSxVQVdNYSxjQUFjLENBQ1pOLHFCQURZLEVBRVpELG9CQUZZLEVBR1pGLGVBSFksRUFJWkQsY0FKWSxFQUtaRCxjQUxZLEVBTVpPLHdCQU5ZLEVBT1pFLDJCQVBZLEVBUVpDLDhCQVJZLEVBU1pGLHdCQVRZLEVBVVpGLHNCQVZZLEVBV1pILG1CQVhZLENBWHBCO0FBQUEsVUF3Qk1TLFlBQVksSUFBSWIsU0FBSixDQUFjWSxXQUFkLENBeEJsQjs7QUEwQkEsYUFBT0MsU0FBUDtBQUNEOzs7O0VBN0JxQjFCLFk7O0FBZ0N4QjJCLE9BQU9DLE9BQVAsR0FBaUJmLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcGFydCcpLFxuICAgICAgUnVsZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcnVsZScpLFxuICAgICAgUnVsZXNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3J1bGVzJyksXG4gICAgICBFbmRPZkxpbmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2VuZE9mTGluZScpLFxuICAgICAgUHJvZHVjdGlvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25zJyksXG4gICAgICBOb1doaXRlc3BhY2VQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL25vV2hpdGVzcGFjZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBwYXJ0UHJvZHVjdGlvbiA9IG5ldyBQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uID0gbmV3IFJ1bGVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcnVsZXNQcm9kdWN0aW9uID0gbmV3IFJ1bGVzUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb24gPSBuZXcgRW5kT2ZMaW5lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb24gPSBuZXcgTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSBuZXcgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgICAgcnVsZXNQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcnVsZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbixcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIl19