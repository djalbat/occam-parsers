'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var ProductionDefinition = function (_Definition) {
  _inherits(ProductionDefinition, _Definition);

  function ProductionDefinition() {
    _classCallCheck(this, ProductionDefinition);

    var productionNameProductionName = 'productionName',
        separatorTerminalSymbolContent = '::=',
        definitionsProductionName = 'definitions',
        productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName),
        separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
        definitionsProductionNamePart = new ProductionNamePart(definitionsProductionName),
        parts = [productionNameProductionNamePart, separatorTerminalSymbolPart, definitionsProductionNamePart];

    return _possibleConstructorReturn(this, (ProductionDefinition.__proto__ || Object.getPrototypeOf(ProductionDefinition)).call(this, parts));
  }

  return ProductionDefinition;
}(Definition);

module.exports = ProductionDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiUHJvZHVjdGlvbkRlZmluaXRpb24iLCJwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lIiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0Iiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxrQ0FBUixDQUQzQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSxrQ0FBUixDQUYzQjs7SUFJTUcsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsK0JBQStCLGdCQUFyQztBQUFBLFFBQ01DLGlDQUFpQyxLQUR2QztBQUFBLFFBRU1DLDRCQUE0QixhQUZsQztBQUFBLFFBR01DLG1DQUFtQyxJQUFJTCxrQkFBSixDQUF1QkUsNEJBQXZCLENBSHpDO0FBQUEsUUFJTUksOEJBQThCLElBQUlQLGtCQUFKLENBQXVCSSw4QkFBdkIsQ0FKcEM7QUFBQSxRQUtNSSxnQ0FBZ0MsSUFBSVAsa0JBQUosQ0FBdUJJLHlCQUF2QixDQUx0QztBQUFBLFFBTU1JLFFBQVEsQ0FDTkgsZ0NBRE0sRUFFTkMsMkJBRk0sRUFHTkMsNkJBSE0sQ0FOZDs7QUFEWSx1SUFhTkMsS0FiTTtBQWNiOzs7RUFmZ0NYLFU7O0FBa0JuQ1ksT0FBT0MsT0FBUCxHQUFpQlQsb0JBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSA9ICdwcm9kdWN0aW9uTmFtZScsXG4gICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gJzo6PScsXG4gICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSA9ICdkZWZpbml0aW9ucycsXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQoZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbk5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25EZWZpbml0aW9uO1xuIl19