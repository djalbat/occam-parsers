'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require('../rule'),
    PartNode = require('../node/part'),
    ruleNames = require('../ruleNames'),
    RuleNameDefinition = require('../definition/ruleName'),
    TerminalPartRuleDefinition = require('../definition/partRule/terminal'),
    NonTerminalPartRuleDefinition = require('../definition/partRule/nonTerminal');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQYXJ0Tm9kZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJQYXJ0UnVsZU5hbWUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUiLCJQYXJ0UnVsZSIsIm5hbWUiLCJ0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01DLFFBQVEsR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FEeEI7QUFBQSxJQUVNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBRnpCO0FBQUEsSUFHTUcsa0JBQWtCLEdBQUdILE9BQU8sQ0FBQyx3QkFBRCxDQUhsQztBQUFBLElBSU1JLDBCQUEwQixHQUFHSixPQUFPLENBQUMsaUNBQUQsQ0FKMUM7QUFBQSxJQUtNSyw2QkFBNkIsR0FBR0wsT0FBTyxDQUFDLG9DQUFELENBTDdDOztJQU9RTSxZLEdBQTJDSixTLENBQTNDSSxZO0lBQWNDLHdCLEdBQTZCTCxTLENBQTdCSyx3Qjs7SUFFaEJDLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHSCxZQUFiO0FBQUEsUUFDTUksMEJBQTBCLEdBQUcsSUFBSU4sMEJBQUosRUFEbkM7QUFBQSxRQUVNTyw2QkFBNkIsR0FBRyxJQUFJTiw2QkFBSixFQUZ0QztBQUFBLFFBR01PLGtDQUFrQyxHQUFHLElBQUlULGtCQUFKLENBQXVCSSx3QkFBdkIsQ0FIM0M7QUFBQSxRQUlNTSxXQUFXLEdBQUcsQ0FDWkYsNkJBRFksRUFFWkQsMEJBRlksRUFHWkUsa0NBSFksQ0FKcEI7QUFBQSxRQVNNRSxJQUFJLEdBQUdiLFFBVGI7QUFEWSxpRkFZTlEsSUFaTSxFQVlBSSxXQVpBLEVBWWFDLElBWmI7QUFhYjs7O0VBZG9CZixJOztBQWlCdkJnQixNQUFNLENBQUNDLE9BQVAsR0FBaUJSLFFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUGFydE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgUnVsZU5hbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ydWxlTmFtZScpLFxuICAgICAgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3BhcnRSdWxlL3Rlcm1pbmFsJyksXG4gICAgICBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcGFydFJ1bGUvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBQYXJ0UnVsZU5hbWUsIE5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihOb1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRSdWxlO1xuIl19