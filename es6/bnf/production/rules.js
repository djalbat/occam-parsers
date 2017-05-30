'use strict';

const Production = require('../production'),
      RulesRule = require('../rule/rules');

class RulesProduction extends Production {
  constructor() {
    const rulesRule = new RulesRule(),
          name = 'rules',
          rules = [
            rulesRule
          ],
          Node = null;
    
    super(name, rules, Node)
  }
}

module.exports = RulesProduction;
