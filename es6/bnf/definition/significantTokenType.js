'use strict';

const Definition = require('../definition'),
      SignificantTokenTypePart = require('../part/significantTokenType');

class SignificantTokenTypeDefinition extends Definition {
  constructor(significantTokenType) {
    const significantTokenTypePart = new SignificantTokenTypePart(significantTokenType),
          parts = [
            significantTokenTypePart
          ];
    
    super(parts)
  }
}

module.exports = SignificantTokenTypeDefinition;
