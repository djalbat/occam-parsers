'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ProductionNamePart = require('../part/productionName'),
    ZeroOrMorePartsPart = require('../part/zeroOrMoreParts');

var RulesRule = function (_Rule) {
  _inherits(RulesRule, _Rule);

  function RulesRule() {
    _classCallCheck(this, RulesRule);

    var terminalPart = null,
        noWhitespace = false,
        ruleProductionName = 'rule',
        ruleProductionNamePart = new ProductionNamePart(ruleProductionName, noWhitespace),
        orThenRuleProductionName = 'orThenRule',
        zeroOrMoreOrThenRuleProductionNamePartsPart = new ZeroOrMorePartsPart(terminalPart, orThenRuleProductionName, noWhitespace),
        parts = [ruleProductionNamePart, zeroOrMoreOrThenRuleProductionNamePartsPart];

    return _possibleConstructorReturn(this, (RulesRule.__proto__ || Object.getPrototypeOf(RulesRule)).call(this, parts));
  }

  return RulesRule;
}(Rule);

module.exports = RulesRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ydWxlcy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSdWxlc1J1bGUiLCJ0ZXJtaW5hbFBhcnQiLCJub1doaXRlc3BhY2UiLCJydWxlUHJvZHVjdGlvbk5hbWUiLCJydWxlUHJvZHVjdGlvbk5hbWVQYXJ0Iiwib3JUaGVuUnVsZVByb2R1Y3Rpb25OYW1lIiwiemVyb09yTW9yZU9yVGhlblJ1bGVQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSxzQkFBc0JGLFFBQVEseUJBQVIsQ0FGNUI7O0lBSU1HLFM7OztBQUNKLHVCQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxJQUFyQjtBQUFBLFFBQ01DLGVBQWUsS0FEckI7QUFBQSxRQUVNQyxxQkFBcUIsTUFGM0I7QUFBQSxRQUdNQyx5QkFBeUIsSUFBSU4sa0JBQUosQ0FBdUJLLGtCQUF2QixFQUEyQ0QsWUFBM0MsQ0FIL0I7QUFBQSxRQUlNRywyQkFBMkIsWUFKakM7QUFBQSxRQUtNQyw4Q0FBOEMsSUFBSVAsbUJBQUosQ0FBd0JFLFlBQXhCLEVBQXNDSSx3QkFBdEMsRUFBZ0VILFlBQWhFLENBTHBEO0FBQUEsUUFNTUssUUFBUSxDQUNOSCxzQkFETSxFQUVORSwyQ0FGTSxDQU5kOztBQURZLGlIQVlOQyxLQVpNO0FBYWI7OztFQWRxQlgsSTs7QUFpQnhCWSxPQUFPQyxPQUFQLEdBQWlCVCxTQUFqQiIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBSdWxlc1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gbnVsbCxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBydWxlUHJvZHVjdGlvbk5hbWUgPSAncnVsZScsXG4gICAgICAgICAgcnVsZVByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocnVsZVByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIG9yVGhlblJ1bGVQcm9kdWN0aW9uTmFtZSA9ICdvclRoZW5SdWxlJyxcbiAgICAgICAgICB6ZXJvT3JNb3JlT3JUaGVuUnVsZVByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQodGVybWluYWxQYXJ0LCBvclRoZW5SdWxlUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlUHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgemVyb09yTW9yZU9yVGhlblJ1bGVQcm9kdWN0aW9uTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlc1J1bGU7XG4iXX0=