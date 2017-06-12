'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var ProductionNameProduction = function (_Production) {
  _inherits(ProductionNameProduction, _Production);

  function ProductionNameProduction() {
    _classCallCheck(this, ProductionNameProduction);

    var nameSignificantTokenType = 'name',
        nameSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(nameSignificantTokenType),
        name = 'productionName',
        definitions = [nameSignificantTokenTypeDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (ProductionNameProduction.__proto__ || Object.getPrototypeOf(ProductionNameProduction)).call(this, name, definitions, Node));
  }

  return ProductionNameProduction;
}(Production);

module.exports = ProductionNameProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZSIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCO0FBQUEsSUFFTUUsaUNBQWlDRixRQUFRLG9DQUFSLENBRnZDOztJQUlNRyx3Qjs7O0FBQ0osc0NBQWM7QUFBQTs7QUFDWixRQUFNQywyQkFBMkIsTUFBakM7QUFBQSxRQUNNQyxxQ0FBcUMsSUFBSUgsOEJBQUosQ0FBbUNFLHdCQUFuQyxDQUQzQztBQUFBLFFBRU1FLE9BQU8sZ0JBRmI7QUFBQSxRQUdNQyxjQUFjLENBQ1pGLGtDQURZLENBSHBCO0FBQUEsUUFNTUcsT0FBT1AsZUFOYjs7QUFEWSwrSUFTTkssSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWG9DVCxVOztBQWN2Q1UsT0FBT0MsT0FBUCxHQUFpQlAsd0JBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb25OYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSA9ICduYW1lJyxcbiAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbihuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSAncHJvZHVjdGlvbk5hbWUnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbjtcbiJdfQ==