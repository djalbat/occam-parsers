'use strict';

const Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName');

class RuleNameDefinition extends Definition {
  constructor(ruleName) {
    const noWhitespace = false,
          ruleNamePart = new RuleNamePart(ruleName, noWhitespace),
          parts = [
            ruleNamePart
          ];
    
    super(parts)
  }
}

module.exports = RuleNameDefinition;
