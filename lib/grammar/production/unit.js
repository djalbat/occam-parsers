'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    Production = require('../../bnf/production'),
    UnitDefinition = require('../definition/unit');

var UnitProduction = function (_Production) {
  _inherits(UnitProduction, _Production);

  function UnitProduction() {
    _classCallCheck(this, UnitProduction);

    return _possibleConstructorReturn(this, (UnitProduction.__proto__ || Object.getPrototypeOf(UnitProduction)).apply(this, arguments));
  }

  _createClass(UnitProduction, [{
    key: 'getUnitProductionName',
    value: function getUnitProductionName() {
      var definitions = this.getDefinitions(),
          firstDefinition = arrayUtil.first(definitions),
          unitDefinition = firstDefinition,
          ///
      unitProductionName = unitDefinition.getProductionName();

      return unitProductionName;
    }
  }, {
    key: 'isNotCyclic',
    value: function isNotCyclic() {
      var name = this.getName(),
          unitProductionName = this.getUnitProductionName(),
          notCyclic = name !== unitProductionName;

      return notCyclic;
    }
  }, {
    key: 'isFoundByProductionNames',
    value: function isFoundByProductionNames(firstProductionName, secondProductionName) {
      var name = this.getName(),
          unitProductionName = this.getUnitProductionName(),
          found = name === firstProductionName && unitProductionName === secondProductionName; ///

      return found;
    }
  }, {
    key: 'isIncludedInProductionNames',
    value: function isIncludedInProductionNames(productionNames) {
      var name = this.getName(),
          unitProductionName = this.getUnitProductionName(),
          productionNamesContainsName = productionNames.includes(name),
          productionNamesContainsUnitProductionName = productionNames.includes(unitProductionName),
          includedInProductionNames = productionNamesContainsName && productionNamesContainsUnitProductionName;

      return includedInProductionNames;
    }
  }], [{
    key: 'fromNameAndUnitDefinition',
    value: function fromNameAndUnitDefinition(name, unitDefinition) {
      var definitions = [unitDefinition],
          Node = null,
          ///
      unitProduction = new UnitProduction(name, definitions, Node);

      return unitProduction;
    }
  }, {
    key: 'fromNameAndProductionName',
    value: function fromNameAndProductionName(name, productionName) {
      var unitDefinition = UnitDefinition.fromProductionName(productionName),
          unitProduction = UnitProduction.fromNameAndUnitDefinition(name, unitDefinition);

      return unitProduction;
    }
  }, {
    key: 'fromProductionNames',
    value: function fromProductionNames(firstProductionName, secondProductionName) {
      var name = firstProductionName,
          ///
      productionName = secondProductionName,
          ///
      unitProduction = UnitProduction.fromNameAndProductionName(name, productionName);

      return unitProduction;
    }
  }]);

  return UnitProduction;
}(Production);

