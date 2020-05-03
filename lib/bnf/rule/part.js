"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require("../rule"),
    PartNode = require("../node/part"),
    ruleNames = require("../ruleNames"),
    RuleNameDefinition = require("../definition/ruleName"),
    TerminalPartRuleDefinition = require("../definition/partRule/terminal"),
    NonTerminalPartRuleDefinition = require("../definition/partRule/nonTerminal");

var PartRuleName = ruleNames.PartRuleName,
    NoWhitespacePartRuleName = ruleNames.NoWhitespacePartRuleName;

var PartRule = /*#__PURE__*/function (_Rule) {
  _inherits(PartRule, _Rule);

  function PartRule() {
    _classCallCheck(this, PartRule);

    var name = PartRuleName,
        terminalPartRuleDefinition = new TerminalPartRuleDefinition(),
        nonTerminalPartRuleDefinition = new NonTerminalPartRuleDefinition(),
        noWhitespacePartRuleNameDefinition = new RuleNameDefinition(NoWhitespacePartRuleName),
        definitions = [nonTerminalPartRuleDefinition, terminalPartRuleDefinition, noWhitespacePartRuleNameDefinition],
        Node = PartNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(PartRule).call(this, name, definitions, Node));
  }

  return PartRule;
}(Rule);

module.exports = PartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQYXJ0Tm9kZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJQYXJ0UnVsZU5hbWUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUiLCJQYXJ0UnVsZSIsIm5hbWUiLCJ0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01DLFFBQVEsR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FEeEI7QUFBQSxJQUVNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBRnpCO0FBQUEsSUFHTUcsa0JBQWtCLEdBQUdILE9BQU8sQ0FBQyx3QkFBRCxDQUhsQztBQUFBLElBSU1JLDBCQUEwQixHQUFHSixPQUFPLENBQUMsaUNBQUQsQ0FKMUM7QUFBQSxJQUtNSyw2QkFBNkIsR0FBR0wsT0FBTyxDQUFDLG9DQUFELENBTDdDOztJQU9RTSxZLEdBQTJDSixTLENBQTNDSSxZO0lBQWNDLHdCLEdBQTZCTCxTLENBQTdCSyx3Qjs7SUFFaEJDLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHSCxZQUFiO0FBQUEsUUFDTUksMEJBQTBCLEdBQUcsSUFBSU4sMEJBQUosRUFEbkM7QUFBQSxRQUVNTyw2QkFBNkIsR0FBRyxJQUFJTiw2QkFBSixFQUZ0QztBQUFBLFFBR01PLGtDQUFrQyxHQUFHLElBQUlULGtCQUFKLENBQXVCSSx3QkFBdkIsQ0FIM0M7QUFBQSxRQUlNTSxXQUFXLEdBQUcsQ0FDWkYsNkJBRFksRUFFWkQsMEJBRlksRUFHWkUsa0NBSFksQ0FKcEI7QUFBQSxRQVNNRSxJQUFJLEdBQUdiLFFBVGI7QUFEWSxpRkFZTlEsSUFaTSxFQVlBSSxXQVpBLEVBWWFDLElBWmI7QUFhYjs7O0VBZG9CZixJOztBQWlCdkJnQixNQUFNLENBQUNDLE9BQVAsR0FBaUJSLFFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKFwiLi4vcnVsZVwiKSxcbiAgICAgIFBhcnROb2RlID0gcmVxdWlyZShcIi4uL25vZGUvcGFydFwiKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoXCIuLi9ydWxlTmFtZXNcIiksXG4gICAgICBSdWxlTmFtZURlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vZGVmaW5pdGlvbi9ydWxlTmFtZVwiKSxcbiAgICAgIFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb24vcGFydFJ1bGUvdGVybWluYWxcIiksXG4gICAgICBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IHJlcXVpcmUoXCIuLi9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsXCIpO1xuXG5jb25zdCB7IFBhcnRSdWxlTmFtZSwgTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKE5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFBhcnROb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydFJ1bGU7XG4iXX0=