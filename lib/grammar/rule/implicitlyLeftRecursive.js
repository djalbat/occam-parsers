'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../bnf/rule'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwicHJldmlvdXNSdWxlcyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJ1bGVBbmRQcmV2aW91c1J1bGVzIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSIsImZyb21SdWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlIiwicnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRQcmV2aW91c1J1bGVzIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLGdCQUFSLENBQWI7QUFBQSxJQUNNQyxvQ0FBb0NELFFBQVEsdUNBQVIsQ0FEMUM7O0lBR01FLDJCOzs7Ozs7Ozs7Ozs2Q0FDNEJDLEksRUFBTUMsYSxFQUFlO0FBQ25ELFVBQUlDLDhCQUE4QixJQUFsQzs7QUFFQSxVQUFNQyxxQ0FBcUNDLDJEQUEyREosSUFBM0QsRUFBaUVDLGFBQWpFLENBQTNDO0FBQUEsVUFDTUksMkNBQTJDRixtQ0FBbUNHLE1BRHBGO0FBQUEsVUFFTUMsOEJBQStCRiwyQ0FBMkMsQ0FGaEY7O0FBSUEsVUFBSUUsMkJBQUosRUFBaUM7QUFDL0JMLHNDQUE4Qk4sS0FBS1ksUUFBTCxDQUFjUixJQUFkLEVBQW9CRCwyQkFBcEIsQ0FBOUIsQ0FEK0IsQ0FDaUQ7QUFDakY7O0FBRUQsYUFBT0csMkJBQVA7QUFDRDs7OztFQWJ1Q04sSTs7QUFnQjFDYSxPQUFPQyxPQUFQLEdBQWlCWCwyQkFBakI7O0FBRUEsU0FBU0ssMERBQVQsQ0FBb0VKLElBQXBFLEVBQTBFQyxhQUExRSxFQUF5RjtBQUN2RixNQUFNVSxrQkFBa0JYLEtBQUtZLGNBQUwsRUFBeEI7QUFBQSxNQUNNVCxxQ0FBcUNRLGdCQUFnQkUsTUFBaEIsQ0FBdUIsVUFBU1Ysa0NBQVQsRUFBNkNXLGNBQTdDLEVBQTZEO0FBQ3ZILFFBQU1DLGFBQWFELGNBQW5CO0FBQUEsUUFBb0M7QUFDOUJFLHdDQUFvQ2xCLGtDQUFrQ21CLDhCQUFsQyxDQUFpRUYsVUFBakUsRUFBNkVkLGFBQTdFLENBRDFDOztBQUdBLFFBQUllLHNDQUFzQyxJQUExQyxFQUFnRDtBQUM5Q2IseUNBQW1DZSxJQUFuQyxDQUF3Q0YsaUNBQXhDO0FBQ0Q7O0FBRUQsV0FBT2Isa0NBQVA7QUFDRCxHQVRvQyxFQVNsQyxFQVRrQyxDQUQzQzs7QUFZQSxTQUFPQSxrQ0FBUDtBQUNEIiwiZmlsZSI6ImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vYm5mL3J1bGUnKSxcbiAgICAgIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vaW1wbGljaXRseUxlZnRSZWN1cnNpdmUnKTtcblxuY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZFByZXZpb3VzUnVsZXMocnVsZSwgcHJldmlvdXNSdWxlcykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJ1bGVBbmRQcmV2aW91c1J1bGVzKHJ1bGUsIHByZXZpb3VzUnVsZXMpLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBydWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSAoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA+IDApOyBcbiAgICBcbiAgICBpZiAocnVsZUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgPSBSdWxlLmZyb21SdWxlKHJ1bGUsIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSk7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7XG5cbmZ1bmN0aW9uIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUnVsZUFuZFByZXZpb3VzUnVsZXMocnVsZSwgcHJldmlvdXNSdWxlcykge1xuICBjb25zdCBydWxlRGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBydWxlRGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJ1bGVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHJ1bGVEZWZpbml0aW9uLCAgLy8vXG4gICAgICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kUHJldmlvdXNSdWxlcyhkZWZpbml0aW9uLCBwcmV2aW91c1J1bGVzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnB1c2goaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuIl19