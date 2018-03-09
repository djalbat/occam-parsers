'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ruleNames = require('../ruleNames'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

var RuleRuleName = ruleNames.RuleRuleName;

var RulesDefinition = function (_Definition) {
  _inherits(RulesDefinition, _Definition);

  function RulesDefinition() {
    _classCallCheck(this, RulesDefinition);

    var ruleRuleName = RuleRuleName,
        ruleRuleNamePart = new RuleNamePart(ruleRuleName),
        oneOrMoreRuleRuleNamePartsPart = new OneOrMorePartsPart(ruleRuleNamePart),
        parts = [oneOrMoreRuleRuleNamePartsPart];

    return _possibleConstructorReturn(this, (RulesDefinition.__proto__ || Object.getPrototypeOf(RulesDefinition)).call(this, parts));
  }

  return RulesDefinition;
}(Definition);

module.exports = RulesDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlcy5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlJ1bGVSdWxlTmFtZSIsIlJ1bGVzRGVmaW5pdGlvbiIsInJ1bGVSdWxlTmFtZSIsInJ1bGVSdWxlTmFtZVBhcnQiLCJvbmVPck1vcmVSdWxlUnVsZU5hbWVQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsOEJBQVIsQ0FGckI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsb0NBQVIsQ0FIM0I7O0lBS1FJLFksR0FBaUJILFMsQ0FBakJHLFk7O0lBRUZDLGU7OztBQUNKLDZCQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZUYsWUFBckI7QUFBQSxRQUNNRyxtQkFBbUIsSUFBSUwsWUFBSixDQUFpQkksWUFBakIsQ0FEekI7QUFBQSxRQUVNRSxpQ0FBaUMsSUFBSUwsa0JBQUosQ0FBdUJJLGdCQUF2QixDQUZ2QztBQUFBLFFBR01FLFFBQVEsQ0FDTkQsOEJBRE0sQ0FIZDs7QUFEWSw2SEFRTkMsS0FSTTtBQVNiOzs7RUFWMkJWLFU7O0FBYTlCVyxPQUFPQyxPQUFQLEdBQWlCTixlQUFqQiIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IFJ1bGVSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSdWxlc0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZVJ1bGVOYW1lID0gUnVsZVJ1bGVOYW1lLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVSdWxlTmFtZSksXG4gICAgICAgICAgb25lT3JNb3JlUnVsZVJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChydWxlUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVJ1bGVSdWxlTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlc0RlZmluaXRpb247XG4iXX0=