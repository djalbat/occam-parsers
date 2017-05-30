'use strict';

const Production = require('../production'),
      ProductionsRule = require('../rule/productions');

class ProductionsProduction extends Production {
  constructor() {
    const productionsRule = new ProductionsRule(),
          name = 'productions',
          rules = [
            productionsRule
          ],
          Node = null;
    
    super(name, rules, Node)
  }
}

module.exports = ProductionsProduction;
