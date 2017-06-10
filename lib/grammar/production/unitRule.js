'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitRule = require('../rule/unit'),
    Production = require('../../common/production');

var UnitRuleProduction = function (_Production) {
  _inherits(UnitRuleProduction, _Production);

  function UnitRuleProduction() {
    _classCallCheck(this, UnitRuleProduction);

    return _possibleConstructorReturn(this, (UnitRuleProduction.__proto__ || Object.getPrototypeOf(UnitRuleProduction)).apply(this, arguments));
  }

  _createClass(UnitRuleProduction, [{
    key: 'getUnitRuleProductionName',
    value: function getUnitRuleProductionName() {
      var rules = this.getRules(),
          firstRule = first(rules),
          unitRule = firstRule,
          ///
      unitRuleProductionName = unitRule.getProductionName();

      return unitRuleProductionName;
    }
  }, {
    key: 'isFoundByProductionNames',
    value: function isFoundByProductionNames(firstProductionName, secondProductionName) {
      var name = this.getName(),
          unitRuleProductionName = this.getUnitRuleProductionName(),
          found = name === firstProductionName && unitRuleProductionName === secondProductionName; ///

      return found;
    }
  }], [{
    key: 'fromNameAndUnitRule',
    value: function fromNameAndUnitRule(name, unitRule) {
      var rules = [unitRule],
          Node = null,
          unitRuleProduction = new UnitRuleProduction(name, rules, Node);

      return unitRuleProduction;
    }
  }, {
    key: 'fromNameAndUnitRuleProductionName',
    value: function fromNameAndUnitRuleProductionName(name, unitRuleProductionName) {
      var productionName = unitRuleProductionName,
          ///
      unitRule = UnitRule.fromProductionName(productionName),
          unitRuleProduction = UnitRuleProduction.fromNameAndUnitRule(name, unitRule);

      return unitRuleProduction;
    }
  }]);

  return UnitRuleProduction;
}(Production);

module.exports = UnitRuleProduction;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdFJ1bGUuanMiXSwibmFtZXMiOlsiVW5pdFJ1bGUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbiIsIlVuaXRSdWxlUHJvZHVjdGlvbiIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJmaXJzdFJ1bGUiLCJmaXJzdCIsInVuaXRSdWxlIiwidW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiZmlyc3RQcm9kdWN0aW9uTmFtZSIsInNlY29uZFByb2R1Y3Rpb25OYW1lIiwibmFtZSIsImdldE5hbWUiLCJnZXRVbml0UnVsZVByb2R1Y3Rpb25OYW1lIiwiZm91bmQiLCJOb2RlIiwidW5pdFJ1bGVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tUHJvZHVjdGlvbk5hbWUiLCJmcm9tTmFtZUFuZFVuaXRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsY0FBUixDQUFqQjtBQUFBLElBQ01DLGFBQWFELFFBQVEseUJBQVIsQ0FEbkI7O0lBR01FLGtCOzs7Ozs7Ozs7OztnREFDd0I7QUFDMUIsVUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxZQUFZQyxNQUFNSCxLQUFOLENBRGxCO0FBQUEsVUFFTUksV0FBV0YsU0FGakI7QUFBQSxVQUU0QjtBQUN0QkcsK0JBQXlCRCxTQUFTRSxpQkFBVCxFQUgvQjs7QUFLQSxhQUFPRCxzQkFBUDtBQUNEOzs7NkNBRXdCRSxtQixFQUFxQkMsb0IsRUFBc0I7QUFDbEUsVUFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNTCx5QkFBeUIsS0FBS00seUJBQUwsRUFEL0I7QUFBQSxVQUVNQyxRQUFVSCxTQUFTRixtQkFBVixJQUFtQ0YsMkJBQTJCRyxvQkFGN0UsQ0FEa0UsQ0FHb0M7O0FBRXRHLGFBQU9JLEtBQVA7QUFDRDs7O3dDQUUwQkgsSSxFQUFNTCxRLEVBQVU7QUFDekMsVUFBTUosUUFBUSxDQUNOSSxRQURNLENBQWQ7QUFBQSxVQUdNUyxPQUFPLElBSGI7QUFBQSxVQUlNQyxxQkFBcUIsSUFBSWYsa0JBQUosQ0FBdUJVLElBQXZCLEVBQTZCVCxLQUE3QixFQUFvQ2EsSUFBcEMsQ0FKM0I7O0FBTUEsYUFBT0Msa0JBQVA7QUFDRDs7O3NEQUV3Q0wsSSxFQUFNSixzQixFQUF3QjtBQUNyRSxVQUFNVSxpQkFBaUJWLHNCQUF2QjtBQUFBLFVBQWdEO0FBQzFDRCxpQkFBV1IsU0FBU29CLGtCQUFULENBQTRCRCxjQUE1QixDQURqQjtBQUFBLFVBRU1ELHFCQUFxQmYsbUJBQW1Ca0IsbUJBQW5CLENBQXVDUixJQUF2QyxFQUE2Q0wsUUFBN0MsQ0FGM0I7O0FBSUEsYUFBT1Usa0JBQVA7QUFDRDs7OztFQWxDOEJoQixVOztBQXFDakNvQixPQUFPQyxPQUFQLEdBQWlCcEIsa0JBQWpCOztBQUVBLFNBQVNJLEtBQVQsQ0FBZWlCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ1bml0UnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVW5pdFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3VuaXQnKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcHJvZHVjdGlvbicpIDtcblxuY2xhc3MgVW5pdFJ1bGVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGdldFVuaXRSdWxlUHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgZmlyc3RSdWxlID0gZmlyc3QocnVsZXMpLFxuICAgICAgICAgIHVuaXRSdWxlID0gZmlyc3RSdWxlLCAvLy9cbiAgICAgICAgICB1bml0UnVsZVByb2R1Y3Rpb25OYW1lID0gdW5pdFJ1bGUuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gdW5pdFJ1bGVQcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGlzRm91bmRCeVByb2R1Y3Rpb25OYW1lcyhmaXJzdFByb2R1Y3Rpb25OYW1lLCBzZWNvbmRQcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0UnVsZVByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRVbml0UnVsZVByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgZm91bmQgPSAoKG5hbWUgPT09IGZpcnN0UHJvZHVjdGlvbk5hbWUpICYmICh1bml0UnVsZVByb2R1Y3Rpb25OYW1lID09PSBzZWNvbmRQcm9kdWN0aW9uTmFtZSkpOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5hbWVBbmRVbml0UnVsZShuYW1lLCB1bml0UnVsZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW1xuICAgICAgICAgICAgdW5pdFJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBudWxsLFxuICAgICAgICAgIHVuaXRSdWxlUHJvZHVjdGlvbiA9IG5ldyBVbml0UnVsZVByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiB1bml0UnVsZVByb2R1Y3Rpb247ICAgICAgICAgIFxuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5hbWVBbmRVbml0UnVsZVByb2R1Y3Rpb25OYW1lKG5hbWUsIHVuaXRSdWxlUHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHVuaXRSdWxlUHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21Qcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgdW5pdFJ1bGVQcm9kdWN0aW9uID0gVW5pdFJ1bGVQcm9kdWN0aW9uLmZyb21OYW1lQW5kVW5pdFJ1bGUobmFtZSwgdW5pdFJ1bGUpO1xuICAgIFxuICAgIHJldHVybiB1bml0UnVsZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0UnVsZVByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19