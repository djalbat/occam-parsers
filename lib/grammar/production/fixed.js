'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../bnf/production'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vZml4ZWQuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJVbml0RGVmaW5pdGlvbiIsIk5vblVuaXREZWZpbml0aW9uIiwiRml4ZWRQcm9kdWN0aW9uIiwicHJvZHVjdGlvbiIsInByb2R1Y3Rpb25OYW1lcyIsInByb2R1Y3Rpb25OYW1lIiwiZ2V0TmFtZSIsInByb2R1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsImRlZmluaXRpb25zRnJvbVByb2R1Y3Rpb25BbmRQcm9kdWN0aW9uTmFtZXMiLCJOb2RlIiwiZml4ZWRQcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb2R1Y3Rpb25EZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlIiwicHJvZHVjdGlvbkRlZmluaXRpb24iLCJkZWZpbml0aW9uIiwibm9uVW5pdERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsInVuaXREZWZpbml0aW9uIiwidW5pdERlZmluaXRpb25JbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzIiwiaXNJbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLHNCQUFSLENBQW5CO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRjFCOztJQUlNRyxlOzs7Ozs7Ozs7OztxREFDb0NDLFUsRUFBWUMsZSxFQUFpQjtBQUNuRSxVQUFNQyxpQkFBaUJGLFdBQVdHLE9BQVgsRUFBdkI7QUFBQSxVQUNNQyxpQkFBaUJKLFdBQVdLLE9BQVgsRUFEdkI7QUFBQSxVQUVNQyxPQUFPSixjQUZiO0FBQUEsVUFFNkI7QUFDdkJLLG9CQUFjQyw0Q0FBNENSLFVBQTVDLEVBQXdEQyxlQUF4RCxDQUhwQjtBQUFBLFVBSU1RLE9BQU9MLGNBSmI7QUFBQSxVQUk2QjtBQUN2Qk0sd0JBQWtCLElBQUlYLGVBQUosQ0FBb0JPLElBQXBCLEVBQTBCQyxXQUExQixFQUF1Q0UsSUFBdkMsQ0FMeEI7O0FBT0EsYUFBT0MsZUFBUDtBQUNEOzs7O0VBVjJCZixVOztBQWE5QmdCLE9BQU9DLE9BQVAsR0FBaUJiLGVBQWpCOztBQUVBLFNBQVNTLDJDQUFULENBQXFEUixVQUFyRCxFQUFpRUMsZUFBakUsRUFBa0Y7QUFDaEYsTUFBTVksd0JBQXdCYixXQUFXYyxjQUFYLEVBQTlCO0FBQUEsTUFDTVAsY0FBY00sc0JBQXNCRSxNQUF0QixDQUE2QixVQUFTUixXQUFULEVBQXNCUyxvQkFBdEIsRUFBNEM7QUFDckYsUUFBSUMsYUFBYSxJQUFqQjs7QUFFQSxRQUFNQyxvQkFBb0JwQixrQkFBa0JxQixjQUFsQixDQUFpQ0gsb0JBQWpDLENBQTFCOztBQUVBLFFBQUlFLHNCQUFzQixJQUExQixFQUFnQztBQUM5QkQsbUJBQWFDLGlCQUFiLENBRDhCLENBQ0U7QUFDakMsS0FGRCxNQUVPO0FBQ0wsVUFBTUUsaUJBQWlCdkIsZUFBZXNCLGNBQWYsQ0FBOEJILG9CQUE5QixDQUF2QjtBQUFBLFVBQ01LLDBDQUEwQ0QsZUFBZUUsMkJBQWYsQ0FBMkNyQixlQUEzQyxDQURoRDs7QUFHQSxVQUFJLENBQUNvQix1Q0FBTCxFQUE4QztBQUM1Q0oscUJBQWFHLGNBQWIsQ0FENEMsQ0FDZDtBQUMvQjtBQUNGOztBQUVELFFBQUlILGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJWLGtCQUFZZ0IsSUFBWixDQUFpQk4sVUFBakI7QUFDRDs7QUFFRCxXQUFPVixXQUFQO0FBQ0QsR0FyQmEsRUFxQlgsRUFyQlcsQ0FEcEI7O0FBd0JBLFNBQU9BLFdBQVA7QUFDRCIsImZpbGUiOiJmaXhlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wcm9kdWN0aW9uJyksXG4gICAgICBVbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdW5pdCcpLFxuICAgICAgTm9uVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL25vblVuaXQnKTtcblxuY2xhc3MgRml4ZWRQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbkFuZFByb2R1Y3Rpb25OYW1lcyhwcm9kdWN0aW9uLCBwcm9kdWN0aW9uTmFtZXMpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zRnJvbVByb2R1Y3Rpb25BbmRQcm9kdWN0aW9uTmFtZXMocHJvZHVjdGlvbiwgcHJvZHVjdGlvbk5hbWVzKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIGZpeGVkUHJvZHVjdGlvbiA9IG5ldyBGaXhlZFByb2R1Y3Rpb24obmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIGZpeGVkUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tUHJvZHVjdGlvbkFuZFByb2R1Y3Rpb25OYW1lcyhwcm9kdWN0aW9uLCBwcm9kdWN0aW9uTmFtZXMpIHtcbiAgY29uc3QgcHJvZHVjdGlvbkRlZmluaXRpb25zID0gcHJvZHVjdGlvbi5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBkZWZpbml0aW9ucyA9IHByb2R1Y3Rpb25EZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnMsIHByb2R1Y3Rpb25EZWZpbml0aW9uKSB7XG4gICAgICAgICAgbGV0IGRlZmluaXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVW5pdERlZmluaXRpb24gPSBOb25Vbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihwcm9kdWN0aW9uRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAobm9uVW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBub25Vbml0RGVmaW5pdGlvbjsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24ocHJvZHVjdGlvbkRlZmluaXRpb24pLFxuICAgICAgICAgICAgICAgICAgdW5pdERlZmluaXRpb25JbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzID0gdW5pdERlZmluaXRpb24uaXNJbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzKHByb2R1Y3Rpb25OYW1lcyk7XG5cbiAgICAgICAgICAgIGlmICghdW5pdERlZmluaXRpb25JbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb24gPSB1bml0RGVmaW5pdGlvbjsgIC8vL1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBkZWZpbml0aW9ucztcbn1cbiJdfQ==