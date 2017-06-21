'use strict';

const Definition = require('../definition'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      ProductionNamePart = require('../part/productionName');

class DefinitionDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          partProductionNamePart = new ProductionNamePart(partProductionName),
          oneOrMoreProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart),
          parts = [
            oneOrMoreProductionNamePartsPart
          ];

    super(parts)
  }
}

module.exports = DefinitionDefinition;
