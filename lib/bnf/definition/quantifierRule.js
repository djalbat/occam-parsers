"use strict";

var _definition = _interopRequireDefault(require("../definition"));

var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var QuantifierRuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(QuantifierRuleDefinition, _Definition);

  function QuantifierRuleDefinition(terminalSymbolContent) {
    _classCallCheck(this, QuantifierRuleDefinition);

    var content = terminalSymbolContent,
        ///
    terminalSymbolPart = new _terminalSymbol["default"](content),
        parts = [terminalSymbolPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(QuantifierRuleDefinition).call(this, parts));
  }

  return QuantifierRuleDefinition;
}(_definition["default"]);

module.exports = QuantifierRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YW50aWZpZXJSdWxlLmpzIl0sIm5hbWVzIjpbIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsInRlcm1pbmFsU3ltYm9sQ29udGVudCIsImNvbnRlbnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIkRlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLHdCOzs7QUFDSixvQ0FBWUMscUJBQVosRUFBbUM7QUFBQTs7QUFDakMsUUFBTUMsT0FBTyxHQUFHRCxxQkFBaEI7QUFBQSxRQUF3QztBQUNsQ0UsSUFBQUEsa0JBQWtCLEdBQUcsSUFBSUMsMEJBQUosQ0FBdUJGLE9BQXZCLENBRDNCO0FBQUEsUUFFTUcsS0FBSyxHQUFHLENBQ05GLGtCQURNLENBRmQ7QUFEaUMsaUdBTzNCRSxLQVAyQjtBQVFsQzs7O0VBVG9DQyxzQjs7QUFZdkNDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlIsd0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmNsYXNzIFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFN5bWJvbENvbnRlbnQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxTeW1ib2xDb250ZW50LCAgLy8vXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbjtcbiJdfQ==