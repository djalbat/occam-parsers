"use strict";

var _occamLexers = require("occam-lexers");

var _rule = _interopRequireDefault(require("../rule"));

var _wildcard = _interopRequireDefault(require("../node/wildcard"));

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

var wildcard = _occamLexers.specialSymbols.wildcard;

var WildcardRule = /*#__PURE__*/function (_Rule) {
  _inherits(WildcardRule, _Rule);

  function WildcardRule() {
    _classCallCheck(this, WildcardRule);

    var wildcardTerminalSymbolContent = wildcard,
        wildcardTerminalSymbolDefinition = new _terminalSymbol["default"](wildcardTerminalSymbolContent),
        name = _ruleNames.WildcardRuleName,
        definitions = [wildcardTerminalSymbolDefinition],
        Node = _wildcard["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(WildcardRule).call(this, name, definitions, Node));
  }

  return WildcardRule;
}(_rule["default"]);

module.exports = WildcardRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbGRjYXJkLmpzIl0sIm5hbWVzIjpbIndpbGRjYXJkIiwic3BlY2lhbFN5bWJvbHMiLCJXaWxkY2FyZFJ1bGUiLCJ3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCIsIndpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsIldpbGRjYXJkUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJXaWxkY2FyZE5vZGUiLCJSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxRLEdBQWFDLDJCLENBQWJELFE7O0lBRUZFLFk7OztBQUNKLDBCQUFjO0FBQUE7O0FBQ1osUUFBTUMsNkJBQTZCLEdBQUdILFFBQXRDO0FBQUEsUUFDTUksZ0NBQWdDLEdBQUcsSUFBSUMsMEJBQUosQ0FBNkJGLDZCQUE3QixDQUR6QztBQUFBLFFBRU1HLElBQUksR0FBR0MsMkJBRmI7QUFBQSxRQUdNQyxXQUFXLEdBQUcsQ0FDWkosZ0NBRFksQ0FIcEI7QUFBQSxRQU1NSyxJQUFJLEdBQUdDLG9CQU5iO0FBRFkscUZBU05KLElBVE0sRUFTQUUsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVh3QkUsZ0I7O0FBYzNCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJYLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IFdpbGRjYXJkTm9kZSBmcm9tIFwiLi4vbm9kZS93aWxkY2FyZFwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyBXaWxkY2FyZFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHdpbGRjYXJkIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgV2lsZGNhcmRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50ID0gd2lsZGNhcmQsXG4gICAgICAgICAgd2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKHdpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gV2lsZGNhcmRSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gV2lsZGNhcmROb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaWxkY2FyZFJ1bGU7XG4iXX0=