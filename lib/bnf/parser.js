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
                      noWhitespaceProduction = new NoWhitespaceProduction(),
                      verticalSpaceProduction = new VerticalSpaceProduction(),
                      productionNameProduction = new ProductionNameProduction(),
                      terminalSymbolProduction = new TerminalSymbolProduction(),
                      regularExpressionProduction = new RegularExpressionProduction(),
                      significantTokenTypeProduction = new SignificantTokenTypeProduction();

                  var productions = [productionsProduction, productionProduction, definitionsProduction, definitionProduction, partProduction, optionalPartProduction, groupProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, verticalSpaceProduction, noWhitespaceProduction, endOfLineProduction];

                  productions = cycles.eliminate(productions); ///

                  productions = leftRecursion.eliminate(productions); ///

                  var bnfParser = new BNFParser(productions);

                  return bnfParser;
            }
      }]);

      return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImN5Y2xlcyIsInJlcXVpcmUiLCJsZWZ0UmVjdXJzaW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFByb2R1Y3Rpb24iLCJHcm91cFByb2R1Y3Rpb24iLCJFbmRPZkxpbmVQcm9kdWN0aW9uIiwiRGVmaW5pdGlvblByb2R1Y3Rpb24iLCJEZWZpbml0aW9uc1Byb2R1Y3Rpb24iLCJQcm9kdWN0aW9uUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25zUHJvZHVjdGlvbiIsIk9wdGlvbmFsUGFydFByb2R1Y3Rpb24iLCJOb1doaXRlc3BhY2VQcm9kdWN0aW9uIiwiVmVydGljYWxTcGFjZVByb2R1Y3Rpb24iLCJQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24iLCJUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24iLCJSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24iLCJCTkZQYXJzZXIiLCJwYXJ0UHJvZHVjdGlvbiIsImdyb3VwUHJvZHVjdGlvbiIsImVuZE9mTGluZVByb2R1Y3Rpb24iLCJkZWZpbml0aW9uUHJvZHVjdGlvbiIsImRlZmluaXRpb25zUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwib3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIm5vV2hpdGVzcGFjZVByb2R1Y3Rpb24iLCJ2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsInRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25zIiwiZWxpbWluYXRlIiwiYm5mUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLG1CQUFSLENBQWY7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsMEJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUcsaUJBQWlCSCxRQUFRLG1CQUFSLENBSHZCO0FBQUEsSUFJTUksa0JBQWtCSixRQUFRLG9CQUFSLENBSnhCO0FBQUEsSUFLTUssc0JBQXNCTCxRQUFRLHdCQUFSLENBTDVCO0FBQUEsSUFNTU0sdUJBQXVCTixRQUFRLHlCQUFSLENBTjdCO0FBQUEsSUFPTU8sd0JBQXdCUCxRQUFRLDBCQUFSLENBUDlCO0FBQUEsSUFRTVEsdUJBQXVCUixRQUFRLHlCQUFSLENBUjdCO0FBQUEsSUFTTVMsd0JBQXdCVCxRQUFRLDBCQUFSLENBVDlCO0FBQUEsSUFVTVUseUJBQXlCVixRQUFRLDJCQUFSLENBVi9CO0FBQUEsSUFXTVcseUJBQXlCWCxRQUFRLDJCQUFSLENBWC9CO0FBQUEsSUFZTVksMEJBQTBCWixRQUFRLDRCQUFSLENBWmhDO0FBQUEsSUFhTWEsMkJBQTJCYixRQUFRLDZCQUFSLENBYmpDO0FBQUEsSUFjTWMsMkJBQTJCZCxRQUFRLDZCQUFSLENBZGpDO0FBQUEsSUFlTWUsOEJBQThCZixRQUFRLGdDQUFSLENBZnBDO0FBQUEsSUFnQk1nQixpQ0FBaUNoQixRQUFRLG1DQUFSLENBaEJ2Qzs7SUFrQk1pQixTOzs7Ozs7Ozs7OzswQ0FDaUI7QUFDbkIsc0JBQU1DLGlCQUFpQixJQUFJZixjQUFKLEVBQXZCO0FBQUEsc0JBQ01nQixrQkFBa0IsSUFBSWYsZUFBSixFQUR4QjtBQUFBLHNCQUVNZ0Isc0JBQXNCLElBQUlmLG1CQUFKLEVBRjVCO0FBQUEsc0JBR01nQix1QkFBdUIsSUFBSWYsb0JBQUosRUFIN0I7QUFBQSxzQkFJTWdCLHdCQUF3QixJQUFJZixxQkFBSixFQUo5QjtBQUFBLHNCQUtNZ0IsdUJBQXVCLElBQUlmLG9CQUFKLEVBTDdCO0FBQUEsc0JBTU1nQix3QkFBd0IsSUFBSWYscUJBQUosRUFOOUI7QUFBQSxzQkFPTWdCLHlCQUF5QixJQUFJZixzQkFBSixFQVAvQjtBQUFBLHNCQVFNZ0IseUJBQXlCLElBQUlmLHNCQUFKLEVBUi9CO0FBQUEsc0JBU01nQiwwQkFBMEIsSUFBSWYsdUJBQUosRUFUaEM7QUFBQSxzQkFVTWdCLDJCQUEyQixJQUFJZix3QkFBSixFQVZqQztBQUFBLHNCQVdNZ0IsMkJBQTJCLElBQUlmLHdCQUFKLEVBWGpDO0FBQUEsc0JBWU1nQiw4QkFBOEIsSUFBSWYsMkJBQUosRUFacEM7QUFBQSxzQkFhTWdCLGlDQUFpQyxJQUFJZiw4QkFBSixFQWJ2Qzs7QUFlQSxzQkFBSWdCLGNBQWMsQ0FDWlIscUJBRFksRUFFWkQsb0JBRlksRUFHWkQscUJBSFksRUFJWkQsb0JBSlksRUFLWkgsY0FMWSxFQU1aTyxzQkFOWSxFQU9aTixlQVBZLEVBUVpTLHdCQVJZLEVBU1pFLDJCQVRZLEVBVVpDLDhCQVZZLEVBV1pGLHdCQVhZLEVBWVpGLHVCQVpZLEVBYVpELHNCQWJZLEVBY1pOLG1CQWRZLENBQWxCOztBQWlCQVksZ0NBQWNqQyxPQUFPa0MsU0FBUCxDQUFpQkQsV0FBakIsQ0FBZCxDQWpDbUIsQ0FpQzJCOztBQUU5Q0EsZ0NBQWMvQixjQUFjZ0MsU0FBZCxDQUF3QkQsV0FBeEIsQ0FBZCxDQW5DbUIsQ0FtQ2tDOztBQUVyRCxzQkFBTUUsWUFBWSxJQUFJakIsU0FBSixDQUFjZSxXQUFkLENBQWxCOztBQUVBLHlCQUFPRSxTQUFQO0FBQ0Q7Ozs7RUF6Q3FCaEMsWTs7QUE0Q3hCaUMsT0FBT0MsT0FBUCxHQUFpQm5CLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3ljbGVzID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9jeWNsZXMnKSxcbiAgICAgIGxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9ncmFtbWFyL2xlZnRSZWN1cnNpb24nKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3BhcnQnKSxcbiAgICAgIEdyb3VwUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ncm91cCcpLFxuICAgICAgRW5kT2ZMaW5lUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9lbmRPZkxpbmUnKSxcbiAgICAgIERlZmluaXRpb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2RlZmluaXRpb24nKSxcbiAgICAgIERlZmluaXRpb25zUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9kZWZpbml0aW9ucycpLFxuICAgICAgUHJvZHVjdGlvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25zJyksXG4gICAgICBPcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydCcpLFxuICAgICAgTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub1doaXRlc3BhY2UnKSxcbiAgICAgIFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3ZlcnRpY2FsU3BhY2UnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb24gPSBuZXcgUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBncm91cFByb2R1Y3Rpb24gPSBuZXcgR3JvdXBQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvbiA9IG5ldyBFbmRPZkxpbmVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvblByb2R1Y3Rpb24gPSBuZXcgRGVmaW5pdGlvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb24gPSBuZXcgRGVmaW5pdGlvbnNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbnNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiA9IG5ldyBPcHRpb25hbFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiA9IG5ldyBOb1doaXRlc3BhY2VQcm9kdWN0aW9uKCksXG4gICAgICAgICAgdmVydGljYWxTcGFjZVByb2R1Y3Rpb24gPSBuZXcgVmVydGljYWxTcGFjZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uKCk7XG5cbiAgICBsZXQgcHJvZHVjdGlvbnMgPSBbXG4gICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICBkZWZpbml0aW9uUHJvZHVjdGlvbixcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgIGdyb3VwUHJvZHVjdGlvbixcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24sXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbixcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24sXG4gICAgICAgICAgdmVydGljYWxTcGFjZVByb2R1Y3Rpb24sXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbixcbiAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uXG4gICAgICAgIF07XG5cbiAgICBwcm9kdWN0aW9ucyA9IGN5Y2xlcy5lbGltaW5hdGUocHJvZHVjdGlvbnMpOyAgLy8vXG5cbiAgICBwcm9kdWN0aW9ucyA9IGxlZnRSZWN1cnNpb24uZWxpbWluYXRlKHByb2R1Y3Rpb25zKTsgIC8vL1xuXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==