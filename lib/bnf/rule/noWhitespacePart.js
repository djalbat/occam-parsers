"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _noWhitespacePart = _interopRequireDefault(require("../node/noWhitespacePart"));

var _noWhitespacePart2 = _interopRequireDefault(require("../definition/noWhitespacePart"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NoWhitespacePartRule = /*#__PURE__*/function (_Rule) {
  _inherits(NoWhitespacePartRule, _Rule);

  function NoWhitespacePartRule() {
    _classCallCheck(this, NoWhitespacePartRule);

    var noWhitespacePartDefinition = new _noWhitespacePart2["default"](),
        name = _ruleNames.NoWhitespacePartRuleName,
        definitions = [noWhitespacePartDefinition],
        Node = _noWhitespacePart["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePartRule).call(this, name, definitions, Node));
  }

  return NoWhitespacePartRule;
}(_rule["default"]);

exports["default"] = NoWhitespacePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZVBhcnQuanMiXSwibmFtZXMiOlsiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIk5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIiwibmFtZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIk5vV2hpdGVzcGFjZVBhcnROb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxvQjs7O0FBQ25CLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsMEJBQTBCLEdBQUcsSUFBSUMsNkJBQUosRUFBbkM7QUFBQSxRQUNNQyxJQUFJLEdBQUdDLG1DQURiO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pKLDBCQURZLENBRnBCO0FBQUEsUUFLTUssSUFBSSxHQUFHQyw0QkFMYjtBQURZLDZGQVFOSixJQVJNLEVBUUFFLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWK0NFLGdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydE5vZGUgZnJvbSBcIi4uL25vZGUvbm9XaGl0ZXNwYWNlUGFydFwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL25vV2hpdGVzcGFjZVBhcnRcIjtcblxuaW1wb3J0IHsgTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb1doaXRlc3BhY2VQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSBOb1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vV2hpdGVzcGFjZVBhcnROb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdfQ==