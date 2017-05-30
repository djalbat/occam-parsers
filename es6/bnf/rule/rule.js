'use strict';

const Rule = require('../rule'),
      ProductionNamePart = require('../part/productionName');

class RuleRule extends Rule {
  constructor() {
    const noWhitespace = false,
          partsProductionName = 'parts',
          partsProductionNamePart = new ProductionNamePart(partsProductionName, noWhitespace),
          parts = [
            partsProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = RuleRule;
