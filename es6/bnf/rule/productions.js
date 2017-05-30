'use strict';

const Rule = require('../rule'),
      ZeroOrMorePartsPart = require('../part/zeroOrMoreParts');

class ProductionsRule extends Rule {
  constructor() {
    const terminalPart = null,
          noWhitespace = false, 
          productionProductionName = 'production',
          zeroOrMoreProductionProductionNamePartsPart = new ZeroOrMorePartsPart(terminalPart, productionProductionName, noWhitespace),
          parts = [
            zeroOrMoreProductionProductionNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = ProductionsRule;
