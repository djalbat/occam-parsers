'use strict';

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName');

class PartRuleDefinition extends Definition {
  constructor(ruleName) {
    const rightRecursivePartRuleName = 'rightRecursivePart',
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
