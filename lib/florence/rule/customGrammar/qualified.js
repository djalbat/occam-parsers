'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../../bnf/rule'),
    Definition = require('../../../bnf/definition'),
    RuleNamePart = require('../../../bnf/part/nonTerminal/ruleName'),
    EndOfLinePart = require('../../../bnf/part/terminal/endOfLine'),
    OptionalPartPart = require('../../../bnf/part/nonTerminal/optionalPart');

var QualifiedCustomGrammarRule = function (_Rule) {
  _inherits(QualifiedCustomGrammarRule, _Rule);

  function QualifiedCustomGrammarRule() {
    _classCallCheck(this, QualifiedCustomGrammarRule);

    return _possibleConstructorReturn(this, (QualifiedCustomGrammarRule.__proto__ || Object.getPrototypeOf(QualifiedCustomGrammarRule)).apply(this, arguments));
  }

  _createClass(QualifiedCustomGrammarRule, null, [{
    key: 'fromRuleNameAndCustomGrammarRule',
    value: function fromRuleNameAndCustomGrammarRule(ruleName, customGrammarRule) {
      var customGrammarRuleNonTerminalNode = customGrammarRule.getNonTerminalNode(),
          customGrammarRuleDefinitions = customGrammarRule.getDefinitions(),
          name = ruleName,
          ///
      definitions = definitionsFromCustomGrammarRuleDefinitions(customGrammarRuleDefinitions),
          NonTerminalNode = customGrammarRuleNonTerminalNode,
          ///
      qualifiedCustomGrammarRule = new QualifiedCustomGrammarRule(name, definitions, NonTerminalNode);

      return qualifiedCustomGrammarRule;
    }
  }]);

  return QualifiedCustomGrammarRule;
}(Rule);

module.exports = QualifiedCustomGrammarRule;

