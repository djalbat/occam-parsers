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
          unitDefinitionProduction = new UnitDefinitionProduction(name, definitions, Node);

      return unitDefinitionProduction;
    }
  }, {
    key: 'fromNameAndUnitDefinitionProductionName',
    value: function fromNameAndUnitDefinitionProductionName(name, unitDefinitionProductionName) {
      var productionName = unitDefinitionProductionName,
          ///
      unitDefinition = UnitDefinition.fromProductionName(productionName),
          unitDefinitionProduction = UnitDefinitionProduction.fromNameAndUnitDefinition(name, unitDefinition);

      return unitDefinitionProduction;
    }
  }]);

  return UnitDefinitionProduction;
}(Production);

module.exports = UnitDefinitionProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdERlZmluaXRpb24uanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJVbml0RGVmaW5pdGlvbiIsIlVuaXREZWZpbml0aW9uUHJvZHVjdGlvbiIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmaXJzdERlZmluaXRpb24iLCJmaXJzdCIsInVuaXREZWZpbml0aW9uIiwidW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiZmlyc3RQcm9kdWN0aW9uTmFtZSIsInNlY29uZFByb2R1Y3Rpb25OYW1lIiwibmFtZSIsImdldE5hbWUiLCJnZXRVbml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lIiwiZm91bmQiLCJOb2RlIiwidW5pdERlZmluaXRpb25Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tUHJvZHVjdGlvbk5hbWUiLCJmcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxzQkFBUixDQURuQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2Qjs7SUFJTUcsd0I7Ozs7Ozs7Ozs7O3NEQUM4QjtBQUNoQyxVQUFNQyxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNQyxrQkFBa0JQLFVBQVVRLEtBQVYsQ0FBZ0JILFdBQWhCLENBRHhCO0FBQUEsVUFFTUksaUJBQWlCRixlQUZ2QjtBQUFBLFVBRXdDO0FBQ2xDRyxxQ0FBK0JELGVBQWVFLGlCQUFmLEVBSHJDOztBQUtBLGFBQU9ELDRCQUFQO0FBQ0Q7Ozs2Q0FFd0JFLG1CLEVBQXFCQyxvQixFQUFzQjtBQUNsRSxVQUFNQyxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01MLCtCQUErQixLQUFLTSwrQkFBTCxFQURyQztBQUFBLFVBRU1DLFFBQVVILFNBQVNGLG1CQUFWLElBQW1DRixpQ0FBaUNHLG9CQUZuRixDQURrRSxDQUcwQzs7QUFFNUcsYUFBT0ksS0FBUDtBQUNEOzs7OENBRWdDSCxJLEVBQU1MLGMsRUFBZ0I7QUFDckQsVUFBTUosY0FBYyxDQUNaSSxjQURZLENBQXBCO0FBQUEsVUFHTVMsT0FBTyxJQUhiO0FBQUEsVUFJTUMsMkJBQTJCLElBQUlmLHdCQUFKLENBQTZCVSxJQUE3QixFQUFtQ1QsV0FBbkMsRUFBZ0RhLElBQWhELENBSmpDOztBQU1BLGFBQU9DLHdCQUFQO0FBQ0Q7Ozs0REFFOENMLEksRUFBTUosNEIsRUFBOEI7QUFDakYsVUFBTVUsaUJBQWlCViw0QkFBdkI7QUFBQSxVQUFzRDtBQUNoREQsdUJBQWlCTixlQUFla0Isa0JBQWYsQ0FBa0NELGNBQWxDLENBRHZCO0FBQUEsVUFFTUQsMkJBQTJCZix5QkFBeUJrQix5QkFBekIsQ0FBbURSLElBQW5ELEVBQXlETCxjQUF6RCxDQUZqQzs7QUFJQSxhQUFPVSx3QkFBUDtBQUNEOzs7O0VBbENvQ2pCLFU7O0FBcUN2Q3FCLE9BQU9DLE9BQVAsR0FBaUJwQix3QkFBakIiLCJmaWxlIjoidW5pdERlZmluaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9ibmYvcHJvZHVjdGlvbicpLFxuICAgICAgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKTtcblxuY2xhc3MgVW5pdERlZmluaXRpb25Qcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGdldFVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZmlyc3REZWZpbml0aW9uID0gYXJyYXlVdGlsLmZpcnN0KGRlZmluaXRpb25zKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSA9IHVuaXREZWZpbml0aW9uLmdldFByb2R1Y3Rpb25OYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBpc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZXMoZmlyc3RQcm9kdWN0aW9uTmFtZSwgc2Vjb25kUHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSA9IHRoaXMuZ2V0VW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIGZvdW5kID0gKChuYW1lID09PSBmaXJzdFByb2R1Y3Rpb25OYW1lKSAmJiAodW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSA9PT0gc2Vjb25kUHJvZHVjdGlvbk5hbWUpKTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21OYW1lQW5kVW5pdERlZmluaXRpb24obmFtZSwgdW5pdERlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHVuaXREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gbnVsbCxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb24gPSBuZXcgVW5pdERlZmluaXRpb25Qcm9kdWN0aW9uKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcbiAgICBcbiAgICByZXR1cm4gdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uOyAgICAgICAgICBcbiAgfVxuICBcbiAgc3RhdGljIGZyb21OYW1lQW5kVW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZShuYW1lLCB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tUHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbiA9IFVuaXREZWZpbml0aW9uUHJvZHVjdGlvbi5mcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uKG5hbWUsIHVuaXREZWZpbml0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdERlZmluaXRpb25Qcm9kdWN0aW9uO1xuIl19