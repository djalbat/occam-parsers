'use strict';

const Rule = require('../rule'),
      SignificantTokenTypePart = require('../../common/part/significantTokenType');

class SignificantTokenTypeRule extends Rule {
  constructor(significantTokenType) {
    const noWhitespace = false,
          significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, noWhitespace),
          parts = [
            significantTokenTypePart
          ];
    
    super(parts)
  }
}

module.exports = SignificantTokenTypeRule;
