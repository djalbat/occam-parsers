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

                  var productions = [
                  /*productionsProduction,
                  productionProduction,
                  definitionsProduction,
                  definitionProduction,*/
                  partProduction /*,
                                 noWhitespacePartProduction*/
                  , optionalPartProduction /*,
                                           zeroOrMorePartsProduction,
                                           oneOrMorePartsProduction,
                                           groupOfPartsProduction,
                                           productionNameProduction,
                                           regularExpressionProduction,
                                           significantTokenTypeProduction,
                                           terminalSymbolProduction,
                                           endOfLineSymbolProduction,
                                           verticalSpaceProduction*/
                  ];

                  productions = cycles.eliminate(productions); ///

                  productions = leftRecursion.eliminate(productions); ///

                  var bnfParser = new BNFParser(productions);

                  return bnfParser;
            }
      }]);

      return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImN5Y2xlcyIsInJlcXVpcmUiLCJsZWZ0UmVjdXJzaW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFByb2R1Y3Rpb24iLCJEZWZpbml0aW9uUHJvZHVjdGlvbiIsIkRlZmluaXRpb25zUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwiR3JvdXBPZlBhcnRzUHJvZHVjdGlvbiIsIk9wdGlvbmFsUGFydFByb2R1Y3Rpb24iLCJPbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uIiwiTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24iLCJWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsIkVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb24iLCJSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24iLCJCTkZQYXJzZXIiLCJwYXJ0UHJvZHVjdGlvbiIsImRlZmluaXRpb25Qcm9kdWN0aW9uIiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uIiwicHJvZHVjdGlvblByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJncm91cE9mUGFydHNQcm9kdWN0aW9uIiwib3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIm9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiIsInplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJub1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiIsInZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIiwiZW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25zIiwiZWxpbWluYXRlIiwiYm5mUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLG1CQUFSLENBQWY7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsMEJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUcsaUJBQWlCSCxRQUFRLG1CQUFSLENBSHZCO0FBQUEsSUFJTUksdUJBQXVCSixRQUFRLHlCQUFSLENBSjdCO0FBQUEsSUFLTUssd0JBQXdCTCxRQUFRLDBCQUFSLENBTDlCO0FBQUEsSUFNTU0sdUJBQXVCTixRQUFRLHlCQUFSLENBTjdCO0FBQUEsSUFPTU8sd0JBQXdCUCxRQUFRLDBCQUFSLENBUDlCO0FBQUEsSUFRTVEseUJBQXlCUixRQUFRLDJCQUFSLENBUi9CO0FBQUEsSUFTTVMseUJBQXlCVCxRQUFRLDJCQUFSLENBVC9CO0FBQUEsSUFVTVUsMkJBQTJCVixRQUFRLDZCQUFSLENBVmpDO0FBQUEsSUFXTVcsNEJBQTRCWCxRQUFRLDhCQUFSLENBWGxDO0FBQUEsSUFZTVksNkJBQTZCWixRQUFRLCtCQUFSLENBWm5DO0FBQUEsSUFhTWEsMEJBQTBCYixRQUFRLDRCQUFSLENBYmhDO0FBQUEsSUFjTWMsMkJBQTJCZCxRQUFRLDZCQUFSLENBZGpDO0FBQUEsSUFlTWUsMkJBQTJCZixRQUFRLDZCQUFSLENBZmpDO0FBQUEsSUFnQk1nQiw0QkFBNEJoQixRQUFRLDhCQUFSLENBaEJsQztBQUFBLElBaUJNaUIsOEJBQThCakIsUUFBUSxnQ0FBUixDQWpCcEM7QUFBQSxJQWtCTWtCLGlDQUFpQ2xCLFFBQVEsbUNBQVIsQ0FsQnZDOztJQW9CTW1CLFM7Ozs7Ozs7Ozs7OzBDQUNpQjtBQUNuQixzQkFBTUMsaUJBQWlCLElBQUlqQixjQUFKLEVBQXZCO0FBQUEsc0JBQ01rQix1QkFBdUIsSUFBSWpCLG9CQUFKLEVBRDdCO0FBQUEsc0JBRU1rQix3QkFBd0IsSUFBSWpCLHFCQUFKLEVBRjlCO0FBQUEsc0JBR01rQix1QkFBdUIsSUFBSWpCLG9CQUFKLEVBSDdCO0FBQUEsc0JBSU1rQix3QkFBd0IsSUFBSWpCLHFCQUFKLEVBSjlCO0FBQUEsc0JBS01rQix5QkFBeUIsSUFBSWpCLHNCQUFKLEVBTC9CO0FBQUEsc0JBTU1rQix5QkFBeUIsSUFBSWpCLHNCQUFKLEVBTi9CO0FBQUEsc0JBT01rQiwyQkFBMkIsSUFBSWpCLHdCQUFKLEVBUGpDO0FBQUEsc0JBUU1rQiw0QkFBNEIsSUFBSWpCLHlCQUFKLEVBUmxDO0FBQUEsc0JBU01rQiw2QkFBNkIsSUFBSWpCLDBCQUFKLEVBVG5DO0FBQUEsc0JBVU1rQiwwQkFBMEIsSUFBSWpCLHVCQUFKLEVBVmhDO0FBQUEsc0JBV01rQiwyQkFBMkIsSUFBSWpCLHdCQUFKLEVBWGpDO0FBQUEsc0JBWU1rQiwyQkFBMkIsSUFBSWpCLHdCQUFKLEVBWmpDO0FBQUEsc0JBYU1rQiw0QkFBNEIsSUFBSWpCLHlCQUFKLEVBYmxDO0FBQUEsc0JBY01rQiw4QkFBOEIsSUFBSWpCLDJCQUFKLEVBZHBDO0FBQUEsc0JBZU1rQixpQ0FBaUMsSUFBSWpCLDhCQUFKLEVBZnZDOztBQWlCQSxzQkFBSWtCLGNBQWM7QUFDWjs7OztBQUlBaEIsZ0NBTFksQ0FLRTs7QUFMRixvQkFPWk0sc0JBUFksQ0FPVTs7Ozs7Ozs7OztBQVBWLG1CQUFsQjs7QUFtQkFVLGdDQUFjckMsT0FBT3NDLFNBQVAsQ0FBaUJELFdBQWpCLENBQWQsQ0FyQ21CLENBcUMyQjs7QUFFOUNBLGdDQUFjbkMsY0FBY29DLFNBQWQsQ0FBd0JELFdBQXhCLENBQWQsQ0F2Q21CLENBdUNrQzs7QUFFckQsc0JBQU1FLFlBQVksSUFBSW5CLFNBQUosQ0FBY2lCLFdBQWQsQ0FBbEI7O0FBRUEseUJBQU9FLFNBQVA7QUFDRDs7OztFQTdDcUJwQyxZOztBQWdEeEJxQyxPQUFPQyxPQUFQLEdBQWlCckIsU0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWNsZXMgPSByZXF1aXJlKCcuLi9ncmFtbWFyL2N5Y2xlcycpLFxuICAgICAgbGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvbGVmdFJlY3Vyc2lvbicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcGFydCcpLFxuICAgICAgRGVmaW5pdGlvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZGVmaW5pdGlvbicpLFxuICAgICAgRGVmaW5pdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2RlZmluaXRpb25zJyksXG4gICAgICBQcm9kdWN0aW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbnMnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZ3JvdXBPZlBhcnRzJyksXG4gICAgICBPcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9XaGl0ZXNwYWNlUGFydCcpLFxuICAgICAgVmVydGljYWxTcGFjZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdmVydGljYWxTcGFjZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIEVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZW5kT2ZMaW5lU3ltYm9sJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb24gPSBuZXcgUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uUHJvZHVjdGlvbiA9IG5ldyBEZWZpbml0aW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbiA9IG5ldyBEZWZpbml0aW9uc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBncm91cE9mUGFydHNQcm9kdWN0aW9uID0gbmV3IEdyb3VwT2ZQYXJ0c1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gbmV3IE9wdGlvbmFsUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24gPSBuZXcgT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbiA9IG5ldyBaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24gPSBuZXcgTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiA9IG5ldyBWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSBuZXcgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbiA9IG5ldyBFbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24oKTtcblxuICAgIGxldCBwcm9kdWN0aW9ucyA9IFtcbiAgICAgICAgICAvKnByb2R1Y3Rpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbixcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgZGVmaW5pdGlvblByb2R1Y3Rpb24sKi9cbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbi8qLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRQcm9kdWN0aW9uKi8sXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbi8qLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24sXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQcm9kdWN0aW9uLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1Byb2R1Y3Rpb24sXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbixcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24sXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uLFxuICAgICAgICAgIGVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb24sXG4gICAgICAgICAgdmVydGljYWxTcGFjZVByb2R1Y3Rpb24qL1xuICAgICAgICBdO1xuXG4gICAgcHJvZHVjdGlvbnMgPSBjeWNsZXMuZWxpbWluYXRlKHByb2R1Y3Rpb25zKTsgIC8vL1xuXG4gICAgcHJvZHVjdGlvbnMgPSBsZWZ0UmVjdXJzaW9uLmVsaW1pbmF0ZShwcm9kdWN0aW9ucyk7ICAvLy9cblxuICAgIGNvbnN0IGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG4iXX0=