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
          productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName,
          ///
      definitions = nonUnitDefinitions,
          ///
      Node = productionNode,
          ///
      nonUnitDefinitionsProduction = new NonUnitDefinitionsProduction(name, definitions, Node);

      return nonUnitDefinitionsProduction;
    }
  }]);

  return NonUnitDefinitionsProduction;
}(Production);

module.exports = NonUnitDefinitionsProduction;

function nonUnitDefinitionsFromProduction(production) {
  var productionDefinitions = production.getDefinitions(),
      nonUnitDefinitions = productionDefinitions.reduce(function (nonUnitDefinitions, productionDefinition) {
    var nonUnitDefinition = NonUnitDefinition.fromDefinition(productionDefinition);

    if (nonUnitDefinition !== null) {
      nonUnitDefinitions.push(nonUnitDefinition);
    }

    return nonUnitDefinitions;
  }, []);

  return nonUnitDefinitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uVW5pdERlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiTm9uVW5pdERlZmluaXRpb24iLCJOb25Vbml0RGVmaW5pdGlvbnNQcm9kdWN0aW9uIiwicHJvZHVjdGlvbiIsIm5vblVuaXREZWZpbml0aW9ucyIsIm5vblVuaXREZWZpbml0aW9uc0Zyb21Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJvZHVjdGlvbk5vZGUiLCJnZXROb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm5vblVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvZHVjdGlvbkRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJwcm9kdWN0aW9uRGVmaW5pdGlvbiIsIm5vblVuaXREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsc0JBQVIsQ0FBbkI7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsdUJBQVIsQ0FEMUI7O0lBR01FLDRCOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUNoQyxVQUFNQyxxQkFBcUJDLGlDQUFpQ0YsVUFBakMsQ0FBM0I7QUFBQSxVQUNNRyxpQkFBaUJILFdBQVdJLE9BQVgsRUFEdkI7QUFBQSxVQUVNQyxpQkFBaUJMLFdBQVdNLE9BQVgsRUFGdkI7QUFBQSxVQUdNQyxPQUFPSixjQUhiO0FBQUEsVUFHNkI7QUFDdkJLLG9CQUFjUCxrQkFKcEI7QUFBQSxVQUl3QztBQUNsQ1EsYUFBT0osY0FMYjtBQUFBLFVBSzZCO0FBQ3ZCSyxxQ0FBK0IsSUFBSVgsNEJBQUosQ0FBaUNRLElBQWpDLEVBQXVDQyxXQUF2QyxFQUFvREMsSUFBcEQsQ0FOckM7O0FBUUEsYUFBT0MsNEJBQVA7QUFDRDs7OztFQVh3Q2QsVTs7QUFjM0NlLE9BQU9DLE9BQVAsR0FBaUJiLDRCQUFqQjs7QUFFQSxTQUFTRyxnQ0FBVCxDQUEwQ0YsVUFBMUMsRUFBc0Q7QUFDcEQsTUFBTWEsd0JBQXdCYixXQUFXYyxjQUFYLEVBQTlCO0FBQUEsTUFDTWIscUJBQXFCWSxzQkFBc0JFLE1BQXRCLENBQTZCLFVBQVNkLGtCQUFULEVBQTZCZSxvQkFBN0IsRUFBbUQ7QUFDbkcsUUFBTUMsb0JBQW9CbkIsa0JBQWtCb0IsY0FBbEIsQ0FBaUNGLG9CQUFqQyxDQUExQjs7QUFFQSxRQUFJQyxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUJoQix5QkFBbUJrQixJQUFuQixDQUF3QkYsaUJBQXhCO0FBQ0Q7O0FBRUQsV0FBT2hCLGtCQUFQO0FBQ0QsR0FSb0IsRUFRbEIsRUFSa0IsQ0FEM0I7O0FBV0EsU0FBT0Esa0JBQVA7QUFDRCIsImZpbGUiOiJub25Vbml0RGVmaW5pdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9ibmYvcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL25vblVuaXQnKTtcblxuY2xhc3MgTm9uVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5vblVuaXREZWZpbml0aW9ucyA9IG5vblVuaXREZWZpbml0aW9uc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gbm9uVW5pdERlZmluaXRpb25zLCAvLy9cbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vblVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb24gPSBuZXcgTm9uVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uVW5pdERlZmluaXRpb25zUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblVuaXREZWZpbml0aW9uc1Byb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIG5vblVuaXREZWZpbml0aW9uc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgY29uc3QgcHJvZHVjdGlvbkRlZmluaXRpb25zID0gcHJvZHVjdGlvbi5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBub25Vbml0RGVmaW5pdGlvbnMgPSBwcm9kdWN0aW9uRGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vblVuaXREZWZpbml0aW9ucywgcHJvZHVjdGlvbkRlZmluaXRpb24pIHtcbiAgICAgICAgICBjb25zdCBub25Vbml0RGVmaW5pdGlvbiA9IE5vblVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHByb2R1Y3Rpb25EZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChub25Vbml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9uVW5pdERlZmluaXRpb25zLnB1c2gobm9uVW5pdERlZmluaXRpb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBub25Vbml0RGVmaW5pdGlvbnM7XG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gbm9uVW5pdERlZmluaXRpb25zO1xufVxuIl19