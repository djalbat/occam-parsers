'use strict';

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts');

class DefinitionDefinition extends Definition {
  constructor() {
    const partRuleName = 'part',
          partRuleNamePart = new RuleNamePart(partRuleName),
          oneOrMoreRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
          parts = [
            oneOrMoreRuleNamePartsPart
          ];

    super(parts)
  }
}

module.exports = DefinitionDefinition;
