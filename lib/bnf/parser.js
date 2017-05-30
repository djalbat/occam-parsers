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
    OrThenRuleProduction = require('./production/orThenRule'),
    RuleProduction = require('./production/rule'),
    PartsProduction = require('./production/parts'),
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
          orThenRuleProduction = new OrThenRuleProduction(),
          ruleProduction = new RuleProduction(),
          partsProduction = new PartsProduction(),
          partProduction = new PartProduction(),
          productions = [productionsProduction, productionProduction, productionNameProduction, rulesProduction, orThenRuleProduction, ruleProduction, partsProduction, partProduction],
          bnfParser = new BNFParser(productions);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInJlcXVpcmUiLCJQcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJQcm9kdWN0aW9uUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIlJ1bGVzUHJvZHVjdGlvbiIsIk9yVGhlblJ1bGVQcm9kdWN0aW9uIiwiUnVsZVByb2R1Y3Rpb24iLCJQYXJ0c1Byb2R1Y3Rpb24iLCJQYXJ0UHJvZHVjdGlvbiIsIkJORlBhcnNlciIsInByb2R1Y3Rpb25zUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwicnVsZXNQcm9kdWN0aW9uIiwib3JUaGVuUnVsZVByb2R1Y3Rpb24iLCJydWxlUHJvZHVjdGlvbiIsInBhcnRzUHJvZHVjdGlvbiIsInBhcnRQcm9kdWN0aW9uIiwicHJvZHVjdGlvbnMiLCJibmZQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsa0JBQVIsQ0FBckI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsMEJBQVIsQ0FEOUI7QUFBQSxJQUVNRSx1QkFBdUJGLFFBQVEseUJBQVIsQ0FGN0I7QUFBQSxJQUdNRywyQkFBMkJILFFBQVEsNkJBQVIsQ0FIakM7QUFBQSxJQUlNSSxrQkFBa0JKLFFBQVEsb0JBQVIsQ0FKeEI7QUFBQSxJQUtNSyx1QkFBdUJMLFFBQVEseUJBQVIsQ0FMN0I7QUFBQSxJQU1NTSxpQkFBaUJOLFFBQVEsbUJBQVIsQ0FOdkI7QUFBQSxJQU9NTyxrQkFBa0JQLFFBQVEsb0JBQVIsQ0FQeEI7QUFBQSxJQVFNUSxpQkFBaUJSLFFBQVEsbUJBQVIsQ0FSdkI7O0lBVU1TLFM7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyx3QkFBd0IsSUFBSVQscUJBQUosRUFBOUI7QUFBQSxVQUNNVSx1QkFBdUIsSUFBSVQsb0JBQUosRUFEN0I7QUFBQSxVQUVNVSwyQkFBMkIsSUFBSVQsd0JBQUosRUFGakM7QUFBQSxVQUdNVSxrQkFBa0IsSUFBSVQsZUFBSixFQUh4QjtBQUFBLFVBSU1VLHVCQUF1QixJQUFJVCxvQkFBSixFQUo3QjtBQUFBLFVBS01VLGlCQUFpQixJQUFJVCxjQUFKLEVBTHZCO0FBQUEsVUFNTVUsa0JBQWtCLElBQUlULGVBQUosRUFOeEI7QUFBQSxVQU9NVSxpQkFBaUIsSUFBSVQsY0FBSixFQVB2QjtBQUFBLFVBUU1VLGNBQWMsQ0FDWlIscUJBRFksRUFFWkMsb0JBRlksRUFHWkMsd0JBSFksRUFJWkMsZUFKWSxFQUtaQyxvQkFMWSxFQU1aQyxjQU5ZLEVBT1pDLGVBUFksRUFRWkMsY0FSWSxDQVJwQjtBQUFBLFVBa0JNRSxZQUFZLElBQUlWLFNBQUosQ0FBY1MsV0FBZCxDQWxCbEI7O0FBb0JBLGFBQU9DLFNBQVA7QUFDRDs7OztFQXZCcUJwQixZOztBQTBCeEJxQixPQUFPQyxPQUFQLEdBQWlCWixTQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9ucycpLFxuICAgICAgUHJvZHVjdGlvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBSdWxlc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcnVsZXMnKSxcbiAgICAgIE9yVGhlblJ1bGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29yVGhlblJ1bGUnKSxcbiAgICAgIFJ1bGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3J1bGUnKSxcbiAgICAgIFBhcnRzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wYXJ0cycpLFxuICAgICAgUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcGFydCcpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbiA9IG5ldyBSdWxlc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvclRoZW5SdWxlUHJvZHVjdGlvbiA9IG5ldyBPclRoZW5SdWxlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uID0gbmV3IFJ1bGVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcGFydHNQcm9kdWN0aW9uID0gbmV3IFBhcnRzUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uID0gbmV3IFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbnMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbixcbiAgICAgICAgICAgIG9yVGhlblJ1bGVQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcnVsZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICBwYXJ0c1Byb2R1Y3Rpb24sXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==