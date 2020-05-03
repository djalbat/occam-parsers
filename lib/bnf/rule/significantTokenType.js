"use strict";

var _occamLexers = require("occam-lexers");

var _rule = _interopRequireDefault(require("../rule"));

var _significantTokenType = _interopRequireDefault(require("../node/significantTokenType"));

var _significantTokenType2 = _interopRequireDefault(require("../definition/significantTokenType"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var typeType = _occamLexers.types.typeType;

var SignificantTokenTypeRule = /*#__PURE__*/function (_Rule) {
  _inherits(SignificantTokenTypeRule, _Rule);

  function SignificantTokenTypeRule() {
    _classCallCheck(this, SignificantTokenTypeRule);

    var typeSignificantTokenType = typeType,
        ///
    typeSignificantTokenTypeDefinition = new _significantTokenType2["default"](typeSignificantTokenType),
        name = _ruleNames.SignificantTokenTypeRuleName,
        definitions = [typeSignificantTokenTypeDefinition],
        Node = _significantTokenType["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypeRule).call(this, name, definitions, Node));
  }

  return SignificantTokenTypeRule;
}(_rule["default"]);

module.exports = SignificantTokenTypeRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbInR5cGVUeXBlIiwidHlwZXMiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJ0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJ0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwibmFtZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZU5vZGUiLCJSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxRLEdBQWFDLGtCLENBQWJELFE7O0lBRUZFLHdCOzs7QUFDSixzQ0FBYztBQUFBOztBQUNaLFFBQU1DLHdCQUF3QixHQUFHSCxRQUFqQztBQUFBLFFBQTRDO0FBQ3RDSSxJQUFBQSxrQ0FBa0MsR0FBRyxJQUFJQyxpQ0FBSixDQUFtQ0Ysd0JBQW5DLENBRDNDO0FBQUEsUUFFTUcsSUFBSSxHQUFHQyx1Q0FGYjtBQUFBLFFBR01DLFdBQVcsR0FBRyxDQUNaSixrQ0FEWSxDQUhwQjtBQUFBLFFBTU1LLElBQUksR0FBR0MsZ0NBTmI7QUFEWSxpR0FTTkosSUFUTSxFQVNBRSxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWG9DRSxnQjs7QUFjdkNDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsd0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZSBmcm9tIFwiLi4vbm9kZS9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5pbXBvcnQgeyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHR5cGVUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHR5cGVTaWduaWZpY2FudFRva2VuVHlwZSA9IHR5cGVUeXBlLCAgLy8vXG4gICAgICAgICAgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24odHlwZVNpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBuYW1lID0gU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHR5cGVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBTaWduaWZpY2FudFRva2VuVHlwZU5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGU7XG4iXX0=