'use strict';

const Rule = require('../rule'),
      SignificantTokenTypePart = require('../part/significantTokenType');

class ProductionRule extends Rule {
  constructor() {
    const noWhitespace = false,
          nameType = 'name',
          significantTokenTypePart = new SignificantTokenTypePart(nameType, noWhitespace),
          parts = [
            significantTokenTypePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionRule;
