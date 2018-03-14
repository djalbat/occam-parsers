'use strict';

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName');

const { RightRecursivePartRuleName } = ruleNames;

class PartRuleDefinition extends Definition {
  constructor(ruleName) {
    const noWhitespace = false,
          rightRecursivePartRuleName = RightRecursivePartRuleName,
          ruleNameRuleNamePart = new RuleNamePart(ruleName, noWhitespace),
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
          parts = [
            ruleNameRuleNamePart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = PartRuleDefinition;
