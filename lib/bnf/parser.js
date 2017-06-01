'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonParser = require('../common/parser'),
    PartProduction = require('./production/part'),
    RuleProduction = require('./production/rule'),
    RulesProduction = require('./production/rules'),
    GroupProduction = require('./production/group'),
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
          groupProduction = new GroupProduction(),
          endOfLineProduction = new EndOfLineProduction(),
          productionProduction = new ProductionProduction(),
          productionsProduction = new ProductionsProduction(),
          noWhitespaceProduction = new NoWhitespaceProduction(),
          productionNameProduction = new ProductionNameProduction(),
          terminalSymbolProduction = new TerminalSymbolProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          significantTokenTypeProduction = new SignificantTokenTypeProduction(),
          productions = [productionsProduction, productionProduction, rulesProduction, ruleProduction, partProduction, groupProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, noWhitespaceProduction, endOfLineProduction],
          bnfParser = new BNFParser(productions);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInJlcXVpcmUiLCJQYXJ0UHJvZHVjdGlvbiIsIlJ1bGVQcm9kdWN0aW9uIiwiUnVsZXNQcm9kdWN0aW9uIiwiR3JvdXBQcm9kdWN0aW9uIiwiRW5kT2ZMaW5lUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwiTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsIlJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiIsIlNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiIsIkJORlBhcnNlciIsInBhcnRQcm9kdWN0aW9uIiwicnVsZVByb2R1Y3Rpb24iLCJydWxlc1Byb2R1Y3Rpb24iLCJncm91cFByb2R1Y3Rpb24iLCJlbmRPZkxpbmVQcm9kdWN0aW9uIiwicHJvZHVjdGlvblByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJub1doaXRlc3BhY2VQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIiwicmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbnMiLCJibmZQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsa0JBQVIsQ0FBckI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsbUJBQVIsQ0FEdkI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsbUJBQVIsQ0FGdkI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FIeEI7QUFBQSxJQUlNSSxrQkFBa0JKLFFBQVEsb0JBQVIsQ0FKeEI7QUFBQSxJQUtNSyxzQkFBc0JMLFFBQVEsd0JBQVIsQ0FMNUI7QUFBQSxJQU1NTSx1QkFBdUJOLFFBQVEseUJBQVIsQ0FON0I7QUFBQSxJQU9NTyx3QkFBd0JQLFFBQVEsMEJBQVIsQ0FQOUI7QUFBQSxJQVFNUSx5QkFBeUJSLFFBQVEsMkJBQVIsQ0FSL0I7QUFBQSxJQVNNUywyQkFBMkJULFFBQVEsNkJBQVIsQ0FUakM7QUFBQSxJQVVNVSwyQkFBMkJWLFFBQVEsNkJBQVIsQ0FWakM7QUFBQSxJQVdNVyw4QkFBOEJYLFFBQVEsZ0NBQVIsQ0FYcEM7QUFBQSxJQVlNWSxpQ0FBaUNaLFFBQVEsbUNBQVIsQ0FadkM7O0lBY01hLFM7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyxpQkFBaUIsSUFBSWIsY0FBSixFQUF2QjtBQUFBLFVBQ01jLGlCQUFpQixJQUFJYixjQUFKLEVBRHZCO0FBQUEsVUFFTWMsa0JBQWtCLElBQUliLGVBQUosRUFGeEI7QUFBQSxVQUdNYyxrQkFBa0IsSUFBSWIsZUFBSixFQUh4QjtBQUFBLFVBSU1jLHNCQUFzQixJQUFJYixtQkFBSixFQUo1QjtBQUFBLFVBS01jLHVCQUF1QixJQUFJYixvQkFBSixFQUw3QjtBQUFBLFVBTU1jLHdCQUF3QixJQUFJYixxQkFBSixFQU45QjtBQUFBLFVBT01jLHlCQUF5QixJQUFJYixzQkFBSixFQVAvQjtBQUFBLFVBUU1jLDJCQUEyQixJQUFJYix3QkFBSixFQVJqQztBQUFBLFVBU01jLDJCQUEyQixJQUFJYix3QkFBSixFQVRqQztBQUFBLFVBVU1jLDhCQUE4QixJQUFJYiwyQkFBSixFQVZwQztBQUFBLFVBV01jLGlDQUFpQyxJQUFJYiw4QkFBSixFQVh2QztBQUFBLFVBWU1jLGNBQWMsQ0FDWk4scUJBRFksRUFFWkQsb0JBRlksRUFHWkgsZUFIWSxFQUlaRCxjQUpZLEVBS1pELGNBTFksRUFNWkcsZUFOWSxFQU9aSyx3QkFQWSxFQVFaRSwyQkFSWSxFQVNaQyw4QkFUWSxFQVVaRix3QkFWWSxFQVdaRixzQkFYWSxFQVlaSCxtQkFaWSxDQVpwQjtBQUFBLFVBMEJNUyxZQUFZLElBQUlkLFNBQUosQ0FBY2EsV0FBZCxDQTFCbEI7O0FBNEJBLGFBQU9DLFNBQVA7QUFDRDs7OztFQS9CcUI1QixZOztBQWtDeEI2QixPQUFPQyxPQUFQLEdBQWlCaEIsU0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wYXJ0JyksXG4gICAgICBSdWxlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ydWxlJyksXG4gICAgICBSdWxlc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcnVsZXMnKSxcbiAgICAgIEdyb3VwUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ncm91cCcpLFxuICAgICAgRW5kT2ZMaW5lUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9lbmRPZkxpbmUnKSxcbiAgICAgIFByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9ucycpLFxuICAgICAgTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub1doaXRlc3BhY2UnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb24gPSBuZXcgUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBydWxlUHJvZHVjdGlvbiA9IG5ldyBSdWxlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbiA9IG5ldyBSdWxlc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBncm91cFByb2R1Y3Rpb24gPSBuZXcgR3JvdXBQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvbiA9IG5ldyBFbmRPZkxpbmVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbnNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiA9IG5ldyBOb1doaXRlc3BhY2VQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSBuZXcgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24sXG4gICAgICAgICAgICBydWxlc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgICBydWxlUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbixcbiAgICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG4iXX0=