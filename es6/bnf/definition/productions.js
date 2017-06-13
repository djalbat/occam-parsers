'use strict';

const Definition = require('../definition'),
      OptionalPartPart = require('../part/optionalPart'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      ProductionNamePart = require('../../common/part/productionName');

class ProductionsDefinition extends Definition {
  constructor() {
    const productionProductionName = 'production',
          verticalSpaceProductionName = 'verticalSpace',
          productionProductionNamePart = new ProductionNamePart(productionProductionName),
          verticalSpaceProductionNamePart = new ProductionNamePart(verticalSpaceProductionName),
          optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(verticalSpaceProductionNamePart),
          oneOrMoreProductionProductionNamePartsPart = new OneOrMorePartsPart(productionProductionNamePart),
          parts = [
            optionalVerticalSpaceProductionNamePartPart,
            oneOrMoreProductionProductionNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = ProductionsDefinition;
