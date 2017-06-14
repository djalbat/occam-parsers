'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../bnf/production'),
    NonUnitDefinition = require('../definition/nonUnit');

var NonUnitDefinitionsProduction = function (_Production) {
  _inherits(NonUnitDefinitionsProduction, _Production);

  function NonUnitDefinitionsProduction() {
    _classCallCheck(this, NonUnitDefinitionsProduction);

    return _possibleConstructorReturn(this, (NonUnitDefinitionsProduction.__proto__ || Object.getPrototypeOf(NonUnitDefinitionsProduction)).apply(this, arguments));
  }

  _createClass(NonUnitDefinitionsProduction, null, [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var nonUnitDefinitions = nonUnitDefinitionsFromProduction(production),
          name = production.getName(),
          definitions = nonUnitDefinitions,
          ///
      Node = production.getNode(),
          nonUnitDefinitionsProduction = new NonUnitDefinitionsProduction(name, definitions, Node);

      return nonUnitDefinitionsProduction;
    }
  }]);

  return NonUnitDefinitionsProduction;
}(Production);

module.exports = NonUnitDefinitionsProduction;

function nonUnitDefinitionsFromProduction(production) {
  var definitions = production.getDefinitions(),
      nonUnitDefinitions = definitions.reduce(function (nonUnitDefinitions, definition) {
    var nonUnitDefinition = NonUnitDefinition.fromDefinition(definition);

    if (nonUnitDefinition !== null) {
      var _definition = nonUnitDefinition;

      nonUnitDefinitions.push(nonUnitDefinition);
    }

    return nonUnitDefinitions;
  }, []);

  return nonUnitDefinitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uVW5pdERlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiTm9uVW5pdERlZmluaXRpb24iLCJOb25Vbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uIiwicHJvZHVjdGlvbiIsIm5vblVuaXREZWZpbml0aW9ucyIsIm5vblVuaXREZWZpbml0aW9uc0Zyb21Qcm9kdWN0aW9uIiwibmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJnZXROb2RlIiwibm9uVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXREZWZpbml0aW9ucyIsInJlZHVjZSIsImRlZmluaXRpb24iLCJub25Vbml0RGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLHNCQUFSLENBQW5CO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHVCQUFSLENBRDFCOztJQUdNRSw0Qjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFDaEMsVUFBTUMscUJBQXFCQyxpQ0FBaUNGLFVBQWpDLENBQTNCO0FBQUEsVUFDTUcsT0FBT0gsV0FBV0ksT0FBWCxFQURiO0FBQUEsVUFFTUMsY0FBY0osa0JBRnBCO0FBQUEsVUFFd0M7QUFDbENLLGFBQU9OLFdBQVdPLE9BQVgsRUFIYjtBQUFBLFVBSU1DLCtCQUErQixJQUFJVCw0QkFBSixDQUFpQ0ksSUFBakMsRUFBdUNFLFdBQXZDLEVBQW9EQyxJQUFwRCxDQUpyQzs7QUFNQSxhQUFPRSw0QkFBUDtBQUNEOzs7O0VBVHdDWixVOztBQVkzQ2EsT0FBT0MsT0FBUCxHQUFpQlgsNEJBQWpCOztBQUVBLFNBQVNHLGdDQUFULENBQTBDRixVQUExQyxFQUFzRDtBQUNwRCxNQUFNSyxjQUFjTCxXQUFXVyxjQUFYLEVBQXBCO0FBQUEsTUFDTVYscUJBQXFCSSxZQUFZTyxNQUFaLENBQW1CLFVBQVNYLGtCQUFULEVBQTZCWSxVQUE3QixFQUF5QztBQUMvRSxRQUFNQyxvQkFBb0JoQixrQkFBa0JpQixjQUFsQixDQUFpQ0YsVUFBakMsQ0FBMUI7O0FBRUEsUUFBSUMsc0JBQXNCLElBQTFCLEVBQWdDO0FBQzlCLFVBQU1ELGNBQWFDLGlCQUFuQjs7QUFFQWIseUJBQW1CZSxJQUFuQixDQUF3QkYsaUJBQXhCO0FBQ0Q7O0FBRUQsV0FBT2Isa0JBQVA7QUFDRCxHQVZvQixFQVVsQixFQVZrQixDQUQzQjs7QUFhQSxTQUFPQSxrQkFBUDtBQUNEIiwiZmlsZSI6Im5vblVuaXREZWZpbml0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wcm9kdWN0aW9uJyksXG4gICAgICBOb25Vbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9uVW5pdCcpO1xuXG5jbGFzcyBOb25Vbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3Qgbm9uVW5pdERlZmluaXRpb25zID0gbm9uVW5pdERlZmluaXRpb25zRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gbm9uVW5pdERlZmluaXRpb25zLCAvLy9cbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgbm9uVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbiA9IG5ldyBOb25Vbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBub25Vbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gbm9uVW5pdERlZmluaXRpb25zRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHByb2R1Y3Rpb24uZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgbm9uVW5pdERlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vblVuaXREZWZpbml0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgICAgIGNvbnN0IG5vblVuaXREZWZpbml0aW9uID0gTm9uVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAobm9uVW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBub25Vbml0RGVmaW5pdGlvbjtcblxuICAgICAgICAgICAgbm9uVW5pdERlZmluaXRpb25zLnB1c2gobm9uVW5pdERlZmluaXRpb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBub25Vbml0RGVmaW5pdGlvbnM7XG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gbm9uVW5pdERlZmluaXRpb25zO1xufVxuIl19