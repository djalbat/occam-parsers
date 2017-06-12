'use strict';

const Definition = require('../definition'),
      ProductionNamePart = require('../../common/part/productionName');

class DefinitionsDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          definitionProductionName = 'definition',
          definitionProductionNamePart = new ProductionNamePart(definitionProductionName, noWhitespace),
          parts = [
            definitionProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = DefinitionsDefinition;
