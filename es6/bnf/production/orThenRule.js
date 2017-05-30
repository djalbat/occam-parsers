'use strict';

const Production = require('../production'),
      OrThenRuleRule = require('../rule/orThenRule');

class OrThenRuleProduction extends Production {
  constructor() {
    const orThenRuleRule = new OrThenRuleRule(),
          name = 'rules',
          rules = [
            orThenRuleRule
          ],
          Node = null;
    
    super(name, rules, Node)
  }
}

module.exports = OrThenRuleProduction;
