"use strict";

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

module.exports = NoWhitespacePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZVBhcnQuanMiXSwibmFtZXMiOlsiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIk5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIiwibmFtZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIk5vV2hpdGVzcGFjZVBhcnROb2RlIiwiUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsMEJBQTBCLEdBQUcsSUFBSUMsNkJBQUosRUFBbkM7QUFBQSxRQUNNQyxJQUFJLEdBQUdDLG1DQURiO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pKLDBCQURZLENBRnBCO0FBQUEsUUFLTUssSUFBSSxHQUFHQyw0QkFMYjtBQURZLDZGQVFOSixJQVJNLEVBUUFFLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWZ0NFLGdCOztBQWFuQ0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixvQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0Tm9kZSBmcm9tIFwiLi4vbm9kZS9ub1doaXRlc3BhY2VQYXJ0XCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vbm9XaGl0ZXNwYWNlUGFydFwiO1xuXG5pbXBvcnQgeyBOb1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uID0gbmV3IE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IE5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9XaGl0ZXNwYWNlUGFydE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZVBhcnRSdWxlO1xuIl19