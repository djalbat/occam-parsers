'use strict';

const Rule = require('../../rule'),
      SignificantTokenTypePart = require('../../part/significantTokenType');

class RegularExpressionSignificantTokenTypeRule extends Rule {
  constructor() {
    const noWhitespace = false,
          regularExpressionSignificantTokenType = 'regularExpression',
          regularExpressionSignificantTokenTypePart = new SignificantTokenTypePart(regularExpressionSignificantTokenType, noWhitespace),
          parts = [
            regularExpressionSignificantTokenTypePart
          ];

    super(parts)
  }
}

module.exports = RegularExpressionSignificantTokenTypeRule;
