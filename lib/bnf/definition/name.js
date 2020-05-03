"use strict";

var _occamLexers = require("occam-lexers");

var _definition = _interopRequireDefault(require("../definition"));

var _significantTokenType = _interopRequireDefault(require("../part/terminal/significantTokenType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var nameType = _occamLexers.types.nameType;

var NameDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(NameDefinition, _Definition);

  function NameDefinition() {
    _classCallCheck(this, NameDefinition);

    var nameSignificantTokenType = nameType,
        ///
    nameSignificantTokenTypePart = new _significantTokenType["default"](nameSignificantTokenType),
        parts = [nameSignificantTokenTypePart];
    return _possibleConstructorReturn(this, _getPrototypeOf(NameDefinition).call(this, parts));
  }

  return NameDefinition;
}(_definition["default"]);

module.exports = NameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUuanMiXSwibmFtZXMiOlsibmFtZVR5cGUiLCJ0eXBlcyIsIk5hbWVEZWZpbml0aW9uIiwibmFtZVNpZ25pZmljYW50VG9rZW5UeXBlIiwibmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsUSxHQUFhQyxrQixDQUFiRCxROztJQUVGRSxjOzs7QUFDSiw0QkFBYztBQUFBOztBQUNaLFFBQU1DLHdCQUF3QixHQUFHSCxRQUFqQztBQUFBLFFBQTRDO0FBQ3RDSSxJQUFBQSw0QkFBNEIsR0FBRyxJQUFJQyxnQ0FBSixDQUE2QkYsd0JBQTdCLENBRHJDO0FBQUEsUUFFTUcsS0FBSyxHQUFHLENBQ05GLDRCQURNLENBRmQ7QUFEWSx1RkFPTkUsS0FQTTtBQVFiOzs7RUFUMEJDLHNCOztBQVk3QkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuY29uc3QgeyBuYW1lVHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIE5hbWVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSA9IG5hbWVUeXBlLCAgLy8vXG4gICAgICAgICAgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQobmFtZVNpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZVBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOYW1lRGVmaW5pdGlvbjtcbiJdfQ==