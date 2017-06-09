'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitRule = require('../rule/unit'),
    Production = require('../production');

var NonUnitProduction = function (_Production) {
  _inherits(NonUnitProduction, _Production);

  function NonUnitProduction() {
    _classCallCheck(this, NonUnitProduction);

    return _possibleConstructorReturn(this, (NonUnitProduction.__proto__ || Object.getPrototypeOf(NonUnitProduction)).apply(this, arguments));
  }

  _createClass(NonUnitProduction, null, [{
    key: 'fromCyclicProduction',
    value: function fromCyclicProduction(cyclicProduction) {
      var name = cyclicProduction.getName(),
          rules = rulesFromCyclicProduction(cyclicProduction),
          Node = cyclicProduction.getNode(),
          nonUnitProduction = new NonUnitProduction(name, rules, Node);

      return nonUnitProduction;
    }
  }]);

  return NonUnitProduction;
}(Production);

module.exports = NonUnitProduction;

function rulesFromCyclicProduction(cyclicProduction) {
  var cyclicProductionRules = cyclicProduction.getRules(),
      rules = cyclicProductionRules.reduce(function (rules, cyclicProductionRule) {
    var unitRule = UnitRule.fromRule(cyclicProductionRule);

    if (unitRule) {
      var rule = cyclicProductionRule;

      rules = rules.concat(rule);
    }

    return rules;
  }, []);

  return rules;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi9ub25Vbml0LmpzIl0sIm5hbWVzIjpbIlVuaXRSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJOb25Vbml0UHJvZHVjdGlvbiIsImN5Y2xpY1Byb2R1Y3Rpb24iLCJuYW1lIiwiZ2V0TmFtZSIsInJ1bGVzIiwicnVsZXNGcm9tQ3ljbGljUHJvZHVjdGlvbiIsIk5vZGUiLCJnZXROb2RlIiwibm9uVW5pdFByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiY3ljbGljUHJvZHVjdGlvblJ1bGVzIiwiZ2V0UnVsZXMiLCJyZWR1Y2UiLCJjeWNsaWNQcm9kdWN0aW9uUnVsZSIsInVuaXRSdWxlIiwiZnJvbVJ1bGUiLCJydWxlIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsY0FBUixDQUFqQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsZUFBUixDQURuQjs7SUFHTUUsaUI7Ozs7Ozs7Ozs7O3lDQUN3QkMsZ0IsRUFBa0I7QUFDNUMsVUFBTUMsT0FBT0QsaUJBQWlCRSxPQUFqQixFQUFiO0FBQUEsVUFDTUMsUUFBUUMsMEJBQTBCSixnQkFBMUIsQ0FEZDtBQUFBLFVBRU1LLE9BQU9MLGlCQUFpQk0sT0FBakIsRUFGYjtBQUFBLFVBR01DLG9CQUFvQixJQUFJUixpQkFBSixDQUFzQkUsSUFBdEIsRUFBNEJFLEtBQTVCLEVBQW1DRSxJQUFuQyxDQUgxQjs7QUFLQSxhQUFPRSxpQkFBUDtBQUNEOzs7O0VBUjZCVCxVOztBQVdoQ1UsT0FBT0MsT0FBUCxHQUFpQlYsaUJBQWpCOztBQUVBLFNBQVNLLHlCQUFULENBQW1DSixnQkFBbkMsRUFBcUQ7QUFDbkQsTUFBTVUsd0JBQXdCVixpQkFBaUJXLFFBQWpCLEVBQTlCO0FBQUEsTUFDTVIsUUFBUU8sc0JBQXNCRSxNQUF0QixDQUE2QixVQUFTVCxLQUFULEVBQWdCVSxvQkFBaEIsRUFBc0M7QUFDekUsUUFBTUMsV0FBV2xCLFNBQVNtQixRQUFULENBQWtCRixvQkFBbEIsQ0FBakI7O0FBRUEsUUFBSUMsUUFBSixFQUFlO0FBQ2IsVUFBTUUsT0FBT0gsb0JBQWI7O0FBRUFWLGNBQVFBLE1BQU1jLE1BQU4sQ0FBYUQsSUFBYixDQUFSO0FBQ0Q7O0FBRUQsV0FBT2IsS0FBUDtBQUNELEdBVk8sRUFVTCxFQVZLLENBRGQ7O0FBYUEsU0FBT0EsS0FBUDtBQUNEIiwiZmlsZSI6Im5vblVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaXRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS91bml0JyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBOb25Vbml0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbUN5Y2xpY1Byb2R1Y3Rpb24oY3ljbGljUHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSBjeWNsaWNQcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUN5Y2xpY1Byb2R1Y3Rpb24oY3ljbGljUHJvZHVjdGlvbiksXG4gICAgICAgICAgTm9kZSA9IGN5Y2xpY1Byb2R1Y3Rpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vblVuaXRQcm9kdWN0aW9uID0gbmV3IE5vblVuaXRQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBub25Vbml0UHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblVuaXRQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBydWxlc0Zyb21DeWNsaWNQcm9kdWN0aW9uKGN5Y2xpY1Byb2R1Y3Rpb24pIHtcbiAgY29uc3QgY3ljbGljUHJvZHVjdGlvblJ1bGVzID0gY3ljbGljUHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICBydWxlcyA9IGN5Y2xpY1Byb2R1Y3Rpb25SdWxlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXMsIGN5Y2xpY1Byb2R1Y3Rpb25SdWxlKSB7XG4gICAgICAgICAgY29uc3QgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tUnVsZShjeWNsaWNQcm9kdWN0aW9uUnVsZSk7XG5cbiAgICAgICAgICBpZiAodW5pdFJ1bGUgKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gY3ljbGljUHJvZHVjdGlvblJ1bGU7XG5cbiAgICAgICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KHJ1bGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBydWxlcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdfQ==