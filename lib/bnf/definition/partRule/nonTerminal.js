'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../../ruleNames'),
    Definition = require('../../definition'),
    RuleNamePart = require('../../part/nonTerminal/ruleName'),
    ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

var QuantifierRuleName = ruleNames.QuantifierRuleName,
    NonTerminalPartRuleName = ruleNames.NonTerminalPartRuleName;

var NonTerminalPartRuleDefinition = function (_Definition) {
  _inherits(NonTerminalPartRuleDefinition, _Definition);

  function NonTerminalPartRuleDefinition() {
    _classCallCheck(this, NonTerminalPartRuleDefinition);

    var quantifierRuleName = QuantifierRuleName,
        nonTerminalPartRuleName = NonTerminalPartRuleName,
        quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
        nonTerminalPartRuleNamePart = new RuleNamePart(nonTerminalPartRuleName),
        zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
        parts = [nonTerminalPartRuleNamePart, zeroOrMoreQuantifierRuleNamePartsPart];

    return _possibleConstructorReturn(this, (NonTerminalPartRuleDefinition.__proto__ || Object.getPrototypeOf(NonTerminalPartRuleDefinition)).call(this, parts));
  }

  return NonTerminalPartRuleDefinition;
}(Definition);

module.exports = NonTerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJRdWFudGlmaWVyUnVsZU5hbWUiLCJOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSIsIk5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwicXVhbnRpZmllclJ1bGVOYW1lIiwibm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJxdWFudGlmaWVyUnVsZU5hbWVQYXJ0Iiwibm9uVGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0IiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsa0JBQVIsQ0FEbkI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGlDQUFSLENBRnJCO0FBQUEsSUFHTUcsc0JBQXNCSCxRQUFRLHdDQUFSLENBSDVCOztJQUtRSSxrQixHQUFnREwsUyxDQUFoREssa0I7SUFBb0JDLHVCLEdBQTRCTixTLENBQTVCTSx1Qjs7SUFFdEJDLDZCOzs7QUFDSiwyQ0FBYztBQUFBOztBQUNaLFFBQU1DLHFCQUFxQkgsa0JBQTNCO0FBQUEsUUFDTUksMEJBQTBCSCx1QkFEaEM7QUFBQSxRQUVNSSx5QkFBeUIsSUFBSVAsWUFBSixDQUFpQkssa0JBQWpCLENBRi9CO0FBQUEsUUFHTUcsOEJBQThCLElBQUlSLFlBQUosQ0FBaUJNLHVCQUFqQixDQUhwQztBQUFBLFFBSU1HLHdDQUF3QyxJQUFJUixtQkFBSixDQUF3Qk0sc0JBQXhCLENBSjlDO0FBQUEsUUFLTUcsUUFBUSxDQUNORiwyQkFETSxFQUVOQyxxQ0FGTSxDQUxkOztBQURZLHlKQVdOQyxLQVhNO0FBWWI7OztFQWJ5Q1gsVTs7QUFnQjVDWSxPQUFPQyxPQUFQLEdBQWlCUiw2QkFBakIiLCJmaWxlIjoibm9uVGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uLy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IFF1YW50aWZpZXJSdWxlTmFtZSwgTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcXVhbnRpZmllclJ1bGVOYW1lID0gUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lID0gTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocXVhbnRpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocXVhbnRpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uO1xuIl19