'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OneOrMorePartsPart = require('../../common/part/oneOrMoreParts');

var ProductionsDefinition = function (_Definition) {
  _inherits(ProductionsDefinition, _Definition);

  function ProductionsDefinition() {
    _classCallCheck(this, ProductionsDefinition);

    var terminalPart = null,
        noWhitespace = false,
        productionProductionName = 'production',
        oneOrMoreProductionProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, productionProductionName, noWhitespace),
        parts = [oneOrMoreProductionProductionNamePartsPart];

    return _possibleConstructorReturn(this, (ProductionsDefinition.__proto__ || Object.getPrototypeOf(ProductionsDefinition)).call(this, parts));
  }

  return ProductionsDefinition;
}(Definition);

module.exports = ProductionsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9kZWZpbml0aW9uL3Byb2R1Y3Rpb25zLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiUHJvZHVjdGlvbnNEZWZpbml0aW9uIiwidGVybWluYWxQYXJ0Iiwibm9XaGl0ZXNwYWNlIiwicHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lIiwib25lT3JNb3JlUHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsa0NBQVIsQ0FEM0I7O0lBR01FLHFCOzs7QUFDSixtQ0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsSUFBckI7QUFBQSxRQUNNQyxlQUFlLEtBRHJCO0FBQUEsUUFFTUMsMkJBQTJCLFlBRmpDO0FBQUEsUUFHTUMsNkNBQTZDLElBQUlMLGtCQUFKLENBQXVCRSxZQUF2QixFQUFxQ0Usd0JBQXJDLEVBQStERCxZQUEvRCxDQUhuRDtBQUFBLFFBSU1HLFFBQVEsQ0FDTkQsMENBRE0sQ0FKZDs7QUFEWSx5SUFTTkMsS0FUTTtBQVViOzs7RUFYaUNSLFU7O0FBY3BDUyxPQUFPQyxPQUFQLEdBQWlCUCxxQkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9vbmVPck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBQcm9kdWN0aW9uc0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gbnVsbCxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lID0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgIG9uZU9yTW9yZVByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQodGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVQcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbnNEZWZpbml0aW9uO1xuIl19