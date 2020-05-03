"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _rule = _interopRequireDefault(require("../rule"));

var _epsilon = _interopRequireDefault(require("../node/epsilon"));

var _terminalSymbol = _interopRequireDefault(require("../definition/terminalSymbol"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var epsilon = _occamLexers.specialSymbols.epsilon;

var EpsilonRule = /*#__PURE__*/function (_Rule) {
  _inherits(EpsilonRule, _Rule);

  function EpsilonRule() {
    _classCallCheck(this, EpsilonRule);

    var epsilonTerminalSymbolContent = epsilon,
        epsilonTerminalSymbolDefinition = new _terminalSymbol["default"](epsilonTerminalSymbolContent),
        name = _ruleNames.EpsilonRuleName,
        definitions = [epsilonTerminalSymbolDefinition],
        Node = _epsilon["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonRule).call(this, name, definitions, Node));
  }

  return EpsilonRule;
}(_rule["default"]);

exports["default"] = EpsilonRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiRXBzaWxvblJ1bGUiLCJlcHNpbG9uVGVybWluYWxTeW1ib2xDb250ZW50IiwiZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIm5hbWUiLCJFcHNpbG9uUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJFcHNpbG9uTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxPLEdBQVlDLDJCLENBQVpELE87O0lBRWFFLFc7OztBQUNuQix5QkFBYztBQUFBOztBQUNaLFFBQU1DLDRCQUE0QixHQUFHSCxPQUFyQztBQUFBLFFBQ01JLCtCQUErQixHQUFHLElBQUlDLDBCQUFKLENBQTZCRiw0QkFBN0IsQ0FEeEM7QUFBQSxRQUVNRyxJQUFJLEdBQUdDLDBCQUZiO0FBQUEsUUFHTUMsV0FBVyxHQUFHLENBQ1pKLCtCQURZLENBSHBCO0FBQUEsUUFNTUssSUFBSSxHQUFHQyxtQkFOYjtBQURZLG9GQVNOSixJQVRNLEVBU0FFLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYc0NFLGdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEVwc2lsb25Ob2RlIGZyb20gXCIuLi9ub2RlL2Vwc2lsb25cIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2xcIjtcblxuaW1wb3J0IHsgRXBzaWxvblJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlcHNpbG9uVGVybWluYWxTeW1ib2xDb250ZW50ID0gZXBzaWxvbixcbiAgICAgICAgICBlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbihlcHNpbG9uVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gRXBzaWxvblJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IEVwc2lsb25Ob2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdfQ==