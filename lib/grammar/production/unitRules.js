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
    key: 'forEachUnitRule',
    value: function forEachUnitRule(callback) {
      var rules = this.getRules(),
          unitRules = rules; ///

      unitRules.forEach(callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdFJ1bGVzLmpzIl0sIm5hbWVzIjpbIlVuaXRSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJVbml0UnVsZXNQcm9kdWN0aW9uIiwicnVsZXMiLCJnZXRSdWxlcyIsInVuaXRSdWxlcyIsInByb2R1Y3Rpb25OYW1lcyIsIm1hcCIsInVuaXRSdWxlIiwicHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInByb2R1Y3Rpb24iLCJ1bml0UnVsZXNQcm9kdWN0aW9uIiwicmVkdWNlIiwicnVsZSIsImZyb21SdWxlIiwiY29uY2F0IiwidW5pdFJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwibmFtZSIsImdldE5hbWUiLCJOb2RlIiwiZ2V0Tm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxjQUFSLENBQWpCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSx5QkFBUixDQURuQjs7SUFHTUUsbUI7Ozs7Ozs7Ozs7O3lDQUNpQjtBQUNuQixVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFlBQVlGLEtBRGxCO0FBQUEsVUFDMEI7QUFDcEJHLHdCQUFrQkQsVUFBVUUsR0FBVixDQUFjLFVBQVNDLFFBQVQsRUFBbUI7QUFDakQsWUFBTUMsaUJBQWlCRCxTQUFTRSxpQkFBVCxFQUF2Qjs7QUFFQSxlQUFPRCxjQUFQO0FBQ0QsT0FKaUIsQ0FGeEI7O0FBUUEsYUFBT0gsZUFBUDtBQUNEOzs7b0NBRWVLLFEsRUFBVTtBQUN4QixVQUFNUixRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFlBQVlGLEtBRGxCLENBRHdCLENBRUU7O0FBRTFCRSxnQkFBVU8sT0FBVixDQUFrQkQsUUFBbEI7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLFVBQUlDLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNWCxRQUFRVSxXQUFXVCxRQUFYLEVBQWQ7QUFBQSxVQUNNQyxZQUFZRixNQUFNWSxNQUFOLENBQWEsVUFBU1YsU0FBVCxFQUFvQlcsSUFBcEIsRUFBMEI7QUFDakQsWUFBTVIsV0FBV1QsU0FBU2tCLFFBQVQsQ0FBa0JELElBQWxCLENBQWpCOztBQUVBLFlBQUlSLGFBQWEsSUFBakIsRUFBdUI7QUFDckJILHNCQUFZQSxVQUFVYSxNQUFWLENBQWlCVixRQUFqQixDQUFaO0FBQ0Q7O0FBRUQsZUFBT0gsU0FBUDtBQUNELE9BUlcsRUFRVCxFQVJTLENBRGxCO0FBQUEsVUFVTWMsa0JBQWtCZCxVQUFVZSxNQVZsQzs7QUFZQSxVQUFJRCxrQkFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsWUFBTUUsT0FBT1IsV0FBV1MsT0FBWCxFQUFiO0FBQUEsWUFDTW5CLFNBQVFFLFNBRGQ7QUFBQSxZQUMwQjtBQUNwQmtCLGVBQU9WLFdBQVdXLE9BQVgsRUFGYjs7QUFJQVYsOEJBQXNCLElBQUlaLG1CQUFKLENBQXdCbUIsSUFBeEIsRUFBOEJsQixNQUE5QixFQUFxQ29CLElBQXJDLENBQXRCO0FBQ0Q7O0FBRUQsYUFBT1QsbUJBQVA7QUFDRDs7OztFQTVDK0JiLFU7O0FBK0NsQ3dCLE9BQU9DLE9BQVAsR0FBaUJ4QixtQkFBakIiLCJmaWxlIjoidW5pdFJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVbml0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvdW5pdCcpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIFVuaXRSdWxlc1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgZ2V0UHJvZHVjdGlvbk5hbWVzKCkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHVuaXRSdWxlcyA9IHJ1bGVzLCAgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVzID0gdW5pdFJ1bGVzLm1hcChmdW5jdGlvbih1bml0UnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB1bml0UnVsZS5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lcztcbiAgfVxuICBcbiAgZm9yRWFjaFVuaXRSdWxlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFJ1bGVzID0gcnVsZXM7ICAvLy9cbiAgICBcbiAgICB1bml0UnVsZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgbGV0IHVuaXRSdWxlc1Byb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFJ1bGVzID0gcnVsZXMucmVkdWNlKGZ1bmN0aW9uKHVuaXRSdWxlcywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tUnVsZShydWxlKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRSdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHVuaXRSdWxlcyA9IHVuaXRSdWxlcy5jb25jYXQodW5pdFJ1bGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdW5pdFJ1bGVzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICB1bml0UnVsZXNMZW5ndGggPSB1bml0UnVsZXMubGVuZ3RoO1xuXG4gICAgaWYgKHVuaXRSdWxlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGVzID0gdW5pdFJ1bGVzLCAgLy8vXG4gICAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCk7XG5cbiAgICAgIHVuaXRSdWxlc1Byb2R1Y3Rpb24gPSBuZXcgVW5pdFJ1bGVzUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB1bml0UnVsZXNQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdFJ1bGVzUHJvZHVjdGlvbjtcbiJdfQ==