'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonParser = require('../common/parser'),
    ProductionsProduction = require('./production/productions'),
    ProductionProduction = require('./production/production'),
    ProductionNameProduction = require('./production/productionName'),
    RulesProduction = require('./production/rules'),
    RuleProduction = require('./production/rule'),
    PartProduction = require('./production/part');

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
          productionNameProduction = new ProductionNameProduction(),
          rulesProduction = new RulesProduction(),
          ruleProduction = new RuleProduction(),
          partProduction = new PartProduction(),
          productions = [productionsProduction, productionProduction, productionNameProduction, rulesProduction, ruleProduction, partProduction],
          bnfParser = new BNFParser(productions);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInJlcXVpcmUiLCJQcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJQcm9kdWN0aW9uUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIlJ1bGVzUHJvZHVjdGlvbiIsIlJ1bGVQcm9kdWN0aW9uIiwiUGFydFByb2R1Y3Rpb24iLCJCTkZQYXJzZXIiLCJwcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJwcm9kdWN0aW9uUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsInJ1bGVzUHJvZHVjdGlvbiIsInJ1bGVQcm9kdWN0aW9uIiwicGFydFByb2R1Y3Rpb24iLCJwcm9kdWN0aW9ucyIsImJuZlBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxrQkFBUixDQUFyQjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSwwQkFBUixDQUQ5QjtBQUFBLElBRU1FLHVCQUF1QkYsUUFBUSx5QkFBUixDQUY3QjtBQUFBLElBR01HLDJCQUEyQkgsUUFBUSw2QkFBUixDQUhqQztBQUFBLElBSU1JLGtCQUFrQkosUUFBUSxvQkFBUixDQUp4QjtBQUFBLElBS01LLGlCQUFpQkwsUUFBUSxtQkFBUixDQUx2QjtBQUFBLElBTU1NLGlCQUFpQk4sUUFBUSxtQkFBUixDQU52Qjs7SUFRTU8sUzs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQU1DLHdCQUF3QixJQUFJUCxxQkFBSixFQUE5QjtBQUFBLFVBQ01RLHVCQUF1QixJQUFJUCxvQkFBSixFQUQ3QjtBQUFBLFVBRU1RLDJCQUEyQixJQUFJUCx3QkFBSixFQUZqQztBQUFBLFVBR01RLGtCQUFrQixJQUFJUCxlQUFKLEVBSHhCO0FBQUEsVUFJTVEsaUJBQWlCLElBQUlQLGNBQUosRUFKdkI7QUFBQSxVQUtNUSxpQkFBaUIsSUFBSVAsY0FBSixFQUx2QjtBQUFBLFVBTU1RLGNBQWMsQ0FDWk4scUJBRFksRUFFWkMsb0JBRlksRUFHWkMsd0JBSFksRUFJWkMsZUFKWSxFQUtaQyxjQUxZLEVBTVpDLGNBTlksQ0FOcEI7QUFBQSxVQWNNRSxZQUFZLElBQUlSLFNBQUosQ0FBY08sV0FBZCxDQWRsQjs7QUFnQkEsYUFBT0MsU0FBUDtBQUNEOzs7O0VBbkJxQmhCLFk7O0FBc0J4QmlCLE9BQU9DLE9BQVAsR0FBaUJWLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25zJyksXG4gICAgICBQcm9kdWN0aW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFJ1bGVzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ydWxlcycpLFxuICAgICAgUnVsZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcnVsZScpLFxuICAgICAgUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcGFydCcpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbiA9IG5ldyBSdWxlc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBydWxlUHJvZHVjdGlvbiA9IG5ldyBSdWxlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uID0gbmV3IFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbnMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcGFydFByb2R1Y3Rpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG4iXX0=