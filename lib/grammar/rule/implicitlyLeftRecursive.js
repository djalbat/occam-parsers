'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../extendedBNF/rule'),
    ImplicitlyLeftRecursiveDefinition = require('../definition/implicitlyLeftRecursive');

var ImplicitlyLeftRecursiveRule = function (_Rule) {
  _inherits(ImplicitlyLeftRecursiveRule, _Rule);

  function ImplicitlyLeftRecursiveRule() {
    _classCallCheck(this, ImplicitlyLeftRecursiveRule);

    return _possibleConstructorReturn(this, (ImplicitlyLeftRecursiveRule.__proto__ || Object.getPrototypeOf(ImplicitlyLeftRecursiveRule)).apply(this, arguments));
  }

  _createClass(ImplicitlyLeftRecursiveRule, null, [{
    key: 'fromRuleAndPreviousRules',
    value: function fromRuleAndPreviousRules(rule, previousRules) {
      var implicitlyLeftRecursiveRule = null;

      var implicitlyLeftRecursiveDefinitions = implicitlyLeftRecursiveDefinitionsFromRuleAndPreviousRules(rule, previousRules),
          implicitlyLeftRecursiveDefinitionsLength = implicitlyLeftRecursiveDefinitions.length,
          ruleImplicitlyLeftRecursive = implicitlyLeftRecursiveDefinitionsLength > 0;

      if (ruleImplicitlyLeftRecursive) {
        implicitlyLeftRecursiveRule = Rule.fromRule(rule, ImplicitlyLeftRecursiveRule); ///
      }

      return implicitlyLeftRecursiveRule;
    }
  }]);

  return ImplicitlyLeftRecursiveRule;
}(Rule);

module.exports = ImplicitlyLeftRecursiveRule;

function implicitlyLeftRecursiveDefinitionsFromRuleAndPreviousRules(rule, previousRules) {
  var ruleDefinitions = rule.getDefinitions(),
      implicitlyLeftRecursiveDefinitions = ruleDefinitions.reduce(function (implicitlyLeftRecursiveDefinitions, ruleDefinition) {
    var definition = ruleDefinition,
        ///
    implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinitionAndPreviousRules(definition, previousRules);

    if (implicitlyLeftRecursiveDefinition !== null) {
      implicitlyLeftRecursiveDefinitions.push(implicitlyLeftRecursiveDefinition);
    }

    return implicitlyLeftRecursiveDefinitions;
  }, []);

  return implicitlyLeftRecursiveDefinitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwicHJldmlvdXNSdWxlcyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJ1bGVBbmRQcmV2aW91c1J1bGVzIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSIsImZyb21SdWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlIiwicnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRQcmV2aW91c1J1bGVzIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLHdCQUFSLENBQWI7QUFBQSxJQUNNQyxvQ0FBb0NELFFBQVEsdUNBQVIsQ0FEMUM7O0lBR01FLDJCOzs7Ozs7Ozs7Ozs2Q0FDNEJDLEksRUFBTUMsYSxFQUFlO0FBQ25ELFVBQUlDLDhCQUE4QixJQUFsQzs7QUFFQSxVQUFNQyxxQ0FBcUNDLDJEQUEyREosSUFBM0QsRUFBaUVDLGFBQWpFLENBQTNDO0FBQUEsVUFDTUksMkNBQTJDRixtQ0FBbUNHLE1BRHBGO0FBQUEsVUFFTUMsOEJBQStCRiwyQ0FBMkMsQ0FGaEY7O0FBSUEsVUFBSUUsMkJBQUosRUFBaUM7QUFDL0JMLHNDQUE4Qk4sS0FBS1ksUUFBTCxDQUFjUixJQUFkLEVBQW9CRCwyQkFBcEIsQ0FBOUIsQ0FEK0IsQ0FDaUQ7QUFDakY7O0FBRUQsYUFBT0csMkJBQVA7QUFDRDs7OztFQWJ1Q04sSTs7QUFnQjFDYSxPQUFPQyxPQUFQLEdBQWlCWCwyQkFBakI7O0FBRUEsU0FBU0ssMERBQVQsQ0FBb0VKLElBQXBFLEVBQTBFQyxhQUExRSxFQUF5RjtBQUN2RixNQUFNVSxrQkFBa0JYLEtBQUtZLGNBQUwsRUFBeEI7QUFBQSxNQUNNVCxxQ0FBcUNRLGdCQUFnQkUsTUFBaEIsQ0FBdUIsVUFBU1Ysa0NBQVQsRUFBNkNXLGNBQTdDLEVBQTZEO0FBQ3ZILFFBQU1DLGFBQWFELGNBQW5CO0FBQUEsUUFBb0M7QUFDOUJFLHdDQUFvQ2xCLGtDQUFrQ21CLDhCQUFsQyxDQUFpRUYsVUFBakUsRUFBNkVkLGFBQTdFLENBRDFDOztBQUdBLFFBQUllLHNDQUFzQyxJQUExQyxFQUFnRDtBQUM5Q2IseUNBQW1DZSxJQUFuQyxDQUF3Q0YsaUNBQXhDO0FBQ0Q7O0FBRUQsV0FBT2Isa0NBQVA7QUFDRCxHQVRvQyxFQVNsQyxFQVRrQyxDQUQzQzs7QUFZQSxTQUFPQSxrQ0FBUDtBQUNEIiwiZmlsZSI6ImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vZXh0ZW5kZWRCTkYvcnVsZScpLFxuICAgICAgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZScpO1xuXG5jbGFzcyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlQW5kUHJldmlvdXNSdWxlcyhydWxlLCBwcmV2aW91c1J1bGVzKSB7XG4gICAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUnVsZUFuZFByZXZpb3VzUnVsZXMocnVsZSwgcHJldmlvdXNSdWxlcyksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID4gMCk7IFxuICAgIFxuICAgIGlmIChydWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IFJ1bGUuZnJvbVJ1bGUocnVsZSwgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlKTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZTtcblxuZnVuY3Rpb24gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SdWxlQW5kUHJldmlvdXNSdWxlcyhydWxlLCBwcmV2aW91c1J1bGVzKSB7XG4gIGNvbnN0IHJ1bGVEZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IHJ1bGVEZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgcnVsZURlZmluaXRpb24pIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gcnVsZURlZmluaXRpb24sICAvLy9cbiAgICAgICAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRQcmV2aW91c1J1bGVzKGRlZmluaXRpb24sIHByZXZpb3VzUnVsZXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucHVzaChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXX0=