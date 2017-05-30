'use strict';

const Rule = require('../../rule'),
      OptionalPart = require('../../part/optionalPart');

class OptionalPartRule extends Rule {
  constructor() {
    const noWhitespace = false,
          optionalPart = new OptionalPart(noWhitespace),
          parts = [
            optionalPart
          ];
    
    super(parts)
  }
}

module.exports = OptionalPartRule;
