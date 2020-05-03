"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _part = _interopRequireDefault(require("../node/part"));

var _ruleName = _interopRequireDefault(require("../definition/ruleName"));

var _terminal = _interopRequireDefault(require("../definition/partRule/terminal"));

var _nonTerminal = _interopRequireDefault(require("../definition/partRule/nonTerminal"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PartRule = /*#__PURE__*/function (_Rule) {
  _inherits(PartRule, _Rule);

  function PartRule() {
    _classCallCheck(this, PartRule);

    var name = _ruleNames.PartRuleName,
        terminalPartRuleDefinition = new _terminal["default"](),
        nonTerminalPartRuleDefinition = new _nonTerminal["default"](),
        noWhitespacePartRuleNameDefinition = new _ruleName["default"](_ruleNames.NoWhitespacePartRuleName),
        definitions = [nonTerminalPartRuleDefinition, terminalPartRuleDefinition, noWhitespacePartRuleNameDefinition],
        Node = _part["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(PartRule).call(this, name, definitions, Node));
  }

  return PartRule;
}(_rule["default"]);

module.exports = PartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsiUGFydFJ1bGUiLCJuYW1lIiwiUGFydFJ1bGVOYW1lIiwidGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiUGFydE5vZGUiLCJSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixzQkFBYztBQUFBOztBQUNaLFFBQU1DLElBQUksR0FBR0MsdUJBQWI7QUFBQSxRQUNNQywwQkFBMEIsR0FBRyxJQUFJQyxvQkFBSixFQURuQztBQUFBLFFBRU1DLDZCQUE2QixHQUFHLElBQUlDLHVCQUFKLEVBRnRDO0FBQUEsUUFHTUMsa0NBQWtDLEdBQUcsSUFBSUMsb0JBQUosQ0FBdUJDLG1DQUF2QixDQUgzQztBQUFBLFFBSU1DLFdBQVcsR0FBRyxDQUNaTCw2QkFEWSxFQUVaRiwwQkFGWSxFQUdaSSxrQ0FIWSxDQUpwQjtBQUFBLFFBU01JLElBQUksR0FBR0MsZ0JBVGI7QUFEWSxpRkFZTlgsSUFaTSxFQVlBUyxXQVpBLEVBWWFDLElBWmI7QUFhYjs7O0VBZG9CRSxnQjs7QUFpQnZCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJmLFFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUGFydE5vZGUgZnJvbSBcIi4uL25vZGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9ydWxlTmFtZVwiO1xuaW1wb3J0IFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3BhcnRSdWxlL3Rlcm1pbmFsXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcGFydFJ1bGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgUGFydFJ1bGVOYW1lLCBOb1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKE5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFBhcnROb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydFJ1bGU7XG4iXX0=