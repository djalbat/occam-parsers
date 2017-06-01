'use strict';

const Rule = require('../rule'),
      ProductionNamePart = require('../part/productionName');

class ProductionNameProductionNameRule extends Rule {
  constructor() {
    const noWhitespace = false,
          productionNameProductionName = 'productionName',
          productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName, noWhitespace),
          parts = [
            productionNameProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionNameProductionNameRule;
