'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion'),
    CommonParser = require('../common/parser'),
    PartProduction = require('./production/part'),
    DefinitionProduction = require('./production/definition'),
    DefinitionsProduction = require('./production/definitions'),
    ProductionProduction = require('./production/production'),
    ProductionsProduction = require('./production/productions'),
    GroupOfPartsProduction = require('./production/groupOfParts'),
    OptionalPartProduction = require('./production/optionalPart'),
    OneOrMorePartsProduction = require('./production/oneOrMoreParts'),
    ZeroOrMorePartsProduction = require('./production/zeroOrMoreParts'),
    NoWhitespacePartProduction = require('./production/noWhitespacePart'),
    VerticalSpaceProduction = require('./production/verticalSpace'),
    ProductionNameProduction = require('./production/productionName'),
    TerminalSymbolProduction = require('./production/terminalSymbol'),
    EndOfLineSymbolProduction = require('./production/endOfLineSymbol'),
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
                      definitionProduction = new DefinitionProduction(),
                      definitionsProduction = new DefinitionsProduction(),
                      productionProduction = new ProductionProduction(),
                      productionsProduction = new ProductionsProduction(),
                      groupOfPartsProduction = new GroupOfPartsProduction(),
                      optionalPartProduction = new OptionalPartProduction(),
                      oneOrMorePartsProduction = new OneOrMorePartsProduction(),
                      zeroOrMorePartsProduction = new ZeroOrMorePartsProduction(),
                      noWhitespacePartProduction = new NoWhitespacePartProduction(),
                      verticalSpaceProduction = new VerticalSpaceProduction(),
                      productionNameProduction = new ProductionNameProduction(),
                      terminalSymbolProduction = new TerminalSymbolProduction(),
                      endOfLineSymbolProduction = new EndOfLineSymbolProduction(),
                      regularExpressionProduction = new RegularExpressionProduction(),
                      significantTokenTypeProduction = new SignificantTokenTypeProduction();

                  var productions = [productionsProduction, productionProduction, definitionsProduction, definitionProduction, noWhitespacePartProduction, optionalPartProduction, zeroOrMorePartsProduction, oneOrMorePartsProduction, groupOfPartsProduction, partProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, endOfLineSymbolProduction, verticalSpaceProduction];

                  productions = cycles.eliminate(productions); ///

                  productions = leftRecursion.eliminate(productions); ///

                  var bnfParser = new BNFParser(productions);

                  return bnfParser;
            }
      }]);

      return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImN5Y2xlcyIsInJlcXVpcmUiLCJsZWZ0UmVjdXJzaW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFByb2R1Y3Rpb24iLCJEZWZpbml0aW9uUHJvZHVjdGlvbiIsIkRlZmluaXRpb25zUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwiR3JvdXBPZlBhcnRzUHJvZHVjdGlvbiIsIk9wdGlvbmFsUGFydFByb2R1Y3Rpb24iLCJPbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uIiwiTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24iLCJWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsIkVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb24iLCJSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24iLCJCTkZQYXJzZXIiLCJwYXJ0UHJvZHVjdGlvbiIsImRlZmluaXRpb25Qcm9kdWN0aW9uIiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uIiwicHJvZHVjdGlvblByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJncm91cE9mUGFydHNQcm9kdWN0aW9uIiwib3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIm9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiIsInplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJub1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiIsInZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIiwiZW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25zIiwiZWxpbWluYXRlIiwiYm5mUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLG1CQUFSLENBQWY7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsMEJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUcsaUJBQWlCSCxRQUFRLG1CQUFSLENBSHZCO0FBQUEsSUFJTUksdUJBQXVCSixRQUFRLHlCQUFSLENBSjdCO0FBQUEsSUFLTUssd0JBQXdCTCxRQUFRLDBCQUFSLENBTDlCO0FBQUEsSUFNTU0sdUJBQXVCTixRQUFRLHlCQUFSLENBTjdCO0FBQUEsSUFPTU8sd0JBQXdCUCxRQUFRLDBCQUFSLENBUDlCO0FBQUEsSUFRTVEseUJBQXlCUixRQUFRLDJCQUFSLENBUi9CO0FBQUEsSUFTTVMseUJBQXlCVCxRQUFRLDJCQUFSLENBVC9CO0FBQUEsSUFVTVUsMkJBQTJCVixRQUFRLDZCQUFSLENBVmpDO0FBQUEsSUFXTVcsNEJBQTRCWCxRQUFRLDhCQUFSLENBWGxDO0FBQUEsSUFZTVksNkJBQTZCWixRQUFRLCtCQUFSLENBWm5DO0FBQUEsSUFhTWEsMEJBQTBCYixRQUFRLDRCQUFSLENBYmhDO0FBQUEsSUFjTWMsMkJBQTJCZCxRQUFRLDZCQUFSLENBZGpDO0FBQUEsSUFlTWUsMkJBQTJCZixRQUFRLDZCQUFSLENBZmpDO0FBQUEsSUFnQk1nQiw0QkFBNEJoQixRQUFRLDhCQUFSLENBaEJsQztBQUFBLElBaUJNaUIsOEJBQThCakIsUUFBUSxnQ0FBUixDQWpCcEM7QUFBQSxJQWtCTWtCLGlDQUFpQ2xCLFFBQVEsbUNBQVIsQ0FsQnZDOztJQW9CTW1CLFM7Ozs7Ozs7Ozs7OzBDQUNpQjtBQUNuQixzQkFBTUMsaUJBQWlCLElBQUlqQixjQUFKLEVBQXZCO0FBQUEsc0JBQ01rQix1QkFBdUIsSUFBSWpCLG9CQUFKLEVBRDdCO0FBQUEsc0JBRU1rQix3QkFBd0IsSUFBSWpCLHFCQUFKLEVBRjlCO0FBQUEsc0JBR01rQix1QkFBdUIsSUFBSWpCLG9CQUFKLEVBSDdCO0FBQUEsc0JBSU1rQix3QkFBd0IsSUFBSWpCLHFCQUFKLEVBSjlCO0FBQUEsc0JBS01rQix5QkFBeUIsSUFBSWpCLHNCQUFKLEVBTC9CO0FBQUEsc0JBTU1rQix5QkFBeUIsSUFBSWpCLHNCQUFKLEVBTi9CO0FBQUEsc0JBT01rQiwyQkFBMkIsSUFBSWpCLHdCQUFKLEVBUGpDO0FBQUEsc0JBUU1rQiw0QkFBNEIsSUFBSWpCLHlCQUFKLEVBUmxDO0FBQUEsc0JBU01rQiw2QkFBNkIsSUFBSWpCLDBCQUFKLEVBVG5DO0FBQUEsc0JBVU1rQiwwQkFBMEIsSUFBSWpCLHVCQUFKLEVBVmhDO0FBQUEsc0JBV01rQiwyQkFBMkIsSUFBSWpCLHdCQUFKLEVBWGpDO0FBQUEsc0JBWU1rQiwyQkFBMkIsSUFBSWpCLHdCQUFKLEVBWmpDO0FBQUEsc0JBYU1rQiw0QkFBNEIsSUFBSWpCLHlCQUFKLEVBYmxDO0FBQUEsc0JBY01rQiw4QkFBOEIsSUFBSWpCLDJCQUFKLEVBZHBDO0FBQUEsc0JBZU1rQixpQ0FBaUMsSUFBSWpCLDhCQUFKLEVBZnZDOztBQWlCQSxzQkFBSWtCLGNBQWMsQ0FDWloscUJBRFksRUFFWkQsb0JBRlksRUFHWkQscUJBSFksRUFJWkQsb0JBSlksRUFLWlEsMEJBTFksRUFNWkgsc0JBTlksRUFPWkUseUJBUFksRUFRWkQsd0JBUlksRUFTWkYsc0JBVFksRUFVWkwsY0FWWSxFQVdaVyx3QkFYWSxFQVlaRywyQkFaWSxFQWFaQyw4QkFiWSxFQWNaSCx3QkFkWSxFQWVaQyx5QkFmWSxFQWdCWkgsdUJBaEJZLENBQWxCOztBQW1CQU0sZ0NBQWNyQyxPQUFPc0MsU0FBUCxDQUFpQkQsV0FBakIsQ0FBZCxDQXJDbUIsQ0FxQzJCOztBQUU5Q0EsZ0NBQWNuQyxjQUFjb0MsU0FBZCxDQUF3QkQsV0FBeEIsQ0FBZCxDQXZDbUIsQ0F1Q2tDOztBQUVyRCxzQkFBTUUsWUFBWSxJQUFJbkIsU0FBSixDQUFjaUIsV0FBZCxDQUFsQjs7QUFFQSx5QkFBT0UsU0FBUDtBQUNEOzs7O0VBN0NxQnBDLFk7O0FBZ0R4QnFDLE9BQU9DLE9BQVAsR0FBaUJyQixTQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5Y2xlcyA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvY3ljbGVzJyksXG4gICAgICBsZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9sZWZ0UmVjdXJzaW9uJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wYXJ0JyksXG4gICAgICBEZWZpbml0aW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZGVmaW5pdGlvbnMnKSxcbiAgICAgIFByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9ucycpLFxuICAgICAgR3JvdXBPZlBhcnRzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ncm91cE9mUGFydHMnKSxcbiAgICAgIE9wdGlvbmFsUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vb3B0aW9uYWxQYXJ0JyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vemVyb09yTW9yZVBhcnRzJyksXG4gICAgICBOb1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub1doaXRlc3BhY2VQYXJ0JyksXG4gICAgICBWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi92ZXJ0aWNhbFNwYWNlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgRW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9lbmRPZkxpbmVTeW1ib2wnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBwYXJ0UHJvZHVjdGlvbiA9IG5ldyBQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25Qcm9kdWN0aW9uID0gbmV3IERlZmluaXRpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uID0gbmV3IERlZmluaXRpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1Byb2R1Y3Rpb24gPSBuZXcgR3JvdXBPZlBhcnRzUHJvZHVjdGlvbigpLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb24gPSBuZXcgT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiA9IG5ldyBPbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gbmV3IFplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uID0gbmV3IFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBlbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uID0gbmV3IEVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSBuZXcgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbigpO1xuXG4gICAgbGV0IHByb2R1Y3Rpb25zID0gW1xuICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbixcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgZGVmaW5pdGlvblByb2R1Y3Rpb24sXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24sXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbixcbiAgICAgICAgICBncm91cE9mUGFydHNQcm9kdWN0aW9uLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24sXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbixcbiAgICAgICAgICBlbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uLFxuICAgICAgICAgIHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uXG4gICAgICAgIF07XG5cbiAgICBwcm9kdWN0aW9ucyA9IGN5Y2xlcy5lbGltaW5hdGUocHJvZHVjdGlvbnMpOyAgLy8vXG5cbiAgICBwcm9kdWN0aW9ucyA9IGxlZnRSZWN1cnNpb24uZWxpbWluYXRlKHByb2R1Y3Rpb25zKTsgIC8vL1xuXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==