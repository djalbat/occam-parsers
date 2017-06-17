'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    Production = require('../../bnf/production'),
    UnitDefinition = require('../definition/unit');

var UnitDefinitionProduction = function (_Production) {
  _inherits(UnitDefinitionProduction, _Production);

  function UnitDefinitionProduction() {
    _classCallCheck(this, UnitDefinitionProduction);

    return _possibleConstructorReturn(this, (UnitDefinitionProduction.__proto__ || Object.getPrototypeOf(UnitDefinitionProduction)).apply(this, arguments));
  }

  _createClass(UnitDefinitionProduction, [{
    key: 'getUnitDefinitionProductionName',
    value: function getUnitDefinitionProductionName() {
      var definitions = this.getDefinitions(),
          firstDefinition = arrayUtil.first(definitions),
          unitDefinition = firstDefinition,
          ///
      unitDefinitionProductionName = unitDefinition.getProductionName();

      return unitDefinitionProductionName;
    }
  }, {
    key: 'isFoundByProductionNames',
    value: function isFoundByProductionNames(firstProductionName, secondProductionName) {
      var name = this.getName(),
          unitDefinitionProductionName = this.getUnitDefinitionProductionName(),
          found = name === firstProductionName && unitDefinitionProductionName === secondProductionName; ///

      return found;
    }
  }], [{
    key: 'fromNameAndUnitDefinition',
    value: function fromNameAndUnitDefinition(name, unitDefinition) {
      var definitions = [unitDefinition],
          Node = null,
          ///
      unitDefinitionProduction = new UnitDefinitionProduction(name, definitions, Node);

      return unitDefinitionProduction;
    }
  }, {
    key: 'fromNameAndProductionName',
    value: function fromNameAndProductionName(name, productionName) {
      var unitDefinition = UnitDefinition.fromProductionName(productionName),
          unitDefinitionProduction = UnitDefinitionProduction.fromNameAndUnitDefinition(name, unitDefinition);

      return unitDefinitionProduction;
    }
  }, {
    key: 'fromProductionNames',
    value: function fromProductionNames(firstProductionName, secondProductionName) {
      var name = firstProductionName,
          ///
      productionName = secondProductionName,
          ///
      unitDefinitionProduction = UnitDefinitionProduction.fromNameAndProductionName(name, productionName);

      return unitDefinitionProduction;
    }
  }]);

  return UnitDefinitionProduction;
}(Production);

