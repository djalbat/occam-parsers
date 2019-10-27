'use strict';

const Definition = require('../definition'),
      SignificantTokenTypePart = require('../part/terminal/significantTokenType');

class SignificantTokenTypeDefinition extends Definition {
  constructor(significantTokenType) {
    const nonWhitespace = false,
          significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, nonWhitespace),
          parts = [
            significantTokenTypePart
          ];
    
    super(parts)
  }
}

module.exports = SignificantTokenTypeDefinition;
