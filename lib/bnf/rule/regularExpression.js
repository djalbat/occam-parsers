"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _rule = _interopRequireDefault(require("../rule"));

var _regularExpression = _interopRequireDefault(require("../node/regularExpression"));

var _significantTokenType = _interopRequireDefault(require("../definition/significantTokenType"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var regularExpressionType = _occamLexers.types.regularExpressionType;

var RegularExpressionRule = /*#__PURE__*/function (_Rule) {
  _inherits(RegularExpressionRule, _Rule);

  var _super = _createSuper(RegularExpressionRule);

  function RegularExpressionRule() {
    _classCallCheck(this, RegularExpressionRule);

    var regularExpressionSignificantTokenType = regularExpressionType,
        ///
    regularExpressionSignificantTokenTypeDefinition = new _significantTokenType["default"](regularExpressionSignificantTokenType),
        name = _ruleNames.RegularExpressionRuleName,
        definitions = [regularExpressionSignificantTokenTypeDefinition],
        Node = _regularExpression["default"];
    return _super.call(this, name, definitions, Node);
  }

  return RegularExpressionRule;
}(_rule["default"]);

exports["default"] = RegularExpressionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbInJlZ3VsYXJFeHByZXNzaW9uVHlwZSIsInR5cGVzIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwicmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwibmFtZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJSZWd1bGFyRXhwcmVzc2lvbk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLHFCLEdBQTBCQyxrQixDQUExQkQscUI7O0lBRWFFLHFCOzs7OztBQUNuQixtQ0FBYztBQUFBOztBQUNaLFFBQU1DLHFDQUFxQyxHQUFHSCxxQkFBOUM7QUFBQSxRQUFzRTtBQUNoRUksSUFBQUEsK0NBQStDLEdBQUcsSUFBSUMsZ0NBQUosQ0FBbUNGLHFDQUFuQyxDQUR4RDtBQUFBLFFBRU1HLElBQUksR0FBR0Msb0NBRmI7QUFBQSxRQUdNQyxXQUFXLEdBQUcsQ0FDWkosK0NBRFksQ0FIcEI7QUFBQSxRQU1NSyxJQUFJLEdBQUdDLDZCQU5iO0FBRFksNkJBU05KLElBVE0sRUFTQUUsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVhnREUsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUmVndWxhckV4cHJlc3Npb25Ob2RlIGZyb20gXCIuLi9ub2RlL3JlZ3VsYXJFeHByZXNzaW9uXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IFJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcmVndWxhckV4cHJlc3Npb25UeXBlIH0gPSB0eXBlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVndWxhckV4cHJlc3Npb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGUgPSByZWd1bGFyRXhwcmVzc2lvblR5cGUsICAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24ocmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9IFJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJlZ3VsYXJFeHByZXNzaW9uTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl19