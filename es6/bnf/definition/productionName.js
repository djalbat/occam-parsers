'use strict';

const Definition = require('../definition'),
      ProductionNamePart = require('../../common/part/productionName');

class ProductionNameDefinition extends Definition {
  constructor(productionName) {
    const noWhitespace = false,
          productionNamePart = new ProductionNamePart(productionName, noWhitespace),
          parts = [
            productionNamePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionNameDefinition;
