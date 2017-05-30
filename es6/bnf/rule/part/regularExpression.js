'use strict';

const Rule = require('../../rule'),
      RegularExpressionPart = require('../../part/regularExpression');

class RegularExpressionPartRule extends Rule {
  constructor() {
    const noWhitespace = false,
          regularExpressionPart = new RegularExpressionPart(noWhitespace),
          parts = [
            regularExpressionPart
          ];
    
    super(parts)
  }
}

module.exports = RegularExpressionPartRule;
