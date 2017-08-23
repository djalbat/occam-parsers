'use strict';

const Definition = require('../../../bnf/definition'),
      CustomGrammarRule = require('../../customGrammar/rule'),
      RuleNamePart = require('../../../bnf/part/nonTerminal/ruleName'),
      EndOfLinePart = require('../../../bnf/part/terminal/endOfLine'),
      OptionalPartPart = require('../../../bnf/part/nonTerminal/optionalPart');

class QualifiedCustomGrammarRule extends CustomGrammarRule {
  static fromRuleNameAndRule(ruleName, rule) { return CustomGrammarRule.fromRuleNameAndRule(QualifiedCustomGrammarRule, ruleName, rule); }

  static definitionsFromRuleDefinitions(ruleDefinitions) {
    const definitions = ruleDefinitions.map(function(ruleDefinition) {
      const ruleDefinitionParts = ruleDefinition.getParts(),
            qualificationRuleName = 'qualification',  ///
            qualificationRuleNamePart = new RuleNamePart(qualificationRuleName),
            optionalQualificationRuleNamePart = new OptionalPartPart(qualificationRuleNamePart),
            endOfLinePart = new EndOfLinePart(),
            parts = [].concat(ruleDefinitionParts).concat(optionalQualificationRuleNamePart).concat(endOfLinePart),
            definition = new Definition(parts);

      return definition;
    });

    return definitions;
  }
}

module.exports = QualifiedCustomGrammarRule;
