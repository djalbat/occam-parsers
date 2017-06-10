'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitRule = require('../rule/unit'),
    Production = require('../../common/production');

var UnitRulesProduction = function (_Production) {
  _inherits(UnitRulesProduction, _Production);

  function UnitRulesProduction() {
    _classCallCheck(this, UnitRulesProduction);

    return _possibleConstructorReturn(this, (UnitRulesProduction.__proto__ || Object.getPrototypeOf(UnitRulesProduction)).apply(this, arguments));
  }

  _createClass(UnitRulesProduction, [{
    key: 'getProductionNames',
    value: function getProductionNames() {
      var rules = this.getRules(),
          unitRules = rules,
          ///
      productionNames = unitRules.map(function (unitRule) {
        var productionName = unitRule.getProductionName();

        return productionName;
      });

      return productionNames;
    }
  }, {
    key: 'mapUnitRules',
    value: function mapUnitRules(callback) {
      var rules = this.getRules(),
          unitRules = rules,
          ///
      result = unitRules.map(callback);

      return result;
    }
  }], [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var unitRulesProduction = null;

      var rules = production.getRules(),
          unitRules = rules.reduce(function (unitRules, rule) {
        var unitRule = UnitRule.fromRule(rule);

        if (unitRule !== null) {
          unitRules = unitRules.concat(unitRule);
        }

        return unitRules;
      }, []),
          unitRulesLength = unitRules.length;

      if (unitRulesLength > 0) {
        var name = production.getName(),
            _rules = unitRules,
            ///
        Node = production.getNode();

        unitRulesProduction = new UnitRulesProduction(name, _rules, Node);
      }

      return unitRulesProduction;
    }
  }]);

  return UnitRulesProduction;
}(Production);

module.exports = UnitRulesProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdFJ1bGVzLmpzIl0sIm5hbWVzIjpbIlVuaXRSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJVbml0UnVsZXNQcm9kdWN0aW9uIiwicnVsZXMiLCJnZXRSdWxlcyIsInVuaXRSdWxlcyIsInByb2R1Y3Rpb25OYW1lcyIsIm1hcCIsInVuaXRSdWxlIiwicHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsImNhbGxiYWNrIiwicmVzdWx0IiwicHJvZHVjdGlvbiIsInVuaXRSdWxlc1Byb2R1Y3Rpb24iLCJyZWR1Y2UiLCJydWxlIiwiZnJvbVJ1bGUiLCJjb25jYXQiLCJ1bml0UnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJuYW1lIiwiZ2V0TmFtZSIsIk5vZGUiLCJnZXROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGNBQVIsQ0FBakI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLHlCQUFSLENBRG5COztJQUdNRSxtQjs7Ozs7Ozs7Ozs7eUNBQ2lCO0FBQ25CLFVBQU1DLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsWUFBWUYsS0FEbEI7QUFBQSxVQUMwQjtBQUNwQkcsd0JBQWtCRCxVQUFVRSxHQUFWLENBQWMsVUFBU0MsUUFBVCxFQUFtQjtBQUNqRCxZQUFNQyxpQkFBaUJELFNBQVNFLGlCQUFULEVBQXZCOztBQUVBLGVBQU9ELGNBQVA7QUFDRCxPQUppQixDQUZ4Qjs7QUFRQSxhQUFPSCxlQUFQO0FBQ0Q7OztpQ0FFWUssUSxFQUFVO0FBQ3JCLFVBQU1SLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsWUFBWUYsS0FEbEI7QUFBQSxVQUMwQjtBQUNwQlMsZUFBU1AsVUFBVUUsR0FBVixDQUFjSSxRQUFkLENBRmY7O0FBSUEsYUFBT0MsTUFBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBSUMsc0JBQXNCLElBQTFCOztBQUVBLFVBQU1YLFFBQVFVLFdBQVdULFFBQVgsRUFBZDtBQUFBLFVBQ01DLFlBQVlGLE1BQU1ZLE1BQU4sQ0FBYSxVQUFTVixTQUFULEVBQW9CVyxJQUFwQixFQUEwQjtBQUNqRCxZQUFNUixXQUFXVCxTQUFTa0IsUUFBVCxDQUFrQkQsSUFBbEIsQ0FBakI7O0FBRUEsWUFBSVIsYUFBYSxJQUFqQixFQUF1QjtBQUNyQkgsc0JBQVlBLFVBQVVhLE1BQVYsQ0FBaUJWLFFBQWpCLENBQVo7QUFDRDs7QUFFRCxlQUFPSCxTQUFQO0FBQ0QsT0FSVyxFQVFULEVBUlMsQ0FEbEI7QUFBQSxVQVVNYyxrQkFBa0JkLFVBQVVlLE1BVmxDOztBQVlBLFVBQUlELGtCQUFrQixDQUF0QixFQUF5QjtBQUN2QixZQUFNRSxPQUFPUixXQUFXUyxPQUFYLEVBQWI7QUFBQSxZQUNNbkIsU0FBUUUsU0FEZDtBQUFBLFlBQzBCO0FBQ3BCa0IsZUFBT1YsV0FBV1csT0FBWCxFQUZiOztBQUlBViw4QkFBc0IsSUFBSVosbUJBQUosQ0FBd0JtQixJQUF4QixFQUE4QmxCLE1BQTlCLEVBQXFDb0IsSUFBckMsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPVCxtQkFBUDtBQUNEOzs7O0VBN0MrQmIsVTs7QUFnRGxDd0IsT0FBT0MsT0FBUCxHQUFpQnhCLG1CQUFqQiIsImZpbGUiOiJ1bml0UnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaXRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS91bml0JyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgVW5pdFJ1bGVzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBnZXRQcm9kdWN0aW9uTmFtZXMoKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFJ1bGVzID0gcnVsZXMsICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZXMgPSB1bml0UnVsZXMubWFwKGZ1bmN0aW9uKHVuaXRSdWxlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHVuaXRSdWxlLmdldFByb2R1Y3Rpb25OYW1lKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZTtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVzO1xuICB9XG4gIFxuICBtYXBVbml0UnVsZXMoY2FsbGJhY2spIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICB1bml0UnVsZXMgPSBydWxlcywgIC8vL1xuICAgICAgICAgIHJlc3VsdCA9IHVuaXRSdWxlcy5tYXAoY2FsbGJhY2spO1xuICAgIFxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgbGV0IHVuaXRSdWxlc1Byb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFJ1bGVzID0gcnVsZXMucmVkdWNlKGZ1bmN0aW9uKHVuaXRSdWxlcywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tUnVsZShydWxlKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRSdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHVuaXRSdWxlcyA9IHVuaXRSdWxlcy5jb25jYXQodW5pdFJ1bGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdW5pdFJ1bGVzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICB1bml0UnVsZXNMZW5ndGggPSB1bml0UnVsZXMubGVuZ3RoO1xuXG4gICAgaWYgKHVuaXRSdWxlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGVzID0gdW5pdFJ1bGVzLCAgLy8vXG4gICAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCk7XG5cbiAgICAgIHVuaXRSdWxlc1Byb2R1Y3Rpb24gPSBuZXcgVW5pdFJ1bGVzUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB1bml0UnVsZXNQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdFJ1bGVzUHJvZHVjdGlvbjtcbiJdfQ==