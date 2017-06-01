'use strict';

const Rule = require('../rule'),
      SignificantTokenTypePart = require('../part/significantTokenType');

class ProductionNameRule extends Rule {
  constructor() {
    const noWhitespace = false,
          nameSignificantTokenType = 'name',
          nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType, noWhitespace),
          parts = [
            nameSignificantTokenTypePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionNameRule;
