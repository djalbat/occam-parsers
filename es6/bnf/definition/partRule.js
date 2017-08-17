'use strict';

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName');

class PartRuleDefinition extends Definition {
  constructor(ruleName) {
    const rightRecursivePartRuleName = ruleNames.RightRecursivePartRule,
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
