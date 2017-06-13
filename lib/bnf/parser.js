'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion'),
    CommonParser = require('../common/parser'),
    PartProduction = require('./production/part'),
    GroupProduction = require('./production/group'),
    DefinitionProduction = require('./production/definition'),
    DefinitionsProduction = require('./production/definitions'),
    ProductionProduction = require('./production/production'),
    ProductionsProduction = require('./production/productions'),
    OptionalPartProduction = require('./production/optionalPart'),
    OneOrMorePartsProduction = require('./production/oneOrMoreParts'),
    ZeroOrMorePartsProduction = require('./production/zeroOrMoreParts'),
    NoWhitespacePartProduction = require('./production/noWhitespacePart'),
    VerticalSpaceProduction = require('./production/verticalSpace'),
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
                      groupProduction = new GroupProduction(),
                      definitionProduction = new DefinitionProduction(),
                      definitionsProduction = new DefinitionsProduction(),
                      productionProduction = new ProductionProduction(),
                      productionsProduction = new ProductionsProduction(),
                      optionalPartProduction = new OptionalPartProduction(),
                      oneOrMorePartsProduction = new OneOrMorePartsProduction(),
                      zeroOrMorePartsProduction = new ZeroOrMorePartsProduction(),
                      noWhitespacePartProduction = new NoWhitespacePartProduction(),
                      verticalSpaceProduction = new VerticalSpaceProduction(),
                      productionNameProduction = new ProductionNameProduction(),
                      terminalSymbolProduction = new TerminalSymbolProduction(),
                      regularExpressionProduction = new RegularExpressionProduction(),
                      significantTokenTypeProduction = new SignificantTokenTypeProduction();

                  var productions = [productionsProduction, productionProduction, definitionsProduction, definitionProduction, partProduction, noWhitespacePartProduction, optionalPartProduction, oneOrMorePartsProduction, zeroOrMorePartsProduction, groupProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, verticalSpaceProduction];

                  productions = cycles.eliminate(productions); ///

                  productions = leftRecursion.eliminate(productions); ///

                  var bnfParser = new BNFParser(productions);

                  return bnfParser;
            }
      }]);

      return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImN5Y2xlcyIsInJlcXVpcmUiLCJsZWZ0UmVjdXJzaW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFByb2R1Y3Rpb24iLCJHcm91cFByb2R1Y3Rpb24iLCJEZWZpbml0aW9uUHJvZHVjdGlvbiIsIkRlZmluaXRpb25zUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwiT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIk9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiIsIlplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJOb1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiIsIlZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIiwiUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwiVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIiwiUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uIiwiQk5GUGFyc2VyIiwicGFydFByb2R1Y3Rpb24iLCJncm91cFByb2R1Y3Rpb24iLCJkZWZpbml0aW9uUHJvZHVjdGlvbiIsImRlZmluaXRpb25zUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwib3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIm9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiIsInplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJub1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiIsInZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIiwicmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbnMiLCJl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Y2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5Y2xlcyA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvY3ljbGVzJyksXG4gICAgICBsZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9sZWZ0UmVjdXJzaW9uJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wYXJ0JyksXG4gICAgICBHcm91cFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZ3JvdXAnKSxcbiAgICAgIERlZmluaXRpb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2RlZmluaXRpb24nKSxcbiAgICAgIERlZmluaXRpb25zUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9kZWZpbml0aW9ucycpLFxuICAgICAgUHJvZHVjdGlvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25zJyksXG4gICAgICBPcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9XaGl0ZXNwYWNlUGFydCcpLFxuICAgICAgVmVydGljYWxTcGFjZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdmVydGljYWxTcGFjZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBwYXJ0UHJvZHVjdGlvbiA9IG5ldyBQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIGdyb3VwUHJvZHVjdGlvbiA9IG5ldyBHcm91cFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uUHJvZHVjdGlvbiA9IG5ldyBEZWZpbml0aW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbiA9IG5ldyBEZWZpbml0aW9uc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gbmV3IE9wdGlvbmFsUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24gPSBuZXcgT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbiA9IG5ldyBaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24gPSBuZXcgTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiA9IG5ldyBWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSBuZXcgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24oKTtcblxuICAgIGxldCBwcm9kdWN0aW9ucyA9IFtcbiAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24sXG4gICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uLFxuICAgICAgICAgIGRlZmluaXRpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb24sXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQcm9kdWN0aW9uLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24sXG4gICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24sXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbixcbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvblxuICAgICAgICBdO1xuXG4gICAgcHJvZHVjdGlvbnMgPSBjeWNsZXMuZWxpbWluYXRlKHByb2R1Y3Rpb25zKTsgIC8vL1xuXG4gICAgcHJvZHVjdGlvbnMgPSBsZWZ0UmVjdXJzaW9uLmVsaW1pbmF0ZShwcm9kdWN0aW9ucyk7ICAvLy9cblxuICAgIGNvbnN0IGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG4iXX0=