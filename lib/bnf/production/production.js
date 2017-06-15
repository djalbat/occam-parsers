'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ProductionNode = require('../node/production'),
    ProductionDefinition = require('../definition/production');

var ProductionProduction = function (_Production) {
  _inherits(ProductionProduction, _Production);

  function ProductionProduction() {
    _classCallCheck(this, ProductionProduction);

    var productionDefinition = new ProductionDefinition(),
        name = 'production',
        definitions = [productionDefinition],
        Node = ProductionNode;

    return _possibleConstructorReturn(this, (ProductionProduction.__proto__ || Object.getPrototypeOf(ProductionProduction)).call(this, name, definitions, Node));
  }

  return ProductionProduction;
}(Production);

module.exports = ProductionProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5vZGUiLCJQcm9kdWN0aW9uRGVmaW5pdGlvbiIsIlByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbkRlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsdUJBQXVCRixRQUFRLDBCQUFSLENBRjdCOztJQUlNRyxvQjs7O0FBQ0osa0NBQWM7QUFBQTs7QUFDWixRQUFNQyx1QkFBdUIsSUFBSUYsb0JBQUosRUFBN0I7QUFBQSxRQUNNRyxPQUFPLFlBRGI7QUFBQSxRQUVNQyxjQUFjLENBQ1pGLG9CQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT04sY0FMYjs7QUFEWSx1SUFRTkksSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVmdDUixVOztBQWFuQ1MsT0FBT0MsT0FBUCxHQUFpQk4sb0JBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgUHJvZHVjdGlvblByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbkRlZmluaXRpb24gPSBuZXcgUHJvZHVjdGlvbkRlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbkRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBQcm9kdWN0aW9uTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uUHJvZHVjdGlvbjtcbiJdfQ==