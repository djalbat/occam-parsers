'use strict';

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts');

class RulesDefinition extends Definition {
  constructor() {
    const ruleRuleName = 'rule',
          ruleRuleNamePart = new RuleNamePart(ruleRuleName),
          oneOrMoreRuleRuleNamePartsPart = new OneOrMorePartsPart(ruleRuleNamePart),
          parts = [
            oneOrMoreRuleRuleNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = RulesDefinition;
