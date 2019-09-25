'use strict';

const Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName');

class RuleNameDefinition extends Definition {
  constructor(ruleName) {
    const ruleNameRuleNamePart = new RuleNamePart(ruleName),
          parts = [
            ruleNameRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = RuleNameDefinition;
