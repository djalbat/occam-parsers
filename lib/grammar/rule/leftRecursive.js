'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    ProductionNamePart = require('../../common/part/productionName');

var LeftRecursiveRule = function (_Rule) {
  _inherits(LeftRecursiveRule, _Rule);

  function LeftRecursiveRule() {
    _classCallCheck(this, LeftRecursiveRule);

    return _possibleConstructorReturn(this, (LeftRecursiveRule.__proto__ || Object.getPrototypeOf(LeftRecursiveRule)).apply(this, arguments));
  }

  _createClass(LeftRecursiveRule, null, [{
    key: 'fromRuleAndProductionName',
    value: function fromRuleAndProductionName(rule, productionName) {
      var leftRecursiveRule = null;

      var ruleFirstPart = rule.getFirstPart();

      if (ruleFirstPart instanceof ProductionNamePart) {
        var ruleFirstProductionNamePart = ruleFirstPart,
            ///
        ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName();

        if (ruleFirstProductionNamePartProductionName === productionName) {
          var parts = rule.getParts();

          leftRecursiveRule = new LeftRecursiveRule(parts);
        }
      }

      return leftRecursiveRule;
    }
  }]);

  return LeftRecursiveRule;
}(Rule);

module.exports = LeftRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvbGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIkxlZnRSZWN1cnNpdmVSdWxlIiwicnVsZSIsInByb2R1Y3Rpb25OYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlRmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwicnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwicnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsbUJBQVIsQ0FBYjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxrQ0FBUixDQUQzQjs7SUFHTUUsaUI7Ozs7Ozs7Ozs7OzhDQUM2QkMsSSxFQUFNQyxjLEVBQWdCO0FBQ3JELFVBQUlDLG9CQUFvQixJQUF4Qjs7QUFFQSxVQUFNQyxnQkFBZ0JILEtBQUtJLFlBQUwsRUFBdEI7O0FBRUEsVUFBSUQseUJBQXlCTCxrQkFBN0IsRUFBaUQ7QUFDL0MsWUFBTU8sOEJBQThCRixhQUFwQztBQUFBLFlBQW9EO0FBQzlDRyxvREFBNENELDRCQUE0QkUsaUJBQTVCLEVBRGxEOztBQUdBLFlBQUlELDhDQUE4Q0wsY0FBbEQsRUFBa0U7QUFDaEUsY0FBTU8sUUFBUVIsS0FBS1MsUUFBTCxFQUFkOztBQUVBUCw4QkFBb0IsSUFBSUgsaUJBQUosQ0FBc0JTLEtBQXRCLENBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPTixpQkFBUDtBQUNEOzs7O0VBbEI2Qk4sSTs7QUFxQmhDYyxPQUFPQyxPQUFQLEdBQWlCWixpQkFBakIiLCJmaWxlIjoibGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBMZWZ0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRQcm9kdWN0aW9uTmFtZShydWxlLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlUnVsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcnVsZUZpcnN0UGFydCA9IHJ1bGUuZ2V0Rmlyc3RQYXJ0KCk7XG4gICAgXG4gICAgaWYgKHJ1bGVGaXJzdFBhcnQgaW5zdGFuY2VvZiBQcm9kdWN0aW9uTmFtZVBhcnQpIHtcbiAgICAgIGNvbnN0IHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHJ1bGVGaXJzdFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCk7XG4gICAgICBcbiAgICAgIGlmIChydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBydWxlLmdldFBhcnRzKCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGUgPSBuZXcgTGVmdFJlY3Vyc2l2ZVJ1bGUocGFydHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExlZnRSZWN1cnNpdmVSdWxlO1xuIl19