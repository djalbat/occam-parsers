'use strict';

const Production = require('../production'),
      RuleRule = require('../rule/rule');

class RuleProduction extends Production {
  constructor() {
    const name = 'rules',
          ruleRule = new RuleRule(),
          rules = [
            ruleRule
          ],
          Node = null;
    
    super(name, rules, Node)
  }
}

module.exports = RuleProduction;
