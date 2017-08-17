'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      RulesNode = require('../node/rules'),
      RulesDefinition = require('../definition/rules');

class RulesRule extends Rule {
  constructor() {
    const rulesDefinition = new RulesDefinition(),
          name = ruleNames.RulesRule,
          definitions = [
            rulesDefinition
          ],
          Node = RulesNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RulesRule;
