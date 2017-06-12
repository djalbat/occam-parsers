'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../common/definition'),
    ProductionNamePart = require('../../common/part/productionName');

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

      var definitionFirstPart = definition.getFirstPart();

      if (definitionFirstPart instanceof ProductionNamePart) {
        var definitionFirstProductionNamePart = definitionFirstPart,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdFBhcnQiLCJnZXRGaXJzdFBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwicHJldmlvdXNQcm9kdWN0aW9uTmFtZSIsImRlZmluaXRpb24iLCJjYWxsYmFjayIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25GaXJzdFBhcnQiLCJkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lIiwiZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwicGFydHMiLCJnZXRQYXJ0cyIsInByZXZpb3VzUHJvZHVjdGlvbiIsImdldE5hbWUiLCJmcm9tRGVmaW5pdGlvbiIsInByZXZpb3VzUHJvZHVjdGlvbnMiLCJwcmV2aW91c1Byb2R1Y3Rpb25OYW1lcyIsIm1hcCIsImluY2x1ZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLHlCQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGtDQUFSLENBRDNCOztJQUdNRSxpQzs7Ozs7Ozs7Ozs7Z0RBQ3dCO0FBQzFCLFVBQU1DLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01DLHFCQUFxQkYsU0FEM0I7QUFBQSxVQUNzQztBQUNoQ0cseUNBQW1DRCxtQkFBbUJFLGlCQUFuQixFQUZ6QztBQUFBLFVBR01DLHlCQUF5QkYsZ0NBSC9CLENBRDBCLENBSXdDOztBQUVsRSxhQUFPRSxzQkFBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJQyxvQ0FBb0MsSUFBeEM7O0FBRUEsVUFBTUMsc0JBQXNCSCxXQUFXTCxZQUFYLEVBQTVCOztBQUVBLFVBQUlRLCtCQUErQlgsa0JBQW5DLEVBQXVEO0FBQ3JELFlBQU1ZLG9DQUFvQ0QsbUJBQTFDO0FBQUEsWUFBZ0U7QUFDMURFLDBEQUFrREQsa0NBQWtDTixpQkFBbEMsRUFEeEQ7QUFBQSxZQUVNUSxpQkFBaUJELCtDQUZ2QjtBQUFBLFlBRXdFO0FBQ2xFRSw0Q0FBb0NOLFNBQVNLLGNBQVQsQ0FIMUM7O0FBS0EsWUFBSUMsaUNBQUosRUFBdUM7QUFDckMsY0FBTUMsUUFBUVIsV0FBV1MsUUFBWCxFQUFkOztBQUVBUCw4Q0FBb0MsSUFBSVQsaUNBQUosQ0FBc0NlLEtBQXRDLENBQXBDO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPTixpQ0FBUDtBQUNEOzs7d0RBRTBDRixVLEVBQVlVLGtCLEVBQW9CO0FBQ3pFLFVBQU1YLHlCQUF5QlcsbUJBQW1CQyxPQUFuQixFQUEvQjtBQUFBLFVBQ01ULG9DQUFvQ1Qsa0NBQWtDbUIsY0FBbEMsQ0FBaURaLFVBQWpELEVBQTZELFVBQVNNLGNBQVQsRUFBeUI7QUFDeEgsWUFBTUMsb0NBQXFDUiwyQkFBMkJPLGNBQXRFOztBQUVBLGVBQU9DLGlDQUFQO0FBQ0QsT0FKbUMsQ0FEMUM7O0FBUUEsYUFBT0wsaUNBQVA7QUFDRDs7O3lEQUUyQ0YsVSxFQUFZYSxtQixFQUFxQjtBQUMzRSxVQUFNQywwQkFBMEJELG9CQUFvQkUsR0FBcEIsQ0FBd0IsVUFBU0wsa0JBQVQsRUFBNkI7QUFDN0UsWUFBTVgseUJBQXlCVyxtQkFBbUJDLE9BQW5CLEVBQS9COztBQUVBLGVBQU9aLHNCQUFQO0FBQ0QsT0FKeUIsQ0FBaEM7QUFBQSxVQUtNRyxvQ0FBb0NULGtDQUFrQ21CLGNBQWxDLENBQWlEWixVQUFqRCxFQUE2RCxVQUFTTSxjQUFULEVBQXlCO0FBQ3hILFlBQU1DLG9DQUFvQ08sd0JBQXdCRSxRQUF4QixDQUFpQ1YsY0FBakMsQ0FBMUM7O0FBRUEsZUFBT0MsaUNBQVA7QUFDRCxPQUptQyxDQUwxQzs7QUFXQSxhQUFPTCxpQ0FBUDtBQUNEOzs7O0VBeEQ2Q1osVTs7QUEyRGhEMkIsT0FBT0MsT0FBUCxHQUFpQnpCLGlDQUFqQiIsImZpbGUiOiJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9kZWZpbml0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgZ2V0UHJldmlvdXNQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gcHJldmlvdXNQcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGNhbGxiYWNrKSB7XG4gICAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uRmlyc3RQYXJ0ID0gZGVmaW5pdGlvbi5nZXRGaXJzdFBhcnQoKTtcblxuICAgIGlmIChkZWZpbml0aW9uRmlyc3RQYXJ0IGluc3RhbmNlb2YgUHJvZHVjdGlvbk5hbWVQYXJ0KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgPSBkZWZpbml0aW9uRmlyc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgICBkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSA9IGRlZmluaXRpb25GaXJzdFByb2R1Y3Rpb25OYW1lUGFydC5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgICAgICBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBjYWxsYmFjayhwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFByZXZpb3VzUHJvZHVjdGlvbihkZWZpbml0aW9uLCBwcmV2aW91c1Byb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID0gcHJldmlvdXNQcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZnVuY3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID09PSBwcm9kdWN0aW9uTmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVcbiAgICAgICAgICB9KTtcbiAgICBcblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFByZXZpb3VzUHJvZHVjdGlvbnMoZGVmaW5pdGlvbiwgcHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbk5hbWVzID0gcHJldmlvdXNQcm9kdWN0aW9ucy5tYXAoZnVuY3Rpb24ocHJldmlvdXNQcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID0gcHJldmlvdXNQcm9kdWN0aW9uLmdldE5hbWUoKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9kdWN0aW9uTmFtZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZnVuY3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHByZXZpb3VzUHJvZHVjdGlvbk5hbWVzLmluY2x1ZGVzKHByb2R1Y3Rpb25OYW1lKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19