function definitionsFromCustomGrammarRuleDefinitions(customGrammarRuleDefinitions) {
  var definitions = customGrammarRuleDefinitions.map(function (customGrammarRuleDefinition) {
    var customGrammarRuleDefinitionParts = customGrammarRuleDefinition.getParts(),
        qualificationRuleName = 'qualification',
        ///
    qualificationRuleNamePart = new RuleNamePart(qualificationRuleName),
        optionalQualificationRuleNamePart = new OptionalPartPart(qualificationRuleNamePart),
        endOfLinePart = new EndOfLinePart(),
        parts = [].concat(customGrammarRuleDefinitionParts).concat(optionalQualificationRuleNamePart).concat(endOfLinePart),
        definition = new Definition(parts);

    return definition;
  });

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ydWxlL2N1c3RvbUdyYW1tYXIvcXVhbGlmaWVkLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIkVuZE9mTGluZVBhcnQiLCJPcHRpb25hbFBhcnRQYXJ0IiwiUXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUiLCJydWxlTmFtZSIsImN1c3RvbUdyYW1tYXJSdWxlIiwiY3VzdG9tR3JhbW1hclJ1bGVOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJjdXN0b21HcmFtbWFyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0Zyb21DdXN0b21HcmFtbWFyUnVsZURlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwicXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwIiwiY3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9uIiwiY3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9uUGFydHMiLCJnZXRQYXJ0cyIsInF1YWxpZmljYXRpb25SdWxlTmFtZSIsInF1YWxpZmljYXRpb25SdWxlTmFtZVBhcnQiLCJvcHRpb25hbFF1YWxpZmljYXRpb25SdWxlTmFtZVBhcnQiLCJlbmRPZkxpbmVQYXJ0IiwicGFydHMiLCJjb25jYXQiLCJkZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsbUJBQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEseUJBQVIsQ0FEbkI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLHdDQUFSLENBRnJCO0FBQUEsSUFHTUcsZ0JBQWdCSCxRQUFRLHNDQUFSLENBSHRCO0FBQUEsSUFJTUksbUJBQW1CSixRQUFRLDRDQUFSLENBSnpCOztJQU1NSywwQjs7Ozs7Ozs7Ozs7cURBQ29DQyxRLEVBQVVDLGlCLEVBQW1CO0FBQ25FLFVBQU1DLG1DQUFtQ0Qsa0JBQWtCRSxrQkFBbEIsRUFBekM7QUFBQSxVQUNNQywrQkFBK0JILGtCQUFrQkksY0FBbEIsRUFEckM7QUFBQSxVQUVNQyxPQUFPTixRQUZiO0FBQUEsVUFFd0I7QUFDbEJPLG9CQUFjQyw0Q0FBNENKLDRCQUE1QyxDQUhwQjtBQUFBLFVBSU1LLGtCQUFrQlAsZ0NBSnhCO0FBQUEsVUFJMEQ7QUFDcERRLG1DQUE2QixJQUFJWCwwQkFBSixDQUErQk8sSUFBL0IsRUFBcUNDLFdBQXJDLEVBQWtERSxlQUFsRCxDQUxuQzs7QUFPQSxhQUFPQywwQkFBUDtBQUNEOzs7O0VBVnNDakIsSTs7QUFhekNrQixPQUFPQyxPQUFQLEdBQWlCYiwwQkFBakI7O0FBRUEsU0FBU1MsMkNBQVQsQ0FBcURKLDRCQUFyRCxFQUFtRjtBQUNqRixNQUFNRyxjQUFjSCw2QkFBNkJTLEdBQTdCLENBQWlDLFVBQVNDLDJCQUFULEVBQXNDO0FBQ3pGLFFBQU1DLG1DQUFtQ0QsNEJBQTRCRSxRQUE1QixFQUF6QztBQUFBLFFBQ01DLHdCQUF3QixlQUQ5QjtBQUFBLFFBQ2dEO0FBQzFDQyxnQ0FBNEIsSUFBSXRCLFlBQUosQ0FBaUJxQixxQkFBakIsQ0FGbEM7QUFBQSxRQUdNRSxvQ0FBb0MsSUFBSXJCLGdCQUFKLENBQXFCb0IseUJBQXJCLENBSDFDO0FBQUEsUUFJTUUsZ0JBQWdCLElBQUl2QixhQUFKLEVBSnRCO0FBQUEsUUFLTXdCLFFBQVEsR0FBR0MsTUFBSCxDQUFVUCxnQ0FBVixFQUE0Q08sTUFBNUMsQ0FBbURILGlDQUFuRCxFQUFzRkcsTUFBdEYsQ0FBNkZGLGFBQTdGLENBTGQ7QUFBQSxRQU1NRyxhQUFhLElBQUk1QixVQUFKLENBQWUwQixLQUFmLENBTm5COztBQVFBLFdBQU9FLFVBQVA7QUFDRCxHQVZtQixDQUFwQjs7QUFZQSxTQUFPaEIsV0FBUDtBQUNEIiwiZmlsZSI6InF1YWxpZmllZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9ydWxlJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vLi4vYm5mL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBFbmRPZkxpbmVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vLi4vYm5mL3BhcnQvdGVybWluYWwvZW5kT2ZMaW5lJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vLi4vYm5mL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0Jyk7XG5cbmNsYXNzIFF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDdXN0b21HcmFtbWFyUnVsZShydWxlTmFtZSwgY3VzdG9tR3JhbW1hclJ1bGUpIHtcbiAgICBjb25zdCBjdXN0b21HcmFtbWFyUnVsZU5vblRlcm1pbmFsTm9kZSA9IGN1c3RvbUdyYW1tYXJSdWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJSdWxlRGVmaW5pdGlvbnMgPSBjdXN0b21HcmFtbWFyUnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNGcm9tQ3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9ucyhjdXN0b21HcmFtbWFyUnVsZURlZmluaXRpb25zKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBjdXN0b21HcmFtbWFyUnVsZU5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUgPSBuZXcgUXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZTtcblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tQ3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9ucyhjdXN0b21HcmFtbWFyUnVsZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gY3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9ucy5tYXAoZnVuY3Rpb24oY3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgY3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9uUGFydHMgPSBjdXN0b21HcmFtbWFyUnVsZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBxdWFsaWZpY2F0aW9uUnVsZU5hbWUgPSAncXVhbGlmaWNhdGlvbicsICAvLy9cbiAgICAgICAgICBxdWFsaWZpY2F0aW9uUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChxdWFsaWZpY2F0aW9uUnVsZU5hbWUpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbGlmaWNhdGlvblJ1bGVOYW1lUGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHF1YWxpZmljYXRpb25SdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIGVuZE9mTGluZVBhcnQgPSBuZXcgRW5kT2ZMaW5lUGFydCgpLFxuICAgICAgICAgIHBhcnRzID0gW10uY29uY2F0KGN1c3RvbUdyYW1tYXJSdWxlRGVmaW5pdGlvblBhcnRzKS5jb25jYXQob3B0aW9uYWxRdWFsaWZpY2F0aW9uUnVsZU5hbWVQYXJ0KS5jb25jYXQoZW5kT2ZMaW5lUGFydCksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9KTtcblxuICByZXR1cm4gZGVmaW5pdGlvbnM7XG59XG4iXX0=