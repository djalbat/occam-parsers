'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../bnf/production'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJVbml0RGVmaW5pdGlvbiIsIlVuaXRzUHJvZHVjdGlvbiIsInVuaXREZWZpbml0aW9ucyIsImdldFVuaXREZWZpbml0aW9ucyIsInVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWVzIiwibWFwIiwidW5pdERlZmluaXRpb24iLCJ1bml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlIiwiZGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwicHVzaCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInByb2R1Y3Rpb24iLCJ1bml0c1Byb2R1Y3Rpb24iLCJzb21lVW5pdERlZmluaXRpb24iLCJzb21lIiwiZnJvbVByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsc0JBQVIsQ0FBbkI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7O0lBR01FLGU7Ozs7Ozs7Ozs7O3VEQUMrQjtBQUNqQyxVQUFNQyxrQkFBa0IsS0FBS0Msa0JBQUwsRUFBeEI7QUFBQSxVQUNNQyxnQ0FBZ0NGLGdCQUFnQkcsR0FBaEIsQ0FBb0IsVUFBU0MsY0FBVCxFQUF5QjtBQUMzRSxZQUFNQywrQkFBK0JELGVBQWVFLGlCQUFmLEVBQXJDOztBQUVBLGVBQU9ELDRCQUFQO0FBQ0QsT0FKK0IsQ0FEdEM7O0FBT0EsYUFBT0gsNkJBQVA7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNSyxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNUixrQkFBa0JPLFlBQVlFLE1BQVosQ0FBbUIsVUFBU1QsZUFBVCxFQUEwQlUsVUFBMUIsRUFBc0M7QUFDekUsWUFBTU4saUJBQWlCTixlQUFlYSxjQUFmLENBQThCRCxVQUE5QixDQUF2Qjs7QUFFQSxZQUFJTixtQkFBbUIsSUFBdkIsRUFBNkI7QUFDM0JKLDBCQUFnQlksSUFBaEIsQ0FBcUJSLGNBQXJCO0FBQ0Q7O0FBRUQsZUFBT0osZUFBUDtBQUNELE9BUmlCLEVBUWYsRUFSZSxDQUR4Qjs7QUFXQSxhQUFPQSxlQUFQO0FBQ0Q7OzswQ0FFcUJhLFEsRUFBVTtBQUM5QixVQUFNYixrQkFBa0IsS0FBS0Msa0JBQUwsRUFBeEI7O0FBRUFELHNCQUFnQmMsT0FBaEIsQ0FBd0JELFFBQXhCO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUNoQyxVQUFJQyxrQkFBa0IsSUFBdEI7O0FBRUEsVUFBTVQsY0FBY1EsV0FBV1AsY0FBWCxFQUFwQjtBQUFBLFVBQ01TLHFCQUFxQlYsWUFBWVcsSUFBWixDQUFpQixVQUFTUixVQUFULEVBQXFCO0FBQ3pELFlBQU1OLGlCQUFpQk4sZUFBZWEsY0FBZixDQUE4QkQsVUFBOUIsQ0FBdkI7O0FBRUEsWUFBSU4sbUJBQW1CLElBQXZCLEVBQTZCO0FBQzNCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTm9CLENBRDNCOztBQVNBLFVBQUlhLGtCQUFKLEVBQXdCO0FBQ3RCRCwwQkFBa0JwQixXQUFXdUIsY0FBWCxDQUEwQkosVUFBMUIsRUFBc0NoQixlQUF0QyxDQUFsQjtBQUNEOztBQUVELGFBQU9pQixlQUFQO0FBQ0Q7Ozs7RUFsRDJCcEIsVTs7QUFxRDlCd0IsT0FBT0MsT0FBUCxHQUFpQnRCLGVBQWpCIiwiZmlsZSI6InVuaXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vYm5mL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi91bml0Jyk7XG5cbmNsYXNzIFVuaXRzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBnZXRVbml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lcygpIHtcbiAgICBjb25zdCB1bml0RGVmaW5pdGlvbnMgPSB0aGlzLmdldFVuaXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWVzID0gdW5pdERlZmluaXRpb25zLm1hcChmdW5jdGlvbih1bml0RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSA9IHVuaXREZWZpbml0aW9uLmdldFByb2R1Y3Rpb25OYW1lKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lcztcbiAgfVxuICBcbiAgZ2V0VW5pdERlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbih1bml0RGVmaW5pdGlvbnMsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmICh1bml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB1bml0RGVmaW5pdGlvbnMucHVzaCh1bml0RGVmaW5pdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB1bml0RGVmaW5pdGlvbnM7XG4gICAgICAgICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvbnM7XG4gIH1cbiAgXG4gIGZvckVhY2hVbml0RGVmaW5pdGlvbihjYWxsYmFjaykge1xuICAgIGNvbnN0IHVuaXREZWZpbml0aW9ucyA9IHRoaXMuZ2V0VW5pdERlZmluaXRpb25zKCk7XG4gICAgXG4gICAgdW5pdERlZmluaXRpb25zLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGxldCB1bml0c1Byb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBwcm9kdWN0aW9uLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgc29tZVVuaXREZWZpbml0aW9uID0gZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0RGVmaW5pdGlvbiA9IFVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAodW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc29tZVVuaXREZWZpbml0aW9uKSB7XG4gICAgICB1bml0c1Byb2R1Y3Rpb24gPSBQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24sIFVuaXRzUHJvZHVjdGlvbik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB1bml0c1Byb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0c1Byb2R1Y3Rpb247XG4iXX0=