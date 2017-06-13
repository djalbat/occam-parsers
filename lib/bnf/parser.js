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
                      endOfLineSymbolProduction = new EndOfLineSymbolProduction(),
                      regularExpressionProduction = new RegularExpressionProduction(),
                      significantTokenTypeProduction = new SignificantTokenTypeProduction();

                  var productions = [productionsProduction, productionProduction, definitionsProduction, definitionProduction, partProduction, noWhitespacePartProduction, optionalPartProduction, oneOrMorePartsProduction, zeroOrMorePartsProduction, groupProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, endOfLineSymbolProduction, verticalSpaceProduction];

                  productions = cycles.eliminate(productions); ///

                  productions = leftRecursion.eliminate(productions); ///

                  var bnfParser = new BNFParser(productions);

                  return bnfParser;
            }
      }]);

      return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImN5Y2xlcyIsInJlcXVpcmUiLCJsZWZ0UmVjdXJzaW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFByb2R1Y3Rpb24iLCJHcm91cFByb2R1Y3Rpb24iLCJEZWZpbml0aW9uUHJvZHVjdGlvbiIsIkRlZmluaXRpb25zUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwiT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIk9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiIsIlplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJOb1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiIsIlZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIiwiUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwiVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIiwiRW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbiIsIlJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiIsIlNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiIsIkJORlBhcnNlciIsInBhcnRQcm9kdWN0aW9uIiwiZ3JvdXBQcm9kdWN0aW9uIiwiZGVmaW5pdGlvblByb2R1Y3Rpb24iLCJkZWZpbml0aW9uc1Byb2R1Y3Rpb24iLCJwcm9kdWN0aW9uUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25zUHJvZHVjdGlvbiIsIm9wdGlvbmFsUGFydFByb2R1Y3Rpb24iLCJvbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJ6ZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24iLCJ2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsInRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsImVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb24iLCJyZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9ucyIsImVsaW1pbmF0ZSIsImJuZlBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxtQkFBUixDQUFmO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLDBCQUFSLENBRHRCO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxtQkFBUixDQUh2QjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSxvQkFBUixDQUp4QjtBQUFBLElBS01LLHVCQUF1QkwsUUFBUSx5QkFBUixDQUw3QjtBQUFBLElBTU1NLHdCQUF3Qk4sUUFBUSwwQkFBUixDQU45QjtBQUFBLElBT01PLHVCQUF1QlAsUUFBUSx5QkFBUixDQVA3QjtBQUFBLElBUU1RLHdCQUF3QlIsUUFBUSwwQkFBUixDQVI5QjtBQUFBLElBU01TLHlCQUF5QlQsUUFBUSwyQkFBUixDQVQvQjtBQUFBLElBVU1VLDJCQUEyQlYsUUFBUSw2QkFBUixDQVZqQztBQUFBLElBV01XLDRCQUE0QlgsUUFBUSw4QkFBUixDQVhsQztBQUFBLElBWU1ZLDZCQUE2QlosUUFBUSwrQkFBUixDQVpuQztBQUFBLElBYU1hLDBCQUEwQmIsUUFBUSw0QkFBUixDQWJoQztBQUFBLElBY01jLDJCQUEyQmQsUUFBUSw2QkFBUixDQWRqQztBQUFBLElBZU1lLDJCQUEyQmYsUUFBUSw2QkFBUixDQWZqQztBQUFBLElBZ0JNZ0IsNEJBQTRCaEIsUUFBUSw4QkFBUixDQWhCbEM7QUFBQSxJQWlCTWlCLDhCQUE4QmpCLFFBQVEsZ0NBQVIsQ0FqQnBDO0FBQUEsSUFrQk1rQixpQ0FBaUNsQixRQUFRLG1DQUFSLENBbEJ2Qzs7SUFvQk1tQixTOzs7Ozs7Ozs7OzswQ0FDaUI7QUFDbkIsc0JBQU1DLGlCQUFpQixJQUFJakIsY0FBSixFQUF2QjtBQUFBLHNCQUNNa0Isa0JBQWtCLElBQUlqQixlQUFKLEVBRHhCO0FBQUEsc0JBRU1rQix1QkFBdUIsSUFBSWpCLG9CQUFKLEVBRjdCO0FBQUEsc0JBR01rQix3QkFBd0IsSUFBSWpCLHFCQUFKLEVBSDlCO0FBQUEsc0JBSU1rQix1QkFBdUIsSUFBSWpCLG9CQUFKLEVBSjdCO0FBQUEsc0JBS01rQix3QkFBd0IsSUFBSWpCLHFCQUFKLEVBTDlCO0FBQUEsc0JBTU1rQix5QkFBeUIsSUFBSWpCLHNCQUFKLEVBTi9CO0FBQUEsc0JBT01rQiwyQkFBMkIsSUFBSWpCLHdCQUFKLEVBUGpDO0FBQUEsc0JBUU1rQiw0QkFBNEIsSUFBSWpCLHlCQUFKLEVBUmxDO0FBQUEsc0JBU01rQiw2QkFBNkIsSUFBSWpCLDBCQUFKLEVBVG5DO0FBQUEsc0JBVU1rQiwwQkFBMEIsSUFBSWpCLHVCQUFKLEVBVmhDO0FBQUEsc0JBV01rQiwyQkFBMkIsSUFBSWpCLHdCQUFKLEVBWGpDO0FBQUEsc0JBWU1rQiwyQkFBMkIsSUFBSWpCLHdCQUFKLEVBWmpDO0FBQUEsc0JBYU1rQiw0QkFBNEIsSUFBSWpCLHlCQUFKLEVBYmxDO0FBQUEsc0JBY01rQiw4QkFBOEIsSUFBSWpCLDJCQUFKLEVBZHBDO0FBQUEsc0JBZU1rQixpQ0FBaUMsSUFBSWpCLDhCQUFKLEVBZnZDOztBQWlCQSxzQkFBSWtCLGNBQWMsQ0FDWlgscUJBRFksRUFFWkQsb0JBRlksRUFHWkQscUJBSFksRUFJWkQsb0JBSlksRUFLWkYsY0FMWSxFQU1aUywwQkFOWSxFQU9aSCxzQkFQWSxFQVFaQyx3QkFSWSxFQVNaQyx5QkFUWSxFQVVaUCxlQVZZLEVBV1pVLHdCQVhZLEVBWVpHLDJCQVpZLEVBYVpDLDhCQWJZLEVBY1pILHdCQWRZLEVBZVpDLHlCQWZZLEVBZ0JaSCx1QkFoQlksQ0FBbEI7O0FBbUJBTSxnQ0FBY3JDLE9BQU9zQyxTQUFQLENBQWlCRCxXQUFqQixDQUFkLENBckNtQixDQXFDMkI7O0FBRTlDQSxnQ0FBY25DLGNBQWNvQyxTQUFkLENBQXdCRCxXQUF4QixDQUFkLENBdkNtQixDQXVDa0M7O0FBRXJELHNCQUFNRSxZQUFZLElBQUluQixTQUFKLENBQWNpQixXQUFkLENBQWxCOztBQUVBLHlCQUFPRSxTQUFQO0FBQ0Q7Ozs7RUE3Q3FCcEMsWTs7QUFnRHhCcUMsT0FBT0MsT0FBUCxHQUFpQnJCLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3ljbGVzID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9jeWNsZXMnKSxcbiAgICAgIGxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9ncmFtbWFyL2xlZnRSZWN1cnNpb24nKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3BhcnQnKSxcbiAgICAgIEdyb3VwUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ncm91cCcpLFxuICAgICAgRGVmaW5pdGlvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZGVmaW5pdGlvbicpLFxuICAgICAgRGVmaW5pdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2RlZmluaXRpb25zJyksXG4gICAgICBQcm9kdWN0aW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbnMnKSxcbiAgICAgIE9wdGlvbmFsUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vb3B0aW9uYWxQYXJ0JyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vemVyb09yTW9yZVBhcnRzJyksXG4gICAgICBOb1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub1doaXRlc3BhY2VQYXJ0JyksXG4gICAgICBWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi92ZXJ0aWNhbFNwYWNlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgRW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9lbmRPZkxpbmVTeW1ib2wnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBwYXJ0UHJvZHVjdGlvbiA9IG5ldyBQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIGdyb3VwUHJvZHVjdGlvbiA9IG5ldyBHcm91cFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uUHJvZHVjdGlvbiA9IG5ldyBEZWZpbml0aW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbiA9IG5ldyBEZWZpbml0aW9uc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gbmV3IE9wdGlvbmFsUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24gPSBuZXcgT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbiA9IG5ldyBaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24gPSBuZXcgTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiA9IG5ldyBWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSBuZXcgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbiA9IG5ldyBFbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24oKTtcblxuICAgIGxldCBwcm9kdWN0aW9ucyA9IFtcbiAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24sXG4gICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uLFxuICAgICAgICAgIGRlZmluaXRpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb24sXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQcm9kdWN0aW9uLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24sXG4gICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24sXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbixcbiAgICAgICAgICBlbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uLFxuICAgICAgICAgIHZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uXG4gICAgICAgIF07XG5cbiAgICBwcm9kdWN0aW9ucyA9IGN5Y2xlcy5lbGltaW5hdGUocHJvZHVjdGlvbnMpOyAgLy8vXG5cbiAgICBwcm9kdWN0aW9ucyA9IGxlZnRSZWN1cnNpb24uZWxpbWluYXRlKHByb2R1Y3Rpb25zKTsgIC8vL1xuXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==