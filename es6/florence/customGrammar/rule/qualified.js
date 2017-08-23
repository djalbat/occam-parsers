'use strict';

const Definition = require('../../../bnf/definition'),
      CustomGrammarRule = require('../../customGrammar/rule'),
      EndOfLinePart = require('../../../bnf/part/terminal/endOfLine'),
      QualificationRuleNamePart = require('../part/qualificationRuleName');

class QualifiedCustomGrammarRule extends CustomGrammarRule {
  static fromRuleNameAndRule(ruleName, rule) { return CustomGrammarRule.fromRuleNameAndRule(QualifiedCustomGrammarRule, ruleName, rule); }

  static definitionsFromRuleDefinitions(ruleDefinitions) {
    const definitions = ruleDefinitions.map(function(ruleDefinition) {
      const ruleDefinitionParts = ruleDefinition.getParts(),
            qualificationRuleNamePart = new QualificationRuleNamePart(),
            endOfLinePart = new EndOfLinePart(),
            parts = [].concat(ruleDefinitionParts).concat(qualificationRuleNamePart).concat(endOfLinePart),
            definition = new Definition(parts);

      return definition;
    });

    return definitions;
  }
}

module.exports = QualifiedCustomGrammarRule;
