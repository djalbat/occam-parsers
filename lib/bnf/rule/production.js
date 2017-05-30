'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    EndOfLinePart = require('../part/endOfLine'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts');

var ProductionRule = function (_Rule) {
  _inherits(ProductionRule, _Rule);

  function ProductionRule() {
    _classCallCheck(this, ProductionRule);

    var terminalPart = null,
        noWhitespace = false,
        productionNameProductionName = 'productionName',
        productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName, noWhitespace),
        separatorSymbol = '::=',
        separatorTerminalSymbolPart = new TerminalSymbolPart(separatorSymbol, noWhitespace),
        ruleProductionName = 'rule',
        oneOrMoreRuleProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, ruleProductionName, noWhitespace),
        endOfLinePart = new EndOfLinePart(),
        parts = [productionNameProductionNamePart, separatorTerminalSymbolPart, oneOrMoreRuleProductionNamePartsPart, endOfLinePart];

    return _possibleConstructorReturn(this, (ProductionRule.__proto__ || Object.getPrototypeOf(ProductionRule)).call(this, parts));
  }

  return ProductionRule;
}(Rule);

module.exports = ProductionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiRW5kT2ZMaW5lUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlByb2R1Y3Rpb25SdWxlIiwidGVybWluYWxQYXJ0Iiwibm9XaGl0ZXNwYWNlIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0Iiwic2VwYXJhdG9yU3ltYm9sIiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwicnVsZVByb2R1Y3Rpb25OYW1lIiwib25lT3JNb3JlUnVsZVByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0IiwiZW5kT2ZMaW5lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsd0JBQVIsQ0FIM0I7QUFBQSxJQUlNSSxxQkFBcUJKLFFBQVEsd0JBQVIsQ0FKM0I7O0lBTU1LLGM7OztBQUNKLDRCQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxJQUFyQjtBQUFBLFFBQ01DLGVBQWUsS0FEckI7QUFBQSxRQUVNQywrQkFBK0IsZ0JBRnJDO0FBQUEsUUFHTUMsbUNBQW1DLElBQUlOLGtCQUFKLENBQXVCSyw0QkFBdkIsRUFBcURELFlBQXJELENBSHpDO0FBQUEsUUFJTUcsa0JBQWtCLEtBSnhCO0FBQUEsUUFLTUMsOEJBQThCLElBQUlULGtCQUFKLENBQXVCUSxlQUF2QixFQUF3Q0gsWUFBeEMsQ0FMcEM7QUFBQSxRQU1NSyxxQkFBcUIsTUFOM0I7QUFBQSxRQU9NQyx1Q0FBdUMsSUFBSVQsa0JBQUosQ0FBdUJFLFlBQXZCLEVBQXFDTSxrQkFBckMsRUFBeURMLFlBQXpELENBUDdDO0FBQUEsUUFRTU8sZ0JBQWdCLElBQUliLGFBQUosRUFSdEI7QUFBQSxRQVNNYyxRQUFRLENBQ05OLGdDQURNLEVBRU5FLDJCQUZNLEVBR05FLG9DQUhNLEVBSU5DLGFBSk0sQ0FUZDs7QUFEWSwySEFpQk5DLEtBakJNO0FBa0JiOzs7RUFuQjBCaEIsSTs7QUFzQjdCaUIsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIEVuZE9mTGluZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L2VuZE9mTGluZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9vbmVPck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBQcm9kdWN0aW9uUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBudWxsLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUgPSAncHJvZHVjdGlvbk5hbWUnLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNlcGFyYXRvclN5bWJvbCA9ICc6Oj0nLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yU3ltYm9sLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uTmFtZSA9ICdydWxlJyxcbiAgICAgICAgICBvbmVPck1vcmVSdWxlUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHRlcm1pbmFsUGFydCwgcnVsZVByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGVuZE9mTGluZVBhcnQgPSBuZXcgRW5kT2ZMaW5lUGFydCgpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBvbmVPck1vcmVSdWxlUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQsXG4gICAgICAgICAgICBlbmRPZkxpbmVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25SdWxlO1xuIl19