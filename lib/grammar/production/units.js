'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../extendedBNF/production'),
    UnitDefinition = require('../definition/unit');

var UnitsProduction = function (_Production) {
  _inherits(UnitsProduction, _Production);

  function UnitsProduction() {
    _classCallCheck(this, UnitsProduction);

    return _possibleConstructorReturn(this, (UnitsProduction.__proto__ || Object.getPrototypeOf(UnitsProduction)).apply(this, arguments));
  }

  _createClass(UnitsProduction, [{
    key: 'getUnitDefinitionProductionNames',
    value: function getUnitDefinitionProductionNames() {
      var unitDefinitions = this.getUnitDefinitions(),
          unitDefinitionProductionNames = unitDefinitions.map(function (unitDefinition) {
        var unitDefinitionProductionName = unitDefinition.getProductionName();

        return unitDefinitionProductionName;
      });

      return unitDefinitionProductionNames;
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
    key: 'fromProduction',
    value: function fromProduction(production) {
      var unitsProduction = null;

      var definitions = production.getDefinitions(),
          someUnitDefinition = definitions.some(function (definition) {
        var unitDefinition = UnitDefinition.fromDefinition(definition);

        if (unitDefinition !== null) {
          return true;
        }
      });

      if (someUnitDefinition) {
        unitsProduction = Production.fromProduction(production, UnitsProduction);
      }

      return unitsProduction;
    }
  }]);

  return UnitsProduction;
}(Production);

module.exports = UnitsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJVbml0RGVmaW5pdGlvbiIsIlVuaXRzUHJvZHVjdGlvbiIsInVuaXREZWZpbml0aW9ucyIsImdldFVuaXREZWZpbml0aW9ucyIsInVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWVzIiwibWFwIiwidW5pdERlZmluaXRpb24iLCJ1bml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlIiwiZGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwicHVzaCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInByb2R1Y3Rpb24iLCJ1bml0c1Byb2R1Y3Rpb24iLCJzb21lVW5pdERlZmluaXRpb24iLCJzb21lIiwiZnJvbVByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsOEJBQVIsQ0FBbkI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7O0lBR01FLGU7Ozs7Ozs7Ozs7O3VEQUMrQjtBQUNqQyxVQUFNQyxrQkFBa0IsS0FBS0Msa0JBQUwsRUFBeEI7QUFBQSxVQUNNQyxnQ0FBZ0NGLGdCQUFnQkcsR0FBaEIsQ0FBb0IsVUFBU0MsY0FBVCxFQUF5QjtBQUMzRSxZQUFNQywrQkFBK0JELGVBQWVFLGlCQUFmLEVBQXJDOztBQUVBLGVBQU9ELDRCQUFQO0FBQ0QsT0FKK0IsQ0FEdEM7O0FBT0EsYUFBT0gsNkJBQVA7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNSyxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNUixrQkFBa0JPLFlBQVlFLE1BQVosQ0FBbUIsVUFBU1QsZUFBVCxFQUEwQlUsVUFBMUIsRUFBc0M7QUFDekUsWUFBTU4saUJBQWlCTixlQUFlYSxjQUFmLENBQThCRCxVQUE5QixDQUF2Qjs7QUFFQSxZQUFJTixtQkFBbUIsSUFBdkIsRUFBNkI7QUFDM0JKLDBCQUFnQlksSUFBaEIsQ0FBcUJSLGNBQXJCO0FBQ0Q7O0FBRUQsZUFBT0osZUFBUDtBQUNELE9BUmlCLEVBUWYsRUFSZSxDQUR4Qjs7QUFXQSxhQUFPQSxlQUFQO0FBQ0Q7OzswQ0FFcUJhLFEsRUFBVTtBQUM5QixVQUFNYixrQkFBa0IsS0FBS0Msa0JBQUwsRUFBeEI7O0FBRUFELHNCQUFnQmMsT0FBaEIsQ0FBd0JELFFBQXhCO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUNoQyxVQUFJQyxrQkFBa0IsSUFBdEI7O0FBRUEsVUFBTVQsY0FBY1EsV0FBV1AsY0FBWCxFQUFwQjtBQUFBLFVBQ01TLHFCQUFxQlYsWUFBWVcsSUFBWixDQUFpQixVQUFTUixVQUFULEVBQXFCO0FBQ3pELFlBQU1OLGlCQUFpQk4sZUFBZWEsY0FBZixDQUE4QkQsVUFBOUIsQ0FBdkI7O0FBRUEsWUFBSU4sbUJBQW1CLElBQXZCLEVBQTZCO0FBQzNCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTm9CLENBRDNCOztBQVNBLFVBQUlhLGtCQUFKLEVBQXdCO0FBQ3RCRCwwQkFBa0JwQixXQUFXdUIsY0FBWCxDQUEwQkosVUFBMUIsRUFBc0NoQixlQUF0QyxDQUFsQjtBQUNEOztBQUVELGFBQU9pQixlQUFQO0FBQ0Q7Ozs7RUFsRDJCcEIsVTs7QUFxRDlCd0IsT0FBT0MsT0FBUCxHQUFpQnRCLGVBQWpCIiwiZmlsZSI6InVuaXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vZXh0ZW5kZWRCTkYvcHJvZHVjdGlvbicpLFxuICAgICAgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKTtcblxuY2xhc3MgVW5pdHNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGdldFVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWVzKCkge1xuICAgIGNvbnN0IHVuaXREZWZpbml0aW9ucyA9IHRoaXMuZ2V0VW5pdERlZmluaXRpb25zKCksXG4gICAgICAgICAgdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZXMgPSB1bml0RGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uKHVuaXREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lID0gdW5pdERlZmluaXRpb24uZ2V0UHJvZHVjdGlvbk5hbWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWVzO1xuICB9XG4gIFxuICBnZXRVbml0RGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgdW5pdERlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKHVuaXREZWZpbml0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHVuaXREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHVuaXREZWZpbml0aW9ucy5wdXNoKHVuaXREZWZpbml0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHVuaXREZWZpbml0aW9ucztcbiAgICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9ucztcbiAgfVxuICBcbiAgZm9yRWFjaFVuaXREZWZpbml0aW9uKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdW5pdERlZmluaXRpb25zID0gdGhpcy5nZXRVbml0RGVmaW5pdGlvbnMoKTtcbiAgICBcbiAgICB1bml0RGVmaW5pdGlvbnMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgbGV0IHVuaXRzUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHByb2R1Y3Rpb24uZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBzb21lVW5pdERlZmluaXRpb24gPSBkZWZpbml0aW9ucy5zb21lKGZ1bmN0aW9uKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmICh1bml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzb21lVW5pdERlZmluaXRpb24pIHtcbiAgICAgIHVuaXRzUHJvZHVjdGlvbiA9IFByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiwgVW5pdHNQcm9kdWN0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHVuaXRzUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXRzUHJvZHVjdGlvbjtcbiJdfQ==