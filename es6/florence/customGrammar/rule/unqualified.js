'use strict';

const Definition = require('../../../bnf/definition'),
      CustomGrammarRule = require('../../customGrammar/rule'),
      EndOfLinePart = require('../../../bnf/part/terminal/endOfLine');

class UnqualifiedCustomGrammarRule extends CustomGrammarRule {
  static fromRuleNameAndRule(ruleName, rule) { return CustomGrammarRule.fromRuleNameAndRule(UnqualifiedCustomGrammarRule, ruleName, rule); }

  static definitionsFromRuleDefinitions(ruleDefinitions) {
    const definitions = ruleDefinitions.map(function(ruleDefinition) {
      const ruleDefinitionParts = ruleDefinition.getParts(),
            endOfLinePart = new EndOfLinePart(),
            parts = [].concat(ruleDefinitionParts).concat(endOfLinePart),
            definition = new Definition(parts);

      return definition;
    });

    return definitions;
  }
}

module.exports = UnqualifiedCustomGrammarRule;
