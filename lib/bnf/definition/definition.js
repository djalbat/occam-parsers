'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

var PartRuleName = ruleNames.PartRuleName;

var DefinitionDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(DefinitionDefinition, _Definition);

  function DefinitionDefinition() {
    _classCallCheck(this, DefinitionDefinition);

    var partRuleName = PartRuleName,
        partRuleNamePart = new RuleNamePart(partRuleName),
        oneOrMoreRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
        parts = [oneOrMoreRuleNamePartsPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionDefinition).call(this, parts));
  }

  return DefinitionDefinition;
}(Definition);

module.exports = DefinitionDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsicnVsZU5hbWVzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJQYXJ0UnVsZU5hbWUiLCJEZWZpbml0aW9uRGVmaW5pdGlvbiIsInBhcnRSdWxlTmFtZSIsInBhcnRSdWxlTmFtZVBhcnQiLCJvbmVPck1vcmVSdWxlTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUQxQjtBQUFBLElBRU1FLFlBQVksR0FBR0YsT0FBTyxDQUFDLDhCQUFELENBRjVCO0FBQUEsSUFHTUcsa0JBQWtCLEdBQUdILE9BQU8sQ0FBQyxvQ0FBRCxDQUhsQzs7SUFLUUksWSxHQUFpQkwsUyxDQUFqQkssWTs7SUFFRkMsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxHQUFHRixZQUFyQjtBQUFBLFFBQ01HLGdCQUFnQixHQUFHLElBQUlMLFlBQUosQ0FBaUJJLFlBQWpCLENBRHpCO0FBQUEsUUFFTUUsMEJBQTBCLEdBQUcsSUFBSUwsa0JBQUosQ0FBdUJJLGdCQUF2QixDQUZuQztBQUFBLFFBR01FLEtBQUssR0FBRyxDQUNORCwwQkFETSxDQUhkO0FBRFksNkZBUU5DLEtBUk07QUFTYjs7O0VBVmdDUixVOztBQWFuQ1MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixvQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHMnKTtcblxuY29uc3QgeyBQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgRGVmaW5pdGlvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lID0gUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgb25lT3JNb3JlUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnRSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uRGVmaW5pdGlvbjtcbiJdfQ==