module.exports = UnitDefinitionProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdERlZmluaXRpb24uanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJVbml0RGVmaW5pdGlvbiIsIlVuaXREZWZpbml0aW9uUHJvZHVjdGlvbiIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmaXJzdERlZmluaXRpb24iLCJmaXJzdCIsInVuaXREZWZpbml0aW9uIiwidW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiZmlyc3RQcm9kdWN0aW9uTmFtZSIsInNlY29uZFByb2R1Y3Rpb25OYW1lIiwibmFtZSIsImdldE5hbWUiLCJnZXRVbml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lIiwiZm91bmQiLCJOb2RlIiwidW5pdERlZmluaXRpb25Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tUHJvZHVjdGlvbk5hbWUiLCJmcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uIiwiZnJvbU5hbWVBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsc0JBQVIsQ0FEbkI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSU1HLHdCOzs7Ozs7Ozs7OztzREFDOEI7QUFDaEMsVUFBTUMsY0FBYyxLQUFLQyxjQUFMLEVBQXBCO0FBQUEsVUFDTUMsa0JBQWtCUCxVQUFVUSxLQUFWLENBQWdCSCxXQUFoQixDQUR4QjtBQUFBLFVBRU1JLGlCQUFpQkYsZUFGdkI7QUFBQSxVQUV3QztBQUNsQ0cscUNBQStCRCxlQUFlRSxpQkFBZixFQUhyQzs7QUFLQSxhQUFPRCw0QkFBUDtBQUNEOzs7NkNBRXdCRSxtQixFQUFxQkMsb0IsRUFBc0I7QUFDbEUsVUFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNTCwrQkFBK0IsS0FBS00sK0JBQUwsRUFEckM7QUFBQSxVQUVNQyxRQUFVSCxTQUFTRixtQkFBVixJQUFtQ0YsaUNBQWlDRyxvQkFGbkYsQ0FEa0UsQ0FHMEM7O0FBRTVHLGFBQU9JLEtBQVA7QUFDRDs7OzhDQUVnQ0gsSSxFQUFNTCxjLEVBQWdCO0FBQ3JELFVBQU1KLGNBQWMsQ0FDWkksY0FEWSxDQUFwQjtBQUFBLFVBR01TLE9BQU8sSUFIYjtBQUFBLFVBR29CO0FBQ2RDLGlDQUEyQixJQUFJZix3QkFBSixDQUE2QlUsSUFBN0IsRUFBbUNULFdBQW5DLEVBQWdEYSxJQUFoRCxDQUpqQzs7QUFNQSxhQUFPQyx3QkFBUDtBQUNEOzs7OENBRWdDTCxJLEVBQU1NLGMsRUFBZ0I7QUFDckQsVUFBTVgsaUJBQWlCTixlQUFla0Isa0JBQWYsQ0FBa0NELGNBQWxDLENBQXZCO0FBQUEsVUFDTUQsMkJBQTJCZix5QkFBeUJrQix5QkFBekIsQ0FBbURSLElBQW5ELEVBQXlETCxjQUF6RCxDQURqQzs7QUFHQSxhQUFPVSx3QkFBUDtBQUNEOzs7d0NBRTBCUCxtQixFQUFxQkMsb0IsRUFBc0I7QUFDcEUsVUFBTUMsT0FBT0YsbUJBQWI7QUFBQSxVQUFtQztBQUM3QlEsdUJBQWlCUCxvQkFEdkI7QUFBQSxVQUM4QztBQUN4Q00saUNBQTJCZix5QkFBeUJtQix5QkFBekIsQ0FBbURULElBQW5ELEVBQXlETSxjQUF6RCxDQUZqQzs7QUFJQSxhQUFPRCx3QkFBUDtBQUNEOzs7O0VBekNvQ2pCLFU7O0FBNEN2Q3NCLE9BQU9DLE9BQVAsR0FBaUJyQix3QkFBakIiLCJmaWxlIjoidW5pdERlZmluaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9ibmYvcHJvZHVjdGlvbicpLFxuICAgICAgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKTtcblxuY2xhc3MgVW5pdERlZmluaXRpb25Qcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGdldFVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZmlyc3REZWZpbml0aW9uID0gYXJyYXlVdGlsLmZpcnN0KGRlZmluaXRpb25zKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSA9IHVuaXREZWZpbml0aW9uLmdldFByb2R1Y3Rpb25OYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBpc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZXMoZmlyc3RQcm9kdWN0aW9uTmFtZSwgc2Vjb25kUHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSA9IHRoaXMuZ2V0VW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIGZvdW5kID0gKChuYW1lID09PSBmaXJzdFByb2R1Y3Rpb25OYW1lKSAmJiAodW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSA9PT0gc2Vjb25kUHJvZHVjdGlvbk5hbWUpKTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21OYW1lQW5kVW5pdERlZmluaXRpb24obmFtZSwgdW5pdERlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHVuaXREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbiA9IG5ldyBVbml0RGVmaW5pdGlvblByb2R1Y3Rpb24obmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb247ICAgICAgICAgIFxuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5hbWVBbmRQcm9kdWN0aW9uTmFtZShuYW1lLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb24gPSBVbml0RGVmaW5pdGlvblByb2R1Y3Rpb24uZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZXMoZmlyc3RQcm9kdWN0aW9uTmFtZSwgc2Vjb25kUHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gZmlyc3RQcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gc2Vjb25kUHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb24gPSBVbml0RGVmaW5pdGlvblByb2R1Y3Rpb24uZnJvbU5hbWVBbmRQcm9kdWN0aW9uTmFtZShuYW1lLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICByZXR1cm4gdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdERlZmluaXRpb25Qcm9kdWN0aW9uO1xuIl19