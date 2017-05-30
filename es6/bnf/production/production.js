'use strict';

const Production = require('../production'),
      ProductionRule = require('../rule/production'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionProduction extends Production {
  constructor() {
    const productionRule = new ProductionRule(),
          name = 'production',
          rules = [
            productionRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = ProductionProduction;
