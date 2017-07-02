'use strict';

const Rule = require('../rule'),
      RulesNode = require('../node/rules'),
      RulesDefinition = require('../definition/rules');

class RulesRule extends Rule {
  constructor() {
    const rulesDefinition = new RulesDefinition(),
          name = 'rules',
          definitions = [
            rulesDefinition
          ],
          Node = RulesNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RulesRule;
