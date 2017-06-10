'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule');

var UnitRule = function (_Rule) {
  _inherits(UnitRule, _Rule);

  function UnitRule() {
    _classCallCheck(this, UnitRule);

    return _possibleConstructorReturn(this, (UnitRule.__proto__ || Object.getPrototypeOf(UnitRule)).apply(this, arguments));
  }

  _createClass(UnitRule, null, [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var unitRule = null;

      var rulePartsLength = rule.getPartsLength(),
          ruleFirstProductionNamePart = rule.getFirstProductionNamePart();

      if (rulePartsLength === 1 && ruleFirstProductionNamePart !== null) {
        if (ruleFirstProductionNamePart !== null) {
          var ruleParts = rule.getParts(),
              parts = ruleParts; ///

          unitRule = new UnitRule(parts);
        }
      }

      return unitRule;
    }
  }]);

  return UnitRule;
}(Rule);

module.exports = UnitRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvbm9uVW5pdC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlVuaXRSdWxlIiwicnVsZSIsInVuaXRSdWxlIiwicnVsZVBhcnRzTGVuZ3RoIiwiZ2V0UGFydHNMZW5ndGgiLCJydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJnZXRGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCIsInJ1bGVQYXJ0cyIsImdldFBhcnRzIiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsbUJBQVIsQ0FBYjs7SUFFTUMsUTs7Ozs7Ozs7Ozs7NkJBQ1lDLEksRUFBTTtBQUNwQixVQUFJQyxXQUFXLElBQWY7O0FBRUEsVUFBTUMsa0JBQWtCRixLQUFLRyxjQUFMLEVBQXhCO0FBQUEsVUFDTUMsOEJBQThCSixLQUFLSywwQkFBTCxFQURwQzs7QUFHQSxVQUFLSCxvQkFBb0IsQ0FBckIsSUFBNEJFLGdDQUFnQyxJQUFoRSxFQUF1RTtBQUNyRSxZQUFJQSxnQ0FBZ0MsSUFBcEMsRUFBMEM7QUFDeEMsY0FBTUUsWUFBWU4sS0FBS08sUUFBTCxFQUFsQjtBQUFBLGNBQ01DLFFBQVFGLFNBRGQsQ0FEd0MsQ0FFZDs7QUFFMUJMLHFCQUFXLElBQUlGLFFBQUosQ0FBYVMsS0FBYixDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPUCxRQUFQO0FBQ0Q7Ozs7RUFqQm9CSixJOztBQW9CdkJZLE9BQU9DLE9BQVAsR0FBaUJYLFFBQWpCIiwiZmlsZSI6Im5vblVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcnVsZScpO1xuXG5jbGFzcyBVbml0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCB1bml0UnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlUGFydHNMZW5ndGggPSBydWxlLmdldFBhcnRzTGVuZ3RoKCksXG4gICAgICAgICAgcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gcnVsZS5nZXRGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCgpO1xuXG4gICAgaWYgKChydWxlUGFydHNMZW5ndGggPT09IDEpICYmIChydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpKSB7XG4gICAgICBpZiAocnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVQYXJ0cyA9IHJ1bGUuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgcGFydHMgPSBydWxlUGFydHM7ICAvLy9cblxuICAgICAgICB1bml0UnVsZSA9IG5ldyBVbml0UnVsZShwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdFJ1bGU7XG4iXX0=