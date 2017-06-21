'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    Production = require('../../extendedBNF/production'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbiIsIlVuaXREZWZpbml0aW9uIiwiVW5pdFByb2R1Y3Rpb24iLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZmlyc3REZWZpbml0aW9uIiwiZmlyc3QiLCJ1bml0RGVmaW5pdGlvbiIsInVuaXRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwibmFtZSIsImdldE5hbWUiLCJnZXRVbml0UHJvZHVjdGlvbk5hbWUiLCJub3RDeWNsaWMiLCJmaXJzdFByb2R1Y3Rpb25OYW1lIiwic2Vjb25kUHJvZHVjdGlvbk5hbWUiLCJmb3VuZCIsInByb2R1Y3Rpb25OYW1lcyIsInByb2R1Y3Rpb25OYW1lc0NvbnRhaW5zTmFtZSIsImluY2x1ZGVzIiwicHJvZHVjdGlvbk5hbWVzQ29udGFpbnNVbml0UHJvZHVjdGlvbk5hbWUiLCJpbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzIiwiTm9kZSIsInVuaXRQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tUHJvZHVjdGlvbk5hbWUiLCJmcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uIiwiZnJvbU5hbWVBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsOEJBQVIsQ0FEbkI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSU1HLGM7Ozs7Ozs7Ozs7OzRDQUNvQjtBQUN0QixVQUFNQyxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNQyxrQkFBa0JQLFVBQVVRLEtBQVYsQ0FBZ0JILFdBQWhCLENBRHhCO0FBQUEsVUFFTUksaUJBQWlCRixlQUZ2QjtBQUFBLFVBRXdDO0FBQ2xDRywyQkFBcUJELGVBQWVFLGlCQUFmLEVBSDNCOztBQUtBLGFBQU9ELGtCQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1FLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUgscUJBQXFCLEtBQUtJLHFCQUFMLEVBRDNCO0FBQUEsVUFFTUMsWUFBYUgsU0FBU0Ysa0JBRjVCOztBQUlBLGFBQU9LLFNBQVA7QUFDRDs7OzZDQUV3QkMsbUIsRUFBcUJDLG9CLEVBQXNCO0FBQ2xFLFVBQU1MLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUgscUJBQXFCLEtBQUtJLHFCQUFMLEVBRDNCO0FBQUEsVUFFTUksUUFBVU4sU0FBU0ksbUJBQVYsSUFBbUNOLHVCQUF1Qk8sb0JBRnpFLENBRGtFLENBR2dDOztBQUVsRyxhQUFPQyxLQUFQO0FBQ0Q7OztnREFFMkJDLGUsRUFBaUI7QUFDM0MsVUFBTVAsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNSCxxQkFBcUIsS0FBS0kscUJBQUwsRUFEM0I7QUFBQSxVQUVNTSw4QkFBOEJELGdCQUFnQkUsUUFBaEIsQ0FBeUJULElBQXpCLENBRnBDO0FBQUEsVUFHTVUsNENBQTRDSCxnQkFBZ0JFLFFBQWhCLENBQXlCWCxrQkFBekIsQ0FIbEQ7QUFBQSxVQUlNYSw0QkFBNkJILCtCQUErQkUseUNBSmxFOztBQU1BLGFBQU9DLHlCQUFQO0FBQ0Q7Ozs4Q0FFZ0NYLEksRUFBTUgsYyxFQUFnQjtBQUNyRCxVQUFNSixjQUFjLENBQ1pJLGNBRFksQ0FBcEI7QUFBQSxVQUdNZSxPQUFPLElBSGI7QUFBQSxVQUdvQjtBQUNkQyx1QkFBaUIsSUFBSXJCLGNBQUosQ0FBbUJRLElBQW5CLEVBQXlCUCxXQUF6QixFQUFzQ21CLElBQXRDLENBSnZCOztBQU1BLGFBQU9DLGNBQVA7QUFDRDs7OzhDQUVnQ2IsSSxFQUFNYyxjLEVBQWdCO0FBQ3JELFVBQU1qQixpQkFBaUJOLGVBQWV3QixrQkFBZixDQUFrQ0QsY0FBbEMsQ0FBdkI7QUFBQSxVQUNNRCxpQkFBaUJyQixlQUFld0IseUJBQWYsQ0FBeUNoQixJQUF6QyxFQUErQ0gsY0FBL0MsQ0FEdkI7O0FBR0EsYUFBT2dCLGNBQVA7QUFDRDs7O3dDQUUwQlQsbUIsRUFBcUJDLG9CLEVBQXNCO0FBQ3BFLFVBQU1MLE9BQU9JLG1CQUFiO0FBQUEsVUFBbUM7QUFDN0JVLHVCQUFpQlQsb0JBRHZCO0FBQUEsVUFDOEM7QUFDeENRLHVCQUFpQnJCLGVBQWV5Qix5QkFBZixDQUF5Q2pCLElBQXpDLEVBQStDYyxjQUEvQyxDQUZ2Qjs7QUFJQSxhQUFPRCxjQUFQO0FBQ0Q7Ozs7RUEzRDBCdkIsVTs7QUE4RDdCNEIsT0FBT0MsT0FBUCxHQUFpQjNCLGNBQWpCIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9leHRlbmRlZEJORi9wcm9kdWN0aW9uJyksXG4gICAgICBVbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdW5pdCcpO1xuXG5jbGFzcyBVbml0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBnZXRVbml0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZmlyc3REZWZpbml0aW9uID0gYXJyYXlVdGlsLmZpcnN0KGRlZmluaXRpb25zKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgdW5pdFByb2R1Y3Rpb25OYW1lID0gdW5pdERlZmluaXRpb24uZ2V0UHJvZHVjdGlvbk5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gdW5pdFByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBpc05vdEN5Y2xpYygpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdFByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRVbml0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBub3RDeWNsaWMgPSAobmFtZSAhPT0gdW5pdFByb2R1Y3Rpb25OYW1lKTtcbiAgICBcbiAgICByZXR1cm4gbm90Q3ljbGljOyAgICBcbiAgfVxuXG4gIGlzRm91bmRCeVByb2R1Y3Rpb25OYW1lcyhmaXJzdFByb2R1Y3Rpb25OYW1lLCBzZWNvbmRQcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0UHJvZHVjdGlvbk5hbWUgPSB0aGlzLmdldFVuaXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIGZvdW5kID0gKChuYW1lID09PSBmaXJzdFByb2R1Y3Rpb25OYW1lKSAmJiAodW5pdFByb2R1Y3Rpb25OYW1lID09PSBzZWNvbmRQcm9kdWN0aW9uTmFtZSkpOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgaXNJbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzKHByb2R1Y3Rpb25OYW1lcykge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0UHJvZHVjdGlvbk5hbWUgPSB0aGlzLmdldFVuaXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lc0NvbnRhaW5zTmFtZSA9IHByb2R1Y3Rpb25OYW1lcy5pbmNsdWRlcyhuYW1lKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZXNDb250YWluc1VuaXRQcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lcy5pbmNsdWRlcyh1bml0UHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIGluY2x1ZGVkSW5Qcm9kdWN0aW9uTmFtZXMgPSAocHJvZHVjdGlvbk5hbWVzQ29udGFpbnNOYW1lICYmIHByb2R1Y3Rpb25OYW1lc0NvbnRhaW5zVW5pdFByb2R1Y3Rpb25OYW1lKTtcblxuICAgIHJldHVybiBpbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgdW5pdERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdW5pdFByb2R1Y3Rpb24gPSBuZXcgVW5pdFByb2R1Y3Rpb24obmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiB1bml0UHJvZHVjdGlvbjsgICAgICAgICAgXG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFByb2R1Y3Rpb25OYW1lKG5hbWUsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tUHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHVuaXRQcm9kdWN0aW9uID0gVW5pdFByb2R1Y3Rpb24uZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHVuaXRQcm9kdWN0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lcyhmaXJzdFByb2R1Y3Rpb25OYW1lLCBzZWNvbmRQcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBmaXJzdFByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBzZWNvbmRQcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIHVuaXRQcm9kdWN0aW9uID0gVW5pdFByb2R1Y3Rpb24uZnJvbU5hbWVBbmRQcm9kdWN0aW9uTmFtZShuYW1lLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICByZXR1cm4gdW5pdFByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0UHJvZHVjdGlvbjtcbiJdfQ==