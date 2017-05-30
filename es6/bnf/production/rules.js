'use strict';

const Production = require('../production'),
      RulesRule = require('../rule/rules'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class RulesProduction extends Production {
  constructor() {
    const rulesRule = new RulesRule(),
          name = 'rules',
          rules = [
            rulesRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = RulesProduction;
