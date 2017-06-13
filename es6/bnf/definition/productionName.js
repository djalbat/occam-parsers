'use strict';

const Definition = require('../definition'),
      ProductionNamePart = require('../../common/part/productionName');

class ProductionNameDefinition extends Definition {
  constructor(productionName) {
    const productionNamePart = new ProductionNamePart(productionName),
          parts = [
            productionNamePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionNameDefinition;
