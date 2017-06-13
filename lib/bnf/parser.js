'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion'),
    CommonParser = require('../common/parser'),
    PartProduction = require('./production/part'),
    NegatedPartProduction = require('./production/negatedPart'),
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
                      negatedPartProduction = new NegatedPartProduction(),
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

                  var productions = [productionsProduction, productionProduction, definitionsProduction, definitionProduction, partProduction, noWhitespacePartProduction, negatedPartProduction, optionalPartProduction, oneOrMorePartsProduction, zeroOrMorePartsProduction, groupOfPartsProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, endOfLineSymbolProduction, verticalSpaceProduction];

                  productions = cycles.eliminate(productions); ///

                  productions = leftRecursion.eliminate(productions); ///

                  var bnfParser = new BNFParser(productions);

                  return bnfParser;
            }
      }]);

      return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImN5Y2xlcyIsInJlcXVpcmUiLCJsZWZ0UmVjdXJzaW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFByb2R1Y3Rpb24iLCJOZWdhdGVkUGFydFByb2R1Y3Rpb24iLCJEZWZpbml0aW9uUHJvZHVjdGlvbiIsIkRlZmluaXRpb25zUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwiR3JvdXBPZlBhcnRzUHJvZHVjdGlvbiIsIk9wdGlvbmFsUGFydFByb2R1Y3Rpb24iLCJPbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uIiwiTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24iLCJWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsIkVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb24iLCJSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24iLCJCTkZQYXJzZXIiLCJwYXJ0UHJvZHVjdGlvbiIsIm5lZ2F0ZWRQYXJ0UHJvZHVjdGlvbiIsImRlZmluaXRpb25Qcm9kdWN0aW9uIiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uIiwicHJvZHVjdGlvblByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJncm91cE9mUGFydHNQcm9kdWN0aW9uIiwib3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIm9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiIsInplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJub1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiIsInZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIiwiZW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25zIiwiZWxpbWluYXRlIiwiYm5mUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLG1CQUFSLENBQWY7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsMEJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUcsaUJBQWlCSCxRQUFRLG1CQUFSLENBSHZCO0FBQUEsSUFJTUksd0JBQXdCSixRQUFRLDBCQUFSLENBSjlCO0FBQUEsSUFLTUssdUJBQXVCTCxRQUFRLHlCQUFSLENBTDdCO0FBQUEsSUFNTU0sd0JBQXdCTixRQUFRLDBCQUFSLENBTjlCO0FBQUEsSUFPTU8sdUJBQXVCUCxRQUFRLHlCQUFSLENBUDdCO0FBQUEsSUFRTVEsd0JBQXdCUixRQUFRLDBCQUFSLENBUjlCO0FBQUEsSUFTTVMseUJBQXlCVCxRQUFRLDJCQUFSLENBVC9CO0FBQUEsSUFVTVUseUJBQXlCVixRQUFRLDJCQUFSLENBVi9CO0FBQUEsSUFXTVcsMkJBQTJCWCxRQUFRLDZCQUFSLENBWGpDO0FBQUEsSUFZTVksNEJBQTRCWixRQUFRLDhCQUFSLENBWmxDO0FBQUEsSUFhTWEsNkJBQTZCYixRQUFRLCtCQUFSLENBYm5DO0FBQUEsSUFjTWMsMEJBQTBCZCxRQUFRLDRCQUFSLENBZGhDO0FBQUEsSUFlTWUsMkJBQTJCZixRQUFRLDZCQUFSLENBZmpDO0FBQUEsSUFnQk1nQiwyQkFBMkJoQixRQUFRLDZCQUFSLENBaEJqQztBQUFBLElBaUJNaUIsNEJBQTRCakIsUUFBUSw4QkFBUixDQWpCbEM7QUFBQSxJQWtCTWtCLDhCQUE4QmxCLFFBQVEsZ0NBQVIsQ0FsQnBDO0FBQUEsSUFtQk1tQixpQ0FBaUNuQixRQUFRLG1DQUFSLENBbkJ2Qzs7SUFxQk1vQixTOzs7Ozs7Ozs7OzswQ0FDaUI7QUFDbkIsc0JBQU1DLGlCQUFpQixJQUFJbEIsY0FBSixFQUF2QjtBQUFBLHNCQUNNbUIsd0JBQXdCLElBQUlsQixxQkFBSixFQUQ5QjtBQUFBLHNCQUVNbUIsdUJBQXVCLElBQUlsQixvQkFBSixFQUY3QjtBQUFBLHNCQUdNbUIsd0JBQXdCLElBQUlsQixxQkFBSixFQUg5QjtBQUFBLHNCQUlNbUIsdUJBQXVCLElBQUlsQixvQkFBSixFQUo3QjtBQUFBLHNCQUtNbUIsd0JBQXdCLElBQUlsQixxQkFBSixFQUw5QjtBQUFBLHNCQU1NbUIseUJBQXlCLElBQUlsQixzQkFBSixFQU4vQjtBQUFBLHNCQU9NbUIseUJBQXlCLElBQUlsQixzQkFBSixFQVAvQjtBQUFBLHNCQVFNbUIsMkJBQTJCLElBQUlsQix3QkFBSixFQVJqQztBQUFBLHNCQVNNbUIsNEJBQTRCLElBQUlsQix5QkFBSixFQVRsQztBQUFBLHNCQVVNbUIsNkJBQTZCLElBQUlsQiwwQkFBSixFQVZuQztBQUFBLHNCQVdNbUIsMEJBQTBCLElBQUlsQix1QkFBSixFQVhoQztBQUFBLHNCQVlNbUIsMkJBQTJCLElBQUlsQix3QkFBSixFQVpqQztBQUFBLHNCQWFNbUIsMkJBQTJCLElBQUlsQix3QkFBSixFQWJqQztBQUFBLHNCQWNNbUIsNEJBQTRCLElBQUlsQix5QkFBSixFQWRsQztBQUFBLHNCQWVNbUIsOEJBQThCLElBQUlsQiwyQkFBSixFQWZwQztBQUFBLHNCQWdCTW1CLGlDQUFpQyxJQUFJbEIsOEJBQUosRUFoQnZDOztBQWtCQSxzQkFBSW1CLGNBQWMsQ0FDWloscUJBRFksRUFFWkQsb0JBRlksRUFHWkQscUJBSFksRUFJWkQsb0JBSlksRUFLWkYsY0FMWSxFQU1aVSwwQkFOWSxFQU9aVCxxQkFQWSxFQVFaTSxzQkFSWSxFQVNaQyx3QkFUWSxFQVVaQyx5QkFWWSxFQVdaSCxzQkFYWSxFQVlaTSx3QkFaWSxFQWFaRywyQkFiWSxFQWNaQyw4QkFkWSxFQWVaSCx3QkFmWSxFQWdCWkMseUJBaEJZLEVBaUJaSCx1QkFqQlksQ0FBbEI7O0FBb0JBTSxnQ0FBY3ZDLE9BQU93QyxTQUFQLENBQWlCRCxXQUFqQixDQUFkLENBdkNtQixDQXVDMkI7O0FBRTlDQSxnQ0FBY3JDLGNBQWNzQyxTQUFkLENBQXdCRCxXQUF4QixDQUFkLENBekNtQixDQXlDa0M7O0FBRXJELHNCQUFNRSxZQUFZLElBQUlwQixTQUFKLENBQWNrQixXQUFkLENBQWxCOztBQUVBLHlCQUFPRSxTQUFQO0FBQ0Q7Ozs7RUEvQ3FCdEMsWTs7QUFrRHhCdUMsT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3ljbGVzID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9jeWNsZXMnKSxcbiAgICAgIGxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9ncmFtbWFyL2xlZnRSZWN1cnNpb24nKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3BhcnQnKSxcbiAgICAgIE5lZ2F0ZWRQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9uZWdhdGVkUGFydCcpLFxuICAgICAgRGVmaW5pdGlvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZGVmaW5pdGlvbicpLFxuICAgICAgRGVmaW5pdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2RlZmluaXRpb25zJyksXG4gICAgICBQcm9kdWN0aW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbnMnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZ3JvdXBPZlBhcnRzJyksXG4gICAgICBPcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9XaGl0ZXNwYWNlUGFydCcpLFxuICAgICAgVmVydGljYWxTcGFjZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdmVydGljYWxTcGFjZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIEVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZW5kT2ZMaW5lU3ltYm9sJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb24gPSBuZXcgUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBuZWdhdGVkUGFydFByb2R1Y3Rpb24gPSBuZXcgTmVnYXRlZFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvblByb2R1Y3Rpb24gPSBuZXcgRGVmaW5pdGlvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb24gPSBuZXcgRGVmaW5pdGlvbnNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbnNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUHJvZHVjdGlvbiA9IG5ldyBHcm91cE9mUGFydHNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiA9IG5ldyBPcHRpb25hbFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gbmV3IE9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24gPSBuZXcgWmVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbigpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRQcm9kdWN0aW9uID0gbmV3IE5vV2hpdGVzcGFjZVBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgdmVydGljYWxTcGFjZVByb2R1Y3Rpb24gPSBuZXcgVmVydGljYWxTcGFjZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb24gPSBuZXcgRW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uKCk7XG5cbiAgICBsZXQgcHJvZHVjdGlvbnMgPSBbXG4gICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICBkZWZpbml0aW9uUHJvZHVjdGlvbixcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICBuZWdhdGVkUGFydFByb2R1Y3Rpb24sXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24sXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbixcbiAgICAgICAgICBncm91cE9mUGFydHNQcm9kdWN0aW9uLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24sXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbixcbiAgICAgICAgICBlbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uLFxuICAgICAgICAgIHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uXG4gICAgICAgIF07XG5cbiAgICBwcm9kdWN0aW9ucyA9IGN5Y2xlcy5lbGltaW5hdGUocHJvZHVjdGlvbnMpOyAgLy8vXG5cbiAgICBwcm9kdWN0aW9ucyA9IGxlZnRSZWN1cnNpb24uZWxpbWluYXRlKHByb2R1Y3Rpb25zKTsgIC8vL1xuXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==