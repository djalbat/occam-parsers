'use strict';

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

const { PartRuleName } = ruleNames;

class DefinitionDefinition extends Definition {
  constructor() {
    const lookAhead = false,
          noWhitespace = false,
          partRuleName = PartRuleName,
          partRuleNamePart = new RuleNamePart(partRuleName, lookAhead, noWhitespace),
          oneOrMoreRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
          parts = [
            oneOrMoreRuleNamePartsPart
          ];

    super(parts)
  }
}

module.exports = DefinitionDefinition;
