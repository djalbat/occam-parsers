"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ruleNames = require("../ruleNames"),
    Definition = require("../definition"),
    RuleNamePart = require("../part/nonTerminal/ruleName"),
    OneOrMorePartsPart = require("../part/nonTerminal/oneOrMoreParts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsicnVsZU5hbWVzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJQYXJ0UnVsZU5hbWUiLCJEZWZpbml0aW9uRGVmaW5pdGlvbiIsInBhcnRSdWxlTmFtZSIsInBhcnRSdWxlTmFtZVBhcnQiLCJvbmVPck1vcmVSdWxlTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUQxQjtBQUFBLElBRU1FLFlBQVksR0FBR0YsT0FBTyxDQUFDLDhCQUFELENBRjVCO0FBQUEsSUFHTUcsa0JBQWtCLEdBQUdILE9BQU8sQ0FBQyxvQ0FBRCxDQUhsQzs7SUFLUUksWSxHQUFpQkwsUyxDQUFqQkssWTs7SUFFRkMsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxHQUFHRixZQUFyQjtBQUFBLFFBQ01HLGdCQUFnQixHQUFHLElBQUlMLFlBQUosQ0FBaUJJLFlBQWpCLENBRHpCO0FBQUEsUUFFTUUsMEJBQTBCLEdBQUcsSUFBSUwsa0JBQUosQ0FBdUJJLGdCQUF2QixDQUZuQztBQUFBLFFBR01FLEtBQUssR0FBRyxDQUNORCwwQkFETSxDQUhkO0FBRFksNkZBUU5DLEtBUk07QUFTYjs7O0VBVmdDUixVOztBQWFuQ1MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixvQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZShcIi4uL3J1bGVOYW1lc1wiKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vZGVmaW5pdGlvblwiKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCIpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZShcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIik7XG5cbmNvbnN0IHsgUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIERlZmluaXRpb25EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIG9uZU9yTW9yZVJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0UnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbkRlZmluaXRpb247XG4iXX0=