'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../../bnf/rule'),
    Definition = require('../../../bnf/definition'),
    EndOfLinePart = require('../../../bnf/part/terminal/endOfLine');

var UnqualifiedCustomGrammarRule = function (_Rule) {
  _inherits(UnqualifiedCustomGrammarRule, _Rule);

  function UnqualifiedCustomGrammarRule() {
    _classCallCheck(this, UnqualifiedCustomGrammarRule);

    return _possibleConstructorReturn(this, (UnqualifiedCustomGrammarRule.__proto__ || Object.getPrototypeOf(UnqualifiedCustomGrammarRule)).apply(this, arguments));
  }

  _createClass(UnqualifiedCustomGrammarRule, null, [{
    key: 'fromRuleNameAndCustomGrammarRule',
    value: function fromRuleNameAndCustomGrammarRule(ruleName, customGrammarRule) {
      var customGrammarRuleNonTerminalNode = customGrammarRule.getNonTerminalNode(),
          customGrammarRuleDefinitions = customGrammarRule.getDefinitions(),
          name = ruleName,
          ///
      definitions = definitionsFromCustomGrammarRuleDefinitions(customGrammarRuleDefinitions),
          NonTerminalNode = customGrammarRuleNonTerminalNode,
          ///
      unqualifiedCustomGrammarRule = new UnqualifiedCustomGrammarRule(name, definitions, NonTerminalNode);

      return unqualifiedCustomGrammarRule;
    }
  }]);

  return UnqualifiedCustomGrammarRule;
}(Rule);

module.exports = UnqualifiedCustomGrammarRule;

function definitionsFromCustomGrammarRuleDefinitions(customGrammarRuleDefinitions) {
  var definitions = customGrammarRuleDefinitions.map(function (customGrammarRuleDefinition) {
    var customGrammarRuleDefinitionParts = customGrammarRuleDefinition.getParts(),
        endOfLinePart = new EndOfLinePart(),
        parts = [].concat(customGrammarRuleDefinitionParts).concat(endOfLinePart),
        definition = new Definition(parts);

    return definition;
  });

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ydWxlL2N1c3RvbUdyYW1tYXIvdW5xdWFsaWZpZWQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiRW5kT2ZMaW5lUGFydCIsIlVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUiLCJydWxlTmFtZSIsImN1c3RvbUdyYW1tYXJSdWxlIiwiY3VzdG9tR3JhbW1hclJ1bGVOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJjdXN0b21HcmFtbWFyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0Zyb21DdXN0b21HcmFtbWFyUnVsZURlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwidW5xdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXAiLCJjdXN0b21HcmFtbWFyUnVsZURlZmluaXRpb24iLCJjdXN0b21HcmFtbWFyUnVsZURlZmluaXRpb25QYXJ0cyIsImdldFBhcnRzIiwiZW5kT2ZMaW5lUGFydCIsInBhcnRzIiwiY29uY2F0IiwiZGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLG1CQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLHlCQUFSLENBRG5CO0FBQUEsSUFFTUUsZ0JBQWdCRixRQUFRLHNDQUFSLENBRnRCOztJQUlNRyw0Qjs7Ozs7Ozs7Ozs7cURBQ29DQyxRLEVBQVVDLGlCLEVBQW1CO0FBQ25FLFVBQU1DLG1DQUFtQ0Qsa0JBQWtCRSxrQkFBbEIsRUFBekM7QUFBQSxVQUNNQywrQkFBK0JILGtCQUFrQkksY0FBbEIsRUFEckM7QUFBQSxVQUVNQyxPQUFPTixRQUZiO0FBQUEsVUFFd0I7QUFDbEJPLG9CQUFjQyw0Q0FBNENKLDRCQUE1QyxDQUhwQjtBQUFBLFVBSU1LLGtCQUFrQlAsZ0NBSnhCO0FBQUEsVUFJMEQ7QUFDcERRLHFDQUErQixJQUFJWCw0QkFBSixDQUFpQ08sSUFBakMsRUFBdUNDLFdBQXZDLEVBQW9ERSxlQUFwRCxDQUxyQzs7QUFPQSxhQUFPQyw0QkFBUDtBQUNEOzs7O0VBVndDZixJOztBQWEzQ2dCLE9BQU9DLE9BQVAsR0FBaUJiLDRCQUFqQjs7QUFFQSxTQUFTUywyQ0FBVCxDQUFxREosNEJBQXJELEVBQW1GO0FBQ2pGLE1BQU1HLGNBQWNILDZCQUE2QlMsR0FBN0IsQ0FBaUMsVUFBU0MsMkJBQVQsRUFBc0M7QUFDekYsUUFBTUMsbUNBQW1DRCw0QkFBNEJFLFFBQTVCLEVBQXpDO0FBQUEsUUFDTUMsZ0JBQWdCLElBQUluQixhQUFKLEVBRHRCO0FBQUEsUUFFTW9CLFFBQVEsR0FBR0MsTUFBSCxDQUFVSixnQ0FBVixFQUE0Q0ksTUFBNUMsQ0FBbURGLGFBQW5ELENBRmQ7QUFBQSxRQUdNRyxhQUFhLElBQUl2QixVQUFKLENBQWVxQixLQUFmLENBSG5COztBQUtBLFdBQU9FLFVBQVA7QUFDRCxHQVBtQixDQUFwQjs7QUFTQSxTQUFPYixXQUFQO0FBQ0QiLCJmaWxlIjoidW5xdWFsaWZpZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi8uLi9ibmYvcnVsZScpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9kZWZpbml0aW9uJyksXG4gICAgICBFbmRPZkxpbmVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vLi4vYm5mL3BhcnQvdGVybWluYWwvZW5kT2ZMaW5lJyk7XG5cbmNsYXNzIFVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZEN1c3RvbUdyYW1tYXJSdWxlKHJ1bGVOYW1lLCBjdXN0b21HcmFtbWFyUnVsZSkge1xuICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJSdWxlTm9uVGVybWluYWxOb2RlID0gY3VzdG9tR3JhbW1hclJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9ucyA9IGN1c3RvbUdyYW1tYXJSdWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc0Zyb21DdXN0b21HcmFtbWFyUnVsZURlZmluaXRpb25zKGN1c3RvbUdyYW1tYXJSdWxlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IGN1c3RvbUdyYW1tYXJSdWxlTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICB1bnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlID0gbmV3IFVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gdW5xdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGU7XG5cbmZ1bmN0aW9uIGRlZmluaXRpb25zRnJvbUN1c3RvbUdyYW1tYXJSdWxlRGVmaW5pdGlvbnMoY3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9ucykge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IGN1c3RvbUdyYW1tYXJSdWxlRGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uKGN1c3RvbUdyYW1tYXJSdWxlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJSdWxlRGVmaW5pdGlvblBhcnRzID0gY3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUGFydCA9IG5ldyBFbmRPZkxpbmVQYXJ0KCksXG4gICAgICAgICAgcGFydHMgPSBbXS5jb25jYXQoY3VzdG9tR3JhbW1hclJ1bGVEZWZpbml0aW9uUGFydHMpLmNvbmNhdChlbmRPZkxpbmVQYXJ0KSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9ucztcbn1cbiJdfQ==