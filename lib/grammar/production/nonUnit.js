'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitRule = require('../rule/unit'),
    Production = require('../../common/production');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uVW5pdC5qcyJdLCJuYW1lcyI6WyJVbml0UnVsZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uIiwiTm9uVW5pdFByb2R1Y3Rpb24iLCJjeWNsaWNQcm9kdWN0aW9uIiwibmFtZSIsImdldE5hbWUiLCJydWxlcyIsInJ1bGVzRnJvbUN5Y2xpY1Byb2R1Y3Rpb24iLCJOb2RlIiwiZ2V0Tm9kZSIsIm5vblVuaXRQcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImN5Y2xpY1Byb2R1Y3Rpb25SdWxlcyIsImdldFJ1bGVzIiwicmVkdWNlIiwiY3ljbGljUHJvZHVjdGlvblJ1bGUiLCJ1bml0UnVsZSIsImZyb21SdWxlIiwicnVsZSIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGNBQVIsQ0FBakI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLHlCQUFSLENBRG5COztJQUdNRSxpQjs7Ozs7Ozs7Ozs7eUNBQ3dCQyxnQixFQUFrQjtBQUM1QyxVQUFNQyxPQUFPRCxpQkFBaUJFLE9BQWpCLEVBQWI7QUFBQSxVQUNNQyxRQUFRQywwQkFBMEJKLGdCQUExQixDQURkO0FBQUEsVUFFTUssT0FBT0wsaUJBQWlCTSxPQUFqQixFQUZiO0FBQUEsVUFHTUMsb0JBQW9CLElBQUlSLGlCQUFKLENBQXNCRSxJQUF0QixFQUE0QkUsS0FBNUIsRUFBbUNFLElBQW5DLENBSDFCOztBQUtBLGFBQU9FLGlCQUFQO0FBQ0Q7Ozs7RUFSNkJULFU7O0FBV2hDVSxPQUFPQyxPQUFQLEdBQWlCVixpQkFBakI7O0FBRUEsU0FBU0sseUJBQVQsQ0FBbUNKLGdCQUFuQyxFQUFxRDtBQUNuRCxNQUFNVSx3QkFBd0JWLGlCQUFpQlcsUUFBakIsRUFBOUI7QUFBQSxNQUNNUixRQUFRTyxzQkFBc0JFLE1BQXRCLENBQTZCLFVBQVNULEtBQVQsRUFBZ0JVLG9CQUFoQixFQUFzQztBQUN6RSxRQUFNQyxXQUFXbEIsU0FBU21CLFFBQVQsQ0FBa0JGLG9CQUFsQixDQUFqQjs7QUFFQSxRQUFJQyxRQUFKLEVBQWU7QUFDYixVQUFNRSxPQUFPSCxvQkFBYjs7QUFFQVYsY0FBUUEsTUFBTWMsTUFBTixDQUFhRCxJQUFiLENBQVI7QUFDRDs7QUFFRCxXQUFPYixLQUFQO0FBQ0QsR0FWTyxFQVVMLEVBVkssQ0FEZDs7QUFhQSxTQUFPQSxLQUFQO0FBQ0QiLCJmaWxlIjoibm9uVW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVW5pdFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3VuaXQnKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBOb25Vbml0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbUN5Y2xpY1Byb2R1Y3Rpb24oY3ljbGljUHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSBjeWNsaWNQcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUN5Y2xpY1Byb2R1Y3Rpb24oY3ljbGljUHJvZHVjdGlvbiksXG4gICAgICAgICAgTm9kZSA9IGN5Y2xpY1Byb2R1Y3Rpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vblVuaXRQcm9kdWN0aW9uID0gbmV3IE5vblVuaXRQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBub25Vbml0UHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblVuaXRQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBydWxlc0Zyb21DeWNsaWNQcm9kdWN0aW9uKGN5Y2xpY1Byb2R1Y3Rpb24pIHtcbiAgY29uc3QgY3ljbGljUHJvZHVjdGlvblJ1bGVzID0gY3ljbGljUHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICBydWxlcyA9IGN5Y2xpY1Byb2R1Y3Rpb25SdWxlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXMsIGN5Y2xpY1Byb2R1Y3Rpb25SdWxlKSB7XG4gICAgICAgICAgY29uc3QgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tUnVsZShjeWNsaWNQcm9kdWN0aW9uUnVsZSk7XG5cbiAgICAgICAgICBpZiAodW5pdFJ1bGUgKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gY3ljbGljUHJvZHVjdGlvblJ1bGU7XG5cbiAgICAgICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KHJ1bGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBydWxlcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdfQ==