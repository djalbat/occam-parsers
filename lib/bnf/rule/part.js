'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    PartNode = require('../node/part'),
    ruleNames = require('../ruleNames'),
    RuleNameDefinition = require('../definition/ruleName'),
    TerminalPartRuleDefinition = require('../definition/partRule/terminal'),
    NonTerminalPartRuleDefinition = require('../definition/partRule/nonTerminal');

var PartRuleName = ruleNames.PartRuleName,
    NoWhitespacePartRuleName = ruleNames.NoWhitespacePartRuleName;

var PartRule = function (_Rule) {
  _inherits(PartRule, _Rule);

  function PartRule() {
    _classCallCheck(this, PartRule);

    var name = PartRuleName,
        terminalPartRuleDefinition = new TerminalPartRuleDefinition(),
        nonTerminalPartRuleDefinition = new NonTerminalPartRuleDefinition(),
        noWhitespacePartRuleNameDefinition = new RuleNameDefinition(NoWhitespacePartRuleName),
        definitions = [nonTerminalPartRuleDefinition, terminalPartRuleDefinition, noWhitespacePartRuleNameDefinition],
        Node = PartNode;

    return _possibleConstructorReturn(this, (PartRule.__proto__ || Object.getPrototypeOf(PartRule)).call(this, name, definitions, Node));
  }

  return PartRule;
}(Rule);

module.exports = PartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiUGFydE5vZGUiLCJydWxlTmFtZXMiLCJSdWxlTmFtZURlZmluaXRpb24iLCJUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIk5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiUGFydFJ1bGVOYW1lIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIiwiUGFydFJ1bGUiLCJuYW1lIiwidGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLFdBQVdELFFBQVEsY0FBUixDQURqQjtBQUFBLElBRU1FLFlBQVlGLFFBQVEsY0FBUixDQUZsQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSx3QkFBUixDQUgzQjtBQUFBLElBSU1JLDZCQUE2QkosUUFBUSxpQ0FBUixDQUpuQztBQUFBLElBS01LLGdDQUFnQ0wsUUFBUSxvQ0FBUixDQUx0Qzs7SUFPUU0sWSxHQUEyQ0osUyxDQUEzQ0ksWTtJQUFjQyx3QixHQUE2QkwsUyxDQUE3Qkssd0I7O0lBRWhCQyxROzs7QUFDSixzQkFBYztBQUFBOztBQUNaLFFBQU1DLE9BQU9ILFlBQWI7QUFBQSxRQUNNSSw2QkFBNkIsSUFBSU4sMEJBQUosRUFEbkM7QUFBQSxRQUVNTyxnQ0FBZ0MsSUFBSU4sNkJBQUosRUFGdEM7QUFBQSxRQUdNTyxxQ0FBcUMsSUFBSVQsa0JBQUosQ0FBdUJJLHdCQUF2QixDQUgzQztBQUFBLFFBSU1NLGNBQWMsQ0FDWkYsNkJBRFksRUFFWkQsMEJBRlksRUFHWkUsa0NBSFksQ0FKcEI7QUFBQSxRQVNNRSxPQUFPYixRQVRiOztBQURZLCtHQVlOUSxJQVpNLEVBWUFJLFdBWkEsRUFZYUMsSUFaYjtBQWFiOzs7RUFkb0JmLEk7O0FBaUJ2QmdCLE9BQU9DLE9BQVAsR0FBaUJSLFFBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcGFydCcpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBSdWxlTmFtZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3J1bGVOYW1lJyksXG4gICAgICBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcGFydFJ1bGUvdGVybWluYWwnKSxcbiAgICAgIE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IFBhcnRSdWxlTmFtZSwgTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKE5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFBhcnROb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydFJ1bGU7XG4iXX0=