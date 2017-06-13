'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    SignificantTokenTypePart = require('../../common/part/significantTokenType');

var SignificantTokenTypeDefinition = function (_Definition) {
  _inherits(SignificantTokenTypeDefinition, _Definition);

  function SignificantTokenTypeDefinition(significantTokenType) {
    _classCallCheck(this, SignificantTokenTypeDefinition);

    var noWhitespace = false,
        significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, noWhitespace),
        parts = [significantTokenTypePart];

    return _possibleConstructorReturn(this, (SignificantTokenTypeDefinition.__proto__ || Object.getPrototypeOf(SignificantTokenTypeDefinition)).call(this, parts));
  }

  return SignificantTokenTypeDefinition;
}(Definition);

module.exports = SignificantTokenTypeDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJub1doaXRlc3BhY2UiLCJzaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLDJCQUEyQkQsUUFBUSx3Q0FBUixDQURqQzs7SUFHTUUsOEI7OztBQUNKLDBDQUFZQyxvQkFBWixFQUFrQztBQUFBOztBQUNoQyxRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsMkJBQTJCLElBQUlKLHdCQUFKLENBQTZCRSxvQkFBN0IsRUFBbURDLFlBQW5ELENBRGpDO0FBQUEsUUFFTUUsUUFBUSxDQUNORCx3QkFETSxDQUZkOztBQURnQywySkFPMUJDLEtBUDBCO0FBUWpDOzs7RUFUMENQLFU7O0FBWTdDUSxPQUFPQyxPQUFQLEdBQWlCTiw4QkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KHNpZ25pZmljYW50VG9rZW5UeXBlLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbjtcbiJdfQ==