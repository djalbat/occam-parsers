'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var OrThenRuleRule = function (_Rule) {
  _inherits(OrThenRuleRule, _Rule);

  function OrThenRuleRule() {
    _classCallCheck(this, OrThenRuleRule);

    var noWhitespace = false,
        ruleProductionName = 'rule',
        ruleProductionNamePart = new ProductionNamePart(ruleProductionName, noWhitespace),
        orSymbol = '|',
        orTerminalSymbolPart = new TerminalSymbolPart(orSymbol, noWhitespace),
        parts = [ruleProductionNamePart, orTerminalSymbolPart];

    return _possibleConstructorReturn(this, (OrThenRuleRule.__proto__ || Object.getPrototypeOf(OrThenRuleRule)).call(this, parts));
  }

  return OrThenRuleRule;
}(Rule);

module.exports = OrThenRuleRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9vclRoZW5SdWxlLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiT3JUaGVuUnVsZVJ1bGUiLCJub1doaXRlc3BhY2UiLCJydWxlUHJvZHVjdGlvbk5hbWUiLCJydWxlUHJvZHVjdGlvbk5hbWVQYXJ0Iiwib3JTeW1ib2wiLCJvclRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0lBSU1HLGM7OztBQUNKLDRCQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLHFCQUFxQixNQUQzQjtBQUFBLFFBRU1DLHlCQUF5QixJQUFJSixrQkFBSixDQUF1Qkcsa0JBQXZCLEVBQTJDRCxZQUEzQyxDQUYvQjtBQUFBLFFBR01HLFdBQVcsR0FIakI7QUFBQSxRQUlNQyx1QkFBdUIsSUFBSVAsa0JBQUosQ0FBdUJNLFFBQXZCLEVBQWlDSCxZQUFqQyxDQUo3QjtBQUFBLFFBS01LLFFBQVEsQ0FDTkgsc0JBRE0sRUFFTkUsb0JBRk0sQ0FMZDs7QUFEWSwySEFXTkMsS0FYTTtBQVliOzs7RUFiMEJWLEk7O0FBZ0I3QlcsT0FBT0MsT0FBUCxHQUFpQlIsY0FBakIiLCJmaWxlIjoib3JUaGVuUnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgT3JUaGVuUnVsZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcnVsZVByb2R1Y3Rpb25OYW1lID0gJ3J1bGUnLFxuICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHJ1bGVQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBvclN5bWJvbCA9ICd8JyxcbiAgICAgICAgICBvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3JTeW1ib2wsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlUHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgb3JUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3JUaGVuUnVsZVJ1bGU7XG4iXX0=