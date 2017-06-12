'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitDefinition = require('../definition/unit'),
    Production = require('../../common/production');

var UnitDefinitionsProduction = function (_Production) {
  _inherits(UnitDefinitionsProduction, _Production);

  function UnitDefinitionsProduction() {
    _classCallCheck(this, UnitDefinitionsProduction);

    return _possibleConstructorReturn(this, (UnitDefinitionsProduction.__proto__ || Object.getPrototypeOf(UnitDefinitionsProduction)).apply(this, arguments));
  }

  _createClass(UnitDefinitionsProduction, [{
    key: 'getProductionNames',
    value: function getProductionNames() {
      var definitions = this.getDefinitions(),
          unitDefinitions = definitions,
          ///
      productionNames = unitDefinitions.map(function (unitDefinition) {
        var productionName = unitDefinition.getProductionName();

        return productionName;
      });

      return productionNames;
    }
  }, {
    key: 'forEachUnitDefinition',
    value: function forEachUnitDefinition(callback) {
      var definitions = this.getDefinitions(),
          unitDefinitions = definitions; ///

      unitDefinitions.forEach(callback);
    }
  }], [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var unitDefinitionsProduction = null;

      var definitions = production.getDefinitions(),
          unitDefinitions = definitions.reduce(function (unitDefinitions, definition) {
        var unitDefinition = UnitDefinition.fromDefinition(definition);

        if (unitDefinition !== null) {
          unitDefinitions = unitDefinitions.concat(unitDefinition);
        }

        return unitDefinitions;
      }, []),
          unitDefinitionsLength = unitDefinitions.length;

      if (unitDefinitionsLength > 0) {
        var name = production.getName(),
            _definitions = unitDefinitions,
            ///
        Node = production.getNode();

        unitDefinitionsProduction = new UnitDefinitionsProduction(name, _definitions, Node);
      }

      return unitDefinitionsProduction;
    }
  }]);

  return UnitDefinitionsProduction;
}(Production);

module.exports = UnitDefinitionsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdERlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbIlVuaXREZWZpbml0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJVbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInVuaXREZWZpbml0aW9ucyIsInByb2R1Y3Rpb25OYW1lcyIsIm1hcCIsInVuaXREZWZpbml0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInByb2R1Y3Rpb24iLCJ1bml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uIiwicmVkdWNlIiwiZGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwiY29uY2F0IiwidW5pdERlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibmFtZSIsImdldE5hbWUiLCJOb2RlIiwiZ2V0Tm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLG9CQUFSLENBQXZCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSx5QkFBUixDQURuQjs7SUFHTUUseUI7Ozs7Ozs7Ozs7O3lDQUNpQjtBQUNuQixVQUFNQyxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNQyxrQkFBa0JGLFdBRHhCO0FBQUEsVUFDc0M7QUFDaENHLHdCQUFrQkQsZ0JBQWdCRSxHQUFoQixDQUFvQixVQUFTQyxjQUFULEVBQXlCO0FBQzdELFlBQU1DLGlCQUFpQkQsZUFBZUUsaUJBQWYsRUFBdkI7O0FBRUEsZUFBT0QsY0FBUDtBQUNELE9BSmlCLENBRnhCOztBQVFBLGFBQU9ILGVBQVA7QUFDRDs7OzBDQUVxQkssUSxFQUFVO0FBQzlCLFVBQU1SLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjtBQUFBLFVBQ01DLGtCQUFrQkYsV0FEeEIsQ0FEOEIsQ0FFUTs7QUFFdENFLHNCQUFnQk8sT0FBaEIsQ0FBd0JELFFBQXhCO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUNoQyxVQUFJQyw0QkFBNEIsSUFBaEM7O0FBRUEsVUFBTVgsY0FBY1UsV0FBV1QsY0FBWCxFQUFwQjtBQUFBLFVBQ01DLGtCQUFrQkYsWUFBWVksTUFBWixDQUFtQixVQUFTVixlQUFULEVBQTBCVyxVQUExQixFQUFzQztBQUN6RSxZQUFNUixpQkFBaUJULGVBQWVrQixjQUFmLENBQThCRCxVQUE5QixDQUF2Qjs7QUFFQSxZQUFJUixtQkFBbUIsSUFBdkIsRUFBNkI7QUFDM0JILDRCQUFrQkEsZ0JBQWdCYSxNQUFoQixDQUF1QlYsY0FBdkIsQ0FBbEI7QUFDRDs7QUFFRCxlQUFPSCxlQUFQO0FBQ0QsT0FSaUIsRUFRZixFQVJlLENBRHhCO0FBQUEsVUFVTWMsd0JBQXdCZCxnQkFBZ0JlLE1BVjlDOztBQVlBLFVBQUlELHdCQUF3QixDQUE1QixFQUErQjtBQUM3QixZQUFNRSxPQUFPUixXQUFXUyxPQUFYLEVBQWI7QUFBQSxZQUNNbkIsZUFBY0UsZUFEcEI7QUFBQSxZQUNzQztBQUNoQ2tCLGVBQU9WLFdBQVdXLE9BQVgsRUFGYjs7QUFJQVYsb0NBQTRCLElBQUlaLHlCQUFKLENBQThCbUIsSUFBOUIsRUFBb0NsQixZQUFwQyxFQUFpRG9CLElBQWpELENBQTVCO0FBQ0Q7O0FBRUQsYUFBT1QseUJBQVA7QUFDRDs7OztFQTVDcUNiLFU7O0FBK0N4Q3dCLE9BQU9DLE9BQVAsR0FBaUJ4Qix5QkFBakIiLCJmaWxlIjoidW5pdERlZmluaXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdW5pdCcpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIFVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgZ2V0UHJvZHVjdGlvbk5hbWVzKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLCAgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVzID0gdW5pdERlZmluaXRpb25zLm1hcChmdW5jdGlvbih1bml0RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB1bml0RGVmaW5pdGlvbi5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lcztcbiAgfVxuICBcbiAgZm9yRWFjaFVuaXREZWZpbml0aW9uKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgdW5pdERlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7ICAvLy9cbiAgICBcbiAgICB1bml0RGVmaW5pdGlvbnMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgbGV0IHVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBwcm9kdWN0aW9uLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgdW5pdERlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKHVuaXREZWZpbml0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHVuaXREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHVuaXREZWZpbml0aW9ucyA9IHVuaXREZWZpbml0aW9ucy5jb25jYXQodW5pdERlZmluaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdW5pdERlZmluaXRpb25zO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvbnNMZW5ndGggPSB1bml0RGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHVuaXREZWZpbml0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgIGRlZmluaXRpb25zID0gdW5pdERlZmluaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCk7XG5cbiAgICAgIHVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb24gPSBuZXcgVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbjtcbiJdfQ==