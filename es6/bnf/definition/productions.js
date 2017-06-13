'use strict';

const Definition = require('../definition'),
      OptionalPartPart = require('../part/optionalPart'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      ProductionNamePart = require('../../common/part/productionName');

class ProductionsDefinition extends Definition {
  constructor() {
    const noWhitespace = false, 
          productionProductionName = 'production',
          verticalSpaceProductionName = 'verticalSpace',
          productionProductionNamePart = new ProductionNamePart(productionProductionName, noWhitespace),
          verticalSpaceProductionNamePart = new ProductionNamePart(verticalSpaceProductionName, noWhitespace),
          optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(verticalSpaceProductionNamePart, noWhitespace),
          oneOrMoreProductionProductionNamePartsPart = new OneOrMorePartsPart(productionProductionNamePart, noWhitespace),
          parts = [
            optionalVerticalSpaceProductionNamePartPart,
            oneOrMoreProductionProductionNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = ProductionsDefinition;
