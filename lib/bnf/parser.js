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
    OptionalPartProduction = require('./production/optionalPart'),
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
          optionalPartProduction = new OptionalPartProduction(),
          noWhitespaceProduction = new NoWhitespaceProduction(),
          productionNameProduction = new ProductionNameProduction(),
          terminalSymbolProduction = new TerminalSymbolProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          significantTokenTypeProduction = new SignificantTokenTypeProduction(),
          productions = [productionsProduction, productionProduction, rulesProduction, ruleProduction, partProduction, groupProduction, optionalPartProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, noWhitespaceProduction, endOfLineProduction],
          bnfParser = new BNFParser(productions);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInJlcXVpcmUiLCJQYXJ0UHJvZHVjdGlvbiIsIlJ1bGVQcm9kdWN0aW9uIiwiUnVsZXNQcm9kdWN0aW9uIiwiR3JvdXBQcm9kdWN0aW9uIiwiRW5kT2ZMaW5lUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwiT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIk5vV2hpdGVzcGFjZVByb2R1Y3Rpb24iLCJQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24iLCJUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24iLCJSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24iLCJCTkZQYXJzZXIiLCJwYXJ0UHJvZHVjdGlvbiIsInJ1bGVQcm9kdWN0aW9uIiwicnVsZXNQcm9kdWN0aW9uIiwiZ3JvdXBQcm9kdWN0aW9uIiwiZW5kT2ZMaW5lUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwib3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIm5vV2hpdGVzcGFjZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24iLCJ0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24iLCJyZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9ucyIsImJuZlBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxrQkFBUixDQUFyQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxtQkFBUixDQUR2QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxtQkFBUixDQUZ2QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxvQkFBUixDQUh4QjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSxvQkFBUixDQUp4QjtBQUFBLElBS01LLHNCQUFzQkwsUUFBUSx3QkFBUixDQUw1QjtBQUFBLElBTU1NLHVCQUF1Qk4sUUFBUSx5QkFBUixDQU43QjtBQUFBLElBT01PLHdCQUF3QlAsUUFBUSwwQkFBUixDQVA5QjtBQUFBLElBUU1RLHlCQUF5QlIsUUFBUSwyQkFBUixDQVIvQjtBQUFBLElBU01TLHlCQUF5QlQsUUFBUSwyQkFBUixDQVQvQjtBQUFBLElBVU1VLDJCQUEyQlYsUUFBUSw2QkFBUixDQVZqQztBQUFBLElBV01XLDJCQUEyQlgsUUFBUSw2QkFBUixDQVhqQztBQUFBLElBWU1ZLDhCQUE4QlosUUFBUSxnQ0FBUixDQVpwQztBQUFBLElBYU1hLGlDQUFpQ2IsUUFBUSxtQ0FBUixDQWJ2Qzs7SUFlTWMsUzs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQU1DLGlCQUFpQixJQUFJZCxjQUFKLEVBQXZCO0FBQUEsVUFDTWUsaUJBQWlCLElBQUlkLGNBQUosRUFEdkI7QUFBQSxVQUVNZSxrQkFBa0IsSUFBSWQsZUFBSixFQUZ4QjtBQUFBLFVBR01lLGtCQUFrQixJQUFJZCxlQUFKLEVBSHhCO0FBQUEsVUFJTWUsc0JBQXNCLElBQUlkLG1CQUFKLEVBSjVCO0FBQUEsVUFLTWUsdUJBQXVCLElBQUlkLG9CQUFKLEVBTDdCO0FBQUEsVUFNTWUsd0JBQXdCLElBQUlkLHFCQUFKLEVBTjlCO0FBQUEsVUFPTWUseUJBQXlCLElBQUlkLHNCQUFKLEVBUC9CO0FBQUEsVUFRTWUseUJBQXlCLElBQUlkLHNCQUFKLEVBUi9CO0FBQUEsVUFTTWUsMkJBQTJCLElBQUlkLHdCQUFKLEVBVGpDO0FBQUEsVUFVTWUsMkJBQTJCLElBQUlkLHdCQUFKLEVBVmpDO0FBQUEsVUFXTWUsOEJBQThCLElBQUlkLDJCQUFKLEVBWHBDO0FBQUEsVUFZTWUsaUNBQWlDLElBQUlkLDhCQUFKLEVBWnZDO0FBQUEsVUFhTWUsY0FBYyxDQUNaUCxxQkFEWSxFQUVaRCxvQkFGWSxFQUdaSCxlQUhZLEVBSVpELGNBSlksRUFLWkQsY0FMWSxFQU1aRyxlQU5ZLEVBT1pJLHNCQVBZLEVBUVpFLHdCQVJZLEVBU1pFLDJCQVRZLEVBVVpDLDhCQVZZLEVBV1pGLHdCQVhZLEVBWVpGLHNCQVpZLEVBYVpKLG1CQWJZLENBYnBCO0FBQUEsVUE0Qk1VLFlBQVksSUFBSWYsU0FBSixDQUFjYyxXQUFkLENBNUJsQjs7QUE4QkEsYUFBT0MsU0FBUDtBQUNEOzs7O0VBakNxQjlCLFk7O0FBb0N4QitCLE9BQU9DLE9BQVAsR0FBaUJqQixTQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3BhcnQnKSxcbiAgICAgIFJ1bGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3J1bGUnKSxcbiAgICAgIFJ1bGVzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ydWxlcycpLFxuICAgICAgR3JvdXBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2dyb3VwJyksXG4gICAgICBFbmRPZkxpbmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2VuZE9mTGluZScpLFxuICAgICAgUHJvZHVjdGlvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25zJyksXG4gICAgICBPcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydCcpLFxuICAgICAgTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub1doaXRlc3BhY2UnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb24gPSBuZXcgUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBydWxlUHJvZHVjdGlvbiA9IG5ldyBSdWxlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbiA9IG5ldyBSdWxlc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBncm91cFByb2R1Y3Rpb24gPSBuZXcgR3JvdXBQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvbiA9IG5ldyBFbmRPZkxpbmVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbnNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiA9IG5ldyBPcHRpb25hbFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiA9IG5ldyBOb1doaXRlc3BhY2VQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSBuZXcgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24sXG4gICAgICAgICAgICBydWxlc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgICBydWxlUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uLFxuICAgICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbixcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIl19