'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../extendedBNF/production'),
    UnitDefinition = require('../definition/unit'),
    NonUnitDefinition = require('../definition/nonUnit');

var FixedProduction = function (_Production) {
  _inherits(FixedProduction, _Production);

  function FixedProduction() {
    _classCallCheck(this, FixedProduction);

    return _possibleConstructorReturn(this, (FixedProduction.__proto__ || Object.getPrototypeOf(FixedProduction)).apply(this, arguments));
  }

  _createClass(FixedProduction, null, [{
    key: 'fromProductionAndProductionNames',
    value: function fromProductionAndProductionNames(production, productionNames) {
      var productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName,
          ///
      definitions = definitionsFromProductionAndProductionNames(production, productionNames),
          Node = productionNode,
          ///
      fixedProduction = new FixedProduction(name, definitions, Node);

      return fixedProduction;
    }
  }]);

  return FixedProduction;
}(Production);

module.exports = FixedProduction;

function definitionsFromProductionAndProductionNames(production, productionNames) {
  var productionDefinitions = production.getDefinitions(),
      definitions = productionDefinitions.reduce(function (definitions, productionDefinition) {
    var definition = null;

    var nonUnitDefinition = NonUnitDefinition.fromDefinition(productionDefinition);

    if (nonUnitDefinition !== null) {
      definition = nonUnitDefinition; ///
    } else {
      var unitDefinition = UnitDefinition.fromDefinition(productionDefinition),
          unitDefinitionIncludedInProductionNames = unitDefinition.isIncludedInProductionNames(productionNames);

      if (!unitDefinitionIncludedInProductionNames) {
        definition = unitDefinition; ///
      }
    }

    if (definition !== null) {
      definitions.push(definition);
    }

    return definitions;
  }, []);

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vZml4ZWQuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJVbml0RGVmaW5pdGlvbiIsIk5vblVuaXREZWZpbml0aW9uIiwiRml4ZWRQcm9kdWN0aW9uIiwicHJvZHVjdGlvbiIsInByb2R1Y3Rpb25OYW1lcyIsInByb2R1Y3Rpb25OYW1lIiwiZ2V0TmFtZSIsInByb2R1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsImRlZmluaXRpb25zRnJvbVByb2R1Y3Rpb25BbmRQcm9kdWN0aW9uTmFtZXMiLCJOb2RlIiwiZml4ZWRQcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb2R1Y3Rpb25EZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlIiwicHJvZHVjdGlvbkRlZmluaXRpb24iLCJkZWZpbml0aW9uIiwibm9uVW5pdERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsInVuaXREZWZpbml0aW9uIiwidW5pdERlZmluaXRpb25JbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzIiwiaXNJbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLDhCQUFSLENBQW5CO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRjFCOztJQUlNRyxlOzs7Ozs7Ozs7OztxREFDb0NDLFUsRUFBWUMsZSxFQUFpQjtBQUNuRSxVQUFNQyxpQkFBaUJGLFdBQVdHLE9BQVgsRUFBdkI7QUFBQSxVQUNNQyxpQkFBaUJKLFdBQVdLLE9BQVgsRUFEdkI7QUFBQSxVQUVNQyxPQUFPSixjQUZiO0FBQUEsVUFFNkI7QUFDdkJLLG9CQUFjQyw0Q0FBNENSLFVBQTVDLEVBQXdEQyxlQUF4RCxDQUhwQjtBQUFBLFVBSU1RLE9BQU9MLGNBSmI7QUFBQSxVQUk2QjtBQUN2Qk0sd0JBQWtCLElBQUlYLGVBQUosQ0FBb0JPLElBQXBCLEVBQTBCQyxXQUExQixFQUF1Q0UsSUFBdkMsQ0FMeEI7O0FBT0EsYUFBT0MsZUFBUDtBQUNEOzs7O0VBVjJCZixVOztBQWE5QmdCLE9BQU9DLE9BQVAsR0FBaUJiLGVBQWpCOztBQUVBLFNBQVNTLDJDQUFULENBQXFEUixVQUFyRCxFQUFpRUMsZUFBakUsRUFBa0Y7QUFDaEYsTUFBTVksd0JBQXdCYixXQUFXYyxjQUFYLEVBQTlCO0FBQUEsTUFDTVAsY0FBY00sc0JBQXNCRSxNQUF0QixDQUE2QixVQUFTUixXQUFULEVBQXNCUyxvQkFBdEIsRUFBNEM7QUFDckYsUUFBSUMsYUFBYSxJQUFqQjs7QUFFQSxRQUFNQyxvQkFBb0JwQixrQkFBa0JxQixjQUFsQixDQUFpQ0gsb0JBQWpDLENBQTFCOztBQUVBLFFBQUlFLHNCQUFzQixJQUExQixFQUFnQztBQUM5QkQsbUJBQWFDLGlCQUFiLENBRDhCLENBQ0U7QUFDakMsS0FGRCxNQUVPO0FBQ0wsVUFBTUUsaUJBQWlCdkIsZUFBZXNCLGNBQWYsQ0FBOEJILG9CQUE5QixDQUF2QjtBQUFBLFVBQ01LLDBDQUEwQ0QsZUFBZUUsMkJBQWYsQ0FBMkNyQixlQUEzQyxDQURoRDs7QUFHQSxVQUFJLENBQUNvQix1Q0FBTCxFQUE4QztBQUM1Q0oscUJBQWFHLGNBQWIsQ0FENEMsQ0FDZDtBQUMvQjtBQUNGOztBQUVELFFBQUlILGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJWLGtCQUFZZ0IsSUFBWixDQUFpQk4sVUFBakI7QUFDRDs7QUFFRCxXQUFPVixXQUFQO0FBQ0QsR0FyQmEsRUFxQlgsRUFyQlcsQ0FEcEI7O0FBd0JBLFNBQU9BLFdBQVA7QUFDRCIsImZpbGUiOiJmaXhlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2V4dGVuZGVkQk5GL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi91bml0JyksXG4gICAgICBOb25Vbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9uVW5pdCcpO1xuXG5jbGFzcyBGaXhlZFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uQW5kUHJvZHVjdGlvbk5hbWVzKHByb2R1Y3Rpb24sIHByb2R1Y3Rpb25OYW1lcykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNGcm9tUHJvZHVjdGlvbkFuZFByb2R1Y3Rpb25OYW1lcyhwcm9kdWN0aW9uLCBwcm9kdWN0aW9uTmFtZXMpLFxuICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgZml4ZWRQcm9kdWN0aW9uID0gbmV3IEZpeGVkUHJvZHVjdGlvbihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gZml4ZWRQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWRQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBkZWZpbml0aW9uc0Zyb21Qcm9kdWN0aW9uQW5kUHJvZHVjdGlvbk5hbWVzKHByb2R1Y3Rpb24sIHByb2R1Y3Rpb25OYW1lcykge1xuICBjb25zdCBwcm9kdWN0aW9uRGVmaW5pdGlvbnMgPSBwcm9kdWN0aW9uLmdldERlZmluaXRpb25zKCksXG4gICAgICAgIGRlZmluaXRpb25zID0gcHJvZHVjdGlvbkRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihkZWZpbml0aW9ucywgcHJvZHVjdGlvbkRlZmluaXRpb24pIHtcbiAgICAgICAgICBsZXQgZGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICBjb25zdCBub25Vbml0RGVmaW5pdGlvbiA9IE5vblVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHByb2R1Y3Rpb25EZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChub25Vbml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5vblVuaXREZWZpbml0aW9uOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihwcm9kdWN0aW9uRGVmaW5pdGlvbiksXG4gICAgICAgICAgICAgICAgICB1bml0RGVmaW5pdGlvbkluY2x1ZGVkSW5Qcm9kdWN0aW9uTmFtZXMgPSB1bml0RGVmaW5pdGlvbi5pc0luY2x1ZGVkSW5Qcm9kdWN0aW9uTmFtZXMocHJvZHVjdGlvbk5hbWVzKTtcblxuICAgICAgICAgICAgaWYgKCF1bml0RGVmaW5pdGlvbkluY2x1ZGVkSW5Qcm9kdWN0aW9uTmFtZXMpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IHVuaXREZWZpbml0aW9uOyAgLy8vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuIl19