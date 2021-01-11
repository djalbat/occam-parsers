"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _rule = _interopRequireDefault(require("../rule"));

var _wildcard = _interopRequireDefault(require("../node/wildcard"));

var _terminalSymbol = _interopRequireDefault(require("../definition/terminalSymbol"));

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

var wildcard = _occamLexers.specialSymbols.wildcard;

var WildcardRule = /*#__PURE__*/function (_Rule) {
  _inherits(WildcardRule, _Rule);

  var _super = _createSuper(WildcardRule);

  function WildcardRule() {
    _classCallCheck(this, WildcardRule);

    var wildcardTerminalSymbolContent = wildcard,
        wildcardTerminalSymbolDefinition = new _terminalSymbol["default"](wildcardTerminalSymbolContent),
        name = _ruleNames.WildcardRuleName,
        definitions = [wildcardTerminalSymbolDefinition],
        Node = _wildcard["default"];
    return _super.call(this, name, definitions, Node);
  }

  return WildcardRule;
}(_rule["default"]);

exports["default"] = WildcardRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbGRjYXJkLmpzIl0sIm5hbWVzIjpbIndpbGRjYXJkIiwic3BlY2lhbFN5bWJvbHMiLCJXaWxkY2FyZFJ1bGUiLCJ3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCIsIndpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsIldpbGRjYXJkUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJXaWxkY2FyZE5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFEsR0FBYUMsMkIsQ0FBYkQsUTs7SUFFYUUsWTs7Ozs7QUFDbkIsMEJBQWM7QUFBQTs7QUFDWixRQUFNQyw2QkFBNkIsR0FBR0gsUUFBdEM7QUFBQSxRQUNNSSxnQ0FBZ0MsR0FBRyxJQUFJQywwQkFBSixDQUE2QkYsNkJBQTdCLENBRHpDO0FBQUEsUUFFTUcsSUFBSSxHQUFHQywyQkFGYjtBQUFBLFFBR01DLFdBQVcsR0FBRyxDQUNaSixnQ0FEWSxDQUhwQjtBQUFBLFFBTU1LLElBQUksR0FBR0Msb0JBTmI7QUFEWSw2QkFTTkosSUFUTSxFQVNBRSxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWHVDRSxnQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBXaWxkY2FyZE5vZGUgZnJvbSBcIi4uL25vZGUvd2lsZGNhcmRcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2xcIjtcblxuaW1wb3J0IHsgV2lsZGNhcmRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB3aWxkY2FyZCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbGRjYXJkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHdpbGRjYXJkLFxuICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbih3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9IFdpbGRjYXJkUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFdpbGRjYXJkTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXX0=