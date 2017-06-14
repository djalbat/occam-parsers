'use strict';

const Definition = require('../definition'),
      OptionalPartPart = require('../part/optionalPart'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      ProductionNamePart = require('../part/productionName');

class DefinitionDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          verticalSpaceProductionName = 'verticalSpace',
          partProductionNamePart = new ProductionNamePart(partProductionName),
          verticalSpaceProductionNamePart = new ProductionNamePart(verticalSpaceProductionName),
          oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart),
          optionalVerticalSpaceProductionNamePartNoWhitespace = false,
          optionalVerticalSpaceProductionNamePartLazy = true,
          optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(verticalSpaceProductionNamePart, optionalVerticalSpaceProductionNamePartNoWhitespace, optionalVerticalSpaceProductionNamePartLazy),
          parts = [
            oneOrMorePartProductionNamePartsPart,
            optionalVerticalSpaceProductionNamePartPart
          ];

    super(parts)
  }
}

module.exports = DefinitionDefinition;
