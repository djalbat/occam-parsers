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
                      verticalSpaceProduction = new VerticalSpaceProduction(),
                      productionNameProduction = new ProductionNameProduction(),
                      terminalSymbolProduction = new TerminalSymbolProduction(),
                      regularExpressionProduction = new RegularExpressionProduction(),
                      significantTokenTypeProduction = new SignificantTokenTypeProduction();

                  var productions = [productionsProduction, productionProduction, definitionsProduction, definitionProduction, partProduction, optionalPartProduction, oneOrMorePartsProduction, zeroOrMorePartsProduction, groupProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, verticalSpaceProduction];

                  productions = cycles.eliminate(productions); ///

                  productions = leftRecursion.eliminate(productions); ///

                  var bnfParser = new BNFParser(productions);

                  return bnfParser;
            }
      }]);

      return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImN5Y2xlcyIsInJlcXVpcmUiLCJsZWZ0UmVjdXJzaW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFByb2R1Y3Rpb24iLCJHcm91cFByb2R1Y3Rpb24iLCJEZWZpbml0aW9uUHJvZHVjdGlvbiIsIkRlZmluaXRpb25zUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwiT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIk9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiIsIlplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsIlJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiIsIlNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiIsIkJORlBhcnNlciIsInBhcnRQcm9kdWN0aW9uIiwiZ3JvdXBQcm9kdWN0aW9uIiwiZGVmaW5pdGlvblByb2R1Y3Rpb24iLCJkZWZpbml0aW9uc1Byb2R1Y3Rpb24iLCJwcm9kdWN0aW9uUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25zUHJvZHVjdGlvbiIsIm9wdGlvbmFsUGFydFByb2R1Y3Rpb24iLCJvbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJ6ZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uIiwidmVydGljYWxTcGFjZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24iLCJ0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24iLCJyZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9ucyIsImVsaW1pbmF0ZSIsImJuZlBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxtQkFBUixDQUFmO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLDBCQUFSLENBRHRCO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxtQkFBUixDQUh2QjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSxvQkFBUixDQUp4QjtBQUFBLElBS01LLHVCQUF1QkwsUUFBUSx5QkFBUixDQUw3QjtBQUFBLElBTU1NLHdCQUF3Qk4sUUFBUSwwQkFBUixDQU45QjtBQUFBLElBT01PLHVCQUF1QlAsUUFBUSx5QkFBUixDQVA3QjtBQUFBLElBUU1RLHdCQUF3QlIsUUFBUSwwQkFBUixDQVI5QjtBQUFBLElBU01TLHlCQUF5QlQsUUFBUSwyQkFBUixDQVQvQjtBQUFBLElBVU1VLDJCQUEyQlYsUUFBUSw2QkFBUixDQVZqQztBQUFBLElBV01XLDRCQUE0QlgsUUFBUSw4QkFBUixDQVhsQztBQUFBLElBWU1ZLDBCQUEwQlosUUFBUSw0QkFBUixDQVpoQztBQUFBLElBYU1hLDJCQUEyQmIsUUFBUSw2QkFBUixDQWJqQztBQUFBLElBY01jLDJCQUEyQmQsUUFBUSw2QkFBUixDQWRqQztBQUFBLElBZU1lLDhCQUE4QmYsUUFBUSxnQ0FBUixDQWZwQztBQUFBLElBZ0JNZ0IsaUNBQWlDaEIsUUFBUSxtQ0FBUixDQWhCdkM7O0lBa0JNaUIsUzs7Ozs7Ozs7Ozs7MENBQ2lCO0FBQ25CLHNCQUFNQyxpQkFBaUIsSUFBSWYsY0FBSixFQUF2QjtBQUFBLHNCQUNNZ0Isa0JBQWtCLElBQUlmLGVBQUosRUFEeEI7QUFBQSxzQkFFTWdCLHVCQUF1QixJQUFJZixvQkFBSixFQUY3QjtBQUFBLHNCQUdNZ0Isd0JBQXdCLElBQUlmLHFCQUFKLEVBSDlCO0FBQUEsc0JBSU1nQix1QkFBdUIsSUFBSWYsb0JBQUosRUFKN0I7QUFBQSxzQkFLTWdCLHdCQUF3QixJQUFJZixxQkFBSixFQUw5QjtBQUFBLHNCQU1NZ0IseUJBQXlCLElBQUlmLHNCQUFKLEVBTi9CO0FBQUEsc0JBT01nQiwyQkFBMkIsSUFBSWYsd0JBQUosRUFQakM7QUFBQSxzQkFRTWdCLDRCQUE0QixJQUFJZix5QkFBSixFQVJsQztBQUFBLHNCQVNNZ0IsMEJBQTBCLElBQUlmLHVCQUFKLEVBVGhDO0FBQUEsc0JBVU1nQiwyQkFBMkIsSUFBSWYsd0JBQUosRUFWakM7QUFBQSxzQkFXTWdCLDJCQUEyQixJQUFJZix3QkFBSixFQVhqQztBQUFBLHNCQVlNZ0IsOEJBQThCLElBQUlmLDJCQUFKLEVBWnBDO0FBQUEsc0JBYU1nQixpQ0FBaUMsSUFBSWYsOEJBQUosRUFidkM7O0FBZUEsc0JBQUlnQixjQUFjLENBQ1pULHFCQURZLEVBRVpELG9CQUZZLEVBR1pELHFCQUhZLEVBSVpELG9CQUpZLEVBS1pGLGNBTFksRUFNWk0sc0JBTlksRUFPWkMsd0JBUFksRUFRWkMseUJBUlksRUFTWlAsZUFUWSxFQVVaUyx3QkFWWSxFQVdaRSwyQkFYWSxFQVlaQyw4QkFaWSxFQWFaRix3QkFiWSxFQWNaRix1QkFkWSxDQUFsQjs7QUFpQkFLLGdDQUFjakMsT0FBT2tDLFNBQVAsQ0FBaUJELFdBQWpCLENBQWQsQ0FqQ21CLENBaUMyQjs7QUFFOUNBLGdDQUFjL0IsY0FBY2dDLFNBQWQsQ0FBd0JELFdBQXhCLENBQWQsQ0FuQ21CLENBbUNrQzs7QUFFckQsc0JBQU1FLFlBQVksSUFBSWpCLFNBQUosQ0FBY2UsV0FBZCxDQUFsQjs7QUFFQSx5QkFBT0UsU0FBUDtBQUNEOzs7O0VBekNxQmhDLFk7O0FBNEN4QmlDLE9BQU9DLE9BQVAsR0FBaUJuQixTQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5Y2xlcyA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvY3ljbGVzJyksXG4gICAgICBsZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9sZWZ0UmVjdXJzaW9uJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wYXJ0JyksXG4gICAgICBHcm91cFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZ3JvdXAnKSxcbiAgICAgIERlZmluaXRpb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2RlZmluaXRpb24nKSxcbiAgICAgIERlZmluaXRpb25zUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9kZWZpbml0aW9ucycpLFxuICAgICAgUHJvZHVjdGlvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25zJyksXG4gICAgICBPcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgVmVydGljYWxTcGFjZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdmVydGljYWxTcGFjZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBwYXJ0UHJvZHVjdGlvbiA9IG5ldyBQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIGdyb3VwUHJvZHVjdGlvbiA9IG5ldyBHcm91cFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uUHJvZHVjdGlvbiA9IG5ldyBEZWZpbml0aW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbiA9IG5ldyBEZWZpbml0aW9uc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gbmV3IE9wdGlvbmFsUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1Byb2R1Y3Rpb24gPSBuZXcgT25lT3JNb3JlUGFydHNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbiA9IG5ldyBaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgdmVydGljYWxTcGFjZVByb2R1Y3Rpb24gPSBuZXcgVmVydGljYWxTcGFjZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uKCk7XG5cbiAgICBsZXQgcHJvZHVjdGlvbnMgPSBbXG4gICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICBkZWZpbml0aW9uUHJvZHVjdGlvbixcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbixcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uLFxuICAgICAgICAgIGdyb3VwUHJvZHVjdGlvbixcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24sXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbixcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24sXG4gICAgICAgICAgdmVydGljYWxTcGFjZVByb2R1Y3Rpb25cbiAgICAgICAgXTtcblxuICAgIHByb2R1Y3Rpb25zID0gY3ljbGVzLmVsaW1pbmF0ZShwcm9kdWN0aW9ucyk7ICAvLy9cblxuICAgIHByb2R1Y3Rpb25zID0gbGVmdFJlY3Vyc2lvbi5lbGltaW5hdGUocHJvZHVjdGlvbnMpOyAgLy8vXG5cbiAgICBjb25zdCBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIl19