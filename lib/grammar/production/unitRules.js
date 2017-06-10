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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdFJ1bGVzLmpzIl0sIm5hbWVzIjpbIlVuaXRSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJVbml0UnVsZXNQcm9kdWN0aW9uIiwicnVsZXMiLCJnZXRSdWxlcyIsInVuaXRSdWxlcyIsInByb2R1Y3Rpb25OYW1lcyIsIm1hcCIsInVuaXRSdWxlIiwicHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb24iLCJ1bml0UnVsZXNQcm9kdWN0aW9uIiwicmVkdWNlIiwicnVsZSIsImZyb21SdWxlIiwiY29uY2F0IiwidW5pdFJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwibmFtZSIsImdldE5hbWUiLCJOb2RlIiwiZ2V0Tm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxjQUFSLENBQWpCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSx5QkFBUixDQURuQjs7SUFHTUUsbUI7Ozs7Ozs7Ozs7O3lDQUNpQjtBQUNuQixVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFlBQVlGLEtBRGxCO0FBQUEsVUFDMEI7QUFDcEJHLHdCQUFrQkQsVUFBVUUsR0FBVixDQUFjLFVBQVNDLFFBQVQsRUFBbUI7QUFDakQsWUFBTUMsaUJBQWlCRCxTQUFTRSxpQkFBVCxFQUF2Qjs7QUFFQSxlQUFPRCxjQUFQO0FBQ0QsT0FKaUIsQ0FGeEI7O0FBUUEsYUFBT0gsZUFBUDtBQUNEOzs7bUNBRXFCSyxVLEVBQVk7QUFDaEMsVUFBSUMsc0JBQXNCLElBQTFCOztBQUVBLFVBQU1ULFFBQVFRLFdBQVdQLFFBQVgsRUFBZDtBQUFBLFVBQ01DLFlBQVlGLE1BQU1VLE1BQU4sQ0FBYSxVQUFTUixTQUFULEVBQW9CUyxJQUFwQixFQUEwQjtBQUNqRCxZQUFNTixXQUFXVCxTQUFTZ0IsUUFBVCxDQUFrQkQsSUFBbEIsQ0FBakI7O0FBRUEsWUFBSU4sYUFBYSxJQUFqQixFQUF1QjtBQUNyQkgsc0JBQVlBLFVBQVVXLE1BQVYsQ0FBaUJSLFFBQWpCLENBQVo7QUFDRDs7QUFFRCxlQUFPSCxTQUFQO0FBQ0QsT0FSVyxFQVFULEVBUlMsQ0FEbEI7QUFBQSxVQVVNWSxrQkFBa0JaLFVBQVVhLE1BVmxDOztBQVlBLFVBQUlELGtCQUFrQixDQUF0QixFQUF5QjtBQUN2QixZQUFNRSxPQUFPUixXQUFXUyxPQUFYLEVBQWI7QUFBQSxZQUNNakIsU0FBUUUsU0FEZDtBQUFBLFlBQzBCO0FBQ3BCZ0IsZUFBT1YsV0FBV1csT0FBWCxFQUZiOztBQUlBViw4QkFBc0IsSUFBSVYsbUJBQUosQ0FBd0JpQixJQUF4QixFQUE4QmhCLE1BQTlCLEVBQXFDa0IsSUFBckMsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPVCxtQkFBUDtBQUNEOzs7O0VBckMrQlgsVTs7QUF3Q2xDc0IsT0FBT0MsT0FBUCxHQUFpQnRCLG1CQUFqQiIsImZpbGUiOiJ1bml0UnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaXRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS91bml0JyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgVW5pdFJ1bGVzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBnZXRQcm9kdWN0aW9uTmFtZXMoKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFJ1bGVzID0gcnVsZXMsICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZXMgPSB1bml0UnVsZXMubWFwKGZ1bmN0aW9uKHVuaXRSdWxlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHVuaXRSdWxlLmdldFByb2R1Y3Rpb25OYW1lKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZTtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVzO1xuICB9IFxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBsZXQgdW5pdFJ1bGVzUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlcyA9IHByb2R1Y3Rpb24uZ2V0UnVsZXMoKSxcbiAgICAgICAgICB1bml0UnVsZXMgPSBydWxlcy5yZWR1Y2UoZnVuY3Rpb24odW5pdFJ1bGVzLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21SdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdW5pdFJ1bGVzID0gdW5pdFJ1bGVzLmNvbmNhdCh1bml0UnVsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1bml0UnVsZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHVuaXRSdWxlc0xlbmd0aCA9IHVuaXRSdWxlcy5sZW5ndGg7XG5cbiAgICBpZiAodW5pdFJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcnVsZXMgPSB1bml0UnVsZXMsICAvLy9cbiAgICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKTtcblxuICAgICAgdW5pdFJ1bGVzUHJvZHVjdGlvbiA9IG5ldyBVbml0UnVsZXNQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHVuaXRSdWxlc1Byb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0UnVsZXNQcm9kdWN0aW9uO1xuIl19