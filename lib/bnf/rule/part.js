'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    PartNode = require('../node/part'),
    ruleNames = require('../ruleNames'),
    TerminalPartRuleDefinition = require('../definition/partRule/terminal'),
    NonTerminalPartRuleDefinition = require('../definition/partRule/nonTerminal');

var PartRuleName = ruleNames.PartRuleName;

var PartRule = function (_Rule) {
  _inherits(PartRule, _Rule);

  function PartRule() {
    _classCallCheck(this, PartRule);

    var name = PartRuleName,
        terminalPartRuleDefinition = new TerminalPartRuleDefinition(),
        nonTerminalPartRuleDefinition = new NonTerminalPartRuleDefinition(),
        definitions = [terminalPartRuleDefinition, nonTerminalPartRuleDefinition],
        Node = PartNode;

    return _possibleConstructorReturn(this, (PartRule.__proto__ || Object.getPrototypeOf(PartRule)).call(this, name, definitions, Node));
  }

  return PartRule;
}(Rule);

module.exports = PartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiUGFydE5vZGUiLCJydWxlTmFtZXMiLCJUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIk5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiUGFydFJ1bGVOYW1lIiwiUGFydFJ1bGUiLCJuYW1lIiwidGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsV0FBV0QsUUFBUSxjQUFSLENBRGpCO0FBQUEsSUFFTUUsWUFBWUYsUUFBUSxjQUFSLENBRmxCO0FBQUEsSUFHTUcsNkJBQTZCSCxRQUFRLGlDQUFSLENBSG5DO0FBQUEsSUFJTUksZ0NBQWdDSixRQUFRLG9DQUFSLENBSnRDOztJQU1RSyxZLEdBQWlCSCxTLENBQWpCRyxZOztJQUVGQyxROzs7QUFDSixzQkFBYztBQUFBOztBQUNaLFFBQU1DLE9BQU9GLFlBQWI7QUFBQSxRQUNNRyw2QkFBNkIsSUFBSUwsMEJBQUosRUFEbkM7QUFBQSxRQUVNTSxnQ0FBZ0MsSUFBSUwsNkJBQUosRUFGdEM7QUFBQSxRQUdNTSxjQUFjLENBQ1pGLDBCQURZLEVBRVpDLDZCQUZZLENBSHBCO0FBQUEsUUFPTUUsT0FBT1YsUUFQYjs7QUFEWSwrR0FVTk0sSUFWTSxFQVVBRyxXQVZBLEVBVWFDLElBVmI7QUFXYjs7O0VBWm9CWixJOztBQWV2QmEsT0FBT0MsT0FBUCxHQUFpQlAsUUFBakIiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFBhcnROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9wYXJ0JyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbCcpLFxuICAgICAgTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFBhcnROb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydFJ1bGU7XG4iXX0=