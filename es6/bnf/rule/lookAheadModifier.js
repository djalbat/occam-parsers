'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionNode = require('../node/definition'),
      LookAheadModifierRuleDefinition = require('../definition/lookAheadModifierRule');

const { LookAheadModifierRuleName } = ruleNames;

class LookAheadModifierRule extends Rule {
  constructor() {
    const name = LookAheadModifierRuleName,
          lookAheadModifierRuleDefinition = new LookAheadModifierRuleDefinition(),
          definitions = [
            lookAheadModifierRuleDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = LookAheadModifierRule;
