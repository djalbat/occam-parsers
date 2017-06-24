'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../extendedBNF/rule'),
    UnitDefinition = require('../definition/unit');

var UnitsRule = function (_Rule) {
  _inherits(UnitsRule, _Rule);

  function UnitsRule() {
    _classCallCheck(this, UnitsRule);

    return _possibleConstructorReturn(this, (UnitsRule.__proto__ || Object.getPrototypeOf(UnitsRule)).apply(this, arguments));
  }

  _createClass(UnitsRule, [{
    key: 'getUnitDefinitionRuleNames',
    value: function getUnitDefinitionRuleNames() {
      var unitDefinitions = this.getUnitDefinitions(),
          unitDefinitionRuleNames = unitDefinitions.map(function (unitDefinition) {
        var unitDefinitionRuleName = unitDefinition.getRuleName();

        return unitDefinitionRuleName;
      });

      return unitDefinitionRuleNames;
    }
  }, {
    key: 'getUnitDefinitions',
    value: function getUnitDefinitions() {
      var definitions = this.getDefinitions(),
          unitDefinitions = definitions.reduce(function (unitDefinitions, definition) {
        var unitDefinition = UnitDefinition.fromDefinition(definition);

        if (unitDefinition !== null) {
          unitDefinitions.push(unitDefinition);
        }

        return unitDefinitions;
      }, []);

      return unitDefinitions;
    }
  }, {
    key: 'forEachUnitDefinition',
    value: function forEachUnitDefinition(callback) {
      var unitDefinitions = this.getUnitDefinitions();

      unitDefinitions.forEach(callback);
    }
  }], [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var unitsRule = null;

      var definitions = rule.getDefinitions(),
          someUnitDefinition = definitions.some(function (definition) {
        var unitDefinition = UnitDefinition.fromDefinition(definition);

        if (unitDefinition !== null) {
          return true;
        }
      });

      if (someUnitDefinition) {
        unitsRule = Rule.fromRule(rule, UnitsRule);
      }

      return unitsRule;
    }
  }]);

  return UnitsRule;
}(Rule);

