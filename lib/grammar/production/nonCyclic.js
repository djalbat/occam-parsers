'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../extendedBNF/production'),
    UnitDefinition = require('../definition/unit'),
    NonUnitDefinition = require('../definition/nonUnit');

var NonCyclicProduction = function (_Production) {
  _inherits(NonCyclicProduction, _Production);

  function NonCyclicProduction() {
    _classCallCheck(this, NonCyclicProduction);

    return _possibleConstructorReturn(this, (NonCyclicProduction.__proto__ || Object.getPrototypeOf(NonCyclicProduction)).apply(this, arguments));
  }

  _createClass(NonCyclicProduction, null, [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var nonCyclicDefinitions = nonCyclicDefinitionsFromProduction(production),
          productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName,
          ///
      definitions = nonCyclicDefinitions,
          ///
      Node = productionNode,
          ///
      nonCyclicProduction = new NonCyclicProduction(name, definitions, Node);

      return nonCyclicProduction;
    }
  }]);

  return NonCyclicProduction;
}(Production);

module.exports = NonCyclicProduction;

function nonCyclicDefinitionsFromProduction(production) {
  var productionName = production.getName(),
      productionDefinitions = production.getDefinitions(),
      nonCyclicDefinitions = productionDefinitions.reduce(function (nonCyclicDefinitions, productionDefinition) {
    var nonCyclicDefinition = null;

    var nonUnitDefinition = NonUnitDefinition.fromDefinition(productionDefinition);

    if (nonUnitDefinition !== null) {
      nonCyclicDefinition = nonUnitDefinition;
    } else {
      var unitDefinition = UnitDefinition.fromDefinition(productionDefinition),
          unitDefinitionProductionName = unitDefinition.getProductionName();

      if (unitDefinitionProductionName !== productionName) {
        nonCyclicDefinition = unitDefinition;
      }
    }

    if (nonCyclicDefinition !== null) {
      nonCyclicDefinitions.push(nonCyclicDefinition);
    }

    return nonCyclicDefinitions;
  }, []);

  return nonCyclicDefinitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uQ3ljbGljLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiVW5pdERlZmluaXRpb24iLCJOb25Vbml0RGVmaW5pdGlvbiIsIk5vbkN5Y2xpY1Byb2R1Y3Rpb24iLCJwcm9kdWN0aW9uIiwibm9uQ3ljbGljRGVmaW5pdGlvbnMiLCJub25DeWNsaWNEZWZpbml0aW9uc0Zyb21Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJvZHVjdGlvbk5vZGUiLCJnZXROb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm5vbkN5Y2xpY1Byb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvZHVjdGlvbkRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJwcm9kdWN0aW9uRGVmaW5pdGlvbiIsIm5vbkN5Y2xpY0RlZmluaXRpb24iLCJub25Vbml0RGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwidW5pdERlZmluaXRpb24iLCJ1bml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsOEJBQVIsQ0FBbkI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FGMUI7O0lBSU1HLG1COzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUNoQyxVQUFNQyx1QkFBdUJDLG1DQUFtQ0YsVUFBbkMsQ0FBN0I7QUFBQSxVQUNNRyxpQkFBaUJILFdBQVdJLE9BQVgsRUFEdkI7QUFBQSxVQUVNQyxpQkFBaUJMLFdBQVdNLE9BQVgsRUFGdkI7QUFBQSxVQUdNQyxPQUFPSixjQUhiO0FBQUEsVUFHNkI7QUFDdkJLLG9CQUFjUCxvQkFKcEI7QUFBQSxVQUkwQztBQUNwQ1EsYUFBT0osY0FMYjtBQUFBLFVBSzZCO0FBQ3ZCSyw0QkFBc0IsSUFBSVgsbUJBQUosQ0FBd0JRLElBQXhCLEVBQThCQyxXQUE5QixFQUEyQ0MsSUFBM0MsQ0FONUI7O0FBUUEsYUFBT0MsbUJBQVA7QUFDRDs7OztFQVgrQmYsVTs7QUFjbENnQixPQUFPQyxPQUFQLEdBQWlCYixtQkFBakI7O0FBRUEsU0FBU0csa0NBQVQsQ0FBNENGLFVBQTVDLEVBQXdEO0FBQ3RELE1BQU1HLGlCQUFpQkgsV0FBV0ksT0FBWCxFQUF2QjtBQUFBLE1BQ01TLHdCQUF3QmIsV0FBV2MsY0FBWCxFQUQ5QjtBQUFBLE1BRU1iLHVCQUF1Qlksc0JBQXNCRSxNQUF0QixDQUE2QixVQUFTZCxvQkFBVCxFQUErQmUsb0JBQS9CLEVBQXFEO0FBQ3ZHLFFBQUlDLHNCQUFzQixJQUExQjs7QUFFQSxRQUFNQyxvQkFBb0JwQixrQkFBa0JxQixjQUFsQixDQUFpQ0gsb0JBQWpDLENBQTFCOztBQUVBLFFBQUlFLHNCQUFzQixJQUExQixFQUFnQztBQUM5QkQsNEJBQXNCQyxpQkFBdEI7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFNRSxpQkFBaUJ2QixlQUFlc0IsY0FBZixDQUE4Qkgsb0JBQTlCLENBQXZCO0FBQUEsVUFDTUssK0JBQStCRCxlQUFlRSxpQkFBZixFQURyQzs7QUFHQSxVQUFJRCxpQ0FBaUNsQixjQUFyQyxFQUFxRDtBQUNuRGMsOEJBQXNCRyxjQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSUgsd0JBQXdCLElBQTVCLEVBQWtDO0FBQ2hDaEIsMkJBQXFCc0IsSUFBckIsQ0FBMEJOLG1CQUExQjtBQUNEOztBQUVELFdBQU9oQixvQkFBUDtBQUNELEdBckJzQixFQXFCcEIsRUFyQm9CLENBRjdCOztBQXlCQSxTQUFPQSxvQkFBUDtBQUNEIiwiZmlsZSI6Im5vbkN5Y2xpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2V4dGVuZGVkQk5GL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi91bml0JyksXG4gICAgICBOb25Vbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9uVW5pdCcpO1xuXG5jbGFzcyBOb25DeWNsaWNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3Qgbm9uQ3ljbGljRGVmaW5pdGlvbnMgPSBub25DeWNsaWNEZWZpbml0aW9uc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gbm9uQ3ljbGljRGVmaW5pdGlvbnMsIC8vL1xuICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgbm9uQ3ljbGljUHJvZHVjdGlvbiA9IG5ldyBOb25DeWNsaWNQcm9kdWN0aW9uKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBub25DeWNsaWNQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uQ3ljbGljUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gbm9uQ3ljbGljRGVmaW5pdGlvbnNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgIHByb2R1Y3Rpb25EZWZpbml0aW9ucyA9IHByb2R1Y3Rpb24uZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgbm9uQ3ljbGljRGVmaW5pdGlvbnMgPSBwcm9kdWN0aW9uRGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vbkN5Y2xpY0RlZmluaXRpb25zLCBwcm9kdWN0aW9uRGVmaW5pdGlvbikge1xuICAgICAgICAgIGxldCBub25DeWNsaWNEZWZpbml0aW9uID0gbnVsbDtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBub25Vbml0RGVmaW5pdGlvbiA9IE5vblVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHByb2R1Y3Rpb25EZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChub25Vbml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9uQ3ljbGljRGVmaW5pdGlvbiA9IG5vblVuaXREZWZpbml0aW9uO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB1bml0RGVmaW5pdGlvbiA9IFVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHByb2R1Y3Rpb25EZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgICAgIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWUgPSB1bml0RGVmaW5pdGlvbi5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSAhPT0gcHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgbm9uQ3ljbGljRGVmaW5pdGlvbiA9IHVuaXREZWZpbml0aW9uO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChub25DeWNsaWNEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBub25DeWNsaWNEZWZpbml0aW9ucy5wdXNoKG5vbkN5Y2xpY0RlZmluaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbm9uQ3ljbGljRGVmaW5pdGlvbnM7XG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gbm9uQ3ljbGljRGVmaW5pdGlvbnM7XG59XG4iXX0=