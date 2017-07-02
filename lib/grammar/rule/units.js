'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../bnf/rule'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvdW5pdHMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJVbml0RGVmaW5pdGlvbiIsIlVuaXRzUnVsZSIsInVuaXREZWZpbml0aW9ucyIsImdldFVuaXREZWZpbml0aW9ucyIsInVuaXREZWZpbml0aW9uUnVsZU5hbWVzIiwibWFwIiwidW5pdERlZmluaXRpb24iLCJ1bml0RGVmaW5pdGlvblJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlIiwiZGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwicHVzaCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInJ1bGUiLCJ1bml0c1J1bGUiLCJzb21lVW5pdERlZmluaXRpb24iLCJzb21lIiwiZnJvbVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsZ0JBQVIsQ0FBYjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7SUFHTUUsUzs7Ozs7Ozs7Ozs7aURBQ3lCO0FBQzNCLFVBQU1DLGtCQUFrQixLQUFLQyxrQkFBTCxFQUF4QjtBQUFBLFVBQ01DLDBCQUEwQkYsZ0JBQWdCRyxHQUFoQixDQUFvQixVQUFTQyxjQUFULEVBQXlCO0FBQ3JFLFlBQU1DLHlCQUF5QkQsZUFBZUUsV0FBZixFQUEvQjs7QUFFQSxlQUFPRCxzQkFBUDtBQUNELE9BSnlCLENBRGhDOztBQU9BLGFBQU9ILHVCQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUssY0FBYyxLQUFLQyxjQUFMLEVBQXBCO0FBQUEsVUFDTVIsa0JBQWtCTyxZQUFZRSxNQUFaLENBQW1CLFVBQVNULGVBQVQsRUFBMEJVLFVBQTFCLEVBQXNDO0FBQ3pFLFlBQU1OLGlCQUFpQk4sZUFBZWEsY0FBZixDQUE4QkQsVUFBOUIsQ0FBdkI7O0FBRUEsWUFBSU4sbUJBQW1CLElBQXZCLEVBQTZCO0FBQzNCSiwwQkFBZ0JZLElBQWhCLENBQXFCUixjQUFyQjtBQUNEOztBQUVELGVBQU9KLGVBQVA7QUFDRCxPQVJpQixFQVFmLEVBUmUsQ0FEeEI7O0FBV0EsYUFBT0EsZUFBUDtBQUNEOzs7MENBRXFCYSxRLEVBQVU7QUFDOUIsVUFBTWIsa0JBQWtCLEtBQUtDLGtCQUFMLEVBQXhCOztBQUVBRCxzQkFBZ0JjLE9BQWhCLENBQXdCRCxRQUF4QjtBQUNEOzs7NkJBRWVFLEksRUFBTTtBQUNwQixVQUFJQyxZQUFZLElBQWhCOztBQUVBLFVBQU1ULGNBQWNRLEtBQUtQLGNBQUwsRUFBcEI7QUFBQSxVQUNNUyxxQkFBcUJWLFlBQVlXLElBQVosQ0FBaUIsVUFBU1IsVUFBVCxFQUFxQjtBQUN6RCxZQUFNTixpQkFBaUJOLGVBQWVhLGNBQWYsQ0FBOEJELFVBQTlCLENBQXZCOztBQUVBLFlBQUlOLG1CQUFtQixJQUF2QixFQUE2QjtBQUMzQixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU5vQixDQUQzQjs7QUFTQSxVQUFJYSxrQkFBSixFQUF3QjtBQUN0QkQsb0JBQVlwQixLQUFLdUIsUUFBTCxDQUFjSixJQUFkLEVBQW9CaEIsU0FBcEIsQ0FBWjtBQUNEOztBQUVELGFBQU9pQixTQUFQO0FBQ0Q7Ozs7RUFsRHFCcEIsSTs7QUFxRHhCd0IsT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCIiwiZmlsZSI6InVuaXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vYm5mL3J1bGUnKSxcbiAgICAgIFVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi91bml0Jyk7XG5cbmNsYXNzIFVuaXRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBnZXRVbml0RGVmaW5pdGlvblJ1bGVOYW1lcygpIHtcbiAgICBjb25zdCB1bml0RGVmaW5pdGlvbnMgPSB0aGlzLmdldFVuaXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9uUnVsZU5hbWVzID0gdW5pdERlZmluaXRpb25zLm1hcChmdW5jdGlvbih1bml0RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdW5pdERlZmluaXRpb25SdWxlTmFtZSA9IHVuaXREZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB1bml0RGVmaW5pdGlvblJ1bGVOYW1lO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvblJ1bGVOYW1lcztcbiAgfVxuICBcbiAgZ2V0VW5pdERlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbih1bml0RGVmaW5pdGlvbnMsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmICh1bml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB1bml0RGVmaW5pdGlvbnMucHVzaCh1bml0RGVmaW5pdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB1bml0RGVmaW5pdGlvbnM7XG4gICAgICAgICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvbnM7XG4gIH1cbiAgXG4gIGZvckVhY2hVbml0RGVmaW5pdGlvbihjYWxsYmFjaykge1xuICAgIGNvbnN0IHVuaXREZWZpbml0aW9ucyA9IHRoaXMuZ2V0VW5pdERlZmluaXRpb25zKCk7XG4gICAgXG4gICAgdW5pdERlZmluaXRpb25zLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCB1bml0c1J1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgc29tZVVuaXREZWZpbml0aW9uID0gZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0RGVmaW5pdGlvbiA9IFVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAodW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc29tZVVuaXREZWZpbml0aW9uKSB7XG4gICAgICB1bml0c1J1bGUgPSBSdWxlLmZyb21SdWxlKHJ1bGUsIFVuaXRzUnVsZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB1bml0c1J1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0c1J1bGU7XG4iXX0=