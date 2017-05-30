'use strict';

const Rule = require('../../rule'),
      ProductionNamePart = require('../../part/productionName');

class ProductionNamePartRule extends Rule {
  constructor() {
    const noWhitespace = false,
          productionNamePart = new ProductionNamePart(noWhitespace),
          parts = [
            productionNamePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionNamePartRule;
