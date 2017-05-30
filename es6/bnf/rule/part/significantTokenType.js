'use strict';

const Rule = require('../rule'),
      SignificantTokenTypePart = require('../../part/significantTokenType');

class SignificantTokenTypePartRule extends Rule {
  constructor() {
    const noWhitespace = false,
          significantTokenPart = new SignificantTokenTypePart(noWhitespace),
          parts = [
            significantTokenPart
          ];
    
    super(parts)
  }
}

module.exports = SignificantTokenTypePartRule;
