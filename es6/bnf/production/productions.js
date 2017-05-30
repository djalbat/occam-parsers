'use strict';

const Production = require('../production'),
      ProductionsRule = require('../rule/productions'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionsProduction extends Production {
  constructor() {
    const productionsRule = new ProductionsRule(),
          name = 'productions',
          rules = [
            productionsRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = ProductionsProduction;
