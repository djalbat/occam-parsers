'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../extendedBNF/definition');

var ImplicitlyLeftRecursiveDefinition = function (_Definition) {
  _inherits(ImplicitlyLeftRecursiveDefinition, _Definition);

  function ImplicitlyLeftRecursiveDefinition() {
    _classCallCheck(this, ImplicitlyLeftRecursiveDefinition);

    return _possibleConstructorReturn(this, (ImplicitlyLeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(ImplicitlyLeftRecursiveDefinition)).apply(this, arguments));
  }

  _createClass(ImplicitlyLeftRecursiveDefinition, [{
    key: 'getPreviousProductionName',
    value: function getPreviousProductionName() {
      var firstPart = this.getFirstPart(),
          productionNamePart = firstPart,
          ///
      productionNamePartProductionName = productionNamePart.getProductionName(),
          previousProductionName = productionNamePartProductionName; ///

      return previousProductionName;
    }
  }], [{
    key: 'fromDefinition',
    value: function fromDefinition(definition, callback) {
      var implicitlyLeftRecursiveDefinition = null;

      var definitionFirstPartProductionNamePart = definition.isFirstPartProductionNamePart();

      if (definitionFirstPartProductionNamePart) {
        var definitionFirstPart = definition.getFirstPart(),
            definitionFirstProductionNamePart = definitionFirstPart,
            ///
        definitionFirstProductionNamePartProductionName = definitionFirstProductionNamePart.getProductionName(),
            productionName = definitionFirstProductionNamePartProductionName,
            ///
        definitionImplicitlyLeftRecursive = callback(productionName);

        if (definitionImplicitlyLeftRecursive) {
          var parts = definition.getParts();

          implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts);
        }
      }

      return implicitlyLeftRecursiveDefinition;
    }
  }, {
    key: 'fromDefinitionAndPreviousProduction',
    value: function fromDefinitionAndPreviousProduction(definition, previousProduction) {
      var previousProductionName = previousProduction.getName(),
          implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinition(definition, function (productionName) {
        var definitionImplicitlyLeftRecursive = previousProductionName === productionName;

        return definitionImplicitlyLeftRecursive;
      });

      return implicitlyLeftRecursiveDefinition;
    }
  }, {
    key: 'fromDefinitionAndPreviousProductions',
    value: function fromDefinitionAndPreviousProductions(definition, previousProductions) {
      var previousProductionNames = previousProductions.map(function (previousProduction) {
        var previousProductionName = previousProduction.getName();

        return previousProductionName;
      }),
          implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinition(definition, function (productionName) {
        var definitionImplicitlyLeftRecursive = previousProductionNames.includes(productionName);

        return definitionImplicitlyLeftRecursive;
      });

      return implicitlyLeftRecursiveDefinition;
    }
  }]);

  return ImplicitlyLeftRecursiveDefinition;
}(Definition);

