'use strict';

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName');

const { RightRecursivePartRuleName } = ruleNames;

class PartRuleDefinition extends Definition {
  constructor(ruleName) {
    const rightRecursivePartRuleName = RightRecursivePartRuleName,
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
