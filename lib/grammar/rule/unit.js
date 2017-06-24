'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    Rule = require('../../extendedBNF/rule'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvdW5pdC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiUnVsZSIsIlVuaXREZWZpbml0aW9uIiwiVW5pdFJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZmlyc3REZWZpbml0aW9uIiwiZmlyc3QiLCJ1bml0RGVmaW5pdGlvbiIsInVuaXRSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibmFtZSIsImdldE5hbWUiLCJnZXRVbml0UnVsZU5hbWUiLCJub3RDeWNsaWMiLCJmaXJzdFJ1bGVOYW1lIiwic2Vjb25kUnVsZU5hbWUiLCJmb3VuZCIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0NvbnRhaW5zTmFtZSIsImluY2x1ZGVzIiwicnVsZU5hbWVzQ29udGFpbnNVbml0UnVsZU5hbWUiLCJpbmNsdWRlZEluUnVsZU5hbWVzIiwiTm9kZSIsInVuaXRSdWxlIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWUiLCJmcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uIiwiZnJvbU5hbWVBbmRSdWxlTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsd0JBQVIsQ0FEYjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2Qjs7SUFJTUcsUTs7Ozs7Ozs7Ozs7c0NBQ2M7QUFDaEIsVUFBTUMsY0FBYyxLQUFLQyxjQUFMLEVBQXBCO0FBQUEsVUFDTUMsa0JBQWtCUCxVQUFVUSxLQUFWLENBQWdCSCxXQUFoQixDQUR4QjtBQUFBLFVBRU1JLGlCQUFpQkYsZUFGdkI7QUFBQSxVQUV3QztBQUNsQ0cscUJBQWVELGVBQWVFLFdBQWYsRUFIckI7O0FBS0EsYUFBT0QsWUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNRSxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01ILGVBQWUsS0FBS0ksZUFBTCxFQURyQjtBQUFBLFVBRU1DLFlBQWFILFNBQVNGLFlBRjVCOztBQUlBLGFBQU9LLFNBQVA7QUFDRDs7O3VDQUVrQkMsYSxFQUFlQyxjLEVBQWdCO0FBQ2hELFVBQU1MLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUgsZUFBZSxLQUFLSSxlQUFMLEVBRHJCO0FBQUEsVUFFTUksUUFBVU4sU0FBU0ksYUFBVixJQUE2Qk4saUJBQWlCTyxjQUY3RCxDQURnRCxDQUdnQzs7QUFFaEYsYUFBT0MsS0FBUDtBQUNEOzs7MENBRXFCQyxTLEVBQVc7QUFDL0IsVUFBTVAsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNSCxlQUFlLEtBQUtJLGVBQUwsRUFEckI7QUFBQSxVQUVNTSx3QkFBd0JELFVBQVVFLFFBQVYsQ0FBbUJULElBQW5CLENBRjlCO0FBQUEsVUFHTVUsZ0NBQWdDSCxVQUFVRSxRQUFWLENBQW1CWCxZQUFuQixDQUh0QztBQUFBLFVBSU1hLHNCQUF1QkgseUJBQXlCRSw2QkFKdEQ7O0FBTUEsYUFBT0MsbUJBQVA7QUFDRDs7OzhDQUVnQ1gsSSxFQUFNSCxjLEVBQWdCO0FBQ3JELFVBQU1KLGNBQWMsQ0FDWkksY0FEWSxDQUFwQjtBQUFBLFVBR01lLE9BQU8sSUFIYjtBQUFBLFVBR29CO0FBQ2RDLGlCQUFXLElBQUlyQixRQUFKLENBQWFRLElBQWIsRUFBbUJQLFdBQW5CLEVBQWdDbUIsSUFBaEMsQ0FKakI7O0FBTUEsYUFBT0MsUUFBUDtBQUNEOzs7d0NBRTBCYixJLEVBQU1jLFEsRUFBVTtBQUN6QyxVQUFNakIsaUJBQWlCTixlQUFld0IsWUFBZixDQUE0QkQsUUFBNUIsQ0FBdkI7QUFBQSxVQUNNRCxXQUFXckIsU0FBU3dCLHlCQUFULENBQW1DaEIsSUFBbkMsRUFBeUNILGNBQXpDLENBRGpCOztBQUdBLGFBQU9nQixRQUFQO0FBQ0Q7OztrQ0FFb0JULGEsRUFBZUMsYyxFQUFnQjtBQUNsRCxVQUFNTCxPQUFPSSxhQUFiO0FBQUEsVUFBNkI7QUFDdkJVLGlCQUFXVCxjQURqQjtBQUFBLFVBQ2tDO0FBQzVCUSxpQkFBV3JCLFNBQVN5QixtQkFBVCxDQUE2QmpCLElBQTdCLEVBQW1DYyxRQUFuQyxDQUZqQjs7QUFJQSxhQUFPRCxRQUFQO0FBQ0Q7Ozs7RUEzRG9CdkIsSTs7QUE4RHZCNEIsT0FBT0MsT0FBUCxHQUFpQjNCLFFBQWpCIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9leHRlbmRlZEJORi9ydWxlJyksXG4gICAgICBVbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdW5pdCcpO1xuXG5jbGFzcyBVbml0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBnZXRVbml0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZmlyc3REZWZpbml0aW9uID0gYXJyYXlVdGlsLmZpcnN0KGRlZmluaXRpb25zKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgdW5pdFJ1bGVOYW1lID0gdW5pdERlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gdW5pdFJ1bGVOYW1lO1xuICB9XG4gIFxuICBpc05vdEN5Y2xpYygpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdFJ1bGVOYW1lID0gdGhpcy5nZXRVbml0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub3RDeWNsaWMgPSAobmFtZSAhPT0gdW5pdFJ1bGVOYW1lKTtcbiAgICBcbiAgICByZXR1cm4gbm90Q3ljbGljOyAgICBcbiAgfVxuXG4gIGlzRm91bmRCeVJ1bGVOYW1lcyhmaXJzdFJ1bGVOYW1lLCBzZWNvbmRSdWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0UnVsZU5hbWUgPSB0aGlzLmdldFVuaXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGZvdW5kID0gKChuYW1lID09PSBmaXJzdFJ1bGVOYW1lKSAmJiAodW5pdFJ1bGVOYW1lID09PSBzZWNvbmRSdWxlTmFtZSkpOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgaXNJbmNsdWRlZEluUnVsZU5hbWVzKHJ1bGVOYW1lcykge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0UnVsZU5hbWUgPSB0aGlzLmdldFVuaXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lc0NvbnRhaW5zTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhuYW1lKSxcbiAgICAgICAgICBydWxlTmFtZXNDb250YWluc1VuaXRSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyh1bml0UnVsZU5hbWUpLFxuICAgICAgICAgIGluY2x1ZGVkSW5SdWxlTmFtZXMgPSAocnVsZU5hbWVzQ29udGFpbnNOYW1lICYmIHJ1bGVOYW1lc0NvbnRhaW5zVW5pdFJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBpbmNsdWRlZEluUnVsZU5hbWVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgdW5pdERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdW5pdFJ1bGUgPSBuZXcgVW5pdFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiB1bml0UnVsZTsgICAgICAgICAgXG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFJ1bGVOYW1lKG5hbWUsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lcyhmaXJzdFJ1bGVOYW1lLCBzZWNvbmRSdWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBmaXJzdFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBzZWNvbmRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbU5hbWVBbmRSdWxlTmFtZShuYW1lLCBydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdW5pdFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0UnVsZTtcbiJdfQ==