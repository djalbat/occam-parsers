'use strict';

const Rule = require('../../../bnf/rule'),
      Definition = require('../../../bnf/definition'),
      RuleNamePart = require('../../../bnf/part/nonTerminal/ruleName'),
      EndOfLinePart = require('../../../bnf/part/terminal/endOfLine'),
      OptionalPartPart = require('../../../bnf/part/nonTerminal/optionalPart');

class QualifiedCustomGrammarRule extends Rule {
  static fromRuleNameAndCustomGrammarRule(ruleName, customGrammarRule) {
    const customGrammarRuleNonTerminalNode = customGrammarRule.getNonTerminalNode(),
          customGrammarRuleDefinitions = customGrammarRule.getDefinitions(),
          name = ruleName,  ///
          definitions = definitionsFromCustomGrammarRuleDefinitions(customGrammarRuleDefinitions),
          NonTerminalNode = customGrammarRuleNonTerminalNode, ///
          qualifiedCustomGrammarRule = new QualifiedCustomGrammarRule(name, definitions, NonTerminalNode);

    return qualifiedCustomGrammarRule;
  }
}

module.exports = QualifiedCustomGrammarRule;

function definitionsFromCustomGrammarRuleDefinitions(customGrammarRuleDefinitions) {
  const definitions = customGrammarRuleDefinitions.map(function(customGrammarRuleDefinition) {
    const customGrammarRuleDefinitionParts = customGrammarRuleDefinition.getParts(),
          qualificationRuleName = 'qualification',  ///
          qualificationRuleNamePart = new RuleNamePart(qualificationRuleName),
          optionalQualificationRuleNamePart = new OptionalPartPart(qualificationRuleNamePart),
          endOfLinePart = new EndOfLinePart(),
          parts = [].concat(customGrammarRuleDefinitionParts).concat(optionalQualificationRuleNamePart).concat(endOfLinePart),
          definition = new Definition(parts);

    return definition;
  });

  return definitions;
}
