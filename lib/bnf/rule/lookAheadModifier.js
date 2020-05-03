"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _definition = _interopRequireDefault(require("../node/definition"));

var _lookAheadModifierRule = _interopRequireDefault(require("../definition/lookAheadModifierRule"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LookAheadModifierRule = /*#__PURE__*/function (_Rule) {
  _inherits(LookAheadModifierRule, _Rule);

  function LookAheadModifierRule() {
    _classCallCheck(this, LookAheadModifierRule);

    var name = _ruleNames.LookAheadModifierRuleName,
        lookAheadModifierRuleDefinition = new _lookAheadModifierRule["default"](),
        definitions = [lookAheadModifierRuleDefinition],
        Node = _definition["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(LookAheadModifierRule).call(this, name, definitions, Node));
  }

  return LookAheadModifierRule;
}(_rule["default"]);

module.exports = LookAheadModifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvb2tBaGVhZE1vZGlmaWVyLmpzIl0sIm5hbWVzIjpbIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm5hbWUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJEZWZpbml0aW9uTm9kZSIsIlJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLHFCOzs7QUFDSixtQ0FBYztBQUFBOztBQUNaLFFBQU1DLElBQUksR0FBR0Msb0NBQWI7QUFBQSxRQUNNQywrQkFBK0IsR0FBRyxJQUFJQyxpQ0FBSixFQUR4QztBQUFBLFFBRU1DLFdBQVcsR0FBRyxDQUNaRiwrQkFEWSxDQUZwQjtBQUFBLFFBS01HLElBQUksR0FBR0Msc0JBTGI7QUFEWSw4RkFRTk4sSUFSTSxFQVFBSSxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVmlDRSxnQjs7QUFhcENDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYscUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbk5vZGUgZnJvbSBcIi4uL25vZGUvZGVmaW5pdGlvblwiO1xuaW1wb3J0IExvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vbG9va0FoZWFkTW9kaWZpZXJSdWxlXCI7XG5cbmltcG9ydCB7IExvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIExvb2tBaGVhZE1vZGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gbmV3IExvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvb2tBaGVhZE1vZGlmaWVyUnVsZTtcbiJdfQ==