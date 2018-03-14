'use strict';

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

const { RuleRuleName } = ruleNames;

class RulesDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          ruleRuleName = RuleRuleName,
          ruleRuleNamePart = new RuleNamePart(ruleRuleName, noWhitespace),
          oneOrMoreRuleRuleNamePartsPart = new OneOrMorePartsPart(ruleRuleNamePart, noWhitespace),
          parts = [
            oneOrMoreRuleRuleNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = RulesDefinition;
