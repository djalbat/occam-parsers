'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ProductionNameNode = require('../node/productionName'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var ProductionNameProduction = function (_Production) {
  _inherits(ProductionNameProduction, _Production);

  function ProductionNameProduction() {
    _classCallCheck(this, ProductionNameProduction);

    var nameSignificantTokenType = 'name',
        nameSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(nameSignificantTokenType),
        name = 'productionName',
        definitions = [nameSignificantTokenTypeDefinition],
        Node = ProductionNameNode;

    return _possibleConstructorReturn(this, (ProductionNameProduction.__proto__ || Object.getPrototypeOf(ProductionNameProduction)).call(this, name, definitions, Node));
  }

  return ProductionNameProduction;
}(Production);

module.exports = ProductionNameProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZSIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUUsaUNBQWlDRixRQUFRLG9DQUFSLENBRnZDOztJQUlNRyx3Qjs7O0FBQ0osc0NBQWM7QUFBQTs7QUFDWixRQUFNQywyQkFBMkIsTUFBakM7QUFBQSxRQUNNQyxxQ0FBcUMsSUFBSUgsOEJBQUosQ0FBbUNFLHdCQUFuQyxDQUQzQztBQUFBLFFBRU1FLE9BQU8sZ0JBRmI7QUFBQSxRQUdNQyxjQUFjLENBQ1pGLGtDQURZLENBSHBCO0FBQUEsUUFNTUcsT0FBT1Asa0JBTmI7O0FBRFksK0lBU05LLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVhvQ1QsVTs7QUFjdkNVLE9BQU9DLE9BQVAsR0FBaUJQLHdCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSA9ICduYW1lJyxcbiAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbihuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSAncHJvZHVjdGlvbk5hbWUnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFByb2R1Y3Rpb25OYW1lTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbjtcbiJdfQ==