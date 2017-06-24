'use strict';

const Rule = require('../rule'),
      RuleNode = require('../node/rule'),
      RuleDefinition = require('../definition/rule');

class RuleRule extends Rule {
  constructor() {
    const ruleDefinition = new RuleDefinition(),
          name = 'rule',
          definitions = [
            ruleDefinition
          ],
          Node = RuleNode;
    
    super(name, definitions, Node);
  }
}

module.exports = RuleRule;
