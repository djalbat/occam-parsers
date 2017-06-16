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
    key: 'fromUnitDefinitionsProduction',
    value: function fromUnitDefinitionsProduction(unitDefinitionsProduction) {
      var nonUnitDefinitions = nonUnitDefinitionsFromUnitDefinitionsProduction(unitDefinitionsProduction),
          unitDefinitionsProductionName = unitDefinitionsProduction.getName(),
          unitDefinitionsProductionNode = unitDefinitionsProduction.getNode(),
          name = unitDefinitionsProductionName,
          ///
      definitions = nonUnitDefinitions,
          ///
      Node = unitDefinitionsProductionNode,
          ///
      nonUnitDefinitionsProduction = new NonUnitDefinitionsProduction(name, definitions, Node);

      return nonUnitDefinitionsProduction;
    }
  }]);

  return NonUnitDefinitionsProduction;
}(Production);

module.exports = NonUnitDefinitionsProduction;

function nonUnitDefinitionsFromUnitDefinitionsProduction(unitDefinitionsProduction) {
  var definitions = unitDefinitionsProduction.getDefinitions(),
      nonUnitDefinitions = definitions.reduce(function (nonUnitDefinitions, definition) {
    var nonUnitDefinition = NonUnitDefinition.fromDefinition(definition);

    if (nonUnitDefinition !== null) {
      nonUnitDefinitions.push(nonUnitDefinition);
    }

    return nonUnitDefinitions;
  }, []);

  return nonUnitDefinitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uVW5pdERlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiTm9uVW5pdERlZmluaXRpb24iLCJOb25Vbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uIiwidW5pdERlZmluaXRpb25zUHJvZHVjdGlvbiIsIm5vblVuaXREZWZpbml0aW9ucyIsIm5vblVuaXREZWZpbml0aW9uc0Zyb21Vbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uIiwidW5pdERlZmluaXRpb25zUHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwidW5pdERlZmluaXRpb25zUHJvZHVjdGlvbk5vZGUiLCJnZXROb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm5vblVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJkZWZpbml0aW9uIiwibm9uVW5pdERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxzQkFBUixDQUFuQjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSx1QkFBUixDQUQxQjs7SUFHTUUsNEI7Ozs7Ozs7Ozs7O2tEQUNpQ0MseUIsRUFBMkI7QUFDOUQsVUFBTUMscUJBQXFCQyxnREFBZ0RGLHlCQUFoRCxDQUEzQjtBQUFBLFVBQ01HLGdDQUFnQ0gsMEJBQTBCSSxPQUExQixFQUR0QztBQUFBLFVBRU1DLGdDQUFnQ0wsMEJBQTBCTSxPQUExQixFQUZ0QztBQUFBLFVBR01DLE9BQU9KLDZCQUhiO0FBQUEsVUFHNEM7QUFDdENLLG9CQUFjUCxrQkFKcEI7QUFBQSxVQUl3QztBQUNsQ1EsYUFBT0osNkJBTGI7QUFBQSxVQUs0QztBQUN0Q0sscUNBQStCLElBQUlYLDRCQUFKLENBQWlDUSxJQUFqQyxFQUF1Q0MsV0FBdkMsRUFBb0RDLElBQXBELENBTnJDOztBQVFBLGFBQU9DLDRCQUFQO0FBQ0Q7Ozs7RUFYd0NkLFU7O0FBYzNDZSxPQUFPQyxPQUFQLEdBQWlCYiw0QkFBakI7O0FBRUEsU0FBU0csK0NBQVQsQ0FBeURGLHlCQUF6RCxFQUFvRjtBQUNsRixNQUFNUSxjQUFjUiwwQkFBMEJhLGNBQTFCLEVBQXBCO0FBQUEsTUFDTVoscUJBQXFCTyxZQUFZTSxNQUFaLENBQW1CLFVBQVNiLGtCQUFULEVBQTZCYyxVQUE3QixFQUF5QztBQUMvRSxRQUFNQyxvQkFBb0JsQixrQkFBa0JtQixjQUFsQixDQUFpQ0YsVUFBakMsQ0FBMUI7O0FBRUEsUUFBSUMsc0JBQXNCLElBQTFCLEVBQWdDO0FBQzlCZix5QkFBbUJpQixJQUFuQixDQUF3QkYsaUJBQXhCO0FBQ0Q7O0FBRUQsV0FBT2Ysa0JBQVA7QUFDRCxHQVJvQixFQVFsQixFQVJrQixDQUQzQjs7QUFXQSxTQUFPQSxrQkFBUDtBQUNEIiwiZmlsZSI6Im5vblVuaXREZWZpbml0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wcm9kdWN0aW9uJyksXG4gICAgICBOb25Vbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9uVW5pdCcpO1xuXG5jbGFzcyBOb25Vbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbih1bml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uKSB7XG4gICAgY29uc3Qgbm9uVW5pdERlZmluaXRpb25zID0gbm9uVW5pdERlZmluaXRpb25zRnJvbVVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb24odW5pdERlZmluaXRpb25zUHJvZHVjdGlvbiksXG4gICAgICAgICAgdW5pdERlZmluaXRpb25zUHJvZHVjdGlvbk5hbWUgPSB1bml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uTm9kZSA9IHVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5hbWUgPSB1bml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBub25Vbml0RGVmaW5pdGlvbnMsIC8vL1xuICAgICAgICAgIE5vZGUgPSB1bml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbiA9IG5ldyBOb25Vbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBub25Vbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gbm9uVW5pdERlZmluaXRpb25zRnJvbVVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb24odW5pdERlZmluaXRpb25zUHJvZHVjdGlvbikge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb24uZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgbm9uVW5pdERlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vblVuaXREZWZpbml0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgICAgIGNvbnN0IG5vblVuaXREZWZpbml0aW9uID0gTm9uVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAobm9uVW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vblVuaXREZWZpbml0aW9ucy5wdXNoKG5vblVuaXREZWZpbml0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbm9uVW5pdERlZmluaXRpb25zO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vblVuaXREZWZpbml0aW9ucztcbn1cbiJdfQ==