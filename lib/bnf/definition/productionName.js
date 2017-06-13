'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ProductionNamePart = require('../../common/part/productionName');

var ProductionNameDefinition = function (_Definition) {
  _inherits(ProductionNameDefinition, _Definition);

  function ProductionNameDefinition(productionName) {
    _classCallCheck(this, ProductionNameDefinition);

    var productionNamePart = new ProductionNamePart(productionName),
        parts = [productionNamePart];

    return _possibleConstructorReturn(this, (ProductionNameDefinition.__proto__ || Object.getPrototypeOf(ProductionNameDefinition)).call(this, parts));
  }

  return ProductionNameDefinition;
}(Definition);

module.exports = ProductionNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbiIsInByb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsa0NBQVIsQ0FEM0I7O0lBR01FLHdCOzs7QUFDSixvQ0FBWUMsY0FBWixFQUE0QjtBQUFBOztBQUMxQixRQUFNQyxxQkFBcUIsSUFBSUgsa0JBQUosQ0FBdUJFLGNBQXZCLENBQTNCO0FBQUEsUUFDTUUsUUFBUSxDQUNORCxrQkFETSxDQURkOztBQUQwQiwrSUFNcEJDLEtBTm9CO0FBTzNCOzs7RUFSb0NOLFU7O0FBV3ZDTyxPQUFPQyxPQUFQLEdBQWlCTCx3QkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZURlZmluaXRpb247XG4iXX0=