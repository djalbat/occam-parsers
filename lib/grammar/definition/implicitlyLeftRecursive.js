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
    key: 'getPreviousRuleName',
    value: function getPreviousRuleName() {
      var firstPart = this.getFirstPart(),
          ruleNamePart = firstPart,
          ///
      ruleNamePartRuleName = ruleNamePart.getRuleName(),
          previousRuleName = ruleNamePartRuleName; ///

      return previousRuleName;
    }
  }], [{
    key: 'fromDefinition',
    value: function fromDefinition(definition, callback) {
      var implicitlyLeftRecursiveDefinition = null;

      var definitionFirstPartRuleNamePart = definition.isFirstPartRuleNamePart();

      if (definitionFirstPartRuleNamePart) {
        var definitionFirstPart = definition.getFirstPart(),
            definitionFirstRuleNamePart = definitionFirstPart,
            ///
        definitionFirstRuleNamePartRuleName = definitionFirstRuleNamePart.getRuleName(),
            ruleName = definitionFirstRuleNamePartRuleName,
            ///
        definitionImplicitlyLeftRecursive = callback(ruleName);

        if (definitionImplicitlyLeftRecursive) {
          var parts = definition.getParts();

          implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts);
        }
      }

      return implicitlyLeftRecursiveDefinition;
    }
  }, {
    key: 'fromDefinitionAndPreviousRule',
    value: function fromDefinitionAndPreviousRule(definition, previousRule) {
      var previousRuleName = previousRule.getName(),
          implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinition(definition, function (ruleName) {
        var definitionImplicitlyLeftRecursive = previousRuleName === ruleName;

        return definitionImplicitlyLeftRecursive;
      });

      return implicitlyLeftRecursiveDefinition;
    }
  }, {
    key: 'fromDefinitionAndPreviousRules',
    value: function fromDefinitionAndPreviousRules(definition, previousRules) {
      var previousRuleNames = previousRules.map(function (previousRule) {
        var previousRuleName = previousRule.getName();

        return previousRuleName;
      }),
          implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinition(definition, function (ruleName) {
        var definitionImplicitlyLeftRecursive = previousRuleNames.includes(ruleName);

        return definitionImplicitlyLeftRecursive;
      });

      return implicitlyLeftRecursiveDefinition;
    }
  }]);

  return ImplicitlyLeftRecursiveDefinition;
}(Definition);

