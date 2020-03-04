'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

var QuantifierRuleName = ruleNames.QuantifierRuleName,
    NonTerminalPartRuleName = ruleNames.NonTerminalPartRuleName;

var NonTerminalPartRuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(NonTerminalPartRuleDefinition, _Definition);

  function NonTerminalPartRuleDefinition() {
    _classCallCheck(this, NonTerminalPartRuleDefinition);

    var quantifierRuleName = QuantifierRuleName,
        nonTerminalPartRuleName = NonTerminalPartRuleName,
        quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
        nonTerminalPartRuleNamePart = new RuleNamePart(nonTerminalPartRuleName),
        zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
        parts = [nonTerminalPartRuleNamePart, zeroOrMoreQuantifierRuleNamePartsPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartRuleDefinition).call(this, parts));
  }

  return NonTerminalPartRuleDefinition;
}(Definition);

module.exports = NonTerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbInJ1bGVOYW1lcyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIk5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJxdWFudGlmaWVyUnVsZU5hbWUiLCJub25UZXJtaW5hbFBhcnRSdWxlTmFtZSIsInF1YW50aWZpZXJSdWxlTmFtZVBhcnQiLCJub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGlCQUFELENBQXpCO0FBQUEsSUFDTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsa0JBQUQsQ0FEMUI7QUFBQSxJQUVNRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxpQ0FBRCxDQUY1QjtBQUFBLElBR01HLG1CQUFtQixHQUFHSCxPQUFPLENBQUMsd0NBQUQsQ0FIbkM7O0lBS1FJLGtCLEdBQWdETCxTLENBQWhESyxrQjtJQUFvQkMsdUIsR0FBNEJOLFMsQ0FBNUJNLHVCOztJQUV0QkMsNkI7OztBQUNKLDJDQUFjO0FBQUE7O0FBQ1osUUFBTUMsa0JBQWtCLEdBQUdILGtCQUEzQjtBQUFBLFFBQ01JLHVCQUF1QixHQUFHSCx1QkFEaEM7QUFBQSxRQUVNSSxzQkFBc0IsR0FBRyxJQUFJUCxZQUFKLENBQWlCSyxrQkFBakIsQ0FGL0I7QUFBQSxRQUdNRywyQkFBMkIsR0FBRyxJQUFJUixZQUFKLENBQWlCTSx1QkFBakIsQ0FIcEM7QUFBQSxRQUlNRyxxQ0FBcUMsR0FBRyxJQUFJUixtQkFBSixDQUF3Qk0sc0JBQXhCLENBSjlDO0FBQUEsUUFLTUcsS0FBSyxHQUFHLENBQ05GLDJCQURNLEVBRU5DLHFDQUZNLENBTGQ7QUFEWSxzR0FXTkMsS0FYTTtBQVliOzs7RUFieUNYLFU7O0FBZ0I1Q1ksTUFBTSxDQUFDQyxPQUFQLEdBQWlCUiw2QkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uLy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IFF1YW50aWZpZXJSdWxlTmFtZSwgTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcXVhbnRpZmllclJ1bGVOYW1lID0gUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lID0gTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocXVhbnRpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocXVhbnRpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19