module.exports = UnitsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvdW5pdHMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJVbml0RGVmaW5pdGlvbiIsIlVuaXRzUnVsZSIsInVuaXREZWZpbml0aW9ucyIsImdldFVuaXREZWZpbml0aW9ucyIsInVuaXREZWZpbml0aW9uUnVsZU5hbWVzIiwibWFwIiwidW5pdERlZmluaXRpb24iLCJ1bml0RGVmaW5pdGlvblJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlIiwiZGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwicHVzaCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInJ1bGUiLCJ1bml0c1J1bGUiLCJzb21lVW5pdERlZmluaXRpb24iLCJzb21lIiwiZnJvbVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsd0JBQVIsQ0FBYjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7SUFHTUUsUzs7Ozs7Ozs7Ozs7aURBQ3lCO0FBQzNCLFVBQU1DLGtCQUFrQixLQUFLQyxrQkFBTCxFQUF4QjtBQUFBLFVBQ01DLDBCQUEwQkYsZ0JBQWdCRyxHQUFoQixDQUFvQixVQUFTQyxjQUFULEVBQXlCO0FBQ3JFLFlBQU1DLHlCQUF5QkQsZUFBZUUsV0FBZixFQUEvQjs7QUFFQSxlQUFPRCxzQkFBUDtBQUNELE9BSnlCLENBRGhDOztBQU9BLGFBQU9ILHVCQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUssY0FBYyxLQUFLQyxjQUFMLEVBQXBCO0FBQUEsVUFDTVIsa0JBQWtCTyxZQUFZRSxNQUFaLENBQW1CLFVBQVNULGVBQVQsRUFBMEJVLFVBQTFCLEVBQXNDO0FBQ3pFLFlBQU1OLGlCQUFpQk4sZUFBZWEsY0FBZixDQUE4QkQsVUFBOUIsQ0FBdkI7O0FBRUEsWUFBSU4sbUJBQW1CLElBQXZCLEVBQTZCO0FBQzNCSiwwQkFBZ0JZLElBQWhCLENBQXFCUixjQUFyQjtBQUNEOztBQUVELGVBQU9KLGVBQVA7QUFDRCxPQVJpQixFQVFmLEVBUmUsQ0FEeEI7O0FBV0EsYUFBT0EsZUFBUDtBQUNEOzs7MENBRXFCYSxRLEVBQVU7QUFDOUIsVUFBTWIsa0JBQWtCLEtBQUtDLGtCQUFMLEVBQXhCOztBQUVBRCxzQkFBZ0JjLE9BQWhCLENBQXdCRCxRQUF4QjtBQUNEOzs7NkJBRWVFLEksRUFBTTtBQUNwQixVQUFJQyxZQUFZLElBQWhCOztBQUVBLFVBQU1ULGNBQWNRLEtBQUtQLGNBQUwsRUFBcEI7QUFBQSxVQUNNUyxxQkFBcUJWLFlBQVlXLElBQVosQ0FBaUIsVUFBU1IsVUFBVCxFQUFxQjtBQUN6RCxZQUFNTixpQkFBaUJOLGVBQWVhLGNBQWYsQ0FBOEJELFVBQTlCLENBQXZCOztBQUVBLFlBQUlOLG1CQUFtQixJQUF2QixFQUE2QjtBQUMzQixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU5vQixDQUQzQjs7QUFTQSxVQUFJYSxrQkFBSixFQUF3QjtBQUN0QkQsb0JBQVlwQixLQUFLdUIsUUFBTCxDQUFjSixJQUFkLEVBQW9CaEIsU0FBcEIsQ0FBWjtBQUNEOztBQUVELGFBQU9pQixTQUFQO0FBQ0Q7Ozs7RUFsRHFCcEIsSTs7QUFxRHhCd0IsT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCIiwiZmlsZSI6InVuaXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vZXh0ZW5kZWRCTkYvcnVsZScpLFxuICAgICAgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKTtcblxuY2xhc3MgVW5pdHNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGdldFVuaXREZWZpbml0aW9uUnVsZU5hbWVzKCkge1xuICAgIGNvbnN0IHVuaXREZWZpbml0aW9ucyA9IHRoaXMuZ2V0VW5pdERlZmluaXRpb25zKCksXG4gICAgICAgICAgdW5pdERlZmluaXRpb25SdWxlTmFtZXMgPSB1bml0RGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uKHVuaXREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0RGVmaW5pdGlvblJ1bGVOYW1lID0gdW5pdERlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHVuaXREZWZpbml0aW9uUnVsZU5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uUnVsZU5hbWVzO1xuICB9XG4gIFxuICBnZXRVbml0RGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgdW5pdERlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKHVuaXREZWZpbml0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHVuaXREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHVuaXREZWZpbml0aW9ucy5wdXNoKHVuaXREZWZpbml0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHVuaXREZWZpbml0aW9ucztcbiAgICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9ucztcbiAgfVxuICBcbiAgZm9yRWFjaFVuaXREZWZpbml0aW9uKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdW5pdERlZmluaXRpb25zID0gdGhpcy5nZXRVbml0RGVmaW5pdGlvbnMoKTtcbiAgICBcbiAgICB1bml0RGVmaW5pdGlvbnMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IHVuaXRzUnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBzb21lVW5pdERlZmluaXRpb24gPSBkZWZpbml0aW9ucy5zb21lKGZ1bmN0aW9uKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmICh1bml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzb21lVW5pdERlZmluaXRpb24pIHtcbiAgICAgIHVuaXRzUnVsZSA9IFJ1bGUuZnJvbVJ1bGUocnVsZSwgVW5pdHNSdWxlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHVuaXRzUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXRzUnVsZTtcbiJdfQ==