"use strict";

var _occamLexers = require("occam-lexers");

var _rule = _interopRequireDefault(require("../rule"));

var _endOfLine = _interopRequireDefault(require("../node/endOfLine"));

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

var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;

var EndOfLineRule = /*#__PURE__*/function (_Rule) {
  _inherits(EndOfLineRule, _Rule);

  function EndOfLineRule() {
    _classCallCheck(this, EndOfLineRule);

    var endOfLineTerminalSymbolContent = END_OF_LINE,
        endOfLineTerminalSymbolDefinition = new _terminalSymbol["default"](endOfLineTerminalSymbolContent),
        name = _ruleNames.EndOfLineRuleName,
        definitions = [endOfLineTerminalSymbolDefinition],
        Node = _endOfLine["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineRule).call(this, name, definitions, Node));
  }

  return EndOfLineRule;
}(_rule["default"]);

module.exports = EndOfLineRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJFTkRfT0ZfTElORSIsInNwZWNpYWxTeW1ib2xzIiwiRW5kT2ZMaW5lUnVsZSIsImVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCIsImVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIm5hbWUiLCJFbmRPZkxpbmVSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIkVuZE9mTGluZU5vZGUiLCJSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxXLEdBQWdCQywyQixDQUFoQkQsVzs7SUFFRkUsYTs7O0FBQ0osMkJBQWM7QUFBQTs7QUFDWixRQUFNQyw4QkFBOEIsR0FBR0gsV0FBdkM7QUFBQSxRQUNNSSxpQ0FBaUMsR0FBRyxJQUFJQywwQkFBSixDQUE2QkYsOEJBQTdCLENBRDFDO0FBQUEsUUFFTUcsSUFBSSxHQUFHQyw0QkFGYjtBQUFBLFFBR01DLFdBQVcsR0FBRyxDQUNaSixpQ0FEWSxDQUhwQjtBQUFBLFFBTU1LLElBQUksR0FBR0MscUJBTmI7QUFEWSxzRkFTTkosSUFUTSxFQVNBRSxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWHlCRSxnQjs7QUFjNUJDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRW5kT2ZMaW5lTm9kZSBmcm9tIFwiLi4vbm9kZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2xcIjtcblxuaW1wb3J0IHsgRW5kT2ZMaW5lUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgRU5EX09GX0xJTkUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBFbmRPZkxpbmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9IEVORF9PRl9MSU5FLFxuICAgICAgICAgIGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24oZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gRW5kT2ZMaW5lUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBFbmRPZkxpbmVOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVSdWxlO1xuIl19