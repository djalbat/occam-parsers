'use strict';

const Production = require('../production'),
      ProductionNameRule = require('../rule/productionName'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionNameProduction extends Production {
  constructor() {
    const productionNameRule = new ProductionNameRule(),
          name = 'productionName',
          rules = [
            productionNameRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = ProductionNameProduction;
