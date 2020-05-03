"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require("../rule"),
    PartNode = require("../node/part"),
    ruleNames = require("../ruleNames"),
    RuleNameDefinition = require("../definition/ruleName");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YW50aWZpZXIuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJQYXJ0Tm9kZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlF1YW50aWZpZXJSdWxlIiwibmFtZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24iLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01DLFFBQVEsR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FEeEI7QUFBQSxJQUVNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBRnpCO0FBQUEsSUFHTUcsa0JBQWtCLEdBQUdILE9BQU8sQ0FBQyx3QkFBRCxDQUhsQzs7SUFLUUksa0IsR0FBOEdGLFMsQ0FBOUdFLGtCO0lBQW9CQywwQixHQUEwRkgsUyxDQUExRkcsMEI7SUFBNEJDLDJCLEdBQThESixTLENBQTlESSwyQjtJQUE2QkMsNEIsR0FBaUNMLFMsQ0FBakNLLDRCOztJQUUvRUMsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdMLGtCQUFiO0FBQUEsUUFDTU0sMEJBQTBCLEdBQUdMLDBCQURuQztBQUFBLFFBRU1NLDJCQUEyQixHQUFHTCwyQkFGcEM7QUFBQSxRQUdNTSw0QkFBNEIsR0FBR0wsNEJBSHJDO0FBQUEsUUFJTU0sb0NBQW9DLEdBQUcsSUFBSVYsa0JBQUosQ0FBdUJPLDBCQUF2QixDQUo3QztBQUFBLFFBS01JLHFDQUFxQyxHQUFHLElBQUlYLGtCQUFKLENBQXVCUSwyQkFBdkIsQ0FMOUM7QUFBQSxRQU1NSSxzQ0FBc0MsR0FBRyxJQUFJWixrQkFBSixDQUF1QlMsNEJBQXZCLENBTi9DO0FBQUEsUUFPTUksV0FBVyxHQUFHLENBQ1pILG9DQURZLEVBRVpDLHFDQUZZLEVBR1pDLHNDQUhZLENBUHBCO0FBQUEsUUFZTUUsSUFBSSxHQUFHaEIsUUFaYjtBQURZLHVGQWVOUSxJQWZNLEVBZUFPLFdBZkEsRUFlYUMsSUFmYjtBQWdCYjs7O0VBakIwQmxCLEk7O0FBb0I3Qm1CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoXCIuLi9ydWxlXCIpLFxuICAgICAgUGFydE5vZGUgPSByZXF1aXJlKFwiLi4vbm9kZS9wYXJ0XCIpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZShcIi4uL3J1bGVOYW1lc1wiKSxcbiAgICAgIFJ1bGVOYW1lRGVmaW5pdGlvbiA9IHJlcXVpcmUoXCIuLi9kZWZpbml0aW9uL3J1bGVOYW1lXCIpO1xuXG5jb25zdCB7IFF1YW50aWZpZXJSdWxlTmFtZSwgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsIE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSwgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBRdWFudGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lID0gT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgPSBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ob3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUGFydE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWFudGlmaWVyUnVsZTtcbiJdfQ==