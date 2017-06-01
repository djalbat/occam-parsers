'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonParser = require('../common/parser'),
    ProductionsProduction = require('./production/productions'),
    ProductionProduction = require('./production/production'),
    RulesProduction = require('./production/rules'),
    RuleProduction = require('./production/rule'),
    PartProduction = require('./production/part'),
    ProductionNameProduction = require('./production/productionName'),
    RegularExpressionProduction = require('./production/regularExpression');

var BNFParser = function (_CommonParser) {
  _inherits(BNFParser, _CommonParser);

  function BNFParser() {
    _classCallCheck(this, BNFParser);

    return _possibleConstructorReturn(this, (BNFParser.__proto__ || Object.getPrototypeOf(BNFParser)).apply(this, arguments));
  }

  _createClass(BNFParser, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var productionsProduction = new ProductionsProduction(),
          productionProduction = new ProductionProduction(),
          rulesProduction = new RulesProduction(),
          ruleProduction = new RuleProduction(),
          partProduction = new PartProduction(),
          productionNameProduction = new ProductionNameProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          productions = [productionsProduction, productionProduction, rulesProduction, ruleProduction, partProduction, productionNameProduction, regularExpressionProduction],
          bnfParser = new BNFParser(productions);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInJlcXVpcmUiLCJQcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJQcm9kdWN0aW9uUHJvZHVjdGlvbiIsIlJ1bGVzUHJvZHVjdGlvbiIsIlJ1bGVQcm9kdWN0aW9uIiwiUGFydFByb2R1Y3Rpb24iLCJQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24iLCJSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJCTkZQYXJzZXIiLCJwcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJwcm9kdWN0aW9uUHJvZHVjdGlvbiIsInJ1bGVzUHJvZHVjdGlvbiIsInJ1bGVQcm9kdWN0aW9uIiwicGFydFByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24iLCJyZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJwcm9kdWN0aW9ucyIsImJuZlBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxrQkFBUixDQUFyQjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSwwQkFBUixDQUQ5QjtBQUFBLElBRU1FLHVCQUF1QkYsUUFBUSx5QkFBUixDQUY3QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxvQkFBUixDQUh4QjtBQUFBLElBSU1JLGlCQUFpQkosUUFBUSxtQkFBUixDQUp2QjtBQUFBLElBS01LLGlCQUFpQkwsUUFBUSxtQkFBUixDQUx2QjtBQUFBLElBTU1NLDJCQUEyQk4sUUFBUSw2QkFBUixDQU5qQztBQUFBLElBT01PLDhCQUE4QlAsUUFBUSxnQ0FBUixDQVBwQzs7SUFTTVEsUzs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQU1DLHdCQUF3QixJQUFJUixxQkFBSixFQUE5QjtBQUFBLFVBQ01TLHVCQUF1QixJQUFJUixvQkFBSixFQUQ3QjtBQUFBLFVBRU1TLGtCQUFrQixJQUFJUixlQUFKLEVBRnhCO0FBQUEsVUFHTVMsaUJBQWlCLElBQUlSLGNBQUosRUFIdkI7QUFBQSxVQUlNUyxpQkFBaUIsSUFBSVIsY0FBSixFQUp2QjtBQUFBLFVBS01TLDJCQUEyQixJQUFJUix3QkFBSixFQUxqQztBQUFBLFVBTU1TLDhCQUE4QixJQUFJUiwyQkFBSixFQU5wQztBQUFBLFVBT01TLGNBQWMsQ0FDWlAscUJBRFksRUFFWkMsb0JBRlksRUFHWkMsZUFIWSxFQUlaQyxjQUpZLEVBS1pDLGNBTFksRUFNWkMsd0JBTlksRUFPWkMsMkJBUFksQ0FQcEI7QUFBQSxVQWdCTUUsWUFBWSxJQUFJVCxTQUFKLENBQWNRLFdBQWQsQ0FoQmxCOztBQWtCQSxhQUFPQyxTQUFQO0FBQ0Q7Ozs7RUFyQnFCbEIsWTs7QUF3QnhCbUIsT0FBT0MsT0FBUCxHQUFpQlgsU0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbnMnKSxcbiAgICAgIFByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFJ1bGVzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ydWxlcycpLFxuICAgICAgUnVsZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcnVsZScpLFxuICAgICAgUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcGFydCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcmVndWxhckV4cHJlc3Npb24nKTtcblxuY2xhc3MgQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbiA9IG5ldyBSdWxlc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBydWxlUHJvZHVjdGlvbiA9IG5ldyBSdWxlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uID0gbmV3IFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgICAgcnVsZXNQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcnVsZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==