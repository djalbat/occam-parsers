'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../bnf/rule'),
    arrayUtil = require('../../util/array'),
    UnitDefinition = require('../definition/unit');

var UnitRule = function (_Rule) {
  _inherits(UnitRule, _Rule);

  function UnitRule() {
    _classCallCheck(this, UnitRule);

    return _possibleConstructorReturn(this, (UnitRule.__proto__ || Object.getPrototypeOf(UnitRule)).apply(this, arguments));
  }

  _createClass(UnitRule, [{
    key: 'getUnitRuleName',
    value: function getUnitRuleName() {
      var definitions = this.getDefinitions(),
          firstDefinition = arrayUtil.first(definitions),
          unitDefinition = firstDefinition,
          ///
      unitRuleName = unitDefinition.getRuleName();

      return unitRuleName;
    }
  }, {
    key: 'isNotCyclic',
    value: function isNotCyclic() {
      var name = this.getName(),
          unitRuleName = this.getUnitRuleName(),
          notCyclic = name !== unitRuleName;

      return notCyclic;
    }
  }, {
    key: 'isFoundByRuleNames',
    value: function isFoundByRuleNames(firstRuleName, secondRuleName) {
      var name = this.getName(),
          unitRuleName = this.getUnitRuleName(),
          found = name === firstRuleName && unitRuleName === secondRuleName; ///

      return found;
    }
  }, {
    key: 'isIncludedInRuleNames',
    value: function isIncludedInRuleNames(ruleNames) {
      var name = this.getName(),
          unitRuleName = this.getUnitRuleName(),
          ruleNamesContainsName = ruleNames.includes(name),
          ruleNamesContainsUnitRuleName = ruleNames.includes(unitRuleName),
          includedInRuleNames = ruleNamesContainsName && ruleNamesContainsUnitRuleName;

      return includedInRuleNames;
    }
  }], [{
    key: 'fromNameAndUnitDefinition',
    value: function fromNameAndUnitDefinition(name, unitDefinition) {
      var definitions = [unitDefinition],
          Node = null,
          ///
      unitRule = new UnitRule(name, definitions, Node);

      return unitRule;
    }
  }, {
    key: 'fromNameAndRuleName',
    value: function fromNameAndRuleName(name, ruleName) {
      var unitDefinition = UnitDefinition.fromRuleName(ruleName),
          unitRule = UnitRule.fromNameAndUnitDefinition(name, unitDefinition);

      return unitRule;
    }
  }, {
    key: 'fromRuleNames',
    value: function fromRuleNames(firstRuleName, secondRuleName) {
      var name = firstRuleName,
          ///
      ruleName = secondRuleName,
          ///
      unitRule = UnitRule.fromNameAndRuleName(name, ruleName);

      return unitRule;
    }
  }]);

  return UnitRule;
}(Rule);

