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
        parts = [ruleProductionNamePart /*,
                                        zeroOrMoreOrThenRuleProductionNamePartsPart*/
    ];

    return _possibleConstructorReturn(this, (RulesRule.__proto__ || Object.getPrototypeOf(RulesRule)).call(this, parts));
  }

  return RulesRule;
}(Rule);

module.exports = RulesRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ydWxlcy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSdWxlc1J1bGUiLCJ0ZXJtaW5hbFBhcnQiLCJub1doaXRlc3BhY2UiLCJydWxlUHJvZHVjdGlvbk5hbWUiLCJydWxlUHJvZHVjdGlvbk5hbWVQYXJ0Iiwib3JUaGVuUnVsZVByb2R1Y3Rpb25OYW1lIiwiemVyb09yTW9yZU9yVGhlblJ1bGVQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSxzQkFBc0JGLFFBQVEseUJBQVIsQ0FGNUI7O0lBSU1HLFM7OztBQUNKLHVCQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxJQUFyQjtBQUFBLFFBQ01DLGVBQWUsS0FEckI7QUFBQSxRQUVNQyxxQkFBcUIsTUFGM0I7QUFBQSxRQUdNQyx5QkFBeUIsSUFBSU4sa0JBQUosQ0FBdUJLLGtCQUF2QixFQUEyQ0QsWUFBM0MsQ0FIL0I7QUFBQSxRQUlNRywyQkFBMkIsWUFKakM7QUFBQSxRQUtNQyw4Q0FBOEMsSUFBSVAsbUJBQUosQ0FBd0JFLFlBQXhCLEVBQXNDSSx3QkFBdEMsRUFBZ0VILFlBQWhFLENBTHBEO0FBQUEsUUFNTUssUUFBUSxDQUNOSCxzQkFETSxDQUNnQjs7QUFEaEIsS0FOZDs7QUFEWSxpSEFZTkcsS0FaTTtBQWFiOzs7RUFkcUJYLEk7O0FBaUJ4QlksT0FBT0MsT0FBUCxHQUFpQlQsU0FBakIiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC96ZXJvT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgUnVsZXNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcnVsZVByb2R1Y3Rpb25OYW1lID0gJ3J1bGUnLFxuICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHJ1bGVQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBvclRoZW5SdWxlUHJvZHVjdGlvbk5hbWUgPSAnb3JUaGVuUnVsZScsXG4gICAgICAgICAgemVyb09yTW9yZU9yVGhlblJ1bGVQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHRlcm1pbmFsUGFydCwgb3JUaGVuUnVsZVByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZVByb2R1Y3Rpb25OYW1lUGFydC8qLFxuICAgICAgICAgICAgemVyb09yTW9yZU9yVGhlblJ1bGVQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCovXG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzUnVsZTtcbiJdfQ==