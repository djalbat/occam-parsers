'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../extendedBNF/rule'),
    Definition = require('../../extendedBNF/definition'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvbm9uTGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJSaWdodFJlY3Vyc2l2ZVJ1bGUiLCJOb25MZWZ0UmVjdXJzaXZlUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5vZGUiLCJnZXROb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJOb2RlIiwibm9uTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0Tm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZU5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInBhcnRzIiwiZGVmaW5pdGlvbiIsIm1hcCIsInJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZ2V0UGFydHMiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSx3QkFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSw4QkFBUixDQURuQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUYzQjs7SUFJTUcsb0I7Ozs7Ozs7Ozs7OzBDQUN5QkMsaUIsRUFBbUI7QUFDOUMsVUFBTUMsV0FBV0Qsa0JBQWtCRSxPQUFsQixFQUFqQjtBQUFBLFVBQ01DLFdBQVdILGtCQUFrQkksT0FBbEIsRUFEakI7QUFBQSxVQUVNQyxPQUFPSixRQUZiO0FBQUEsVUFFd0I7QUFDbEJLLG9CQUFjQyxpQ0FBaUNQLGlCQUFqQyxDQUhwQjtBQUFBLFVBSU1RLE9BQU9MLFFBSmI7QUFBQSxVQUl3QjtBQUNsQk0sNkJBQXVCLElBQUlWLG9CQUFKLENBQXlCTSxJQUF6QixFQUErQkMsV0FBL0IsRUFBNENFLElBQTVDLENBTDdCOztBQU9BLGFBQU9DLG9CQUFQO0FBQ0Q7Ozs7RUFWZ0NkLEk7O0FBYW5DZSxPQUFPQyxPQUFQLEdBQWlCWixvQkFBakI7O0FBRUEsU0FBU1EsZ0NBQVQsQ0FBMENQLGlCQUExQyxFQUE2RDtBQUMzRCxNQUFJTSxvQkFBSjs7QUFFQSxNQUFNTSw2QkFBNkJkLG1CQUFtQmUsaUNBQW5CLENBQXFEYixpQkFBckQsQ0FBbkM7QUFBQSxNQUNNYyxrQ0FBa0NkLGtCQUFrQmUsOEJBQWxCLEVBRHhDO0FBQUEsTUFFTUMsd0NBQXdDRixnQ0FBZ0NHLE1BRjlFOztBQUlBLE1BQUlELDBDQUEwQyxDQUE5QyxFQUFpRDtBQUMvQyxRQUFNRSxRQUFRLENBQUNOLDBCQUFELENBQWQ7QUFBQSxRQUNNTyxhQUFhLElBQUl0QixVQUFKLENBQWVxQixLQUFmLENBRG5COztBQUdBWixrQkFBYyxDQUFDYSxVQUFELENBQWQ7QUFDRCxHQUxELE1BS087QUFDTGIsa0JBQWNRLGdDQUFnQ00sR0FBaEMsQ0FBb0MsVUFBU0MsOEJBQVQsRUFBeUM7QUFDekYsVUFBTUMsc0NBQXNDRCwrQkFBK0JFLFFBQS9CLEVBQTVDO0FBQUEsVUFDTUwsUUFBUSxHQUFHTSxNQUFILENBQVVGLG1DQUFWLEVBQStDRSxNQUEvQyxDQUFzRFosMEJBQXRELENBRGQ7QUFBQSxVQUVNTyxhQUFhLElBQUl0QixVQUFKLENBQWVxQixLQUFmLENBRm5COztBQUlBLGFBQU9DLFVBQVA7QUFDRCxLQU5hLENBQWQ7QUFPRDs7QUFFRCxTQUFPYixXQUFQO0FBQ0QiLCJmaWxlIjoibm9uTGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2V4dGVuZGVkQk5GL3J1bGUnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9leHRlbmRlZEJORi9kZWZpbml0aW9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3JpZ2h0UmVjdXJzaXZlJyk7XG5cbmNsYXNzIE5vbkxlZnRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTm9kZSA9IGxlZnRSZWN1cnNpdmVSdWxlLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVSdWxlKGxlZnRSZWN1cnNpdmVSdWxlKSxcbiAgICAgICAgICBOb2RlID0gcnVsZU5vZGUsICAvLy9cbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlUnVsZSA9IG5ldyBOb25MZWZ0UmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIG5vbkxlZnRSZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uTGVmdFJlY3Vyc2l2ZVJ1bGU7XG5cbmZ1bmN0aW9uIGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVSdWxlKGxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gIGxldCBkZWZpbml0aW9ucztcblxuICBjb25zdCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IFJpZ2h0UmVjdXJzaXZlUnVsZS5ydWxlTmFtZVBhcnRGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUpLFxuICAgICAgICBydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0Tm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCksXG4gICAgICAgIHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAocnVsZU5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IHBhcnRzID0gW3JpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0XSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBbZGVmaW5pdGlvbl07XG4gIH0gZWxzZSB7XG4gICAgZGVmaW5pdGlvbnMgPSBydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcChmdW5jdGlvbihydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gcnVsZU5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtdLmNvbmNhdChydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cykuY29uY2F0KHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuIl19