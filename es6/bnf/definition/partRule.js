'use strict';

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
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
