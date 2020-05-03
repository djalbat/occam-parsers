"use strict";

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

module.exports = EpsilonRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiRXBzaWxvblJ1bGUiLCJlcHNpbG9uVGVybWluYWxTeW1ib2xDb250ZW50IiwiZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIm5hbWUiLCJFcHNpbG9uUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJFcHNpbG9uTm9kZSIsIlJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLE8sR0FBWUMsMkIsQ0FBWkQsTzs7SUFFRkUsVzs7O0FBQ0oseUJBQWM7QUFBQTs7QUFDWixRQUFNQyw0QkFBNEIsR0FBR0gsT0FBckM7QUFBQSxRQUNNSSwrQkFBK0IsR0FBRyxJQUFJQywwQkFBSixDQUE2QkYsNEJBQTdCLENBRHhDO0FBQUEsUUFFTUcsSUFBSSxHQUFHQywwQkFGYjtBQUFBLFFBR01DLFdBQVcsR0FBRyxDQUNaSiwrQkFEWSxDQUhwQjtBQUFBLFFBTU1LLElBQUksR0FBR0MsbUJBTmI7QUFEWSxvRkFTTkosSUFUTSxFQVNBRSxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWHVCRSxnQjs7QUFjMUJDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsV0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRXBzaWxvbk5vZGUgZnJvbSBcIi4uL25vZGUvZXBzaWxvblwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyBFcHNpbG9uUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVwc2lsb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBlcHNpbG9uLFxuICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBFcHNpbG9uUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRXBzaWxvbk5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25SdWxlO1xuIl19