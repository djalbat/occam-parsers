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
    EndOfLineProduction = require('./production/endOfLine'),
    DefinitionProduction = require('./production/definition'),
    DefinitionsProduction = require('./production/definitions'),
    ProductionProduction = require('./production/production'),
    ProductionsProduction = require('./production/productions'),
    OptionalPartProduction = require('./production/optionalPart'),
    OneOrMorePartsProduction = require('./production/oneOrMoreParts'),
    ZeroOrMorePartsProduction = require('./production/zeroOrMoreParts'),
    NoWhitespaceProduction = require('./production/noWhitespace'),
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
                      endOfLineProduction = new EndOfLineProduction(),
                      definitionProduction = new DefinitionProduction(),
                      definitionsProduction = new DefinitionsProduction(),
                      productionProduction = new ProductionProduction(),
                      productionsProduction = new ProductionsProduction(),
                      optionalPartProduction = new OptionalPartProduction(),
                      oneOrMorePartsProduction = new OneOrMorePartsProduction(),
                      zeroOrMorePartsProduction = new ZeroOrMorePartsProduction(),
                      noWhitespaceProduction = new NoWhitespaceProduction(),
                      verticalSpaceProduction = new VerticalSpaceProduction(),
                      productionNameProduction = new ProductionNameProduction(),
                      terminalSymbolProduction = new TerminalSymbolProduction(),
                      regularExpressionProduction = new RegularExpressionProduction(),
                      significantTokenTypeProduction = new SignificantTokenTypeProduction();

                  var productions = [productionsProduction, productionProduction, definitionsProduction, definitionProduction, partProduction, optionalPartProduction, oneOrMorePartsProduction, zeroOrMorePartsProduction, groupProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, verticalSpaceProduction, noWhitespaceProduction, endOfLineProduction];

                  productions = cycles.eliminate(productions); ///

                  productions = leftRecursion.eliminate(productions); ///

                  var bnfParser = new BNFParser(productions);

                  return bnfParser;
            }
      }]);

      return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImN5Y2xlcyIsInJlcXVpcmUiLCJsZWZ0UmVjdXJzaW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFByb2R1Y3Rpb24iLCJHcm91cFByb2R1Y3Rpb24iLCJFbmRPZkxpbmVQcm9kdWN0aW9uIiwiRGVmaW5pdGlvblByb2R1Y3Rpb24iLCJEZWZpbml0aW9uc1Byb2R1Y3Rpb24iLCJQcm9kdWN0aW9uUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25zUHJvZHVjdGlvbiIsIk9wdGlvbmFsUGFydFByb2R1Y3Rpb24iLCJPbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uIiwiTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiIsIlZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIiwiUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwiVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIiwiUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uIiwiQk5GUGFyc2VyIiwicGFydFByb2R1Y3Rpb24iLCJncm91cFByb2R1Y3Rpb24iLCJlbmRPZkxpbmVQcm9kdWN0aW9uIiwiZGVmaW5pdGlvblByb2R1Y3Rpb24iLCJkZWZpbml0aW9uc1Byb2R1Y3Rpb24iLCJwcm9kdWN0aW9uUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25zUHJvZHVjdGlvbiIsIm9wdGlvbmFsUGFydFByb2R1Y3Rpb24iLCJvbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJ6ZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiIsInZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIiwicmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbnMiLCJlbGltaW5hdGUiLCJibmZQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsbUJBQVIsQ0FBZjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSwwQkFBUixDQUR0QjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsa0JBQVIsQ0FGckI7QUFBQSxJQUdNRyxpQkFBaUJILFFBQVEsbUJBQVIsQ0FIdkI7QUFBQSxJQUlNSSxrQkFBa0JKLFFBQVEsb0JBQVIsQ0FKeEI7QUFBQSxJQUtNSyxzQkFBc0JMLFFBQVEsd0JBQVIsQ0FMNUI7QUFBQSxJQU1NTSx1QkFBdUJOLFFBQVEseUJBQVIsQ0FON0I7QUFBQSxJQU9NTyx3QkFBd0JQLFFBQVEsMEJBQVIsQ0FQOUI7QUFBQSxJQVFNUSx1QkFBdUJSLFFBQVEseUJBQVIsQ0FSN0I7QUFBQSxJQVNNUyx3QkFBd0JULFFBQVEsMEJBQVIsQ0FUOUI7QUFBQSxJQVVNVSx5QkFBeUJWLFFBQVEsMkJBQVIsQ0FWL0I7QUFBQSxJQVdNVywyQkFBMkJYLFFBQVEsNkJBQVIsQ0FYakM7QUFBQSxJQVlNWSw0QkFBNEJaLFFBQVEsOEJBQVIsQ0FabEM7QUFBQSxJQWFNYSx5QkFBeUJiLFFBQVEsMkJBQVIsQ0FiL0I7QUFBQSxJQWNNYywwQkFBMEJkLFFBQVEsNEJBQVIsQ0FkaEM7QUFBQSxJQWVNZSwyQkFBMkJmLFFBQVEsNkJBQVIsQ0FmakM7QUFBQSxJQWdCTWdCLDJCQUEyQmhCLFFBQVEsNkJBQVIsQ0FoQmpDO0FBQUEsSUFpQk1pQiw4QkFBOEJqQixRQUFRLGdDQUFSLENBakJwQztBQUFBLElBa0JNa0IsaUNBQWlDbEIsUUFBUSxtQ0FBUixDQWxCdkM7O0lBb0JNbUIsUzs7Ozs7Ozs7Ozs7MENBQ2lCO0FBQ25CLHNCQUFNQyxpQkFBaUIsSUFBSWpCLGNBQUosRUFBdkI7QUFBQSxzQkFDTWtCLGtCQUFrQixJQUFJakIsZUFBSixFQUR4QjtBQUFBLHNCQUVNa0Isc0JBQXNCLElBQUlqQixtQkFBSixFQUY1QjtBQUFBLHNCQUdNa0IsdUJBQXVCLElBQUlqQixvQkFBSixFQUg3QjtBQUFBLHNCQUlNa0Isd0JBQXdCLElBQUlqQixxQkFBSixFQUo5QjtBQUFBLHNCQUtNa0IsdUJBQXVCLElBQUlqQixvQkFBSixFQUw3QjtBQUFBLHNCQU1Na0Isd0JBQXdCLElBQUlqQixxQkFBSixFQU45QjtBQUFBLHNCQU9Na0IseUJBQXlCLElBQUlqQixzQkFBSixFQVAvQjtBQUFBLHNCQVFNa0IsMkJBQTJCLElBQUlqQix3QkFBSixFQVJqQztBQUFBLHNCQVNNa0IsNEJBQTRCLElBQUlqQix5QkFBSixFQVRsQztBQUFBLHNCQVVNa0IseUJBQXlCLElBQUlqQixzQkFBSixFQVYvQjtBQUFBLHNCQVdNa0IsMEJBQTBCLElBQUlqQix1QkFBSixFQVhoQztBQUFBLHNCQVlNa0IsMkJBQTJCLElBQUlqQix3QkFBSixFQVpqQztBQUFBLHNCQWFNa0IsMkJBQTJCLElBQUlqQix3QkFBSixFQWJqQztBQUFBLHNCQWNNa0IsOEJBQThCLElBQUlqQiwyQkFBSixFQWRwQztBQUFBLHNCQWVNa0IsaUNBQWlDLElBQUlqQiw4QkFBSixFQWZ2Qzs7QUFpQkEsc0JBQUlrQixjQUFjLENBQ1pWLHFCQURZLEVBRVpELG9CQUZZLEVBR1pELHFCQUhZLEVBSVpELG9CQUpZLEVBS1pILGNBTFksRUFNWk8sc0JBTlksRUFPWkMsd0JBUFksRUFRWkMseUJBUlksRUFTWlIsZUFUWSxFQVVaVyx3QkFWWSxFQVdaRSwyQkFYWSxFQVlaQyw4QkFaWSxFQWFaRix3QkFiWSxFQWNaRix1QkFkWSxFQWVaRCxzQkFmWSxFQWdCWlIsbUJBaEJZLENBQWxCOztBQW1CQWMsZ0NBQWNyQyxPQUFPc0MsU0FBUCxDQUFpQkQsV0FBakIsQ0FBZCxDQXJDbUIsQ0FxQzJCOztBQUU5Q0EsZ0NBQWNuQyxjQUFjb0MsU0FBZCxDQUF3QkQsV0FBeEIsQ0FBZCxDQXZDbUIsQ0F1Q2tDOztBQUVyRCxzQkFBTUUsWUFBWSxJQUFJbkIsU0FBSixDQUFjaUIsV0FBZCxDQUFsQjs7QUFFQSx5QkFBT0UsU0FBUDtBQUNEOzs7O0VBN0NxQnBDLFk7O0FBZ0R4QnFDLE9BQU9DLE9BQVAsR0FBaUJyQixTQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5Y2xlcyA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvY3ljbGVzJyksXG4gICAgICBsZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9sZWZ0UmVjdXJzaW9uJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wYXJ0JyksXG4gICAgICBHcm91cFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZ3JvdXAnKSxcbiAgICAgIEVuZE9mTGluZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZW5kT2ZMaW5lJyksXG4gICAgICBEZWZpbml0aW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZGVmaW5pdGlvbnMnKSxcbiAgICAgIFByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9ucycpLFxuICAgICAgT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9vcHRpb25hbFBhcnQnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi96ZXJvT3JNb3JlUGFydHMnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9XaGl0ZXNwYWNlJyksXG4gICAgICBWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi92ZXJ0aWNhbFNwYWNlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRQcm9kdWN0aW9uID0gbmV3IFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uID0gbmV3IEdyb3VwUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb24gPSBuZXcgRW5kT2ZMaW5lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25Qcm9kdWN0aW9uID0gbmV3IERlZmluaXRpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uID0gbmV3IERlZmluaXRpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb24gPSBuZXcgT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiA9IG5ldyBPbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gbmV3IFplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uID0gbmV3IE5vV2hpdGVzcGFjZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiA9IG5ldyBWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSBuZXcgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24oKTtcblxuICAgIGxldCBwcm9kdWN0aW9ucyA9IFtcbiAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24sXG4gICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uLFxuICAgICAgICAgIGRlZmluaXRpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb24sXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQcm9kdWN0aW9uLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24sXG4gICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24sXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbixcbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbixcbiAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uLFxuICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb25cbiAgICAgICAgXTtcblxuICAgIHByb2R1Y3Rpb25zID0gY3ljbGVzLmVsaW1pbmF0ZShwcm9kdWN0aW9ucyk7ICAvLy9cblxuICAgIHByb2R1Y3Rpb25zID0gbGVmdFJlY3Vyc2lvbi5lbGltaW5hdGUocHJvZHVjdGlvbnMpOyAgLy8vXG5cbiAgICBjb25zdCBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIl19