'use strict';

const Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName');

class PartRuleDefinition extends Definition {
  constructor(ruleName) {
    const rightRecursivePartRuleName = 'part~', ///
          ruleNameRuleNamePart = new RuleNamePart(ruleName),
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
          parts = [
            ruleNameRuleNamePart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = PartRuleDefinition;
