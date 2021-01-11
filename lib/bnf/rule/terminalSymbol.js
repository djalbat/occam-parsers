"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _rule = _interopRequireDefault(require("../rule"));

var _terminalSymbol = _interopRequireDefault(require("../node/terminalSymbol"));

var _significantTokenType = _interopRequireDefault(require("../definition/significantTokenType"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var stringLiteralType = _occamLexers.types.stringLiteralType;

var TerminalSymbolRule = /*#__PURE__*/function (_Rule) {
  _inherits(TerminalSymbolRule, _Rule);

  var _super = _createSuper(TerminalSymbolRule);

  function TerminalSymbolRule() {
    _classCallCheck(this, TerminalSymbolRule);

    var stringLiteralSignificantTokenType = stringLiteralType,
        ///
    stringLiteralSignificantTokenTypeDefinition = new _significantTokenType["default"](stringLiteralSignificantTokenType),
        name = _ruleNames.TerminalSymbolRuleName,
        definitions = [stringLiteralSignificantTokenTypeDefinition],
        Node = _terminalSymbol["default"];
    return _super.call(this, name, definitions, Node);
  }

  return TerminalSymbolRule;
}(_rule["default"]);

exports["default"] = TerminalSymbolRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbInN0cmluZ0xpdGVyYWxUeXBlIiwidHlwZXMiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwibmFtZSIsIlRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJUZXJtaW5hbFN5bWJvbE5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLGlCLEdBQXNCQyxrQixDQUF0QkQsaUI7O0lBRWFFLGtCOzs7OztBQUNuQixnQ0FBYztBQUFBOztBQUNaLFFBQU1DLGlDQUFpQyxHQUFHSCxpQkFBMUM7QUFBQSxRQUE4RDtBQUN4REksSUFBQUEsMkNBQTJDLEdBQUcsSUFBSUMsZ0NBQUosQ0FBbUNGLGlDQUFuQyxDQURwRDtBQUFBLFFBRU1HLElBQUksR0FBR0MsaUNBRmI7QUFBQSxRQUdNQyxXQUFXLEdBQUcsQ0FDWkosMkNBRFksQ0FIcEI7QUFBQSxRQU1NSyxJQUFJLEdBQUdDLDBCQU5iO0FBRFksNkJBU05KLElBVE0sRUFTQUUsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVg2Q0UsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xOb2RlIGZyb20gXCIuLi9ub2RlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IFRlcm1pbmFsU3ltYm9sUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgc3RyaW5nTGl0ZXJhbFR5cGUgfSA9IHR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFN5bWJvbFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlID0gc3RyaW5nTGl0ZXJhbFR5cGUsICAvLy9cbiAgICAgICAgICBzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbihzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFRlcm1pbmFsU3ltYm9sTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXX0=