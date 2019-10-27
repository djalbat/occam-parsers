'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    SignificantTokenTypePart = require('../part/terminal/significantTokenType');

var SignificantTokenTypeDefinition = function (_Definition) {
  _inherits(SignificantTokenTypeDefinition, _Definition);

  function SignificantTokenTypeDefinition(significantTokenType) {
    _classCallCheck(this, SignificantTokenTypeDefinition);

    var nonWhitespace = false,
        significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, nonWhitespace),
        parts = [significantTokenTypePart];

    return _possibleConstructorReturn(this, (SignificantTokenTypeDefinition.__proto__ || Object.getPrototypeOf(SignificantTokenTypeDefinition)).call(this, parts));
  }

  return SignificantTokenTypeDefinition;
}(Definition);

module.exports = SignificantTokenTypeDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwibm9uV2hpdGVzcGFjZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsMkJBQTJCRCxRQUFRLHVDQUFSLENBRGpDOztJQUdNRSw4Qjs7O0FBQ0osMENBQVlDLG9CQUFaLEVBQWtDO0FBQUE7O0FBQ2hDLFFBQU1DLGdCQUFnQixLQUF0QjtBQUFBLFFBQ01DLDJCQUEyQixJQUFJSix3QkFBSixDQUE2QkUsb0JBQTdCLEVBQW1EQyxhQUFuRCxDQURqQztBQUFBLFFBRU1FLFFBQVEsQ0FDTkQsd0JBRE0sQ0FGZDs7QUFEZ0MsMkpBTzFCQyxLQVAwQjtBQVFqQzs7O0VBVDBDUCxVOztBQVk3Q1EsT0FBT0MsT0FBUCxHQUFpQk4sOEJBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50VG9rZW5UeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICBjb25zdCBub25XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChzaWduaWZpY2FudFRva2VuVHlwZSwgbm9uV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uO1xuIl19