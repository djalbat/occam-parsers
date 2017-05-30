'use strict';

const Production = require('../production'),
      RuleRule = require('../rule/rule'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class RuleProduction extends Production {
  constructor() {
    const name = 'rule',
          ruleRule = new RuleRule(),
          rules = [
            ruleRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = RuleProduction;
