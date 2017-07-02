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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdFBhcnQiLCJnZXRGaXJzdFBhcnQiLCJydWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicHJldmlvdXNSdWxlTmFtZSIsImRlZmluaXRpb24iLCJjYWxsYmFjayIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25GaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJpc0ZpcnN0UGFydFJ1bGVOYW1lUGFydCIsImRlZmluaXRpb25GaXJzdFBhcnQiLCJkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnQiLCJkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwicGFydHMiLCJnZXRQYXJ0cyIsInByZXZpb3VzUnVsZSIsImdldE5hbWUiLCJmcm9tRGVmaW5pdGlvbiIsInByZXZpb3VzUnVsZXMiLCJwcmV2aW91c1J1bGVOYW1lcyIsIm1hcCIsImluY2x1ZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLHNCQUFSLENBQW5COztJQUVNQyxpQzs7Ozs7Ozs7Ozs7MENBQ2tCO0FBQ3BCLFVBQU1DLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01DLGVBQWVGLFNBRHJCO0FBQUEsVUFDZ0M7QUFDMUJHLDZCQUF1QkQsYUFBYUUsV0FBYixFQUY3QjtBQUFBLFVBR01DLG1CQUFtQkYsb0JBSHpCLENBRG9CLENBSTRCOztBQUVoRCxhQUFPRSxnQkFBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJQyxvQ0FBb0MsSUFBeEM7O0FBRUEsVUFBTUMsa0NBQWtDSCxXQUFXSSx1QkFBWCxFQUF4Qzs7QUFFQSxVQUFJRCwrQkFBSixFQUFxQztBQUNuQyxZQUFNRSxzQkFBc0JMLFdBQVdMLFlBQVgsRUFBNUI7QUFBQSxZQUNNVyw4QkFBOEJELG1CQURwQztBQUFBLFlBQzBEO0FBQ3BERSw4Q0FBc0NELDRCQUE0QlIsV0FBNUIsRUFGNUM7QUFBQSxZQUdNVSxXQUFXRCxtQ0FIakI7QUFBQSxZQUdzRDtBQUNoREUsNENBQW9DUixTQUFTTyxRQUFULENBSjFDOztBQU1BLFlBQUlDLGlDQUFKLEVBQXVDO0FBQ3JDLGNBQU1DLFFBQVFWLFdBQVdXLFFBQVgsRUFBZDs7QUFFQVQsOENBQW9DLElBQUlULGlDQUFKLENBQXNDaUIsS0FBdEMsQ0FBcEM7QUFDRDtBQUNGOztBQUVELGFBQU9SLGlDQUFQO0FBQ0Q7OztrREFFb0NGLFUsRUFBWVksWSxFQUFjO0FBQzdELFVBQU1iLG1CQUFtQmEsYUFBYUMsT0FBYixFQUF6QjtBQUFBLFVBQ01YLG9DQUFvQ1Qsa0NBQWtDcUIsY0FBbEMsQ0FBaURkLFVBQWpELEVBQTZELFVBQVNRLFFBQVQsRUFBbUI7QUFDbEgsWUFBTUMsb0NBQXFDVixxQkFBcUJTLFFBQWhFOztBQUVBLGVBQU9DLGlDQUFQO0FBQ0QsT0FKbUMsQ0FEMUM7O0FBUUEsYUFBT1AsaUNBQVA7QUFDRDs7O21EQUVxQ0YsVSxFQUFZZSxhLEVBQWU7QUFDL0QsVUFBTUMsb0JBQW9CRCxjQUFjRSxHQUFkLENBQWtCLFVBQVNMLFlBQVQsRUFBdUI7QUFDM0QsWUFBTWIsbUJBQW1CYSxhQUFhQyxPQUFiLEVBQXpCOztBQUVBLGVBQU9kLGdCQUFQO0FBQ0QsT0FKbUIsQ0FBMUI7QUFBQSxVQUtNRyxvQ0FBb0NULGtDQUFrQ3FCLGNBQWxDLENBQWlEZCxVQUFqRCxFQUE2RCxVQUFTUSxRQUFULEVBQW1CO0FBQ2xILFlBQU1DLG9DQUFvQ08sa0JBQWtCRSxRQUFsQixDQUEyQlYsUUFBM0IsQ0FBMUM7O0FBRUEsZUFBT0MsaUNBQVA7QUFDRCxPQUptQyxDQUwxQzs7QUFXQSxhQUFPUCxpQ0FBUDtBQUNEOzs7O0VBekQ2Q1gsVTs7QUE0RGhENEIsT0FBT0MsT0FBUCxHQUFpQjNCLGlDQUFqQiIsImZpbGUiOiJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2JuZi9kZWZpbml0aW9uJyk7XG5cbmNsYXNzIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBnZXRQcmV2aW91c1J1bGVOYW1lKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgICBydWxlTmFtZVBhcnRSdWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHByZXZpb3VzUnVsZU5hbWUgPSBydWxlTmFtZVBhcnRSdWxlTmFtZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBwcmV2aW91c1J1bGVOYW1lO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgY2FsbGJhY2spIHtcbiAgICBsZXQgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25GaXJzdFBhcnRSdWxlTmFtZVBhcnQgPSBkZWZpbml0aW9uLmlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkZpcnN0UGFydFJ1bGVOYW1lUGFydCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkZpcnN0UGFydCA9IGRlZmluaXRpb24uZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgICBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnQgPSBkZWZpbml0aW9uRmlyc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgICBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSA9IGRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBjYWxsYmFjayhydWxlTmFtZSk7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFByZXZpb3VzUnVsZShkZWZpbml0aW9uLCBwcmV2aW91c1J1bGUpIHtcbiAgICBjb25zdCBwcmV2aW91c1J1bGVOYW1lID0gcHJldmlvdXNSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZnVuY3Rpb24ocnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChwcmV2aW91c1J1bGVOYW1lID09PSBydWxlTmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVcbiAgICAgICAgICB9KTtcbiAgICBcblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFByZXZpb3VzUnVsZXMoZGVmaW5pdGlvbiwgcHJldmlvdXNSdWxlcykge1xuICAgIGNvbnN0IHByZXZpb3VzUnVsZU5hbWVzID0gcHJldmlvdXNSdWxlcy5tYXAoZnVuY3Rpb24ocHJldmlvdXNSdWxlKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1J1bGVOYW1lID0gcHJldmlvdXNSdWxlLmdldE5hbWUoKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSdWxlTmFtZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZnVuY3Rpb24ocnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHByZXZpb3VzUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19