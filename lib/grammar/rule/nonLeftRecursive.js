'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../bnf/rule'),
    Definition = require('../../bnf/definition'),
    RightRecursiveRule = require('../rule/rightRecursive');

var NonLeftRecursiveRule = function (_Rule) {
  _inherits(NonLeftRecursiveRule, _Rule);

  function NonLeftRecursiveRule() {
    _classCallCheck(this, NonLeftRecursiveRule);

    return _possibleConstructorReturn(this, (NonLeftRecursiveRule.__proto__ || Object.getPrototypeOf(NonLeftRecursiveRule)).apply(this, arguments));
  }

  _createClass(NonLeftRecursiveRule, null, [{
    key: 'fromLeftRecursiveRule',
    value: function fromLeftRecursiveRule(leftRecursiveRule) {
      var ruleName = leftRecursiveRule.getName(),
          ruleNode = leftRecursiveRule.getNode(),
          name = ruleName,
          ///
      definitions = definitionsFromLeftRecursiveRule(leftRecursiveRule),
          Node = ruleNode,
          ///
      nonLeftRecursiveRule = new NonLeftRecursiveRule(name, definitions, Node);

      return nonLeftRecursiveRule;
    }
  }]);

  return NonLeftRecursiveRule;
}(Rule);

module.exports = NonLeftRecursiveRule;

function definitionsFromLeftRecursiveRule(leftRecursiveRule) {
  var definitions = void 0;

  var rightRecursiveRuleNamePart = RightRecursiveRule.ruleNamePartFromLeftRecursiveRule(leftRecursiveRule),
      ruleNonLeftRecursiveDefinitions = leftRecursiveRule.getNonLeftRecursiveDefinitions(),
      ruleNonLeftRecursiveDefinitionsLength = ruleNonLeftRecursiveDefinitions.length;

  if (ruleNonLeftRecursiveDefinitionsLength === 0) {
    var parts = [rightRecursiveRuleNamePart],
        definition = new Definition(parts);

    definitions = [definition];
  } else {
    definitions = ruleNonLeftRecursiveDefinitions.map(function (ruleNonLeftRecursiveDefinition) {
      var ruleNonLeftRecursiveDefinitionParts = ruleNonLeftRecursiveDefinition.getParts(),
          parts = [].concat(ruleNonLeftRecursiveDefinitionParts).concat(rightRecursiveRuleNamePart),
          definition = new Definition(parts);

      return definition;
    });
  }

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvbm9uTGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJSaWdodFJlY3Vyc2l2ZVJ1bGUiLCJOb25MZWZ0UmVjdXJzaXZlUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5vZGUiLCJnZXROb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJOb2RlIiwibm9uTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0Tm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZU5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInBhcnRzIiwiZGVmaW5pdGlvbiIsIm1hcCIsInJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZ2V0UGFydHMiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxnQkFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxzQkFBUixDQURuQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUYzQjs7SUFJTUcsb0I7Ozs7Ozs7Ozs7OzBDQUN5QkMsaUIsRUFBbUI7QUFDOUMsVUFBTUMsV0FBV0Qsa0JBQWtCRSxPQUFsQixFQUFqQjtBQUFBLFVBQ01DLFdBQVdILGtCQUFrQkksT0FBbEIsRUFEakI7QUFBQSxVQUVNQyxPQUFPSixRQUZiO0FBQUEsVUFFd0I7QUFDbEJLLG9CQUFjQyxpQ0FBaUNQLGlCQUFqQyxDQUhwQjtBQUFBLFVBSU1RLE9BQU9MLFFBSmI7QUFBQSxVQUl3QjtBQUNsQk0sNkJBQXVCLElBQUlWLG9CQUFKLENBQXlCTSxJQUF6QixFQUErQkMsV0FBL0IsRUFBNENFLElBQTVDLENBTDdCOztBQU9BLGFBQU9DLG9CQUFQO0FBQ0Q7Ozs7RUFWZ0NkLEk7O0FBYW5DZSxPQUFPQyxPQUFQLEdBQWlCWixvQkFBakI7O0FBRUEsU0FBU1EsZ0NBQVQsQ0FBMENQLGlCQUExQyxFQUE2RDtBQUMzRCxNQUFJTSxvQkFBSjs7QUFFQSxNQUFNTSw2QkFBNkJkLG1CQUFtQmUsaUNBQW5CLENBQXFEYixpQkFBckQsQ0FBbkM7QUFBQSxNQUNNYyxrQ0FBa0NkLGtCQUFrQmUsOEJBQWxCLEVBRHhDO0FBQUEsTUFFTUMsd0NBQXdDRixnQ0FBZ0NHLE1BRjlFOztBQUlBLE1BQUlELDBDQUEwQyxDQUE5QyxFQUFpRDtBQUMvQyxRQUFNRSxRQUFRLENBQUNOLDBCQUFELENBQWQ7QUFBQSxRQUNNTyxhQUFhLElBQUl0QixVQUFKLENBQWVxQixLQUFmLENBRG5COztBQUdBWixrQkFBYyxDQUFDYSxVQUFELENBQWQ7QUFDRCxHQUxELE1BS087QUFDTGIsa0JBQWNRLGdDQUFnQ00sR0FBaEMsQ0FBb0MsVUFBU0MsOEJBQVQsRUFBeUM7QUFDekYsVUFBTUMsc0NBQXNDRCwrQkFBK0JFLFFBQS9CLEVBQTVDO0FBQUEsVUFDTUwsUUFBUSxHQUFHTSxNQUFILENBQVVGLG1DQUFWLEVBQStDRSxNQUEvQyxDQUFzRFosMEJBQXRELENBRGQ7QUFBQSxVQUVNTyxhQUFhLElBQUl0QixVQUFKLENBQWVxQixLQUFmLENBRm5COztBQUlBLGFBQU9DLFVBQVA7QUFDRCxLQU5hLENBQWQ7QUFPRDs7QUFFRCxTQUFPYixXQUFQO0FBQ0QiLCJmaWxlIjoibm9uTGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9ydWxlJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vYm5mL2RlZmluaXRpb24nKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcmlnaHRSZWN1cnNpdmUnKTtcblxuY2xhc3MgTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOb2RlID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUpLFxuICAgICAgICAgIE5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVSdWxlID0gbmV3IE5vbkxlZnRSZWN1cnNpdmVSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcbiAgICBcbiAgICByZXR1cm4gbm9uTGVmdFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25MZWZ0UmVjdXJzaXZlUnVsZTtcblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgbGV0IGRlZmluaXRpb25zO1xuXG4gIGNvbnN0IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gUmlnaHRSZWN1cnNpdmVSdWxlLnJ1bGVOYW1lUGFydEZyb21MZWZ0UmVjdXJzaXZlUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSksXG4gICAgICAgIHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlUnVsZS5nZXROb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgcnVsZU5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgcGFydHMgPSBbcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnRdLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICBkZWZpbml0aW9ucyA9IFtkZWZpbml0aW9uXTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbml0aW9ucyA9IHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uKHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgcnVsZU5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW10uY29uY2F0KHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKS5jb25jYXQocmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5pdGlvbnM7XG59XG4iXX0=