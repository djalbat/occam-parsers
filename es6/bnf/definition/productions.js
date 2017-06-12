'use strict';

const Definition = require('../definition'),
      OneOrMorePartsPart = require('../../common/part/oneOrMoreParts');

class ProductionsDefinition extends Definition {
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

module.exports = ProductionsDefinition;