module.exports = UnitRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvdW5pdC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsImFycmF5VXRpbCIsIlVuaXREZWZpbml0aW9uIiwiVW5pdFJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZmlyc3REZWZpbml0aW9uIiwiZmlyc3QiLCJ1bml0RGVmaW5pdGlvbiIsInVuaXRSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibmFtZSIsImdldE5hbWUiLCJnZXRVbml0UnVsZU5hbWUiLCJub3RDeWNsaWMiLCJmaXJzdFJ1bGVOYW1lIiwic2Vjb25kUnVsZU5hbWUiLCJmb3VuZCIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0NvbnRhaW5zTmFtZSIsImluY2x1ZGVzIiwicnVsZU5hbWVzQ29udGFpbnNVbml0UnVsZU5hbWUiLCJpbmNsdWRlZEluUnVsZU5hbWVzIiwiTm9kZSIsInVuaXRSdWxlIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWUiLCJmcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uIiwiZnJvbU5hbWVBbmRSdWxlTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxnQkFBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxrQkFBUixDQURsQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2Qjs7SUFJTUcsUTs7Ozs7Ozs7Ozs7c0NBQ2M7QUFDaEIsVUFBTUMsY0FBYyxLQUFLQyxjQUFMLEVBQXBCO0FBQUEsVUFDTUMsa0JBQWtCTCxVQUFVTSxLQUFWLENBQWdCSCxXQUFoQixDQUR4QjtBQUFBLFVBRU1JLGlCQUFpQkYsZUFGdkI7QUFBQSxVQUV3QztBQUNsQ0cscUJBQWVELGVBQWVFLFdBQWYsRUFIckI7O0FBS0EsYUFBT0QsWUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNRSxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01ILGVBQWUsS0FBS0ksZUFBTCxFQURyQjtBQUFBLFVBRU1DLFlBQWFILFNBQVNGLFlBRjVCOztBQUlBLGFBQU9LLFNBQVA7QUFDRDs7O3VDQUVrQkMsYSxFQUFlQyxjLEVBQWdCO0FBQ2hELFVBQU1MLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUgsZUFBZSxLQUFLSSxlQUFMLEVBRHJCO0FBQUEsVUFFTUksUUFBVU4sU0FBU0ksYUFBVixJQUE2Qk4saUJBQWlCTyxjQUY3RCxDQURnRCxDQUdnQzs7QUFFaEYsYUFBT0MsS0FBUDtBQUNEOzs7MENBRXFCQyxTLEVBQVc7QUFDL0IsVUFBTVAsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNSCxlQUFlLEtBQUtJLGVBQUwsRUFEckI7QUFBQSxVQUVNTSx3QkFBd0JELFVBQVVFLFFBQVYsQ0FBbUJULElBQW5CLENBRjlCO0FBQUEsVUFHTVUsZ0NBQWdDSCxVQUFVRSxRQUFWLENBQW1CWCxZQUFuQixDQUh0QztBQUFBLFVBSU1hLHNCQUF1QkgseUJBQXlCRSw2QkFKdEQ7O0FBTUEsYUFBT0MsbUJBQVA7QUFDRDs7OzhDQUVnQ1gsSSxFQUFNSCxjLEVBQWdCO0FBQ3JELFVBQU1KLGNBQWMsQ0FDWkksY0FEWSxDQUFwQjtBQUFBLFVBR01lLE9BQU8sSUFIYjtBQUFBLFVBR29CO0FBQ2RDLGlCQUFXLElBQUlyQixRQUFKLENBQWFRLElBQWIsRUFBbUJQLFdBQW5CLEVBQWdDbUIsSUFBaEMsQ0FKakI7O0FBTUEsYUFBT0MsUUFBUDtBQUNEOzs7d0NBRTBCYixJLEVBQU1jLFEsRUFBVTtBQUN6QyxVQUFNakIsaUJBQWlCTixlQUFld0IsWUFBZixDQUE0QkQsUUFBNUIsQ0FBdkI7QUFBQSxVQUNNRCxXQUFXckIsU0FBU3dCLHlCQUFULENBQW1DaEIsSUFBbkMsRUFBeUNILGNBQXpDLENBRGpCOztBQUdBLGFBQU9nQixRQUFQO0FBQ0Q7OztrQ0FFb0JULGEsRUFBZUMsYyxFQUFnQjtBQUNsRCxVQUFNTCxPQUFPSSxhQUFiO0FBQUEsVUFBNkI7QUFDdkJVLGlCQUFXVCxjQURqQjtBQUFBLFVBQ2tDO0FBQzVCUSxpQkFBV3JCLFNBQVN5QixtQkFBVCxDQUE2QmpCLElBQTdCLEVBQW1DYyxRQUFuQyxDQUZqQjs7QUFJQSxhQUFPRCxRQUFQO0FBQ0Q7Ozs7RUEzRG9CekIsSTs7QUE4RHZCOEIsT0FBT0MsT0FBUCxHQUFpQjNCLFFBQWpCIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9ibmYvcnVsZScpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKTtcblxuY2xhc3MgVW5pdFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgZ2V0VW5pdFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGZpcnN0RGVmaW5pdGlvbiA9IGFycmF5VXRpbC5maXJzdChkZWZpbml0aW9ucyksXG4gICAgICAgICAgdW5pdERlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHVuaXRSdWxlTmFtZSA9IHVuaXREZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXRSdWxlTmFtZTtcbiAgfVxuICBcbiAgaXNOb3RDeWNsaWMoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHVuaXRSdWxlTmFtZSA9IHRoaXMuZ2V0VW5pdFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm90Q3ljbGljID0gKG5hbWUgIT09IHVuaXRSdWxlTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIG5vdEN5Y2xpYzsgICAgXG4gIH1cblxuICBpc0ZvdW5kQnlSdWxlTmFtZXMoZmlyc3RSdWxlTmFtZSwgc2Vjb25kUnVsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdFJ1bGVOYW1lID0gdGhpcy5nZXRVbml0UnVsZU5hbWUoKSxcbiAgICAgICAgICBmb3VuZCA9ICgobmFtZSA9PT0gZmlyc3RSdWxlTmFtZSkgJiYgKHVuaXRSdWxlTmFtZSA9PT0gc2Vjb25kUnVsZU5hbWUpKTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuXG4gIGlzSW5jbHVkZWRJblJ1bGVOYW1lcyhydWxlTmFtZXMpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdFJ1bGVOYW1lID0gdGhpcy5nZXRVbml0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZXNDb250YWluc05hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMobmFtZSksXG4gICAgICAgICAgcnVsZU5hbWVzQ29udGFpbnNVbml0UnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXModW5pdFJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmNsdWRlZEluUnVsZU5hbWVzID0gKHJ1bGVOYW1lc0NvbnRhaW5zTmFtZSAmJiBydWxlTmFtZXNDb250YWluc1VuaXRSdWxlTmFtZSk7XG5cbiAgICByZXR1cm4gaW5jbHVkZWRJblJ1bGVOYW1lcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21OYW1lQW5kVW5pdERlZmluaXRpb24obmFtZSwgdW5pdERlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHVuaXREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHVuaXRSdWxlID0gbmV3IFVuaXRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcbiAgICBcbiAgICByZXR1cm4gdW5pdFJ1bGU7ICAgICAgICAgIFxuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5hbWVBbmRSdWxlTmFtZShuYW1lLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21OYW1lQW5kVW5pdERlZmluaXRpb24obmFtZSwgdW5pdERlZmluaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB1bml0UnVsZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21SdWxlTmFtZXMoZmlyc3RSdWxlTmFtZSwgc2Vjb25kUnVsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gZmlyc3RSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gc2Vjb25kUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21OYW1lQW5kUnVsZU5hbWUobmFtZSwgcnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdFJ1bGU7XG4iXX0=