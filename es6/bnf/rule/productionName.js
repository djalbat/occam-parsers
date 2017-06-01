'use strict';

const Rule = require('../rule'),
      ProductionNamePart = require('../../common/part/productionName');

class ProductionNameRule extends Rule {
  constructor(productionName) {
    const noWhitespace = false,
          productionNamePart = new ProductionNamePart(productionName, noWhitespace),
          parts = [
            productionNamePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionNameRule;
