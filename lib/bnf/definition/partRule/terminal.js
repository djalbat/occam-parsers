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
    TerminalPartRuleName = ruleNames.TerminalPartRuleName;

var TerminalPartRuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(TerminalPartRuleDefinition, _Definition);

  function TerminalPartRuleDefinition() {
    _classCallCheck(this, TerminalPartRuleDefinition);

    var quantifierRuleName = QuantifierRuleName,
        terminalPartRuleName = TerminalPartRuleName,
        quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
        terminalPartRuleNamePart = new RuleNamePart(terminalPartRuleName),
        zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
        parts = [terminalPartRuleNamePart, zeroOrMoreQuantifierRuleNamePartsPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(TerminalPartRuleDefinition).call(this, parts));
  }

  return TerminalPartRuleDefinition;
}(Definition);

module.exports = TerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbInJ1bGVOYW1lcyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIlRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJxdWFudGlmaWVyUnVsZU5hbWUiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZSIsInF1YW50aWZpZXJSdWxlTmFtZVBhcnQiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGlCQUFELENBQXpCO0FBQUEsSUFDTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsa0JBQUQsQ0FEMUI7QUFBQSxJQUVNRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxpQ0FBRCxDQUY1QjtBQUFBLElBR01HLG1CQUFtQixHQUFHSCxPQUFPLENBQUMsd0NBQUQsQ0FIbkM7O0lBS1FJLGtCLEdBQTZDTCxTLENBQTdDSyxrQjtJQUFvQkMsb0IsR0FBeUJOLFMsQ0FBekJNLG9COztJQUV0QkMsMEI7OztBQUNKLHdDQUFjO0FBQUE7O0FBQ1osUUFBTUMsa0JBQWtCLEdBQUdILGtCQUEzQjtBQUFBLFFBQ01JLG9CQUFvQixHQUFHSCxvQkFEN0I7QUFBQSxRQUVNSSxzQkFBc0IsR0FBRyxJQUFJUCxZQUFKLENBQWlCSyxrQkFBakIsQ0FGL0I7QUFBQSxRQUdNRyx3QkFBd0IsR0FBRyxJQUFJUixZQUFKLENBQWlCTSxvQkFBakIsQ0FIakM7QUFBQSxRQUlNRyxxQ0FBcUMsR0FBRyxJQUFJUixtQkFBSixDQUF3Qk0sc0JBQXhCLENBSjlDO0FBQUEsUUFLTUcsS0FBSyxHQUFHLENBQ05GLHdCQURNLEVBRU5DLHFDQUZNLENBTGQ7QUFEWSxtR0FXTkMsS0FYTTtBQVliOzs7RUFic0NYLFU7O0FBZ0J6Q1ksTUFBTSxDQUFDQyxPQUFQLEdBQWlCUiwwQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uLy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IFF1YW50aWZpZXJSdWxlTmFtZSwgVGVybWluYWxQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcXVhbnRpZmllclJ1bGVOYW1lID0gUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lID0gVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocXVhbnRpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHRlcm1pbmFsUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocXVhbnRpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19