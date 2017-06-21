'use strict';

const Definition = require('../definition'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      ProductionNamePart = require('../part/productionName');

class ProductionsDefinition extends Definition {
  constructor() {
    const productionProductionName = 'production',
          productionProductionNamePart = new ProductionNamePart(productionProductionName),
          oneOrMoreProductionProductionNamePartsPart = new OneOrMorePartsPart(productionProductionNamePart),
          parts = [
            oneOrMoreProductionProductionNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = ProductionsDefinition;