module.exports = ImplicitlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdFBhcnQiLCJnZXRGaXJzdFBhcnQiLCJydWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicHJldmlvdXNSdWxlTmFtZSIsImRlZmluaXRpb24iLCJjYWxsYmFjayIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25GaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJpc0ZpcnN0UGFydFJ1bGVOYW1lUGFydCIsImRlZmluaXRpb25GaXJzdFBhcnQiLCJkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnQiLCJkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwicGFydHMiLCJnZXRQYXJ0cyIsInByZXZpb3VzUnVsZSIsImdldE5hbWUiLCJmcm9tRGVmaW5pdGlvbiIsInByZXZpb3VzUnVsZXMiLCJwcmV2aW91c1J1bGVOYW1lcyIsIm1hcCIsImluY2x1ZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLDhCQUFSLENBQW5COztJQUVNQyxpQzs7Ozs7Ozs7Ozs7MENBQ2tCO0FBQ3BCLFVBQU1DLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01DLGVBQWVGLFNBRHJCO0FBQUEsVUFDZ0M7QUFDMUJHLDZCQUF1QkQsYUFBYUUsV0FBYixFQUY3QjtBQUFBLFVBR01DLG1CQUFtQkYsb0JBSHpCLENBRG9CLENBSTRCOztBQUVoRCxhQUFPRSxnQkFBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJQyxvQ0FBb0MsSUFBeEM7O0FBRUEsVUFBTUMsa0NBQWtDSCxXQUFXSSx1QkFBWCxFQUF4Qzs7QUFFQSxVQUFJRCwrQkFBSixFQUFxQztBQUNuQyxZQUFNRSxzQkFBc0JMLFdBQVdMLFlBQVgsRUFBNUI7QUFBQSxZQUNNVyw4QkFBOEJELG1CQURwQztBQUFBLFlBQzBEO0FBQ3BERSw4Q0FBc0NELDRCQUE0QlIsV0FBNUIsRUFGNUM7QUFBQSxZQUdNVSxXQUFXRCxtQ0FIakI7QUFBQSxZQUdzRDtBQUNoREUsNENBQW9DUixTQUFTTyxRQUFULENBSjFDOztBQU1BLFlBQUlDLGlDQUFKLEVBQXVDO0FBQ3JDLGNBQU1DLFFBQVFWLFdBQVdXLFFBQVgsRUFBZDs7QUFFQVQsOENBQW9DLElBQUlULGlDQUFKLENBQXNDaUIsS0FBdEMsQ0FBcEM7QUFDRDtBQUNGOztBQUVELGFBQU9SLGlDQUFQO0FBQ0Q7OztrREFFb0NGLFUsRUFBWVksWSxFQUFjO0FBQzdELFVBQU1iLG1CQUFtQmEsYUFBYUMsT0FBYixFQUF6QjtBQUFBLFVBQ01YLG9DQUFvQ1Qsa0NBQWtDcUIsY0FBbEMsQ0FBaURkLFVBQWpELEVBQTZELFVBQVNRLFFBQVQsRUFBbUI7QUFDbEgsWUFBTUMsb0NBQXFDVixxQkFBcUJTLFFBQWhFOztBQUVBLGVBQU9DLGlDQUFQO0FBQ0QsT0FKbUMsQ0FEMUM7O0FBUUEsYUFBT1AsaUNBQVA7QUFDRDs7O21EQUVxQ0YsVSxFQUFZZSxhLEVBQWU7QUFDL0QsVUFBTUMsb0JBQW9CRCxjQUFjRSxHQUFkLENBQWtCLFVBQVNMLFlBQVQsRUFBdUI7QUFDM0QsWUFBTWIsbUJBQW1CYSxhQUFhQyxPQUFiLEVBQXpCOztBQUVBLGVBQU9kLGdCQUFQO0FBQ0QsT0FKbUIsQ0FBMUI7QUFBQSxVQUtNRyxvQ0FBb0NULGtDQUFrQ3FCLGNBQWxDLENBQWlEZCxVQUFqRCxFQUE2RCxVQUFTUSxRQUFULEVBQW1CO0FBQ2xILFlBQU1DLG9DQUFvQ08sa0JBQWtCRSxRQUFsQixDQUEyQlYsUUFBM0IsQ0FBMUM7O0FBRUEsZUFBT0MsaUNBQVA7QUFDRCxPQUptQyxDQUwxQzs7QUFXQSxhQUFPUCxpQ0FBUDtBQUNEOzs7O0VBekQ2Q1gsVTs7QUE0RGhENEIsT0FBT0MsT0FBUCxHQUFpQjNCLGlDQUFqQiIsImZpbGUiOiJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2V4dGVuZGVkQk5GL2RlZmluaXRpb24nKTtcblxuY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGdldFByZXZpb3VzUnVsZU5hbWUoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lUGFydFJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcHJldmlvdXNSdWxlTmFtZSA9IHJ1bGVOYW1lUGFydFJ1bGVOYW1lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHByZXZpb3VzUnVsZU5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjYWxsYmFjaykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkZpcnN0UGFydFJ1bGVOYW1lUGFydCA9IGRlZmluaXRpb24uaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQoKTtcblxuICAgIGlmIChkZWZpbml0aW9uRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uRmlyc3RQYXJ0ID0gZGVmaW5pdGlvbi5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICAgIGRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydCA9IGRlZmluaXRpb25GaXJzdFBhcnQsICAvLy9cbiAgICAgICAgICAgIGRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydFJ1bGVOYW1lID0gZGVmaW5pdGlvbkZpcnN0UnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IGRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IGNhbGxiYWNrKHJ1bGVOYW1lKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUHJldmlvdXNSdWxlKGRlZmluaXRpb24sIHByZXZpb3VzUnVsZSkge1xuICAgIGNvbnN0IHByZXZpb3VzUnVsZU5hbWUgPSBwcmV2aW91c1J1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBmdW5jdGlvbihydWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gKHByZXZpb3VzUnVsZU5hbWUgPT09IHJ1bGVOYW1lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVxuICAgICAgICAgIH0pO1xuICAgIFxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUHJldmlvdXNSdWxlcyhkZWZpbml0aW9uLCBwcmV2aW91c1J1bGVzKSB7XG4gICAgY29uc3QgcHJldmlvdXNSdWxlTmFtZXMgPSBwcmV2aW91c1J1bGVzLm1hcChmdW5jdGlvbihwcmV2aW91c1J1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUnVsZU5hbWUgPSBwcmV2aW91c1J1bGUuZ2V0TmFtZSgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1J1bGVOYW1lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBmdW5jdGlvbihydWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gcHJldmlvdXNSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=