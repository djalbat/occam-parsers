'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DefinitionNode = require('../node/definition'),
    LookAheadModifierRuleDefinition = require('../definition/lookAheadModifierRule');

var LookAheadModifierRuleName = ruleNames.LookAheadModifierRuleName;

var LookAheadModifierRule = function (_Rule) {
  _inherits(LookAheadModifierRule, _Rule);

  function LookAheadModifierRule() {
    _classCallCheck(this, LookAheadModifierRule);

    var name = LookAheadModifierRuleName,
        lookAheadModifierRuleDefinition = new LookAheadModifierRuleDefinition(),
        definitions = [lookAheadModifierRuleDefinition],
        Node = DefinitionNode;

    return _possibleConstructorReturn(this, (LookAheadModifierRule.__proto__ || Object.getPrototypeOf(LookAheadModifierRule)).call(this, name, definitions, Node));
  }

  return LookAheadModifierRule;
}(Rule);

module.exports = LookAheadModifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9sb29rQWhlYWRNb2RpZmllci5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb25Ob2RlIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJuYW1lIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCO0FBQUEsSUFHTUcsa0NBQWtDSCxRQUFRLHFDQUFSLENBSHhDOztJQUtRSSx5QixHQUE4QkgsUyxDQUE5QkcseUI7O0lBRUZDLHFCOzs7QUFDSixtQ0FBYztBQUFBOztBQUNaLFFBQU1DLE9BQU9GLHlCQUFiO0FBQUEsUUFDTUcsa0NBQWtDLElBQUlKLCtCQUFKLEVBRHhDO0FBQUEsUUFFTUssY0FBYyxDQUNaRCwrQkFEWSxDQUZwQjtBQUFBLFFBS01FLE9BQU9QLGNBTGI7O0FBRFkseUlBUU5JLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZpQ1YsSTs7QUFhcENXLE9BQU9DLE9BQVAsR0FBaUJOLHFCQUFqQiIsImZpbGUiOiJsb29rQWhlYWRNb2RpZmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbk5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2RlZmluaXRpb24nKSxcbiAgICAgIExvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2xvb2tBaGVhZE1vZGlmaWVyUnVsZScpO1xuXG5jb25zdCB7IExvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9va0FoZWFkTW9kaWZpZXJSdWxlO1xuIl19