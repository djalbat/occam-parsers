'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../bnf/definition');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdFBhcnQiLCJnZXRGaXJzdFBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwicHJldmlvdXNQcm9kdWN0aW9uTmFtZSIsImRlZmluaXRpb24iLCJjYWxsYmFjayIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25GaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQiLCJpc0ZpcnN0UGFydFByb2R1Y3Rpb25OYW1lUGFydCIsImRlZmluaXRpb25GaXJzdFBhcnQiLCJkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lIiwiZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwicGFydHMiLCJnZXRQYXJ0cyIsInByZXZpb3VzUHJvZHVjdGlvbiIsImdldE5hbWUiLCJmcm9tRGVmaW5pdGlvbiIsInByZXZpb3VzUHJvZHVjdGlvbnMiLCJwcmV2aW91c1Byb2R1Y3Rpb25OYW1lcyIsIm1hcCIsImluY2x1ZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLHNCQUFSLENBQW5COztJQUVNQyxpQzs7Ozs7Ozs7Ozs7Z0RBQ3dCO0FBQzFCLFVBQU1DLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01DLHFCQUFxQkYsU0FEM0I7QUFBQSxVQUNzQztBQUNoQ0cseUNBQW1DRCxtQkFBbUJFLGlCQUFuQixFQUZ6QztBQUFBLFVBR01DLHlCQUF5QkYsZ0NBSC9CLENBRDBCLENBSXdDOztBQUVsRSxhQUFPRSxzQkFBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJQyxvQ0FBb0MsSUFBeEM7O0FBRUEsVUFBTUMsd0NBQXdDSCxXQUFXSSw2QkFBWCxFQUE5Qzs7QUFFQSxVQUFJRCxxQ0FBSixFQUEyQztBQUN6QyxZQUFNRSxzQkFBc0JMLFdBQVdMLFlBQVgsRUFBNUI7QUFBQSxZQUNNVyxvQ0FBb0NELG1CQUQxQztBQUFBLFlBQ2dFO0FBQzFERSwwREFBa0RELGtDQUFrQ1IsaUJBQWxDLEVBRnhEO0FBQUEsWUFHTVUsaUJBQWlCRCwrQ0FIdkI7QUFBQSxZQUd3RTtBQUNsRUUsNENBQW9DUixTQUFTTyxjQUFULENBSjFDOztBQU1BLFlBQUlDLGlDQUFKLEVBQXVDO0FBQ3JDLGNBQU1DLFFBQVFWLFdBQVdXLFFBQVgsRUFBZDs7QUFFQVQsOENBQW9DLElBQUlULGlDQUFKLENBQXNDaUIsS0FBdEMsQ0FBcEM7QUFDRDtBQUNGOztBQUVELGFBQU9SLGlDQUFQO0FBQ0Q7Ozt3REFFMENGLFUsRUFBWVksa0IsRUFBb0I7QUFDekUsVUFBTWIseUJBQXlCYSxtQkFBbUJDLE9BQW5CLEVBQS9CO0FBQUEsVUFDTVgsb0NBQW9DVCxrQ0FBa0NxQixjQUFsQyxDQUFpRGQsVUFBakQsRUFBNkQsVUFBU1EsY0FBVCxFQUF5QjtBQUN4SCxZQUFNQyxvQ0FBcUNWLDJCQUEyQlMsY0FBdEU7O0FBRUEsZUFBT0MsaUNBQVA7QUFDRCxPQUptQyxDQUQxQzs7QUFRQSxhQUFPUCxpQ0FBUDtBQUNEOzs7eURBRTJDRixVLEVBQVllLG1CLEVBQXFCO0FBQzNFLFVBQU1DLDBCQUEwQkQsb0JBQW9CRSxHQUFwQixDQUF3QixVQUFTTCxrQkFBVCxFQUE2QjtBQUM3RSxZQUFNYix5QkFBeUJhLG1CQUFtQkMsT0FBbkIsRUFBL0I7O0FBRUEsZUFBT2Qsc0JBQVA7QUFDRCxPQUp5QixDQUFoQztBQUFBLFVBS01HLG9DQUFvQ1Qsa0NBQWtDcUIsY0FBbEMsQ0FBaURkLFVBQWpELEVBQTZELFVBQVNRLGNBQVQsRUFBeUI7QUFDeEgsWUFBTUMsb0NBQW9DTyx3QkFBd0JFLFFBQXhCLENBQWlDVixjQUFqQyxDQUExQzs7QUFFQSxlQUFPQyxpQ0FBUDtBQUNELE9BSm1DLENBTDFDOztBQVdBLGFBQU9QLGlDQUFQO0FBQ0Q7Ozs7RUF6RDZDWCxVOztBQTREaEQ0QixPQUFPQyxPQUFQLEdBQWlCM0IsaUNBQWpCIiwiZmlsZSI6ImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vYm5mL2RlZmluaXRpb24nKTtcblxuY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGdldFByZXZpb3VzUHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgcHJldmlvdXNQcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHByZXZpb3VzUHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjYWxsYmFjaykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkZpcnN0UGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IGRlZmluaXRpb24uaXNGaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQoKTtcblxuICAgIGlmIChkZWZpbml0aW9uRmlyc3RQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uRmlyc3RQYXJ0ID0gZGVmaW5pdGlvbi5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICAgIGRlZmluaXRpb25GaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IGRlZmluaXRpb25GaXJzdFBhcnQsICAvLy9cbiAgICAgICAgICAgIGRlZmluaXRpb25GaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IGRlZmluaXRpb25GaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lLCAvLy9cbiAgICAgICAgICAgIGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IGNhbGxiYWNrKHByb2R1Y3Rpb25OYW1lKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUHJldmlvdXNQcm9kdWN0aW9uKGRlZmluaXRpb24sIHByZXZpb3VzUHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbk5hbWUgPSBwcmV2aW91c1Byb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBmdW5jdGlvbihwcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gKHByZXZpb3VzUHJvZHVjdGlvbk5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVxuICAgICAgICAgIH0pO1xuICAgIFxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUHJldmlvdXNQcm9kdWN0aW9ucyhkZWZpbml0aW9uLCBwcmV2aW91c1Byb2R1Y3Rpb25zKSB7XG4gICAgY29uc3QgcHJldmlvdXNQcm9kdWN0aW9uTmFtZXMgPSBwcmV2aW91c1Byb2R1Y3Rpb25zLm1hcChmdW5jdGlvbihwcmV2aW91c1Byb2R1Y3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbk5hbWUgPSBwcmV2aW91c1Byb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBmdW5jdGlvbihwcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gcHJldmlvdXNQcm9kdWN0aW9uTmFtZXMuaW5jbHVkZXMocHJvZHVjdGlvbk5hbWUpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=