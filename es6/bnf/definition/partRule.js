'use strict';

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
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
