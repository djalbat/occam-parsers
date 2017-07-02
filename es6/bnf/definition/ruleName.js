'use strict';

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName');

class RuleNameDefinition extends Definition {
  constructor(ruleName) {
    const ruleNamePart = new RuleNamePart(ruleName),
          parts = [
            ruleNamePart
          ];
    
    super(parts)
  }
}

module.exports = RuleNameDefinition;
