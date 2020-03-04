'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require('../rule'),
    PartNode = require('../node/part'),
    ruleNames = require('../ruleNames'),
    RuleNameDefinition = require('../definition/ruleName');

var QuantifierRuleName = ruleNames.QuantifierRuleName,
    OptionalQuantifierRuleName = ruleNames.OptionalQuantifierRuleName,
    OneOrMoreQuantifierRuleName = ruleNames.OneOrMoreQuantifierRuleName,
    ZeroOrMoreQuantifierRuleName = ruleNames.ZeroOrMoreQuantifierRuleName;

var QuantifierRule = /*#__PURE__*/function (_Rule) {
  _inherits(QuantifierRule, _Rule);

  function QuantifierRule() {
    _classCallCheck(this, QuantifierRule);

    var name = QuantifierRuleName,
        optionalQuantifierRuleName = OptionalQuantifierRuleName,
        oneOrMoreQuantifierRuleName = OneOrMoreQuantifierRuleName,
        zeroOrMoreQuantifierRuleName = ZeroOrMoreQuantifierRuleName,
        optionalQuantifierRuleNameDefinition = new RuleNameDefinition(optionalQuantifierRuleName),
        oneOrMoreQuantifierRuleNameDefinition = new RuleNameDefinition(oneOrMoreQuantifierRuleName),
        zeroOrMoreQuantifierRuleNameDefinition = new RuleNameDefinition(zeroOrMoreQuantifierRuleName),
        definitions = [optionalQuantifierRuleNameDefinition, oneOrMoreQuantifierRuleNameDefinition, zeroOrMoreQuantifierRuleNameDefinition],
        Node = PartNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(QuantifierRule).call(this, name, definitions, Node));
  }

  return QuantifierRule;
}(Rule);

module.exports = QuantifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YW50aWZpZXIuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQYXJ0Tm9kZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlF1YW50aWZpZXJSdWxlIiwibmFtZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24iLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01DLFFBQVEsR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FEeEI7QUFBQSxJQUVNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBRnpCO0FBQUEsSUFHTUcsa0JBQWtCLEdBQUdILE9BQU8sQ0FBQyx3QkFBRCxDQUhsQzs7SUFLUUksa0IsR0FBOEdGLFMsQ0FBOUdFLGtCO0lBQW9CQywwQixHQUEwRkgsUyxDQUExRkcsMEI7SUFBNEJDLDJCLEdBQThESixTLENBQTlESSwyQjtJQUE2QkMsNEIsR0FBaUNMLFMsQ0FBakNLLDRCOztJQUUvRUMsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdMLGtCQUFiO0FBQUEsUUFDTU0sMEJBQTBCLEdBQUdMLDBCQURuQztBQUFBLFFBRU1NLDJCQUEyQixHQUFHTCwyQkFGcEM7QUFBQSxRQUdNTSw0QkFBNEIsR0FBR0wsNEJBSHJDO0FBQUEsUUFJTU0sb0NBQW9DLEdBQUcsSUFBSVYsa0JBQUosQ0FBdUJPLDBCQUF2QixDQUo3QztBQUFBLFFBS01JLHFDQUFxQyxHQUFHLElBQUlYLGtCQUFKLENBQXVCUSwyQkFBdkIsQ0FMOUM7QUFBQSxRQU1NSSxzQ0FBc0MsR0FBRyxJQUFJWixrQkFBSixDQUF1QlMsNEJBQXZCLENBTi9DO0FBQUEsUUFPTUksV0FBVyxHQUFHLENBQ1pILG9DQURZLEVBRVpDLHFDQUZZLEVBR1pDLHNDQUhZLENBUHBCO0FBQUEsUUFZTUUsSUFBSSxHQUFHaEIsUUFaYjtBQURZLHVGQWVOUSxJQWZNLEVBZUFPLFdBZkEsRUFlYUMsSUFmYjtBQWdCYjs7O0VBakIwQmxCLEk7O0FBb0I3Qm1CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcGFydCcpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBSdWxlTmFtZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgUXVhbnRpZmllclJ1bGVOYW1lLCBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSwgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFF1YW50aWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgPSBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgPSBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA9IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ob25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1YW50aWZpZXJSdWxlO1xuIl19