module.exports = ImplicitlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdFBhcnQiLCJnZXRGaXJzdFBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwicHJldmlvdXNQcm9kdWN0aW9uTmFtZSIsImRlZmluaXRpb24iLCJjYWxsYmFjayIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25GaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQiLCJpc0ZpcnN0UGFydFByb2R1Y3Rpb25OYW1lUGFydCIsImRlZmluaXRpb25GaXJzdFBhcnQiLCJkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lIiwiZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwicGFydHMiLCJnZXRQYXJ0cyIsInByZXZpb3VzUHJvZHVjdGlvbiIsImdldE5hbWUiLCJmcm9tRGVmaW5pdGlvbiIsInByZXZpb3VzUHJvZHVjdGlvbnMiLCJwcmV2aW91c1Byb2R1Y3Rpb25OYW1lcyIsIm1hcCIsImluY2x1ZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLDhCQUFSLENBQW5COztJQUVNQyxpQzs7Ozs7Ozs7Ozs7Z0RBQ3dCO0FBQzFCLFVBQU1DLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01DLHFCQUFxQkYsU0FEM0I7QUFBQSxVQUNzQztBQUNoQ0cseUNBQW1DRCxtQkFBbUJFLGlCQUFuQixFQUZ6QztBQUFBLFVBR01DLHlCQUF5QkYsZ0NBSC9CLENBRDBCLENBSXdDOztBQUVsRSxhQUFPRSxzQkFBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJQyxvQ0FBb0MsSUFBeEM7O0FBRUEsVUFBTUMsd0NBQXdDSCxXQUFXSSw2QkFBWCxFQUE5Qzs7QUFFQSxVQUFJRCxxQ0FBSixFQUEyQztBQUN6QyxZQUFNRSxzQkFBc0JMLFdBQVdMLFlBQVgsRUFBNUI7QUFBQSxZQUNNVyxvQ0FBb0NELG1CQUQxQztBQUFBLFlBQ2dFO0FBQzFERSwwREFBa0RELGtDQUFrQ1IsaUJBQWxDLEVBRnhEO0FBQUEsWUFHTVUsaUJBQWlCRCwrQ0FIdkI7QUFBQSxZQUd3RTtBQUNsRUUsNENBQW9DUixTQUFTTyxjQUFULENBSjFDOztBQU1BLFlBQUlDLGlDQUFKLEVBQXVDO0FBQ3JDLGNBQU1DLFFBQVFWLFdBQVdXLFFBQVgsRUFBZDs7QUFFQVQsOENBQW9DLElBQUlULGlDQUFKLENBQXNDaUIsS0FBdEMsQ0FBcEM7QUFDRDtBQUNGOztBQUVELGFBQU9SLGlDQUFQO0FBQ0Q7Ozt3REFFMENGLFUsRUFBWVksa0IsRUFBb0I7QUFDekUsVUFBTWIseUJBQXlCYSxtQkFBbUJDLE9BQW5CLEVBQS9CO0FBQUEsVUFDTVgsb0NBQW9DVCxrQ0FBa0NxQixjQUFsQyxDQUFpRGQsVUFBakQsRUFBNkQsVUFBU1EsY0FBVCxFQUF5QjtBQUN4SCxZQUFNQyxvQ0FBcUNWLDJCQUEyQlMsY0FBdEU7O0FBRUEsZUFBT0MsaUNBQVA7QUFDRCxPQUptQyxDQUQxQzs7QUFRQSxhQUFPUCxpQ0FBUDtBQUNEOzs7eURBRTJDRixVLEVBQVllLG1CLEVBQXFCO0FBQzNFLFVBQU1DLDBCQUEwQkQsb0JBQW9CRSxHQUFwQixDQUF3QixVQUFTTCxrQkFBVCxFQUE2QjtBQUM3RSxZQUFNYix5QkFBeUJhLG1CQUFtQkMsT0FBbkIsRUFBL0I7O0FBRUEsZUFBT2Qsc0JBQVA7QUFDRCxPQUp5QixDQUFoQztBQUFBLFVBS01HLG9DQUFvQ1Qsa0NBQWtDcUIsY0FBbEMsQ0FBaURkLFVBQWpELEVBQTZELFVBQVNRLGNBQVQsRUFBeUI7QUFDeEgsWUFBTUMsb0NBQW9DTyx3QkFBd0JFLFFBQXhCLENBQWlDVixjQUFqQyxDQUExQzs7QUFFQSxlQUFPQyxpQ0FBUDtBQUNELE9BSm1DLENBTDFDOztBQVdBLGFBQU9QLGlDQUFQO0FBQ0Q7Ozs7RUF6RDZDWCxVOztBQTREaEQ0QixPQUFPQyxPQUFQLEdBQWlCM0IsaUNBQWpCIiwiZmlsZSI6ImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZXh0ZW5kZWRCTkYvZGVmaW5pdGlvbicpO1xuXG5jbGFzcyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgZ2V0UHJldmlvdXNQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gcHJldmlvdXNQcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGNhbGxiYWNrKSB7XG4gICAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uRmlyc3RQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gZGVmaW5pdGlvbi5pc0ZpcnN0UGFydFByb2R1Y3Rpb25OYW1lUGFydCgpO1xuXG4gICAgaWYgKGRlZmluaXRpb25GaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25GaXJzdFBhcnQgPSBkZWZpbml0aW9uLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gZGVmaW5pdGlvbkZpcnN0UGFydCwgIC8vL1xuICAgICAgICAgICAgZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgICAgZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gY2FsbGJhY2socHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb24oZGVmaW5pdGlvbiwgcHJldmlvdXNQcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgcHJldmlvdXNQcm9kdWN0aW9uTmFtZSA9IHByZXZpb3VzUHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGZ1bmN0aW9uKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSAocHJldmlvdXNQcm9kdWN0aW9uTmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlXG4gICAgICAgICAgfSk7XG4gICAgXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKGRlZmluaXRpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lcyA9IHByZXZpb3VzUHJvZHVjdGlvbnMubWFwKGZ1bmN0aW9uKHByZXZpb3VzUHJvZHVjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNQcm9kdWN0aW9uTmFtZSA9IHByZXZpb3VzUHJvZHVjdGlvbi5nZXROYW1lKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvZHVjdGlvbk5hbWU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGZ1bmN0aW9uKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lcy5pbmNsdWRlcyhwcm9kdWN0aW9uTmFtZSk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==