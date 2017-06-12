'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonParser = require('../common/parser'),
    PartProduction = require('./production/part'),
    GroupProduction = require('./production/group'),
    EndOfLineProduction = require('./production/endOfLine'),
    DefinitionProduction = require('./production/definition'),
    DefinitionsProduction = require('./production/definitions'),
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
          groupProduction = new GroupProduction(),
          endOfLineProduction = new EndOfLineProduction(),
          definitionProduction = new DefinitionProduction(),
          definitionsProduction = new DefinitionsProduction(),
          productionProduction = new ProductionProduction(),
          productionsProduction = new ProductionsProduction(),
          optionalPartProduction = new OptionalPartProduction(),
          noWhitespaceProduction = new NoWhitespaceProduction(),
          productionNameProduction = new ProductionNameProduction(),
          terminalSymbolProduction = new TerminalSymbolProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          significantTokenTypeProduction = new SignificantTokenTypeProduction(),
          productions = [productionsProduction, productionProduction, definitionsProduction, definitionProduction, partProduction, groupProduction, optionalPartProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, noWhitespaceProduction, endOfLineProduction],
          bnfParser = new BNFParser(productions);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInJlcXVpcmUiLCJQYXJ0UHJvZHVjdGlvbiIsIkdyb3VwUHJvZHVjdGlvbiIsIkVuZE9mTGluZVByb2R1Y3Rpb24iLCJEZWZpbml0aW9uUHJvZHVjdGlvbiIsIkRlZmluaXRpb25zUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwiT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIk5vV2hpdGVzcGFjZVByb2R1Y3Rpb24iLCJQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24iLCJUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24iLCJSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24iLCJCTkZQYXJzZXIiLCJwYXJ0UHJvZHVjdGlvbiIsImdyb3VwUHJvZHVjdGlvbiIsImVuZE9mTGluZVByb2R1Y3Rpb24iLCJkZWZpbml0aW9uUHJvZHVjdGlvbiIsImRlZmluaXRpb25zUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwib3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIm5vV2hpdGVzcGFjZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24iLCJ0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24iLCJyZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24iLCJwcm9kdWN0aW9ucyIsImJuZlBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxrQkFBUixDQUFyQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxtQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxvQkFBUixDQUZ4QjtBQUFBLElBR01HLHNCQUFzQkgsUUFBUSx3QkFBUixDQUg1QjtBQUFBLElBSU1JLHVCQUF1QkosUUFBUSx5QkFBUixDQUo3QjtBQUFBLElBS01LLHdCQUF3QkwsUUFBUSwwQkFBUixDQUw5QjtBQUFBLElBTU1NLHVCQUF1Qk4sUUFBUSx5QkFBUixDQU43QjtBQUFBLElBT01PLHdCQUF3QlAsUUFBUSwwQkFBUixDQVA5QjtBQUFBLElBUU1RLHlCQUF5QlIsUUFBUSwyQkFBUixDQVIvQjtBQUFBLElBU01TLHlCQUF5QlQsUUFBUSwyQkFBUixDQVQvQjtBQUFBLElBVU1VLDJCQUEyQlYsUUFBUSw2QkFBUixDQVZqQztBQUFBLElBV01XLDJCQUEyQlgsUUFBUSw2QkFBUixDQVhqQztBQUFBLElBWU1ZLDhCQUE4QlosUUFBUSxnQ0FBUixDQVpwQztBQUFBLElBYU1hLGlDQUFpQ2IsUUFBUSxtQ0FBUixDQWJ2Qzs7SUFlTWMsUzs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQU1DLGlCQUFpQixJQUFJZCxjQUFKLEVBQXZCO0FBQUEsVUFDTWUsa0JBQWtCLElBQUlkLGVBQUosRUFEeEI7QUFBQSxVQUVNZSxzQkFBc0IsSUFBSWQsbUJBQUosRUFGNUI7QUFBQSxVQUdNZSx1QkFBdUIsSUFBSWQsb0JBQUosRUFIN0I7QUFBQSxVQUlNZSx3QkFBd0IsSUFBSWQscUJBQUosRUFKOUI7QUFBQSxVQUtNZSx1QkFBdUIsSUFBSWQsb0JBQUosRUFMN0I7QUFBQSxVQU1NZSx3QkFBd0IsSUFBSWQscUJBQUosRUFOOUI7QUFBQSxVQU9NZSx5QkFBeUIsSUFBSWQsc0JBQUosRUFQL0I7QUFBQSxVQVFNZSx5QkFBeUIsSUFBSWQsc0JBQUosRUFSL0I7QUFBQSxVQVNNZSwyQkFBMkIsSUFBSWQsd0JBQUosRUFUakM7QUFBQSxVQVVNZSwyQkFBMkIsSUFBSWQsd0JBQUosRUFWakM7QUFBQSxVQVdNZSw4QkFBOEIsSUFBSWQsMkJBQUosRUFYcEM7QUFBQSxVQVlNZSxpQ0FBaUMsSUFBSWQsOEJBQUosRUFadkM7QUFBQSxVQWFNZSxjQUFjLENBQ1pQLHFCQURZLEVBRVpELG9CQUZZLEVBR1pELHFCQUhZLEVBSVpELG9CQUpZLEVBS1pILGNBTFksRUFNWkMsZUFOWSxFQU9aTSxzQkFQWSxFQVFaRSx3QkFSWSxFQVNaRSwyQkFUWSxFQVVaQyw4QkFWWSxFQVdaRix3QkFYWSxFQVlaRixzQkFaWSxFQWFaTixtQkFiWSxDQWJwQjtBQUFBLFVBNEJNWSxZQUFZLElBQUlmLFNBQUosQ0FBY2MsV0FBZCxDQTVCbEI7O0FBOEJBLGFBQU9DLFNBQVA7QUFDRDs7OztFQWpDcUI5QixZOztBQW9DeEIrQixPQUFPQyxPQUFQLEdBQWlCakIsU0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wYXJ0JyksXG4gICAgICBHcm91cFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZ3JvdXAnKSxcbiAgICAgIEVuZE9mTGluZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZW5kT2ZMaW5lJyksXG4gICAgICBEZWZpbml0aW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZGVmaW5pdGlvbnMnKSxcbiAgICAgIFByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9ucycpLFxuICAgICAgT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9vcHRpb25hbFBhcnQnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9XaGl0ZXNwYWNlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRQcm9kdWN0aW9uID0gbmV3IFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uID0gbmV3IEdyb3VwUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb24gPSBuZXcgRW5kT2ZMaW5lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25Qcm9kdWN0aW9uID0gbmV3IERlZmluaXRpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uID0gbmV3IERlZmluaXRpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb24gPSBuZXcgT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb24gPSBuZXcgTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSBuZXcgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uLFxuICAgICAgICAgICAgZGVmaW5pdGlvblByb2R1Y3Rpb24sXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICAgIGdyb3VwUHJvZHVjdGlvbixcbiAgICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb24sXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24sXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24sXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==