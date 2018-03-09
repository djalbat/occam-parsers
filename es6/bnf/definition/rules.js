'use strict';

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

const { RuleRuleName } = ruleNames;

class RulesDefinition extends Definition {
  constructor() {
    const ruleRuleName = RuleRuleName,
          ruleRuleNamePart = new RuleNamePart(ruleRuleName),
          oneOrMoreRuleRuleNamePartsPart = new OneOrMorePartsPart(ruleRuleNamePart),
          parts = [
            oneOrMoreRuleRuleNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = RulesDefinition;
