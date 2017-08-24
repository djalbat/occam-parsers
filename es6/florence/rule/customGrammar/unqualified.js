'use strict';

const Rule = require('../../../bnf/rule'),
      Definition = require('../../../bnf/definition'),
      EndOfLinePart = require('../../../bnf/part/terminal/endOfLine');

class UnqualifiedCustomGrammarRule extends Rule {
  static fromRuleNameAndCustomGrammarRule(ruleName, customGrammarRule) {
    const customGrammarRuleNonTerminalNode = customGrammarRule.getNonTerminalNode(),
          customGrammarRuleDefinitions = customGrammarRule.getDefinitions(),
          name = ruleName,  ///
          definitions = definitionsFromCustomGrammarRuleDefinitions(customGrammarRuleDefinitions),
          NonTerminalNode = customGrammarRuleNonTerminalNode, ///
          unqualifiedCustomGrammarRule = new UnqualifiedCustomGrammarRule(name, definitions, NonTerminalNode);

    return unqualifiedCustomGrammarRule;
  }
}

module.exports = UnqualifiedCustomGrammarRule;

function definitionsFromCustomGrammarRuleDefinitions(customGrammarRuleDefinitions) {
  const definitions = customGrammarRuleDefinitions.map(function(customGrammarRuleDefinition) {
    const customGrammarRuleDefinitionParts = customGrammarRuleDefinition.getParts(),
          endOfLinePart = new EndOfLinePart(),
          parts = [].concat(customGrammarRuleDefinitionParts).concat(endOfLinePart),
          definition = new Definition(parts);

    return definition;
  });

  return definitions;
}
