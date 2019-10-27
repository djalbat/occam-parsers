'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

var QuantifierRuleName = ruleNames.QuantifierRuleName,
    TerminalPartRuleName = ruleNames.TerminalPartRuleName;

var TerminalPartRuleDefinition = function (_Definition) {
  _inherits(TerminalPartRuleDefinition, _Definition);

  function TerminalPartRuleDefinition() {
    _classCallCheck(this, TerminalPartRuleDefinition);

    var quantifierRuleName = QuantifierRuleName,
        terminalPartRuleName = TerminalPartRuleName,
        quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
        terminalPartRuleNamePart = new RuleNamePart(terminalPartRuleName),
        zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
        parts = [terminalPartRuleNamePart, zeroOrMoreQuantifierRuleNamePartsPart];

    return _possibleConstructorReturn(this, (TerminalPartRuleDefinition.__proto__ || Object.getPrototypeOf(TerminalPartRuleDefinition)).call(this, parts));
  }

  return TerminalPartRuleDefinition;
}(Definition);

module.exports = TerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJRdWFudGlmaWVyUnVsZU5hbWUiLCJUZXJtaW5hbFBhcnRSdWxlTmFtZSIsIlRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwicXVhbnRpZmllclJ1bGVOYW1lIiwidGVybWluYWxQYXJ0UnVsZU5hbWUiLCJxdWFudGlmaWVyUnVsZU5hbWVQYXJ0IiwidGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0IiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsa0JBQVIsQ0FEbkI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGlDQUFSLENBRnJCO0FBQUEsSUFHTUcsc0JBQXNCSCxRQUFRLHdDQUFSLENBSDVCOztJQUtRSSxrQixHQUE2Q0wsUyxDQUE3Q0ssa0I7SUFBb0JDLG9CLEdBQXlCTixTLENBQXpCTSxvQjs7SUFFdEJDLDBCOzs7QUFDSix3Q0FBYztBQUFBOztBQUNaLFFBQU1DLHFCQUFxQkgsa0JBQTNCO0FBQUEsUUFDTUksdUJBQXVCSCxvQkFEN0I7QUFBQSxRQUVNSSx5QkFBeUIsSUFBSVAsWUFBSixDQUFpQkssa0JBQWpCLENBRi9CO0FBQUEsUUFHTUcsMkJBQTJCLElBQUlSLFlBQUosQ0FBaUJNLG9CQUFqQixDQUhqQztBQUFBLFFBSU1HLHdDQUF3QyxJQUFJUixtQkFBSixDQUF3Qk0sc0JBQXhCLENBSjlDO0FBQUEsUUFLTUcsUUFBUSxDQUNORix3QkFETSxFQUVOQyxxQ0FGTSxDQUxkOztBQURZLG1KQVdOQyxLQVhNO0FBWWI7OztFQWJzQ1gsVTs7QUFnQnpDWSxPQUFPQyxPQUFQLEdBQWlCUiwwQkFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uLy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IFF1YW50aWZpZXJSdWxlTmFtZSwgVGVybWluYWxQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcXVhbnRpZmllclJ1bGVOYW1lID0gUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lID0gVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocXVhbnRpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHRlcm1pbmFsUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocXVhbnRpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19