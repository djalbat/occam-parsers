'use strict';

const Rule = require('../rule'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts');

class ProductionsRule extends Rule {
  constructor() {
    const terminalPart = null,
          noWhitespace = false, 
          productionProductionName = 'production',
          oneOrMoreProductionProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, productionProductionName, noWhitespace),
          parts = [
            oneOrMoreProductionProductionNamePartsPart 
          ];
    
    super(parts)
  }
}

module.exports = ProductionsRule;
