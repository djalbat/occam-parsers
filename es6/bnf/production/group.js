'use strict';

const Production = require('../production'),
      GroupRule = require('../rule/group'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class GroupProduction extends Production {
  constructor() {
    const productionRule = new GroupRule(),
          name = 'group',
          rules = [
            productionRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = GroupProduction;
