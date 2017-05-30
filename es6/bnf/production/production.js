'use strict';

const Production = require('../production'),
      ProductionRule = require('../rule/production');

class ProductionProduction extends Production {
  constructor() {
    const productionRule = new ProductionRule(),
          name = 'production',
          rules = [
            productionRule
          ],
          Node = null;
    
    super(name, rules, Node)
  }
}

module.exports = ProductionProduction;
