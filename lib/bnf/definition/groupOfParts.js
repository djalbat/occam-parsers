'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers');

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

var PartRuleName = ruleNames.PartRuleName,
    specialSymbols = lexers.specialSymbols,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket;

var GroupOfPartsDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(GroupOfPartsDefinition, _Definition);

  function GroupOfPartsDefinition() {
    _classCallCheck(this, GroupOfPartsDefinition);

    var partRuleName = PartRuleName,
        openBracketTerminalSymbolContent = openBracket,
        ///
    closeBracketTerminalSymbolContent = closeBracket,
        ///
    partRuleNamePart = new RuleNamePart(partRuleName),
        openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
        closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
        oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
        parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(GroupOfPartsDefinition).call(this, parts));
  }

  return GroupOfPartsDefinition;
}(Definition);

module.exports = GroupOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlBhcnRSdWxlTmFtZSIsInNwZWNpYWxTeW1ib2xzIiwib3BlbkJyYWNrZXQiLCJjbG9zZUJyYWNrZXQiLCJHcm91cE9mUGFydHNEZWZpbml0aW9uIiwicGFydFJ1bGVOYW1lIiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJwYXJ0UnVsZU5hbWVQYXJ0Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUUsVUFBVSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUQxQjtBQUFBLElBRU1HLFlBQVksR0FBR0gsT0FBTyxDQUFDLDhCQUFELENBRjVCO0FBQUEsSUFHTUksa0JBQWtCLEdBQUdKLE9BQU8sQ0FBQyxpQ0FBRCxDQUhsQztBQUFBLElBSU1LLGtCQUFrQixHQUFHTCxPQUFPLENBQUMsb0NBQUQsQ0FKbEM7O0FBTU0sSUFBRU0sWUFBRixHQUFtQkwsU0FBbkIsQ0FBRUssWUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJSLE1BRHJCLENBQ0VRLGNBREY7QUFBQSxJQUVFQyxXQUZGLEdBRWdDRCxjQUZoQyxDQUVFQyxXQUZGO0FBQUEsSUFFZUMsWUFGZixHQUVnQ0YsY0FGaEMsQ0FFZUUsWUFGZjs7SUFJQUMsc0I7OztBQUNKLG9DQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxHQUFHTCxZQUFyQjtBQUFBLFFBQ01NLGdDQUFnQyxHQUFHSixXQUR6QztBQUFBLFFBQ3NEO0FBQ2hESyxJQUFBQSxpQ0FBaUMsR0FBR0osWUFGMUM7QUFBQSxRQUV3RDtBQUNsREssSUFBQUEsZ0JBQWdCLEdBQUcsSUFBSVgsWUFBSixDQUFpQlEsWUFBakIsQ0FIekI7QUFBQSxRQUlNSSw2QkFBNkIsR0FBRyxJQUFJWCxrQkFBSixDQUF1QlEsZ0NBQXZCLENBSnRDO0FBQUEsUUFLTUksOEJBQThCLEdBQUcsSUFBSVosa0JBQUosQ0FBdUJTLGlDQUF2QixDQUx2QztBQUFBLFFBTU1JLDhCQUE4QixHQUFHLElBQUlaLGtCQUFKLENBQXVCUyxnQkFBdkIsQ0FOdkM7QUFBQSxRQU9NSSxLQUFLLEdBQUcsQ0FDTkgsNkJBRE0sRUFFTkQsZ0JBRk0sRUFHTkcsOEJBSE0sRUFJTkQsOEJBSk0sQ0FQZDtBQURZLCtGQWVORSxLQWZNO0FBZ0JiOzs7RUFqQmtDaEIsVTs7QUFvQnJDaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixzQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzJyk7XG5cbmNvbnN0IHsgUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IG9wZW5CcmFja2V0LCBjbG9zZUJyYWNrZXQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBHcm91cE9mUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IG9wZW5CcmFja2V0LCAvLy9cbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsIC8vL1xuICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgb25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0UnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRSdWxlTmFtZVBhcnRzUGFydCxcbiAgICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c0RlZmluaXRpb247Il19