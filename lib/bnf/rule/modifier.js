'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    PartNode = require('../node/part'),
    ruleNames = require('../ruleNames'),
    RuleNameDefinition = require('../definition/ruleName');

var OptionalModifierRuleName = ruleNames.OptionalModifierRuleName,
    OneOrMoreModifierRuleName = ruleNames.OneOrMoreModifierRuleName,
    ZeroOrMoreModifierRuleName = ruleNames.ZeroOrMoreModifierRuleName;

var ModifierRule = function (_Rule) {
  _inherits(ModifierRule, _Rule);

  function ModifierRule() {
    _classCallCheck(this, ModifierRule);

    var name = PartRuleName,
        optionalModifierRuleName = OptionalModifierRuleName,
        oneOrMoreModifierRuleName = OneOrMoreModifierRuleName,
        zeroOrMoreModifierRuleName = ZeroOrMoreModifierRuleName,
        optionalModifierRuleNameDefinition = new RuleNameDefinition(optionalModifierRuleName),
        oneOrMoreModifierRuleNameDefinition = new RuleNameDefinition(oneOrMoreModifierRuleName),
        zeroOrMoreModifierRuleNameDefinition = new RuleNameDefinition(zeroOrMoreModifierRuleName),
        definitions = [optionalModifierRuleNameDefinition, oneOrMoreModifierRuleNameDefinition, zeroOrMoreModifierRuleNameDefinition],
        Node = PartNode;

    return _possibleConstructorReturn(this, (ModifierRule.__proto__ || Object.getPrototypeOf(ModifierRule)).call(this, name, definitions, Node));
  }

  return ModifierRule;
}(Rule);

module.exports = ModifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9tb2RpZmllci5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlBhcnROb2RlIiwicnVsZU5hbWVzIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiT3B0aW9uYWxNb2RpZmllclJ1bGVOYW1lIiwiT25lT3JNb3JlTW9kaWZpZXJSdWxlTmFtZSIsIlplcm9Pck1vcmVNb2RpZmllclJ1bGVOYW1lIiwiTW9kaWZpZXJSdWxlIiwibmFtZSIsIlBhcnRSdWxlTmFtZSIsIm9wdGlvbmFsTW9kaWZpZXJSdWxlTmFtZSIsIm9uZU9yTW9yZU1vZGlmaWVyUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlTW9kaWZpZXJSdWxlTmFtZSIsIm9wdGlvbmFsTW9kaWZpZXJSdWxlTmFtZURlZmluaXRpb24iLCJvbmVPck1vcmVNb2RpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiIsInplcm9Pck1vcmVNb2RpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsV0FBV0QsUUFBUSxjQUFSLENBRGpCO0FBQUEsSUFFTUUsWUFBWUYsUUFBUSxjQUFSLENBRmxCO0FBQUEsSUFHTUcscUJBQXFCSCxRQUFRLHdCQUFSLENBSDNCOztJQUtRSSx3QixHQUFvRkYsUyxDQUFwRkUsd0I7SUFBMEJDLHlCLEdBQTBESCxTLENBQTFERyx5QjtJQUEyQkMsMEIsR0FBK0JKLFMsQ0FBL0JJLDBCOztJQUV2REMsWTs7O0FBQ0osMEJBQWM7QUFBQTs7QUFDWixRQUFNQyxPQUFPQyxZQUFiO0FBQUEsUUFDTUMsMkJBQTJCTix3QkFEakM7QUFBQSxRQUVNTyw0QkFBNEJOLHlCQUZsQztBQUFBLFFBR01PLDZCQUE2Qk4sMEJBSG5DO0FBQUEsUUFJTU8scUNBQXFDLElBQUlWLGtCQUFKLENBQXVCTyx3QkFBdkIsQ0FKM0M7QUFBQSxRQUtNSSxzQ0FBc0MsSUFBSVgsa0JBQUosQ0FBdUJRLHlCQUF2QixDQUw1QztBQUFBLFFBTU1JLHVDQUF1QyxJQUFJWixrQkFBSixDQUF1QlMsMEJBQXZCLENBTjdDO0FBQUEsUUFPTUksY0FBYyxDQUNaSCxrQ0FEWSxFQUVaQyxtQ0FGWSxFQUdaQyxvQ0FIWSxDQVBwQjtBQUFBLFFBWU1FLE9BQU9oQixRQVpiOztBQURZLHVIQWVOTyxJQWZNLEVBZUFRLFdBZkEsRUFlYUMsSUFmYjtBQWdCYjs7O0VBakJ3QmxCLEk7O0FBb0IzQm1CLE9BQU9DLE9BQVAsR0FBaUJaLFlBQWpCIiwiZmlsZSI6Im1vZGlmaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUGFydE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgUnVsZU5hbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ydWxlTmFtZScpO1xuXG5jb25zdCB7IE9wdGlvbmFsTW9kaWZpZXJSdWxlTmFtZSwgT25lT3JNb3JlTW9kaWZpZXJSdWxlTmFtZSwgWmVyb09yTW9yZU1vZGlmaWVyUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTW9kaWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgb3B0aW9uYWxNb2RpZmllclJ1bGVOYW1lID0gT3B0aW9uYWxNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9uZU9yTW9yZU1vZGlmaWVyUnVsZU5hbWUgPSBPbmVPck1vcmVNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIHplcm9Pck1vcmVNb2RpZmllclJ1bGVOYW1lID0gWmVyb09yTW9yZU1vZGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb3B0aW9uYWxNb2RpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ob3B0aW9uYWxNb2RpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBvbmVPck1vcmVNb2RpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ob25lT3JNb3JlTW9kaWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZU1vZGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbih6ZXJvT3JNb3JlTW9kaWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbE1vZGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgb25lT3JNb3JlTW9kaWZpZXJSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB6ZXJvT3JNb3JlTW9kaWZpZXJSdWxlTmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGlmaWVyUnVsZTtcbiJdfQ==