module.exports = UnitProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbiIsIlVuaXREZWZpbml0aW9uIiwiVW5pdFByb2R1Y3Rpb24iLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZmlyc3REZWZpbml0aW9uIiwiZmlyc3QiLCJ1bml0RGVmaW5pdGlvbiIsInVuaXRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwibmFtZSIsImdldE5hbWUiLCJnZXRVbml0UHJvZHVjdGlvbk5hbWUiLCJub3RDeWNsaWMiLCJmaXJzdFByb2R1Y3Rpb25OYW1lIiwic2Vjb25kUHJvZHVjdGlvbk5hbWUiLCJmb3VuZCIsInByb2R1Y3Rpb25OYW1lcyIsInByb2R1Y3Rpb25OYW1lc0NvbnRhaW5zTmFtZSIsImluY2x1ZGVzIiwicHJvZHVjdGlvbk5hbWVzQ29udGFpbnNVbml0UHJvZHVjdGlvbk5hbWUiLCJpbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzIiwiTm9kZSIsInVuaXRQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tUHJvZHVjdGlvbk5hbWUiLCJmcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uIiwiZnJvbU5hbWVBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsc0JBQVIsQ0FEbkI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSU1HLGM7Ozs7Ozs7Ozs7OzRDQUNvQjtBQUN0QixVQUFNQyxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNQyxrQkFBa0JQLFVBQVVRLEtBQVYsQ0FBZ0JILFdBQWhCLENBRHhCO0FBQUEsVUFFTUksaUJBQWlCRixlQUZ2QjtBQUFBLFVBRXdDO0FBQ2xDRywyQkFBcUJELGVBQWVFLGlCQUFmLEVBSDNCOztBQUtBLGFBQU9ELGtCQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1FLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUgscUJBQXFCLEtBQUtJLHFCQUFMLEVBRDNCO0FBQUEsVUFFTUMsWUFBYUgsU0FBU0Ysa0JBRjVCOztBQUlBLGFBQU9LLFNBQVA7QUFDRDs7OzZDQUV3QkMsbUIsRUFBcUJDLG9CLEVBQXNCO0FBQ2xFLFVBQU1MLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUgscUJBQXFCLEtBQUtJLHFCQUFMLEVBRDNCO0FBQUEsVUFFTUksUUFBVU4sU0FBU0ksbUJBQVYsSUFBbUNOLHVCQUF1Qk8sb0JBRnpFLENBRGtFLENBR2dDOztBQUVsRyxhQUFPQyxLQUFQO0FBQ0Q7OztnREFFMkJDLGUsRUFBaUI7QUFDM0MsVUFBTVAsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNSCxxQkFBcUIsS0FBS0kscUJBQUwsRUFEM0I7QUFBQSxVQUVNTSw4QkFBOEJELGdCQUFnQkUsUUFBaEIsQ0FBeUJULElBQXpCLENBRnBDO0FBQUEsVUFHTVUsNENBQTRDSCxnQkFBZ0JFLFFBQWhCLENBQXlCWCxrQkFBekIsQ0FIbEQ7QUFBQSxVQUlNYSw0QkFBNkJILCtCQUErQkUseUNBSmxFOztBQU1BLGFBQU9DLHlCQUFQO0FBQ0Q7Ozs4Q0FFZ0NYLEksRUFBTUgsYyxFQUFnQjtBQUNyRCxVQUFNSixjQUFjLENBQ1pJLGNBRFksQ0FBcEI7QUFBQSxVQUdNZSxPQUFPLElBSGI7QUFBQSxVQUdvQjtBQUNkQyx1QkFBaUIsSUFBSXJCLGNBQUosQ0FBbUJRLElBQW5CLEVBQXlCUCxXQUF6QixFQUFzQ21CLElBQXRDLENBSnZCOztBQU1BLGFBQU9DLGNBQVA7QUFDRDs7OzhDQUVnQ2IsSSxFQUFNYyxjLEVBQWdCO0FBQ3JELFVBQU1qQixpQkFBaUJOLGVBQWV3QixrQkFBZixDQUFrQ0QsY0FBbEMsQ0FBdkI7QUFBQSxVQUNNRCxpQkFBaUJyQixlQUFld0IseUJBQWYsQ0FBeUNoQixJQUF6QyxFQUErQ0gsY0FBL0MsQ0FEdkI7O0FBR0EsYUFBT2dCLGNBQVA7QUFDRDs7O3dDQUUwQlQsbUIsRUFBcUJDLG9CLEVBQXNCO0FBQ3BFLFVBQU1MLE9BQU9JLG1CQUFiO0FBQUEsVUFBbUM7QUFDN0JVLHVCQUFpQlQsb0JBRHZCO0FBQUEsVUFDOEM7QUFDeENRLHVCQUFpQnJCLGVBQWV5Qix5QkFBZixDQUF5Q2pCLElBQXpDLEVBQStDYyxjQUEvQyxDQUZ2Qjs7QUFJQSxhQUFPRCxjQUFQO0FBQ0Q7Ozs7RUEzRDBCdkIsVTs7QUE4RDdCNEIsT0FBT0MsT0FBUCxHQUFpQjNCLGNBQWpCIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9ibmYvcHJvZHVjdGlvbicpLFxuICAgICAgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKTtcblxuY2xhc3MgVW5pdFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgZ2V0VW5pdFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGZpcnN0RGVmaW5pdGlvbiA9IGFycmF5VXRpbC5maXJzdChkZWZpbml0aW9ucyksXG4gICAgICAgICAgdW5pdERlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHVuaXRQcm9kdWN0aW9uTmFtZSA9IHVuaXREZWZpbml0aW9uLmdldFByb2R1Y3Rpb25OYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXRQcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgaXNOb3RDeWNsaWMoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHVuaXRQcm9kdWN0aW9uTmFtZSA9IHRoaXMuZ2V0VW5pdFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgbm90Q3ljbGljID0gKG5hbWUgIT09IHVuaXRQcm9kdWN0aW9uTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIG5vdEN5Y2xpYzsgICAgXG4gIH1cblxuICBpc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZXMoZmlyc3RQcm9kdWN0aW9uTmFtZSwgc2Vjb25kUHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdFByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRVbml0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBmb3VuZCA9ICgobmFtZSA9PT0gZmlyc3RQcm9kdWN0aW9uTmFtZSkgJiYgKHVuaXRQcm9kdWN0aW9uTmFtZSA9PT0gc2Vjb25kUHJvZHVjdGlvbk5hbWUpKTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuXG4gIGlzSW5jbHVkZWRJblByb2R1Y3Rpb25OYW1lcyhwcm9kdWN0aW9uTmFtZXMpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdFByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRVbml0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZXNDb250YWluc05hbWUgPSBwcm9kdWN0aW9uTmFtZXMuaW5jbHVkZXMobmFtZSksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVzQ29udGFpbnNVbml0UHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZXMuaW5jbHVkZXModW5pdFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBpbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzID0gKHByb2R1Y3Rpb25OYW1lc0NvbnRhaW5zTmFtZSAmJiBwcm9kdWN0aW9uTmFtZXNDb250YWluc1VuaXRQcm9kdWN0aW9uTmFtZSk7XG5cbiAgICByZXR1cm4gaW5jbHVkZWRJblByb2R1Y3Rpb25OYW1lcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21OYW1lQW5kVW5pdERlZmluaXRpb24obmFtZSwgdW5pdERlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHVuaXREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHVuaXRQcm9kdWN0aW9uID0gbmV3IFVuaXRQcm9kdWN0aW9uKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcbiAgICBcbiAgICByZXR1cm4gdW5pdFByb2R1Y3Rpb247ICAgICAgICAgIFxuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5hbWVBbmRQcm9kdWN0aW9uTmFtZShuYW1lLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICB1bml0UHJvZHVjdGlvbiA9IFVuaXRQcm9kdWN0aW9uLmZyb21OYW1lQW5kVW5pdERlZmluaXRpb24obmFtZSwgdW5pdERlZmluaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB1bml0UHJvZHVjdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZXMoZmlyc3RQcm9kdWN0aW9uTmFtZSwgc2Vjb25kUHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gZmlyc3RQcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gc2Vjb25kUHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICB1bml0UHJvZHVjdGlvbiA9IFVuaXRQcm9kdWN0aW9uLmZyb21OYW1lQW5kUHJvZHVjdGlvbk5hbWUobmFtZSwgcHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgcmV0dXJuIHVuaXRQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdFByb2R1Y3Rpb247XG4iXX0=