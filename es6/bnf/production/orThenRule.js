'use strict';

const Production = require('../production'),
      OrThenRuleRule = require('../rule/orThenRule'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class OrThenRuleProduction extends Production {
  constructor() {
    const orThenRuleRule = new OrThenRuleRule(),
          name = 'rules',
          rules = [
            orThenRuleRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = OrThenRuleProduction;
