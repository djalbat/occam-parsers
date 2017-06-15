'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    SignificantTokenTypeNode = require('../node/significantTokenType'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var SignificantTokenTypeProduction = function (_Production) {
  _inherits(SignificantTokenTypeProduction, _Production);

  function SignificantTokenTypeProduction() {
    _classCallCheck(this, SignificantTokenTypeProduction);

    var typeSignificantTokenType = 'type',
        typeSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(typeSignificantTokenType),
        name = 'significantTokenType',
        definitions = [typeSignificantTokenTypeDefinition],
        Node = SignificantTokenTypeNode;

    return _possibleConstructorReturn(this, (SignificantTokenTypeProduction.__proto__ || Object.getPrototypeOf(SignificantTokenTypeProduction)).call(this, name, definitions, Node));
  }

  return SignificantTokenTypeProduction;
}(Production);

module.exports = SignificantTokenTypeProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIlNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiIsInR5cGVTaWduaWZpY2FudFRva2VuVHlwZSIsInR5cGVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsMkJBQTJCRCxRQUFRLDhCQUFSLENBRGpDO0FBQUEsSUFFTUUsaUNBQWlDRixRQUFRLG9DQUFSLENBRnZDOztJQUlNRyw4Qjs7O0FBQ0osNENBQWM7QUFBQTs7QUFDWixRQUFNQywyQkFBMkIsTUFBakM7QUFBQSxRQUNNQyxxQ0FBcUMsSUFBSUgsOEJBQUosQ0FBbUNFLHdCQUFuQyxDQUQzQztBQUFBLFFBRU1FLE9BQU8sc0JBRmI7QUFBQSxRQUdNQyxjQUFjLENBQ1pGLGtDQURZLENBSHBCO0FBQUEsUUFNTUcsT0FBT1Asd0JBTmI7O0FBRFksMkpBU05LLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVgwQ1QsVTs7QUFjN0NVLE9BQU9DLE9BQVAsR0FBaUJQLDhCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudFRva2VuVHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvc2lnbmlmaWNhbnRUb2tlblR5cGUnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHR5cGVTaWduaWZpY2FudFRva2VuVHlwZSA9ICd0eXBlJyxcbiAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbih0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSAnc2lnbmlmaWNhbnRUb2tlblR5cGUnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbjtcbiJdfQ==