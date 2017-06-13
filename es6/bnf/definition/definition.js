'use strict';

const Definition = require('../definition'),
      OptionalPartPart = require('../part/optionalPart'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      ProductionNamePart = require('../../common/part/productionName');

class DefinitionDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          partProductionName = 'part',
          verticalSpaceProductionName = 'verticalSpace',
          partProductionNamePart = new ProductionNamePart(partProductionName, noWhitespace),
          verticalSpaceProductionNamePart = new ProductionNamePart(verticalSpaceProductionName, noWhitespace),
          oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart, noWhitespace),
          optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(verticalSpaceProductionNamePart, noWhitespace),
          parts = [
            oneOrMorePartProductionNamePartsPart,
            optionalVerticalSpaceProductionNamePartPart
          ];

    super(parts)
  }
}

module.exports = DefinitionDefinition;
